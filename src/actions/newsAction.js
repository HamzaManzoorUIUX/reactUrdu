import {GET_NEWS,DELETE_NEWS,ADD_NEWS,UPDATE_NEWS} from './type'
import axios from 'axios';

export const getNews=()=>async dispatch=>{
const res=await axios.get('http://localhost:4000/api/News/getData')
    dispatch({
        type:GET_NEWS,
        payload:res.data.data
})}

export const deleteNews=(id)=>async dispatch=>{
    await axios.delete(`http://localhost:4000/api/News/delData/${id}`);
    dispatch({
        type:DELETE_NEWS,
        payload:id
    })
}
export const addNews=(book)=>async dispatch=>{
    await axios.post(`http://localhost:4000/api/News/addData?name=${book.name}&auther=${book.auther}&categories=${book.categories}&semester=${book.semester}&stars=${book.semester}&path=${book.path}&cover=${book.cover}`)
    return{
        type:ADD_NEWS,
        payload:book
    }
}
export const updateNews=(book)=>{
    return{
        type:UPDATE_NEWS,
        payload:Intrest
    }
}