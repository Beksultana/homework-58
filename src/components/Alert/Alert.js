import React from 'react';
import './Alert.css';
const Alert = (props) => {

    const AlertCss = ['alert'];
    AlertCss.push('alert-' + props.type);

    return (
        <div className={AlertCss.join(' ')}>
            {props.children}
            <button>x</button>
        </div>
    );
};

export default Alert;