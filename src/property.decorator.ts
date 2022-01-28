function IsNumber<T> (target: T, property: string) {
  let age: number

  function get () {
    return age
  }

  function set (newAge: number) {
    if (typeof newAge !== 'number') {
      throw new Error('What are you doing?! The age must be a number')
    }
    age = newAge
  }

  Object.defineProperty(target, property, {
    get,
    set
  })
}

class User {
  name: string
  email: string
  @IsNumber
  age: number
  pass: string

  constructor ({ name, email, pass, age }: any) {
    this.name = name
    this.email = email
    this.age = age
    this.pass = pass
  }
}

const user = new User({ name: 'Alfonso', email: 'afonsog@nicasource.com', pass: '1234', age: '52' })
console.log(user.age)
