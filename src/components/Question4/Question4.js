import React from 'react';
import './Question4.css';

function Question4(props) {
    return (
        <div>
            <div className='inputArea'>
                <p><strong>Palūkanos</strong></p>
                <input type='text' className='percent' value={props.val} onChange={props.changed}></input>
                <p><strong>% per metus</strong></p>
            </div>
            <div className='buttons'>
                <div className='button' onClick={props.clickedBack}>Grįžti</div>
                <div className='button' onClick={props.clickedContinue}>Baigti</div>
            </div>

        </div>
    )
}

export default Question4;