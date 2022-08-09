import React from 'react'

function Medications() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-2">
                    <p className="headings">Medications (Oral)</p>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id47" name="choice[]" value="1-5"
                                onchange="checkTotal(this.id,1)" />
                        </div>
                        <div className="col-sm-9">
                            <label>1-5</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id48" name="choice[]" value="6-10"
                                onchange="checkTotal(this.id,2)" />
                        </div>
                        <div className="col-sm-9">
                            <label>6-10</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id49" name="choice[]" value="11-15"
                                onchange="checkTotal(this.id,3)" />
                        </div>
                        <div className="col-sm-9">
                            <label>11-15</label>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-3">
                            <input type="checkbox" id="id50" name="choice[]" value=">16"
                                onchange="checkTotal(this.id,4)" />
                        </div>
                        <div className="col-sm-9">
                            <label>{">=16"}</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>

        </React.Fragment>
    )
}

export default Medications