import React from 'react';
import '../assets/styles/components/Champion.scss';
import Aatrox from '../assets/static/Champs/Aatrox.png';
import Sunfire from '../assets/static/Items/SunfireCape.png';
import Gargoyle from '../assets/static/Items/GargoyleStoneplate.png';
import Warmog from '../assets/static/Items/WarmogsArmor.png';

const Champion = ({ name, items }) => {
    let images;
    if (items) {
        images = [
            <img src={Sunfire} alt=""/>,
            <img src={Gargoyle} alt=""/>,
            <img src={Warmog} alt=""/>
        ]
    }
    return (
    <div className="champion">
        <p>{name}</p>
        <div className="image">
            <img src={Aatrox} alt=""/>
        </div>  
        {images}
    </div>
)}

export default Champion;