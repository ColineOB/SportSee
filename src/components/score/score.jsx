import React, { useEffect, useState } from 'react';
import UserApi from '../../api/user/userProfil';
import userApi from '../../api/userApi'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, LabelList,Tooltip } from 'recharts';
import './score.css'


function Score({id,mock}) {
    const [data, setData] = useState(null);
    const [todayScore, setTodayScore] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const userData = await userApi(mock).profil(id);
            console.log(userData);
            setData(userData);
        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    },[])
    useEffect(() => {

        const score = new Object()
        const array = []
        if (data) {
            score.name = "score"
            if(data.todayScore){
                score.todayScore = data.todayScore*100
            } else {
                score.todayScore = data.score*100
            }
            score.fill = '#FF0000'
            array.push(score)
            setTodayScore(array);
        }
    }, [data])

    
    const Calcul = (nb) => {
    if (nb && nb[0] && nb[0].todayScore) {
        return (nb[0].todayScore*360/100+90)
    } else {
        return 0;
    }
    }

    const label = (data) => {
        return data + ` %`
    } 

    return (
        <section className='score'>
        <p> de votre objectif</p>
            <RadialBarChart className='score_chart' height={250} width={250}  innerRadius="50%" barSize={12} data={todayScore} startAngle={90} endAngle={Calcul(todayScore)}>
            <RadialBar
                minAngle={15}
                // label={{ position: 'center', fill: '#282D30', formatter:{label}}
                clockWise={true}
                dataKey="todayScore"
                cornerRadius={40}
            >
                <LabelList position='center' formatter={label} style={{fontSize:'26', fill:'#282D30', height:'26', fontWeight:'700'}} />
            </RadialBar>
            
            </RadialBarChart>
        </section>
    )
}

export default Score