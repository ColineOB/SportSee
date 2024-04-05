import {USER_PERFORMANCE} from "./data";

async function UserPerformance(id) {
    let performance = null;
    try {
        // performance = USER_PERFORMANCE.find(el => el.userId === id);
        for (let i = 0; i < USER_PERFORMANCE.length; i++) {
            if (USER_PERFORMANCE[i].userId === Number(id)) {
                performance = USER_PERFORMANCE[i];
            }
        }
    
    } catch(error) {
        console.log('error', error);
    }
    return performance;
    
}

export default UserPerformance;