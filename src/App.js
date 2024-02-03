import './App.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import UserApi from './api/user/userApi';
function App() {
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await UserApi(12);
        setUser1(userData);
        const userData2 = await UserApi(18);
        setUser2(userData2);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    console.log('user1UseEffect', user1);
    console.log('user2UseEffect',user2);
  },[])


  return (
    <div className="App">
      {user1 && user1.data && user1.data.userInfos ? (
        <Link to={"/profil?id=" + user1.data.id}>
          <p>{user1.data.userInfos.firstName}</p>
        </Link>
      ):('')
      }
      {user2 && user2.data && user2.data.userInfos ? (
        <Link to={"/profil?id=" + user2.data.id}>
          <p>{user2.data.userInfos.firstName}</p>
        </Link>
      ):('')
      }
    </div>
  );
}

export default App;
