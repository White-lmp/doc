### infer

infer 关键字可以对运算过程中的类型进行存储，类似于定义一个变量。
内置的工具类型 ReturnType 就是基于此特性实现的。

- 获取函数返回类型
- 提取对象属性类型

```typescript
// 获取函数返回类型
type ReturnType<T> = T extends (...args: any) => infer R ? R : any;

type R1 = ReturnType<() => number>     // R1: number
type R2 = ReturnType<() => boolean[]>  // R2: boolean[]
```

```typescript
// 从对象里读取属性
const person = {
  a: 10,
  b: 'jack',
  gender: '男'
}

type ExtractStringType<T> = T extends { a: infer R; b: infer D } ? (R extends number ? D : never) : never
type ExtractNumberType<T> = T extends { a: infer R; b: infer D } ? (R extends number ? R : D) : never

type str = ExtractStringType<typeof person>
// type str = string
type num = ExtractNumberType<typeof person>
// type num= number
```

