import React from 'react';
import './Modal.css';

const Modal = props => {
    return (
        <div className={'Modal'} style={{display: props.show ? 'blcok': 'none'}}>
            {props.children}
        </div>
    );
};

export default Modal;