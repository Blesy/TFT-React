import React from 'react';
import '../../assets/styles/components/filters/Select.scss';

const F_Spatula = () => (
    <div className="f-select">
        <p>Espatula</p>
        <select name="espatula" id="espatula">
            <option value="any">Cualquiera</option>
            <option value="1">SI</option>
            <option value="0">No</option>
        </select>
    </div>
);

export default F_Spatula;