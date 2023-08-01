import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Select, MenuItem, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles/Navbar.css';

export default function Navbar(props) {

    const [format, setFormat] = useState('hex'); 
    const [open, toggleOpen] = useState(false); 
    const {level, setLevel, showSlider } = props; 

    const handleFormatChange = (e) => {
        // console.log(e.target.value)
        setFormat(e.target.value); 
        toggleOpen(true); 
        props.handleFormatChange(e.target.value);
    }

    const closeSnackbar = () => {
        toggleOpen(false); 
    }

    return(
        <header className='Navbar'>
            <div className='logo'>
                <Link to='/'>reactcolorpicker</Link>
                
            </div>
            {showSlider && (
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
                </div>)
            }   
            <div className='select-container'>
                <Select value={format} onChange={handleFormatChange}>
                    <MenuItem value='hex'>HEX - #FFFFFF</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar 
                anchorOrigin={{vertical: 'bottom', horizontal:'left'}} 
                open={open}
                autoHideDuration={3000}
                message={
                    <span>
                        Format changed to {format.toUpperCase()}! 
                    </span>
                }
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                onClose={closeSnackbar}
                action={[
                    <IconButton 
                        onClick={closeSnackbar} 
                        color='inherit' 
                        key='close' 
                        aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                ]}/>
        </header>
    )
}