import React, { Component } from "react";
import { Form, Row, Col, Input, Button, Icon } from "antd";

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18,offset:1 },
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
    const children = [];
    for (let i = 0; i < 6; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? "block" : "none" }}>
          <Form.Item {...formItemLayout} style={{display:"flex",flex:1}} label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>
      );
    }
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
        <Row gutter={24}>{this.getFields()}
          <Col span={8} >
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              展开 <Icon type={this.state.expand ? "up" : "down"} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchBar;
