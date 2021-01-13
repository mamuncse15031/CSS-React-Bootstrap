import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function onclick(){

    alert("Test complete");
}

function MyFun(){

    return(

        <button className = "btn btn-primary m-5" onClick = {onclick}>Test Bootstrap</button>
    );
}

export default MyFun;