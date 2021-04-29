import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    addCounter(){
        this.setState((prevState,props)=>({
            count:prevState.count+props.addValue
        }),()=>console.log(this.state.count))
        
    }
    
    render() {
        return (
            <div>
               <h1>Count-{this.state.count}</h1>
               <button onClick={()=>this.addCounter()}>Add</button> 
            </div>
        )
    }
}

export default Counter
