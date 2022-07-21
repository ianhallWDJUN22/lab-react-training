import React from 'react'

function Random(props) {
    const min = props.min;
    const max = props.max;

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return <h3>{randomNumber}</h3>
}


export default Random