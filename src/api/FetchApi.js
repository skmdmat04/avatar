import axios from 'axios';
const baseUrl='https://cloud-api-42e4.onrender.com';
// get Task
export const fetchTask=async()=>{
    const tasks= await axios.get(`${baseUrl}/tasks`)
    return tasks.data
}
// createTask
export const createTask=async(task)=>{
  return  await axios.post(`${baseUrl}/task`,task)
}
// delete task
export const deleted=async(id)=>{
return await axios.delete(`${baseUrl}/delete/${id}`)
}
// edit task
export const editTask=async(id,task)=>{
 return await axios.patch(`${baseUrl}/edit/${id}`,task)
}