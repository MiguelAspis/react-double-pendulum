import React, { useContext} from 'react';
import './simulation.css';
import { AppContext } from '../../App';
import P5Wrapper from 'react-p5-wrapper';

export default function Simulation() {
    //imports context
    const {state, dispatch} = useContext(AppContext);

    //values from context
    var mass1 = state.mass1;
    var mass2 = state.mass2;
    var theta1 = state.theta1;
    var theta2 = state.theta2;
    var r1 = state.line1;
    var r2 = state.line2;
    //velocities
    var v1 = 0;
    var v2 = 0;
    //gravity
    var g = 0.1;
    
    //p5 function
    function sketch (p) {

        p.setup = () => {
            p.createCanvas(600, 400)
        }

        p.draw = () => {
            p.background(255);
            p.stroke(0);
            p.strokeWeight(2);
            p.translate(300,50);
            
            //positions of the first ball based on angle 1
            var x1 = Math.floor(r1 * Math.sin(theta1));
            var y1 = Math.floor(r1 * Math.cos(theta1));

            //same math but new parameters are relative to previous position
            var x2 = Math.floor(x1 + r2 * Math.sin(theta2));
            var y2 = Math.floor(y1 + r2 * Math.cos(theta2));
        

            //numerators and denominator of acceleration function
            var num1 = -g * (2 * mass1 + mass2) * Math.sin(theta1);
            var num2 = -mass2 * g * Math.sin(theta1 - (2 * theta2));
            var num3 = -2 * Math.sin(theta1 - theta2) * mass2;
            var num4 = (v2 * v2) * r2 + (v1 * v1) * r1 * Math.cos(theta1 - theta2); 
            var den = r1 * (2 * mass1 + mass2 - (mass2 * Math.cos(2 * theta1 - 2 * theta2)));
  
            var a1 = (num1 + num2 + num3 * num4) / den;
            
           

            // update for second ball
            num1 = 2 * Math.sin(theta1 - theta2);
            num2 = (v1 * v1) * r1 * (mass1 + mass2);
            num3 = g * (mass1 + mass2) * Math.cos(theta1);
            num4 = (v2 * v2) * r2 * mass2 * Math.cos(theta1 - theta2);
            den = r2 * (2 * mass1 + mass2 - mass2 * Math.cos(2 * theta1 - 2 * theta2));
              
            var a2 = num1 * (num2 + num3 + num4) / den;


            //draws first ball
            p.line(0,0,x1,y1);
            p.fill(0);
            p.ellipse(x1,y1,mass1,mass1);

            //draws second ball
            p.line(x1,y1,x2,y2);
            p.fill(0);
            p.ellipse(x2,y2,mass2,mass2);

            //updates velocity and acceleration
            v1 += a1;
            v2 += a2;
            theta1 += v1;
            theta2 += v2;
        
        }

    }

    return (
        <P5Wrapper  sketch={sketch}/>
    )
}
