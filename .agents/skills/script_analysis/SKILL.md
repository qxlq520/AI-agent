# 剧本解析与结构化技能（Script Analysis）

## 功能
- NLP/大模型生成剧本摘要、结构化场景、角色、台词

## 接口
- `POST /api/script/parse/:project_id` 剧本解析
- `GET /api/script/parse/progress/:task_id` 获取进度

## 异步处理
- 经典用法：队列异步 + 进度查询

## 数据流
- 解析结果入MongoDB
