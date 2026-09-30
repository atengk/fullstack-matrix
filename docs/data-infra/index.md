---
title: 系统底座与数据湖仓概览
order: 0
---

# 系统底座与数据湖仓架构概览与导读

> **领域定位**：奠定企业高可用、海量数据存储与计算基石，覆盖 Linux 操作系统与宿主服务、关系型/分布式中间件矩阵、现代流批一体实时湖仓与知识图谱复杂关联挖掘。

## 📑 收录技术栈与核心选型

<VpCardGrid :cols="2">
  <VpCard
    title="服务器操作系统与基础服务"
    desc="Ubuntu/Rocky/OpenEuler + Systemd + 内核调优与冷备防御"
    link="/data-infra/linux-services"
    icon="i-lucide-hard-drive"
    badge="系统基座"
    badgeType="tip"
  />
  <VpCard
    title="数据存储与分布式中间件"
    desc="MySQL MGR / PG Patroni + Redis 7 + Doris 实时数仓 + RustFS"
    link="/data-infra/data-middleware"
    icon="i-lucide-database"
    badge="金融高可用"
    badgeType="info"
  />
  <VpCard
    title="大数据流批一体现代湖仓"
    desc="Flink 1.19+ / Spark 3.5+ + Paimon / Iceberg 流式事务湖仓"
    link="/data-infra/bigdata-lakehouse"
    icon="i-lucide-waves"
    badge="秒级流批一体"
    badgeType="purple"
  />
  <VpCard
    title="知识图谱与图数据库"
    desc="Neo4j 5.x + NebulaGraph 3.x + GraphRAG 大模型图增强检索"
    link="/data-infra/knowledge-graph"
    icon="i-lucide-network"
    badge="GraphRAG"
    badgeType="warning"
  />
</VpCardGrid>

---

## 📊 本领域技术选型横向对照

| 业务形态 | 推荐选型 | 核心架构优势 |
| :--- | :--- | :--- |
| [**服务器操作系统与基础服务**](/data-infra/linux-services) | `Linux OS / Systemd` | 物理隔离数据盘，sysctl内核防雪崩，NTP时钟防回拨，零密码加固 |
| [**数据存储与分布式中间件**](/data-infra/data-middleware) | `MySQL / PG / Doris` | 全场景数据中枢，关系型金融级高可用集群与分库分表，微服务护城河 |
| [**大数据流批一体现代湖仓**](/data-infra/bigdata-lakehouse) | `Flink / Spark + Paimon` | 秒级实时流计算与离线批处理统一，流式湖仓 ACID 保证与跨源秒级查询 |
| [**知识图谱与图数据库**](/data-infra/knowledge-graph) | `Neo4j / NebulaGraph` | 毫秒级多跳穿透海量关系网络，消除传统递归 Join 死锁，图增强大模型 |

---

## 💡 快速上手指引

点击上方卡片或左侧导航栏，可深入查阅各个技术领域的双生架构选型矩阵、核心技术栈清单、版本依赖以及生产红线防御清单。
