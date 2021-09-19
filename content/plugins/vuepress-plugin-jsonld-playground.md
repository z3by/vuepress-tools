---
author:
  avatar: https://avatars.githubusercontent.com/u/6525873?v=4
  email: null
  name: Andreas Martin
  url: null
  username: about-code
bugs: https://github.com/about-code/vuepress-plugin-jsonld-playground/issues
category: plugin
date: '2021-08-22T22:04:38.465Z'
deprecated: false
description: A JSON-LD Playground component for vuepress (v1) and vuejs (v2).
downloads: null
homepage: https://github.com/about-code/vuepress-plugin-jsonld-playground#readme
keywords:
- vuepress
- json-ld
- linked
- data
- playground
- vue
- component
license: MIT License
maintainers: null
name: vuepress-plugin-jsonld-playground
npm: https://www.npmjs.com/package/vuepress-plugin-jsonld-playground
publisher:
  avatar: null
  email: about-code@gmx.net
  name: null
  url: null
  username: about-code-js
repository: https://github.com/about-code/vuepress-plugin-jsonld-playground
score: 0.4526753107658581
stars: 0
unstable: false
version: 1.0.2
watchers: 0

---

# vuepress-plugin-jsonld-playground

[playground]: https://json-ld.org/playground
[vuepress]: https://vuepress.vuejs.org

A vuepress plug-in to embed a component similar to [JSON-LD Playground][playground] into a [vuepress] book.

## Usage

*.vuepress/config.js*
~~~js
module.exports = {
    ...
    ,plugins: [
      'vuepress-plugin-jsonld-playground'
    ]
}
~~~


*document.md*
~~~xml
Some markdown text or some html markup
<json-ld>
{
    "@context": {
        "@vocab": "https://my.org/vocabulary"
    },
    "@id": "1",
    "prop1": "value1",
    "prop2": "value2"
}
</json-ld>
~~~

### Attributes

You may use the `<json-ld>` element with the following attributes like `<element attr="...">`:

- `view` to pre-select a particular view.
  - Valid values are: `compacted | expanded | flattened | rdf | framed`
  - Default: `"compacted"`
- `inputLabel`  to change the default label for editable text area 1
  - Default: `"JSON-LD Document 1"`
- `inputLabel2` to change the default label for editable text area 2
  - Default: `"JSON-LD Document 2"`
- `outputLabel` to change the default label for readonly output text area
  - Default: `"Output"`
- `frameLabel`  to change the default label for editable *frame* text area
  - Default: `"JSON-LD Frame (Matching & Mapping)"`

> **Note:** For some yet to be understood reason `<json-ld>` can not be the first element of a new paragraph.
>
> ~~~md
> Some text
>               <-- Doesn't work.
> <json-ld>
> ...
> ~~~
>
> ~~~md
> Some text
>               <-- Works because of --.
> <span></span> <----------------------'
> <json-ld>
> ...
> ~~~

## Advanced Uses

### Framing
~~~xml
<json-ld view="framed">
{
    "@context": {
        "@vocab": "https://my.org/vocabulary"
    },
    "@id": "1",
    "prop1": "value1",
    "prop2": "value2"
}
<template v-slot:frame>
{
    "@context": {
        "@vocab": "https://my.org/vocabulary"
    },
    "prop1": ""
}
</template>
</json-ld>
~~~

### Framing two Datasources

In *framed* view we can provide a second JSON-LD document. This option aims to demonstrate a data integration scenario which involves more than one data source:

~~~xml
<json-ld view="framed">
{
    "@context": {
        "@vocab": "https://my.org/vocabulary"
    },
    "@id": "1",
    "prop1": "value1",
    "prop2": "value2"
}
<template v-slot:data2>
{
    "@context": {
        "@vocab": "https://my.org/vocabulary"
    },
    "@id": "1",
    "prop3": "value3"
}
</template>
<template v-slot:frame>
{
    "@context": {
        "@vocab": "https://my.org/vocabulary"
    },
    "prop1": ""
}
</template>
</json-ld>
~~~

Internally the component combines both input documents and expands them into a single JSON-LD graph before applying the given JSON-LD frame to the combined data graph like so:

~~~js
jsonld.expand([input, input2]).then(expanded => {
    return jsonld.frame(expanded, frame, {
        embed: "@always"
    });
});
~~~
