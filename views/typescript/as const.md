### as const

```typescript
// as const 是一个类型断言，作用也是把「值空间」的数据转换成「类型空间」的数据，并且设置成只读。

let x = 'hello' as const // x: 'hello'

let y = [10, 20, 30] as const // y: readonly [10, 20, 30]

let z = { text: 'hello',xxx:'xxxx' } as const // z: { readonly text: 'hello', readonly xxxx:'xxxx' }

```

```typescript
const person = {
  age: 10,
  name: 'jack',
  gender: '男'
} as const

type ReadonlyPerson = typeof person

const readonlyPerson: RWPerson = {
  age: 10,
  name: 'jack',
  gender: '男'
}
/**
 * type person = {
 *   readonly age: number
 *   readonly name: string
 *   readonly gender: string
 * }
 */

// type Person = { [K in keyof Partial<ReadonlyPerson>]: ReadonlyPerson[K] }
// 获取value
type PersonValue = ReadonlyPerson[keyof ReadonlyPerson]
// type PersonValue = 10 | 'jack' | '男'

```

