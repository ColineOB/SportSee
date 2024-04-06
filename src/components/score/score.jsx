import React, { useEffect, useState } from 'react';
import useUserApi from '../../api/useUserApi';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LabelList} from 'recharts';
import './score.css'


function Score({id,mock}) {
    const [data, setData] = useState(null);
    const round = [{todayScore: 1}];
    const [todayScore, setTodayScore] = useState([]);
    const userApi = useUserApi();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const userData = await userApi.profil(id);
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
        <h2>Score</h2>
        <p>de votre objectif</p>
            <ResponsiveContainer width='100%' height={320}>
            <PieChart width={250} height={250} className='score_chart' >
                    <Pie data={round} dataKey="todayScore" cx="50%" cy="50%" outerRadius={70} fill="#FFF" />
                    <Pie data={todayScore} dataKey="todayScore" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#FF0000"  startAngle={90} endAngle={Calcul(todayScore)} cornerRadius={40}>
                        <LabelList position='centerBottom'  formatter={label} style={{fontSize:'28', fill:'#282D30', height:'26', fontWeight:'300', stroke:'#282D30'}} />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </section>
    )
}

export default Score