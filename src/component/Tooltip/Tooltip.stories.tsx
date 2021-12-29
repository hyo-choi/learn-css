import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './Tooltip';
import styles from './Tooltip.module.scss';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    content: 'content',
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <div className={styles.story}>hover!</div>
  </Tooltip>
);

export const Default = Template.bind({});
