class User {
  name: string
  email: string
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
console.log(user)
