import { defineConfig } from "vitepress";
const sidebar = [
  {
    text: "Introduction",
    description: "一站式Mini组件库",
    items: [
      { text: "Yasuo-UI是什么 ?", link: "/guide/intro/" },
    ],
  },
  {
    text: "通用",
    items: [
      { text: "Button 按钮", link: "/components/button/" },
    ],
  },
  {
    text: "导航",
    items: [],
  },
  {
    text: "反馈",
    items: [],
  },
  {
    text: "数据录入",
    items: [],
  },
  {
    text: "数据展示",
    items: [],
  },
  {
    text: "布局",
    items: [],
  },
];

export default defineConfig({
  title: "Yasuo-UI",
  description: "组件库搭建的教学模型",
  themeConfig: {
    logo:'/favicon.png',
    sidebar,
    //     nav: [
//       { text: "Guide", link: "/" },
//       { text: "GuideTest", link: "//" },
//       { text: "gitee", link: "https://gitee.com/geeksdidi" },
//     ],
    nav: [
      { text: "Guide", link: "/guide/intro/" },
      { text: "二十一", link: "https://juejin.cn/user/2084329779636094/posts" },
          ],
    socialLinks: [{ icon: "github", link: "https://github.com/SuYxh/Yasuo" },]
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
});
