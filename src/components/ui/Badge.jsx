import { cn } from '../../utils/cn';

export default function Badge({ children, variant = 'primary', className }) {
  const variants = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    dark: 'bg-gray-900 text-white',
    light: 'bg-white/10 text-white',
  };

  return (
    <span
      className={cn(
        'inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
