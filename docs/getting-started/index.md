---
title: 安装
description: Create a new Next.js application with `create-next-app`. Set up TypeScript, styles, and configure your `next.config.js` file.
---

系统要求:

- Node.js 16.14 或更高版本。
- 支持 macOS、Windows（包括 WSL）和 Linux。

## 自动安装

我们强烈建议通过`create-next-app`来创建一个新的 Next 应用,因为一切都会自动初始化好.

创建项目运行:

```bash filename="Terminal"
npx create-next-app@latest
```

安装时,你会看到以下提示

```txt filename="Terminal"
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias? No / Yes
What import alias would you like configured? @/*
```

之后,`create-next-app`将会通过项目名创建一个文件夹,并安装所需的依赖

> **Good to know**:
>
> - Next.js 现在默认提供 TypeScript、ESLint 和 Tailwind CSS 配置。
> - 你可以选择在项目根目录中使用 src 目录,将应用程序的代码与配置文件分开。

## 手动安装

手动安装需要安装以下依赖

```bash filename="Terminal"
npm install next@latest react@latest react-dom@latest
```

打开 package.json,并添加以下内容

```json filename="package.json"
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

这些脚本对应着不同的开发阶段

- `dev`: 在开发模式启动应用
- `build`: 为生产阶段构建应用
- `start`: 启动生产服务器
- `lint`: 初始内置的 eslint 配置

### 创建目录

Next.js 使用文件系统路由，这意味着您的应用程序中的路由是由文件结构决定的。

#### `app` 文件夹

对于新项目,我们强烈建议使用 app 路由.这允许您使用 React 的最新功能,它是 pages 路由的进化版.
创建一个 app/ 文件夹，然后添加一个 layout.tsx 和一个 page.tsx 文件。当用户访问您应用程序的根目录（/）时，这些文件将被渲染。
在`app/layout.tsx`下用 `<html>` 和 `<body>` 创建一个根布局

```tsx filename="app/layout.tsx" switcher
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

最后用一些初始内容创建一个 home page `app/page.tsx`

```tsx filename="app/page.tsx" switcher
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

> **Good to know**: 如果你忘记创建 `layout.tsx`, Next.js 会在你`next dev`时自动创建

#### `public` 文件夹

创建`public`文件夹来存放静态资源(图片,字体等),可以通过 `/` 直接访问

## 运行开发服务器

1. 通过 `npm run dev` 开启一个开发服务器
2. 访问 `http://localhost:3000`
3. 编辑 `app/layout.tsx` (或 `pages/index.tsx`)保存,你会看到浏览器里的内容热更新了
