import React, { Component } from "react";
import { Tree } from "antd";
const { TreeNode } = Tree;

const treeData = [
  {
    title: '零售概况',
    key: '0',
    children: [{
      title: '零售分析',
      key: '0-0',
    }]
  },
    {
      title: 'LES数据',
      key: '1',
      children: [
        { title: '日销分析', key: '1-0' },
        { title: '到月到型号出库', key: '1-1' },
        { title: '到日到型号出库', key: '1-2' },
      ],
    },
    {
      title: '备货',
      key: '2',
      children: [
        { title: '明细信息', key: '2-0' },
        { title: '备货预测', key: '2-1' },
      ],
    },
  {
    title: '进销存',
    key: '3',
    children: [
      { title: '明细信息', key: '3-0' },
      { title: '备货预测', key: '3-1' },
    ],
  },
  {
    title: '京东帮',
    key: '4',
    children: [
      { title: '明细信息', key: '4-0' },
      { title: '备货预测', key: '4-1' },
    ],
  },
  {
    title: '自营数据',
    key: '5',
    children: [
      { title: '明细信息', key: '5-0' },
    ],
  },
  {
    title: 'POP数据',
    key: '6',
    children: [
      { title: '明细信息', key: '6-0' },
      { title: '备货预测', key: '6-1' },
    ],
  },
  {
    title: '客服',
    key: '7',
    children: [
      { title: '明细信息', key: '7-0' },
      { title: '备货预测', key: '7-1' },
    ],
  },
  {
    title: '基础管理',
    key: '8',
    children: [
      { title: '明细信息', key: '8-0' },
      { title: '备货预测', key: '8-1' },
    ],
  },
  {
    title: '后台管理',
    key: '9',
    children: [
      { title: '明细信息', key: '9-0' },
      { title: '备货预测', key: '9-1' },
    ],
  },
  ];

export default class TreeRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedKeys: ['0', '1'],
      autoExpandParent: true,
      checkedKeys: ['0','1'],
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
  }

  onSelect = (selectedKeys, info) => {
    // console.log('onSelect', info);
    this.setState({ selectedKeys });
  }

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

  render() {
    return (
      <div style={{marginLeft:"10%"}}>
        <Tree
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
        </Tree>
      </div>

    );
  }
}

