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
