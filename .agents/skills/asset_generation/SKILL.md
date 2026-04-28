# 角色/场景资产生成技能（Asset Generation）

## 功能
- AI生成角色形象、场景图；用户可手动上传

## 接口
- `POST /api/assets/generate/character/:id`
- `POST /api/assets/generate/scene/:id`
- `POST /api/assets/upload/character/:id`
- `POST /api/assets/upload/scene/:id`

## 数据流
- 生成图片URL入MongoDB asset/scene，对象存储主文件
