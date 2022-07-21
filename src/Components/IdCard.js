import React from 'react';

function IdCard(props) {
    return (

        <div className="IdCard">
            
            
            <div className="IdCardInfo">

            <div className="IdCardImg">
            <img src={props.picture} alt="Id Card"/>
            </div>

            <div className="IdCardStats">
            <p><b>First Name:</b> {props.firstName}</p>
            <p><b>Last Name:</b> {props.lastName}</p>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height:</b> {props.height}</p>
            <p><b>Birth:</b> {props.birth.toDateString()}</p>
            </div>

            </div>
            
        </div>
    )
}




export default IdCard