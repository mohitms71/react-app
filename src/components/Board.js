import React, { Component } from 'react'
import Square from './Square'
class Board extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             active:0
        }
    }
    changeactive(){
        this.setState((prevState)=>({
            active:prevState.active
        }),()=>console.log(this.state.active))
    }
    render() {
        return (
            <div>
                <table cellSpacing="0">
                    <tr>
                        <td><Square onClick={()=>this.changeactive()} active={this.state.active}/></td>
                        <td><Square onClick={()=>this.changeactive()} active={this.state.active}/></td>
                        <td><Square onClick={()=>this.changeactive()} active={this.state.active}/></td>
                    </tr>
                    <tr>
                        <td><Square/></td>
                        <td><Square/></td>
                        <td><Square/></td>
                    </tr>
                    <tr>
                        <td><Square/></td>
                        <td><Square/></td>
                        <td><Square/></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Board

