---
author:
  avatar: https://avatars.githubusercontent.com/u/2489210?v=4
  email: null
  name: evaera
  url: null
  username: evaera
bugs: https://github.com/evaera/vuepress-plugin-api-docs/issues
category: plugin
date: '2020-07-14T03:47:30.727Z'
deprecated: false
description: VuePress plugin for generating API reference pages.
downloads: null
homepage: https://github.com/evaera/vuepress-plugin-api-docs#readme
keywords: null
license: false
maintainers: null
name: vuepress-plugin-api-docs-generator
npm: https://www.npmjs.com/package/vuepress-plugin-api-docs-generator
publisher:
  avatar: null
  email: e@eryn.io
  name: null
  url: null
  username: evaera
repository: https://github.com/evaera/vuepress-plugin-api-docs
score: 0.3122436226117785
stars: 9
unstable: false
version: 1.0.19
watchers: 9

---

<div align="center">
  <h1>API Docs Generator for VuePress</h1>
  <p>Language-agnostic API docs generator for VuePress.</p>
  <p><a href="https://eryn.io/Cmdr/api/Registry.html">Demo</a> | <a href="https://raw.githubusercontent.com/evaera/Cmdr/master/docs/api/Registry.md">Source</a></p>
</div>

## Why?

I wanted a way to generate web API documentation for my projects from pure data. Some languages like Rust and TypeScript have really good integration for automatically generating documentation right from the code. This tool is for the languages who aren't so lucky (read: Lua)! This could also be used to generate documentation for projects which are implemented in multiple languages.

This tool is fairly rudimentary and takes some shortcuts in order to generate reasonable documentation without needing to parse actual language grammar.

For example, when denoting a function, you must structure it as an object in your data with entries for `name`, `params`, `returns`, etc. Using a function signature like you would do in a proper type system is not supported, because a) this varies wildly between languages and b) it's more complicated to parse.

The good news is that once all of that data is structured correctly, this plugin can automatically generate short function signatures with hyperlinked types for you so your readers will have a pleasant experience.

### Why VuePress?

It's very simple to use and works with very minimal configuration in your project. This makes it easy to add to lots of projects without hassle.

## Features and design

- One documentation page per module / object / class.
- Pages are made up three primary sections, Types, Properties, and Methods.
- Types in the Type section support both interface style and free-form.
- Free-form types have supports for parsing generic syntax into hyperlinks (e.g. in `List<Foo>`, if you have both `List` and `Foo` defined as types, they will be hyperlinked.)
- Tags on fields and types for things like "read only" or "deprecated".
- Ability to set default tags with mutual exclusions, e.g. all properties have "read only" tag by default unless they have an explicit "writable" tag

## Usage

1. Install plugin through npm: `npm i -D vuepress-plugin-api-docs-generator`
2. Add to your `config.js` inside your `.vuepress` folder:

```js
module.exports = {
  ...
  plugins: [
    ['api-docs-generator', { /* options */ }]
  ],
  ...
}
```

3\. Put your full API in the `api` option in the plugin options, and/or create individual markdown pages with `docs` front matter set to the data structure detailed below, and in include an `<ApiDocs />` tag in the body.

To link to an API from a non-API page, you can use `<ApiLink to="Page.Field" />` or `<ApiLink to="Page.Field" />`. This tag does *not* work in descriptions from your API data. For linking from API pages to API pages, please see Descriptions below.

## Data format

### FreeFormTypeString
A string that is indicative of a type. These are automatically hyperlinked to applicable types from around your docs.

Generics are in the form `foo<bar<baz, qux>>`. Improper balancing of angle brackets will cause parsing to fail and it will just spit out exactly what you put in.

Union and intersection types may be separated by `|` and `&`, respectively.

End a free-form type with a `?` to indicate optionality, this is detected for parameter the required field.

### FreeFormTypeObject

Objects which can become other kinds of types. This object has the keys:

- `desc`: String, only displayed when within an Interface object.
- `kind`: String, with the possible values:
  - `function`
    - self becomes Function
  - `interface`, `enum`
    - self becomes Interface
  - `literal`
    - self becomes LiteralInterface
  - `intersection`, `union`
    - `types` sibling: array of FreeFormTypes.
    - `parens` sibling: if true, will be wrapped in parenthesis (for precedence)
  - `property`, `type`
    - `type` sibling: FreeFormType
