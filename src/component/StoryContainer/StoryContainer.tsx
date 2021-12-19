import React from 'react';
import styles from './StoryContainer.module.scss';

interface StoryContainerProps {
  title: string;
  description: string;
  link: string[];
  children: React.ReactNode;
}

const convertToNewline = (text: string): React.ReactNode => (
  <>
    {text.split('\\n').map((piece) => (
      <span key={piece}>
        {piece}
        <br />
      </span>
    ))}
  </>
);

const StoryContainer = ({
  title, description, link, children,
}: StoryContainerProps) => (
  <section>
    <h1>{title}</h1>
    <p>{convertToNewline(description)}</p>
    <p>
      <b>🔗 References</b>
      <br />
      {link.map((one) => (
        <span key={one}>
          <a className={styles.link} href={one} target="_blank" rel="noreferrer">{one}</a>
          <br />
        </span>
      ))}
    </p>
    <div className={styles.container}>
      {children}
    </div>
  </section>
);

export default StoryContainer;
