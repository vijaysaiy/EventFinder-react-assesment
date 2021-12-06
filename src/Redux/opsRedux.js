import {createSlice} from '@reduxjs/toolkit'
import data from "../Data/data.json"
const initialValues = data.all;

const opsSlice = createSlice({
    name:"events",
    initialState:{
        eventsList:initialValues    
    },
    
    reducers:{
        addEvents:(state,action) =>{
            let newEvents = [...state.eventsList];
            
        }
    }
})

export const {addEvents} = opsSlice.actions
export default opsSlice.reducer