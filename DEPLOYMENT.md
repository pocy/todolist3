# 部署指南

## 部署到 Vercel

### 方法 1: 使用 Vercel CLI（推荐）

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel 账户**
   ```bash
   vercel login
   ```

3. **在项目根目录运行部署命令**
   ```bash
   vercel --prod
   ```

4. **按照提示完成配置**
   - 项目名称：默认使用当前文件夹名
   - 部署设置：默认设置即可
   - 域名：会自动生成一个 vercel.app 域名

### 方法 2: 通过 GitHub 集成

1. **将代码推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **在 Vercel 上部署**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - Vercel 会自动检测这是一个 Next.js 项目
   - 点击 "Deploy" 开始部署

### 方法 3: 使用 Vercel Desktop App

1. 下载并安装 Vercel Desktop App
2. 将项目文件夹拖入应用
3. 点击部署按钮

## 本地开发环境设置

### 1. 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 2. 启动开发服务器

```bash
# 使用 npm
npm run dev

# 使用 yarn
yarn dev

# 使用 pnpm
pnpm dev
```

### 3. 构建生产版本

```bash
# 使用 npm
npm run build
npm run start

# 使用 yarn
yarn build
yarn start

# 使用 pnpm
pnpm build
pnpm start
```

## 环境变量配置

如果你的应用需要环境变量，请创建 `.env.local` 文件：

```bash
# .env.local
NEXT_PUBLIC_APP_NAME=ToDoList
```

## 域名配置

部署成功后，你可以：

1. **使用默认域名**：`your-app-name.vercel.app`
2. **配置自定义域名**：在 Vercel 控制台的 Settings > Domains 中配置

## 部署状态检查

- 访问 [vercel.com/dashboard](https://vercel.com/dashboard) 查看部署状态
- 每次 git push 都会自动触发新的部署（如果使用 GitHub 集成）

## 故障排除

### 常见问题：

1. **构建失败**
   - 检查 `package.json` 中的依赖版本
   - 确保所有必要的文件都已提交

2. **TypeScript 错误**
   - 运行 `npm run build` 检查类型错误
   - 确保 `tsconfig.json` 配置正确

3. **运行时错误**
   - 检查浏览器控制台的错误信息
   - 确保所有依赖都已正确安装

## 性能优化建议

1. **启用压缩**：已在 `next.config.js` 中配置
2. **图片优化**：使用 Next.js 的 `Image` 组件
3. **代码分割**：Next.js 自动进行代码分割
4. **缓存策略**：Vercel 自动处理静态资源缓存

## 监控和分析

- 使用 Vercel Analytics 监控应用性能
- 查看 Vercel Dashboard 中的访问统计 