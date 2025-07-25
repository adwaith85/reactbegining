import React, { useState } from "react";
import "./card.css"

function Card() {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBmi] = useState(null)
    const [category, setCategory] = useState("")

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2)
            setBmi(bmi)

            if (bmi < 18.5) {
                setCategory("Underweight")
            }
            else if (bmi >= 18.5 && bmi <= 24.9) {
                setCategory("Normal weight")
            } else if (bmi >= 25 && bmi <= 29.9) {
                setCategory("Overweight")
            } else {
                setCategory("Obese")
            }

        }
    }

    return <div className="bmi-card">
        <h1>BMI calculator</h1>
        <div className="input-group">
            <label>weight (kg)</label>
            <input type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="enter the weight" />
        </div>

        <div className="input-group">
            <label>height (Cm)</label>
            <input type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="enter the height" />
        </div>
        <button className="btn-calculator"
            onClick={calculateBMI}>Calculate Bmi</button>
        {
            bmi && (
                <div className="result">
                    <h3>Your BMI: {bmi}</h3>
                    <h4>Category:{category}</h4>

                </div>
            )
        }
    </div>
}

export default Card