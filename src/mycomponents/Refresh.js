import React, {Component} from 'react'

class Refresh extends Component{
    
    constructor(){
        super();

        this.RefreshNow = this.RefreshNow.bind(this);
    }
    RefreshNow(){
        this.forceUpdate();
    }

    
    render(){
        return(
            <div>
                <button class="btn btn-primary" onClick={this.RefreshNow}>Refresh Button</button>
                <h1>{Math.random()}</h1>
            </div>
        )
    }
}
export default Refresh;