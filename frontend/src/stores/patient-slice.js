import { createSlice } from "@reduxjs/toolkit";
const patientInitialState={
    name:"",
    prn:"",
    date:"",
    bed_no:"",
    diagnosis:"",
    category:[],
    form_disable_status:true,
    total_score:0,
    total_category_score:0,
}
const patientSlice=createSlice({
    name:'patient',
    initialState:patientInitialState,
    reducers:{
        getName(state,action){
            state.name=action.payload
        },
        getPrn(state,action){
            state.prn=action.payload
        },
        getDate(state,action){
            state.date=action.payload
        },
        getBedNo(state,action){
            state.bed_no=action.payload
        },
        getDiagnosis(state,action){
            state.diagnosis=action.payload
        },
        setFormStatus(state){
            state.form_disable_status=false
        },
        addScore(state,action){
            let no=parseInt(action.payload)
            state.total_score=state.total_score+no
        },
        reduceScore(state,action){
            let no=parseInt(action.payload)
            state.total_score=state.total_score-no
        },
        addCategory(state,action){
            state.category.push(action.payload)
        },
        removeCategory(state,action){
            state.category=state.category.filter(item=>item!==action.payload)
        }
        
    }
})

export default patientSlice;
export const patientActions=patientSlice.actions