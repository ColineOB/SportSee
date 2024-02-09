import React, { PureComponent, useEffect, useState } from 'react';
import UserPerformance from '../../api/user/PerformanceApi';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Label } from 'recharts';
import './performance.css'

function Performance({id}) {
    const [data, setData] = useState(null)
    const [kind, setKind] = useState(null)
    
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
                <RadarChart className='performance' height={500} width={500}  outerRadius="80%" data={data}>
                    <PolarGrid  style={{stroke:'white'}} radialLines={false}/>
                    <PolarAngleAxis dataKey="kind" tickFormatter={DataKey} tick={{fill:'white'}}/>
                    <PolarRadiusAxis axisLine={false} tick={false} tickCount={6} />
                    <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
                </RadarChart>
        </>
    )
}

export default Performance;