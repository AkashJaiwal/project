import React from 'react'

function Education() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-2">
                    <p className="headings">Education</p>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id33" name="choice[]" value="Standard (i.e DM,HF)"
                                onchange="checkTotal(this.id,1)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Standard (i.e DM,HF)</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id34" name="choice[]" value="New Meds side effects"
                                onchange="checkTotal(this.id,2)" />
                        </div>
                        <div className="col-sm-9">
                            <label>New Meds, side effects</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id35" name="choice[]" value="Discharge Today"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Discharge Today</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id36" name="choice[]" value="Family Education"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Family Education</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id37" name="choice[]" value="Pre/Post Procedure"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Pre/Post Procedure</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id38" name="choice[]"
                                value="New Diagnosis Multiple comorbidities" onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>New Diagnosis</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id39" name="choice[]" value="Multiple comorbidities"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Multiple comorbidities</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id40" name="choice[]" value="Inability to comprehend"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Inability to comprehend</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </React.Fragment>
    )
}

export default Education