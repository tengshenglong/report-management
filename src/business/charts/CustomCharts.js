import React, { Component } from "react";
import 'ant-design-pro/dist/ant-design-pro.css';
import { Button, Statistic } from "antd";
import { ChartCard, Field, MiniArea, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import numeral from 'numeral';

import { Card, Col, Row ,Divider,Tooltip} from "antd";
import Icon from "antd/es/icon";
import ArtCharts from './ArtCharts';
import TableCharts from './TableCharts';
import style from "./charts.module.less";
import moment from 'moment';
import DatePlan from "./DatePlan";

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
  zhu: <p>project content</p>,
  else: <h1>else</h1>
};
class CustomCharts extends Component {
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
    console.log(key, type);
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
                  <ChartCard
                    title="访问量"
                    action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                    total={numeral(8846).format('0,0')}
                    footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
                    contentHeight={46}
                  >
                    <MiniBar
                      height={46}
                      color={"#00998f"}
                      data={dataList}
                    />
                  </ChartCard>
                </Col>
            </Col>
            <Col span={6}>
                <Col span={24} style={{ }}>
                <ChartCard
                  contentHeight={87}
                  footer={<Field label="本月销售数量" value={numeral(1234).format('0,0')} />}
                >
                  <NumberInfo
                    subTitle={<span>本周访问</span>}
                    total={numeral(12321).format('0,0')}
                    status="up"
                    subTotal={17.1}
                  />
                  <MiniArea
                    line
                    height={45}
                    data={dataList}
                  />
                </ChartCard>
                </Col>
            </Col>
            <Col span={6}>
              <Card
                bordered={true}
                style={{ }}
              >
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic
                      title="销售额"
                      value={1128}
                      prefix={<Icon type="like" />}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="销售率"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: "#3f8600" }}
                      prefix={<Icon type="arrow-up" />}
                      suffix="%"
                    />
                  </Col>
                </Row>
                <Row gutter={16} style={{marginTop:"12px"}}>
                  <Col span={12}>
                    <Statistic
                      title="销售额"
                      value={1128}
                      prefix={<Icon type="like" />}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="销售率"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: "#3f8600" }}
                      prefix={<Icon type="arrow-up" />}
                      suffix="%"
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={6}>
              <Col span={24} style={{ }}>
                <ChartCard
                  title="访问量"
                  action={<Tooltip title="指标说明"><Icon type="info-circle-o" /></Tooltip>}
                  total={numeral(8846).format('0,0')}
                  footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
                  contentHeight={46}
                >
                  <MiniBar
                    height={46}
                    color={"#00998f"}
                    data={dataList}
                  />
                </ChartCard>
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
        <div>
          <DatePlan />
        </div>
      </div>
    );
  }
}

export default CustomCharts;
