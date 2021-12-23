import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Margin from './Margin';
import StoryContainer from '../../component/StoryContainer/StoryContainer';
import InnerContainer from '../../component/InnerContainer/InnerContainer';

export default {
  title: 'Tips/Margin and Transform',
  component: Margin,
} as ComponentMeta<typeof Margin>;

const Template: ComponentStory<typeof Margin> = (args) => (
  <StoryContainer
    title="Margin과 Transform의 렌더링 효율 차이"
    description="margin을 조정하면 매 프레임마다 layout을 새로 하기 때문에 렌더링 효율이 크게 떨어진다.\n
    개발자 도구-성능에서 CPU 성능을 낮춘 후 record하면 margin을 조정하는 case에서\n
    렌더링이 계속 새로 일어나고 프레임 드랍이 일어나는 것을 확인할 수 있다.\n
    작은 요소에서는 상관없지만 페이지 전체에 영향을 미치는 컴포넌트의 경우\n
    렌더링 효율에 영향을 미치지 않는 Transform을 이용하는 편이 좋겠다."
    link={['https://youtu.be/4PStxeSIL9I']}
  >
    <InnerContainer>
      <Margin {...args} />
    </InnerContainer>
  </StoryContainer>
);

export const MarginExample = Template.bind({});
MarginExample.args = {
  type: 'margin',
};

export const TransformExample = Template.bind({});
TransformExample.args = {
  type: 'transform',
};
