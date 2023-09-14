import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Next 中文文档",
  description: "Next 中文文档",
  theme: defaultTheme({
    sidebar: [
      {
        children: [
          "/",
          {
            text: "React Essentials",
            link: "/0-ReactEssentials/index.md",
          },
          {
            text: "Routing",
            link: "/01-routing/index.md",
            children: ["/01-routing/01-defining-routes.md"],
          },
        ],
      },
    ],
  }),
});
