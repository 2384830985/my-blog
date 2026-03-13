# Mac 开发环境配置指南

![Mac](https://images.unsplash.com/photo-1617331674020-de7e5d7e641a?w=800)

工欲善其事，必先利其器。一个好的开发环境能大幅提升效率。

## Homebrew - 包管理器

Mac 必备的软件包管理器。

### 安装

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 常用命令

```bash
brew install node          # 安装软件
brew list                  # 列出已安装
brew outdated              # 检查更新
brew upgrade               # 更新软件
brew cleanup               # 清理旧版本
```

## nvm - Node 版本管理

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 常用命令
nvm install 20              # 安装 Node 20
nvm list                   # 列出已安装版本
nvm use 20                 # 切换到 Node 20
nvm default 20             # 设置默认版本
```

## pnpm - 更快的包管理器

比 npm 和 yarn 更快、更节省空间。

```bash
npm install -g pnpm

# 常用命令
pnpm install              # 安装依赖
pnpm add lodash           # 添加依赖
pnpm remove lodash        # 移除依赖
```

## Git 配置

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# 生成 SSH Key
ssh-keygen -t ed25519 -C "your@email.com"
```

## VS Code 插件推荐

| 插件 | 用途 |
|------|------|
| GitLens | Git 可视化 |
| Prettier | 代码格式化 |
| ESLint | 代码检查 |
| Tailwind CSS IntelliSense | Tailwind 提示 |
| Error Lens | 错误展示 |

## Docker Desktop

```bash
# 安装
brew install --cask docker

# 启动后常用命令
docker ps                  # 查看运行中的容器
docker images             # 查看镜像
docker-compose up -d      # 启动服务
```

## 效率工具

- **Alfred** - 快速启动器
- **Raycast** - Mac 效率工具（新贵）
- **Iterm2** - 终端替代品
- **Oh My Zsh** - Zsh 框架

## 总结

Mac 是开发者的好朋友，配合这些工具，效率直接起飞 🚀
