import React, {Component} from 'react'

class SetStateClassCompo extends Component{

    constructor(){
        super()

        this.state={

            name: "Mamun"
        }
    }
    render(){
        return <div>
            <h1>{this.state.name}</h1>
        </div>
    }

}
export default SetStateClassCompo;
