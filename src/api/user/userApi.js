import { USER_API } from "../addressApi";

async function UserApi(id) {
    // const [user, setUser] = useState(null)

    //     fetch(USER_API + id, {
    //         method: 'GET',

    //     })
    //     .then((response)=> response.json())
    //     .then((data)=> {
    //         setUser(data)
    //     })
    //     .catch((error) => console.log(error));
    let user = null;
    try {
        const response = await fetch(USER_API + id, {
            method: 'GET'
        })
        user = await response.json();
    
    } catch(error) {
        console.log('error');
    }
    return user;
    
}

export default UserApi;