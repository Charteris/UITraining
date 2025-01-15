/**
 * Builds the homepage instance for the morphing text example
 * Hyperplexed video: https://www.youtube.com/watch?v=dhfQnmGXSwU&list=PLD9xos4mnoHSIDnJjGmhRrxRmHGS8nF91
 * @author Lachlan Charteris
 */

import React, { useState, useEffect } from 'react'
import './morphing-text.css'

type Style = { configuration: number, roundness: number };

const STYLE_COMBINATIONS: Style[] = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

const MorphingText = () => {
  const [styleIndex, setStyleIndex] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      let newIndex = Math.floor(Math.random() * (STYLE_COMBINATIONS.length - 2));
      if (newIndex === styleIndex) {
        newIndex = STYLE_COMBINATIONS.length - 1;
      }
      setStyleIndex(newIndex);
    }, 3000);
  }, []);

  const style = STYLE_COMBINATIONS[styleIndex];
  return (
    <div id="wrapper" data-configuration={style.configuration} data-roundness={style.roundness}>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  )
}

export default MorphingText;