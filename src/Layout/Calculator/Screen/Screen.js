import React from 'react';
import ComputationScreen from './ComputationlScreen/ComputationalScreen';
import ResultScreen from './ResultScreen/ResultScreen';


const screen = (props) => (
    <section className="screen">
        <ResultScreen >{props.result}</ResultScreen>
        <ComputationScreen >{props.equation}</ComputationScreen>
    </section>
)
export default screen;