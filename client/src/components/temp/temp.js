function Temp({ onSubmit = handleSubmit, ...props }) {
  return (
    <Modal
      title="Add"
      visible
      okButtonProps={{
        form: "add-form",
        htmlType: "submit"
      }}
    >
      <Form id="add-form" layout="vertical" onSubmit={onSubmit}>
        <Form.Item label="Message" for="message">
          {props.form.getFieldDecorator("message")(<Input />)}
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default Form.create()(Temp);