import React from 'react';

function Greetings(props) {
    const language = props.lang
    if (language === "de") {
        return <h3>Hallo {props.children}</h3>
    } else if (language === "fr") {
        return <h3>Bonjour {props.children}</h3>
    } else if (language === "en") {
        return <h3>Hello {props.children}</h3> 
    } else return <h3>Hola {props.children}</h3>

    }



export default Greetings