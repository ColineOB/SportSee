import { USER_API } from "../addressApi";

async function UserProfil(id) {
    let user = null;
    try {
        const response = await fetch(USER_API + id, {
            method: 'GET'
        })
        user = (await response.json()).data;
    
    } catch(error) {
        console.log('error');
    }
    return user;
    
}

export default UserProfil;