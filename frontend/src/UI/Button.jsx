import React from 'react'

function Button(props) {
    return (
        <React.Fragment>
            <center>
                <input className="btn btn-primary" name="submit" style={{ marginTop: '1%', fontWeight: 'bold', width: '30%' }}
                    type="submit" value="submit" onClick={props.onClick} />
            </center>
        </React.Fragment>
    )
}

export default Button