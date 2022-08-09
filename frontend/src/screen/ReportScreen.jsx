import React from 'react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { listReport } from '../stores/report-slice'
import {useNavigate} from 'react-router-dom'

function ReportScreen() {
  const dispatch=useDispatch()
  let navigate = useNavigate();
  const patients=useSelector(state=>state.report.patients)
  const loading=useSelector(state=>state.report.loading)
  const error=useSelector(state=>state.report.error)
  
  useEffect(()=>{
    dispatch(listReport())
  },[dispatch])

  const navigatePatientPage=()=>{
    navigate("/acuity/")
  }
  return (
    <div>
      {loading ? <h3>Loding......</h3> : error ? <p>Something went wrong please contact administrator</p>
      : 
      <>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Prn</th>
            <th scope="col">Date</th>
            <th scope="col">Bed No</th>
            <th scope="col">Diagnosis</th>
            <th scope="col">Category</th>
            <th scope="col">Total Score</th>
            <th scope="col">Total Category Score</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient=>(
            <tr>
            <th scope="row">1</th>
            <td>{patient.name}</td>
            <td>{patient.prn}</td>
            <td>{patient.date}</td>
            <td>{patient.bed_no}</td>
            <td>{patient.diagnosis}</td>
            <td>{patient.category}</td>
            <td>{patient.total_score}</td>
            <td>{patient.total_category_score}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <button onClick={navigatePatientPage} className="btn btn-success">Add Patient Details</button>
      </>  
      }
      
    </div>
  )
}

export default ReportScreen