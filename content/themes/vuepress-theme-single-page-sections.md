---
author:
  avatar: https://avatars.githubusercontent.com/u/934595?v=4
  email: null
  name: Peter Tandler
  url: https://github.com/ptandler
  username: ptandler
bugs: https://github.com/ptandler/vuepress-theme-single-page-sections/issues
category: themes
date: '2020-06-23T16:26:39.982Z'
deprecated: false
description: A VuePress theme that extends the default theme by sections to create
  single page layouts with several sections combined on one page
downloads: null
homepage: https://github.com/ptandler/vuepress-theme-single-page-sections#readme
keywords:
- vue
- vuepress
license: MIT License
maintainers: null
name: vuepress-theme-single-page-sections
npm: https://www.npmjs.com/package/vuepress-theme-single-page-sections
publisher:
  avatar: null
  email: p.npm@tandlers.de
  name: null
  url: null
  username: ptandler
repository: https://github.com/ptandler/vuepress-theme-single-page-sections
score: 0.5069912460577968
stars: 2
unstable: false
version: 1.1.4
watchers: 2

---

# Single Page VuePress Theme

This these extends the VuePress default theme `@vuepress/theme-default` for a layout for single page sites that contain several sections, each covering at least one view height.
I think this is easier described with a picture:

**Desktop version:**

![vuepress-theme-single-page-sections on desktop](./example/desktop.png)

**Mobile version:**

![vuepress-theme-single-page-sections on mobile](./example/mobile.png)
![vuepress-theme-single-page-sections on mobile with menu open](./example/mobile-with-menu.png)

I developed this theme as the basis for my personal homepage. So it can well be used to put your resume online.

It also defines a couple of social icons that you can use to link to your online profiles.

## Features

- Vue components for social media links as icons, with icons taken from font-awesome
- Predefined components for: Facebook, Twitter, Telegram, LinkedIn, XING, Keybase, ORCID, GitHub, e.g.
  ```md
  <Social-LinkedIn id="petertandler" />
  <Social-GitHub id="ptandler" />
  ```
- Vue components for contact information (email, phone) that generate obfuscated text and links to provide some challenges for harvesting bots and to avoid spam:
  ```md
  <Contact-Phone title="Phone" country="49" city="1234" number="56789" />
  <br/>
  <Contact-Email name="someone" domain="example.com" /> <!-- webmaster is the default name if not passed -->
  ```
  - non-digits from phone numbers are stripped to create the `tel:` URL.
- For public numbers you can choose whether or not to obfuscate emails and phone numers by passing the `obfuscate` prop (which defaults to `true`):
  ```md
  <Contact-Phone title="Phone" country="49" city="1234" number="56789" obfuscate="false" />
  ```
- Privacy-friendly way to pass sensitive contact information (e.g. mobile number, private email, messanger name) via URL in (e.g.) email footer - that will
  be included in the homepage exactly as the other icons. Some information can be passed directly in VuePress, see below.

## Combine personal and public contact information on your homepage

Do you know this situation? There are contact information such as your private email, mobile number,
or instant messengers that you don't want to be available for everyone.

- But on the other side, it would be nice if you could send your complete contact information to selected contacts
  you trust in a way that is nicely displayed.

Facing this issue, I came up with the idea that I could amend my homepage such that I can create a
_personal link_ that includes the contact information I would like to make available to _some_ contacts.
And for those, additional information should be displayed.
Or even better, I could create _different links_ for _different groups of contacts_, such as my friends, business contacts
and so on.

However, I didn't want to have the personal contact information somewhere hidden in the HTML or JavaScript to really
protect privacy here.

So I came up with the idea that I could _pass_ the personal contact information to the homepage using _URL parameters_.
The vue theme then, will check for contact information passed in the URL, include it _and stores it in local storage_ to
be available later on for this person, e.g. when navigating. The theme treats information found in the URL, the local storage,
or passed from the markdown files to the theme's Vue component `<Contact-Details>` in exactly the same way.

On the other hand, contact information provided directly to the Vue component is obfuscated to provide some challenges
for harvesting bots and to avoid spam.

Put contact information that should be available to the public directly in your markdown:

```md
<Contact-Details
  :email_as_icon="false" 
  :phone_as_icon="false"
  :mobile_as_icon="false"
  linkedin="myLinkedInId"
  xing="myXINGId"
  github="myGitHubId"
  keybase="myKeybaseId"
  twitter="myTwitterId"
  researchgate="myResearchGateId"
  />
```

Then, for your friends and business contacts you can pass additional information in the URL (e.g. in you email footer):
For example if the example homepage here is called like: https://ptandler.github.io/vuepress-theme-single-page-sections/?email=myname@example.com&skype=mySkypeId
then the email and skype id is also included in the list of contact details.

To pass phone numbers, the pattern for phone numbers is: `+country-city-number-ext` where _country_ and _city_ are optional and _ext_ has no special treatment but will be part of the number. This pattern allows consistent formatting of phone numbers. Make sure that the "+" is escaped properly as `%2B`
(some browsers might convert it into a space instead) and better to escape spaces as `%20`.

You can pass a `phone` and a `mobile` number.

And you can define a custom title for phone and mobile: `phone.title`.

Example https://ptandler.github.io/vuepress-theme-single-page-sections/?phone=%2B49-1234-56789-0&phone.title=Telefon

See [`Contact/Details.vue`](global-components/Contact/Details.vue) for the list of supported parameters (in `const attributes`).

# Example

In the [`example` directory](./example/README.md), there is a simple sample project.

You can see this live at https://ptandler.github.io/vuepress-theme-single-page-sections/

## Setup

This theme uses VuePress v1.

Install the theme:

```cmd
yarn install -D vuepress-theme-single-page-sections
```

## Usage

In your `.vuepress/config.js` include `theme: "single-page-sections"`. And I recommend the following `themeConfig`. The themeConfig comes from the default theme.

```js
module.exports = {
  theme: "single-page-sections",
  themeConfig: {
    sidebar: "auto",
    search: false,
    smoothScroll: true,
    social: { monochrome_icons: false },
    editLinks: false,
    nextLinks: false,
    prevLinks: false,
  },
}
```

And on the pages that should contain several sections use the following frontmatter:

```md
---
title: Page Title...
pageClass: sections-layout
sidebarImage: /small-image.jpg
---

<PageSection id="welcome" title="First Section">

Some content...

</PageSection>

---

::: section Second Section

Some content... this time using the markdown "custom container" syntax.

:::
```

The `sidebarImage` is optional. If defined, this image is included in the sidebar above the navigation links. In the mobil version, it is included in the navbar instead, as the sidebar is hidden then.

## Customization

The colors used are defined in `styles\palette.styl` and can be customized to fit your personal preferences.

## Implementation

This theme overwrites two components from the default theme:

- [Navbar.vue](components/Navbar.vue)
- [Sidebar.vue](components/Sidebar.vue)
