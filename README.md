<div align="center">

# 全端全栈技术路线与工程架构规范
### AI-Native Full-Stack Architecture Specification & Ecosystem Matrix

</div>

> **文档标识**：ARCH-SPEC-2026-FULLSTACK  
> **制定版本**：v1.0.0 (Release)  
> **文档属性**：企业级标准架构规范 / AI Agent 工程化协作基线  
> **维护作者**：Ateng  
> **创建日期**：2026-09-29  
> **当前状态**：[✓] 终局评审通过，正式定稿

---

## 目录 (Table of Contents)

1. [架构设计哲学与战略原则](#1-架构设计哲学与战略原则)
2. [全景技术矩阵与端形态总览](#2-全景技术矩阵与端形态总览)
3. [系统拓扑与全端交互模型](#3-系统拓扑与全端交互模型)
4. [各端形态标准工程落地规范](#4-各端形态标准工程落地规范)
5. [契约驱动与类型安全流水线](#5-契约驱动与类型安全流水线)
6. [多仓库治理与交付运维体系](#6-多仓库治理与交付运维体系)
7. [附录：权威信源与参考索引](#7-附录权威信源与参考索引)

---

## 1. 架构设计哲学与战略原则

本技术路线专为 **AI Agent 工程化深度协作** 与 **长期高可维护性** 量身打造。在现代软件研发演进中，代码生成门槛被大幅抹平，而**工程治理防腐、接口契约严密性、架构边界纯净度**成为决定研发效能的生命线。

```text
┌────────────────────────────────────────────────────────────────────────┐
│                      核心技术路线三项防腐准则                          │
├────────────────────────────────────────────────────────────────────────┤
│ 1. 拒绝二道脚手架：坚持官方第一方 CLI + 工业级框架组合，拒绝依赖断代   │
│ 2. Web 业务一体化：PC 浏览器端工作台与管理后台合流，避免多项目撕裂     │
│ 3. 业务与 AI 双引擎：Spring Boot 扛业务核心事务，FastAPI 专职 AI 侧翼  │
└────────────────────────────────────────────────────────────────────────┘
```

### 1.1 拒绝“二道贩子”第三方脚手架
* **痛点**：社区中大量个人二次封装的脚手架充斥着商业广告引流、版本锁死（如旧版 Webpack、Vite 2/3）、过时的依赖库（如 DataV、amfe-flexible）以及充斥 `any` 的劣质封装。
* **准则**：**坚决采用官方第一方工程工具（如 `create-vite`、`create-vue`、`flutter create`）配合经过生态检验的标杆级组件库**。配置代码最小化（≤ 30 行），架构透明可控，零历史包袱。

### 1.2 Web 端业务前后台一体化
* **痛点**：为普通业务人员（或外部商户）单独搭建一套 PC 前台 Web 项目，往往导致登录鉴权、Token 刷新、网络拦截、组件样式与中后台严重重复建设，徒增维护负担。
* **准则**：**将 PC 浏览器端全部业务统一收敛在 `RuoYi-Vue-Plus` + `plus-ui`**。通过 RBAC 动态路由与角色权限，在同一工程内优雅隔离“普通业务工作台”与“系统管理运维”，开发规范统一，资产复用率达 100%。

### 1.3 核心业务全端归一 + AI 专属插件化
* **痛点**：跨端业务拆分过细导致后端服务碎片化，或盲目使用 Java 硬抗大语言模型工作流。
* **准则**：
  * **主干归一**：Spring Boot 3 (`RuoYi-Vue-Plus`) 作为**全端唯一通用业务主心骨**，承载全部数据库事务、资金支付、Sa-Token 多端统一认证与通用 CRUD。
  * **AI 侧翼**：Python 3.11+ (`FastAPI`) 严格作为轻量微服务运行，专注大模型调用、RAG 向量检索与离线爬虫编排，输出结果统一回填至主后端。

### 1.4 面向 AI Agent（LLM-Native）的代码生成准则
* **严格静态类型（TypeScript & Dart）**：杜绝动态弱类型导致的隐式 Bug，为大模型提供确定性的 AST 语法上下文。
* **原子化样式（TailwindCSS & UnoCSS）**：无外部样式污染，类名即语义，大模型生成界面布局准确率最高。
* **强契约消除幻觉**：基于 OpenAPI 3.0 管道自动化生成各端请求 SDK，从根源切断大模型手写 API 时的路径拼错与字段虚构。

---

## 2. 全景技术矩阵与端形态总览

全体系由 **7 大终端表现层 + 2 大服务端引擎 + 1 套契约管道** 构成：

| 序号 | 业务端形态 | 框架生态官方组合 | 核心技术底座 | 针对 AI Agent 的工程化优势 |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **Web 业务管理系统**<br>(Web Admin & Workbench) | `plus-ui` 深度定制<br>+ `RuoYi-Vue-Plus` | **Vue 3** + **Element Plus**<br>+ Pinia + Vite 5 | **前后台一体化**。商户/业务员看业务台，管理员看系统监控；组件库与权限机制高度统一，AI 编写业务 CRUD 零心智切换。 |
| **02** | **品牌官网 / 宣传落地页**<br>(Brand Website) | 官方 `create-vite (react-ts)`<br>+ `shadcn/ui` 组合 | **React 19** + **Vite 5**<br>+ TailwindCSS + TS | **100% 纯前端静态资产**，零 Node.js 运行时负担。享受全球最高水准的 React AI UI 生成生态（v0 / Cursor 极速出图），动态数据直连 Spring Boot。 |
| **03** | **微信 / 多端小程序**<br>(Mini-Program) | DCloud 官方 Vite 模板<br>+ `Wot Design Uni` | **uni-app (Vue 3)** + Vite 5<br>+ UnoCSS + Pinia + TS | **摆脱第三方模板捆绑**。UnoCSS 保证编译零冗余样式，完美压制小程序 2MB 主包体积限制；Wot Design Uni 覆盖最全移动组件，类型完备。 |
| **04** | **移动 APP & PC 桌面端**<br>(Mobile & Desktop) | Google 官方 `flutter create`<br>+ 现代架构组合 | **Flutter 3.x** + **Dart**<br>+ Riverpod + Drift + shadcn | **一套代码通吃 5 大操作系统**（iOS/Android/Windows/macOS/Linux）。Riverpod 编译期强类型，Drift 提供企业级本地 SQLite 复杂查询，shadcn_ui 赋予现代质感。 |
| **05** | **独立移动端 H5 / 公众号**<br>(Mobile H5) | Vue 官方 `create-vue`<br>+ `Vant 4` 组合 | **Vue 3** + **Vite 5**<br>+ Vant 4 + vw 视口适配 | **国内移动 Web 标杆标准**。核心配置不足 30 行，组件自动按需加载，375px 设计稿自动转 vw 视口单位，大模型写 Vant 交互代码零失误。 |
| **06** | **数据可视化大屏**<br>(BI Dashboard) | Vue 官方 `create-vue`<br>+ `autofit.js` 组合 | **Vue 3** + **Vite 5**<br>+ autofit.js + ECharts 5 | **彻底淘汰死锁的 DataV 与 scale 坐标偏移缺陷**。autofit.js 一行代码实现 1920x1080 等比缩放；TailwindCSS 打造现代毛玻璃科技风。 |
| **07** | **Web 3D 渲染场景**<br>(Web 3D & Digital Twin) | Three.js 原生 TS 组合<br>*(官网配 R3F + Drei)* | **Three.js** + **TypeScript**<br>+ gsap + three-stdlib | **工业级标准底层**。零第三方黑盒抽象，直接操纵 Scene 与 Camera，与 Vue 业务大屏深度集成；官网营销场景按需启用 R3F 声明式组装。 |
| **08** | **Web 文档系统**<br>(Docs & Knowledge Base) | Vue 官方亲儿子 `VitePress` | **VitePress (Vue 3)**<br>+ Markdown + Vite | **Docs-as-Code 标杆**。开箱自带暗黑模式、侧边栏自动生成、全文检索；Markdown 中直接嵌入 Vue 交互组件，构建为秒级纯静态 HTML。 |
| **09** | **核心业务后端**<br>(Core Backend Engine) | [RuoYi-Vue-Plus 5.x](https://gitee.com/dromara/RuoYi-Vue-Plus) | **Spring Boot 3** + JDK 17/21<br>+ Sa-Token + MyBatis-Plus | **全端唯一业务主心骨**。承载全部数据库事务、关系型建模、资金交易、Sa-Token 多端登录体系，提供规范 OpenAPI 3.0 元数据。 |
| **10** | **AI Agent / 脚本微服务**<br>(AI & Script Service) | Astral `uv` 极速微服务骨架 | **Python 3.11+** + **FastAPI**<br>+ Pydantic v2 + httpx | **全端 AI 专属能力侧翼**。负责大模型调用、LangChain 工作流、RAG 向量切分检索、SSE 流式推流与异步爬虫，结果回填至主数据库。 |

---

## 3. 系统拓扑与全端交互模型

### 3.1 架构拓扑全景图

```mermaid
flowchart TD
    subgraph MultiTerminal ["全端表现层 (Multi-Repo 独立代码库)"]
        A1["Web 业务管理系统<br>【plus-ui / Vue 3】"]
        A2["品牌官网 / 宣传落地页<br>【Vite + React 19 + shadcn/ui】"]
        A3["微信多端小程序<br>【uni-app + Wot Design Uni】"]
        A4["移动 APP & PC 桌面端<br>【Flutter + Riverpod + Drift + shadcn】"]
        A5["独立移动 H5 / 公众号<br>【Vue 3 + Vant 4 + vw 适配】"]
        A6["数据可视化大屏<br>【Vue 3 + autofit + ECharts】"]
        A7["Web 3D 渲染场景<br>【Three.js 原生 / R3F】"]
        A8["Web 文档系统<br>【VitePress / 纯静态 SSG】"]
    end

    subgraph Contracts ["契约与自动化层 (消灭 Agent 接口幻觉)"]
        C1["OpenAPI 3.0 元数据 (/v3/api-docs)"]
        C2["自动化生成 TS / Dart Client SDK<br>(openapi-typescript / orval / openapi-generator)"]
    end

    subgraph CoreBackend ["核心业务后端 (全端唯一业务主心骨)"]
        B1["RuoYi-Vue-Plus (Spring Boot 3)<br>- Sa-Token 多端统一鉴权 (admin / app / client)<br>- MyBatis-Plus + Redisson 核心分布式事务<br>- 全端业务 CRUD / 支付 / 文件存储 / 审计日志"]
        DB[(MySQL 8.0+ / Redis 7.x)]
    end

    subgraph AISidecar ["AI 与自动化专属侧翼 (轻量微服务)"]
        B2["FastAPI (Python 3.11+)<br>- 大模型流式推流 (SSE)<br>- RAG 知识库向量切分与检索<br>- 定时爬虫与离线数据清洗编排"]
    end

    A1 -->|Header: Authorization (admin/client)| B1
    A2 -->|公开 REST API (Axios / TanStack Query)| B1
    A3 -->|Header: Authorization (app/openid)| B1
    A4 -->|Header: Authorization (app/dio)| B1
    A5 -->|Header: Authorization (h5)| B1
    A6 -->|实时数据 / WebSocket| B1
    A7 -->|设备孪生/传感器数据| B1
    A8 -.->|静态托管 CDN / Nginx| A8

    B1 -.->|动态导出接口契约| C1
    C1 --> C2
    C2 -.->|强类型 SDK 注入| MultiTerminal

    B1 <-->|HTTP / RPC 调度| B2
    B1 --> DB
    B2 -.->|读取/回填数据| DB
```

### 3.2 Sa-Token 多端统一鉴权与 Session 隔离规范

为防止多端用户在同一服务端发生会话混淆与权限越权，在 `RuoYi-Vue-Plus` 中配置三套独立的 Sa-Token 账号体系：

| 客户端类别 | 体系标识 | 鉴权工具类 | 请求头规范 | Session 存储 Key 格式 | 登录与互踢策略 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **中后台系统管理员** | `admin` | `StpUtil` (默认) | `Authorization: Bearer <token>` | `satoken:login:admin:<id>` | 单端登录，同端互踢（保证安全） |
| **Web 业务前台 / 商户** | `client` | `StpClientUtil` | `Authorization: Bearer <token>` | `satoken:login:client:<id>` | 允许同账号多地点并发登录 |
| **移动端 / 小程序 / APP** | `app` | `StpAppUtil` | `Authorization: Bearer <token>` | `satoken:login:app:<id>` | 多端共存，Token 长效持久化（30 天） |

---

## 4. 各端形态标准工程落地规范

### 4.1 品牌官网 (纯前端 React 19)
* **工程创建命令**：
  ```bash
  pnpm create vite brand-website --template react-ts
  cd brand-website
  pnpm add -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  npx shadcn@latest init
  pnpm add axios @tanstack/react-query lucide-react clsx tailwind-merge
  ```
* **推荐标准目录骨架**：
  ```text
  brand-website/
  ├── src/
  │   ├── api/            # 由 OpenAPI 生成的强类型请求函数
  │   ├── components/     # 营销区块 (Hero, Features, Pricing, FAQ, Footer)
  │   ├── hooks/          # 自定义 React Hooks
  │   ├── lib/            # 工具类 (utils.ts, queryClient.ts)
  │   ├── App.tsx         # 落地页主入口
  │   └── main.tsx
  ├── tailwind.config.js
  └── vite.config.ts
  ```
* **部署规范**：执行 `pnpm build` 输出纯静态 `dist/`，直接交付 Nginx 静态托管或内置在 Spring Boot `static/` 目录下，**严禁部署 Node.js 服务端**。

---

### 4.2 微信 / 多端小程序 (官方 uni-app + Wot Design Uni)
* **工程创建命令**：
  ```bash
  npx degit dcloudio/uni-preset-vue#vite-ts my-uniapp
  cd my-uniapp
  pnpm add wot-design-uni pinia
  pnpm add -D unocss @unocss/preset-uno
  ```
* **`vite.config.ts` 关键配置**：
  ```ts
  import { defineConfig } from 'vite';
  import uni from '@dcloudio/vite-plugin-uni';
  import UnoCSS from 'unocss/vite';

  export default defineConfig({
    plugins: [uni(), UnoCSS()],
  });
  ```
* **AI 提示约束**：开发页面布局时，100% 优先采用 UnoCSS 简写类（如 `p-4 flex items-center justify-between`），杜绝编写全局自定义 CSS 类，防止包体积膨胀。

---

### 4.3 移动 APP & PC 桌面端 (Flutter 现代全平台栈)
* **工程创建与依赖安装**：
  ```bash
  flutter create my_app --platforms=android,ios,windows,macos,linux
  cd my_app
  flutter pub add flutter_riverpod riverpod_annotation go_router dio drift sqlite3_flutter_libs path_provider path shadcn_ui
  flutter pub add -d build_runner drift_dev riverpod_generator
  ```
* **推荐 Clean Architecture 目录结构**：
  ```text
  lib/
  ├── core/            # 核心网络层(Dio)、路由配置(go_router)、主题设计
  ├── database/        # Drift 关系型数据库定义 (tables.dart, database.dart)
  ├── features/        # 按业务垂直划分 (Feature-first)
  │   └── order/
  │       ├── data/           # 数据源层 (Remote DataSource, Models)
  │       ├── domain/         # 业务实体层 (Entities)
  │       └── presentation/   # 页面与 Riverpod 状态提供者 (Controller/UI)
  └── main.dart
  ```

---

### 4.4 独立移动端 H5 (Vue 3 + Vant 4)
* **工程创建与依赖安装**：
  ```bash
  npm create vue@latest my-h5-app   # 勾选 TypeScript, Router, Pinia
  cd my-h5-app
  pnpm add vant
  pnpm add -D unplugin-vue-components @vant/auto-import-resolver postcss-px-to-viewport-8-plugin
  ```
* **`postcss.config.js` 视口无损转换配置**：
  ```js
  module.exports = {
    plugins: {
      'postcss-px-to-viewport-8-plugin': {
        viewportWidth: 375, // 统一按照 375px 设计稿标准直接书写 px，自动转换为 vw
        unitPrecision: 5,
        viewportUnit: 'vw',
        selectorBlackList: ['.ignore', 'keep-px'],
        minPixelValue: 1,
        mediaQuery: false,
      },
    },
  };
  ```

---

### 4.5 数据可视化大屏 (Vue 3 + autofit.js + ECharts 5)
* **工程创建与依赖安装**：
  ```bash
  npm create vue@latest big-screen-app
  cd big-screen-app
  pnpm add echarts vue-echarts autofit.js
  pnpm add -D tailwindcss postcss autoprefixer
  ```
* **`main.ts` 全局等比自适应初始化**：
  ```ts
  import { createApp } from 'vue';
  import App from './App.vue';
  import autofit from 'autofit.js';

  createApp(App).mount('#app');

  // 一行代码搞定全屏自适应，彻底解决 Tooltip 坐标位移问题
  autofit.init({
    designWidth: 1920,
    designHeight: 1080,
    renderDom: '#app',
    resize: true,
  });
  ```

---

### 4.6 Web 3D 渲染场景 (Three.js 通用底座 & R3F)
* **大屏 / 业务台 3D 通用工程**：
  ```bash
  pnpm create vite web3d-twin --template vue-ts
  cd web3d-twin
  pnpm add three gsap three-stdlib
  pnpm add -D @types/three
  ```
* **官网声明式 3D（在 React 官网工程按需引入）**：
  ```bash
  pnpm add three @types/three @react-three/fiber @react-three/drei
  ```

---

### 4.7 Web 文档系统 (VitePress)
* **工程创建命令**：
  ```bash
  mkdir my-docs && cd my-docs
  pnpm init
  pnpm add -D vitepress
  npx vitepress init # 交互式引导生成标准骨架
  ```
* **标准 `docs/.vitepress/config.mts` 配置结构**：
  ```ts
  import { defineConfig } from 'vitepress';

  export default defineConfig({
    title: '企业产品技术文档库',
    description: '标准用户手册与开放接口文档',
    themeConfig: {
      nav: [{ text: '首页', link: '/' }, { text: '开发指南', link: '/guide/' }],
      sidebar: [
        {
          text: '入门指引',
          items: [{ text: '快速开始', link: '/guide/quick-start' }],
        },
      ],
      search: { provider: 'local' },
    },
  });
  ```

---

### 4.8 AI Agent / 自动化脚本微服务 (Python FastAPI)
* **基于 Astral `uv` 极速初始化**：
  ```bash
  uv init ai-sidecar --app
  cd ai-sidecar
  uv add "fastapi[standard]" pydantic-settings httpx structlog
  ```
* **极简纯异步分层结构**：
  ```text
  ai-sidecar/
  ├── app/
  │   ├── api/            # 路由定义 (v1/agent.py, v1/crawler.py)
  │   ├── core/           # 环境变量与配置 (config.py, logging.py)
  │   ├── schemas/        # Pydantic 输入输出契约定义
  │   ├── services/       # 大模型调用流、RAG 检索、工作流编排
  │   └── main.py         # FastAPI 应用入口与生命周期管理
  ├── pyproject.toml
  └── uv.lock
  ```

---

## 5. 契约驱动与类型安全流水线

为了在 Multi-repo 多端架构下彻底消除 AI Agent 编写 API 请求时的**路径拼错、入参漏传、类型虚构**等幻觉问题，全栈统一采用“**后端单一真理源，前端一键自动生成**”管道：

```text
               ┌─────────────────────────────────────┐
               │    RuoYi-Vue-Plus (Spring Boot 3)   │
               │   @Operation, @Schema, @Tag 注解     │
               └──────────────────┬──────────────────┘
                                  │ 启动动态生成
                                  ▼
               ┌─────────────────────────────────────┐
               │     OpenAPI 3.0 元数据 JSON 契约     │
               │           (/v3/api-docs)            │
               └──────────────────┬──────────────────┘
                                  │
         ┌────────────────────────┴────────────────────────┐
         │ CI / 本地自动化命令执行                          │ 本地自动化命令执行
         ▼                                                 ▼
┌──────────────────────────────┐              ┌──────────────────────────────┐
│  前端工具: openapi-typescript │              │  客户端工具: openapi-generator│
│       或 orval 工具          │              │        (Dart 目标生成器)     │
└──────────────┬───────────────┘              └──────────────┬───────────────┘
               │ 导出 TS 接口与 Axios Client                 │ 导出 Dart Model 与 Dio Client
               ▼                                             ▼
┌──────────────────────────────┐              ┌──────────────────────────────┐
│  Vue 3 / React / uniapp 消费 │              │       Flutter 客户端消费     │
│  (全属性精准补全，编译期强校验) │              │   (强类型实体映射，杜绝空指针) │
└──────────────────────────────┘              └──────────────────────────────┘
```

* **前端执行规范**：在各前端工程的 `package.json` 中配置：
  ```json
  "scripts": {
    "gen:api": "openapi-typescript http://localhost:8080/v3/api-docs -o src/api/schema.d.ts"
  }
  ```
* **Agent 交互指令**：当要求 AI Agent 编写新业务功能前，先输入指令：*“请先执行 `pnpm gen:api` 同步最新契约，再基于 `schema.d.ts` 中的强类型定义编写请求调用代码。”*

---

## 6. 多仓库治理与交付运维体系

### 6.1 Multi-repo 仓库组织与命名规范

| 仓库名称 | 承载业务与技术栈 | 部署交付物类型 | 负责端形态 |
| :--- | :--- | :--- | :--- |
| `repo-core-backend` | Java (RuoYi-Vue-Plus) + MySQL/Redis | Docker 镜像 / Jar | 核心业务服务端 |
| `repo-web-admin` | Vue 3 (plus-ui) + Element Plus | Nginx 静态文件 / Jar 内嵌 | Web 业务管理系统 |
| `repo-brand-site` | React 19 + Vite 5 + TailwindCSS + shadcn | Nginx 静态文件 / CDN 边缘 | 品牌官网 / 宣传落地页 |
| `repo-mini-program`| Vue 3 (uni-app) + UnoCSS + Wot Design | 微信小程序代码包 (CI 上传) | 微信 / 多端小程序 |
| `repo-mobile-desktop`| Flutter 3.x + Riverpod + Drift + shadcn | APK / IPA / EXE / DMG | 移动 APP & PC 桌面端 |
| `repo-mobile-h5` | Vue 3 + Vant 4 + vw 适配 | Nginx 静态文件 / CDN 边缘 | 独立移动端 H5 |
| `repo-big-screen` | Vue 3 + autofit.js + ECharts 5 | Nginx 静态文件 | 数据可视化大屏 |
| `repo-web3d-twin` | Three.js + TypeScript + Vite | Nginx 静态文件 | Web 3D 数字孪生 |
| `repo-web-docs` | VitePress (Vue 3) | 纯静态 HTML / GitHub Pages | Web 文档系统 |
| `repo-ai-sidecar` | Python 3.11+ (FastAPI + uv) | Docker 镜像 / 独立进程 | AI Agent 自动化微服务 |

### 6.2 零明文机密与环境隔离红线
* **配置分离**：全端禁止在代码仓库中硬编码任何真实数据库密码、云密钥（OSS AK/SK）、微信 AppSecret 或大模型 API Key。
* **脱敏占位**：配置文件统一使用大写占位符（如 `${DB_PASSWORD}`、`${DEEPSEEK_API_KEY}`）或从环境变量注入。

---

## 7. 附录：权威信源与参考索引

本规范所涉及的框架与核心库均已完成活跃度与代码纯净度核查，官方权威索引如下：

1. **核心服务端**：
   * RuoYi-Vue-Plus 官方仓库：[https://gitee.com/dromara/RuoYi-Vue-Plus](https://gitee.com/dromara/RuoYi-Vue-Plus)
   * Sa-Token 官方文档：[https://sa-token.cc/](https://sa-token.cc/)
2. **Web 业务台与官网**：
   * plus-ui 官方仓库：[https://gitee.com/JavaLionLi/plus-ui](https://gitee.com/JavaLionLi/plus-ui)
   * shadcn/ui 官方组件库：[https://ui.shadcn.com/](https://ui.shadcn.com/)
3. **移动端与全平台同构**：
   * Flutter 官方技术门户：[https://flutter.dev/](https://flutter.dev/)
   * Riverpod 官方开发文档：[https://riverpod.dev/](https://riverpod.dev/)
   * Drift (SQLite) 官方规范：[https://drift.simonbinder.eu/](https://drift.simonbinder.eu/)
   * Wot Design Uni 小程序组件库：[https://wot-design-uni.netlify.app/](https://wot-design-uni.netlify.app/)
   * Vant 4 官方文档：[https://vant-ui.github.io/vant/](https://vant-ui.github.io/vant/)
4. **可视化、3D 与文档**：
   * autofit.js 官方仓库：[https://github.com/Auto-Plugin/autofit.js](https://github.com/Auto-Plugin/autofit.js)
   * Three.js 官方门户：[https://threejs.org/](https://threejs.org/)
   * VitePress 官方文档：[https://vitepress.dev/](https://vitepress.dev/)
5. **AI 辅助服务端**：
   * Astral uv 官方指南：[https://docs.astral.sh/uv/](https://docs.astral.sh/uv/)
   * FastAPI 官方开发指南：[https://fastapi.tiangolo.com/](https://fastapi.tiangolo.com/)
