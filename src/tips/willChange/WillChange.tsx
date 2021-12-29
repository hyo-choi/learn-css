import React from 'react';
import classNames from 'classnames';
import styles from './WillChange.module.scss';

interface WillChangeProps {
  type?: 'hint'
}

const WillChange = ({ type }: WillChangeProps) => (
  <div className={classNames(styles.base, { [styles.withHint]: type })}>
    <div>CONTENT</div>
  </div>
);

WillChange.defaultProps = {
  type: null,
};

export default WillChange;
