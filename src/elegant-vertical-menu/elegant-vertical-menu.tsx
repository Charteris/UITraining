/**
 * Builds the homepage instance for the elegant vertical menu example
 * Hyperplexed video: https://www.youtube.com/watch?v=NUeCNvYY_x4&list=PLD9xos4mnoHSIDnJjGmhRrxRmHGS8nF91&index=3
 * @author Lachlan Charteris
 */

import React, { useState } from 'react'
import './elegant-vertical-menu.css'

const MENU_ITEMS = ['Home', 'Shop', 'About', 'Contact Us'];

const VerticalMenu = () => {
  const [activeItem, setActiveItem] = useState(-1);

  const patternStyle = { backgroundPosition: `center ${45 + 15 * activeItem}%` };
  const imageStyle = { backgroundPosition: `0% ${100 - 25 * (activeItem + 1)}%` };

  console.log(patternStyle);
  console.log(imageStyle);

  return (
    <div id="menu">
      <div id="menu-items">
        {MENU_ITEMS.map((item, index) => (
          <a
            href="/"
            className="menu-item"
            onMouseEnter={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(-1)}
          >
            {item}
          </a>
        ))}
      </div>
      <div id="menu-background-pattern" style={patternStyle}></div>
      <div id="menu-background-image" style={imageStyle}></div>
    </div >
  );
};

export default VerticalMenu;