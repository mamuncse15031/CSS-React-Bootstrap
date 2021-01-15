import React, { Component } from 'react';
import ReactDOM  from 'react-dom'


class NewDemoHydrate extends Component {

    changeHydrate(){
        var container = document.getElementById("myid2")
        var element = <h1>My name is Shuvo, I am Hydrate</h1>
        var callback = function(){
            alert("Hi I am callback")
        }

        ReactDOM.render(element, container, callback)
    }

    render() {
        return (
            <div>
                <button class='btn btn-primary' onClick={this.changeHydrate}>ChangeHydrate</button>
                <h1 id='myid2'>My Name is Shuvo</h1>
            </div>
        );
    }
}

export default NewDemoHydrate;