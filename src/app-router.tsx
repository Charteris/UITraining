/**
 * Provides the various routes for each UI/UX example project
 * @author Lachlan Charteris
 */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import VerticalMenu from './elegant-vertical-menu/elegant-vertical-menu';
import TextEffect from './text-effect/text-effect';
import MorphingText from './morphing-text/morphing-text';
import ImageTracer from './image-tracer/image-tracer';
import GlowingCards from './glowing-cards/glowing-cards';
import TwitchHoverCard from './twitch-hover-card/twitch-hover-card';

const ErrorRoute = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", placeItems: "center" }}>
      <h1 className="error-text">There's nothing here: 404!</h1>
      <p className="error-text">(Still a work in progress)</p>
    </div>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="UXIDesignCatalog">
          <Route path="elegant-menu" element={<VerticalMenu />} />
          <Route path="text-effect" element={<TextEffect />} />
          <Route path="morphing-text" element={<MorphingText />} />
          <Route path="image-tracer" element={<ImageTracer />} />
          <Route path="glowing-cards" element={<GlowingCards />} />
          <Route path="hover-card" element={<TwitchHoverCard />} />
          <Route path="*" element={<ErrorRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;