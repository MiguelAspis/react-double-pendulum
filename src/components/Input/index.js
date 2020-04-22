import React, { useState, useContext } from 'react';
import './input.css';
import { AppContext } from '../../App';

export default function Input() {
    const [mass1, setMass1] = useState(0);
    const [mass2, setMass2] = useState(0);
    const [theta1, setTheta1] = useState(0);
    const [theta2, setTheta2] = useState(0);
    const [line1, setLine1] = useState(0);
    const [line2, setLine2] = useState(0);

    const {state, dispatch} = useContext(AppContext);

    const handleInput = (e)  => {
        e.preventDefault();

        dispatch({type: 'UPDATE_DATA', data: {
            mass1,
            mass2,
            theta1,
            theta2,
            line1,
            line2
        } });

    };
        
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleInput}>
                <h3>First ball mass:</h3>
                <input type="range" min="1" max="100"  className="slider" id="Mass1" onChange={e => setMass1(e.target.value)}/>
                <h3>Second ball mass:</h3>
                <input type="range" min="1" max="100"  className="slider" id="Mass2" onChange={e => setMass2(e.target.value)}/>
                <h3>First angle value(degrees):</h3>
                <input type="range" min="1" max="100"  className="slider" id="Degree1" onChange={e => setTheta1((e.target.value)/180 * Math.PI)}/>
                <h3>Second angle value(degrees):</h3>
                <input type="range" min="1" max="100"  className="slider" id="Degree2" onChange={e => setTheta2((e.target.value)/180 * Math.PI)}/>
                <h3>First Line Length:</h3>
                <input type="range" min="1" max="150"  className="slider" id="Mass2" onChange={e => setLine1(e.target.value)}/>
                <h3>Second Line Length:</h3>
                <input type="range" min="1" max="150"  className="slider" id="Mass2" onChange={e => setLine2(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
