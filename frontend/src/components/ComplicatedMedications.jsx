import React from 'react'

function ComplicatedMedications() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-2">
                    <p className="headings">Complicated IV Drugs & Other Medications</p>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id51" name="choice[]" value="Glucometer with coverage"
                                onchange="checkTotal(this.id,1)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Glucometer with coverage</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id52" name="choice[]" value="2-5 IV meds"
                                onchange="checkTotal(this.id,2)" />
                        </div>
                        <div className="col-sm-9">
                            <label>2-5 IV meds</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id53" name="choice[]" value="K+ protocol"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>K+ protocol</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id54" name="choice[]" value="Heparin protocol"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Heparin protocol</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id55" name="choice[]" value=">5 IV meds"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>>5 IV meds</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id56" name="choice[]" value="TPN"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>TPN</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id57" name="choice[]" value="Blood_Products"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Blood/blood products</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id58" name="choice[]" value="Tube feeding/meds"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Tube feeding/meds</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id59" name="choice[]" value="Cardiac_drip"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Cardiac Drip Amioderone, cardizem, dopamine</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id60" name="choice[]" value="Insulin Drip"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>Insulin Drip</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </React.Fragment>
    )
}

export default ComplicatedMedications