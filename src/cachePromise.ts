import XXHash from 'xxhashjs'
import MemCache from './memcache'

const generateArgsCacheKey = (args: any[]) => {
  let key: string = ''
  for (let i = 0; i < args.length; i++) {
    if (args[i] instanceof Object) {
      key += `${JSON.stringify(args[i])}`
    } else {
      key += `${args[i]}`
    }
  }

  return key
}

const cache = new MemCache()
const cachePromise = (fn: any, expiresInMs?: number) => {
  return async (...args: any[]) => {
    const key = `${fn.toString()}:${generateArgsCacheKey(args)}`
    const cacheKey = `cachePromise:${XXHash.h32(key, 0).toString(16)}`
    const cached = await cache.getItem(cacheKey)
    if (cached !== null) {
      return cached
    }

    const result = await fn(...args)

    if (!(result === null || result === undefined)) {
      cache.setItem(cacheKey, result, expiresInMs)
    }

    return result
  }
}

export default cachePromise
