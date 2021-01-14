import React, {Component} from 'react'

class Condition2ElementClass extends Component{
    constructor(){
        super()
        this.state={
            login: false
        }
    }

    
    render(){
        return(
            this.state.login? <button class="btn btn-primary m5">Logout</button> : <button class="btn btn-primary m-5">Login</button>
        )
    }
}
export default Condition2ElementClass;