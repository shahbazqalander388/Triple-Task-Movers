import { useEffect, useRef, useState } from 'react';

export default function AnimatedCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch devices
    const check = () => setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let animId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = `${followerX}px`;
        followerRef.current.style.top = `${followerY}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onMouseOver);
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor${isHovering ? ' cursor-hover' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={followerRef}
        className="custom-cursor-follower"
        aria-hidden="true"
      />
    </>
  );
}
