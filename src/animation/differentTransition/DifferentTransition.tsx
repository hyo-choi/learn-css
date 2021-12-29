import React, { useCallback, useState } from 'react';
import styles from './DifferentTransition.module.scss';

interface DifferentTransitionProps {
  type?: 'different',
}

const DifferentTransition = ({ type }: DifferentTransitionProps) => {
  const [classNames, setClassNames] = useState<string[]>(type ? [styles.different] : []);
  const onClick = useCallback(() => {
    if (classNames.includes(styles.clicked)) {
      setClassNames((names) => names.filter((name) => name !== styles.clicked));
      return;
    }
    setClassNames((names) => names.concat(styles.clicked));
  }, [classNames]);

  return (
    <div className={styles.template}>
      <div className={classNames.join(' ')}>WOW</div>
      <button type="button" onClick={onClick}>CLICK ME</button>
    </div>
  );
};

DifferentTransition.defaultProps = {
  type: null,
};

export default DifferentTransition;
