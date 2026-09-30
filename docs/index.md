---
layout: home

hero:
  name: "全端全栈技术选型矩阵"
  text: "34 个垂直领域现代化架构决策蓝图"
  tagline: "工业级技术栈分层收敛 · 双生架构矩阵 · 生产红线防御 · 拒绝技术非标与造轮子"
  image:
    src: /logo.svg
    alt: 全端全栈技术选型矩阵
  actions:
    - theme: brand
      text: 🚀 开启架构选型探索 →
      link: /client/
    - theme: alt
      text: ⚡ 全栈速查总览表
      link: /overview

features:
  - icon: 🎯
    title: 34 个垂直领域全景覆盖
    details: 从 Web 管理后台、原生小程序、Flutter/Tauri 跨端，到核心业务 Spring Boot、工业 PLC、实时湖仓与 AI 大模型，全景闭环。
  - icon: 🛡️
    title: 严苛生产红线与反模式防御
    details: 每个技术领域均附带工业级研发红线、安全规范与反模式清单，杜绝团队走弯路与引入暗坑隐患。
  - icon: ⚡
    title: 模式 A vs 模式 B 双生架构
    details: 兼顾“企业级一体化开箱脚手架（快速敏捷交付）”与“纯第一方原生自研组合（极致白纸可控）”，灵活匹配不同团队背景。
---

## 🏛️ 六大核心领域决策矩阵

<VpCardGrid :cols="3">
  <VpCard
    title="📱 多端客户端与表现层"
    desc="覆盖管理后台、品牌官网、微信与跨端小程序、Flutter 移动/桌面/5端同构、Tauri、移动 H5、可视化大屏、Three.js 数字孪生与 VitePress 文档系统。"
    icon="i-lucide-smartphone"
    link="/client/"
    badge="12 个领域"
    badgeType="tip"
  />
  <VpCard
    title="⚙️ 核心业务与脚本自动化"
    desc="覆盖 Spring Boot 3 / Cloud 6.X 分布式微服务双生架构、MyBatis-Plus、Sa-Token，与 Python uv 高性能数据采集、办公自动化和 Playwright 探针。"
    icon="i-lucide-server"
    link="/backend/"
    badge="2 个领域"
    badgeType="info"
  />
  <VpCard
    title="🏭 工业物联与专业图形"
    desc="覆盖 UE5 / Unity 6 工业数字孪生、ARM Linux / ESP32 物联网边缘网关、西门子/罗克韦尔 PLC 通信、LVGL/Slint 嵌入式屏与轻量游戏引擎。"
    icon="i-lucide-cpu"
    link="/iot-graphics/"
    badge="5 个领域"
    badgeType="purple"
  />
  <VpCard
    title="🗄️ 系统底座与数据湖仓"
    desc="覆盖 Rocky/Debian 操作系统基座、MySQL MGR / PG Patroni 高可用中间件、Flink + Paimon 实时湖仓与 Neo4j / NebulaGraph 知识图谱。"
    icon="i-lucide-database"
    link="/data-infra/"
    badge="4 个领域"
    badgeType="warning"
  />
  <VpCard
    title="🤖 AI算法与多模态感知"
    desc="覆盖 FastAPI + LangGraph AI Agent 微服务、YOLO11 / PaddleOCR 视觉识别、DeepSpeed / GRPO 大模型微调评测与 SenseVoice / CosyVoice 语音中枢。"
    icon="i-lucide-bot"
    link="/ai-speech/"
    badge="4 个领域"
    badgeType="tip"
  />
  <VpCard
    title="☁️ 云原生质量与安全韧性"
    desc="覆盖 K8s 1.30+ Cilium eBPF、ZLMediaKit 国标流媒体、Keycloak IAM 认证、k6 混沌工程、CesiumJS 空间地理与 OpenTelemetry 全景可观测性。"
    icon="i-lucide-shield-check"
    link="/cloud-reliability/"
    badge="7 个领域"
    badgeType="danger"
  />
