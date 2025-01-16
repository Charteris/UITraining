/**
 * Builds the homepage instance for the Twitch Hover Card Effect example
 * Hyperplexed video: https://www.youtube.com/watch?v=NUeCNvYY_x4&list=PLD9xos4mnoHSIDnJjGmhRrxRmHGS8nF91&index=3
 * @author Lachlan Charteris
 */

import React from 'react';

import './twitch-hover-card.css'

const Subtitle = ({ text }: { text: string }) => {
  return (
    <h4 className="card-subtitle">
      {text.split(" ").map((word, index) => (
        <span className="card-subtitle-word" style={{ transitionDelay: `${index * 40}ms` }}>
          {word}
        </span>
      ))}
    </h4>
  )
};

const TwitchHoverCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">
          Cool Twitch Hover Card Effect
        </h3>
        <Subtitle text="Boom! Bet you weren't expecting me to pop up here!" />
      </div>
    </div>
  );
};

export default TwitchHoverCard;