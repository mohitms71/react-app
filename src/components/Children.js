import React from 'react'

function Children(props) {
    return (
        <div>
            <button onClick={()=>props.greethandler('Mohit')}>Greet parent</button>
        </div>
    )
}
export default Children