</VpCardGrid>

---

## 🗺️ 全端全栈架构全景拓扑

```markmap
# 全端全栈技术选型全景矩阵 (34 Domains)
## 📱 1. 多端客户端与表现层
### Web 业务管理系统 (Vue 3 + Element Plus)
### 品牌官网与营销落地页 (React 19 + shadcn/ui)
### 多端小程序 (uni-app + Wot Design Uni)
### 微信原生小程序 (Skyline + TDesign)
### 独立移动 APP (Flutter Mobile)
### 独立 PC 桌面端 (Flutter Desktop)
### 现代化 PC 桌面端 (Tauri 2.0 + Rust)
### 移动 & PC 通用端 (Flutter 5 端同构)
### 独立移动端 H5 (Vue 3 + Vant 4)
### 数据可视化大屏 (Vue 3 + ECharts 5)
### Web 3D 数字孪生 (Three.js 双引擎)
### Web 文档系统 (VitePress)
## ⚙️ 2. 核心业务与脚本自动化
### 核心业务后端 (Spring Boot 3 / Cloud 6.X)
### 数据采集与自动化脚本 (Python uv + Playwright)
## 🏭 3. 工业物联与专业图形
### PC 桌面端专业 3D 仿真 (UE5 / Unity 6)
### 物联网边缘网关与 MCU (ARM Linux / ESP32)
### 工业物联 PLC 与 SCADA (PLC4X / Snap7 / Neuron)
### 嵌入式微型屏 GUI 与 HMI (LVGL / Slint)
### 跨平台轻量游戏开发 (Cocos Creator / Godot 4)
## 🗄️ 4. 系统底座与数据湖仓
### 服务器操作系统与基础服务 (Linux OS / Systemd)
### 数据存储与分布式中间件 (MySQL / PG / Doris / RustFS)
### 大数据流批一体现代湖仓 (Flink + Paimon / Spark + Iceberg)
### 知识图谱与图数据库 (Neo4j / NebulaGraph GraphRAG)
## 🤖 5. AI算法与多模态感知
### AI Agent 微服务与工作流 (FastAPI + LangGraph + LiteLLM)
### 计算机视觉与图像识别 (YOLO11 + PaddleOCR)
### 大模型微调与 MLOps (PEFT/LoRA + DeepSpeed + GRPO)
### 智能语音识别与音频合成 (SenseVoice + CosyVoice)
## ☁️ 6. 云原生质量与安全韧性
### Linux 集群运维与部署 (Go Cluster Ops)
### 容器集群编排与 GitOps (K8s 1.30+ + Cilium + ArgoCD)
### 音视频流媒体与 WebRTC (ZLMediaKit + LiveKit)
### 统一身份认证与网络安全 (Keycloak + 雷池 WAF + Vault)
### 全链路压测与混沌演练 (k6 + GoReplay + Chaos Mesh)
### 空间地理信息与 WebGIS (PostGIS + GeoServer + CesiumJS)
### 云原生统一可观测性 (OpenTelemetry + VictoriaMetrics + Loki)
```

---

## 📌 架构选型三大核心公理

::: tip 公理一：避免非标自研与闭门造车
优先选用拥有全球/国内最广泛开源社区背书、主流大模型语料储备最充分的技术方案，禁止在非核心业务场景自行发明低质闭源轮子。
:::

::: info 公理二：端到端契约优先 (Contract-First)
接口契约是跨团队与跨端协作的最高法律。通过 OpenAPI (Swagger) 规范在构建期自动逆向生成全端类型安全的 SDK，彻底杜绝联调幻觉与手写字段失配。
:::

::: warning 公理三：防御性设计与生产红线不可逾越
每个技术模块必须将高可用、数据安全、N+1 拦截、异常熔断与防重复提交前置到架构第一天，坚守工程底线。
:::
