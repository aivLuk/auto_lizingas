import React from 'react';
import './Question2.css';

function Question2(props) {
    return (
        <div>
            <div className='inputArea'>
                <p><strong>Paskolos terminas</strong></p>
                <select onChange={props.changed}>
                    <option value='1'>1 metai</option>
                    <option value='2'>2 metai</option>
                    <option value='3'>3 metai</option>
                    <option value='4'>4 metai</option>
                    <option value='5'>5 metai</option>
                    <option value='6'>6 metai</option>
                    <option value='7'>7 metai</option>
                </select>
                <p><strong>metai</strong></p>
            </div>
            <div className='buttons'>
                <div className='button' onClick={props.clickedBack}>Grįžti</div>
                <div className='button' onClick={props.clickedContinue}>Tęsti</div>
            </div>

        </div>
    )
}

export default Question2;