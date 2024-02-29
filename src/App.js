import './App.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import userApi from './api/userApi'
function App() {
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await userApi(true).profil(12);
        setUser1(userData);
        const userData2 = await userApi(true).profil(18);
        setUser2(userData2);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[])


  return (
    <div className="App">
      <h1>API</h1>
      {user1 && user1.userInfos ? (
        <Link to={"/profil?id=" + user1.id + "&mock=" + false}>
          <p>{user1.userInfos.firstName}</p>
        </Link>
      ):('')
      }
      {user2 && user2.userInfos ? (
        <Link to={"/profil?id=" + user2.id + "&mock=" + false}>
          <p>{user2.userInfos.firstName}</p>
        </Link>
      ):('')
      }
      <h1>MOCK</h1>
      {user1 && user1.userInfos ? (
        <Link to={"/profil?id=" + user1.id + "&mock=" + true}>
          <p>{user1.userInfos.firstName}</p>
        </Link>
      ):('')
      }
      {user2 && user2.userInfos ? (
        <Link to={"/profil?id=" + user2.id + "&mock=" + true}>
          <p>{user2.userInfos.firstName}</p>
        </Link>
      ):('')
      }
    </div>
  );
}

export default App;
