import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestComponent from './TestComponent';

export default {
  title: 'components/TestComponent',
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

const Template: ComponentStory<typeof TestComponent> = (args: any) => <TestComponent {...args} />;

export const Default = Template.bind({});
