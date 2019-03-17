// import React, { Component } from "react";
//
//
//
// import { Bar } from 'ant-design-pro/lib/Charts';
// import * as ReactDOM from "antd";
// import Divider from "antd/es/divider";
// import Table from "antd/es/table";
//
// const salesData = [];
// for (let i = 0; i < 12; i += 1) {
//   salesData.push({
//     x: `${i + 1}月`,
//     y: Math.floor(Math.random() * 1000) + 200,
//   });
// }
//
// ReactDOM.render(
//   <Bar
//     height={200}
//     title="销售额趋势"
//     data={salesData}
//   />
// class TableChart extends Component {
//
// render(){
//   const columns = [{
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a href="javascript:;">{text}</a>,
//   }, {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   }, {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   }, {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//       <span>
//       {tags.map(tag => {
//         let color = tag.length > 5 ? 'geekblue' : 'green';
//         if (tag === 'loser') {
//           color = 'volcano';
//         }
//         return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
//       })}
//     </span>
//     ),
//   }, {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//       <span>
//       <a href="javascript:;">Invite {record.name}</a>
//       <Divider type="vertical" />
//       <a href="javascript:;">Delete</a>
//     </span>
//     ),
//   }];
//
//   const data = [{
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   }, {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   }, {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },];
//   return <Table columns={columns} dataSource={data} />
// }
//
//
//
// }
//
// export default TableChart;
