import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Legend,
  Guide
} from "bizcharts";
import DataSet from "@antv/data-set";

class Pie extends React.Component {
  render() {
    const { DataView } = DataSet;
    const { Html } = Guide;
    const data = [
      {
        item: "1线城市",
        count: 40
      },
      {
        item: "2线城市",
        count: 21
      },
      {
        item: "3线城市",
        count: 17
      },
      {
        item: "4线城市",
        count: 13
      },
      {
        item: "5线城市",
        count: 9
      },
      {
        item: "6线城市",
        count: 9
      }
    ];
    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    };
    return (
      <div>
        <Chart
          height={400}
          data={dv}
          scale={cols}
         // padding={[80, 100, 80, 80]}
          forceFit
          style={{marginLeft:"-50px"}}
        >
          <Coord type={"theta"} radius={0.75} innerRadius={0.6} />
          <Axis name="percent" />
          <Legend
            position="bottom"
            // offsetY={-window.innerHeight / 2 + 120}
             offsetX={40}
            itemGap={60}
          />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Guide>
            <Html
              position={["50%", "50%"]}
              html="<div style=&quot;color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;&quot;>销售额<br><span style=&quot;color:#262626;font-size:1.5em&quot;>￥23049</span></div>"
              alignX="middle"
              alignY="middle"
            />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
          </Geom>
        </Chart>
      </div>
    );
  }
}

export default Pie;
