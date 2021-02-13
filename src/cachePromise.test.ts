import cachePromise from './cachePromise'

describe('cachePromise', () => {
  test('cachePromise', async () => {
    const promise = (input: string) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(input)
        }, 2e3)
      })
    }

    const start = Date.now()
    const data = `foo-${Date.now()}`
    const result = await cachePromise(promise, 3e3)(data)
    const end = ((Date.now() - start) / 1e3) >>> 0

    expect(result).toEqual(data)
    expect(end).toEqual(2)

    const start2 = Date.now()
    const result2 = await cachePromise(promise, 3e3)(data)
    const end2 = ((Date.now() - start2) / 1e3) >>> 0
    expect(result2).toEqual(data)
    expect(end2).toEqual(0)
  })
})
