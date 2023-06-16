import { defineConfig } from 'vitepress'

const relative = path => `/views${path}`
// const relative = path => `/views${path}`
export default defineConfig({
  title: '我的文档',
  base:'/doc/',
  description: 'A VitePress Site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: relative('/examples/markdown-examples/') },
          { text: 'Runtime API Examples', link: relative('/examples/api-examples/') }
        ]
      },
      {
        text: 'Typescript',
        items: [
          { text: 'typeof', link: relative('/typescript/typeof') },
          { text: 'keyof', link: relative('/typescript/keyof') },
          { text: 'as const', link: relative('/typescript/as const') },
          { text: 'extends', link: relative('/typescript/extends') },
          { text: 'infer', link: relative('/typescript/infer') },
          { text: 'in', link: relative('/typescript/in') },
          { text: '字符串索引（对象）', link: relative('/typescript/字符串索引（对象）') },
          { text: '数字索引（数组）', link: relative('/typescript/数字索引（数组）') }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
})
