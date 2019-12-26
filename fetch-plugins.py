import base64
import json
import os
import re

from github import Github
import yaml

# using username and password
g = Github(login_or_token=os.getenv('gh_access_token'))

with open('plugins.json') as data: 
    plugins = json.loads(data.read()) 
    plugins = [th for th in plugins if th['name'].startswith('vuepress-plugin-')]
    
    for plugin in plugins:
        name = plugin['name'].replace('vuepress-plugin-', '') + '.md' 
        repo = g.get_repo(full_name_or_id=plugin.get('full_name')) 

        try:
            readme = repo.get_readme()
            content = base64.b64decode(readme.content).decode('utf-8')
            if (len(content) < 200):
                raise Exception('no enough readme')
            links = [link[2:-1] for link in re.findall(r'\]\(\..*?\)', content) if link]
            for link in links:
                content = content.replace(link, f'https://raw.githubusercontent.com/{repo.owner.name}/{repo.name}/{repo.default_branch}/{link[2:]}')
            links = [link[5:-1] for link in re.findall(r'src="\./.*?"', content) if link]
            for link in links:
                content = content.replace(link, f'https://raw.githubusercontent.com/{repo.owner.name}/{repo.name}/{repo.default_branch}/{link[2:]}')

            with open('./plugins/' + name, 'a+') as f: 
                f.write('---\n') 
                f.write(yaml.dump(plugin)) 
                f.write('---\n\n') 
            with open('./plugins/' + name, 'a+') as f: 
                f.write(content)
        except Exception:
            pass
