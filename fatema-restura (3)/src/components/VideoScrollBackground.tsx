import React, { useEffect, useRef } from 'react';

const FRAME_COUNT = 239;
const PRELOAD_BEFORE_START = 15;

const framePath = (i: number) =>
  `/video_frames_30fps_jpg/frame_${String(i + 1).padStart(4, '0')}.jpg`;

export default function VideoScrollBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadedCount = 0;
    let started = false;
    let currentIndex = 0;
    let ticking = false;

    function setCanvasSize() {
      const first = images[0];
      if (first && first.naturalWidth) {
        canvas!.width = first.naturalWidth;
        canvas!.height = first.naturalHeight;
      } else {
        canvas!.width = window.innerWidth;
        canvas!.height = window.innerHeight;
      }
    }

    function drawFrame(index: number) {
      const img = images[index];
      if (!img) return;
      if (img.complete && img.naturalWidth) {
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
        const scale = Math.max(
          canvas!.width / img.naturalWidth,
          canvas!.height / img.naturalHeight
        );
        const w = img.naturalWidth * scale;
        const h = img.naturalHeight * scale;
        const x = (canvas!.width - w) / 2;
        const y = (canvas!.height - h) / 2;
        ctx!.drawImage(img, x, y, w, h);
      } else {
        img.onload = () => {
          if (currentIndex === index) drawFrame(index);
        };
      }
    }

    function onFrameLoaded() {
      loadedCount++;
      if (!started && loadedCount >= PRELOAD_BEFORE_START) {
        started = true;
        setCanvasSize();
        drawFrame(0);
      }
    }

    // Set onload BEFORE src to avoid race condition on CDN/cached loads
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.onload = onFrameLoaded;
      img.onerror = onFrameLoaded;
      img.src = framePath(i);
      images[i] = img;
    }

    function handleResize() {
      setCanvasSize();
      drawFrame(currentIndex);
    }

    function handleScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const fraction = maxScroll > 0 ? scrollTop / maxScroll : 0;
        currentIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(fraction * FRAME_COUNT)));
        drawFrame(currentIndex);
        ticking = false;
      });
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
      }}
    />
  );
}
