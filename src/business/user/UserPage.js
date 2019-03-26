import React, { Component } from "react";
import ConditionSelector from "../../tool/component/shared/conditionSelector";
import TableOperator from "../../tool/component/shared/TableOperator";
import style from "./style.module.less";
import { Divider,Table } from "antd";
import moment from "moment";
import CustomModal from "../../tool/component/shared/modal";
import FormContent from "./element/FormContent";
export default class UserPage extends Component{
  constructor(props){
    super(props);
    this.state={
      condition:{},
      flag:false,
      dataRecord:'',
      title:"",
      dataList:[
        {
          account:"admin",
          name:"admin",
          ins:"icebox",
          role:"root",
          hasRole:"all",
          date:'1124234'
        }
      ]
    };

    this.conditionConfig = [
      {
        label: "姓名",
        type: "input",
        value: "name",
        options: null,
        componentOptions: {
          placeholder: "请输入",
        //  onChange: this.handleConditionChange("itemId")
        }
      },
      {
        label: "产业选择",
        type: "select",
        value: "ins",
        options: [{ key: "2", label: "冰箱" },
      { key: "3", label: "洗衣机" }
      ],
        componentOptions: {
          placeholder: "请输入",
       //   onChange: this.handleConditionChange("barCode")
        }
      },
      {
        label: "角色选择",
        type: "select",
        value: "role",
        options: [{ key: "2", label: "root" },
          { key: "3", label: "develop" }
        ],
        componentOptions: {
          placeholder: "请输入",
          //   onChange: this.handleConditionChange("barCode")
        }
      },
      {
        label: "权限选择",
        type: "select",
        value: "ins",
        options: [{ key: "2", label: "冰箱" },
          { key: "3", label: "洗衣机" }
        ],
        componentOptions: {
          placeholder: "请输入",
          mode:"multiple",
          //   onChange: this.handleConditionChange("barCode")
        }
      },
    ];
    this.columns = [
      {
        title: "登录账号",
        dataIndex: "account",
        key: "account",
        // render: (text, record, index) => {
        //   return index + 1;
        // }
      },
      {
        title: "姓名",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "所属产业",
        dataIndex: "ins",
        key: "ins"
      },
      {
        title: "所属角色",
        dataIndex: "role",
        key: "role"
      },
      {
        title: "拥有权限",
        dataIndex: "hasRole",
        key: "hasRole"
      },
      {
        title: "创建日期",
        dataIndex: "date",
        key: "date",
        render: text => text? moment(text).format("YYYY-MM-DD HH:mm:ss") : ""
      },
      {
        title: "操作",
        dataIndex: "action",
        className: "table-action-center",
        key: "action",
       // fixed: "right",
      //  width: "150px",
        render: (text, record) => {
          return (
            <span>
              <a href=" #" onClick={this.toShow(record)}>
                修改
              </a>
              <Divider type="vertical" />
              <a href=" #" onClick={this.handleDelete(record)}>
                删除
              </a>
            </span>
          );
        }
      }
    ];
  }
  searchPromotion = (e) =>{
    console.log(e);
  };
  resetCondition = ()=>{
    Object.keys(this.state.condition).forEach(r=>{
      delete this.state.condition[r]
    });
  };
  toShow = (record) => ()=> {
    if(record){
      this.setState({
        title:"修改用户"
      })
    } else{
      this.setState({
        title:"新建用户"
      })
    }
    let recorder = record?record:'';
    this.setState({
      flag:true,
      dataRecord:recorder
    })
  };
  handleDelete = (record) =>{
    return console.log(record)
  };
  cancel = ()=>{
    this.setState({
      flag:false
    })
  };
  renderContent=()=>{
    return <FormContent handleCancel={this.cancel} content={this.state.dataRecord} />
  };
  render(){
    return (
    <div>
      <ConditionSelector
        conditions={this.conditionConfig}
        onSubmit={this.searchPromotion}
        reset={this.resetCondition}
      />
      <section className={style["table-wrapper"]}>
        <TableOperator
          hasSearchBox={false}
          buttonName="新建用户"
          onButtonClick={this.toShow()}
        />
        <CustomModal title={this.state.title} flag={this.state.flag} handleContent={this.renderContent()}/>
        <Table
          dataSource={this.state.dataList}
          columns={this.columns}
          // scroll={{ x: 1366 }}
          rowKey="account"
        />
      </section>
    </div>
    )
  }
}
