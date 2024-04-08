import React, { PureComponent, useEffect, useState } from 'react';
import useUserApi from '../../api/useUserApi';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Label } from 'recharts';
import './performance.css'

function Performance({id, mock}) {
    const [data, setData] = useState(null)
    const [kind, setKind] = useState(null)
    const userApi = useUserApi();
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await userApi.performance(id);
        setData(userData.data);
        setKind(userData.kind);
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
        <ResponsiveContainer width='30%' height={320}>
                <RadarChart className='performance' height={250} width={250} margin={{ top: 0, right: 60, bottom: 0, left: 60} } outerRadius="80%" data={data} >
                    <PolarGrid  style={{stroke:'white'}} radialLines={false}/>
                    <PolarAngleAxis dataKey="kind" tickFormatter={DataKey} tick={{fill:'white'}}/>
                    <PolarRadiusAxis axisLine={false} tick={false} tickCount={6} />
                    <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
                </RadarChart>
        </ResponsiveContainer>
    )
}

export default Performance;