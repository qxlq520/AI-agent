# 视频生成技能（Video Generation）

## 功能
- 基于分镜和图像、调用AI模型生成完整短剧分集视频
- 异步生成、进度查询、失败重试

## 接口
- `POST /api/video/generate/:episode_id` 生成视频
- `GET /api/video/progress/:task_id` 查询进度
- `GET /api/video/list/:project_id` 获取所有视频
- `GET /api/video/download/:video_id` 下载文件

## 数据流
- 视频文件OSS，视频URL和状态入storyboard_videos
