# 全端全栈技术选型矩阵与工程基线
> 面向全平台与 AI Agent 高效协作的标准技术选型矩阵。拒绝第三方个人二道封装，全面拥抱官方第一方工程生态；统一受控格式，无冗余废话，开箱即可落地。

---

## 00. 全栈技术选型速查总览

| 序号 | 业务形态 | 核心底座 | UI 与表现层 | 状态 / 路由 / 网络 | 核心优势 |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **01** | **Web 业务管理系统** | **Vue 3** + Vite 5 + TS | **Element Plus** (`plus-ui 6.X-Vue`) | Pinia + vue-router + Axios | 前后台一体化，权限与通用组件高度统一，国内 B 端事实标准 |
| **02** | **品牌官网 / 宣传落地页** | **React 19** + Vite 5 + TS | **TailwindCSS v4** + **shadcn/ui** | React Router + **Axios** | 100% 纯静态资产（零 Node 运行时），全球顶级 AI UI 生成生态 |
| **03** | **微信 / 多端小程序** | **uni-app (Vue 3)** + Vite 5 | **Wot Design Uni** + UnoCSS | Pinia + uni 路由 + uni.request | 官方 Vite 模板，UnoCSS 极致压制 2MB 主包限制，组件库类型完备 |
| **04** | **移动 APP & PC 桌面端** | **Flutter 3.x** + Dart | **Material 3 (现代 Slate Tokens)** | **flutter_bloc (Cubit)** + go_router + Dio | 一套代码通吃 5 大 OS，零代码生成税，全平台系统中文字体回退 |
| **05** | **独立移动端 H5** | **Vue 3** + Vite 5 + TS | **Vant 4** + PostCSS vw 转换 | Pinia + vue-router + Axios | 移动 Web 标杆，375px 设计稿无损转 vw，大模型生成零失误 |
| **06** | **数据可视化大屏** | **Vue 3** + Vite 5 + TS | **autofit.js** + ECharts 5 | Pinia + TailwindCSS | 封装 1920x1080 等比自适应计算与全局监听，消除个人非标大屏库死锁 |
| **07** | **Web 3D 渲染与数字孪生** | **Three.js** + TS + Vite 5 | **Vue 原生 TS / React R3F 声明式** | gsap + Three 官方 Addons | 工业数字孪生用 Vue 原生性能极致；官网 3D 营销用 React 声明式组件 |
| **08** | **Web 文档系统** | **VitePress (Vue 3)** | VitePress 默认主题 + Markdown | 纯静态 SSG | Vue 官方亲儿子，开箱自带全文搜索与暗黑模式，秒级静态构建 |
| **09** | **核心业务后端** | **Spring Boot 3 / Cloud** | **RuoYi-Vue-Plus / Cloud-Plus 6.X** | Sa-Token + MyBatis-Plus + Redis 7 | 单体 6.X 默认敏捷交付，Cloud 6.X 承载企业级分布式微服务扩展 |
| **10** | **AI 微服务与自动化脚本** | **Python 3.11+** + **FastAPI** | Pydantic v2 + uv | httpx + LiteLLM / LangGraph | 专职大模型工作流、RAG 向量检索与离线爬虫，生产级防缓冲流式推流 |

---

## 01. Web 业务管理系统 (Vue 3 + Element Plus)

### 1. 选型组合
* **技术底座**：Vue 3 + TypeScript + Vite 5
* **组件系统**：Element Plus + RuoYi-Vue-Plus 配套前端（**`plus-ui` 6.X-Vue 分支**）
* **状态与网络**：Pinia + vue-router + Axios

### 2. 核心考量
* **前后台一体化**：将商户业务工作台与管理员中后台收敛至同一工程，通过 RBAC 动态路由与角色权限进行优雅隔离，避免双工程重复建设。
* **生态最成熟**：Element Plus 是国内企业级中后台最稳固的底座，大模型编写 CRUD 表单/表格代码几乎零失误。

