import {GET_RASALAY,DELETE_RASALAY,ADD_RASALAY,UPDATE_RASALAY} from './type'
import axios from 'axios';

export const getRasalay=()=>async dispatch=>{
const res=await axios.get('http://localhost:4000/api/Rasalay/getData')
    dispatch({
        type:GET_RASALAY,
        payload:res.data.data
})}

export const deleteRasalay=(id)=>async dispatch=>{
    await axios.delete(`http://localhost:4000/api/Rasalay/delData/${id}`);
    dispatch({
        type:DELETE_RASALAY,
        payload:id
    })
}
export const addRasalay=(Rasalay)=>async dispatch=>{
    await axios.post(`http://localhost:4000/api/Rasalay/addData?name=${Rasalay.name}&auther=${Rasalay.auther}&categories=${Rasalay.categories}&semester=${Rasalay.semester}&stars=${Rasalay.semester}&path=${Rasalay.path}&cover=${Rasalay.cover}`)
    return{
        type:ADD_RASALAY,
        payload:Rasalay
    }
}
export const updateRasalay=(Rasalay)=>{
    return{
        type:UPDATE_RASALAY,
        payload:Rasalay
    }
}