import {GET_BOOKS,DELETE_BOOKS,ADD_BOOKS,UPDATE_BOOKS} from './type'
import axios from 'axios';

export const getBooks=()=>async dispatch=>{
const res=await axios.get('http://localhost:4000/api/books/getData')
    dispatch({
        type:GET_BOOKS,
        payload:res.data.data
})}

export const deleteBooks=(id)=>async dispatch=>{
    await axios.delete(`http://localhost:4000/api/books/delData/${id}`);
    dispatch({
        type:DELETE_BOOKS,
        payload:id
    })
}
export const addBooks=(book)=>async dispatch=>{
    await axios.post(`http://localhost:4000/api/books/addData?name=${book.name}&auther=${book.auther}&categories=${book.categories}&semester=${book.semester}&stars=${book.semester}&path=${book.path}&cover=${book.cover}`)
    return{
        type:ADD_BOOKS,
        payload:book
    }
}
export const updateBooks=(book)=>{
    return{
        type:UPDATE_BOOKS,
        payload:book
    }
}