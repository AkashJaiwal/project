import React from 'react'
import {useDispatch} from 'react-redux'
import {patientActions} from '../stores/patient-slice'
function ComplicatedProcedureInput(props) {
    const dispatch=useDispatch()
    const handleChange=(event)=>{
        if(event.target.checked){
            dispatch(patientActions.addScore(props.checkValue))
            dispatch(patientActions.addCategory(event.target.value))
        }else{
            dispatch(patientActions.reduceScore(props.checkValue))
            dispatch(patientActions.removeCategory(event.target.value))
        }
    }
    return (
        <input type={props.type} value={props.value} onChange={handleChange}/>
    )
}

export default ComplicatedProcedureInput