import React, { Component } from "react";
import { Button, Statistic } from "antd";
import { Card, Col, Row } from 'antd';
import Icon from "antd/es/icon";
import style from "./charts.module.less";
class CustomCharts extends Component {

  render() {
    return (
      <div>
      <div className={style["card-head"]}>
        <Card style={{width:300,margin:10,boxShadow:"0 0 2px  #f00 inset"}}>
          <Row gutter={16}>
            <Col span={12}>

              <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
            </Col>
            <Col span={12}>
              <Statistic title="Unmerged" value={93} suffix="/ 100" />
            </Col>
          </Row>
        </Card>
        <Card style={{width:400}}>
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="销售额"
                  value={11.8}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="arrow-up" />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="销售周期"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<Icon type="arrow-down" />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
        </Card>
      </div>

      </div>
    );
  }
}

export default CustomCharts;
