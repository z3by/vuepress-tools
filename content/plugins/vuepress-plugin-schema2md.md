---
author:
  avatar: https://avatars.githubusercontent.com/u/58433797?v=4
  email: chl814@foxmail.com
  name: ulivz
  url: null
  username: rich-lab
bugs: https://github.com/rich-lab/json-schema-2-markdown/issues
category: plugin
date: '2020-03-09T03:04:20.164Z'
deprecated: false
description: A VuePress plugin to help you generate pages via JSON Schema (HMR Support).
downloads: null
homepage: https://github.com/rich-lab/json-schema-2-markdown#readme
keywords: null
license: MIT License
maintainers: null
name: vuepress-plugin-schema2md
npm: https://www.npmjs.com/package/vuepress-plugin-schema2md
publisher:
  avatar: null
  email: 472590061@qq.com
  name: null
  url: null
  username: ulivz
repository: https://github.com/rich-lab/json-schema-2-markdown
score: 0.4040927765451074
stars: 7
unstable: true
version: 0.2.2
watchers: 7

---

# schema2md

[![NPM version](https://img.shields.io/npm/v/schema2md.svg?style=flat)](https://npmjs.com/package/schema2md) [![NPM downloads](https://img.shields.io/npm/dm/schema2md.svg?style=flat)](https://npmjs.com/package/schema2md) ![Node.js CI](https://github.com/rich-lab/schema2md/workflows/Node.js%20CI/badge.svg) [![codecov](https://codecov.io/gh/rich-lab/schema2md/branch/master/graph/badge.svg)](https://codecov.io/gh/rich-lab/schema2md)

## Install

```bash
tnpm install schema2md --save
```

## Example

- `Input`: 

```json
{
  "title": "foo.config.js",
  "description": "My Config File",
  "properties": {
    "type": {
      "description": "TYPE's description",
      "type": "string",
      "enum": [
        "foo",
        "bar"
      ]
    },
    "env": {
      "description": "ENV's description",
      "type": "string"
    }
  }
}
```

- `Output`:

```md
# foo.config.js
 
My Config File

## type

- Type: `"foo" | "bar"`
- Description: TYPE's description

## env

- Type: `string`
- Description: ENV's description"
```

## Usage

```js
const { transform } = require('schema2md')

transform({
  schemaPath: 'fixtures/simple.json',
  outputPath: 'docs/config/README.md',
})
```

## Using in VuePress

Here is seperate [VuePress plugin](https://github.com/vuepressjs/vuepress-plugin-schema2md) for you to use it at VuePress.

## API

### .transform()

- Type: `(options: ITransformOptions) => Promise<string>`
- Description: `Get markdown output by JSON Schema.`

Type of `ITransformOptions` is as follows:

```typescript
interface ITransformOptions {
  /**
   * Current working directory, used to calcaulate absolute path for "schemaPath"
   * and "outputPath" with relative path, defaults to `process.cwd()`.
   */
  cwd?: string;
  /**
   * A relative path or an absolute path to a JSON Schema file. 
   */
  schemaPath: string;
  /**
   * A relative path or an absolute path to a output markdown file.
   */
  outputPath: string;
  /**
   * Whether to write output content to "outputPath".
   */
  write: boolean;
  /**
   * Current locale.
   */
  locale: string;
  /**
   * Specify a markdown file to be merged into the generated markdown.
   */
  schemaMarkdown: string;
  /**
   * Frontmatter content.
   */
  frontmatter: string;
  /**
   * Content at the below of h1.
   */
  heading: string;
  
}
```

### .batchTransform()

- Type: `(options: IBatchTransformOptions) => Promise<string[]>`
- Description: `Get markdown output by JSON Schema.`

Type of `IBatchTransformOptions` is as follows:

```typescript
interface IBatchTransformOptions {
  /**
   * Global "cwd".
   */
  cwd: string;
  /**
   * Global "cwd".
   */
  locale: string;
  /**
   * Global "write".
   */
  write: string;
  /**
   * Meta transform config.
   */
  configs: ITransformOptions[];
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**schema2md** © [ULIVZ](https://github.com/ulivz), Released under the [MIT](./LICENSE) License.<br>


> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ULIVZ](https://github.com/ulivz) · Twitter [@_ulivz](https://twitter.com/_ulivz)


