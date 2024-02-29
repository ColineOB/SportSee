import {USER_MAIN_DATA} from "./data";

async function UserProfil(id) {
    let user = null;
    try {
        console.log('mock', id);
        user = USER_MAIN_DATA.find(el => el.id === id);
        console.log(user);
    } catch(error) {
        console.log('error', error);
    }
    return user;
    
}

export default UserProfil;