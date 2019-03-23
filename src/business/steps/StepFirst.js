import React, { Component } from "react";
import { Form, Input, DatePicker } from "antd";

class StepFirst extends Component {
  render() {
    const formItemLayout = {
      labelCol: {
        xl: { span: 8 },
        xxl: { span: 8 }
      },
      wrapperCol: {
        xl: { span: 8 },
        xxl: { span: 8 }
      }
    };

    return (
      <Form {...formItemLayout}>
        <Form.Item label="工贸">
          <Input />
        </Form.Item>
        <Form.Item label="产业">
          <Input />
        </Form.Item>
        <Form.Item label="物料名称">
          <Input />
        </Form.Item>
        <Form.Item label="物料编码">
          <Input />
        </Form.Item>
        <Form.Item label="销售目标">
          <Input />
        </Form.Item>
        <Form.Item label="库存">
          <Input />
        </Form.Item>
        <Form.Item label="日期">
          <DatePicker />
        </Form.Item>
      </Form>
    );
  }
}

export default StepFirst;
