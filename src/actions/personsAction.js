import {GET_PERSONS,DELETE_PERSONS,ADD_PERSONS,UPDATE_PERSONS} from './type'
import axios from 'axios';

export const getPersons=()=>async dispatch=>{
const res=await axios.get('http://localhost:4000/api/Persons/getData')
    dispatch({
        type:GET_PERSONS,
        payload:res.data.data
})}

export const deletePersons=(id)=>async dispatch=>{
    await axios.delete(`http://localhost:4000/api/Persons/delData/${id}`);
    dispatch({
        type:DELETE_PERSONS,
        payload:id
    })
}
export const addPersons=(person)=>async dispatch=>{
    await axios.post(`http://localhost:4000/api/Persons/addData?name=${person.name}&auther=${person.auther}&categories=${person.categories}&semester=${person.semester}&stars=${person.semester}&path=${person.path}&cover=${person.cover}`)
    return{
        type:ADD_PERSONS,
        payload:person
    }
}
export const updatePersons=(person)=>{
    return{
        type:UPDATE_PERSONS,
        payload:person
    }
}