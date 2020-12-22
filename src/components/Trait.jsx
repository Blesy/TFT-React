import React from 'react';
import '../assets/styles/components/Trait.scss';

const Trait = () => (
    <div className="trait">
        <img src="assets/jupiter.svg" alt=""/>
        <div className="counter">
            <span>2</span>
            <span>/</span>
            <span className="selected">4</span>
            <span>/</span>
            <span>6</span>
            <span>/</span>
            <span>8</span>
        </div>
    </div>
);

export default Trait;