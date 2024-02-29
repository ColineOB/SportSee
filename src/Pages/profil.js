import React, { useEffect, useState } from 'react';
import Average from '../components/average/averageSessions';
import Activity from '../components/activity/activity';
import Performance from '../components/performance/performance';
import Score from '../components/score/score';
import { useSearchParams } from 'react-router-dom';
import UserApi from '../api/user/userApi';


function Profil() {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState(null);
    const id = searchParams.get("id");

    useEffect(() => {
        const fetchData = async () => {
        try {
            const userData = await UserApi(id);
            setData(userData.data);
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
            <Activity id={id}></Activity>
            <Average id={id}></Average>
            <Performance id={id}></Performance>
            <Score id={id}></Score>
        </>
    )
}

export default Profil;