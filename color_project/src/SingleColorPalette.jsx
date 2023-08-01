import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import Navbar from './Navbar';


function getShades(palette, colorToFilterBy) {
    let shades = []; 
    let allColors = palette.colors; 
    // console.log(allColors)
    for (let key in allColors) {
        shades = shades.concat(
            allColors[key].filter(color => color.id === colorToFilterBy)
        )
    }
    return shades.slice(1); 
}


function SingleColorPalette(props) {
    const [format, setFormat ] = useState('hex'); 
    const { palette, color } = props; 
    const { paletteName, emoji, id } = palette; 
    const _shades = getShades(palette, color);
    const colorBoxes = _shades.map(color => (
        <ColorBox key={color.name} name={color.name} background={color[format]} showMore={false} /> 
    ))

    const changeFormat = val => {
        setFormat(val); 
    }

    
    return (
        <div className='SingleColorPalette Palette'>
            <Navbar showSlider={false} handleFormatChange={changeFormat}/>
            <div className='Palette-colors'>
                {colorBoxes}
                <div className="ColorBox goBack">
                    <Link to={ `/palette/${id}` } className='backButton'>
                        GO BACK
                    </Link>
                </div>
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
    )
}


export default SingleColorPalette; 