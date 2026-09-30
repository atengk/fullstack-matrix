---
title: AI算法与多模态感知概览
order: 0
---

# AI算法与多模态感知架构概览与导读

> **领域定位**：覆盖大模型 Agent 智能体协同微服务、工业/安防计算机视觉与 OCR、大模型指令微调评测 MLOps、以及端到端智能语音转写（ASR）与语音合成（TTS）。

## 📑 收录技术栈与核心选型

<VpCardGrid :cols="2">
  <VpCard
    title="AI Agent 微服务与工作流"
    desc="FastAPI + LangGraph + LiteLLM + MCP 高并发全链路 Trace 智能体"
    link="/ai-speech/ai-agents"
    icon="i-lucide-bot"
    badge="智能体工作流"
    badgeType="tip"
  />
  <VpCard
    title="计算机视觉与图像识别"
    desc="YOLO11 实时检测 + PaddleOCR 高精版面分析 + TensorRT 硬件加速"
    link="/ai-speech/computer-vision-ocr"
    icon="i-lucide-scan-eye"
    badge="安防质检"
    badgeType="info"
  />
  <VpCard
    title="大模型算法微调与 MLOps"
    desc="LLaMA-Factory + LoRA/DPO 对齐 + DeepSpeed 分布式并行与蒸馏"
    link="/ai-speech/llm-finetuning-mlops"
    icon="i-lucide-sparkles"
    badge="模型精调"
    badgeType="purple"
  />
  <VpCard
    title="智能语音识别与音频合成"
    desc="Faster-Whisper / SenseVoice 语音转写 + CosyVoice 零样本克隆"
    link="/ai-speech/speech-ai-asr-tts"
    icon="i-lucide-mic"
    badge="拟人克隆"
    badgeType="success"
  />
</VpCardGrid>

---

## 📊 本领域技术选型横向对照

| 业务形态 | 推荐选型 | 核心架构优势 |
| :--- | :--- | :--- |
| [**AI Agent 微服务与工作流**](/ai-speech/ai-agents) | `FastAPI + LangGraph` | 专职大模型工作流、高精度多路RAG、私有化算力推理与防缓冲推流 |
| [**计算机视觉与图像识别**](/ai-speech/computer-vision-ocr) | `YOLO11 + PaddleOCR` | 工业缺陷检测，安防 RTSP 低延迟实时检测，文档票据高精度 OCR |
| [**大模型算法微调与 MLOps**](/ai-speech/llm-finetuning-mlops) | `LLaMA-Factory + PEFT` | 垂直领域指令微调与LoRA/DPO偏好对齐，分布式并行预训练与评测闭环 |
| [**智能语音识别与音频合成**](/ai-speech/speech-ai-asr-tts) | `SenseVoice + CosyVoice` | 多语种高精度语音转写与情感识别，毫秒级打断端点检测与拟人发音 |

---

## 💡 快速上手指引

点击上方卡片或左侧导航栏，可深入查阅各个技术领域的双生架构选型矩阵、核心技术栈清单、版本依赖以及生产红线防御清单。
