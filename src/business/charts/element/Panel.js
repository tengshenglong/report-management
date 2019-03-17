import React from 'react';
import { Chart, Tooltip, Geom, Guide } from 'bizcharts';

const { Text } = Guide;

const data = [{
  gender: 'male',
  path: 'M381.759 0h292l-.64 295.328-100.127-100.096-94.368 94.368C499.808 326.848 512 369.824 512 415.712c0 141.376-114.56 256-256 256-141.376 0-256-114.624-256-256s114.624-256 256-256c48.8 0 94.272 13.92 133.12 37.632l93.376-94.592L381.76 0zM128.032 415.744c0 70.688 57.312 128 128 128s128-57.312 128-128-57.312-128-128-128-128 57.312-128 128z',
  value: 80,
}];

const scale = {
  value: {
    min: 0,
    max: 100,
  },
};

class Panel extends React.Component {
  render() {
    return (
      <Chart height={280} data={data} scale={scale} forceFit>
        <Tooltip />
        <Geom
          type="interval"
          position="gender*value"
          color="gender"
          shape="liquid-fill-gauge"
          style={{
            lineWidth: 10,
            opacity: 0.75,
          }}
        />
        <Guide>
          {
            data.map(
              row => (<Text
                content={`${row.value}%`}
                top
                position={{
                  gender: row.gender,
                  value: 50,
                }}
                style={{
                  opacity: 0.75,
                  fontSize: 30,
                  textAlign: 'center',
                }}
              />))
          }
        </Guide>
      </Chart>
    );
  }
}

// CDN END
export default Panel;
