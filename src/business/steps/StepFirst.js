import React, { Component } from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker
} from "antd";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

class StepFirst extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

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

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

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
