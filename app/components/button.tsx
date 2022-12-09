import { type ReactNode } from 'react';

export type Props = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  children?: ReactNode;
};

type ButtonVariant = 'ghost' | 'link' | 'outline';
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

export default function Button({ variant, color, size, children }: Props) {
  // Note: the code is very repeatitive and can be replaced with string interpolation (For example: `btn-${variant}`).
  // But string interpolation will prevent Tailwind and PostCSS from including the classes used
  // Because of that, repeatition is a must until a better solution
  return (
    <button
      className={
        'btn' +
        ' ' +
        (variant === 'ghost'
          ? 'btn-ghost'
          : variant === 'link'
          ? 'btn-link'
          : variant === 'outline'
          ? 'btn-outline'
          : '') +
        ' ' +
        (color === 'primary'
          ? 'btn-primary'
          : color === 'secondary'
          ? 'btn-secondary'
          : color === 'accent'
          ? 'btn-accent'
          : color === 'info'
          ? 'btn-info'
          : color === 'success'
          ? 'btn-success'
          : color === 'warning'
          ? 'btn-warning'
          : color === 'error'
          ? 'btn-error'
          : '') +
        ' ' +
        (size === 'lg'
          ? 'btn-lg'
          : size === 'md'
          ? 'btn-md'
          : size === 'sm'
          ? 'btn-sm'
          : size === 'xs'
          ? 'btn-xs'
          : '')
      }
    >
      {children}
    </button>
  );
}
