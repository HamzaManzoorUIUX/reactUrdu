import {GET_POETRY,DELETE_POETRY,ADD_POETRY,UPDATE_POETRY} from './type'
import axios from 'axios';

export const getPoetry=()=>async dispatch=>{
const res=await axios.get('http://localhost:4000/api/Poetry/getData')
    dispatch({
        type:GET_POETRY,
        payload:res.data.data
})}

export const deletePoetry=(id)=>async dispatch=>{
    await axios.delete(`http://localhost:4000/api/Poetry/delData/${id}`);
    dispatch({
        type:DELETE_POETRY,
        payload:id
    })
}
export const addPoetry=(book)=>async dispatch=>{
    await axios.post(`http://localhost:4000/api/Poetry/addData?name=${book.name}&auther=${book.auther}&categories=${book.categories}&semester=${book.semester}&stars=${book.semester}&path=${book.path}&cover=${book.cover}`)
    return{
        type:ADD_POETRY,
        payload:book
    }
}
export const updatePoetry=(book)=>{
    return{
        type:UPDATE_POETRY,
        payload:book
    }
}