import React from 'react'
import {calculateInvestmentResults} from '../util/investment'
import {formatter} from '../util/investment'


export default function Result({userInput}) {
  const calculatedResult = calculateInvestmentResults(userInput);
  console.log(calculatedResult)
  const initialInvestment = calculatedResult[0].valueEndOfYear -
  calculatedResult[0].interest - 
  calculatedResult[0].annualInvestment;
  return (
    <div>
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {calculatedResult.map((yearData)=>{
                    const totalInterest=yearData.valueEndOfYear- yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear-totalInterest;
                    return(
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    </div>
  )
}
