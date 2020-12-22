import React from 'react';
import '../../assets/styles/components/filters/Select.scss';

const F_Synergies = () => (
    <div className="f-select">
        <p>Combinacion Sinergia</p>
        <select name="sinergias" id="sinergias">
            <option value="any" selected>Cualquiera</option>
            <option value="16">16</option>
            <option value="17">17</option>
        </select>
    </div>
);

export default F_Synergies;