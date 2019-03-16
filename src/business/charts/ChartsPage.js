import React, { Component } from "react";
import { Statistic, Icon, Card, Col, Row, Progress, Tooltip } from "antd";
import ArtCharts from "./ArtCharts";
import TableCharts from "./TableCharts";
import LineCharts from "./LineCharts";
import BeiHuo from "./BeiHuo";
import style from "./charts.module.less";
import moment from "moment";
import KuCun from "./KuCun";

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
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format(
      "YYYY-MM-DD"
    ),
    y: Math.floor(Math.random() * 100) + 10
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
      topListCity: [
        { title: "BACSKOKOOO", total: "34341223" },
        { title: "12121212", total: "34341223" },
        { title: "BasdasdOOO", total: "34341223" },
        { title: "dsadasdasd", total: "34341223" },
        { title: "dsdasdasas", total: "34341223" }
      ]
    };
  }
  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };
  render() {
    return (
      <div>
        <div className={style["first-charts"]}>
          <Row gutter={12}>
            <Col span={11}>
              <Row gutter={12} >
                <Col span={12}>
                  <div className={style["gutter-box"]}>
                    <Card
                      size="small"
                      extra={<span className={`${style["header-card"]} ${style.today}`}>总销售额</span>}
                      style={{ width: "100%",height:"100%",padding:'0 12px' }}
                    >
                      <div>
                        <p>￥3567259.29</p>
                      </div>
                      <div>
                        <em>周同比</em>
                        <Statistic
                          style={{position:"absolute",right:"40px",top:"13px"}}
                          value={11.8}
                          precision={1}
                          valueStyle={{ color: '#3f8600',fontSize:"18px" }}
                          prefix={<Icon type="arrow-up" />}
                          suffix="%"
                        />
                      </div>
                      <div style={{marginTop:"20px"}}>
                        <em>日同比</em>
                        <Statistic
                          style={{position:"absolute",right:"50px",top:"13px"}}
                          value={3.6}
                          precision={1}
                          valueStyle={{ color: '#cf1322',fontSize:"18px" }}
                          prefix={<Icon type="arrow-down" />}
                          suffix="%"
                        />
                      </div>
                    </Card>
                  </div>
                </Col>
                <Col span={12}>
                  <div className={style["gutter-box"]}>
                    <Card
                      size="small"
                      extra={<span className={`${style["header-card"]} ${style.fcc100}`}>备货数据</span>}
                      style={{ width: "100%",height:"100%",padding:'0 12px' }}
                    >
                      <div>
                        <p>88825</p>
                      </div>
                      <BeiHuo />
                    </Card>
                  </div>
                </Col>
              </Row>
              <Row gutter={12} style={{ marginTop:"16px",marginBottom: "16px" }}>
                <Col span={12}>
                  <div className={style["gutter-box"]}>
                    <Card
                      size="small"
                      extra={<span className={`${style["header-card"]} ${style.c5b7df}`}>库存统计</span>}
                      style={{ width: "100%",height:"100%",padding:'0 12px' }}
                    >
                      <div>
                        <p>3567259.29</p>
                      </div>
                      <KuCun />
                    </Card>
                  </div>
                </Col>
                <Col span={12}>
                  <div className={style["gutter-box"]}>
                    <Card
                      size="small"
                      extra={<span className={`${style["header-card"]} ${style.c5fc27e}`}>出库统计</span>}
                      style={{ width: "100%",height:"100%",padding:'0 12px' }}
                    >
                      <div>
                        <p>3567259.29</p>
                      </div>
                      <div className={style["progress"]}>
                        <Progress percent={80} size="small" strokeColor="#5fc27e" />
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={13}>
              <div className={style["rightChart"]}>111</div>
            </Col>
          </Row>
        </div>
        {/*<div>*/}
        {/*<Card*/}
        {/*style={{ width: "100%" }}*/}
        {/*tabList={tabListNoTitle}*/}
        {/*activeTabKey={this.state.noTitleKey}*/}
        {/*onTabChange={key => {*/}
        {/*this.onTabChange(key, "noTitleKey");*/}
        {/*}}*/}
        {/*>*/}
        {/*<Row gutter={24}>*/}
        {/*<Col span={16}>*/}
        {/*{contentListNoTitle[this.state.noTitleKey]}*/}
        {/*</Col>*/}
        {/*<Col span={8}>*/}
        {/*<div className={style['salesRank']}>*/}
        {/*<h4 className={style['rankingTitle']}>*/}
        {/*物料销售TOP10(元)*/}
        {/*</h4>*/}
        {/*<ul className={style['rankingList']}>*/}
        {/*{this.state.topListCity.map((item, i) => (*/}
        {/*<li key={item.title} style={{height: '28px'}}>*/}
        {/*<span className=*/}
        {/*{ i<3 ? style["rankingItemNumberActive"]:style['rankingItemNumber']}*/}
        {/*>*/}
        {/*{i + 1}*/}
        {/*</span>*/}
        {/*<span className={style['rankingItemTitle']} title={item.title}>*/}
        {/*{item.title}*/}
        {/*</span>*/}
        {/*<Divider type="vertical"/>*/}
        {/*<span className={style['rankingItemValue']}>*/}
        {/*{(item.total)}*/}
        {/*</span>*/}
        {/*</li>*/}
        {/*))}*/}
        {/*</ul>*/}
        {/*</div>*/}
        {/*</Col>*/}
        {/*</Row>*/}
        {/*</Card>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default ChartsPage;
