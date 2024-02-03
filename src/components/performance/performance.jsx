import React, { PureComponent, useEffect, useState } from 'react';
import UserPerformance from '../../api/user/PerformanceApi';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


function Performance(params) {
    const [data, setData] = useState(null)
    const [kind, setKind] = useState(null)
    const id = 12;
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await UserPerformance(id);
        setData(userData.data.data);
        setKind(userData.data.kind);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    },[])
    
    const DataKey = (id) => {
        return kind[id]
    }


    return (
        <>
                <RadarChart height={500} width={500}  outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" tickFormatter={DataKey} />
                    <PolarRadiusAxis />
                    <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
                </RadarChart>
        </>
    )
}

export default Performance;