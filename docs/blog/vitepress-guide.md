# VitePress 博客搭建指南

![VitePress](https://vitepress.dev/logo.svg)

VitePress 是一个由 Vue.js 创始人尤雨溪开发的静态站点生成器，专门为文档和博客设计。

## 为什么选择 VitePress

- ⚡ **速度极快** - 基于 Vite + Vue
- 📱 **响应式** - 天生支持移动端
- 🎨 **简洁美观** - 默认主题就很漂亮
- 🔧 **易于定制** - 完全可扩展

## 快速开始

### 1. 创建项目

```bash
mkdir my-blog && cd my-blog
pnpm init
```

### 2. 安装 VitePress

```bash
pnpm add -D vitepress vue
```

### 3. 初始化

```bash
pnpm vitepress init
```

按照提示完成配置即可。

## 目录结构

```
docs/
├── .vitepress/
│   └── config.mts      # 配置文件
├── blog/               # 博客文章
│   └── hello.md
├── index.md            # 首页
└── about.md            # 关于页
```

## 配置示例

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的博客",
  description: "个人技术博客",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/hello' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourname' }
    ]
  }
})
```

## 部署到 GitHub Pages

使用 GitHub Actions 自动部署，参考 [官方文档](https://vitepress.dev/guide/deploy#github-pages)。

## 总结

VitePress 是搭建技术博客的绝佳选择，简单易用，性能出色！

> 工具选对了，写作效率翻倍 📝
