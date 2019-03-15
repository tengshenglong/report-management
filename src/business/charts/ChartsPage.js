import React, { Component } from "react";
import {Statistic,Icon, Card, Col, Row ,Divider,Tooltip} from "antd";
import ArtCharts from './ArtCharts';
import TableCharts from './TableCharts';
import LineCharts from './LineCharts';
import style from "./charts.module.less";
import moment from 'moment';
import Button from "antd/es/button/button";

const beginDay = new Date().getTime();
const tabListNoTitle = [
  {
    key: "art",
    tab: "按表格展示"
  },
  {
    key: "list",
    tab: "按折线图展示"
  },
  {
    key: "zhu",
    tab: "按柱状图展示"
  },
  {
    key: "else",
    tab: "按其他展示"
  }
];
const dataList = [];
for (let i = 0; i < 20; i += 1) {
  dataList.push({
    x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10,
  });
}
const contentListNoTitle = {
  art: <ArtCharts />,
  list: <TableCharts />,
  zhu: <LineCharts />,
  else: <h1>else</h1>
};
class ChartsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noTitleKey: "art",
      topListCity:[
        {title:"BACSKOKOOO",total:'34341223'},
        {title:"12121212",total:'34341223'},
        {title:"BasdasdOOO",total:'34341223'},
        {title:"dsadasdasd",total:'34341223'},
        {title:"dsdasdasas",total:'34341223'},
        ]
    };
  }
  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };
  render() {
    return (
      <div>
        <div
          className={style["card-head"]}
          style={{ background: "#eee", padding: "10px" }}
        >
          <Row gutter={16}>
            <Col span={6}>
                <Col span={24} style={{ }}>
                  <Button />
                </Col>
            </Col>
            <Col span={6}>
                <Col span={24} style={{ }}>

                </Col>
            </Col>
            <Col span={6}>

            </Col>
            <Col span={6}>
              <Col span={24} style={{ }}>

              </Col>
            </Col>
          </Row>
        </div>
        <div>
          <Card
            style={{ width: "100%" }}
            tabList={tabListNoTitle}
            activeTabKey={this.state.noTitleKey}
            onTabChange={key => {
              this.onTabChange(key, "noTitleKey");
            }}
          >
            <Row gutter={24}>
              <Col span={16}>
                {contentListNoTitle[this.state.noTitleKey]}
              </Col>
              <Col span={8}>
                <div className={style['salesRank']}>
                  <h4 className={style['rankingTitle']}>
                    物料销售TOP10(元)
                  </h4>
                  <ul className={style['rankingList']}>
                    {this.state.topListCity.map((item, i) => (
                      <li key={item.title} style={{height: '28px'}}>
                            <span className=
                              { i<3 ? style["rankingItemNumberActive"]:style['rankingItemNumber']}
                            >
                              {i + 1}
                            </span>
                        <span className={style['rankingItemTitle']} title={item.title}>
                              {item.title}
                            </span>
                        <Divider type="vertical"/>
                        <span className={style['rankingItemValue']}>
                              {(item.total)}
                            </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}

export default ChartsPage;
