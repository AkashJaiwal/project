import React from 'react'
import {useDispatch} from 'react-redux'
import {patientActions} from '../stores/patient-slice'
function UserInfo() {
    const dispatch=useDispatch()
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-5">
                    <label>Patient Name</label>
                    <input type="text" name="name" className="form-control" onChange={(event)=>{dispatch(patientActions.getName(event.target.value))}}/>
                </div>

                <div className="col-sm-4">
                    <label>PRN </label>
                    <input type="text" name="prn" className="form-control" onChange={(event)=>{dispatch(patientActions.getPrn(event.target.value))}}/>
                </div>

                <div className="col-sm-2">
                    <label>Date</label>
                    <div className="row">
                        <div className="col-sm-12">
                            <input type="date" id="date" name="date" className="form-control" onChange={(event)=>{dispatch(patientActions.getDate(event.target.value))}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginTop: '1%'}}>
                <div className="col-sm-5">
                    <label>Bed No</label>
                    <input type="text" name="bedno" className="form-control" onChange={(event)=>{dispatch(patientActions.getBedNo(event.target.value))}}/>
                </div>

                <div className="col-sm-4">
                    <label>Diagnosis </label>
                    <input type="text" name="diagnosis" className="form-control" onChange={(event)=>{dispatch(patientActions.getDiagnosis(event.target.value))}}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserInfo