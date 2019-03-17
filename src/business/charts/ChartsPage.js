import React, { Component } from "react";
import {
  Statistic,
  Icon,
  Card,
  Col,
  Row,
  Progress,
  Divider,
  Tooltip
} from "antd";
import TableChart from "./element/TableChart";
import ZheXian from "./element/ZheXian";
import BeiHuo from "./element/BeiHuo";
import style from "./charts.module.less";
import moment from "moment";
import KuCun from "./element/KuCun";
import SanDian from "./element/SanDian";
import Zhu from "./element/Zhu";
import ListRanking from "./element/ListRanking";
import Panel from "./element/Panel";
import Pie from "./element/Pie";
import Table from "antd/es/table/Table";
import ThirdLineTable from "./element/ThirdLineTable";

const beginDay = new Date().getTime();
const tabListNoTitle = [
  {
    key: "zhexian",
    tab: "按折线图展示"
  },
  {
    key: "zhu",
    tab: "按柱状图展示"
  },
  {
    key: "table",
    tab: "按表格展示"
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
  table: <TableChart />,
  zhexian: <ZheXian />,
  zhu: <Zhu />
};

class ChartsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noTitleKey: "zhexian"
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
              <Row gutter={12}>
                <Col span={12}>
                  <div className={style["gutter-box"]}>
                    <Card
                      size="small"
                      extra={
                        <span
                          className={`${style["header-card"]} ${style.today}`}
                        >
                          总销售额
                        </span>
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "0 12px"
                      }}
                    >
                      <div>
                        <p>￥3567259.29</p>
                      </div>
                      <div>
                        <em>周同比</em>
                        <Statistic
                          style={{
                            position: "absolute",
                            right: "40px",
                            top: "13px"
                          }}
                          value={11.8}
                          precision={1}
                          valueStyle={{
                            color: "#3f8600",
                            fontSize: "18px"
                          }}
                          prefix={<Icon type="arrow-up" />}
                          suffix="%"
                        />
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <em>日同比</em>
                        <Statistic
                          style={{
                            position: "absolute",
                            right: "50px",
                            top: "13px"
                          }}
                          value={3.6}
                          precision={1}
                          valueStyle={{
                            color: "#cf1322",
                            fontSize: "18px"
                          }}
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
                      extra={
                        <span
                          className={`${style["header-card"]} ${style.fcc100}`}
                        >
                          备货数据
                        </span>
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "0 12px"
                      }}
                    >
                      <div>
                        <p>88825</p>
                      </div>
                      <BeiHuo />
                    </Card>
                  </div>
                </Col>
              </Row>
              <Row
                gutter={12}
                style={{ marginTop: "16px", marginBottom: "16px" }}
              >
                <Col span={12}>
                  <div className={style["gutter-box"]}>
                    <Card
                      size="small"
                      extra={
                        <span
                          className={`${style["header-card"]} ${style.c5b7df}`}
                        >
                          库存统计
                        </span>
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "0 12px"
                      }}
                    >
                      <div>
                        <p>2689012</p>
                      </div>
                      <KuCun />
                    </Card>
                  </div>
                </Col>
                <Col span={12}>
                  <div className={style["gutter-box"]}>
                    <Card
                      size="small"
                      extra={
                        <span
                          className={`${style["header-card"]} ${style.c5fc27e}`}
                        >
                          出库统计
                        </span>
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "0 12px"
                      }}
                    >
                      <div>
                        <p>3567259.29</p>
                      </div>
                      <div className={style["progress"]}>
                        <Progress
                          percent={80}
                          size="small"
                          strokeColor="#5fc27e"
                        />
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={13}>
              <div className={style["rightChart"]}>
                <SanDian />
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginLeft: "10px", marginTop: "-12px" }}>
          <Row span={24} gutter={24}>
            <Col>
              <Card
                style={{ height: "390px" }}
                tabList={tabListNoTitle}
                activeTabKey={this.state.noTitleKey}
                onTabChange={key => {
                  this.onTabChange(key, "noTitleKey");
                }}
              >
                <Row>
                  <Col span={16}>
                    {contentListNoTitle[this.state.noTitleKey]}
                  </Col>
                  <Col span={8}>
                    <ListRanking />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ marginLeft: "10px", marginTop: "12px" }}>
          <Row gutter={24}>
            <Col span={8}>
              <div className={style["gutter-box2"]}>
                <Card title="Default" extra={<a href="#">More</a>}>
                  <ThirdLineTable />
                </Card>
              </div>
            </Col>
            <Col span={8}>
              <div className={style["gutter-box2"]}>111</div>
            </Col>
            <Col span={8}>
              <div style={{ background: "#fff", height: "400px" }}>1111</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ChartsPage;
