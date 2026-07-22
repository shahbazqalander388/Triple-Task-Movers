// Utility: className merger (no clsx needed)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
