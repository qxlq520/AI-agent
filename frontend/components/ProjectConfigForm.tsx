import { Form, Input, Select, Checkbox, Button, message } from 'antd';

const styles = [
  '2D 国风半厚涂', '3DCG 动画写实', '真人写实', '2D 赛璐璐', '3D 卡通古风', '自定义风格'
];
const ratios = ['9:16', '16:9'];

const ProjectConfigForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    // TODO: 调用后端保存接口
    message.success('配置提交成功');
  };
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="name" label="项目名称" rules={[{ required: true, max: 50 }]}> <Input /> </Form.Item>
      <Form.Item name="style" label="画面风格" rules={[{ required: true }]}> <Select options={styles.map(v=>({label:v,value:v}))} /> </Form.Item>
      <Form.Item name="ratio" label="画面比例" rules={[{ required: true }]}> <Select options={ratios.map(r=>({label:r,value:r}))} /> </Form.Item>
      <Form.Item name="is_creator_agreed" valuePropName="checked" rules={[{required:true}]}> <Checkbox>我承诺内容合法合规</Checkbox> </Form.Item>
      <Button htmlType="submit" type="primary">保存配置</Button>
    </Form>
  );
};
export default ProjectConfigForm;
