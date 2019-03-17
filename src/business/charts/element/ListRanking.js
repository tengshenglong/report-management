import React, { Component } from "react";
import style from "../charts.module.less";
import { Divider } from "antd";

class ListRanking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topListCity: [
        { title: "BACSKOKOOO", total: "34341223" },
        { title: "12121212", total: "34341223" },
        { title: "BasdasdOOO", total: "34341223" },
        { title: "dsadasdasd", total: "34341223" },
        { title: "dsdasdasas", total: "34341223" }
      ]
    };
  }
  renderSpan = i => {
    if (i === 0) {
      return <span className={style["rankingItemNumberFirst"]}>{i + 1}</span>;
    } else if (i === 1) {
      return <span className={style["rankingItemNumberSecond"]}>{i + 1}</span>;
    } else if (i === 2) {
      return <span className={style["rankingItemNumberThird"]}>{i + 1}</span>;
    } else {
      return <span className={style["rankingItemNumber"]}>{i + 1}</span>;
    }
  };
  render() {
    return (
      <div className={style["salesRank"]}>
        <h4 className={style["rankingTitle"]}>物料销售TOP10(元)</h4>
        <ul className={style["rankingList"]}>
          {this.state.topListCity.map((item, i) => (
            <li key={item.title} style={{ height: "26px" }}>
              {this.renderSpan(i)}
              <span className={style["rankingItemTitle"]} title={item.title}>
                {item.title}
              </span>
              <Divider type="vertical" />
              <span className={style["rankingItemValue"]}>{item.total}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListRanking;
