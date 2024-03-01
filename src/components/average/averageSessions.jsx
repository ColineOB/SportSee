import React, { PureComponent, useEffect, useState } from 'react';
import userApi from '../../api/userApi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './averageSessions.css'

function Average({id, mock}) {
    const [data, setData] = useState(null)
    
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
            <div className='custom-tooltip'>
                <p className='label'>{data.sessionLength} min</p>
            </div>
        )
    }
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

    const styles = {
        r: 5,
        border: '5px solid rgba(0, 0, 0, 1)',
    }

    return (
        <>
            <LineChart
                className='average'
                width={500}
                height={300}
                data={data}
            >
                <XAxis dataKey='day' tickFormatter={DataKey} tickLine={false} axisLine={false} />
                <Tooltip content={<TooltipContent />}/>
                <Line type="monotone" dataKey="sessionLength"  stroke="#fff" strokeWidth={3} dot={false} activeDot={{r:7, stroke:'white', strokeWidth:'15', strokeOpacity:'0.3'}} />
            </LineChart>
        </>
    )
}

export default Average