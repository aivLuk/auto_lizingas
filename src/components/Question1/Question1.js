import React from 'react';
import './Question1.css';

function Question1(props) {
    return (
        <div>
            <div className='inputArea'>
                <p><strong>Automobilio kaina</strong></p>
                <input type='number' value={props.val} onChange={props.changed}></input>
                <p><strong>EUR</strong></p>
            </div>
            <div className='buttons'>
                <div className='button' onClick={props.clicked}>Tęsti</div>
            </div>

        </div>
    )
}

export default Question1;