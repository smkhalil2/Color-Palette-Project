import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import "./styles/ColorBox.css";


function ColorBox({ name, background, moreUrl, showFullPalette }) {
  const [copied, setCopied] = useState(false);
//   const classes = useStyles(); 
  const isLightColor = chroma(background).luminance() >= 0.12;

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div className={`ColorBox ${showFullPalette ? 'quarterHeight' : 'halfHeight'}`} style={{ background: background }}>
        <div
          className={`copyOverlay ${copied && 'showCopyOverlay'}`}
          style={{ background: background }}
        />
        <div className={`copyMessage ${copied && 'showCopyMessage'}`}>
          <h1>copied!</h1>
          <p className={isLightColor ? 'darkText' : 'lightText'}>{background}</p>
        </div>
        <div>
          <div className='boxContent'>
            <span className={isLightColor ? 'darkText' : 'lightText'}>{name}</span>
          </div>
          <button className={`copyButton ${isLightColor ? 'darkBackground' : 'lightBackground'}`} style={{color: background}}>COPY</button>
        </div>
        {showFullPalette && (
          <NavLink
            to={`/palette/${moreUrl}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={`seeMore ${isLightColor ? 'darkBackground' : 'lightBackground'}`} style={{ color: background }}>MORE</span>
          </NavLink>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox; 
