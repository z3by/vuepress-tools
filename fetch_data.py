import base64
import json
import os
import re
import math

from github import Github, UnknownObjectException
import yaml

GITHUB_TOKEN = os.environ['GITHUB_TOKEN']
github = Github(GITHUB_TOKEN)

def main():
    plugins = fetch('vuepress-plugin')
    themes = fetch('vuepress-theme')
    render(plugins, 'plugins', allowed_patterns=[r'^vuepress-plugin-'])
    render(themes, 'themes', allowed_patterns=[r'^vuepress-theme-'])

def render(repos, folder, allowed_patterns=[], update_sidebar=True):
    excluded = [
        'vuepress-plugin-awesome-gitalk',
        'vuepress-plugin-awesome-playground',
        'vuepress-plugin-live2d-helper',
        'vuepress-plugin-live2d',
    ]
    sidebar = []
    for repo in repos:
        if repo.name in excluded:
            continue
        for pattern in allowed_patterns:
            if re.match(pattern, repo.name):
                name = f'{folder}/{repo.name}.md'
                # page = convert_repo_to_markdown_page(repo, name)
                if update_sidebar:
                    sidebar.append(repo.name)
    if sidebar:
        with open(f'.vuepress/sidebar/{folder}.js', 'w+') as f:
            f.write(f'module.exports = {sidebar}')


def fetch(github_query):
    query = github.search_repositories(github_query, sort='stars')
    per_page = 30
    print(f'🔎 found {query.totalCount} repositories for {github_query}')
    number_of_pages = math.ceil(query.totalCount / per_page)
    all_repos = []
    for page in range(1, number_of_pages + 1):
        repos = query.get_page(page)
        all_repos += repos
    print('⬇️ fetched all pages for ', github_query)
    return all_repos


def convert_repo_to_markdown_page(github_repo, output_path):
    readme = None
    try:
        readme = github_repo.get_readme()
    except UnknownObjectException as e:
        print('❌ No readme found for ', output_path)

    with open(output_path, 'w+') as f: 
        f.write('---\n') 
        f.write(yaml.dump(github_repo.raw_data))
        f.write('---\n\n')

    if readme:
        content = base64.b64decode(readme.content).decode('utf-8')
        links = [link[2:-1] for link in re.findall(r'\]\(\..*?\)', content) if link]
        for link in links:
            content = content.replace(link, f'https://raw.githubusercontent.com/{github_repo.owner.name}/{github_repo.name}/{github_repo.default_branch}/{link[2:]}')
        links = [link[5:-1] for link in re.findall(r'src="\./.*?"', content) if link]
        for link in links:
            content = content.replace(link, f'https://raw.githubusercontent.com/{github_repo.owner.name}/{github_repo.name}/{github_repo.default_branch}/{link[2:]}')
        with open(output_path, 'a+') as f:
            f.write(content)
    print('✅ generated ', output_path)


if __name__ == '__main__':
    main()
