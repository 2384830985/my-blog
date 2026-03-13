# OpenClaw - 你的个人 AI Agent 网关

![OpenClaw](https://mintcdn.com/clawdhub/-t5HSeZ3Y_0_wH4i/assets/openclaw-logo-text-dark.png)

> *"EXFOLIATE! EXFOLIATE!"* — 一只来自赛博空间的小龙虾 🦞

## 什么是 OpenClaw？

OpenClaw 是一个**自托管网关**，连接你的聊天应用（WhatsApp、Telegram、Discord、iMessage 等）与 AI 编程助手（如 Pi）。只需在本地或服务器上运行一个 Gateway 进程，就能随时随地通过消息应用与 AI 助手对话。

## 核心特性

- 🌍 **多渠道支持** - 一个 Gateway 同时服务 WhatsApp、Telegram、Discord、iMessage
- 🔌 **插件扩展** - 支持 Mattermost 等更多渠道
- 👥 **多 Agent 路由** - 按 Agent、工作区或发送者隔离会话
- 📱 **移动节点** - 配对 iOS 和 Android 设备，支持 Canvas、相机和语音
- 🎨 **Web Control UI** - 浏览器控制面板
- 🔒 **自托管** - 数据完全可控

## 快速开始

### 1. 安装 OpenClaw

```bash
npm install -g openclaw@latest
```

### 2. 初始化

```bash
openclaw onboard --install-daemon
```

### 3. 登录渠道并启动 Gateway

```bash
openclaw channels login
openclaw gateway --port 18789
```

## 配置示例

OpenClaw 配置位于 `~/.openclaw/openclaw.json`：

```json
{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+15555550123"],
      "groups": { "*": { "requireMention": true } }
    }
  },
  "messages": {
    "groupChat": { "mentionPatterns": ["@openclaw"] }
  }
}
```

## 访问控制台

Gateway 启动后，打开浏览器访问：
- 本地默认：http://127.0.0.1:18789/

## 系统要求

- Node 24（推荐）或 Node 22 LTS（22.16+）
- API Key（来自你选择的 AI 提供商）
- 5 分钟时间

## 使用场景

| 场景 | 说明 |
|------|------|
| 个人 AI 助手 | 通过微信/Telegram 随时调用 AI |
| 开发辅助 | 编程问题直接问，AI 返回代码 |
| 多平台统一 | 一个入口管理多个聊天平台 |
| 移动端集成 | iOS/Android 设备作为输入输出节点 |

## 与传统方案对比

| 特性 | OpenClaw | ChatGPT Web | 其他 Agent |
|------|----------|-------------|------------|
| 部署方式 | 自托管 | SaaS | SaaS/自托管 |
| 数据控制 | ✅ 完全可控 | ❌ 第三方 | ⚠️ 部分 |
| 多渠道 | ✅ 统一入口 | ❌ 单一 | ⚠️ 部分 |
| 插件支持 | ✅ 官方+社区 | ❌ | ⚠️ 有限 |

## 总结

OpenClaw 是开发者和高级用户的理想选择——想要一个可以在任何地方消息发送的 AI 助手，又不想放弃对数据的控制。它开源、免费、MIT 许可，社区驱动。

> *"给我一个网关，我能撬动整个 AI 世界"* 🦞

---

**参考链接：**
- 官网：https://openclaw.ai
- 文档：https://docs.openclaw.ai
- GitHub：https://github.com/openclawdev/openclaw
