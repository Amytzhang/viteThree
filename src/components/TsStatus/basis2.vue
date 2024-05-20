<template>
  <div class="ts-basic-one">
    <h1>TS基础语法</h1>
    <div class="ts-content" >
      <div class="ts-content-left">
        <button id="ts-root" class="raise" @click="baseTs()">点击基本类型</button>
        <button class="fill" @click="voidTs('voidStart')">voidTs</button>
        <button class="fill" @click="createNever('Never---error')">createNever</button>
        <button class="fill" @click="interfaceFun()">点击接口</button>
        <button class="fill" @click="expression()">type +函数重载</button>
        <button class="fill" @click="classTry">Class</button>
        <button class="fill" @click="extendFun">Class继承参数修饰符</button>
        <button class="fill" @click="Decorator">装饰器</button>
      </div>
      <div class="ts-content-right">
        <button class="fill" @click="Decorator">接口</button>
        <p>函数兼容性：</p>
        <p class="p-child">1.参数可以少，但不能多</p>
        <p class="p-child">2.函数参数的协变：参数类型可以多但不能少</p>
        <p>枚举的兼容性： <span class="click-span" @click="enumExp">enumExp</span></p>
        <p class="p-child">枚举可兼容数字，给枚举变量赋值数字时，数字代表枚举属性的下标</p>

        <h2>类型判断保护：</h2>
        <div>
          <p class="p-child">1.参数类型多种可选可以用typeof判断，然后调用响应数据类型的方法 double()</p>
          <p class="p-child">
            2.类继承多个类，判断参数是哪个类用instanceof，然后调用对应类中的属性
            <span class="click-span" @click="ClassProtect">ClassProtect</span>
          </p>
          <p>!.非空断言</p>
          <p>a?.b</p>
          <p class="p-child">判断a是否为null或者undefined，如果是直接返回null或者undefined，如果不是返回a.b</p>
          <p class="p-child">可选链不能用于赋值</p>
          <p class="p-child">可选链与函数调用let result = someInterface.customMethod?.();</p>
          <p class="p-child">使用空值合并操作符:<span class="click-span" @click="mergeNull">mergeNull</span></p>
          <p class="p-child2">只在第一个操作数为null 或 undefined 时（而不是其它假值）返回第二个操作数</p>

          <p>可辨识的联合类型<span class="click-span" @click="uniteType">unite</span></p>
          <p class="p-child">就是利用联合类型中的<span class="light">共有字段</span>进行类型保护的一种技巧</p>
          <p class="p-child"><span class="light">相同字段</span>的不同取值就是可辨识</p>

          <p>通过 key in xxx判断,有不同字段 <span class="click-span" @click="InExp">example</span></p>
          <p>
            自定义的类型保护 函数返回的是 xxx is xxtype <span class="click-span" @click="custFunction">example</span>
          </p>
        </div>
        <p>交叉类型 &将多个类型合并为一个类型 <span class="click-span" @click="crossFun">example</span></p>
        <p>映射类型 <span class="light">in keyof</span> <span class="click-span" @click="mappingFun">example</span></p>
        <div>
          <p>内置工具类型</p>
          <p class="p-child">Partial 可选<span class="click-span" @click="PartialFun">example</span></p>
          <p class="p-child">
            Required 必填 <span class="light">-?(-不让可选)</span
            ><span class="click-span" @click="RequiredFun">example</span>
          </p>
          <p class="p-child">Readonly 只读 <span class="click-span" @click="ReadOnlyFun">example</span></p>
          <p class="p-child">Pick 选取其中一个属性 <span class="click-span" @click="pickFunc">example</span></p>
          <p></p>
        </div>
        <div>
          <div>
            <p>条件类型:在定义泛型的时候能够添加进逻辑分支，以便泛型更加灵活</p>
            <p class="p-child">
              条件分支 type Animal 泛型= T extends Fish? Swimming: fly;<span class="click-span" @click="conditionBranch"
                >example</span
              >
            </p>
            <p class="p-child">条件分发 调用条件分支的时候 声明变量：类 Fish|Bird</p>
          </div>
          <div>
            <p>Exclude排除 从几个类型中删除一个类型</p>
            <p>Extract提取 从几个类型中确认一个类型</p>
            <p>NonNullable去除null或者undefined后的类型</p>
            <p @click="ReturnFun">ReturnType返回值类型 用ReturnType 尖括号内 typeof 函数返回值</p>
            <p>instanceType获取构造函数类型的实例类型</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import tryT from '../about'
