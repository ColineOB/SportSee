import { USER_API, PERFORMANCE } from "../addressApi";

async function UserPerformance(id) {
    let performance = null;
    try {
        const response = await fetch(USER_API + id + PERFORMANCE, {
            method: 'GET'
        })
        console.log(response);
        performance = (await response.json()).data;
    
    } catch(error) {
        console.log('error');
    }
    // console.log(performance);
    return performance;
    
}

export default UserPerformance;