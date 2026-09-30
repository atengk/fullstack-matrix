---
title: 云原生质量与安全韧性概览
order: 0
---

# 云原生质量与安全韧性架构概览与导读

> **领域定位**：构筑企业生产级质量底盘与安全防线，纳管 Kubernetes 容器编排、GB28181 流媒体、统一身份认证 IAM、全链路压测与混沌工程、WebGIS 空间地图及全景 APM 可观测。

## 📑 收录技术栈与核心选型

<VpCardGrid :cols="2">
  <VpCard
    title="Linux 集群运维与部署工具"
    desc="Go 1.22+ 纯静态编译单二进制工具，千级节点毫秒并发 SSH 编排"
    link="/cloud-reliability/linux-cluster-ops"
    icon="i-lucide-binary"
    badge="零依赖分发"
    badgeType="tip"
  />
  <VpCard
    title="容器集群编排与 GitOps"
    desc="Kubernetes 1.30+ + Cilium eBPF + ArgoCD 声明式持续交付"
    link="/cloud-reliability/kubernetes-gitops"
    icon="i-lucide-container"
    badge="GitOps自动化"
    badgeType="info"
  />
  <VpCard
    title="音视频流媒体与 WebRTC"
    desc="ZLMediaKit / WVP-PRO 国标安防与 LiveKit 毫秒级 WebRTC 双工音视频"
    link="/cloud-reliability/media-streaming-webrtc"
    icon="i-lucide-video"
    badge="GB28181安防"
    badgeType="purple"
  />
  <VpCard
    title="统一身份认证与网络安全"
    desc="Keycloak SSO/2FA + 雷池 SafeLine WAF + Vault 动态凭据"
    link="/cloud-reliability/security-iam"
    icon="i-lucide-shield-check"
    badge="安全左移"
    badgeType="danger"
  />
  <VpCard
    title="全链路压测与混沌演练"
    desc="Grafana k6 + GoReplay 流量回放 + Chaos Mesh 故障注入"
    link="/cloud-reliability/performance-chaos"
    icon="i-lucide-flame"
    badge="混沌演练"
    badgeType="warning"
  />
  <VpCard
    title="空间地理信息与 WebGIS"
    desc="PostGIS + GeoServer + CesiumJS 3D 数字地球实景遥感"
    link="/cloud-reliability/spatial-webgis"
    icon="i-lucide-map"
    badge="3D数字地球"
    badgeType="success"
  />
  <VpCard
    title="云原生统一可观测性与 APM"
    desc="OpenTelemetry + VictoriaMetrics + Loki 无索引流式日志全链路 APM"
    link="/cloud-reliability/observability-apm"
    icon="i-lucide-line-chart"
    badge="全景可观测"
    badgeType="tip"
  />
</VpCardGrid>

---

## 📊 本领域技术选型横向对照

| 业务形态 | 推荐选型 | 核心架构优势 |
| :--- | :--- | :--- |
| [**Linux 集群运维与部署工具**](/cloud-reliability/linux-cluster-ops) | `Go 1.22+ + Cobra` | 零依赖单二进制分发，千级节点毫秒并发 SSH 流水线，与 K8s 原生同构 |
| [**容器集群编排与 GitOps**](/cloud-reliability/kubernetes-gitops) | `K8s 1.30+ + ArgoCD` | 声明式 GitOps 持续部署与单点变更溯源，跨节点无感滚动更新与 HPA |
| [**音视频流媒体与 WebRTC**](/cloud-reliability/media-streaming-webrtc) | `ZLMediaKit + LiveKit` | 安防视频监控 GB28181 全协议栈接入，RTMP/RTSP 毫秒级转码，WebRTC 对话 |
| [**统一身份认证与网络安全**](/cloud-reliability/security-iam) | `Keycloak + SafeLine WAF` | 企业级全系统单点登录与 2FA 认证，语义级防 SQL 注入与防 CC 攻击 |
| [**全链路压测与混沌演练**](/cloud-reliability/performance-chaos) | `k6 + Chaos Mesh` | 高并发压测与真实生产流量无感镜像回放，云原生混沌故障注入筑底 |
| [**空间地理信息与 WebGIS**](/cloud-reliability/spatial-webgis) | `PostGIS + CesiumJS` | 空间数据库千万级拓扑计算，OGC地图瓦片发布，三维数字地球实景遥感 |
| [**云原生统一可观测性与 APM**](/cloud-reliability/observability-apm) | `OpenTelemetry + VM` | CNCF 事实标准统一链路/指标/日志，低成本无索引流式日志消除 ELK 成本 |

---

## 💡 快速上手指引

点击上方卡片或左侧导航栏，可深入查阅各个技术领域的双生架构选型矩阵、核心技术栈清单、版本依赖以及生产红线防御清单。
