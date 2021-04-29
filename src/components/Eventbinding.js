import React, { Component } from 'react'

export class Eventbinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
        this.eventhandler=this.eventhandler.bind(this)
    }
    eventhandler(){
        this.setState({
            message:'GoodBye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.eventhandler}>Click</button>
            </div>
        )
    }
}

export default Eventbinding
