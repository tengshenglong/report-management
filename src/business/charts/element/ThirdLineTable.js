import React,{Component} from "react";
import Table from "antd/es/table/Table";
import Progress from "antd/es/progress/progress";


class ThirdLineTable extends Component {
  render(){
    const dataSource = [{
      date: '11日',
      sales: '￥33633',
      per: 30,
    }, {
      date: '12日',
      sales: '￥245361',
      per: 70,
    },
      {
        date: '13日',
        sales: '￥11110',
        per: 10,
      },
      {
        date: '14日',
        sales: '￥54282',
        per: 50,
      },{
        date: '15日',
        sales: '￥33633',
        per: 30,
      },{
        date: '16日',
        sales: '￥89103',
        per: 80,
      },{
        date: '17日',
        sales: '￥29173',
        per: 20,
      }];

    const columns = [{
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    }, {
      title: '日销额',
      dataIndex: 'sales',
      key: 'sales',
    }, {
      title: '日销额占比',
      dataIndex: 'per',
      key: 'per',
      render:text=><Progress percent={text} strokeLinecap="square" size="small" strokeColor={"#5b7dff"} strokeWidth={10} />
    }];

    return <Table
      style={{height:"410px",background:"#fff"}}
      dataSource={dataSource}
      columns={columns}
      // showHeader={false}
      size={"middle"}
      bordered={false}
      pagination={false}/>
  }
}

export default ThirdLineTable;
