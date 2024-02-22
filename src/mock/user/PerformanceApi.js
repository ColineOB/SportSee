import {USER_PERFORMANCE} from "../data";

async function UserPerformance(id) {
    let performance = null;
    try {
        performance = USER_PERFORMANCE.find(el => el.userId === id);
    
    } catch(error) {
        console.log('error');
    }
    return performance;
    
}

export default UserPerformance;