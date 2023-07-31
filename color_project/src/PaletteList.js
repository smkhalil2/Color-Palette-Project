import React from 'react';
import { NavLink } from 'react-router-dom';
import MiniPalette from './MiniPalette';

export default function PaletteList(props) { 
    const { palettes } = props; 

    return (
        <div> 
            <MiniPalette />
            <h1>React Colors</h1>
            {palettes.map(palette => (
                <p>
                <NavLink to={`/palette/${palette.id}`}>{palette.paletteName}</NavLink>
                </p>
            ))}
        </div>
    )
}
// className={(navData) => navData.isActive ? 'active-link' : ''}