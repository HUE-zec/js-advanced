class Cache {
  // 默认值为true
  constructor(isLocalStorage = false) {
    // 封装类的好处，可以根据不同情况创建不同的实例对象
    this.storage = isLocalStorage ? localStorage : sessionStorage
  }

  setCache(key, value) {
    if (!value) {
      throw new Error("value必须有值")
    }

    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key) {
    const result = this.storage.getItem(key)
    if (result) {
      return JSON.parse(result)
    }
  }

  removeCache(key) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

// 通过一个类封装了两个对象
const localCache = new Cache() // 有默认值true
const SessionCache = new Cache(false)
