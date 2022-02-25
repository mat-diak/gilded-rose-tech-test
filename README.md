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
- write tests based on description and behaviour of the script - console.log the flow of each item at different circumstances
- recognise responsibilites of existing updateQuality function
  - updates sellIn
  - updates quality
  - recognises item
- change updateQuality to updateItems
- create new functions to serve each responsibility of legacy updateQuality function

Guidelines and legacy code interpretation:

Behaviuour:

- Normal items:

  - quality
    - in date:
      - decreases by 1 everyday
    - out of date:
      - decreaeses by 2
  - sellIn
    - decreases by 1 everyday

- Aged Brie

  - quality
    - in date:
      - increases by 1 everyday
    - out of date - increases by 2 everyday
      -sellIn
    - decreases by 1 everyday

- Sulfurus
  -quality
  N/A
  -sellIn
  N/A

- backstage pass
  - quality up by 1

Absolutes:

- quality
  - between 0 and 50 inclusive
