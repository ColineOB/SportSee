import { USER_API, AVERAGE } from "../addressApi";

async function UserAverageSessions(id) {
    let averageSessions = null;
    try {
        const response = await fetch(USER_API + id + AVERAGE, {
            method: 'GET'
        })
        averageSessions = (await response.json()).data;
    
    } catch(error) {
        console.log('error');
    }
    return averageSessions;
    
}

export default UserAverageSessions;