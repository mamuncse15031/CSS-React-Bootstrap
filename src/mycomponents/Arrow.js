import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const AlertME = (a)=>{

    alert(a);
}

const Arrow = ()=>{

    return(

        <button className = "btn btn-danger" onClick={AlertME.bind(this,"Test Complete")}>Arrow Test Button</button>
    );
}

export default Arrow;