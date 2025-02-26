import React from 'react'

const ChildComponent = ({fromChild }) => {

    const dataToParent = ()=>{
        fromChild(document.getElementById("inputField").value)
    }

  return (
    <>
    <input type="text" id="inputField" className="border border-gray-700 py-1" />
    <button onClick={dataToParent} className="border bg-blue-500 hover:bg-blue-800 px-5 py-1 ml-2 text-white rounded-md">Send</button>
    </>
  )
}

export default ChildComponent;