- `type`: FreeFormType if `kind` is not present.

### FreeFormType

Either a FreeFormTypeString or a FreeFormTypeObject.

### Interface

An Interface is an object which contains a dictionary mapping string keys to FreeFormTypes. You may also set the value to `null` in the case of an enum.

It has the keys:

`type`: Dictionary

### LiteralInterface

An Interface except string keys in the `type` dictionary are mapped to LiteralInterface objects instead of FreeFormTypes.

### Description

Description fields are strings parsed as Markdown. You can even include code blocks in these.

To link to types, use the format `[[Page.Field]]` or simply just `[[Page]]` to refer to a page/object.

### Function

Object with possible keys:

- `name`: Function name (omit for callback types)
- `params`: Array of Parameter objects
- `returns`: ReturnValue

### Parameter

Object with the possible keys:

- `name`: The name of the parameter
- `type`: FreeFormType
- `optional`: Boolean. This is implied true if `type` is a string and ends with a `?`
- `desc`: Description

Shorthand: Instead of an object, set to a string in the format `"firstName: firstType, secondName: secondType"`

### ReturnValue

ReturnValue can be a FreeFormTypeString or an array of SingleReturnValue objects.

### SingleReturnValue

An object with the following keys:

- `type`: FreeFormType
- `desc`: Description

### TagDefault

TagDefault is a string or an object with the keys:

- `name`: The name of the tag (required)
- `unless`: String or array of strings which are tag names. If one of these tags is explicitly on a member, the named tag won't be added as a default to that member.

### DocumentName

A string which matches the `name` field of a Document (or the page's title that the Document occurs on if `name` is omitted from that Document)

### DocEntry

Object with possible keys:

- `name`: String
- `tags`: Array of strings
- `desc`: Description
- `deprecated`: True, or an object with keys:
  - `since`: String, Version this member became deprecated
  - `use`: Reference to what to use instead (`DocumentName.Field`)
- `since`: String, version that this member was added
- `type`: FreeFormType

### DocEntryFunction
An object which all fields from DocEntry and Function plus the following optional fields:

- `static`: Boolean. If true, the `staticMethodCallOperator` will be used instead of the `methodCallOperator` in the signature. This field is implied true if there is a tag named `static` on this function.
- `overloads`: Array of Function objects

### Document

A document is a single page of documentation, modelling a class or module.

All keys are optional unless otherwise noted:

- `name`: String, defaults to page title (required if this structure is being loaded from an API data file, optional if this structure is embedded in front matter)
- `extends`: DocumentName
- `desc`: Description
- `defaults`: Object
  - `tags`: Array of TagDefault objects
  - `returns`: 
  - `property_tags`: Array of TagDefault objects
  - `type_tags`: Array of TagDefault objects
  - `function_tags`: Array of TagDefault objects
- `tags`: Array of strings which are tag names that apply to this Document
- `types`: Array of DocEntry objects
- `properties`: Array of DocEntry objects
- `functions`: Array of DocEntryFunction objects
  

### Extending page/objects

It's possible to denote inheritance between objects with the `extends` property in the structure. It should be set to the `name` of the object it extends.

On the docs, inherited members will link to the object that they're from.

In terms of the parent and child data structures, `defaults` is merged together by keys and `types`, `functions`, and `properties` are concatenated. No other fields are inherited from the parent structure.

## Plugin options

- `defaults`: Site-wide defaults, see `defaults` field in the data structure above.
- `types`: Array of external type objects with the possible keys:
  - `summary`: Tooltip text when hovering over this type
  - `link`: External hyperlink to docs for this type
- `tagColors`: Object with keys of your tag names and values of the hex color you want them to be.
- `emptyType`: The default type if none is specified. Defaults to `any`
- `methodCallOperator`: String, default `.`
- `staticMethodCallOperator`: string, default `.`
- `api`: Optional array of doc pages (objects with the structure of the data structure detailed in the previous section). These pages will be automatically created in your website at `/api/<item name slug>.html`.

### Color pallette

Available Stylus pallette options (and defaults):

```styl
$apiDocsAccentFunction = #10ac84
$apiDocsAccentType = #0abde3
```