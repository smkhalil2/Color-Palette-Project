import React from 'react';
import './styles/ColorBox.css'; 

export default function ColorBox(props) {
    return (
        <div className='ColorBox' style={{background: props.background}}>
            <span>{props.name}</span>
            <span>MORE</span>
        </div>
    )
    

}