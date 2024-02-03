import React, { useEffect, useState } from 'react';
import UserApi from '../../api/user/userApi';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


function Score(params) {
    const [data, setData] = useState(null);
    const [todayScore, setTodayScore] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const userData = await UserApi(12);
            console.log(userData);
            setData(userData.data);
        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    },[])
    useEffect(() => {
        const score = new Object()
        const array = []
        console.log(todayScore);
        if (data) {
            score.name = "score"
            score.todayScore = data.todayScore*100
            score.fill = '#FF0000'
            array.push(score)
            setTodayScore(array);
            console.log(todayScore);
            
        }
    }, [data])

    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };

    
    const Calcul = (nb) => {
        console.log(nb);
        return (nb[0].todayScore*360/100+90)
    }

    return (
        <>
                <RadialBarChart  height={500} width={500}  innerRadius="50%" barSize={10} data={todayScore} startAngle={90} endAngle={Calcul(todayScore)}>
          <RadialBar
            minAngle={15}
            label={{ position: 'center', fill: '#FF0000'}}
            background
            clockWise={true}
            dataKey="todayScore"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
        </RadialBarChart>
        </>
    )
}

export default Score