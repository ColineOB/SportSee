import {USER_ACTIVITY} from "./data";


async function UserActivity(id) {
    let activity = null;
    try {
        for (let i = 0; i < USER_ACTIVITY.length; i++) {
            if (USER_ACTIVITY[i].userId === Number(id)) {
                activity = USER_ACTIVITY[i];
            }
        }
    
    } catch(error) {
        console.log('error');
    }
    return activity;
    
}

export default UserActivity;