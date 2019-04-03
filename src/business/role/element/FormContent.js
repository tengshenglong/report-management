import React, { Component } from "react";
import { Button, Col, Input, Row ,Tree,Form } from "antd";
const { TreeNode } = Tree;

const treeData = [
  {
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [
      { title: '0-0-0-0', key: '0-0-0-0' },
      { title: '0-0-0-1', key: '0-0-0-1' },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0' },
      { title: '0-0-1-1', key: '0-0-1-1' },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: '0-2',
  key: '0-2',
}];
 class RegistrationForm extends Component {
   constructor(props) {
     super(props);
     this.state = {
       expandedKeys: ['0-0-0', '0-0-1'],
       autoExpandParent: true,
       checkedKeys: ['0-0-0'],
       selectedKeys: [],
     }
   }

  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onCheck = (checkedKeys) => {
   // console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  };

  onSelect = (selectedKeys, info) => {
   // console.log('onSelect', info);
    this.setState({ selectedKeys });
  };

  renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item}>
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} />;
  });
   handleSubmit = e => {
     e.preventDefault();
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
          <Form.Item label="角色名称">
            {getFieldDecorator("roleName", {
              rules: [
                {
                  required: true,
                  message: "请输入角色名称"
                }
              ],
              initialValue: record.roleName ? record.roleName : ""
            })(<Input />)}
          </Form.Item>
          <Form.Item label="角色描述">
            {getFieldDecorator("desc", {
              rules: [
                {
                  required: true,
                  message: "Please input your desc!"
                }
              ],
              initialValue: record.desc ? record.desc : ""
            })(<Input type="text" />)}
          </Form.Item>
          <Form.Item label="赋予权限">
            {getFieldDecorator("role", {
              rules: [
                {
                  required: true,
                  message: "Please input your name!"
                }
              ],
              initialValue: record.name ? record.name : ""
            })(<Tree
              checkable
              onExpand={this.onExpand}
              expandedKeys={this.state.expandedKeys}
              autoExpandParent={this.state.autoExpandParent}
              onCheck={this.onCheck}
              checkedKeys={this.state.checkedKeys}
              onSelect={this.onSelect}
              selectedKeys={this.state.selectedKeys}
            >
              {this.renderTreeNodes(treeData)}
            </Tree>)}
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


