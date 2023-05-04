import React from 'react';
import "./alert.css"

function Alert(props) {
    return (props.trigger) ? (
        <div className="alert">
            <div className="alert-inner">
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Alert;