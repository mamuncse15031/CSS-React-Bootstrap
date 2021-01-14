import React, {Component} from 'react'

class Condition1Class extends Component{
    constructor(){
        super()
        this.state={
            login: true
        }
    }

    
    render(){
        if(this.state.login===true){
            return (<button class="btn btn-primary">Logout</button>)
        }
        else{
            return (<button class="btn btn-primary">Login</button>)
        }
    }
}
export default Condition1Class;