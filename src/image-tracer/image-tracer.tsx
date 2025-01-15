/**
 * Builds the homepage instance for the images tracing example
 * Hyperplexed video: https://www.youtube.com/watch?v=Jt3A2lNN2aE&list=PLD9xos4mnoHSIDnJjGmhRrxRmHGS8nF91&index=4
 * @author Lachlan Charteris
 */

import React, { useCallback, useState, MouseEvent } from 'react';

import './image-tracer.css'

type MousePos = {
  x: number
  y: number
};

type Image = {
  src: string
  status: string
  style: {
    left: string
    top: string
  }
};

const IMAGES = [
  "https://images.unsplash.com/photo-1726047336166-5634aaa136c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1566942974683-0a1aa5d212f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1592493552901-9f0ef0d6f702?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1524411051586-1f9b0140e370?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1675045578062-7539d488c25e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713284060723-5be78613225f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const ImageTracer = () => {
  const [lastMousePos, setLastMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const [imageIndex, setImageIndex] = useState(0);
  const [imageStyle, setImageStyle] = useState<Image[]>(
    IMAGES.map((image) => ({
      src: image, status: 'inactive', style: { left: '0px', top: '0px' }
    }))
  );

  const onMouseMove = useCallback((event: MouseEvent) => {
    const mousePos: MousePos = { x: event.clientX, y: event.clientY };
    if (Math.hypot(mousePos.x - lastMousePos.x, mousePos.y - lastMousePos.y) > 100) {
      const newImageStyle = [...imageStyle];

      const newIndex = (imageIndex + 1) % IMAGES.length;
      newImageStyle[newIndex].status = 'active';
      newImageStyle[newIndex].style = { left: `${event.clientX}px`, top: `${event.clientY}px` };

      // const trailIndex = (imageIndex + IMAGES.length - 5) % IMAGES.length;
      // newImageStyle[trailIndex].status = 'inactive';

      setLastMousePos(mousePos);
      setImageIndex(newIndex);
      setImageStyle(newImageStyle);
    }
  }, [lastMousePos, imageIndex, imageStyle, setLastMousePos, setImageIndex, setImageStyle]);

  return (
    <div onMouseMove={onMouseMove}>
      {imageStyle.map(({ src, status, style }, index) => (
        <img className="image" data-index={index} data-status={status} src={src} style={{ zIndex: 1, ...style }} />
      ))}
    </div>
  );
};

export default ImageTracer;