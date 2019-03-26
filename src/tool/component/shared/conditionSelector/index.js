import React, { Component } from "react";
import { Form, Input, Button, DatePicker, Cascader, Select } from "antd";
import styles from "./style.module.less";
import { isEmpty } from "lodash";

const { RangePicker } = DatePicker;

export default class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentSelector = (component) =>{
    if (isEmpty(component.type)) {
      return null;
    }
    const { componentOptions: config} = component;
    const {style = {}} = config;
    switch (component.type.toLowerCase()) {
      case "date":
        return <DatePicker {...config} style={{ width: 160, ...style }} />;
      case "cascader":
        return <Cascader {...config} style={{ width: 160, ...style }}/>;
      case "range":
        return <RangePicker {...config} style={{ width: 260, ...style }} />;
      case "select":
        return (
          <Select style={{ width: 160, ...style }} {...config}>
            {component.options.map((o, index) => {
              return (
                <Select.Option key={index} value={o.key}>
                  {o.label}
                </Select.Option>
              );
            })}
          </Select>
        );
      default:
        return <Input {...config} style={{ width: 160, ...style }} />;
    }
  };
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  handleReset = () => {
    this.props.form.resetFields();
    this.props.reset && this.props.reset();
    this.handleSubmit();
  };
  render() {
    // const { getFieldDecorator } = this.props.form;
    const { isExport } = this.props;
    return (
      <section className={styles["search-bar"]}>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <section className={styles["search-items"]}>
            {this.props.conditions.map((d, index) => {
              const {style = {}, className} = d;
              return (
                <Form.Item key={index} label={d.label} style={style} className={className}>
                  {
                  //   getFieldDecorator(d.value, {
                  //   initialValue: d.defaultValue
                  // })
                  (this.componentSelector(d))}
                </Form.Item>
              );
            })}
          </section>

          <section className={styles["search-btns"]}>
            <Form.Item style={{ float: "right", marginRight: 0 }} >
              <Button
                type="primary"
                onClick={this.handleSubmit}
                key="submit" htmlType="submit"
              >
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                重置
              </Button>
              {
                isExport ?  (<Button style={{ marginLeft: 8 }} onClick={this.handleExport}>
                  导出
                </Button>) : null
              }

            </Form.Item>
          </section>
        </Form>
      </section>
    );
  }
}
