import React, { useState } from 'react';
import './Hello.css';


function HelloComponent() {
    const [sum, setSum] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const handleAddition = () => {
        const result = parseInt(num1) + parseInt(num2);
        setSum(result);
    };

    const handleChangeNum1 = (event) => {
        setNum1(event.target.value);
    };

    const handleChangeNum2 = (event) => {
        setNum2(event.target.value);
    };
        

    return (
        <div className="calculator">
            <input
                className="input"
                type="text"
                value={num1}
                onChange={handleChangeNum1}
            />
            <input
                className="input"
                type="text"
                value={num2}
                onChange={handleChangeNum2}
            />
            <button
                className="button"
                onClick={handleAddition}
            >
                Add Numbers
            </button>
            <p className="result">
                The sum is {sum}
            </p>
        </div>
    )
}

export default HelloComponent