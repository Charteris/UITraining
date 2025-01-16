/**
 * Main application for executing the website
 * @author Lachlan Charteris
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import MorphingText from './morphing-text/morphing-text';
import VerticalMenu from './elegant-vertical-menu/elegant-vertical-menu';
import ImageTracer from './image-tracer/image-tracer';
import GlowingCards from './glowing-cards/glowing-cards';
import TextEffect from './text-effect/text-effect';

import './index.css'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <TextEffect />
);
