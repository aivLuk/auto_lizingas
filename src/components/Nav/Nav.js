import React from 'react';
import './Nav.css';

function Nav(props) {
    return (
        <div className='main'>
            <h1>Automobilio lizingo paraiška</h1>
            <div className='NavContainer'>
                <span className='active'>1</span>
                <span className={props.q1show === true ? '' : 'active'}>2</span>
                <span className={props.q1show === true || props.q2show === true ? '' : 'active'}>3</span>
                <span className={props.q4show === true ? 'active' : ''}>4</span>
            </div>
            <div className='line'></div>
        </div>
    )
}

export default Nav;