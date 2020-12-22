import React from 'react';
import '../assets/styles/components/Synergies.scss';

const Synergies = ({children}) => (
    <aside className="synergies">
        {children}
        <div className="total">
            <span>Total: ?</span>
        </div>
    </aside>
);

export default Synergies;