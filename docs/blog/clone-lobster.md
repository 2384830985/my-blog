# 诸葛的小龙虾 - OpenClaw 配置自动备份工具

> 配置自动备份，再也不怕换机重装

## 背景

作为一个深度使用 OpenClaw 的开发者，配置和上下文的重要性不言而喻。从工作区文件（SOUL.md、USER.md、MEMORY.md）到已安装的 Skills，从对话上下文到系统配置，一旦需要迁移或重装，丢失这些数据的代价非常高。

于是我写了一个备份工具——**诸葛的小龙虾**（clone-lobster）。

## 功能特性

### 备份内容

| 类别 | 路径 | 说明 |
|------|------|------|
| 工作区 | ~/.openclaw/workspace/ | AGENTS.md, SOUL.md, USER.md, MEMORY.md, memory/ 等 |
| 配置 | ~/.openclaw/ | openclaw.json, exec-approvals.json, cron/, identity/ |
| Skills | ~/.openclaw/skills/ | 所有用户安装的 skills |
| 上下文 | ~/.openclaw/agents/ | session 数据 (*.jsonl), sessions.json, models.json |
| Memory | ~/.openclaw/memory/ | memory 索引数据 |

### 两种备份策略

1. **main 分支** — 全量日常备份
   - 每次配置变更自动推送
   - 用于常规恢复

2. **专项分支** — 特定配置的快照
   - 命名格式：`{配置主题}-{YYYY-MM-DD}`
   - 适用于重要配置的独立存档

### 自动触发规则

- 修改了工作区文件（AGENTS.md, SOUL.md, USER.md 等）
- 安装了新的 skill
- 修改了 openclaw.json 配置
- 用户明确要求"备份"

## 使用方式

### 手动备份

```bash
cd ~/.openclaw/workspace/zhuge-lobster-backup
git add .
git commit -m "描述本次变更"
git push origin main
```

### 手动恢复

```bash
# 查看历史
git log

# 恢复指定文件
git checkout <commit-hash> -- <file-path>

# 或者用 git show
git show <commit-hash>:<file-path> > <file-path>
```

## 仓库地址

🔗 https://github.com/2384830985/zhuge-lobster-backup

（私有仓库，仅自己访问）

## 总结

有了小龙虾，配置跟随时光永驻。再也不怕换电脑、不怕重装系统，所有的习惯和配置都能一键恢复。

🦞 peace out.
