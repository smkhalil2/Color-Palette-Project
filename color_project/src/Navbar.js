import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/Navbar.css';

export default function Navbar(props) {
    const {level, setLevel} = props; 
    return(
        <header className='Navbar'>
            <div className='logo'>
                <a href='#'>reactcolorpicker</a>
            </div>
            <div className='slider-container'>
                <span>Level: {level}</span>
                <div className='slider'>
                    <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900} 
                        step={100}
                        onAfterChange={(level) => setLevel(level)}
                        handleStyle={{
                            backgroundColor:'#4285F4', 
                            outline:'none', 
                            border: '2px solid #4285F4',
                            width: '13px', 
                            height: '13px', 
                            marginLeft: '-7px',
                            marginTop: '-2px'
                        }}
                        trackStyle={{backgroundColor:'transparent'}}
                        railStyle={{height: '8px'}}
                    />  
                </div>
            </div>
            
        </header>
    )
}