### 3. 工程创建与依赖安装
```bash
# 显式克隆官方 6.X-Vue 分支（适配最新 Vue 3.5 与 Vite 8 架构）
git clone -b 6.X-Vue https://gitee.com/JavaLionLi/plus-ui.git web-admin
cd web-admin
pnpm install
```

### 4. 核心关键配置
```ts
// vite.config.ts 核心配置
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173, // 采用标准非特权端口，防止跨平台权限报错
    proxy: {
      '/dev-api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/dev-api/, ''),
      },
    },
  },
});
```

### 5. 推荐工程目录结构
```text
src/
├── api/             # 按业务模块划分的请求定义
├── assets/          # 静态图标与全局样式
├── components/      # 通用业务组件 (DictTag, FileUpload, Table)
├── layout/          # 页面通用架子 (Navbar, Sidebar, TagsView)
├── router/          # 路由配置与动态权限守卫
├── store/           # Pinia 状态管理 (modules/user, permission)
└── views/           # 页面表现层 (system, business)
```

---

## 02. 品牌官网与营销落地页 (React 19 + shadcn/ui)

### 1. 选型组合
* **技术底座**：React 19 + TypeScript + Vite 5
* **UI 表现层**：TailwindCSS v4 + shadcn/ui (Radix UI)
* **状态与网络**：React 19 Hooks + **Axios**（统一拦截与超时控制）

### 2. 核心考量
* **纯前端静态资产**：打包产物为纯 HTML/JS/CSS，零 Node.js 运行时负担，全球 CDN 边缘极速分发。
* **顶级 AI 生成生态**：React + Tailwind + shadcn 是全球公认最先进的 UI 生成生态（v0 / Cursor 极速出图），组件源码全量拷入项目，零不可控封装。

### 3. 工程创建与依赖安装
```bash
npm create vite@latest brand-site -- --template react-ts
cd brand-site
pnpm install
# 引入统一请求库 Axios
pnpm add axios
# 适配最新 Tailwind CSS v4 官方原生 Vite 插件
pnpm add tailwindcss @tailwindcss/vite
pnpm add -D @types/node
# 执行官方 shadcn/ui 初始化向导（自动配置 utils 与核心无头依赖）
pnpm dlx shadcn@latest init
```

### 4. 核心关键配置
```ts
// vite.config.ts (集成 Tailwind v4 原生插件与路径别名)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### 5. 推荐工程目录结构
```text
src/
├── api/             # Axios 封装与轻量请求定义 (client.ts)
├── components/
│   ├── ui/          # shadcn 自动生成的无头原子组件 (button, dialog, card)
│   └── landing/     # 官网业务区块 (Hero, Features, Pricing, Footer)
├── hooks/           # 通用交互 Hooks
├── lib/             # 工具函数 (utils.ts - cn 样式合并)
└── App.tsx          # 官网单页聚合入口
```

---

## 03. 微信与多端小程序 (uni-app + Wot Design Uni)

### 1. 选型组合
* **技术底座**：uni-app (Vue 3) + TypeScript + Vite 5
* **组件系统**：Wot Design Uni + UnoCSS
* **状态与网络**：Pinia + uni.request 封装

### 2. 核心考量
* **摆脱第三方脚手架捆绑**：坚持 DCloud 官方 Vite 模板，代码干净透明。
* **严控包体积**：UnoCSS 保证编译零冗余样式，完美压制小程序 2MB 主包体积红线；Wot Design Uni 组件完备、移动端体验佳。

### 3. 工程创建与依赖安装
```bash
# 使用官方 TypeScript 模板（若 GitHub 连接慢可改用 Gitee 镜像）
npx degit dcloudio/uni-preset-vue#vite-ts mini-program
cd mini-program
pnpm install
pnpm add wot-design-uni pinia
pnpm add -D unocss @uni-helper/unocss-preset-uni
```

### 4. 核心关键配置
```ts
// uno.config.ts (核心：处理小程序类名转义与 rem->rpx 换算)
import { defineConfig } from 'unocss';
import { presetUni } from '@uni-helper/unocss-preset-uni';

