function log(target?: any, key?: string) {
  console.log(`${target}Calling ${key} method`);
}


class MyClass {
  name:String
  age:Number
  constructor(name:String,age:Number){
    this.name = name;
    this.age = age
  }
  @log
  myMethod() {
    console.log(`${this.name}${this.age}Hello, World!`);
  }
}

export { MyClass }
