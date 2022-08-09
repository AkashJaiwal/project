import React from 'react'

function AcuityCategoryInfo() {
    return (
        <React.Fragment>
            <div className="row" style={{marginTop:'3%',fontWeight: 'bold'}}>
                <div className="col-sm-2">
                    <p className="acuity_heading" style={{fontWeight: 'bold'}}>Acuity category</p>
                </div>

                <div className="col-sm-2">
                    <p className="number">1</p>
                </div>

                <div className="col-sm-2">
                    <p className="number">2</p>
                </div>

                <div className="col-sm-2">
                    <p className="number">3</p>
                </div>

                <div className="col-sm-2">
                    <p className="number">4</p>
                </div>
            </div>
            <hr></hr>
        </React.Fragment>
    )
}

export default AcuityCategoryInfo