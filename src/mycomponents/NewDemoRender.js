import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

class NewDemoRender extends Component {


    change(){
        var container = document.getElementById("myid")
        var element = <h1>My name is Shuvo, I am from React Dom</h1>
        var callback = function(){
            alert("Hi I am callback")
        }
        ReactDOM.render(element, container, callback)
    }

    render() {
        return (
            <div>
                <button class='btn btn-primary' onClick={this.change}>Change</button>
                <h1 id='myid'>My Name is Shuvo</h1>
            </div>
        );
    }
}

export default NewDemoRender;