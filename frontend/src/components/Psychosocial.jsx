import React from 'react'

function Psychosocial() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-2">
                    <p className="headings">Psychosocial or therapeutic interventions</p>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id41" name="choice[]" value="<2 interventions per shift"
                                onchange="checkTotal(this.id,1)" />
                        </div>
                        <div className="col-sm-9">
                            <label>
                                {"<2 interventions per shift"}</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id42" name="choice[]" value="3-5 interventions per shift"
                                onchange="checkTotal(this.id),2" />
                        </div>
                        <div className="col-sm-9">
                            <label>3-5 interventions per shift</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id43" name="choice[]" value="6-10 interventions per shift"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>6-10 interventions per shift</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id44" name="choice[]" value="Diagnosis of delirium"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Diagnosis of delirium</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id45" name="choice[]" value="End of life"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>End of life</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id46" name="choice[]"
                                value="New Diagnosis Multiple comorbidities" onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>{">10 interventions per shift"}</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </React.Fragment>
    )
}

export default Psychosocial