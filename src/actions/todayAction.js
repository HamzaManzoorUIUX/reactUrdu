import {GET_TODAY,DELETE_TODAY,ADD_TODAY,UPDATE_TODAY} from './type'
import axios from 'axios';

export const getToday=()=>async dispatch=>{
const res=await axios.get('http://localhost:4000/api/today/getData')
    dispatch({
        type:GET_TODAY,
        payload:res.data.data
})}

export const deleteToday=(id)=>async dispatch=>{
    await axios.delete(`http://localhost:4000/api/today/delData/${id}`);
    dispatch({
        type:DELETE_TODAY,
        payload:id
    })
}
export const addToday=(today)=>async dispatch=>{
    await axios.post(`http://localhost:4000/api/today/addData?name=${today.name}&auther=${today.auther}&categories=${today.categories}&semester=${today.semester}&stars=${today.semester}&path=${today.path}&cover=${today.cover}`)
    return{
        type:ADD_TODAY,
        payload:today
    }
}
export const updateToday=(today)=>{
    return{
        type:UPDATE_TODAY,
        payload:today
    }
}