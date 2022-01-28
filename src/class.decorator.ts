class FetchAnimals {
  url: string

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

const imagesFetcher = new FetchAnimals('Development URL')
imagesFetcher.fetchCats()
imagesFetcher.fetchDogs()