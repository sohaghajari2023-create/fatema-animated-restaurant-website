import React, { useEffect, useRef } from 'react';

const frameCount = 239;
const currentFrame = (index: number) => (
  `/video_frames_30fps_jpg/frame_${(index + 1).toString().padStart(4, '0')}.jpg`
);

export default function VideoScrollBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const images: HTMLImageElement[] = [];
    
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = (index: number) => {
      if (images[index] && images[index].complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
      } else if (images[index]) {
        images[index].onload = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(images[index], 0, 0, canvas.width, canvas.height);
        };
      }
    };

    images[0].onload = () => {
      canvas.width = images[0].naturalWidth;
      canvas.height = images[0].naturalHeight;
      // Re-trigger render in case of resize or initial load
      const handleResize = () => {
          canvas.width = images[0].naturalWidth;
          canvas.height = images[0].naturalHeight;
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
          let scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
          const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.floor(scrollFraction * frameCount)));
          render(frameIndex);
      };
      
      window.addEventListener('resize', handleResize);
      render(0);
    };

    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
          
          let scrollFraction = 0;
          if (maxScrollTop > 0) {
            scrollFraction = scrollTop / maxScrollTop;
          }
          
          const frameIndex = Math.min(
            frameCount - 1,
            Math.max(0, Math.floor(scrollFraction * frameCount))
          );
          
          render(frameIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
        // Clean up resize listener if we had one (simplified for this context)
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none"
      style={{ zIndex: -10, imageRendering: 'high-quality' }}
    />
  );
}
