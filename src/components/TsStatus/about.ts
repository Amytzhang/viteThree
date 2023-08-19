function tryT() {
  interface Person {
    age: number
  }
  function enhancer(target: any) {
    return class child extends Person {
      public age: number = 10
    }
  }
  @enhancer
  class Person {
    public name: string
    constructor() {
      this.name = 'namespace'
    }
  }
  let p = new Person()

  console.log(p.age)
  console.log(p.name)
}

export default tryT
