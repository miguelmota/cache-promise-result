# cache-promise-result

> A wrapper for Promises to cache results for a duration of time.

## Install

```bash
npm install cache-promise-result
```

## Getting Started

```js
const cachePromise = require('cache-promise-result')

// cache myPromise result for 60 seconds
const result = await cachePromise(myPromise, 60 * 1000)

console.log(result)
```


## Test

```bash
npm test
```

## License

[MIT](LICENSE)
