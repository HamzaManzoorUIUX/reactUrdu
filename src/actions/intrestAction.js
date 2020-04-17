import {GET_INTREST,DELETE_INTREST,ADD_INTREST,UPDATE_INTREST} from './type'
import axios from 'axios';

export const getIntrest=()=>async dispatch=>{
const res=await axios.get('http://localhost:4000/api/Intresting/getData')
    dispatch({
        type:GET_INTREST,
        payload:res.data.data
})}

export const deleteIntrest=(id)=>async dispatch=>{
    await axios.delete(`http://localhost:4000/api/Intresting/delData/${id}`);
    dispatch({
        type:DELETE_INTREST,
        payload:id
    })
}
export const addIntrest=(intrest)=>async dispatch=>{
    await axios.post(`http://localhost:4000/api/Intresting/addData?data=${intrest.data}&title=${intrest.title}&date=${intrest.date}&pic=${intrest.pic}`)
    return{
        type:ADD_INTREST,
        payload:intrest
    }
}
export const updateIntrest=(intrest)=>{
    return{
        type:UPDATE_INTREST,
        payload:intrest
    }
}