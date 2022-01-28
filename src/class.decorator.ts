type Constructor = { new (...arg: any[]): {} }

enum Url {
  PROD = 'production URL',
  DEV = 'development URL'
}

function ChooseEnvironment<T extends Constructor> (target: T) {
  const url = process.env.NODE_ENV === 'production'
    ? Url.PROD
    : Url.DEV

  return class extends target {
    url = url

    fetchCats () {
      console.log(`We just changed the behavior of this method`)
    }
  }
}

@ChooseEnvironment
class FetchAnimals {
  url?: Url

  fetchDogs () {
    console.log(`fetching dogs to url ${this.url}`)
  }

  fetchCats () {
    console.log(`fetching cats to url ${this.url}`)
  }

}

const imagesFetcher = new FetchAnimals()
imagesFetcher.fetchCats()
imagesFetcher.fetchDogs()