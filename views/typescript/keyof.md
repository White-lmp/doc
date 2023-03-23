```typescript
// keyof 可用于获取对象或数组等类型的所有键，并返回一个联合类型

interface Person {
    name: string
    age: number
}

type K1 = keyof Person  // "name" | "age"

type K2 = keyof []      // "length" | "toString" | "push" | "concat" | "join"

type K3 = keyof { [x: string]: Person }  // string | number
```

