import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

/**
 * Animated placeholder image card.
 * Replace `src` prop with real image URL when ready.
 * Supports lazy loading and skeleton loading state.
 */
export default function ImagePlaceholder({
  src,
  alt = 'Moving service image',
  aspectRatio = 'aspect-[4/3]',
  className,
  index = 0,
}) {
  if (src) {
    return (
      <div className={cn('relative overflow-hidden rounded-2xl', aspectRatio, className)}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        'relative overflow-hidden rounded-2xl group cursor-pointer',
        aspectRatio,
        className
      )}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 skeleton" />

      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skeleton"
        style={{ backgroundSize: '200% 100%' }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-60">
        {/* Animated truck icon */}
        <motion.div
          animate={{ x: [-8, 8] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="text-5xl text-gray-400"
        >
          🚚
        </motion.div>
        <div className="space-y-2 text-center px-4">
          <div className="h-3 w-32 bg-gray-300 rounded-full mx-auto skeleton" />
          <div className="h-2 w-20 bg-gray-200 rounded-full mx-auto skeleton" />
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center"
      >
        <div className="text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
          📷 Image Coming Soon
        </div>
      </motion.div>
    </motion.div>
  );
}
