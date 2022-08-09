import React from 'react'
import {useSelector} from 'react-redux'
function Score() {
    const total_score=useSelector((state)=>state.patient.total_score)
    return (
        <React.Fragment>
            <p><b>Total Score :</b> <input id="total" type="text" size="2" name="total" value={total_score}
                style={{marginTop: '1%'}}/></p>
            <p><b>Total category score</b> <span id="category_score"></span></p>
            <p><b>Acuity category scores:</b></p>
            <p><b>{"1: 1 to 15 2: 16 to 30 3: 31 to 45 4: > 45 or new admissionCurrent acuity tool"}</b></p>
        </React.Fragment>
    )
}

export default Score