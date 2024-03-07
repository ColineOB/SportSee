import React, { useEffect, useState } from 'react';
import Average from '../components/average/averageSessions';
import Activity from '../components/activity/activity';
import Performance from '../components/performance/performance';
import Score from '../components/score/score';
import { useSearchParams } from 'react-router-dom';
import useUserApi from '../api/useUserApi';
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
        return null
    }

    return (
        <>
        <h1>Bonjour <span>{data.userInfos.firstName}</span></h1>
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
{/*             
            <div className='profil-column'>
                <Average id={id}></Average>
                <Performance id={id}></Performance>
                <Score id={id}></Score>
            </div> */}
        </div>

        </>
    )
}

export default Profil;