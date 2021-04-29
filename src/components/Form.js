import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:''
        }
    }
    changehandler=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    commentsHandler=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    submithandler=(event)=>{
        alert(`Form submitted successfully`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.submithandler}>
                <label>
                    Username
                </label>
                <input type='text' value={this.state.username} onChange={this.changehandler}></input>
                <label>
                    Comments
                </label>
                <textarea value={this.state.comments} onChange={this.commentsHandler}></textarea>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
