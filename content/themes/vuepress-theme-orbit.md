---
author:
  avatar: https://avatars.githubusercontent.com/u/1489465?v=4
  email: photoadrian@outlook.com
  name: Adrian Hall
  url: null
  username: photoadrian
bugs: https://github.com/adrianhall/vuepress-theme-orbit/issues
category: theme
date: '2020-06-01T20:05:34.501Z'
deprecated: false
description: A Resume template using Vuepress - concentrate on content, not style!
downloads: null
homepage: https://github.com/adrianhall/vuepress-theme-orbit#readme
keywords:
- vuepress
- vuepress-theme
- xriley
- 3rdwave
- resume
- resume-theme
license: MIT License
maintainers: null
name: vuepress-theme-orbit
npm: https://www.npmjs.com/package/vuepress-theme-orbit
publisher:
  avatar: null
  email: photoadrian@outlook.com
  name: null
  url: null
  username: photoadrian
repository: https://github.com/adrianhall/vuepress-theme-orbit
score: 0.36551113518199885
stars: 0
unstable: false
version: 1.1.1
watchers: 0

---

# Vuepress Theme for the Orbit Resume Template

[Xiaoying Riley](https://github.com/xriley) has kindly provided a free Resume/CV Template for developers based on the [Bootstrap](https://getbootstrap.com) design language.  You can check out her other work at [her website](http://themes.3rdwavemedia.com/).

This template is an adaptation of the [Orbit template](https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/) to Vuepress.

## Using the theme

First, add the theme to your Vuepress site:

```bash
yarn add vuepress vuepress-theme-orbit
```

Create a `.vuepress/config.js` file.  Here is a minimal one:

```javascript
module.exports = {
  title: 'Alan Doe | Resume',
  description: 'The resume for Alan Doe',
  theme: 'orbit',
  themeConfig: {
    colorScheme: 'keppel'
  }
};
```

Then create a resume in `README.md`.  This involves two parts: The front matter, which must include an "author" section that describes the sidebar contents, and some Markdown content.
You can find an example [in the example directory](example/README.md).

## Color Schemes

There are six color schemes:

* `pacificblue`
* `keppel`
* `seagreen`
* `rose`
* `saffron`
* `cadet`

You can specify the color scheme in the theme configuration (as above) or in the front matter of your resume (allowing you to produce multiple resumes with different color schemes).  You can 
also add your own color scheme by adding a new palette in your style overrides.  See `styles/colors.styl` for examples.

## Sidebar

The sidebar is driven from the `author` section within the front matter for the resume.  

## Global Components

To assist writing a resume, we provide a number of Vue components that you can include with your Markdown:

```text
---
author:
  {
    name: "Alan Doe",
    tagline: "Full Stack Developer",
    picture: "images/profile.png",
    email: "alan.doe@website.com",
    phone: "0123 456 789",
    links:
      {
        link: "https://portfoliosite.com",
        linkedin: "https://linkedin.com/in/alandoe",
        github: "https://github.com/alandoe",
        twitter: "https://twitter.com/alandoe",
      },
    education:
      [
        {
          title: "MSc in Computer Science",
          place: "University of London",
          dates: "2016-2018",
        },
        {
          title: "BSc in Computer Science",
          place: "Bristol University",
          dates: "2011-2015",
        },
      ],
    languages:
      {
        "English": "(Native)",
        "French": "(Professional)",
        "Spanish": "(Professional)",
      },
    interests: ["Climbing", "Snowboarding", "Cooking"],
  }
---
```

Most sections will disappear naturally if you don't specify the relevant piece of the `author` object.  Links can be 'link' or any icon from the [brands selection of Font Awesome](https://fontawesome.com/icons?d=gallery&s=brands&m=free).  

Note that if you don't follow the style of the `education`, `languages`, and `interests` sections, the site build will fail.

### Heading

Use this as a section heading, with icons.  Any [solid icon from Font Awesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) can be used for the icon.  For example:

```xml
<Heading icon="anchor" title="Naval Experience"></Heading>
```

### JobDetails

Each job in your experience section should be wrapped in a `JobDetails` component, which provides the title, company, place, and dates for the job:

```xml
<JobDetails title="Principal Product Manager" time="2004 - 2012" company="Splunk" place="Seattle, WA">

Enter your experience within the job here.

</JobDetails>
```

### Skill

Use the `Skill` component to indicate how good you are at specific skills.  The range is 0-100:

```xml
<Skill name="JavaScript" progress="95"></Skill>
```

