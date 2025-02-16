import React from 'react'
import {calculateInvestmentResults} from '../util/investment'

export default function Result({userInput}) {
  const calculatedResult = calculateInvestmentResults(userInput);
  return (
    <div>
      {console.log(calculatedResult)}
      
      <p>Result {userInput.annualInvestment}</p>
    </div>
  )
}
