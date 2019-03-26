import React, { Component } from "react";
import { Form, Row, Col, Input, Button, Icon, Select, DatePicker } from "antd";

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
  }

  getFields() {
    const count = this.state.expand ? 6 : 2;
    const { getFieldDecorator } = this.props.form;
    const children = [
      <Col span={8} key={1}>
        <Form.Item
          {...formItemLayout}
          style={{ display: "flex", flex: 1 }}
          label="所选工贸"
        >
          {getFieldDecorator(`工贸`, {
            rules: [
              {
                required: true,
                message: "请输入"
              }
            ]
          })(<Input placeholder="请输入" />)}
        </Form.Item>
      </Col>,
      <Col span={8} key={1}>
        <Form.Item
          {...formItemLayout}
          style={{ display: "flex", flex: 1 }}
          label="产业类别"
        >
          {getFieldDecorator(`产业`, {
            rules: [
              {
                required: true,
                message: "Input something!"
              }
            ]
          })(<Select placeholder="请选择" />)}
        </Form.Item>
      </Col>,
      <Col span={8} key={1} style={{ display: count === 6 ? "block" : "none" }}>
        <Form.Item
          {...formItemLayout}
          style={{ display: "flex", flex: 1 }}
          label="物料编码"
        >
          {getFieldDecorator(`物料编码`, {
            rules: [
              {
                required: true,
                message: "Input something!"
              }
            ]
          })(<Input placeholder="请输入" />)}
        </Form.Item>
      </Col>,
      <Col span={8} key={1} style={{ display: count === 6 ? "block" : "none" }}>
        <Form.Item
          {...formItemLayout}
          style={{ display: "flex", flex: 1 }}
          label="物料名称"
        >
          {getFieldDecorator(`物料名称`, {
            rules: [
              {
                required: true,
                message: "Input something!"
              }
            ]
          })(<Input placeholder="请输入" />)}
        </Form.Item>
      </Col>,
      <Col span={8} key={1} style={{ display: count === 6 ? "block" : "none" }}>
        <Form.Item
          {...formItemLayout}
          style={{ display: "flex", flex: 1 }}
          label="订单类型"
        >
          {getFieldDecorator(`订单类型`, {
            rules: [
              {
                required: true,
                message: "Input something!"
              }
            ]
          })(<Select placeholder="请选择" />)}
        </Form.Item>
      </Col>,
      <Col span={8} key={1} style={{ display: count === 6 ? "block" : "none" }}>
        <Form.Item
          {...formItemLayout}
          style={{ display: "flex", flex: 1 }}
          label="查询日期"
        >
          {getFieldDecorator(`日期`, {
            rules: [
              {
                required: true,
                message: "Input something!"
              }
            ]
          })(<DatePicker placeholder="请选择日期" />)}
        </Form.Item>
      </Col>
    ];

    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    return (
      <Form onSubmit={this.handleSearch}>
        <Row>
          {this.getFields()}
          <Col span={8}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
            <a
              href=" #"
              style={{ marginLeft: 8, fontSize: 14 }}
              onClick={this.toggle}
            >
              {this.state.expand ? "收起" : "展开"}
              <Icon type={this.state.expand ? "up" : "down"} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchBar;
