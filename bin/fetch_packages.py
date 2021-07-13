import os
from base64 import b64decode
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Optional

import requests
import yaml

BASE_DIR = Path(__file__).parent.parent
GITHUB_USER = os.environ["GITHUB_USER"]
GITHUB_TOKEN = os.environ["GITHUB_TOKEN"]


@dataclass
class User:
    username: Optional[str] = None
    email: Optional[str] = None
    name: Optional[str] = None
    url: Optional[str] = None
    avatar: Optional[str] = None


@dataclass
class Package:
    name: str
    description: str
    version: str
    date: str
    npm: str
    author: User
    publisher: User
    category: str
    stars: int = 0
    watchers: int = 0
    score: float = 0.0
    repository: str = ""
    keywords: Optional[list] = None
    maintainers: Optional[list[User]] = None
    unstable: bool = False
    deprecated: bool = False
    downloads: Optional[int] = None
    license: Optional[str] = None
    homepage: Optional[str] = None
    bugs: Optional[str] = None

    def get_frontmatter(self) -> str:
        yml: str = yaml.dump(asdict(self), default_flow_style=False)
        return "\n".join(["---", yml, "---\n\n"])

    def get_clean_package_name(self) -> str:
        return self.name.replace("/", "-")

    def is_excluded(self) -> bool:
        excluded_cases = [
            self.category not in self.name,
            self.repository == "",
            "github" not in self.repository,
            self.deprecated,
        ]
        return any(excluded_cases)

    def get_repo(self):
        url = self.repository.replace("github.com", "api.github.com/repos")
        r = requests.get(
            url,
            headers={"Accept": "application/vnd.github.v3+json"},
            auth=(GITHUB_USER, GITHUB_TOKEN),
        )
        data = r.json()
        if not self.author.username:
            self.author.username = data.get("owner", {}).get("login")
        self.author.avatar = data.get("owner", {}).get("avatar_url")
        self.watchers = data["watchers_count"]
        self.stars = data["stargazers_count"]
        self.license = data.get("license", {}) is not None and data.get(
            "license", {}
        ).get("name")

    def get_readme(self) -> str:
        url = self.repository.replace("github.com", "api.github.com/repos") + "/readme"
        r = requests.get(
            url,
            headers={"Accept": "application/vnd.github.v3+json"},
            auth=(GITHUB_USER, GITHUB_TOKEN),
        )
        readme = r.json()
        file_content = b64decode(readme.get("content", b"")).decode("utf-8")
        return file_content

    def save(self, relative_path: str) -> None:
        pkg_name = self.get_clean_package_name()
        path = BASE_DIR / relative_path / pkg_name
        if self.is_excluded():
            return
        with open(f"{path}.md", "w") as f:
            content = self.get_frontmatter() + self.get_readme()
            f.write(content)


def construct_package(data: dict, category: str = "") -> Package:
    package = data["package"]
    publisher = User(**package.get("publisher", {}))
    author = User(**package.get("author", {}))
    unstable = bool(data.get("flags", {}).get("unstable", False))
    deprecated = bool(data.get("flags", {}).get("deprecated", False))
    pkg = Package(
        name=package["name"],
        description=package.get("description"),
        version=package["version"],
        date=package["date"],
        keywords=package.get("keywords"),
        category=category,
        score=data["score"]["final"],
        publisher=publisher,
        author=author,
        unstable=unstable,
        deprecated=deprecated,
        **package["links"],
    )
    try:
        pkg.get_repo()
    except Exception:
        pass
    return pkg


def get_total_packages(query: str, base_url: str) -> int:
    from_ = 0
    api_url = f"{base_url}?from={from_}&q={query}&size=100"
    r = requests.get(api_url)
    data = r.json()
    return data["total"]


def fetch_packages(query: str):
    base_url = "https://api.npms.io/v2/search"
    total = get_total_packages(query, base_url)
    for i in range(0, total, 100):
        api_url = f"{base_url}?from={i}&q={query}&size=100"
        r = requests.get(api_url)
        data = r.json()
        yield from data["results"]


def remove_current_packages() -> None:
    content_path = BASE_DIR / "content"
    for p in content_path.glob("**/*.md"):
        p.unlink()


def write_packages(pkg_type: str) -> None:
    for package in fetch_packages(f"vuepress-{pkg_type}"):
        pkg = construct_package(package, category=pkg_type)
        pkg.save(f"content/{pkg_type}s")


if __name__ == "__main__":
    remove_current_packages()
    write_packages("plugin")
    write_packages("theme")
