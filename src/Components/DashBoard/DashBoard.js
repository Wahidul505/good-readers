import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('info.json')
            .then(res => res.json())
            .then(data => setInfo(data));
    }, [])
    return (
        <div className='md:grid grid-cols-2 p-8'>

            <div>
                <h1 className='text-center text-xl text-cyan-600 my-4'>Investment VS Revenue</h1>
            <BarChart
                width={500}
                height={500}
                data={info}
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
                data={info}
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
                <Pie data={info} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={info} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip />
            </PieChart>
            </div>

            <div>
            <h1 className='text-center text-xl text-cyan-600 mt-8'>Month Wise Sell</h1>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={info} width={500} height={500}>
                <PolarGrid />
                <Tooltip />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="month" dataKey="sell" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
            </div>
        </div>
    );
};

export default DashBoard;