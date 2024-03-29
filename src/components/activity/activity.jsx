import React, { useEffect, useState } from 'react';
import userApi from '../../api/userApi'
// import UserActivity from '../../mock/user/ActivityApi';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './activity.css'


function Activity({id, mock}) {
    const [data, setData] = useState(null);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await userApi(mock).activity(id)
        setData(userData.sessions)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    },[id, mock])

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{payload[0].value}kg</p>
            <p className="label">{payload[1].value}Kcal</p>
          </div>
        )
      }
    }

    const renderColorfulLegendText = (value) => {
      return <span style={{color:'#282D30'}}>{value}</span>;
    };

    return (
      <section className='activity'>
        <ResponsiveContainer width='100%' height={320}>
            <BarChart
            width={1000}
            height={300}
            data={data}
            barGap={12}
            style={{ backgroundColor: '#FBFBFB', borderRadius:'10px' }}
            >
            <CartesianGrid strokeDasharray="2" vertical={false} />
                <XAxis tickLine={false} axisLine={false} />
                <YAxis orientation='right' tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} contentStyle={{ backgroundColor:"#FF0000", color:"#fff" }} />
                <Legend iconType='circle' iconSize={10} verticalAlign='top' align='right' wrapperStyle={{paddingBottom: 20}} formatter={renderColorfulLegendText}/>
                <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[20, 20, 0, 0]} name='Poids (kg)' />
                <Bar dataKey="calories" fill="#FF0000" barSize={10} radius={[20, 20, 0, 0]} name='Calories brûlées (kCal)' />
            </BarChart>
        </ResponsiveContainer>
      </section>
    )
}

export default Activity