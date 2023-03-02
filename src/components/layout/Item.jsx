import React from "react";
import './Item.css'

export default props => {

    return (
        <div className="contador" style={{
                backgroundColor: props.bgColor || '#0005',
            }}>
            <svg class='circle' xmlns="http://www.w3.org/2000/svg" version="1.1" width="43px" height="43px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="21.5" cy="21.5" r="20" stroke={props.color || 'aliceblue'} stroke-linecap="round" />
            </svg>
            <div className="icon">{props.children}</div>
        </div>
    )
}
