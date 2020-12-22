import React from 'react';
import '../../assets/styles/components/filters/Select.scss';

const F_Quantity = () => (
    <div className="f-select">
        <p>N° de campeones</p>
        <select name="cantidad" id="cantidad">
            <option value="any">Cualquiera</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </select>
    </div>
);

export default F_Quantity;