class AnimalFetcher {
  someProperty?: string

  fetchCats () {
    console.log('Fetching cats')
  }

  fetchDogs () {
    console.log('Fetching dogs')
  }

  fetchCows () {
    console.log('Fetching Cows')
  }
}

const fetcher = new AnimalFetcher()
fetcher.fetchCats()