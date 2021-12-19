import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoryContainer from './StoryContainer';
import styles from './StoryContainer.module.scss';
import InnerContainer from '../InnerContainer/InnerContainer';

export default {
  title: 'Components/StoryContainer',
  component: StoryContainer,
  args: {
    title: 'Sample Container',
    description: 'This is a sample container',
    link: ['https://61be96a83e681e003a6a7d72-tfgvminstk.chromatic.com/', 'https://61be96a83e681e003a6a7d72-tfgvminstk.chromatic.com/'],
    children: (
      <>
        <InnerContainer title="sample 1">
          <div className={styles.story}>sample1</div>
        </InnerContainer>
        <InnerContainer title="sample 2">
          <div className={styles.story}>sample2</div>
        </InnerContainer>
        <InnerContainer title="sample 3">
          <div className={styles.story}>sample3</div>
        </InnerContainer>
      </>
    ),
  },
} as ComponentMeta<typeof StoryContainer>;

const Template: ComponentStory<typeof StoryContainer> = (args) => <StoryContainer {...args} />;

export const Default = Template.bind({});
