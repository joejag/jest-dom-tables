<h1>jest-dom-tables</h1>

<p>Custom jest matchers to test the state of table rows in the DOM</p>

## The problem

`@testing-library/jest-dom` is a fantastic library for giving richer matchers
for html dom elements. However, testing html tables to ensure that data is being
populated can lead to some gnarly code.

## This solution

The `jest-dom-tables` library provides a custom jest matcher that you can use to
test html tables. These will make your tests more declarative, clear to read and
to maintain.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Custom matchers](#custom-matchers)
  - [`toHaveRowTextContent`](#tobedisabled)
- [LICENSE](#license)

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev jest-dom-tables
```

## Usage

Import `jest-dom-tables/extend-expect` once (for instance in your [tests setup
file][]) and you're good to go:

[tests setup file]:
  https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array

```javascript
import 'jest-dom-tables/extend-expect'
```

## Custom matchers

### `toHaveRowTextContent`

```typescript
toHaveRowTextContent(text: string | RegExp)
```

This allows you to check whether the given talbe row element has a text content
or not.

When a `string` argument is passed through, it will perform a partial
case-sensitive match to the element content.

To perform a case-insensitive match, you can use a `RegExp` with the `/i`
modifier.

#### Examples

```html
<table>
  <tr>
    <td>A</td>
    <td>B</td>
    <td>C</td>
  </tr>
</table>
```

##### Using document.querySelector

```javascript
const element = document.querySelectorAll('tr')[0]

expect(element).toHaveRowTextContent('| A | B | C |')
expect(element).toHaveRowTextContent(/^| A | B | C |$/) // to match the whole content
expect(element).toHaveRowTextContent(/| B | C |$/i) // to use case-insentive match
expect(element).not.toHaveRowTextContent('| Z | Y | X |')
```

##### Using DOM Testing Library

```javascript
const element = getAllByRole('row')[0]

expect(element).toHaveRowTextContent('| A | B | C |')
expect(element).toHaveRowTextContent(/^| A | B | C |$/) // to match the whole content
expect(element).toHaveRowTextContent(/| B | C |$/i) // to use case-insentive match
expect(element).not.toHaveRowTextContent('| Z | Y | X |')
```

## LICENSE

MIT
