import type { ReactNode } from 'react';

export interface RavexButtonProps {
  variant: 'primary' | 'secondary' | 'quiet';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export interface RavexCardProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export interface RavexTagProps {
  label: string;
  tone?: 'neutral' | 'accent' | 'royal';
  onRemove?: () => void;
}
