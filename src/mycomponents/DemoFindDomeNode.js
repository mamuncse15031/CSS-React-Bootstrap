import React, { Component } from 'react';
import ReactDOM from 'react-dom'


class DemoFindDomeNode extends Component {

    changeImage(){


        var imgID = document.getElementById("imgID");
        ReactDOM.findDOMNode(imgID).src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    }

    render() {
        return (
            <div>
                <button onClick = {this.changeImage}>Change Image</button><br></br>
                <img src = "https://rabbil.com/storage/blogpost.jpg" id="imgID"></img>
            </div>
        );
    }
}

export default DemoFindDomeNode;