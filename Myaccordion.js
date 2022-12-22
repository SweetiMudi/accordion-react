import React, { useState } from "react";
const Myaccordion = ({question , answer,explaination}) =>{        //passing props
    const [show,setShow]=useState(false)                       //false = it will check the condition of answer   {show && <p>{answer}</p>}                        
  return(
    <>
    <div className="main-heading">
      <p onClick={()=> setShow(!show)}>{show? "➖" : "➕" }  </p>
      <h3>{question}</h3>
    </div>
    {show && <p className="answers">{answer} <p>{explaination}</p></p> }                        
    </>
    )
};
export default Myaccordion;