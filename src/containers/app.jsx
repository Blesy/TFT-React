import React, { useEffect, useState } from 'react';

// Componentes
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Container from '../components/Container';
import Team from '../components/Team';
import Champion from '../components/Champion';
import Synergies from '../components/Synergies';
import Trait from '../components/Trait';
import Champions from '../components/Champions';
import Banner from '../components/Banner';

// Filtros de busqueda
import Filters from '../components/filters/Filters';
import F_Synergies from '../components/filters/F_Synergies';
import F_Chosen from '../components/filters/F_Chosen';
import F_Spatula from '../components/filters/F_Spatula';
import F_Quantity from '../components/filters/F_Quantity';

const App = () => {
    const [ estados, setEstados ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/lista')
        .then(response => response.json())
        .then(data => setEstados(data));
    }, []);

    return (
        <div className="App">
            <Header/>
            <Container>
                <Team>
                    <Champion name="Aatrox" items="true"/>
                </Team>
                <Synergies>
                </Synergies>
                <Champions>
                    {
                        estados.map(item => 
                            <Champion name={item.Nombre} />
                        )
                    }
                </Champions>
                <Filters>
                    <F_Synergies/>
                    <F_Chosen/>
                    <F_Spatula/>
                    <F_Quantity/>
                </Filters>
                <Banner/>
            </Container>
        </div>
    );
}

export default App;