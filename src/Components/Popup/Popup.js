import React from "react";
import "./Popup.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Popup = (props) =>{
    return   (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="poppu_heading">
                    <h2>{props.heading}</h2>
                    <button className="close-btn" onClick={() => props.setTrigger(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    ) : null;
}

export default Popup;