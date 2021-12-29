import React from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => (
  <div className={styles.tooltip} data-tooltip={content}>
    {children}
  </div>
);

export default Tooltip;
