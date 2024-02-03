import Average from './components/average/averageSessions';
import Activity from './components/activity/activity';
import Performance from './components/performance/performance';
import Score from './components/score/score';


function Profil() {
    return (
        <>
            <Activity></Activity>
            <Average></Average>
            <Performance></Performance>
            <Score></Score>
        </>
    )
}

export default Profil;