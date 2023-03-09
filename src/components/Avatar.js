import React, { useState } from 'react'
import {Card,Modal} from 'antd';
import { HeartOutlined,DeleteOutlined,EditOutlined,MailOutlined,PhoneOutlined,GlobalOutlined } from '@ant-design/icons';
import EditDetails from './EditDetails';
import './avatar.css'
const Avatar = ({avatar,deleteAvatar,updateAvatar}) => {
  const [show,setShow]=useState(false)
  const [user,setUser]=useState(avatar);
  const [like,setLike]=useState(false)
  const edit=()=>{
    setShow(true)
    console.log(avatar)
  }
  const updateDetails=(val)=>{
   setUser({...user,[val[0].name[0]]:val[0].value})
  }
  const updateUser=()=>{
    updateAvatar(avatar._id,user)
    setShow(false)
  }
  return (
    <div>
      <Card style={{margin:17}} cover={
        <div className='avatarImage'>
            <img src={avatar.image} alt='avatar'/>
        </div>
      }
     actions={[
        <button onClick={()=>like?setLike(false):setLike(true)} ><HeartOutlined className={like?'like':null} style={{color:'hotpink',fontSize:'21px',}}/></button>,
        <button><EditOutlined style={{color:'gray',fontSize:'21px'}} onClick={edit}/></button>,
        <button><DeleteOutlined onClick={()=>deleteAvatar(avatar._id)} style={{color:'gray',fontSize:'21px'}}/></button>
     ]} >
        <h3>{avatar.name}</h3>
        <div className='detail'>
         <MailOutlined/>
         <p>{avatar.email}</p>
        </div>
        <div className='detail'>
         <PhoneOutlined/>
         <p>{avatar.phone}</p>
        </div>
        <div className='detail'>
         <GlobalOutlined/>
         <p>{avatar.website}</p>
        </div>
      </Card>
      <Modal title="Edit Avatar" open={show}  onOk={updateUser} onCancel={()=>setShow(false)}>
        <EditDetails update={updateDetails} user={avatar}/>
      </Modal>
    </div>
  )
}

export default Avatar
