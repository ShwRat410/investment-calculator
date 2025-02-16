import React, { useState } from 'react'

const INITIAL_VALUES={
    initialInvestment:1000,
    annualInvestment:23,
    expectedReturn:10,
    duration:2
}

export default function UserInput() {

  const[inputValue,setInputValue]=useState(INITIAL_VALUES);  

  function handleInputValue(identifier,newValue){
    setInputValue((prevInputValue)=>{
        return({
            ...prevInputValue,
            [identifier]:newValue
        })
    })
  }

  return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type='number' required onChange={(event)=>{handleInputValue('initialInvestment',event.target.value)}} value={inputValue.initialInvestment}/>
            </p>
            <p>
                <label>Annual investment</label>
                <input type='number'required onChange={(event)=>{handleInputValue('annualInvestment',event.target.value)}} value={inputValue.annualInvestment}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type='number'required onChange={(event)=>{handleInputValue('expectedReturn',event.target.value)}} value={inputValue.expectedReturn}/>
            </p>
            <p>
                <label>Duration</label>
                <input type='number'required onChange={(event)=>{handleInputValue('duration',event.target.value)}} value={inputValue.duration}/>
            </p>
        </div>
    </section>
  )
}
