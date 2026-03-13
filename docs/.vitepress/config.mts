import { defineConfig } from 'vitepress'
import { getLatestPosts } from './posts.data.mjs'

export default defineConfig({
  base: '/my-blog/',
  title: "我的博客",
  description: "个人技术博客",
  themeConfig: {
    nav: [
      { text: '首页', link: '/my-blog/' },
      { text: '博客', link: '/my-blog/blog/vitepress-guide' },
      { text: '今日大事', link: '/my-blog/blog/today-news' }
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
