import React, { useState } from 'react'
import {Form,Input} from 'antd'
const EditDetails = ({user,update}) => {
  console.log(user)
  
  return (
    <Form labelCol={{span:8}} wrapperCol={{span:16}} onFieldsChange={update} initialValue={user} >
     <Form.Item  label="Name" name='name' initialValue={user.name} rules={[{required:true,message:"Name is required"}]}><Input/></Form.Item>
     <Form.Item  label="Email" name='email' initialValue={user.email} rules={[{required:true,message:"Email is required"}]}><Input/></Form.Item>
     <Form.Item  label="Phone" name='phone' initialValue={user.phone} rules={[{required:true,message:"Phone is required"}]}><Input/></Form.Item>
     <Form.Item  label="Website" name='webstie' initialValue={user.website} rules={[{required:true,message:"Website is required"}]}><Input/></Form.Item>
    </Form>
  )
}

export default EditDetails
