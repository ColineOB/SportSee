import React, { useEffect, useState } from 'react';
import Average from '../components/average/averageSessions';
import Activity from '../components/activity/activity';
import Performance from '../components/performance/performance';
import Score from '../components/score/score';
import { useSearchParams } from 'react-router-dom';
import userApi from '../api/userApi';


function Profil() {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState(null);
    const id = Number(searchParams.get("id"));
    const mock = (searchParams.get("mock") === "true");

    useEffect(() => {
        const fetchData = async () => {
        try {
            const userData = await userApi(mock).profil(id);
            setData(userData);
        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    },[id, mock])

    if (!data) {
        return null
    }

    return (
        <>
        <h1>Bonjour <span>{data.userInfos.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <Activity id={id} mock={mock}></Activity>
            <Average id={id} mock={mock}></Average>
            <Performance id={id} mock={mock}></Performance>
            <Score id={id} mock={mock}></Score>
        </>
    )
}

export default Profil;