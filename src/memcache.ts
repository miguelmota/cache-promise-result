import memcache from 'memory-cache'

class Memcache {
  private client: any

  constructor (opts: any = {}) {
    this.client = new memcache.Cache()
  }

  getItem = async (key: string): Promise<any> => {
    return this.client.get(key)
  }

  setItem = async (key: string, value: any, expireIn?: number): Promise<void> => {
    return this.client.put(key, value, expireIn)
  }
}

export default Memcache
