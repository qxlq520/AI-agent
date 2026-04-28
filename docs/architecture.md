# 项目架构说明

## 总览
一站式 AI 短剧生成平台全流程：
- 剧本接入（上传/粘贴/AI 生成）
- 项目设定
- 剧本解析结构化
- 资产拆解与生成
- 分镜生成
- 视频生成

## 技术选型
- 前端: React + TypeScript + AntDesign Pro
- 后端: Node.js (NestJS) / Python (FastAPI)
- 数据库: MongoDB
- 缓存/队列: Redis, RabbitMQ (可选)
- AI 服务: Seedance 2.0 及自研 NLP/图像
- OSS: 阿里云OSS/腾讯云COS
