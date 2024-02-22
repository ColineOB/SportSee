import {USER_ACTIVITY} from "../data";


async function UserActivity(id) {
    let activity = null;
    try {
        activity = USER_ACTIVITY.find(el => el.userId === id);
    
    } catch(error) {
        console.log('error');
    }
    return activity;
    
}

export default UserActivity;