# 基础类型

- `boolean`
- `number`
- `string`
- 数组
  - 在元素类型后接上[] , `number[]`
  - 使用泛型 `Array<number>`
- 元组
  - 表示一个一直元素数量和类型的数组，和数组区别是类型可以不同
    ```js
    let x: [string, number];
    x = ["hello", 10];
    x[3] = "world"; //ok,直接赋值
    x[4] = true; // error，只能用 string/number 型
    ```
- 枚举
  - `enum Color{red,green,blue}`
- `any`
- `void`
- `null and undefined`
- `never`
- `object`

# 接口

- 简单使用
  ```js
  interface person {
    name: string;
    age: number;
  }
  function getPerson(per: person) {
    console.log(per);
  }
  getPerson({ name: "张三", age: 10 });
  ```
- 非必填项，使用问号

  ```js
  interface person {
    name?: string;
    age: number;
  }
  const getPerson = (per: person) => {
    console.log(per);
  };
  getPerson({ age: 10 });
  ```

  -只读属性 readonly

  ```typescript
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  let p: Point = { x: 10, y: 20 }; //只能初始化
  p1.x = 5; //error，不能修改
  ```

- 实现接口

```typescript
interface person {
  name: string;
  age: number;
  getName(name: string);
}
class Person implements perosn {
  name: string;
  age: number;
  getName(name: string) {
    this.name = name;
  }
}
```

- 继承接口
  ```typescript
  interface person {
    name: string;
  }
  interface student extends person {
    stuNum: number;
  }
  let stu = <student>{};
  stu.name = "张三";
  stu.stuNum = 10;
  ```

# 类

- 简单使用
  ```typescript
  class Person {
    constructor(name: string) {
      this.name = name;
    }
    name: string;
    sayName = () => console.log(this.name);
  }
  let per = new Person("张三");
  ```
