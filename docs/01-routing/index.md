---
title: Routing Fundamentals
description: Learn the fundamentals of routing for front-end applications.
---

应用程序的骨架就是路由, 本页将向您介绍 **网络路由的基本概念** 以及如何在 Next.js 中处理路由。

## 术语

首先，您将看到这些术语在整个文档中被使用。以下是一个快速参考：

<Image
  alt="Terminology for Component Tree"
  srcLight="/docs/light/terminology-component-tree.png"
  srcDark="/docs/dark/terminology-component-tree.png"
  width="1600"
  height="832"
/>

- **Tree:** 一种用于可视化层次结构的约定。例如，包含父组件和子组件的组件树、文件夹结构等。
- **Subtree:** Tree 的一部分,始于新的根节点(first),终于叶子结点(last)
- **Root**: tree 或 subtree 的首个节点
- **Leaf:** 子树中没有子节点的节点.例如 URL 路径中的最后一段。

## The `app` Router

在 Next.js 13 版本中, Next.js 引入了新的 **App Router** ,基于服务器组件,支持共享布局、嵌套路由、加载状态、错误处理等。

App Router 工作在一个新的名为 app 的文件夹中,`app`文件夹和`pages`文件夹一起工作,以允许增量采用.

> **Good to know**: App 路由的优先级高于 Pages,跨文件夹的路由不应该用相同的 URL,构建时会报错以避免冲突.

默认情况下,在 app 路径下的组件都是服务器组件,这会让你更容易的采用这种性能优化.当然你仍然可以使用客户端组件

## Roles of Folders and Files

Next.js 基于文件系统构建路由

- **文件夹** 用来构建路由. 在这里，“路由”指的是从根文件夹到最终的叶子文件夹的单个嵌套文件夹路径，遵循文件系统的层次结构。这个路径包含一个 page.js 文件，用于定义具体的路由页面。
- **文件** 用来创建 UI,具体看下文的路由片段

## Route Segments

路由中的每一个文件夹表现为一个路由片段,每个路由片段都会映射到 URL 路径中的相应段。

## Nested Routes

你可以通过嵌套文件夹来实现嵌套路由,例如你可以通过在 app 文件夹中创建`/dashboard/settings`嵌套文件夹来实现嵌套的路由.

`/dashboard/settings` 由三个路由片段组成

- `/` (root 片段)
- `dashboard` (片段)
- `settings` (叶子片段)

## File Conventions

Next.js 提供了一系列有着特别行为的用来创建 ui 的可嵌套的特殊文件

|                                                                                       |                                                                                                |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [`layout`](/docs/app/building-your-application/routing/pages-and-layouts#layouts)     | 为片段和它的子节点分享 UI                                                                      |
| [`page`](/docs/app/building-your-application/routing/pages-and-layouts#pages)         | Unique UI of a route and make routes publicly accessible                                       |
| [`loading`](/docs/app/building-your-application/routing/loading-ui-and-streaming)     | Loading UI for a segment and its children                                                      |
| [`not-found`](/docs/app/api-reference/file-conventions/not-found)                     | Not found UI for a segment and its children                                                    |
| [`error`](/docs/app/building-your-application/routing/error-handling)                 | Error UI for a segment and its children                                                        |
| [`global-error`](/docs/app/building-your-application/routing/error-handling)          | Global Error UI                                                                                |
| [`route`](/docs/app/building-your-application/routing/route-handlers)                 | Server-side API endpoint                                                                       |
| [`template`](/docs/app/building-your-application/routing/pages-and-layouts#templates) | Specialized re-rendered Layout UI                                                              |
| [`default`](/docs/app/api-reference/file-conventions/default)                         | Fallback UI for [Parallel Routes](/docs/app/building-your-application/routing/parallel-routes) |

> **Good to know**: `.js`, `.jsx`, `.tsx` 文件拓展类型都可用于这些特殊文件

## Component Hierarchy(层级结构)

React 组件在路由片段中定义为特殊的文件名会渲染在特别的
在路由片段的特殊文件中定义的 React 组件按照特定的层次结构进行渲染：

- `layout.js`
- `template.js`
- `error.js` (React error boundary)
- `loading.js` (React suspense boundary)
- `not-found.js` (React error boundary)
- `page.js` or nested `layout.js`

在嵌套路由中，一个路由片段的组件将嵌套在其父级路由片段的组件内部。

## Colocation

除了特殊文件之外，你还可以在 app 目录的文件夹中放置你自己的文件（例如 components、styles、tests 等）。

这是因为虽然文件夹定义了路由，但只有 page.js 或 route.js 返回的内容是可以公开访问的。也就是说，只有这些文件中定义的组件才可以通过公共的 URL 地址访问到。

<Image
  alt="An example folder structure with colocated files"
  srcLight="/docs/light/project-organization-colocation.png"
  srcDark="/docs/dark/project-organization-colocation.png"
  width="1600"
  height="1011"
/>

Learn more about [Project Organization and Colocation](/docs/app/building-your-application/routing/colocation).

## Advanced Routing Patterns

The App Router also provides a set of conventions to help you implement more advanced routing patterns. These include:

- [Parallel Routes](/docs/app/building-your-application/routing/parallel-routes): Allow you to simultaneously show two or more pages in the same view that can be navigated independently. You can use them for split views that have their own sub-navigation. E.g. Dashboards.
- [Intercepting Routes](/docs/app/building-your-application/routing/intercepting-routes): Allow you to intercept a route and show it in the context of another route. You can use these when keeping the context for the current page is important. E.g. Seeing all tasks while editing one task or expanding a photo in a feed.

These patterns allow you to build richer and more complex UIs, democratizing features that were historically complex for small teams and individual developers to implement.

## Next Steps

Now that you understand the fundamentals of routing in Next.js, follow the links below to create your first routes:
