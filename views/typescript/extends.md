### extends（类型约束）

在官方的定义中称为条件类型（Conditional Types），可以理解为「三目运算」，T extends U ? X : Y，如果 T 是 U 的子集，那么就返回 X 否则就返回 Y

- 一般与泛型配合使用。
- extends 会遍历联合类型，返回的也是联合类型。

```typescript
type OnlyNumber<T> = T extends number ? T : never

type N = OnlyNumber<1 | 2 | true | 'a' | 'b'>  // 1 | 2
```



通常情况下，分布的联合类型是我们想要的， 但是也可以让 extends 不遍历联合类型，而作为一个整体进行判断与返回。只需要在 extends 关键字的左右两侧加上方括号 [] 进行修饰即可。

```typescript
// 分布的条件类型
type ToArray<T> = T extends any ? T[] : never;

type R = ToArray<string | number>;

// type R = string[] | number[]
```

```typescript
// 不分布的条件类型
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

type R = ToArrayNonDist<string | number>;

// type R = (string | number)[]
```

