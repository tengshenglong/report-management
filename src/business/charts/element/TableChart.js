import React, { Component } from "react";

import { Table } from "antd";
class TableChart extends Component {
  render() {
    const columns = [
      {
        title: "排名",
        dataIndex: "index",
        key: "index",
        render: text =>
          text === "1" ? (
            <span style={{ color: "red" }}>{text}</span>
          ) : text === "2" ? (
            <span style={{ color: "orange" }}>{text}</span>
          ) : text === "3" ? (
            <span style={{ color: "green" }}>{text}</span>
          ) : (
            <span style={{ color: "#000" }}>{text}</span>
          )
      },
      {
        title: "物料编码",
        dataIndex: "code",
        key: "code"
      },
      {
        title: "产业",
        dataIndex: "inst",
        key: "inst"
      },
      {
        title: "销售额",
        key: "sales",
        dataIndex: "sales"
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
        render: text =>
          text === 0 ? (
            <span style={{ color: "green" }}>↑上升</span>
          ) : (
            <span style={{ color: "red" }}>↓下降</span>
          )
      },
      {
        title: "日环比",
        dataIndex: "percent",
        key: "percent"
      }
    ];
    const data = [
      {
        index: "1",
        code: "BB04310AA",
        inst: "洗衣机",
        sales: "2558993",
        status: 0,
        percent: "55.55%"
      },
      {
        index: "2",
        code: "BB04310AA",
        inst: "洗衣机",
        sales: "2558993",
        status: 0,
        percent: "28%"
      },
      {
        index: "3",
        code: "BB04310AA",
        inst: "洗衣机",
        sales: "2558993",
        status: 1,
        percent: "10%"
      },
      {
        index: "4",
        code: "BB04310AA",
        inst: "洗衣机",
        sales: "2558993",
        status: 0,
        percent: "6.88%"
      },
      {
        index: "5",
        code: "BB04310AA",
        inst: "洗衣机",
        sales: "2558993",
        status: 1,
        percent: "1.00%"
      }
    ];

    return <Table columns={columns} dataSource={data} size="small" />;
  }
}

export default TableChart;
