function IsNumber<T> (constructor: T, property: string) {
  let value: number
  function get () {
    return value
  }

  function set (newValue: number) {
    if (typeof newValue !== 'number') {
      throw new Error('The age value is not a number')
    }
    value = newValue
  }

  Object.defineProperty(constructor, property, {
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

const user = new User({ name: 'Alfonso', email: 'afonsog@nicasource.com', pass: '1234', age: 52 })
console.log(user.age)
