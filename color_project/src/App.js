import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette'; 

export default function App() {
  // console.log(generatePalette(seedColors[4]))

  const findPalette = id => seedColors.find(palette => palette.id == id); 
  const PaletteWrapper = () => {
    const { id } = useParams(); 
    const palette = generatePalette(findPalette(id)); 

    return <Palette palette={palette} /> 
  };

  const SingleColorPaletteWrapper = () => {
    const { paletteId, colorId } = useParams(); 
    const palette = generatePalette(findPalette(paletteId)); 

    return <SingleColorPalette color={colorId} palette={palette} /> 
  };


  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element={ <PaletteList palettes={seedColors} /> } />
        <Route path='/palette/:id' element={ <PaletteWrapper /> } />
        <Route path='/palette/:paletteId/:colorId' 
              element={<SingleColorPaletteWrapper />}/>
      </Routes>
    </div>
  );
}
