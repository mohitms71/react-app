import React , { Component } from "react"
class Welcome extends Component{
    render(){
        const {name,stand,children}=this.props
        return(
            <div>
                <h1>welcome {name} studies in {stand}</h1>
                {children}
            </div>
        )
    }
}
export default Welcome