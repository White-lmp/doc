```typescript
// typeof 的作用是把「值空间」的数据转换成「类型空间」的数据。

const MARKETING_TYPE = {
  ISV: 'ISV_FOR_MERCHANT',
  ISV_SELF: 'ISV_SELF',
  MERCHANT: 'MERCHANT_SELF'
}

type MarketingType = typeof MARKETING_TYPE

/**
 * type MarketingType = {
 *   ISV: string
 *   ISV_SELF: string
 *   MERCHANT: string
 * }
 */


```

