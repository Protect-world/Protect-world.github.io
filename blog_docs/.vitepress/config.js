import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { description, docsVersion, github,twitter, name } from './meta'

export default {
  home:true,
  lastUpdated: true,
  title: name,
  description,
  outDir:'../dist',
  vite:{
    plugins:
      [],
    server: {                // ← ← ← ← ← ←
     host: '0.0.0.0'    // ← 新增内容 ←
    } 
  },
  themeConfig: {
    siteTitle:  "Cuccitini",
    logo: "/dusk.png",

    // 导航栏(右上角菜单)
    nav: [
        { text: "数据库",
          items: [
            {text :'Mysql',link: '/DataBase/Mysql/MySQL.md'}
          ] 
        },
        {
          text: "基础语言",
          items: [
            { text: 'Java', link: '/Java/JavaSE/Java.md' },
          ]
        },
        {
          text: "高级框架",
          items: [
            { text: 'SpringBoot', link:'...'}
          ],
        },
        {
          text: "四大件",
          items:[
            { text: '计算机网络', link: '/Basic_computer/NetWork/前言.md'},
            { text: '数据结构与算法', link: '/Basic_computer/#'},
            { text: '操作系统', link: '/Basic_computer/#'},
            { text: '计算机组成原理', link: '/Basic_computer/#'},
          ]
        },
        // { text: "gitee", link: "https://gitee.com/wang-xilong-888" },
     ],

     // 右侧联系方式
     socialLinks: [
      { icon: "github", link: "https://github.com/Protect-world" },
      { icon: { svg:'<svg t="1704702418966" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7906" width="200" height="200"><path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 0 1 60.373333 60.373333L700.330667 256H789.333333A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.856L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="7907"></path></svg>'},

              link: "https://space.bilibili.com/588584530" },
      /**
       * type SocialLinkIcon =
            | 'discord'
            | 'facebook'
            | 'github'
            | 'instagram'
            | 'linkedin'
            | 'slack'
            | 'twitter'
            | 'youtube'
       */
    ],

    //侧边栏
    sidebar:{
      // 当前为计算机网络时的侧边栏
     "/Basic_computer/NetWork/":[
      {
        text:"计算机网络",
        collapsible: true, //可折叠
        collapsed:true, //默认关闭状态
        items:[
          {
            text:"前言",
            link:"/Basic_computer/NetWork/前言.md",
          },
          {
            text:"物理层",
            link:"/Basic_computer/NetWork/物理层.md",
          },
          {
            text:"网络链路层",
            link:"/Basic_computer/NetWork/网络链路层.md"
          }
        ],
      },
     ]   
    },

    aside:true,
    outline:[2,6], //右侧大纲 h2-h6

    // 文章末尾上下一页
    docFooter: { prev: '上一篇', next: '下一篇' },
    editLink: {
      pattern: `${github}/tree/master/blog_docs/:path`,
      text: 'Edit this page on GitHub'
    },

    lastUpdatedText: "最近更新时间",

    // 页脚 版权信息等等
    footer: {
      message: '15229390645@163.com',
      copyright: 'MIT License | Copyright © 2023-present Evan You'
    }


    


    },
  }