import React from 'react';
import ColorBox from './ColorBox';
import './styles/Palette.css';


export default function Palette(props) {
    const colorBoxes = props.colors.map(color => (
        <ColorBox background={color.color} name={color.name} />
    ))
    return (
        <div className='Palette'>
            {/* Navbar goes here */}
            <div className='Palette-colors'>
            {/* A bunch of color boxes */}
            {colorBoxes}
            </div>
            {/* footer eventually */}
        </div>
    )
}