### in

```typescript
// in 在映射类型中，可以对联合类型进行遍历

type Keys = 'firstName' | 'lastName'

//  { firstName: string , lastName : string }
type Person = {
  [key in Keys]: string
}

```

可以配合 `keyof` 来提取索引

```typescript
const person = {
  name: 'jack',
  age: 10
}

// keyof  name & age
type Person = {
  [K in keyof typeof person]: (typeof person)[K]
}

// { name : string , age : number }
const testPerson: Person = {
  name: 'dddd',
  age: 1000
}

```

