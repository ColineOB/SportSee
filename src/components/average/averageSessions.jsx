import React, { PureComponent, useEffect, useState } from 'react';
import userApi from '../../api/userApi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
            <div>
                <p>{data.sessionLength} min</p>
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

    return (
        <>
            <LineChart
                width={500}
                height={300}
                data={data}
            >
                <XAxis dataKey='day' tickFormatter={DataKey} tickLine={false} axisLine={false} />
                <Tooltip content={<TooltipContent />}/>
                <Line type="monotone" dataKey="sessionLength"  stroke="#8884d8" strokeWidth={2}  dot={false}   activeDot={{ r: 8 }} />
            </LineChart>
        </>
    )
}

export default Average