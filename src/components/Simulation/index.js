import React, { useContext, useRef } from 'react';
import './simulation.css';
import { AppContext } from '../../App';
import Konva from 'konva';
import { Stage, Layer, Line, Circle } from 'react-konva';

export default function Simulation() {
    //imports context
    const {state, dispatch} = useContext(AppContext);
    const canvasRef = useRef();
  
    //values from context
    const mass1 = state.mass1;
    const mass2 = state.mass2;
    const theta1 = state.theta1;
    const theta2 = state.theta2;
    


    
    
    return (
    <div className="container">
        <Stage width={1100} height={400}>
            <Layer>
                <Line />
                <Circle 
                x={200}
                y={200}
                radius={50}
                fill="#303e5d" />
                <Line />
                <Circle />
            </Layer>
        </Stage>
    </div>
    )
}
