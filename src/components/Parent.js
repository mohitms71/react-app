import React, {Component } from 'react'
import Children from './Children'
class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname:'Papa'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    
    greetParent(child){
        alert(`Hello ${this.state.parentname} from ${child}`)
    }
    render() {
        return (
            <div>
                <Children greethandler={this.greetParent}></Children>
            </div>
        )
    }
}

export default Parent
