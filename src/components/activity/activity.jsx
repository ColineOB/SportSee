import React, { useEffect, useState } from 'react';
import userApi from '../../api/userApi'
// import UserActivity from '../../mock/user/ActivityApi';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Activity({id, mock}) {
    const [data, setData] = useState(null);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await userApi().activity(id, mock)
        setData(userData.sessions)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    },[])

    return (
        <>
            <BarChart
            width={1000}
            height={300}
            data={data}
            >
                <XAxis tickLine={false} axisLine={false} />
                <YAxis orientation='right' tickLine={false} axisLine={false} />
                <Tooltip />
                <Legend iconType='circle' iconSize={10} verticalAlign='top' align='right' wrapperStyle={{paddingBottom: 20}} />
                <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[20, 20, 0, 0]} />
                <Bar dataKey="calories" fill="#FF0000" barSize={10} radius={[20, 20, 0, 0]} />
            </BarChart>
        </>
    )
}

export default Activity