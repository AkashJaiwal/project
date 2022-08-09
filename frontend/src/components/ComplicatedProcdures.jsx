import React from 'react'
import ComplicatedProcedureInput from '../UI/ComplicatedProcedureInput'
function ComplicatedProcdures() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-2">
                    <p className="headings">Complicated Procedures</p>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <ComplicatedProcedureInput type="checkbox" value="pulseox" checkValue="1"/>
                        </div>
                        <div className="col-sm-9">
                            <label>Pulse Ox</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <ComplicatedProcedureInput type="checkbox" value="Foleys" checkValue="1"/>
                        </div>
                        <div className="col-sm-9">
                            <label>Foley's</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                        <ComplicatedProcedureInput type="checkbox" value="oralcare" checkValue="1"/>
                        </div>
                        <div className="col-sm-9">
                            <label>Oral Care</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                        <ComplicatedProcedureInput type="checkbox" value="telemetry" checkValue="1"/>
                        </div>
                        <div className="col-sm-9">
                            <label>Telemetry</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                        <ComplicatedProcedureInput type="checkbox" value=">4LO2 NC" checkValue="2"/>
                        </div>
                        <div className="col-sm-9">
                            <label>{">4LO2 NC"}</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                        <ComplicatedProcedureInput type="checkbox" value="BiPAP/CPAP" checkValue="2"/>
                        </div>
                        <div className="col-sm-9">
                            <label>BiPAP/CPAP</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id7" name="choice[]" value="Routine Tracheal care"
                                onchange="checkTotal(this.id,2)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Routine Tracheal care</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id8" name="choice[]" value="PICC/Central line"
                                onchange="checkTotal(this.id,2)" />
                        </div>
                        <div className="col-sm-9">
                            <label>PICC/Central line</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id9" name="choice[]" value="NG tube"
                                onchange="checkTotal(this.id,2)" />
                        </div>
                        <div className="col-sm-9">
                            <label>NG tube</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id10" name="choice[]" value="Incontinent PCA"
                                onchange="checkTotal(this.id,2)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Incontinent PCA</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id11" name="choice[]" value="Rectal Tube"
                                onchange="checkTotal(this.id,2)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Rectal Tube</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id12" name="choice[]" value="Isolation"
                                onchange="checkTotal(this.id,2)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Isolation</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id13" name="choice[]" value="Fall risk"
                                onchange="checkTotal(this.id,2)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Fall risk</label>
                        </div>
                    </div>
                </div>



                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id14" name="choice[]" value="HighflowO2/Vent"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>HighflowO2/Vent</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id15" name="choice[]" value="Continuous BiPAP/CPAP"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Continuous BiPAP/CPAP</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id16" name="choice[]" value="Trachea/Frequent Suctioning"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>New trachea/Frequent Suctioning</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id17" name="choice[]" value="Trachea/Frequent Suctioning"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Trach care 3 times/shifts</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id18" name="choice[]" value="Wound/skin care"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Wound/skin care</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id19" name="choice[]" value="Ostomy"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Ostomy</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id20" name="choice[]" value="Assist W/ADLS"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Assist W/ADLS</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id21" name="choice[]" value="Vitals/neuro check q2h"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Vitals/neuro check q2h</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id22" name="choice[]"
                                value="Continuous bladder irrigation Chest Tube" onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Continuous bladder irrigation</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id23" name="choice[]" value="Chest Tube"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Chest Tube</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id24" name="choice[]"
                                value="Peritoneal Dialysis Opioid/Alcoholwithdrawal assessment"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Peritoneal Dialysis</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id25" name="choice[]"
                                value="Opioid/Alcoholwithdrawal assessment" onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Opioid/Alcoholwithdrawal assessment</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id26" name="choice[]" value="Unfinished admit"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Unfinished admit</label>
                        </div>
                    </div>
                </div>




                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id27" name="choice[]" value="Total Care"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Total Care</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id28" name="choice[]" value="Restraints"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Restraints</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id29" name="choice[]" value="Total Feed"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Total Feed</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id30" name="choice[]" value="Confused/Restless"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Confused/Restless/Combative</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id31" name="choice[]" value="High Risk for fall"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>High fall risk/SOMA bed</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id32" name="choice[]" value="High Risk for fall"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Post code/rapid response team</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </React.Fragment>
    )
}

export default ComplicatedProcdures