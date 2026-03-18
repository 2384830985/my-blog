import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/my-blog/',
  title: "我的博客",
  description: "个人技术博客",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/vitepress-guide' },
      { text: '今日大事', link: '/blog/today-news' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/2384830985/my-blog' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026'
    }
  }
})