export default defineConfig({
  presets: [presetUni()],
});
```

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [uni(), UnoCSS()],
});
```

### 5. 推荐工程目录结构
```text
src/
├── api/             # 小程序后端接口
├── components/      # 业务可复用组件
├── pages/           # 主包页面 (index, my)
├── subPackages/     # 业务分包目录 (order, goods)
├── store/           # Pinia 状态管理
├── static/          # 本地静态图片与图标
└── uno.config.ts    # UnoCSS 转义规则配置
```

---

## 04. 移动 APP & PC 桌面端 (Flutter 3.x + BLoC)

### 1. 选型组合
* **技术底座**：Flutter 3.x + Dart 3.x
* **状态管理**：`flutter_bloc`（采用 **Cubit-First** 敏捷模式，零代码生成税）
* **UI 与设计系统**：Google 官方 **Material 3** + **现代 Slate Tokens**（彻底根治原生 Android 泥土感）
* **路由与网络**：`go_router` + `dio`
* **持久化与跨平台**：动静分层存储（默认 `shared_preferences` + `flutter_secure_storage`，复杂离线才上 `drift`）+ `flutter_adaptive_scaffold` + `window_manager`

### 2. 核心考量
* **一套代码通吃 5 大操作系统**（iOS/Android/Windows/macOS/Linux），零 `build_runner` 生成税。
* **纯中文专属优化**：全平台配置系统级中文字体回退链（零包体积增加，自适应苹方/微软雅黑/思源黑体）；固化 CJK 排版补丁根治文字偏下 1~2px 顽疾；锁定官方中文本地化代理。

### 3. 工程创建与依赖安装
```bash
flutter create my_app --platforms=android,ios,windows,macos,linux
cd my_app
# 1. 安装核心第三方库（注意：严禁在末尾拼接 --sdk=flutter 以免参数全局污染）
flutter pub add flutter_bloc go_router dio shared_preferences flutter_secure_storage flutter_adaptive_scaffold window_manager
# 2. 单独引入 Flutter SDK 官方本地化库
flutter pub add flutter_localizations --sdk=flutter
```

### 4. 核心关键配置
```dart
// lib/core/theme/app_theme.dart (中文现代 Design Tokens 核心配置)
import 'package:flutter/material.dart';

final appTheme = ThemeData(
  useMaterial3: true,
  splashFactory: NoSplash.splashFactory, // 禁用老旧水波纹，改为现代高质感透明度过渡
  // 1. 全平台系统级中文字体回退链（零包体积膨胀，各端调用系统最高清原生黑体）
  fontFamilyFallback: const [
    'PingFang SC',      // iOS / macOS 苹方
    'Microsoft YaHei',  // Windows 微软雅黑
    'Noto Sans SC',     // Android / Linux 思源黑体
    'sans-serif',
  ],
  colorScheme: ColorScheme.fromSeed(
    seedColor: const Color(0xFF0F172A), // Slate-900 冷黑现代科技基调
    surface: Colors.white,
    outline: const Color(0xFFE2E8F0),   // 1px 极细微边框 Slate-200
  ),
  cardTheme: CardTheme(
    elevation: 0,
    shape: RoundedRectangleBorder(
      side: const BorderSide(color: Color(0xFFE2E8F0)),
      borderRadius: BorderRadius.circular(8), // 8px 现代微圆角，杜绝药丸
    ),
  ),
  filledButtonTheme: FilledButtonThemeData(
    style: FilledButton.styleFrom(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(6)),
      elevation: 0,
    ),
  ),
);
```

### 5. 推荐工程目录结构
```text
lib/
├── core/            # 核心网络层(Dio)、路由配置(go_router)、现代主题与中文排版(theme)
├── features/        # 按业务垂直划分 (Feature-first)
│   └── order/
│       ├── data/           # 数据源层 (Remote DataSource, Models)
│       ├── domain/         # 业务实体层 (Entities)
│       └── presentation/   # 页面与状态控制器 (Cubit-first, UI)
│           ├── cubit/      # 普通业务 CRUD 优先采用 Cubit (零代码生成开销)
│           └── views/      # 界面结合 flutter_adaptive_scaffold 自适应多端
└── main.dart        # 入口，锁定 Locale('zh', 'CN') 与本地化代理
```

