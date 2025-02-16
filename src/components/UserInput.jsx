
export default function UserInput({onUserInput,inputValue}) {

  return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type='number' required onChange={(event)=>{onUserInput('initialInvestment',event.target.value)}} value={inputValue.initialInvestment}/>
            </p>
            <p>
                <label>Annual investment</label>
                <input type='number'required onChange={(event)=>{onUserInput('annualInvestment',event.target.value)}} value={inputValue.annualInvestment}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type='number'required onChange={(event)=>{onUserInput('expectedReturn',event.target.value)}} value={inputValue.expectedReturn}/>
            </p>
            <p>
                <label>Duration</label>
                <input type='number'required onChange={(event)=>{onUserInput('duration',event.target.value)}} value={inputValue.duration}/>
            </p>
        </div>
    </section>
  )
}
