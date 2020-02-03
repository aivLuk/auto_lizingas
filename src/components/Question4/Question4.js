import React from 'react';
import './Question4.css';

function Question4(props) {
    return (
        <div>
            <div className='inputArea'>
                <p>Palūkanos</p>
                <input type='text' value={props.val}></input>
                <p>% per metus</p>
            </div>
            <div className='buttons'>
                <div className='button' onClick={props.clickedBack}>Atgal</div>
                <div className='button' onClick={props.clickedContinue}>Baigti</div>
            </div>

        </div>
    )
}

export default Question4;