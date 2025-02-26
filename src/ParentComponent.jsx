import React, {useState} from 'react';
import ChildComponent from './ChildComponent'
const ParentComponent = () => {
    const [data, setData] = useState("");
    const callback = (data) =>{
        console.log("data from child", data)
        setData(data);
    }
  return (
    <>
    <h1>{data}</h1>
    <ChildComponent fromChild={callback}/>
    </>
  )
}

export default ParentComponent