---

## 05. 独立移动端 H5 (Vue 3 + Vant 4)

### 1. 选型组合
* **技术底座**：Vue 3 + TypeScript + Vite 5
* **组件系统**：Vant 4 + `postcss-px-to-viewport-8-plugin`（或 `postcss-mobile-forever`）
* **状态与网络**：Pinia + vue-router + Axios

### 2. 核心考量
* **国内移动 Web 标杆**：Vant 4 是国内 H5/公众号/内嵌 Webview 事实标准，组件自动按需引入，性能极高。
* **375px 设计稿无损适配**：代码内直接按照设计稿标注书写 `px`，构建时自动无损编译为 `vw` 视口单位。

### 3. 工程创建与依赖安装
```bash
npm create vue@latest mobile-h5 # 勾选 TypeScript, Router, Pinia
cd mobile-h5
pnpm install
pnpm add vant
pnpm add -D unplugin-vue-components @vant/auto-import-resolver postcss-px-to-viewport-8-plugin
```

### 4. 核心关键配置
```js
// postcss.config.cjs (重要：必须采用 .cjs 后缀，避免与 package.json 的 ESM 冲突)
module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375, // 统一按照 375px 标准直接写 px，自动转换为 vw
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', 'keep-px'],
      minPixelValue: 1,
    },
  },
};
```

### 5. 推荐工程目录结构
```text
src/
├── api/             # H5 业务接口
├── assets/          # 移动端静态图片与基础样式
├── components/      # H5 专属业务组件
├── router/          # 路由配置 (支持滚动还原与页面切换过渡)
├── store/           # Pinia 状态管理
└── views/           # 页面表现层 (商城首页、个人中心)
```

---

## 06. 数据可视化大屏 (Vue 3 + autofit.js + ECharts 5)

### 1. 选型组合
* **技术底座**：Vue 3 + TypeScript + Vite 5
* **大屏适配与图表**：`autofit.js` + `ECharts 5` (`vue-echarts`)
* **样式表现**：TailwindCSS (毛玻璃与科技质感)

### 2. 核心考量
* **消除个人非标大屏库死锁**：彻底告别依赖断更的第三方大屏组件；`autofit.js` 统一封装了 1920x1080 等比缩放计算与原点监听，一行代码实现全屏居中铺满。
* **极速开发**：搭配 TailwindCSS 科技风毛玻璃类名，专注 ECharts 数据表达。

### 3. 工程创建与依赖安装
```bash
npm create vue@latest big-screen-app
cd big-screen-app
pnpm install
pnpm add echarts vue-echarts autofit.js
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4. 核心关键配置
```ts
// src/main.ts (全局等比自适应初始化)
import { createApp } from 'vue';
import App from './App.vue';
import autofit from 'autofit.js';

createApp(App).mount('#app');

