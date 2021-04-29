import React from 'react'


function NameList() {
    const names=["Mohit","aarti","govind"]
    const namelist=names.map((name,index) => <h2 key={index}>I am {index}{name}</h2>)
    return (
        <div>
           {namelist}
        </div>
    )
}

export default NameList
