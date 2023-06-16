import { defineConfig } from 'vitepress'

const relative = path => `/views${path}`
export default defineConfig({
  title: '我的文档',
  base: './',
  description: 'A VitePress Site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/views/examples/markdown-example' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: relative('/views/examples/markdown-examples') },
          { text: 'Runtime API Examples', link: relative('/views/examples/api-examples') }
        ]
      },
      {
        text: 'Typescript',
        items: [
          { text: 'typeof', link: relative('/views/typescript/typeof') },
          { text: 'keyof', link: relative('/views/typescript/keyof') },
          { text: 'as const', link: relative('/views/typescript/as const') },
          { text: 'extends', link: relative('/views/typescript/extends') },
          { text: 'infer', link: relative('/views/typescript/infer') },
          { text: 'in', link: relative('/views/typescript/in') },
          { text: '字符串索引（对象）', link: relative('/views/typescript/字符串索引（对象）') },
          { text: '数字索引（数组）', link: relative('/views/typescript/数字索引（数组）') }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
