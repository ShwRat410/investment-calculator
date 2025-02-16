import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result";

const INITIAL_VALUES={
  initialInvestment:10000,
  annualInvestment:1200,
  expectedReturn:6,
  duration:10
}


function App() {
  
  const[inputValue,setInputValue]=useState(INITIAL_VALUES);  

  const inputIsValid = inputValue.duration>=1
  console.log(inputIsValid)

  function handleInputValue(identifier,newValue){
    setInputValue((prevInputValue)=>{
        return({
            ...prevInputValue,
            [identifier]:+newValue
        })
    })
  }

  return (
    <>
    <Header></Header>
    <UserInput onUserInput={handleInputValue} inputValue={inputValue}></UserInput>
    {!inputIsValid&&<p>Please enter a valid duration</p>}
    {inputIsValid&&<Result userInput={inputValue}></Result>}
    </>
  )
}

export default App
