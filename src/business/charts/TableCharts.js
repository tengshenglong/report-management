import React, { Component } from "react";

import { TimelineChart } from 'ant-design-pro/lib/Charts';

const chartData = [];
for (let i = 0; i < 20; i += 1) {
  chartData.push({
    x: (new Date().getTime()) + (1000 * 60 * 30 * i),
    y1: Math.floor(Math.random() * 100) + 1000,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

class TableCharts extends Component {
  render() {
    return (
        <TimelineChart
          height={200}
          data={chartData}
          titleMap={{ y1: '售出总数量', y2: '支付笔数' }}
        />
      )
  }
}

export default TableCharts;
