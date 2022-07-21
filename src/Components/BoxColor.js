import React from 'react'



function BoxColor(props) {
    const divStyle = {
        color: 'black',
        backgroundColor:  `rgb(${props.r}, ${props.g}, ${props.b})`
    }
    return( <div className="BoxColor" style={divStyle}>
            <p>rgb ({props.r}, {props.g}, {props.b})</p>
            </div>
    )
}

export default BoxColor