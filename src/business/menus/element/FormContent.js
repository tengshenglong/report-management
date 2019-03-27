import React, { Component } from "react";
import { Form, Input, Row, Col, Button } from "antd";


class RegistrationForm extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
    this.props.handleCancel();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 2
        },
        sm: {
          span: 10,
          offset: 8
        }
      }
    };
    const record = this.props.content;
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="菜单名称">
          {getFieldDecorator("name", {
            rules: [
              {
                required: false,
                message: "Please input your name!"
              }
            ],
            initialValue: record.name ? record.name : ""
          })(<Input type="text" />)}
        </Form.Item>
        <Form.Item label="菜单位置">
          {getFieldDecorator("position", {
            rules: [
              {
                required: false,
                message: "请输入位置"
              }
            ],
            initialValue: record.position ? record.position : ""
          })(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Row>
            <Col span={12}>
              <Button onClick={this.props.handleCancel}>取消</Button>
            </Col>
            <Col span={12}>
              <Button type="primary" htmlType="submit">
                确定
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);
export default WrappedRegistrationForm;
