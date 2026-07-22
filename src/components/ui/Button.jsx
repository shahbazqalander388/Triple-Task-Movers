import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { cn } from '../../utils/cn';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  icon,
  external,
  type = 'button',
  ...props
}) {
  const [ripples, setRipples] = useState([]);
  const btnRef = useRef(null);

  const handleClick = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
    onClick && onClick(e);
  };

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base rounded-full text-primary-600 hover:bg-primary-50 transition-all duration-300 active:scale-95 cursor-pointer',
    'outline-dark': 'inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer',
  };

  const sizes = {
    sm: '!px-5 !py-2.5 !text-sm',
    md: '',
    lg: '!px-10 !py-5 !text-lg',
  };

  const cls = cn(variants[variant], sizes[size], className);

  const inner = (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
          style={{ left: r.x, top: r.y, width: 10, height: 10, transform: 'translate(-50%, -50%)' }}
        />
      ))}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cls}
        ref={btnRef}
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={btnRef}
      type={type}
      className={cls}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {inner}
    </motion.button>
  );
}
