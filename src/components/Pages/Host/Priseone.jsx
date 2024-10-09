import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Ju',
    uv: 1600,
    pv: 1200,
    amt: 1400,
  },
  {
    name: 'Au',
    uv: 200,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Se',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Oc',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'No',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'De',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

export default class Priseone extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/composed-chart-of-same-data-3cs8ym';

  render() {
    return (
      // Ensure the container has a defined height
      <div style={{ width: '100%', height: 400 }}> 
        <ResponsiveContainer>
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" barSize={40} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
