import {USER_ACTIVITY} from "./data";


async function UserActivity(id) {
    let activity = null;
    try {
        // activity = USER_ACTIVITY.find(el => el.userId === id);
        for (let i = 0; i < USER_ACTIVITY.length; i++) {
            if (USER_ACTIVITY[i].userId === Number(id)) {
                console.log(USER_ACTIVITY[i]);
                activity = USER_ACTIVITY[i];
                console.log(activity);
            }
        }
    
    } catch(error) {
        console.log('error');
    }
    return activity;
    
}

export default UserActivity;