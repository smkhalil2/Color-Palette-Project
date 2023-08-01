import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid'; 
import './styles/MiniPalette.css';


function MiniPalette({ colors, id, paletteName, emoji }) {
   
    const history = useNavigate(); 
    const handleClick = e => {
        e.preventDefault(); 
        history(`/palette/${id}`)
    }
   
    const miniColorBoxes = colors.map(color => (
        <div 
            className={'miniColor'} 
            style={{backgroundColor: color.color}} 
            key={color.name}
        />
    ));

    return (
        <div className={'miniPalette-root'} onClick={handleClick}>
            <div className={'colors'}>
                {miniColorBoxes}
            </div>
            <h5 
            className={'title'}>
                { paletteName } <span className={'emoji'}>{ emoji }</span>
            </h5>
        </div>
    )
}

export default MiniPalette; 