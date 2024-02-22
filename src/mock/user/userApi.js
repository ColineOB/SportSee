import {USER_MAIN_DATA} from "../data";

async function UserApi(id) {
    let user = null;
    try {
        user = USER_MAIN_DATA.find(el => el.id === id);
    
    } catch(error) {
        console.log('error');
    }
    return user;
    
}

export default UserApi;