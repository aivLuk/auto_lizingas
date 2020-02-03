import React from 'react';
import './Question2.css';

function Question2(props) {
    return (
        <div>
            <div className='inputArea'>
                <p>Paskolos terminas</p>
                <select>
                    <option value='1'>{props.val}</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                </select>
                <p>Metai</p>
            </div>
            <div className='buttons'>
                <div className='button' onClick={props.clickedBack}>Atgal</div>
                <div className='button' onClick={props.clickedContinue}>Tęsti</div>
            </div>

        </div>
    )
}

export default Question2;