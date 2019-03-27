import React, { Component } from "react";
import { Form, Input, Select, Row, Col, Button } from "antd";

const { Option } = Select;

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
        <Form.Item label="产品组CODE">
          {getFieldDecorator("code", {
            rules: [
              {
                required: true,
                message: "请输入账户名称"
              }
            ],
            initialValue: record.code ? record.code : ""
          })(<Input />)}
        </Form.Item>
        <Form.Item label="产品组名称">
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
        <Form.Item label="产业选择">
          {getFieldDecorator("ins", {
            rules: [{ required: true, message: "请选择产业!" }],
            initialValue: record.ins ? record.ins : ""
          })(
            <Select placeholder="Please select">
              <Option value="ice">冰箱</Option>
            </Select>
          )}
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
