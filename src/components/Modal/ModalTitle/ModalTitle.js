import React from 'react';
import './ModalTitle.css';

const ModalTitle = (props) => {
    return (
        <div className={'ModalTitle'}>
            <h2 style={{padding: '20px',margin: '2px'}}>{props.title}</h2>
            {props.children}
        </div>
    );
};

export default ModalTitle;