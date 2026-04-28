# 分镜脚本生成技能（Storyboard Generation）

## 功能
- 自动拆分多集，生成分镜列表
- 积分消耗、进度反馈

## 接口
- `POST /api/storyboard/generate/:project_id` 生成分镜
- `GET /api/storyboard/list/:project_id` 查询项目所有分镜脚本
- `GET /api/storyboard/preview/:episode_id` 单集预览

## 数据流
- 分镜入MongoDB storyboard_videos集合，积分扣除
