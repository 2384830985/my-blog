#!/usr/bin/env node
/**
 * 博客文章管理脚本
 * 用法: node scripts/blog-posts.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BLOG_DIR = path.join(__dirname, '../docs/blog')

// 获取所有博客文章
function getPosts() {
  const files = fs.readdirSync(BLOG_DIR)
  const posts = files
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const content = fs.readFileSync(path.join(BLOG_DIR, f), 'utf-8')
      const titleMatch = content.match(/^#\s+(.+)$/m)
      const dateMatch = content.match(/^date:\s*(.+)$/m)
      const title = titleMatch ? titleMatch[1] : f.replace('.md', '')
      const date = dateMatch ? dateMatch[1] : '2026-03-13'
      return {
        title,
        date,
        link: `/my-blog/blog/${f.replace('.md', '.html')}`
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 20)
  
  return posts
}

// 生成首页最新文章数据
function generateLatestPosts() {
  const posts = getPosts()
  const latestPosts = posts.slice(0, 20)
  
  const content = `// 自动生成，请勿手动修改
export const latestPosts = ${JSON.stringify(latestPosts, null, 2)}
`
  
  fs.writeFileSync(
    path.join(__dirname, '../docs/blog/latest-posts.data.js'),
    content
  )
  
  console.log(`已更新最新文章列表，共 ${latestPosts.length} 篇`)
}

// 生成今日大事
async function fetchTodayNews() {
  // 这里可以调用新闻 API
  // 目前先创建一个模板
  const template = `---
date: ${new Date().toISOString().split('T')[0]}
---

# 今日大事

> 自动更新于 ${new Date().toLocaleString('zh-CN')}

暂无重大新闻。
`
  
  const today = new Date().toISOString().split('T')[0]
  const filePath = path.join(BLOG_DIR, `today-${today}.md`)
  
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template)
    console.log(`已创建今日大事: ${filePath}`)
  }
}

// 主命令
const cmd = process.argv[2] || 'update'

if (cmd === 'update') {
  generateLatestPosts()
} else if (cmd === 'news') {
  fetchTodayNews()
} else if (cmd === 'all') {
  fetchTodayNews()
  generateLatestPosts()
}
