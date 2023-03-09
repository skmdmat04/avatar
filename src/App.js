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
axios.get('http://localhost:9000/avatar').then(data=>setAvatar(data.data))
  },[])
// console.log(avatar)

  return (
    <div className="App">
<Row>
{avatar.map(val=><Col xl={6} key={val._id}><Avatar avatar={val} deleteAvatar={deleteAvatar} updateAvatar={updateAvatar} /></Col>)}
</Row>
    </div>
  );
}

export default App;
