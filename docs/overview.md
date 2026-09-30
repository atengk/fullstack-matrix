---
title: 全栈技术选型速查总览
order: 0
---
# 全栈技术选型速查总览

| 业务形态 | 核心底座 | UI 与表现层 | 状态 / 路由 / 网络 | 核心优势 |
| :--- | :--- | :--- | :--- | :--- |
| [**Web 业务管理系统**](/client/web-management) | **Vue 3** + Vite 5 + TS | **plus-ui 6.X** (脚手架) / **Element Plus + Tailwind v4** (纯框架) | Pinia + VueUse + Axios + ECharts | 兼顾一体化脚手架极速交付（开箱自带 RBAC/字典）与纯第一方原生框架按需自研 |
| [**品牌官网 / 宣传落地页**](/client/marketing-site) | **React 19** + Vite 5 + TS | **TailwindCSS v4** + **shadcn/ui** | React Router 7 + Axios + Motion | 纯静态资产（零 Node 运行时），顶流 AI UI 生成生态，获客留资与丝滑动效闭环 |
| [**多端小程序**](/client/cross-miniapp) | **uni-app (Vue 3)** + Vite 5 + TS | **Wot Design Uni** + UnoCSS | Pinia (自动持久化) + uni-use + 文件路由/布局 | 一套代码发布微信/支付宝/抖音等多端，2MB 红线三层防御，全端 Hooks 闭环 |
| [**微信原生小程序**](/client/wechat-native) | **微信原生框架** + TS | **TDesign 微信小程序版** (腾讯官方) | MobX + Promisify + Skyline/WebView + CI | 100% 腾讯第一方生态，Skyline 60fps 动效与降级，独立分包秒开，miniprogram-ci 自动化 |
| [**独立移动 APP**](/client/flutter-mobile) | **Flutter 3.x (Mobile)** | **Material 3 (移动 Slate Tokens)** | **flutter_bloc (Cubit)** + 三层存储 + 中文本土化 | 专注移动触控与中文排版（回退链/拼音检索/原生本地化），零桌面依赖 |
| [**独立 PC 桌面端 (Flutter)**](/client/flutter-desktop) | **Flutter 3.x (Desktop)** | **Material 3 (桌面生产力 Tokens)** | **flutter_bloc (Cubit)** + 桌面外设 + 中文回退链 | 纯 Dart 自绘引擎，支持无边框窗体、系统托盘、全局快捷键与多窗口调度 |
| [**现代化 PC 桌面端 (Tauri)**](/client/tauri-desktop) | **Tauri 2.0** + **Rust 1.80+** | **Vue 3 / React 19 Web 资产 100% 复用** | tauri-specta + 双层持久化 + 自动更新 | 内存 30MB、包体 10MB，双层持久化，IPC 强类型代码生成，防篡改热更，终结 Electron |
| [**移动 & PC 全端通用**](/client/flutter-universal) | **Flutter 3.x (Universal)** | **flutter_adaptive_scaffold** | **flutter_bloc (Cubit)** + 全端同构 + 中文本地化 | 一套代码通吃 5 大 OS，宽屏侧栏与窄屏底栏自动断点响应，极高代码复用 |
| [**独立移动端 H5**](/client/mobile-h5) | **Vue 3** + Vite 5 + TS | **Vant 4** + **postcss-mobile-forever** | Pinia + Keep-Alive + VueUse + 微信JSSDK | 375px转vw+540px防拉伸，微信分享/支付/开放标签，列表保活，vConsole 真机排障 |
| [**数据可视化大屏**](/client/datav-screen) | **Vue 3** + Vite 5 + TS | **autofit.js** + ECharts 5 + **Tailwind v4** | WebSocket/SSE + CountUp + 无缝轮播 | 消除断更大屏库死锁，双工推流+HTTP弹性降级，24/7无人值守防内存泄露，地图三级下钻 |
| [**Web 3D 渲染与数字孪生**](/client/web-3d-digital-twin) | **Three.js** + TS + Vite 5 | **Vue 原生 TS / React R3F 双流** | 后处理管线 + 空间标签 + BVH加速 | 工业数字孪生(原生极致/BVH/发光告警/2D标签)；品牌营销(R3F/Drei/物理动效/声明式) |
| [**Web 文档系统**](/client/web-docs-vitepress) | **VitePress (Vue 3)** | 默认主题 + 交互演示容器 + Mermaid | 纯静态 SSG + MiniSearch 中文检索 | Docs-as-Code 标杆，中文分词离线检索，Mermaid 架构图即代码，组件演练场，Git 变更溯源 |
| [**核心业务后端**](/backend/core-backend) | **Spring Boot / Cloud** | **RuoYi-Plus 6.X** (脚手架) / **Spring Boot 纯框架** | Sa-Token + MyBatis-Plus + Redis + MQ/SnailJob | 兼顾开箱脚手架极速交付与企业级自研组合（MQ/SnailJob/多级缓存/S3）高度自主掌控 |
| [**AI Agent 微服务与大模型工作流**](/ai-speech/ai-agents) | **Python 3.11+** + **FastAPI** | LangGraph + LiteLLM + MCP | Qdrant/Milvus + BGE-Reranker + Langfuse | 专职大模型智能体工作流、高精度多路RAG、私有化算力(vLLM/Ollama)、全链路Trace与防缓冲推流 |
| [**数据采集与自动化脚本工具**](/backend/python-automation) | **Python 3.11+** + **Astral uv** | **Typer** + **Rich** (高颜值CLI) | Playwright + httpx + pandas + APScheduler | PEP 723免装环境单文件极速运行，动态Web RPA/反爬采集，Excel海量清洗与轻量嵌入式调度 |
| [**PC 桌面端专业 3D / 虚拟仿真**](/iot-graphics/desktop-3d-simulation) | **Unreal Engine 5** / **Unity 6** | UMG / UI Toolkit / Qt 6 混合视口 | 像素流 WebRTC + 3D Tiles + OPC UA | 突破浏览器 WebGL 显存截断，Nanite/Lumen 亿级光追，工业 PLC 硬件联动，数字地球 |
| [**Linux 集群运维编排与部署工具**](/cloud-reliability/linux-cluster-ops) | **Go 1.22+** (纯静态编译) | **Bubbletea** / Pterm (炫酷 TUI 交互) | Cobra + Viper + 并发 SSH + client-go | 零依赖单二进制分发，千级节点毫秒并发 SSH 流水线，与 K8s/Docker 原生同构 |
| [**物联网边缘网关与嵌入式微服务**](/iot-graphics/iot-edge-mcu) | **ARM Linux (Go)** / **ESP32 (C/C++)** | 硬件 GPIO/串口 / 边缘状态面板 | Modbus + MQTT + 离线环形存储 + OTA | 工业总线串口轮询，断网无感环形补报防丢点，硬件看门狗自愈，微安级极低功耗 |
| [**服务器操作系统与基础服务**](/data-infra/linux-services) | **Ubuntu 24.04** / **Rocky 9** / **OpenEuler** | Nginx 1.26+ / 堡垒机 / 日志轮转 | Docker Compose v2 + Systemd + 内核调优 | 物理隔离数据盘，sysctl内核防雪崩，NTP时钟防回拨，零密码加固与增量异地冷备 |
| [**数据存储与分布式中间件**](/data-infra/data-middleware) | **MySQL 8.4** / **PG 16** / **Doris 2.x** | **Redis 7** / **RustFS** / **Nacos 2.x** | MGR/Patroni高可用 + ShardingSphere + Seata + MQ三剑客 | 全场景数据中枢，关系型金融级高可用集群与分库分表，极速实时数仓，无GC对象存储，微服务治理护城河 |
| [**计算机视觉与图像识别**](/ai-speech/computer-vision-ocr) | **Python 3.11+** / **C++** | **YOLO11** / **PaddleOCR** | TensorRT + ONNX Runtime + ByteTrack | 工业质检缺陷检测，安防RTSP低延迟实时目标检测，文档票据高精度OCR与多模态图文大模型 |
| [**AI 大模型研发与微调**](/ai-speech/llm-finetuning-mlops) | **Python 3.11+** + **PyTorch** | **LLaMA-Factory** / **Unsloth** | DeepSpeed + AWQ + DeepEval + WandB | 垂直领域指令微调与LoRA/DPO偏好对齐，分布式并行预训练，模型蒸馏量化与自动化评测闭环 |
| [**大数据实时流批一体与现代数据湖仓**](/data-infra/bigdata-lakehouse) | **Java 17/21** + **Scala** / **Python** | **Apache Flink 1.19+** + **Apache Spark 3.5+** | Apache Iceberg / Paimon + DolphinScheduler + Trino | 统一秒级实时流计算与海量离线批处理，现代流式湖仓事务 ACID 保证，消除数据孤岛与跨源联邦秒级查询 |
| [**容器集群编排与 GitOps 交付**](/cloud-reliability/kubernetes-gitops) | **Go 1.22+** / **Linux** | **Kubernetes 1.30+** / **K3s (轻量化)** | Helm 3 + ArgoCD + Harbor 2.x + Traefik/Ingress | 声明式 GitOps 持续部署与单点代码变更溯源，跨节点无感滚动更新与弹性 HPA 伸缩，边缘与微型集群无缝自适应 |
| [**音视频实时流媒体与安防国标**](/cloud-reliability/media-streaming-webrtc) | **C/C++** / **Go** / **Rust** | **ZLMediaKit / WVP-PRO** + **LiveKit** | SRS 6.x + FFmpeg 7.x + WebRTC + SIP | 安防视频监控 GB28181 国标全协议栈接入，RTMP/RTSP 毫秒级转码分发，次时代 WebRTC 全双工语音对话与音视频会议 |
| [**智能语音识别与音频合成**](/ai-speech/speech-ai-asr-tts) | **Python 3.11+** + **PyTorch** | **Faster-Whisper / SenseVoice** + **CosyVoice 2.x** | Silero VAD + FunASR + ChatTTS + ONNX/TensorRT | 端到端多语种高精度语音转写与情感识别，毫秒级打断端点检测，自然拟人流式发音与零样本秒级音色克隆 |
| [**统一身份认证与网络安全防护**](/cloud-reliability/security-iam) | **Java 21 (Keycloak)** / **Go (Vault)** | **Keycloak** + **雷池 SafeLine WAF** | OAuth2/OIDC + HashiCorp Vault + SonarQube + Trivy | 企业级全系统单点登录与 2FA 双因子认证，语义级防 SQL 注入与防 CC 攻击，动态机密凭证秒级轮转，代码镜像安全左移 |
| [**全链路压测与混沌高可用演练**](/cloud-reliability/performance-chaos) | **Go 1.22+** / **JavaScript** | **Grafana k6** + **GoReplay** | Chaos Mesh + Locust + Prometheus/Grafana | 现代化高并发压测与真实生产流量无感镜像回放，云原生混沌工程全自动注入网络分区与节点故障，全链路高可用韧性筑底 |
| [**WebGIS 与空间遥感数据服务**](/cloud-reliability/spatial-webgis) | **PostGIS** + **Java (GeoServer)** | **CesiumJS 1.120+** + **OpenLayers** | MapLibre GL + QGIS + 3D Tiles + Turf.js | 空间数据库千万级拓扑几何计算，OGC标准地图瓦片服务发布，三维数字地球实景遥感与二维高精度空间测绘一体化 |
| [**工业物联网 PLC 与 SCADA 数采**](/iot-graphics/industrial-plc-scada) | **C/C++** / **Java (PLC4X)** / **Go** | **Apache PLC4X** + **EMQX Neuron** | open62541 (OPC UA) + Snap7 + Node-RED + FUXA | 纳管西门子/AB/三菱主流 PLC 寄存器毫秒级批量轮询与字节序规整，轻量边缘网关协议流转，纯 Web 组态低代码看板 |
| [**嵌入式微型屏 GUI 与工控 HMI**](/iot-graphics/embedded-gui-hmi) | **纯 C** / **Rust (Slint)** | **LVGL 9.x** + **SquareLine Studio** | Slint 1.8+ + DMA2D双缓冲 + 字库压缩 + 触控/旋钮 | 微控制器（单片机）几十 KB 内存极致动效，官方可视化拖拽编辑一键出 C 代码，次时代 Rust 跨平台无 GC 轻量工控触控屏 |
| [**知识图谱与图数据库**](/data-infra/knowledge-graph) | **Java 17+** / **C++** / **Python** | **Neo4j 5.x** + **NebulaGraph 3.x** | Cypher + GraphRAG + PyG + NeoDash | 毫秒级多跳穿透海量关系网络，消除传统递归 Join 死锁，次时代 GraphRAG 大模型图增强宏观检索，万亿边高并发图计算 |
| [**跨平台轻量小游戏与互动营销**](/iot-graphics/lightweight-game-engine) | **TypeScript** / **GDScript** / **C#** | **Cocos Creator 3.8+** + **Godot 4.3+** | Asset Bundle + Box2D + Spine + Vulkan | 微信/抖音小游戏与轻互动营销绝对霸主，Asset Bundle 突破首包红线秒开，次时代纯净开源无版税多端游戏引擎，独立游戏与轻仿真首选 |
| [**云原生统一可观测性与全景 APM**](/cloud-reliability/observability-apm) | **Go** / **Rust** / **Java Agent** | **OpenTelemetry** + **VictoriaMetrics** | Grafana Loki + Tempo + Vector + Alertmanager | CNCF 事实标准统一全链路追踪/指标/日志，低成本无索引流式日志消除传统 ELK 机器成本，秒级定位线上复杂分布式故障根因 |
