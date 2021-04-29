import React, { Component } from 'react'

class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedin:false
        }
    }
    loggedin=()=>{
        this.setState({
            isloggedin:true
        })
    }
    loggedout=()=>{
        this.setState({
            isloggedin:false
        })
    }
    render() {
        let message
        if(this.state.isloggedin){
            message=<div>Hello Mohit</div>
        }
        else{
            message=<div>Hello Guest</div>
        }
        return (
            <div>
                <div>{message}</div>
                <button onClick={this.loggedin}>Login</button>
                <button onClick={this.loggedout}>Logout</button>
            </div>
        )
    }
}

export default Conditional
