import React, { PureComponent, useEffect, useState } from 'react';
import userApi from '../../api/userApi'
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceArea, ResponsiveContainer, Text, Legend } from 'recharts';
import './averageSessions.css'

function Average({id, mock}) {
    const [data, setData] = useState(null)
    const [perc, setPerc] = useState(0);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await userApi(mock).averageSessions(id)
        setData(userData.sessions)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    },[])



    const TooltipContent = (props) => {
        if (!props.active || !props.payload) {
            return 
        }
        const data = props.payload[0].payload
        return (
            <div className='custom-tooltip-average'>
                <p className='label'>{data.sessionLength} min</p>
            </div>
        )
    }
    const onMouseMove = hoveredData => {
      if (hoveredData && hoveredData.activePayload) {
        setPerc(hoveredData.activeLabel);
      }
    };
    
    const onMouseOut = () => {
    setPerc(7);
    };

    const DataKey = (date) => {
        switch(date){
            case 1:return 'L';
            case 2: return 'M';
            case 3: return 'M';
            case 4: return 'J';
            case 5: return 'V';
            case 6: return 'S';
            default: return 'D';
        }
    }

    return (
        <section className='average'>
            <h2>Durée moyenne des sessions</h2>
            <LineChart
                className='average_chart'
                width={500}
                height={500}
                data={data}
                margin={{ top: 20, left: 20, right: 20, bottom: 20 }}
                onMouseMove={onMouseMove}
                onMouseOut={onMouseOut}
                style={{ backgroundColor: '#E60000' }}
            >
                <XAxis dataKey='day' tickFormatter={DataKey} tickLine={false} axisLine={false} />
                <Tooltip content={<TooltipContent />}/>
                <defs>
                    <linearGradient id='splitColor' x1='0' y1='0' x2='1' y2='0'>
                    <stop offset='1%' stopColor='white' stopOpacity={0.2} />
                    <stop offset='99%' stopColor='white' stopOpacity={1} />
                    </linearGradient>
                </defs>
                <ReferenceArea x1={perc} x2={7} y1={-10} y2={700} ifOverflow='visible' fill="#000000" fillOpacity={0.2} />
                <Line type="basic" dataKey="sessionLength"  stroke="url(#splitColor)" strokeWidth={3} dot={false} activeDot={{r:7, stroke:'white', strokeWidth:'15', strokeOpacity:'0.3'}} />
            </LineChart>
        </section>
    )
}

export default Average