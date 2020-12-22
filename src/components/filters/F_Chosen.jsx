import React from 'react';
import '../../assets/styles/components/filters/Select.scss';

const F_Chosen = () => (
    <div className="f-select">
        <p>Rasgo a priorizar</p>
        <select name="principal" id="principal">
            <option value="any">Cualquiera</option>
            <option value="warlord">Warlord</option>
            <option value="dusk">Dusk</option>
        </select>
    </div>
);

export default F_Chosen;