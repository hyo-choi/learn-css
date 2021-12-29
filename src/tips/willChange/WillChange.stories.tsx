import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import WillChange from './WillChange';
import StoryContainer from '../../component/StoryContainer/StoryContainer';
import InnerContainer from '../../component/InnerContainer/InnerContainer';

export default {
  title: 'Tips/Hardware acceleration',
  component: WillChange,
} as ComponentMeta<typeof WillChange>;

const Template: ComponentStory<typeof WillChange> = (args) => (
  <StoryContainer
    title="Hardware acceleration and will-change"
    description="transform과 opacity를 이용해 애니메이션을 넣을 때 CPU는 종종 GPU로 렌더링을 위임하는데\n
    이를 'hardware acceleration'이라고 한다.\n
    CPU와 GPU는 렌더링을 조금(slightly) 다른 방식으로 하기 때문에, CPU와 GPU가 렌더링 책임을\n
    교환할 때마다 처리 방식이 달라져 살짝 다른 형태를 보이게 된다. (레퍼런스 참고)\n
    \n
    이 현상은 will-change라는 CSS property를 추가해 고칠 수 있다.\n
    will-change props를 사용하면 해당 element는 항상 GPU를 통해 렌더링되기 때문에\n
    더이상 CPU와 GPU 사이의 handling-off가 발생하지 않게 된다.\n
    또, GPU를 이용한 sub-pixel rendering을 통해 더 부드럽게 애니메이팅되도록 할 수 있다.\n
    \n
    단, GPU 위임은 video memory를 소비한다. 저성능 기기에서도 문제없이 동작한다는 테스트 결과가\n
    있다고 하니, 움직이지 않는 element에 넓게 적용하지만 않으면 될 것 같다. (최적화는 늘 적재적소에!)"
    link={['https://www.joshwcomeau.com/animation/css-transitions/#hardware-acceleration']}
  >
    <InnerContainer
      title="Not fixed"
    >
      <WillChange {...args} />
    </InnerContainer>
    <InnerContainer
      title="Fixed with Hint"
    >
      <WillChange type="hint" {...args} />
    </InnerContainer>
  </StoryContainer>
);

export const Default = Template.bind({});