export default {
  name: 'TsBasis2',
  components: {},
  methods: {
    baseTs() {
      const num: number = 111
      const str: string = '12122'
      //联合类型
      var age: string | number = 1
      var obj: object[] = [{}]
      var interests: Array<string> = ['23', '45'],
        interests2: string[] = ['2', '22']
      console.log('interests---', interests, 'interests2---', interests2)
      var arr: number[] = [1, 11]
      //元组 类似一个数组  它的长度和类型都是固定的数组
      const tuple: [string, number] = ['2', 1]
      console.log('元组：', tuple)
      const enum USER_ROLE1 {
        USER = 'user',
        ROLE = 'manger'
      }
      //“const”枚举只能用于属性或索引访问表达式或导入声明或导出赋值或类型查询的右侧。
      // console.log('enum:',USER_ROLE1)USER_ROLE1.USER
      enum USER_ROLE {
        USER = 'user',
        ROLE = 'manger'
      }
      //“const”枚举只能用于属性或索引访问表达式或导入声明或导出赋值或类型查询的右侧。
     
      console.log('enum:', USER_ROLE)
      let root: HTMLElement | null = document.getElementById('ts-root')
      root!.style.backgroundColor == 'red'
        ? (root!.style.backgroundColor = '#ff7f82')
        : (root!.style.backgroundColor = 'red') //断言不为空
      console.log('root!.style.backgroundColor', root!.style.backgroundColor == 'red')
      //null  undefined
      //它们都是其它类型的子类型  你可以把它们赋值给其他类型的变量
      //Type 'null' is not assignable to type 'string'.----strict模式下有一个"strictNullChecks":false,
      let nullTypeAaaign: string = null
      let undefinedTypeAaaign: number = undefined
    },
    voidTs(name: string): void {
      let trycc: string | number
      trycc = 1
      console.log('联合类型：', trycc.toString())
      console.log(`void类型:${name}`)
    },
    //never 是其它类型的子类型，代表不会出现的值
    //不加 throw new Error()会抛出 A function returning 'never' cannot have a reachable end point.返回“never”的函数不能具有可到达的端点。
    //在函数内部永远会抛出错物，导致函数无法正常结束
    createNever(message: string): never {
      console.log(`never mewssage:${message}`)
      throw new Error(`${message}`)
    },
    //接口
    interfaceFun() {
      //1接口可以用来描述对象有那些属性，属性是什么类型
      //2描述行为的抽象
      interface Ischool {
        readonly name: string
        age: number
        // 可填可不填
        address?: string
      }
      /**
       * implements:实现一个新的类，从父类或者接口实现所有属性和方法，包含一些新的功能.
       * 接口不能实现接口 或者类，所以实现implements只能用于类身上，即类可以实现接口或者类.
       * 接口可以继承接口或者类
       * 类不可以继承接口，类只能继承类 //错误提示Cannot extend an interface 'Ischool'. Did you mean 'implements'?
       */

      class User implements Ischool {
        name: 'string'
        age: 111
        address: 'xxxxss'
        getName() {
          return this.name
        }
      }
      let user = new User()

      console.log('interface---implements', user.age, user.getName())
      var school: Ischool = {
        name: 'xxx',
        age: 100,
        address: '五道口'
      }
      // school.name='ssss'//Cannot assign to 'name' because it is a constant or a read-only property.
      console.log('interface:', school)
      //接口可扩展  接口可继承接口
      interface showSchool extends Ischool {
        type: string
        [key: string]: any //任意类型
      }
      let showExtendsSchool = {
        ...school,
        type: '计算机',
        学校等级: 211
      }
      console.log('扩展interface:', showExtendsSchool)

      var create1 = (obj: object) => {}
      create1(function () {})
      console.log(create1)
      //2描述行为的抽象
      interface speackable {
        speack(): void
      }
      interface eatable {
        eat(): void
      }
      //类可以实现多个接口，但只能继承一个父类
      class Person implements speackable, eatable {
        speack() {
          console.log('类实现接口方法1')
        }
        eat() {
          console.log('类实现接口方法1')
        }
      }
      //类型推论：
      // 类型断言 表示这个对象就是这样一个类型
      let shcool2: Ischool = {
        name: '清华',
        age: 100,
        address: '北京'
      } as Ischool
      console.log(shcool2)
      //接口 还可以用来约束函数
      interface Discount {
        (price: number): number
      }
      let cost: Discount = function (price: number): number {
        return price * 2
      }
    },

    expression() {
      //type用来定义一个类型或者类型别名
      type GetUserNameType = (firstNmae: string, lastName: string) => void
      let getUserName: GetUserNameType = function (firstNmae: string, lastName: string): void {}
      type keyin = 'a' | 'b' | 'c'
      type keyOut = {
        [key in keyin]: any
      }
      const keyOutb: keyOut = { a: '1', b: '2', c: '3' }
      console.log('key in', keyOutb)
      //可选参数
      function print(name: string, age?: number): string {
        return name
      }
      console.log(print('可选参数'))
      //默认参数
      function ajax(url: string, method: string = 'GET') {
        console.log(url, method)
      }
      ajax('/users')
      //剩余参数
      function sum(...numbers: Array<number>) {
        return numbers.reduce((all, item) => all + item, 0)
      }
      console.log('剩余参数：', sum(1, 2, 3, 4, 6, 67))
      //函数重写是指子类重写继承父类中的方法
      //函数重载是指为同一函数提供多种类型的定义
      interface OverLoad {
        name?: string
        age?: number
      }
      let overLoad: OverLoad = {}
      // 重载函数这边定义了参数的类型所以val：any->string | number
      function attr(val: string, time: number): void
      function attr(val: number, time: number): void
      function attr(val: any, time?: any): void {
        console.log('overLoad-time:', time)
        if (typeof val === 'string') {
          overLoad.name = val
        } else if (typeof val === 'number') {
          overLoad.age = val
        }
      }
      attr('overload', 166)
      attr(202264, 255)
      // Argument of type 'true' is not assignable to parameter of type 'number'.
      // attr(true)
      console.log(overLoad)

      let delay = (ms: number) => {
        setTimeout(function () {
          console.log('TS箭头函数')
        }, ms)
      }
      delay(1000)
    },
    //类
    classTry() {
      class classromOne {
        name: string
        age: number
        constructor() {
          this.name = 'classrom'
          this.age = 26
        }
      }
      let p1 = new classromOne()
      console.log('classromOne', p1.name, p1.age)
      //存取
      class Classtwo {
        nameShow: string
        ageShow: number
        constructor(name: string, age: number) {
          this.nameShow = name
          this.ageShow = age
        }
        get name() {
          return this.nameShow
        }
        set name(newval: string) {
          this.nameShow = newval.toLocaleUpperCase()
        }
        get age() {
          return this.ageShow
        }
        set age(newval: number) {
          this.ageShow = newval + 2
        }
      }
      let p2 = new Classtwo('set', 11)
      console.log(p2.name, p2.age)
      p2.name = 'class'
      p2.age = 26
      console.log(p2.name, p2.age)
      //参数定义
      class Person {
        //1. name:string
        constructor(public name: string) {
          this.name = name
        }
      }
      let personTry = new Person('xxxx')
      //constructor(public readonly name:string)
      // personTry.name='dddd'//Cannot assign to 'name' because it is a constant or a read-only property.
      console.log(personTry.name)
    },
    extendFun() {
      //继承，一个新的接口或者类，从父类或者接口继承所有属性和方法，不可以重写属性，但可以重写方法
      //strictPropertyprInitialization,默认true强制初始化
      /**
       * 访问修饰符  public protected private
       * protected 自己和自己的子类内能访问，其它的不能访问
       * private  只能自己访问，自己的子类不能访问，其它的也不能
       * static 类的熟悉，用类型.static名  不是实例属性
       * 抽象类、抽象方法：abstract
       * 抽象描述一种抽象的概念，无法被实例化只能继承
       * 无法创建抽象类的实例Cannot create an instance of an abstract class.
       * 抽象方法不能在抽象类中实现只能在抽象类的具体子类中实现，且必须实现
       */
      class Common {
        name: string
        age: number
        protected address: string
        private money: number
        constructor(name: string, age: number, address: string, money: number) {
          this.name = name
          this.age = age
          this.address = address
          this.money = money
        }
        getName() {
          return this.name + this.address + this.money
        }
        setName(newName: string) {
          this.name = newName
        }
      }
      class Student extends Common {
        static type = 'Student'
        studentId: number
        constructor(name: string, age: number, address: string, money: number, studentId: number) {
          super(name, age, address, money)
          this.studentId = studentId
        }
        getName() {
          return this.name
        }
        getStudentId() {
          return this.name + this.studentId
        }
        setStudentId(newVal: number) {
          this.studentId = newVal
        }
      }

      let student = new Student('小明', 12, '北京', 100000, 1111111)
      console.log(student.getName())
      // Property 'address' is protected and only accessible within class 'Common' and its subclasses.
      console.log(student.name, student.age, student.getName(), student.getStudentId())
      student.name = '小红'
      student.age = 14
      student.studentId = 12332211
      console.log(student.name, student.age, student.studentId)
      console.log('Student---type', Student.type)
      let student2 = new Common('豆豆', 27, '陕西', 100000)
      console.log(student2.name, student2.age, student2.getName())
      student2.name = '豆豆2'
      console.log(student2.name)
      // 抽象类
      abstract class Animal {
        name: string
        abstract getName(): string
      }
      class Cat extends Animal {
        getName(): string {
          return this.name
        }
      }
      let cat = new Cat()
      cat.name = '猫'
      console.log('抽象类：', cat.getName())
    },
    Decorator() {
      /**
       * 装饰器
       * 装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、参数或者属性上，可以修改类的行为
       * 装饰器的写法氛围普通装饰器和装饰器工厂
       * 1.类装饰器 在类声明之前声明，用来监视、修改或替换类定义
       * 2.属性装饰器
       * 3.参数装饰器
       * 4.装饰器执行顺序
       */
      //1.类装饰器 在类声明之前声明，用来监视、修改或替换类定义
      // tryT()
      //  function enhancer(target:any){
      //     return class extends PersonT{
      //       constructor(interpret:string) {
      //         super(interpret);
      //       }
      //     }
      //  }
      //   @enhancer
      //   class PersonT {
      //     public interpret:string='类修饰器';
      //     constructor(interpret:string) {
      //       this.interpret = interpret;
      //     }
      //   }
      //   let p = new PersonT('zhuangshiqis')
      //   console.log(p.interpret)
    },
    enumExp() {
      enum Colors {
        red,
        yellow,
        bule,
        write
      }
      let color: Colors
      color = Colors.red
      console.log(color) //0
      color = 1
      console.log(color) //1
      let d: number
      d = Colors.bule
      console.log(d) //2
    },
    double(input: string | number | boolean) {
      if (typeof input === 'string') {
        return input + input
      } else {
        if (typeof input === 'number') {
          return input * 2
        } else {
          return !input
        }
      }
    },
    //类型保护
    ClassProtect() {
      class Animal {
        public name: string = 'cat'
        constructor(name: string) {
          this.name = name
        }
      }
      class Bird extends Animal {
        public fly: Boolean = true
        constructor(name: string) {
          super(name)
        }
      }
      function getName(a: Animal) {
        if (a instanceof Bird) {
          console.log(a.fly)
        } else {
          console.log(a.name)
        }
      }
      let b = new Bird('bird')
      getName(b)
      let a = new Animal('cat')
      getName(a)
    },
    mergeNull() {
      let customer = {
        name: 'Carl',
        details: { age: 82 }
      }
      //解析：customer.name?customer.name:undefined
      // let customerCity = customer?.name;
      // let customerCity = customer?.city??"暗之城";
      // console.log(customesrCity); // “暗之城”
      // 只在第一个操作数为null 或 undefined 时（而不是其它假值）返回第二个操作数
      // const foo = null??'default string';
      // console.log(foo);
    },
    uniteType() {
      interface WarnningButton {
        //字面量联合类型
        class: 'warnning'
        text1: '警告'
      }
      interface DangerButton {
        class: 'danger'
        text2: '危险'
      }
      type Button = WarnningButton | DangerButton
      function getButton(button: Button) {
        if (button.class == 'warnning') {
          console.log(button.text1)
        }
        if (button.class == 'danger') {
          console.log(button.text2)
        }
      }
      let button: DangerButton = {
        class: 'danger',
        text2: '危险'
      }
      getButton(button)
      let button2: WarnningButton = {
        class: 'warnning',
        text1: '警告',
        message: ''
      } as WarnningButton
      getButton(button2)
    },
    InExp() {
      interface One {
        fly: boolean
      }
      interface Two {
        long: number
      }
      function getType(val: One | Two) {
        if ('fly' in val) {
          console.log(val.fly)
        } else {
          console.log(val.long)
        }
      }
      let val: One = {
        fly: true
      }
      getType(val)
    },
    custFunction() {
      interface Bird {
        name: string
        leg: number
      }

      interface Dog {
        name: string
        leg: number
      }

      //没有相同字段可以定义一个类型保护函数
      function isBird(x: Bird | Dog): x is Bird {
        return (<Bird>x).leg === 2
        //return (x as Bird).swing == 2;
      }

      function getAnimal(x: Bird | Dog) {
        if (isBird(x)) {
          x.name
        }
        console.log(x.name)
        return x.name
      }
      let x: Bird = {
        name: 'bird',
        leg: 2
      }
      getAnimal(x)
      let x2: Dog = {
        name: 'dog',
        leg: 4
      }
      getAnimal(x2)
    },
    //交叉类型
    crossFun() {
      interface LandAnimal {
        name: string
        fly(): void
      }
      interface Marine {
        name: string
        Swimming(): void
      }
      type Animal = LandAnimal & Marine
      let a: Animal = {
        name: '🐟',
        fly() {},
        Swimming() {
          console.log('会泳游')
        }
      }
      console.log(a.name)
      a.fly()
      a.Swimming()
    },
    mappingFun() {
      interface Person {
        name: string
        age: number
        gender: 'male' | 'female'
      }
      type PartialPerson = {
        [key in keyof Person]?: Person[key]
      }
      let p: PartialPerson = {
        name: 'sss',
        age: 23
      }
    },
    PartialFun() {
      //效果同上映射
      //内置类型 Partial
      //原生
      // type Partial <T> = {[p in keyof T]?:T[p]}
      interface Person {
        name: string
        age: number
        gender: 'male' | 'female'
      }
      type ap = Partial<Person>
      const a: ap = {}
      console.log(a)
    },
    RequiredFun() {
      // type Required <T> = {[p in keyof T]-?:T[p]}
      interface Person {
        name: string
        age: number
        gender: 'male' | 'female'
      }
      type ap = Required<Person>
      const a: ap = {
        name: 'ss',
        age: 2,
        gender: 'male'
      }
      console.log(a)
    },
    ReadOnlyFun() {
      // type Readonly <T> = {ReadOnly[p in keyof T]:T[p]}
      interface Person {
        name: string
        age: number
        gender: 'male' | 'female'
      }
      type ap = Readonly<Person>
      let a: ap = {
        name: 'ss',
        age: 2,
        gender: 'male'
      }
      a.name
      console.log(a.name)
    },
    pickFunc() {
      // type Pick <T,k extends keyof T> = {[key in k]:T[key]}
      interface Person {
        name: string
        age: number
        gender: 'male' | 'female'
      }
      type pickPerson = Pick<Person, 'name'>
      let a: pickPerson = {
        name: 'pick'
      }
      a.name
      console.log(a.name)
    },
    conditionBranch() {
      interface Bird {
        name: string
      }
      interface fly {
        hight: number
      }
      interface Fish {
        name1: string
      }
      interface Fish2 extends Fish {
        name: string
      }
      interface Swimming {
        name: string
        long: number
      }
      type Animal<T> = T extends Fish ? Swimming : fly
      let a: Animal<Fish2> = {
        name: '🐟',
        long: 200
      }
      //bird ->fly
      let name1: Animal<Fish | Bird> = {
        hight: 300
      }
    },
    ReturnFun() {
      function getUserReturn() {
        return { name: 'sss' }
      }
      type user = ReturnType<typeof getUserReturn>
      let user1: user = {
        name: 'ssddd'
      }
    }
  }
}
</script>
<style scoped lang="less">
.ts-basic-one{
  h1{
    font-size: 2rem;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
  }
}
.ts-content {
  display: flex;
  &-left {
    width: 40rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    button {
      width: 20rem;
    }
  }
  &-right {
    flex: 1;
    font-size: 1.2rem;
  }
}


p {
  text-align: left;
  font-weight: 600;
}
h2 {
  text-align: left;
}
.p-child {
  font-weight: 400;
  text-indent: 1em;
}
.p-child2 {
  font-weight: 400;
  text-indent: 2em;
}
.click-span {
  padding: 5px;
  background: skyblue;
}
.light {
  color: red;
}
</style>
