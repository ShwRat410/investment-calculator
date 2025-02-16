import React from 'react'
import investment_logo from '../assets/investment-calculator-logo.png'

export default function Header() {
  return (
    <div id="header">
      <img src={investment_logo} alt='investment-logo'/>
      <h1>Investment Calculator</h1>
    </div>
  )
}
