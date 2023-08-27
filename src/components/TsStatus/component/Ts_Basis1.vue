<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="left">
      <button class="handle" @click="interfaceFunction">泛型</button>
    </div>
    <div class="context">
      <p>泛型是指在定义函数、接口或者类的时候，不预定指定具体的类型，而是在使用的时候再指定类型的一种特性</p>
      <p>泛型T作用域只限于函数内部使用</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TsBasis1',

  setup(props, contex) {
    let interfaceFunction = (param?: any): void => {
      //函数
      function createArray<T>(length: number, value: T): Array<T> {
        let result: Array<T> = []
        for (let i = 0; i < length; i++) {
          result[i] = value
        }
        return result
      }
      let result = createArray<String>(3, 'x')

      //默认参数
      function createArray2<T = number>(length: number, value: T): Array<T> {
        let result: Array<T> = []
        for (let i = 0; i < length; i++) {
          result[i] = value
        }
        return result
      }
      let result2 = createArray2<string>(3, 'x')

      //类数组 arguements
      function sum(...args: any[]) {
        let arg: IArguments = arguments
        for (let i = 0; i < arg.length; i++) {
          console.log(arg[i])
        }
      }
      sum(1, 2, 3, '4', '类数组')

      console.log('setup:', result)

      class MyArray<T> {
        private list: T[] = []
        add(val: T) {
          this.list.push(val)
        }
        getMax(): T {
          let max = this.list[0]
          for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] > max) {
              max = this.list[i]
            }
          }
          return max
        }
      }

      let classTry = new MyArray<number>()
      classTry.add(4)
      classTry.add(3)
      classTry.add(6)
      let max = classTry.getMax()
      console.log('泛型类', max)

      //接口泛型
      interface Calculate {
        <T>(a: T, b: T): T
      }
      let add: Calculate = function <T>(a: T, b: T): T {
        return a
      }
      let result4 = add<number>(4, 5)
      console.log('接口泛型：', result4)
      interface Carts<T> {
        list: T[]
      }
      let cart: Carts<number> = {
        list: [1, 3, 3]
      }
      //泛型类型别名
      //泛型类型别名可以表达更复杂的类型
      type Cart2<T> = { list: T[] } | T[]
      let c1: Cart2<string> = { list: ['2'] }

      //多个类型参数  如何在不增加中间变量的情况下，交换两个变量的值
      function swap<A, B>(tuple: [A, B]): [B, A] {
        return [tuple[1], tuple[0]]
      }
      let result5 = swap<Number, Number>([1, 2])
      console.log('交换参数：', result5)

      //泛型的约束
      //在函数中使用泛型的时候，由于预先不知道具体类型，所以不能访问相应类型的方法,可以用接口解决
      interface lengthParent {
        length: number
      }
      function logger<T extends lengthParent>(val: T) {
        //Property 'length' does not exist on type 'T'
        console.log(val.length)
      }
      logger('zhang')
    }
    return {
      interfaceFunction
    }
  }
})
</script>
<style scoped lang="scss">
$button_height: 45px;
@mixin button-style($color: aqua, $width: 200px) {
  width: $width;
  background-color: $color;
  border: 1px solid white;
}
.home {
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 500px;
  }
  .context {
    text-align: left;
    flex: 1;
    background-color: bisque;
    padding: 5px;
  }
  .handle {
    height: $button_height;
    line-height: $button_height;
    @include button-style(#9addf1);
  }
}
</style>
