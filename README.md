# ✌️🔗📝 data-structures-converters

A zero-dependency TypeScript library to work with doubly linked lists and arrays of any types.

## Table of Content

-   [✌️🔗📝 data-structures-converters](#️-data-structures-converters)
    -   [Table of Content](#table-of-content)
    -   [Installation](#installation)
    -   [Documentation](#documentation)
        -   [`convertDLLtoBST`](#convertdlltobst)
        -   [`convertBSTtoDLL`](#convertbsttodll)

## Installation

```sh
yarn add @romainfieve/data-structures-converters
```

or

```sh
npm install @romainfieve/data-structures-converters
```

## Documentation

### `convertDLLtoBST`

Converts a doubly-linked-list to a binary search tree, depending on a given compare function if provided.

```typescript
const compare = (a: number, b: number) => a - b;
const arr = [10, 32, 13, 2, 89, 5, 50];

const list = toDLL(arr, compare);
// Schema of "list"
//
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89
//

const tree = convertDLLtoBST(list, compare);
// Schema of "tree"
//
//           13
//        /     \
//       5      50
//     /  \    /  \
//    2   10  32   89
//
```

---

### `convertBSTtoDLL`

Converts a binary search tree to a doubly-linked-list, depending on a given compare function if provided.

```typescript
const compare = (a: number, b: number) => a - b;
const arr = [10, 32, 13, 2, 89, 5, 50];

const tree = toBST(list, compare);
// Schema of "tree"
//
//           13
//        /     \
//       5      50
//     /  \    /  \
//    2   10  32   89
//

const list = convertBSTtoDLL(tree, compare);
// Schema of "list"
//
// 2 <-> 5 <-> 10 <-> 13 <-> 32 <-> 50 <-> 89
//
```

---
