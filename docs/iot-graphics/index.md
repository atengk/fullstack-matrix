---
title: 工业物联与专业图形概览
order: 0
---

# 工业物联与专业图形架构概览与导读

> **领域定位**：纵向贯通从微控制器（MCU）裸机/RTOS、工业总线 PLC 数据采集、轻量边缘网关、触控屏 HMI，到 UE5/Unity 工业级照片级三维仿真与轻量小游戏的全景技术栈。

## 📑 收录技术栈与核心选型

<VpCardGrid :cols="2">
  <VpCard
    title="PC 桌面端专业 3D 仿真"
    desc="UE5 (Lumen/Nanite) 与 Unity 6 混合视口工业级照片仿真与数字地球"
    link="/iot-graphics/desktop-3d-simulation"
    icon="i-lucide-cuboid"
    badge="次时代光追"
    badgeType="purple"
  />
  <VpCard
    title="物联网边缘网关与 MCU"
    desc="ARM Linux (Go) 边缘盒与 ESP32 (C/C++) MCU 固件断网补报双模"
    link="/iot-graphics/iot-edge-mcu"
    icon="i-lucide-cpu"
    badge="边缘双模"
    badgeType="tip"
  />
  <VpCard
    title="工业物联 PLC 与 SCADA"
    desc="Apache PLC4X + Snap7 直连驱动与 EMQX Neuron + FUXA Web 组态"
    link="/iot-graphics/industrial-plc-scada"
    icon="i-lucide-activity"
    badge="工业协议栈"
    badgeType="info"
  />
  <VpCard
    title="嵌入式微型屏 GUI 与 HMI"
    desc="LVGL 9.x 微控制器动效与 Slint 1.8+ 跨平台无 GC 工控触控屏"
    link="/iot-graphics/embedded-gui-hmi"
    icon="i-lucide-tablet"
    badge="轻量触控"
    badgeType="success"
  />
  <VpCard
    title="跨平台轻量游戏开发"
    desc="Cocos Creator 3.8+ 互动营销小游戏与 Godot 4.3+ 独立游戏"
    link="/iot-graphics/lightweight-game-engine"
    icon="i-lucide-gamepad-2"
    badge="营销互动"
    badgeType="warning"
  />
</VpCardGrid>

---

## 📊 本领域技术选型横向对照

| 业务形态 | 推荐选型 | 核心架构优势 |
| :--- | :--- | :--- |
| [**PC 桌面端专业 3D 仿真**](/iot-graphics/desktop-3d-simulation) | `UE5 / Unity 6` | 突破 WebGL 显存截断，亿级光追，工业 PLC 硬件联动，数字地球 |
| [**物联网边缘网关与 MCU**](/iot-graphics/iot-edge-mcu) | `ARM Linux / ESP32` | 工业串口轮询，断网无感环形补报防丢点，硬件看门狗自愈 |
| [**工业物联 PLC 与 SCADA**](/iot-graphics/industrial-plc-scada) | `PLC4X / Snap7 / Neuron` | 西门子/AB/三菱 PLC 毫秒级批量轮询与字节序规整，Web 组态组装看板 |
| [**嵌入式微型屏 GUI 与 HMI**](/iot-graphics/embedded-gui-hmi) | `LVGL 9.x / Slint 1.8+` | 单片机数十 KB 内存极致动效，Rust 跨平台无 GC 现代工控人机界面 |
| [**跨平台轻量游戏开发**](/iot-graphics/lightweight-game-engine) | `Cocos 3.8+ / Godot 4.3+` | 微信/抖音小游戏与轻互动营销绝对霸主，Asset Bundle 秒开，无版税引擎 |

---

## 💡 快速上手指引

点击上方卡片或左侧导航栏，可深入查阅各个技术领域的双生架构选型矩阵、核心技术栈清单、版本依赖以及生产红线防御清单。
