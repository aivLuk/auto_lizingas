import React from 'react';
import './Question1.css';

function Question1(props) {
    return (
        <div>
            <div className='inputArea'>
                <p>Automobilio kaina</p>
                <input type='text' value={props.val}></input>
                <p>EUR</p>
            </div>
            <div className='buttons'>
                <div className='button' onClick={props.clicked}>Tęsti</div>
            </div>

        </div>
    )
}

export default Question1;