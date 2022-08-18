---
author:
  avatar: null
  email: marcinj10@gmail.com
  name: marcinjahn
  url: null
  username: mnj
bugs: https://github.com/marcinjahn/vuepress-plugin-feedback-panel
category: plugins
date: '2022-04-21T10:59:42.852Z'
deprecated: false
description: A configurable feedback widget plugin for Vuepress 1.x
downloads: null
homepage: https://marcinjahn.com/projects/feedback-panel-vuepress-plugin.html
keywords:
- vue
- vuepress
- feedback
- survey
- questions
- panel
license: null
maintainers: null
name: vuepress-plugin-feedback-panel
npm: https://www.npmjs.com/package/vuepress-plugin-feedback-panel
publisher:
  avatar: null
  email: marcinj10@gmail.com
  name: null
  url: null
  username: mnj
repository: https://github.com/marcinjahn/vuepress-plugin-feedback-panel
score: 0.423165290444388
stars: 0
unstable: false
version: 1.0.4
watchers: 0

---

# vuepress-plugin-feedback-panel

[![npm version](https://badge.fury.io/js/vuepress-plugin-feedback-panel.svg)](https://badge.fury.io/js/vuepress-plugin-feedback-panel)

A VuePress 1.x plugin that adds a global feedback widget to your website.

When enabled, the plugin adds a button in the bottom-right corner of your site:

![](.media/button-on-page.png)

When clicked, a panel shows up where your users can provide feedback about the
website:

![](.media/star-question.png)

The questions list is configurable. The answers will be sent to the webhook URL
that you have to provide in the configuration.

## Installation

```sh
npm install -D vuepress-plugin-feedback-panel

# or yarn add -D vuepress-plugin-feedback-panel
```

## Configuration

Here's an example of plugin's configuration in `.vuepress/config.js`:

```js
{
  plugins: [
    [
      "vuepress-plugin-feedback-panel",
      {
        submissionWebhook: "http://localhost:3000/feedback",
        buttonText: "Rate us",
        disableOnLocalhost: false,
        questions: [
          {
            id: 0,
            questionText:
              "1. How do you like this website?",
            questionNumber: "1",
            component: "StarQuestion",
            normalNext: 1,
            skippable: true,
            canBack: false
          },
          {
            id: 1,
            questionText: "2. Would you recommend this website to a friend?",
            questionNumber: "2",
            component: "BinaryQuestion",
            normalNext: null,
            optionalNext: 2,
            skippable: true,
            canBack: true
          },
          {
            id: 2,
            questionText: "2b. What was missing?",
            questionNumber: "2",
            component: "OpenQuestion",
            normalNext: null,
            skippable: false,
            canBack: true
          }
        ]
      },
    ]
  ],
  // ... all the other things in your config
}
```

### submissionWebhook

In this setting you should provide an URL of your POST endpoint where the
feedback submissions will be sent to. Here's an example of the body of such a
POST request:

```json
{
  "answers": [
    {
      "question": "1. How do you like this website?",
      "answer": 4,
      "questionId": 0
    },
    {
      "question": "2. Would you recommend this website to a friend?",
      "answer": false,
      "questionId": 1
    },
    {
      "question": "2b. What was missing?",
      "answer": "It's too technical",
      "questionId": 2
    }
  ],
  "timestamp": "2022-04-21T09:52:29.794Z",
  "siteUrl": "http://localhost:8080/programming/"
}
```

All the provided answers will be provided. Each answer contains:

- `question` - the text of the question
- `answer` - the provided answer. The type of this field depends on the type
  of the question
- `questionId` - the ID of the question

Other than that, the object contains:

- `timestamp` - the time when the feedback was submitted
- `siteUrl` - the exact URL that the use was visiting while submitting the
  feedback

### buttonText

This setting controls the text being displayed on the feedback button

![](.media/press-me.png)

### disableOnLocalhost

Controls whether you want the feedback widget to be displayed while developing
your VuePress site locally on localhost.

### questions

This is the actual list of questions that you want your users to see. Each
question is a separate object in the `questions` array.

Here's an example of such an object:

```json
{
  "id": 0,
  "questionText": "1. How do you like this website?",
  "questionNumber": "1",
  "component": "StarQuestion",
  "normalNext": 1,
  "skippable": true,
  "canBack": false
}
```

The fields are:

- `id` - some ID for the question (should be a unique number)
- `questionText` - the question text that the user will see
- `questionNumber` - number of the question as displayed on the UI.
- `component` - this is where you specify the type of the question. This
  controls how the question will be displayed in the UI. Accepted values are:
  "StarQuestion", "BinaryQuestion", "OpenQuestion". The types of questions will
  be described further down.
- `normalNext` - the ID of the next question to be displayed when the user
  answers this one.
- `optionalNext` - if the question type is "BinaryQuestion", and the user
  answers "No", this question will be displayed as the next one instead of the
  `normalNext` one.
- `skippable` - controls whether the "Skip" button should appear next to the
  question. Clicking that button would skip the current question.
- `canBack`- controls whether the "Back" button should appear next to this
  question. Clicking that button would take user back to the previous question.

#### Question Types

The following question types are available:

- `Star Queestion`

  This question allows your users to rate something with 1-5 stars.

  Example:

  ```json
  {
    "id": 0,
    "questionText": "1. How do you like this website?",
    "questionNumber": "1",
    "component": "StarQuestion",
    "normalNext": 1,
    "skippable": true,
    "canBack": false
  }
  ```

  ![](.media/star-question.png)

- `BinaryQuestion`

  This question allows your users to answer Yes/No to some question.

  Example:

  ```json
  {
    "id": 1,
    "questionText": "2. Would you recommend this website to a friend?",
    "questionNumber": "2",
    "component": "BinaryQuestion",
    "normalNext": null,
    "optionalNext": 2,
    "skippable": true,
    "canBack": true
  }
  ```

  ![](.media/binary-question.png)

- `OpenQuestion`

  This question allows your users to provide more detailed input using a text
  box.

  Example:

  ```json
  {
    "id": 2,
    "questionText": "2b. What was missing?",
    "questionNumber": "2",
    "component": "OpenQuestion",
    "normalNext": null,
    "skippable": false,
    "canBack": true
  }
  ```

  ![](.media/open-question.png)

## Contributing

Feel free to open Issues or Pull Requests if you want to contribute.

## Releases

I'm using [reelase-it](https://www.npmjs.com/package/release-it) to release new
versions of this package.

## Author

[marcinjahn.com](https://marcinjahn.com)