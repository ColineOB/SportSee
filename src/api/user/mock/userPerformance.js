import {USER_PERFORMANCE} from "./data";

async function UserPerformance(id) {
    let performance = null;
    try {
        // performance = USER_PERFORMANCE.find(el => el.userId === id);
        for (let i = 0; i < USER_PERFORMANCE.length; i++) {
            console.log("USER_PERFORMANCE[i].userId",typeof USER_PERFORMANCE[i].userId,typeof id);
            if (USER_PERFORMANCE[i].userId === Number(id)) {
                console.log(USER_PERFORMANCE[i]);
                performance = USER_PERFORMANCE[i];
                console.log(performance);
            }
        }
        console.log(performance);
    
    } catch(error) {
        console.log('error', error);
    }
    return performance;
    
}

export default UserPerformance;