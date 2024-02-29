import { USER_API, PERFORMANCE } from "../addressApi";

async function UserPerformance(id) {
    let performance = null;
    try {
        const response = await fetch(USER_API + id + PERFORMANCE, {
            method: 'GET'
        })
        console.log("UserPerformance", (await response.json()).data);
        performance = (await response.json()).data;
        console.log("perform", performance);
    
    } catch(error) {
        console.log('error', error);
    }
    // console.log(performance);
    return performance;
    
}

export default UserPerformance;