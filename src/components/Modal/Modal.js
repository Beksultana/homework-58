import React from 'react';
import './Modal.css';
import ModalTitle from "./ModalTitle/ModalTitle";

const Modal = props => {
    return (
        <div className={'Modal'}>
            <ModalTitle
                title={'Some kinda modal title'}
            >

            </ModalTitle>
            <div className="ModalChild">
                {props.children}
            </div>
        </div>
    );
};

export default Modal;