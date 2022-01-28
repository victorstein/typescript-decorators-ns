enum Url {
  PROD = 'production URL',
  DEV = 'development URL'
}

class FetchAnimals {
  url: Url

  constructor (url) {
    this.url = url
  }

  fetchDogs () {
    console.log(`fetching dogs to url ${this.url}`)
  }

  fetchCats () {
    console.log(`fetching cats to url ${this.url}`)
  }

}

const imagesFetcher = new FetchAnimals(Url.DEV)
imagesFetcher.fetchCats()
imagesFetcher.fetchDogs()