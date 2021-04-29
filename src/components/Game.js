import React, { Component } from 'react'
import "./styles.css"
class Game extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             board:["","","","","","","","",""],
             turn:"X",
             active:[true,true,true,true,true,true,true,true,true]
        }
    }
    refreshpage(){
        window.location.reload()
    }
    change(index){
        let active=this.state.active
        if(active[index]){
            let turn=this.state.turn
            let board=this.state.board
            board[index]=turn;
            active[index]=false
            let win=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ]
            for(let i=0;i<win.length;i++){
                let p1=win[i][0]
                let p2=win[i][1]
                let p3=win[i][2]
                if(board[p1]!=="" && (board[p1]===board[p2]) && (board[p2]===board[p3])){
                    document.getElementsByClassName("win")[0].innerHTML=`Player ${turn} is the winner!`
                    active=[false,false,false,false,false,false,false,false,false]
                }
            }
            if(turn==="X"){
                turn="O"
            }
            else{
                turn="X"
            }
            console.log(board)
            this.setState({
                turn:turn,
                board:board,
                active:active
            })

        }
        
        
    }
    render() {
        return (
            <div>
                <h1>Tic Tac Toe</h1>
                <div className="win"></div>
                <div className="board">
                    {this.state.board.map((name,index) => <div className="box" onClick={()=>this.change(index)}>{name}</div>)}
                </div>
                <div className="button" onClick={()=>this.refreshpage()}>Restart</div>
                
            </div>
            
        )
    }
}

export default Game
