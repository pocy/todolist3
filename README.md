# Next.js ToDoList 待办清单

一个功能完整的待办事项管理应用，基于 Next.js 14 构建，支持拖拽排序功能。

## 功能特性

- ✅ 待办事项清单列表
- ✅ 添加新的待办事项
- ✅ 删除待办事项
- ✅ 拖拽排序功能
- 📱 响应式设计，支持移动端
- 🎨 现代化 UI 设计

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **@dnd-kit** - 拖拽功能库
- **Lucide React** - 图标库
- **CSS3** - 样式设计

## 开发环境运行

首先安装依赖：

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

然后运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 部署到 Vercel

### 方式一：通过 Vercel CLI

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 在项目目录运行：
```bash
vercel
```

3. 按照提示完成部署配置

### 方式二：通过 GitHub 集成

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 上导入你的 GitHub 仓库
3. Vercel 会自动检测这是一个 Next.js 项目并完成部署

## 项目结构

```
├── app/
│   ├── components/
│   │   ├── AddTodo.tsx      # 添加待办事项组件
│   │   ├── TodoList.tsx     # 待办事项列表组件
│   │   └── TodoItem.tsx     # 单个待办事项组件
│   ├── types/
│   │   └── todo.ts          # 类型定义
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局
│   └── page.tsx             # 首页
├── next.config.js           # Next.js 配置
├── package.json             # 项目依赖
├── tsconfig.json            # TypeScript 配置
└── README.md                # 项目文档
```

## 使用说明

1. **添加待办事项**：在输入框中输入待办内容，点击"添加"按钮或按回车键
2. **删除待办事项**：点击每个待办事项右侧的垃圾桶图标
3. **拖拽排序**：点击并拖拽每个待办事项左侧的拖拽图标来重新排序

## 自定义样式

应用使用了渐变背景和现代化的卡片式设计。你可以在 `app/globals.css` 中修改样式来适应你的设计需求。

## 许可证

MIT 