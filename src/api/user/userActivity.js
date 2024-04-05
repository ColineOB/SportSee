import { useSearchParams } from "react-router-dom";
import { USER_API, ACTIVITY } from "../addressApi";


async function UserActivity(id) {
    let activity = null;
    try {
        const response = await fetch(USER_API + id + ACTIVITY, {
            method: 'GET'
        })
        activity = (await response.json()).data;
    
    } catch(error) {
        console.log('error', error);
    }
    return activity;
    
}

export default UserActivity;