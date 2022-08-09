import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const initalPatientState={
    patients:[],
    loading:false,
    error:null
}
const reportSlice=createSlice({
    name:'report',
    initialState:initalPatientState,
    reducers:{
        reportListRequest(state){
            state.loading=true
        },
        reportListSuccess(state,action){
            state.loading=false
            state.patients=action.payload
            
        },
        reportListError(state,action){
            state.loading=false
            state.error=action.payload
        }
    }
})
export default reportSlice
export const reportActions=reportSlice.actions

export const listReport=()=>{
    return async function listReportThunk(dispatch) {
        try {
            dispatch(reportActions.reportListRequest)
            const response = await axios.get('http://localhost:8000/api/patient/details/');
            console.log(response);
            dispatch(reportActions.reportListSuccess(response.data))
        } catch (error) {
            console.error(error);
            dispatch(reportActions.reportListFail(error.response && error.response.data.message ? error.response.data.message : error.message))
        }
    }
}