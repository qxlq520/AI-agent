# 资产拆解技能（Asset Extraction）

## 功能
- NLP实体识别提取角色、场景
- 支持重试与积分校验

## 接口
- `POST /api/assets/extract/:project_id` 触发资产提取
- `GET /api/assets/characters/:project_id` 获取角色
- `GET /api/assets/scenes/:project_id` 获取场景
- `POST /api/assets/retry/:type/:id` 单项重试

## 数据流
- 提取结果入MongoDB assets集合
