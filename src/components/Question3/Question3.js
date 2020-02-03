import React from 'react';
import './Question3.css';

function Question3(props) {
    return (
        <div>
            <div className='inputArea'>
                <p>Pradinis įnašas</p>
                <select>
                    <option value='10'>{props.val}</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                </select>
                <p>%</p>
                <input type='text' value={(props.valTotal * props.val / 100).toFixed(2)}></input>
                <p>EUR</p>
            </div>
            <div className='buttons'>
                <div className='button' onClick={props.clickedBack}>Atgal</div>
                <div className='button' onClick={props.clickedContinue}>Tęsti</div>
            </div>

        </div>
    )
}

export default Question3;