---
author:
  avatar: https://private-avatars.githubusercontent.com/u/5313610?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MzQ2NTUwMjAsIm5iZiI6MTczNDY1MzgyMCwicGF0aCI6Ii91LzUzMTM2MTAifQ.S5yUsItcABpE5axXFxEfA7jHXL1qeeRP8hbPPcnAWWI&v=4
  email: alexandre.bulte@data.gouv.fr
  name: "Alexandre Bult\xE9"
  url: null
  username: etalab
bugs: https://github.com/etalab/vuepress-theme-gouv-fr/issues
category: themes
date: '2020-01-31T10:39:04.540Z'
deprecated: false
description: VuePress theme - Gouv Fr
downloads: null
homepage: https://github.com/etalab/vuepress-theme-gouv-fr
keywords:
- vuepress
- theme
- gouv
- gouvfr
- france
- gouvernement
license: MIT License
maintainers: null
name: vuepress-theme-gouv-fr
npm: https://www.npmjs.com/package/vuepress-theme-gouv-fr
publisher:
  avatar: null
  email: antoine.augusti@gmail.com
  name: null
  url: null
  username: aaugusti
repository: https://github.com/etalab/vuepress-theme-gouv-fr
score: 0.43808999773082236
stars: 6
unstable: false
version: 1.1.1
watchers: 6

---

[![npm](https://img.shields.io/npm/v/vuepress-theme-gouv-fr.svg?style=flat-square)](https://npmjs.org/package/vuepress-theme-gouv-fr "View this project on npm")
[![NPM](https://img.shields.io/npm/l/vuepress-theme-gouv-fr.svg?style=flat-square)](https://npmjs.org/package/vuepress-theme-gouv-fr "View this project on npm")
[![npm](https://img.shields.io/npm/dy/vuepress-theme-gouv-fr.svg?style=flat-square)](https://npmjs.org/package/vuepress-theme-gouv-fr "View this project on npm")

# VuePress thème Gouv Fr

Un thème VuePress qui s'inspire de [template.data.gouv.fr](https://template.data.gouv.fr) et hérite du thème par défaut de VuePress.

## Démonstration

https://guides.etalab.studio utilise ce thème. Vous pouvez consulter le [code source associé](https://github.com/etalab/guides).

## Installation

Ajoutez le thème en tant que dépendance dans votre fichier `package.json` :

```sh
npm install vuepress-theme-gouv-fr
```

Indiquez que vous utilisez ce thème dans votre fichier de configuration VuePress (probablement à l'emplacement `.vuepress/config.js`)

```javascript
module.exports = {
  // D'autres éléments de configuration
  theme: 'vuepress-theme-gouv-fr'
}
```

Pour plus de détails, reportez-vous à [la documentation de VuePress](https://vuepress.vuejs.org/theme/using-a-theme.html).

## Configuration

### Titres de sections
Lorsque votre documentation comporte plusieurs dossiers, il est possible de faire apparaitre un titre de section lorsque vous vous trouvez dans un dossier.

Dans votre fichier de configuration VuePress (probablement `.vuepress/config.js`), ajoutez ceci :
```javascript
module.exports = {
  themeConfig: {
    sidebarTitles: {
        '/qualite/': "Préparer les données",
        '/juridique/': "Identifier les données à ouvrir",
    }
  }
}
```

## Composants
Les composants suivants sont disponibles. Ils sont tous indépendants les uns des autres et leur utilisation est optionnelle.

### Génération automatique du menu
VuePress vous laisse la possibilité de définir vous-même votre menu, en précisant les différents groupes, les pages contenues et leur ordre.

Si vous souhaitez afficher tous les dossiers de votre répertoire et tous les fichiers Markdown contenus dans ces dossiers (dans un ordre alphabétique), vous pouvez générer le menu automatiquement. Pour contrôler l'ordre des pages, vous pouvez préfixer vos pages par un numéro, par exemple `1_introduction.md`, `2_installation.md`.

Dans votre fichier de configuration VuePress (probablement `.vuepress/config.js`), ajoutez ceci :
```javascript
const { getSidebar } = require('vuepress-theme-gouv-fr/sidebar.js')

module.exports = {
  // D'autres éléments de configuration
  themeConfig: {
    sidebar: getSidebar(),
  }
}
```

### `CurrentGroupToc`
Permet d'afficher dans la barre de navigation uniquement les éléments du groupe courant lorsque vous utilisez plusieurs groupes au sein de votre documentation.

Il s'utilise de la manière suivante, probablement dans un fichier `README.md` :
```md
# Super guide

Une description

<CurrentGroupToc></CurrentGroupToc>
```

## Versions supportées
Ce thème est disponible pour les versions 0 et 1 de VuePress.

Les versions en `0.*` de ce thème sont compatibles avec VuePress 0, tandis que les versions en `1.*` sont compatibles avec VuePress 1.

## Licence

MIT
