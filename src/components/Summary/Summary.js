import React from 'react';
import './Summary.css';

function Summary(props) {
    return (
        <div>
            <h3>Jūsų Suvesti Duomenys</h3>
            <h4>Automobilio kaina: {props.valFirst}</h4>
            <h4>Paskolos terminas metais: {props.valSecond}</h4>
            <h4>Pradinis įnašas procentais: {props.valThird}</h4>
            <h4>Palūkanos procentais per metus: {props.valFourth}</h4>
        </div>
    )
}

export default Summary;