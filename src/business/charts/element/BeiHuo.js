import React from "react";
import {
  Chart,
  Geom,
  Tooltip
} from "bizcharts";

class BeiHuo extends React.Component {
  render() {
    const data = [
      {
        year: "2019年1月",
        sales: 38
      },
      {
        year: "2019年2月",
        sales: 52
      },
      {
        year: "2019年3月",
        sales: 100
      },
      {
        year: "2019年4月",
        sales: 250
      },
      {
        year: "2019年5月",
        sales: 48
      },
      {
        year: "2019年6月",
        sales: 88
      },
      {
        year: "2019年7月",
        sales: 318
      },
      {
        year: "2019年8月",
        sales: 98
      },
      {
        year: "2019年9月",
        sales: 338
      },
      {
        year: "2019年10月",
        sales: 38
      },
      {
        year: "2019年11月",
        sales: 68
      },
      {
        year: "2019年12月",
        sales: 38
      }
    ];
    const cols = {
      sales: {
        tickInterval: 20
      }
    };
    return (
      <div>
        <Chart height={70} data={data} scale={cols} forceFit style={{marginLeft:"-85px",marginTop:"30px"}}>
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="interval" position="year*sales" />
        </Chart>
      </div>
    );
  }
}

export default BeiHuo;
