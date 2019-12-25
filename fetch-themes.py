import base64
import json
import os
import re

from github import Github
import yaml

# using username and password
g = Github(login_or_token=os.getenv('gh_access_token'))

with open('data.json') as data: 
    themes = json.loads(data.read()) 
    themes = [th for th in themes if th['name'].startswith('vuepress-theme-')] 
    for theme in themes: 
        name = theme['name'] + '.md' 
        repo = g.get_repo(full_name_or_id=theme.get('full_name')) 

        with open('./themes/themes/' + name, 'a+') as f: 
            f.write('---\n') 
            f.write(yaml.dump(theme)) 
            f.write('---\n') 
        try:
            readme = repo.get_readme()
            content = base64.b64decode(readme.content).decode('utf-8')
            links = [link[2:-1] for link in re.findall(r'\]\(\..*?\)', content) if link]
            for link in links:
                content = content.replace(link, f'https://raw.githubusercontent.com/{repo.owner.name}/{repo.name}/{repo.default_branch}/{link[2:]}')
            links = [link[5:-1] for link in re.findall(r'src="\./.*?"', content) if link]
            for link in links:
                content = content.replace(link, f'https://raw.githubusercontent.com/{repo.owner.name}/{repo.name}/{repo.default_branch}/{link[2:]}')

            with open('./themes/themes/' + name, 'a+') as f: 
                f.write(content)
        except Exception:
            pass
