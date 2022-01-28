function Logger<T> (target: T, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value

  descriptor.value = function (...args) {
    console.log(`Calling the method: ${methodName} with args: ${args}`)
    return originalMethod.apply(this, args)
  }

  return descriptor
}

class AnimalFetcher {
  @Logger
  fetchCats (catName, color) {
  }

  @Logger
  fetchDogs () {
  }

  @Logger
  fetchCows () {
  }
}

const fetcher = new AnimalFetcher()
fetcher.fetchCats('Garfield', 'red')
fetcher.fetchDogs()
fetcher.fetchCows()