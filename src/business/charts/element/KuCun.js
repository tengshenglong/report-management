import React from "react";
import {
  Chart,
  Geom,
  Tooltip
} from "bizcharts";

class KuCun extends React.Component {
  render() {
    const data = [
      {
        year: "2019.3.10",
        value: 3300
      },
      {
        year: "2019.3.11",
        value: 10320
      },
      {
        year: "2019.3.12",
        value: 15900
      },
      {
        year: "2019.3.13",
        value: 8900
      },
      {
        year: "2019.3.14",
        value: 17000
      },
      {
        year: "2019.3.15",
        value: 4056
      },
      {
        year: "2019.3.16",
        value: 13198
      },
      {
        year: "2019.3.17",
        value: 2040
      },
      {
        year: "2019.3.18",
        value: 33200
      }
    ];
    const cols = {
      value: {
        min: 0
      },
      year: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Chart height={70} data={data} scale={cols} forceFit style={{marginLeft:"-85px",marginTop:"30px"}}>
          <Tooltip
            crosshairs={{
              type: "line"
            }}
          />
          <Geom type="area" position="year*value" color="purple"/>
        </Chart>
      </div>
    );
  }
}

export default KuCun;
