import React, { useState } from "react";
function Interest(){
    const [amount, setAmount] = useState("")
        const [rate, setRate] = useState("")
        const [time, setTime] = useState("")
        const [si, setSi] = useState(null)

        const calculateInterest=()=>{
            if(amount && rate && time){
                const timeInYear=time*12
                const si=(amount*rate*timeInYear/100).toFixed(2)
            setSi(si)
            }
        }
    return <div className="bmi-card">
        <h1>Simple interest</h1>
        <div className="input-group">
            <label>amount</label>
            <input type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="enter the amount" />
        </div>
        
        <div className="input-group">
            <label>rate</label>
            <input type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="enter the rate" />
        </div>
        
        <div className="input-group">
            <label>time</label>
            <input type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="enter the time" />
        </div>
        <button className="calculate" onClick={calculateInterest}>=</button>
        {
            si && (
                <div className="result">
                    <h2>simple interest:{si}</h2>
                    </div>

            )
        }
    </div>
}


export default Interest