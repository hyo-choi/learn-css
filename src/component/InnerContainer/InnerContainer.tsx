import React from 'react';
import styles from './InnerContainer.module.scss';

interface InnerContainerProps {
  title?: string;
  children: React.ReactNode;
}

const InnerContainer = ({ title, children }: InnerContainerProps) => (
  <div className={styles.container}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

InnerContainer.defaultProps = {
  title: null,
};

export default InnerContainer;
