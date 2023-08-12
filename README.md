# 一个最简单的低代码编辑器

## 一、技术选型
- 前端框架：react18
- 拖拽库：react-dnd
- 前端包管理工具：pnpm
- 打包工具：webpack5
- 后端框架：koa2
- 部署工具：pm2
- 格式化代码：prettier

## 二、目录结构

| 文件目录         | 说明                               |
| ---------------- | ---------------------------------- |
| ./README.md      | 说明文档                           |
| ./package/front | 前端代码                         |
| ./package/server | 后端代码                         |

## 三、开发指南

使用`pnpm install`命令安装依赖
使用`dev:all`命令进行开发，访问`localhost:8080`即可看到网站
使用`build:all`命令进行打包
使用`format`命令格式化代码

## 四、部署指南

使用`start`命令启动服务


## 五、项目目录

├── package
│   ├── front # 前端页面
│   │   ├── build # webpack 打包配置
│   │   │   ├── webpack.base.js
│   │   │   ├── webpack.dev.js
│   │   │   └── webpack.prod.js
│   │   ├── components # 前端组件
│   │   │   ├── textComponent # 组件区中的「文字组件」
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.less
│   │   │   └── textPanel # 「文字组件」对应的属性编辑组件
│   │   │       ├── index.tsx
│   │   │       └── style.less
│   │   ├── constants # 一些常量
│   │   │   └── index.ts
│   │   ├── index.html
│   │   ├── index.tsx
│   │   ├── pages # 前端页面
│   │   │   ├── app # 根组件
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.less
│   │   │   ├── drawPanel # 画布区
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.less
│   │   │   ├── leftPanel # 左侧组件区
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.less
│   │   │   └── rightPanel # 右侧属性编辑区
│   │   │       ├── index.tsx
│   │   │       └── style.less
│   │   ├── style.less
│   │   └── tsconfig.json
│   └── server # 后端代码
│       ├── app.ts # 后端逻辑
│       ├── config # 后端配置
│       │   ├── dev.ts
│       │   ├── index.ts
│       │   └── prod.ts
│       ├── constants.ts # 一些常量
│       └── tsconfig.json
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json

## 六、注意问题
- 需要安装 pnpm  和  pm2
- 看package.json里面的内容
