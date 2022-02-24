# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

Approach:

- run npm install, then npm audit fix to fix the vulnerabilities
- run the code in node and see what is happnening
- comment existing code to see what it is doing

Guidelines and legacy code interpretation:

Types of items:

- Normal items:
  - quality
    - decreases by 1 everyday
  - sellIn
    - decreases by 1 everyday

Absolutes:

- quality
  - between 0 and 50 inclusive
