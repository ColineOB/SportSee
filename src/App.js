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
  },[])

  console.log(user1.data.userInfos.firstName);
  console.log(user2.data.userInfos.firstName);
  return (
    <div className="App">
      <Link to={"profil?id="+ user1.data.id}>{user1.data.userInfos.firstName}</Link>
    </div>
  );
}

export default App;
