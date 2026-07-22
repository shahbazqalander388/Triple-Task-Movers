import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = true,
  className,
}) {
  return (
    <div className={cn('mb-16', center && 'text-center', className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            'inline-block text-sm font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full backdrop-blur-sm border',
            light
              ? 'text-green-300 bg-white/10 border-white/20'
              : 'text-primary-600 bg-primary-50 border-primary-100'
          )}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'font-display font-bold leading-tight',
          'text-3xl sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'mt-5 text-lg max-w-2xl',
            center && 'mx-auto',
            light ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
