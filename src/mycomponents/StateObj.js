import React, {Component} from 'react'

class StateObj extends Component{

    constructor(){
        super()

        this.state={
            name: "Mamun",
            age: "28 years",
            height: "5 feet 11 inches"

        }
    }



    render(){

        return <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.height}</h1>
                
            </div>
            }
}

export default StateObj;