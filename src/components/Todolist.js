import React, { Component } from 'react'
import "./styles.css"
class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
             value:"",
             list:[]
        }
    }
    
    additem(x){
        this.setState({
            value:x
        })
    }
    addlistitem(x){
        let newlist=this.state.list
        newlist.push(x)
        this.setState({
            list:newlist,
            value:''
        })
    }
    render() {
        return (
            <div>
              <button className="button" onClick={()=>this.addlistitem(this.state.value)}>Add</button>
              <input className="input" value={this.state.value} onChange={(e)=>this.additem(e.target.value)}></input> 
              <ul>{this.state.list.map((item) => <li className="litem" key={Math.random}>{item}</li>)}</ul>
            </div>
        )
    }
}

export default Todolist
