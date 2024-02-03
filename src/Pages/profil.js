import Average from '../components/average/averageSessions';
import Activity from '../components/activity/activity';
import Performance from '../components/performance/performance';
import Score from '../components/score/score';
import { useSearchParams } from 'react-router-dom';


function Profil() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");


    return (
        <>
            <Activity id={id}></Activity>
            <Average id={id}></Average>
            <Performance id={id}></Performance>
            <Score id={id}></Score>
        </>
    )
}

export default Profil;