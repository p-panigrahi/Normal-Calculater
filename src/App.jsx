import React, { useState } from "react";
import './App.css';
const App1 = () => {
  const [value, setValue] = useState('');
  const array = ['1','2','3','4','5','6','7','8','9','0','+','-','%','/','*','=','c','.'];
  const handelClick = (e)=>{
    const id = e.target.id;
    if(id === "c"){
      setValue('');
    }else if(id === "="){
      handelSubmit();
    }else{
      setValue((val)=>val+id);
    }
  }
  const handelSubmit = (e)=>{
    e?.preventDefault();
    try{
      const ans = eval(value);
      setValue(ans)
    }catch(error){
      alert("Invalid Input");
    }
  }
  return (
    <div className="main-container">
      <h1>Calculator</h1>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Enter Number" value={value} onChange={(e)=>setValue(e.target.value)} />
      </form>
      <div className="num-container" onClick={handelClick}>
          {
            array.map((item , i)=>(
              <button key={i} id={item} className="cell">{item}</button>
            ))
          }
      </div>
    </div>
  );
};

export default App1;
