import React, { Component } from 'react'
import "./styles.css"
class Square extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             value:null,
        }
    }
    changevalue=()=>{
        if((this.props.active)%2===0){
            this.setState({
                value:"X",
                
            })
           
        }
        else{
            this.setState({
                value:"O",
                
            })
           
        }
    }
    
    render() {
        return (
            <React.Fragment>
               <button className="box" onClick={this.changevalue}>{this.state.value}</button> 
            </React.Fragment>
        )
    }
}

export default Square


