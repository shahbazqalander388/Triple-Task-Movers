import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Card({ children, className, glass = false, hover = true, ...props }) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl overflow-hidden transition-all duration-300',
        glass
          ? 'backdrop-blur-md bg-white/10 border border-white/20 shadow-glass'
          : 'bg-white border border-gray-100 shadow-card',
        hover && 'hover:-translate-y-2 hover:shadow-card-hover',
        className
      )}
      whileHover={hover ? { y: -8, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
