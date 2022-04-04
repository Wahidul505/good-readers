import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(json => setData(json));
    }, [])
    return (
        <div className='md:grid grid-cols-2 p-8'>

            <div>
                <h1 className='text-center text-xl text-cyan-600 my-4'>Investment VS Revenue</h1>
            <BarChart
                width={500}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
            </div>

            <div>
            <h1 className='text-center text-xl text-cyan-600 my-4'>Investment VS Revenue VS Sell</h1>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="month" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="investment" stroke="#ff7300" />
            </ComposedChart>
            </div>

            <div>
            <h1 className='text-center text-xl text-cyan-600 mt-8'>Investment VS Revenue</h1>
            <PieChart width={500} height={500}>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip />
            </PieChart>
            </div>

            <div>
            <h1 className='text-center text-xl text-cyan-600 mt-8'>Month Wise Sell</h1>
            <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
            </div>
        </div>
    );
};

export default DashBoard;