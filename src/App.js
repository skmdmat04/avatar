import './App.css';
import Avatar from './components/Avatar';
import { useEffect, useState } from 'react';
import {Row,Col} from 'antd'
import axios from 'axios';
function App() {
  const [avatar,setAvatar]=useState([]);
  const deleteAvatar=id=>{
    setAvatar((prevAvatar)=>prevAvatar.filter(data=>data._id!==id));
  }
  const updateAvatar=(id,newAvatar)=>{
    setAvatar(prevAvatar=>prevAvatar.map(val=>val._id===id?newAvatar:val))
  }
  useEffect(()=>{
axios.get('https://avatar-api.onrender.com/avatar').then(data=>setAvatar(data.data))
  },[])
// console.log(avatar)

  return (
    <div className="App">
<Row>
{avatar.map(val=><Col xl={6} lg={8} md={12} sm={24} xs={24} key={val._id}><Avatar avatar={val} deleteAvatar={deleteAvatar} updateAvatar={updateAvatar} /></Col>)}
</Row>
    </div>
  );
}

export default App;
