import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"

const INITIAL_VALUES={
  initialInvestment:10000,
  annualInvestment:1200,
  expectedReturn:6,
  duration:10
}

function App() {
  
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
    <>
    <Header></Header>
    <UserInput onUserInput={handleInputValue} inputValue={inputValue}></UserInput>
    </>
  )
}

export default App
