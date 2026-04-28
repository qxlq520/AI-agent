# 项目全局设定技能（Project Config）

## 功能
- 项目名称、风格、比例设定、创作者承诺

## 接口
- `POST /api/project/config` 新建项目配置
- `GET /api/project/config/:id` 获取配置

## 校验
- 项目名称≤50字，风格/比例为枚举

## 数据流
- 配置信息存MongoDB，绑定剧本/用户/项目
