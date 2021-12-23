import React from 'react';
import classNames from 'classnames';
import styles from './Margin.module.scss';

interface MarginProps {
  type: 'margin' | 'transform',
}

const Margin = ({ type }: MarginProps) => (
  <div className={classNames(styles.base, type === 'margin' ? styles.margin : styles.transform)}>
    <div />
  </div>
);

export default Margin;
