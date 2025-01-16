/**
 * Builds the homepage instance for the Glowing Cards example
 * Hyperplexed video: https://www.youtube.com/watch?v=NUeCNvYY_x4&list=PLD9xos4mnoHSIDnJjGmhRrxRmHGS8nF91&index=3
 * @author Lachlan Charteris
 */

import React, { useCallback, useState } from 'react';

import './glowing-cards.css'

type MouseProperties = React.CSSProperties & {
  "--mouse-x": string
  "--mouse-y": string
}

const GlowingCards = () => {
  const [relativeMousePos, setRelativeMousePos] = useState<MouseProperties[]>(
    [1, 2, 3, 4, 5, 6].map(() => ({ "--mouse-x": '0px', "--mouse-y": '0px' }))
  );

  const onMouseMove = useCallback((event: React.MouseEvent) => {
    const newMousePositions = [...relativeMousePos];
    const cardElements = document.getElementsByClassName("card");

    Array.from(cardElements).forEach((card, index) => {
      const boundingBox = card.getBoundingClientRect();
      const x = event.clientX - boundingBox.left;
      const y = event.clientY - boundingBox.top;
      newMousePositions[index] = { "--mouse-x": `${x}px`, "--mouse-y": `${y}px` };
    });

    setRelativeMousePos(newMousePositions);
  }, [relativeMousePos, setRelativeMousePos]);

  return (
    <div id="cards" onMouseMove={onMouseMove}>
      {relativeMousePos.map((mousePos) => (
        <div className="card" style={mousePos}>
          <div className="card-border"></div>
          <div className="card-content"></div>
        </div>
      ))}
    </div>
  );
};

export default GlowingCards;