// 一行代码搞定全屏自适应铺满
autofit.init({
  dh: 1080,
  dw: 1920,
  el: '#app',
  resize: true,
});
```

### 5. 推荐工程目录结构
```text
src/
├── components/
│   ├── charts/      # ECharts 封装组件 (LineChart, BarChart, MapChart)
│   └── panels/      # 边框、标题饰条、数字翻牌器
├── hooks/           # 图表自适应与自动轮询数据 Hooks
└── views/           # 大屏总览界面 (HomeView - 3列栅格布局)
```

---

## 07. Web 3D 渲染与数字孪生 (Three.js 双引擎分流)

### 1. 选型组合与场景划分
* **场景 A：Vue 3 工业大屏 / 数字孪生 / 复杂监控**
  * **选型**：**原生 Three.js (TypeScript) + 官方 Addons**（直调 `three/addons/*`）
  * **定位**：直接操作 Scene、Camera 与 WebGLRenderer，大屏频繁数据通信（WebSocket/ECharts 联动）零损耗，无第三方黑盒。
* **场景 B：React 19 品牌官网 / 炫酷宣传 / 营销动态卡片**
  * **选型**：**React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)**
  * **定位**：全声明式 JSX 组件化（`<Canvas><mesh /></Canvas>`），轻松结合 React 状态、Hover 手势与 Spring 物理动效，打造苹果/Stripe 级营销 3D 视觉。

### 2. 核心考量
* **类型安全与零冗余**：现代 `three` 自带 `.d.ts` 类型定义，**严禁安装外部 `@types/three`** 以免版本冲突。
* **按需分流**：工业监控重在“原生性能与吞吐控制”，营销宣传重在“组件式动效编排”。

### 3. 工程创建与依赖安装
```bash
# 场景 A (Vue/Vanilla 原生数字孪生)：
pnpm add three gsap

# 场景 B (React 营销落地页 3D 特效)：
pnpm add three @react-three/fiber @react-three/drei gsap
```

### 4. 核心关键配置
```ts
// 场景 A 原生 Three.js 核心初始化 (src/world/World.ts)
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class World {
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  private renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  constructor(container: HTMLElement) {
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);
    new OrbitControls(this.camera, this.renderer.domElement);
    this.animate();
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  };
}
```

### 5. 推荐工程目录结构
```text
src/
├── assets/          # 3D 静态资产 (GLTF/GLB 模型, HDR 环境贴图)
├── world/           # 场景核心模块 (Scene, Camera, Renderer, Controls)
└── main.ts          # 初始化装配
```

---

## 08. Web 文档系统 (VitePress)

### 1. 选型组合
* **技术底座**：VitePress (Vue 3) + Markdown + Vite 5
* **模式**：纯静态 SSG (Static Site Generation)

### 2. 核心考量
* **Docs-as-Code 标杆**：开箱自带暗黑模式、侧边栏自动生成、全文字文检索；构建为纯静态 HTML，秒级极速渲染。
* **组件无缝交互**：可在 Markdown 文件中直接嵌入书写 Vue 交互组件，演示业务 UI。

### 3. 工程创建与依赖安装
```bash
mkdir my-docs && cd my-docs
pnpm init
pnpm add -D vitepress vue
npx vitepress init
```

### 4. 核心关键配置
```ts
// docs/.vitepress/config.mts
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "技术规范与开发文档",
  description: "全栈全端统一技术栈与工程指引",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/start' },
      { text: 'API 契约', link: '/api/' },
    ],
    search: { provider: 'local' }, // 启用开箱即用的离线全文检索
  },
});
```

### 5. 推荐工程目录结构
```text
docs/
├── .vitepress/      # 站点配置与自定义主题扩展
│   └── config.mts
├── guide/           # 架构规范与入门指引 Markdown
├── api/             # 接口契约说明 Markdown
└── public/          # 文档专属图片与静态资源
```

---

## 09. 核心业务后端 (Spring Boot 3 / Cloud 6.X 双生矩阵)

### 1. 选型组合与架构双模
* **技术基座**：JDK 17/21 + MyBatis-Plus + Redis 7 + MySQL 8
* **安全鉴权与契约**：Sa-Token (多端 Session 隔离) + SpringDoc OpenAPI 3.0
* **双生形态划分**：
  1. **单体架构（默认主选）**：**`RuoYi-Vue-Plus 6.X`**。适合 90% 敏捷中小型业务，开发调试极速，零微服务运维心智负担；
  2. **微服务架构（企业级分布式扩展）**：**`RuoYi-Cloud-Plus 6.X`**。基于 Spring Cloud Alibaba 2023+ / Nacos / Spring Cloud Gateway / Sentinel，适用于多业务线拆分、高并发与多租户物理隔离场景。
  * *(注：前端 `plus-ui` 6.X-Vue 分支天然无缝兼容单体与微服务两种架构)*

### 2. 核心考量
* **全端唯一业务主心骨**：承载全部关系型建模、资金交易、数据库事务与全端统一认证。
* **消灭接口幻觉**：基于真实 Java 后端实体自动生成标准 OpenAPI 3.0 元数据契约，驱动各端客户端 SDK 自动化生成。

### 3. 工程创建与依赖安装
```bash
# 模式 A：单体架构 (推荐首选)
git clone -b 6.X https://gitee.com/dromara/RuoYi-Vue-Plus.git core-backend-single
cd core-backend-single
mvn clean install

# 模式 B：微服务架构 (企业级分布式扩展)
git clone -b 6.X https://gitee.com/dromara/RuoYi-Cloud-Plus.git core-backend-cloud
cd core-backend-cloud
mvn clean install
```

### 4. 核心关键配置
```yaml
# application.yml (Sa-Token 多端 Session 隔离与 OpenAPI 契约配置)
sa-token:
  token-name: Authorization
  timeout: 2592000
  is-concurrent: true
  is-share: false
  token-style: uuid

springdoc:
  api-docs:
    enabled: true
    path: /v3/api-docs
  swagger-ui:
    enabled: true
    path: /swagger-ui.html
```

### 5. 推荐工程目录结构
```text
# 单体架构目录 (RuoYi-Vue-Plus 6.X)
ruoyi/
├── ruoyi-admin/         # 入口启动模块与 Web 控制器
├── ruoyi-common/        # 通用核心库 (core, redis, satoken, tenant)
├── ruoyi-modules/       # 业务领域模块 (system, business)
└── pom.xml              # 统一版本受管父 POM

# 微服务架构目录 (RuoYi-Cloud-Plus 6.X 扩展)
ruoyi-cloud/
├── ruoyi-gateway/       # Spring Cloud Gateway 统一流量网关
├── ruoyi-auth/          # 统一认证授权中心 (Sa-Token OAuth2/SSO)
├── ruoyi-common/        # 微服务公共基础设施
├── ruoyi-modules/       # 独立微服务模块 (system, gen, job, business)
└── pom.xml
```

---

## 10. AI Agent 微服务与自动化 (Python FastAPI)

### 1. 选型组合
* **技术底座**：Python 3.11+ + FastAPI
* **环境与包管理**：Astral `uv` (秒级依赖解析与运行)
* **模型调用与数据**：Pydantic v2 + `httpx` + `LiteLLM` / `LangGraph`

### 2. 核心考量
* **专注 AI 能力侧翼**：不参与复杂业务事务，专门负责大模型调度、SSE 流式推流、RAG 向量切分与离线异步爬虫。
* **轻量高性能**：基于 uv 实现秒级虚拟环境初始化；标准异步事件循环扛住高并发长连接。

### 3. 工程创建与依赖安装
```bash
# 使用 uv 初始化极速 Python 项目
uv init ai-sidecar
cd ai-sidecar
uv add fastapi uvicorn pydantic httpx
```

### 4. 核心关键配置
```python
# main.py (标准生产级流式 SSE 推送，已加入 Nginx 防缓冲响应头)
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import asyncio

app = FastAPI(title="AI Agent Sidecar")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

async def token_stream():
    for chunk in ["AI ", "Native ", "Full ", "Stack ", "Ready."]:
        yield f"data: {chunk}\n\n"
        await asyncio.sleep(0.1)

@app.get("/api/ai/chat/stream")
async def chat_stream():
    # 核心：生产环境 Nginx 默认会缓存 SSE，必须注入 X-Accel-Buffering: no 禁用缓冲
    headers = {
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "X-Accel-Buffering": "no",
    }
    return StreamingResponse(token_stream(), media_type="text/event-stream", headers=headers)
```

### 5. 推荐工程目录结构
```text
app/
├── api/             # 路由端点 (chat, rag, crawler)
├── core/            # 配置文件与全局日志
├── services/        # 核心逻辑 (LLM 客户端, Prompt 编排)
├── schemas/         # Pydantic 请求/响应数据模型
└── main.py          # FastAPI 实例装配入口
```
