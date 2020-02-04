import React from 'react';
import './Error.css';

function Error(props) {
    if (props.val < 8000 || props.val4 < 0 || props.val4 > 10) {
        return (
            <p className='err'>NETEISINGA VERTĖ!</p>
        )
    } else {
        return null
    }

}

export default Error;