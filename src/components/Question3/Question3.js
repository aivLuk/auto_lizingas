import React from 'react';
import './Question3.css';

function Question3(props) {
    return (
        <div>
            <div className='inputArea'>
                <p><strong>Pradinis įnašas</strong></p>
                <select onChange={props.changed}>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                </select>
                <p><strong>%</strong></p>
                <input type='text' value={(props.valTotal * props.val / 100).toFixed(2)}></input>
                <p><strong>EUR</strong></p>
            </div>
            <div className='buttons'>
                <div className='button' onClick={props.clickedBack}>Grįžti</div>
                <div className='button' onClick={props.clickedContinue}>Tęsti</div>
            </div>

        </div>
    )
}

export default Question3;