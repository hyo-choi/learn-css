import classnames from 'classnames';
import React from 'react';
import styles from './Transition.module.scss';

interface TransitionProps {
  type: 'transition' | 'animation' | 'animation-reverse',
}

const Transition = ({ type }: TransitionProps) => (
  <div className={styles.background}>
    <div className={classnames(styles.box, {
      [styles.transition]: type === 'transition',
      [styles.animation]: type === 'animation',
      [styles.animationReverse]: type === 'animation-reverse',
    })}
    />
  </div>
);

export default Transition;
