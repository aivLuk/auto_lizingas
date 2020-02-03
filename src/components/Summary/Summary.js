import React from 'react';
import './Summary.css';

function Summary(props) {
    return (
        <div className='summaryContainer'>
            <h3 style={{ color: '#EE7023' }}>Jūsų suvesti duomenys</h3>
            <div className='resultContainer'>
                <p>Automobilio kaina: <strong>{props.valFirst} EUR</strong></p>
                <p>Paskolos terminas: <strong>{props.valSecond} metai</strong></p>
                <p>Pradinis įnašas: <strong>{props.valThird} %</strong></p>
                <p>Palūkanos per metus: <strong>{props.valFourth} %</strong></p>
            </div>
        </div>
    )
}

export default Summary;