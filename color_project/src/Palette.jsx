import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './styles/Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';


export default function Palette(props) {
    const {colors, id, paletteName, emoji } = props.palette; 
    // console.log(paletteName); 
    const [level, setLevel] = useState(500); 
    const [format, setFormat] = useState('hex'); 
    const colorBoxes = colors[level].map(color => (
        <ColorBox 
            background={color[format]} 
            name={color.name}  
            key={color.id}
            showFullPalette={true}
            moreUrl={`${id}/${color.id}`}
            />
    ))

    const changeFormat = val => {
        setFormat(val); 
    }


    return (
        <div className='Palette'>
            <Navbar 
                level={level} 
                setLevel={setLevel} 
                handleFormatChange={changeFormat}
                showSlider={true}
            />
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    )
}