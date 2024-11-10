## js-main

Checks if the current module is the main executed module.

* Supports both ES and CJS modules.
*  Works with Bun, Deno and Node.js.
* Is as efficient as possible depending on the completess of `import.meta`.
* Tiny size - 503 B original, 295 B minified, 216 B gzipped, 193 B brotlied.
* Zero dependencies.

Node.js version 14 and newer is supported.

## Synopsis

### ES

```js
import { isMain } from 'js-main'

if (isMain(import.meta)) {
  // this module has been executed
}
```

### CJS

```js
const { isMain } = require('js-main')

if (isMain(require)) {
  // this module has been executed
}
```

```tsx
import { createEl } from 'janadom'

@comp({ tag: 'greet-me' })
class GreetMeElement extends HTMLElement {
  // Place the content of a document fragment to the custom element.
  connectedCallback(): void {
    this.appendChild(
      <>Hello, <span class="name">{this.name}</span>!</>
    )
  }
}
```

## Installation

You can install this package using your favourite package manager:

```sh
npm i -D js-main
yarn add -D js-main
pnpm i -D js-main
bun i -D js-main
```

## API

This package exports one named function:

```ts
function isMain(import.meta | module): boolean
```

It expects the expressoin `import.meta` as the first parameter in an ES module and `module` in a CJS module. It returns a boolean, which will be `true` if the current module is the main executed module.

## About CJS

If you use only CJS modules, you can usethe following code withtou depending on this or any other package:

```js
if (require.main === module) {
  // this module has been executed
}
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and test your code using `bun run lint && bun run test`.

## License

Copyright (c) 2024 Ferdinand Prantl

Licensed under the MIT license.
