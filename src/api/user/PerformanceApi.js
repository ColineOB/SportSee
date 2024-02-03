import { USER_API, PERFORMANCE } from "../addressApi";

async function UserPerformance(id) {
    let performance = null;
    try {
        const response = await fetch(USER_API + id + PERFORMANCE, {
            method: 'GET'
        })
        performance = await response.json();
    
    } catch(error) {
        console.log('error');
    }
    // console.log(performance);
    return performance;
    
}

export default UserPerformance;