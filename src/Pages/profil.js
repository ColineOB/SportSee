import React, { useEffect, useState } from 'react';
import Average from '../components/average/averageSessions';
import Activity from '../components/activity/activity';
import Performance from '../components/performance/performance';
import Score from '../components/score/score';
import { useSearchParams } from 'react-router-dom';
import useUserApi from '../api/useUserApi';
import Macro from '../components/macroCount/macroCount';
import { Calories, Proteines, Glucides, Lipides } from '../icons';
import '../App.css'

function Profil() {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState(null);
    const id = Number(searchParams.get("id"));
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
    },[id])

    if (!data) {
        return (
            <>
            <h1>Error</h1>
            <p>Aucune données disponibles pour le moment</p>
            </>
        )
    }

    return (
        <>
        <h1>Bonjour <span style={{color:'#E60000'}}>{data.userInfos.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        <div className='profil'>
            <div className='profil-row'>
                <Activity id={id}></Activity>
                <div className='profil-row_int'>
                    <Average id={id}></Average>
                    <Performance id={id}></Performance>
                    <Score id={id}></Score>
                </div>
            </div>
            <div className='profil-column'>
                <Macro name='Calories' data={(data.keyData.calorieCount).toLocaleString('en')} image={Calories} unit={'kCal'}></Macro>
                <Macro name='Proteines' data={data.keyData.proteinCount} image={Proteines} unit={'g'}></Macro>
                <Macro name='Glucides' data={data.keyData.carbohydrateCount} image={Glucides} unit={'g'}></Macro>
                <Macro name='Lipides' data={data.keyData.lipidCount} image={Lipides} unit={'g'}></Macro>
            </div>
        </div>
        </>
    )
}

export default Profil;