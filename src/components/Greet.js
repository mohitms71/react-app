import React from 'react'
/// function Greet(){
 //   return <h1>hello mohit!</h1>
//}
const Greet =(props)=>{
    const {name,stand}=props
    return(
        <div>
            <h1>Hello {name} studies in {stand}!</h1>
        </div>
    )
}
export default Greet
