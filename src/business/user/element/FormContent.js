import React, { Component } from "react";
import {
  Form, Input,Select, Row, Col, Checkbox, Button
} from 'antd';

const { Option } = Select;

class RegistrationForm extends Component {
  state = {

  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    this.props.handleCancel();
  };


  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 2,
        },
        sm: {
          span: 10,
          offset: 8,
        },
      },
    };
    const record = this.props.content;
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="账户名称"
        >
          {getFieldDecorator('account', {
            rules: [ {
              required: true, message: '请输入账户名称',
            }],
            initialValue: record.account?record.account:""
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="姓名"
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: 'Please input your name!',
            }],
            initialValue: record.name?record.name:""
          })(
            <Input type="text" />
          )}
        </Form.Item>
        <Form.Item
          label="产业选择"
        >
          {getFieldDecorator('ins', {
            rules: [
              { required: true, message: '请选择产业!' },
            ],
            initialValue: record.ins?record.ins:""
          })(
            <Select placeholder="Please select">
              <Option value="ice">冰箱</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="角色选择"
        >
          {getFieldDecorator('role', {
            rules: [
              { required: true, message: '请选择角色!' },
            ],
            initialValue: record.role?record.role:""
          })(
            <Select placeholder="Please select">
              <Option value="admin">admin</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="工贸权限选择"
        >
          {getFieldDecorator('chooseRole', {
            rules: [
              { required: true, message: '请选择工贸权限', type: 'array' },
            ],
            initialValue: record.chooseRole ? record.chooseRole:""
          })(
            <Select mode="multiple" placeholder="请选择工贸权限">
              <Option value="beijing">北京</Option>
              <Option value="sanya">三亚</Option>
              <Option value="shanghai">上海</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="操作权限设置"
        >
          {getFieldDecorator("hasRole", {
            initialValue: record.hasRole?[record.hasRole]:[]
          })(
            <Checkbox.Group>
                <Checkbox value="A">维护权限</Checkbox>
                <Checkbox value="C">数据下载权限</Checkbox>
            </Checkbox.Group>
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Row>
            <Col span={12}><Button onClick={this.props.handleCancel}>取消</Button></Col>
            <Col span={12}><Button type="primary" htmlType="submit">确定</Button></Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
export default WrappedRegistrationForm;
