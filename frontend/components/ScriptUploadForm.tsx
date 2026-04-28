import { Upload, Button, message } from 'antd';

const ScriptUploadForm = () => (
  <Upload
    accept={'.txt,.docx'}
    maxCount={1}
    action="/api/script/upload"
    onChange={({file}) => {
      if (file.status === 'done') message.success('上传成功');
      if (file.status === 'error') message.error('上传失败');
    }}
  >
    <Button>上传剧本文件</Button>
  </Upload>
);
export default ScriptUploadForm;
