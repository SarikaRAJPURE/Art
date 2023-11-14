import "./chart.css"
import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, YAxis } from 'recharts';


const Chart = ({ title, data, datakey, grid }) => {
    console.log(grid);
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={datakey} stroke="#5550bd" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
