import React from "react"
import axios from 'axios'
import { useSelector } from "react-redux"
import UserInfo from '../components/UserInfo'
import AcuityCategoryInfo from '../UI/AcuityCategoryInfo'
import ComplicatedProcdures from '../components/ComplicatedProcdures'
import Education from '../components/Education'
import Psychosocial from '../components/Psychosocial'
import Medication from '../components/Medications'
import ComplicatedMedications from '../components/ComplicatedMedications'
import Score from '../components/Score'
import Button from '../UI/Button'
import { useNavigate } from "react-router-dom"

const AcuityScreen = (props) => {
    let navigate=useNavigate()
    const{name,prn,date,bed_no,diagnosis,category,total_score,total_category_score}=useSelector((state)=>state.patient)
    async function addPatient() {
        axios.post('http://localhost:8000/api/patient/details/add/', {
            name:name,
            prn:prn,
            date:date,
            bed_no:bed_no,
            diagnosis:diagnosis,
            category:category.toString(),
            total_score:total_score,
            total_category_score:total_category_score
        })
            .then(function (response) {
                console.log(response);
                navigate("/report/")

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const submitHandler = (event) => {
        event.preventDefault()
        addPatient()
    }
    
    return (
        <React.Fragment>
            <div id="wrapper">
                <div className="patient_details">
                    <form className="form-group" name="listForm" onSubmit={submitHandler}>
                        <UserInfo/>
                        <AcuityCategoryInfo />
                        <ComplicatedProcdures />
                        <Education />
                        <Psychosocial />
                        <Medication />
                        <ComplicatedMedications />
                        <Score />
                        <Button onClick={submitHandler}></Button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AcuityScreen