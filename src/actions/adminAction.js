import {GET_Admin,REMOVE_Admin} from './type'
import axios from 'axios';

export const getAdmin=()=>async dispatch=>{
const res=await axios.get('http://localhost:4000/api/books/getData')
    dispatch({
        type:GET_Admin,
        payload:res.data
    })
}
export const removeAdmin=()=>{
    return{
        type:REMOVE_Admin,
        payload:id
    }
}
