import React, { useState } from "react";
import {questions } from './api';
import "./accordion.css";
import Myaccordion from './Myaccordion';

const Accordion = () => {
    const [data,setData]= useState(questions);         //using State
    return (
        <>
        <h1>General Facts</h1>
        {
            
            data.map((curElem)=>{
                const {id} = curElem;
                return <Myaccordion key={id} {...curElem}/>;      //spread operator
            })
        }
           
        </>
    )
};


export default Accordion;