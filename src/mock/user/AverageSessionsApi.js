import {USER_AVERAGE_SESSIONS} from "../data";

async function UserAverageSessions(id) {
    let averageSessions = null;
    try {
        averageSessions = USER_AVERAGE_SESSIONS.find(el => el.userId === id);
    
    } catch(error) {
        console.log('error');
    }
    return averageSessions;
    
}

export default UserAverageSessions;