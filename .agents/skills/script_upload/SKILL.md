# 剧本上传技能（Script Upload）

## 功能
- 支持 txt、docx 剧本文件上传与解析，最大长度10万字

## 接口
- `POST /api/script/upload` — 上传剧本文件，返回文本
- `POST /api/script/paste` — 直接贴入文本

## 技术
- Node.js 用 multer / Python 用 python-multipart 处理文件
- 支持 docx 解析（python-docx）

## 数据流
- 解析后文本存 MongoDB，原始文件存对象存储
