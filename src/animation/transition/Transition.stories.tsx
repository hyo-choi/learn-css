import React from 'react';
import InnerContainer from '../../component/InnerContainer/InnerContainer';
import StoryContainer from '../../component/StoryContainer/StoryContainer';
import Transition from './Transition';

export default {
  title: 'animation/01',
  component: Transition,
};

export const TransitionAndAnimation = () => (
  <StoryContainer
    title="Transition and Animation"
    description="Transition과 Animation의 차이 공부\n
    animation으로 transition보다 많은 것을 할 수 있다."
    link={['https://youtu.be/YszONjKpgg4', 'https://www.joshwcomeau.com/animation/css-transitions/']}
  >
    <InnerContainer title="Transition">
      <Transition type="transition" />
    </InnerContainer>
    <InnerContainer title="Animation">
      <Transition type="animation" />
    </InnerContainer>
  </StoryContainer>
);

export const ReverseAnimation = () => (
  <StoryContainer
    title="Hover out시 animation 역행 처리"
    description="transition을 사용하면 reverse animation이 매끄럽게 처리되는데 keyframes를 사용한 경우 역행이 자연스럽지는 못한 것 같다.\n
    페이지 진입 시 역행 애니메이션이 재생되는 현상은 처음 mouseover됐을 때 JS로 className을 넣는 식으로 해결하는 듯하다.\n
    역행이 필요한 경우 가능하면 animation보다 transition을 사용하거나 JS를 함께 사용하는 편이 낫겠다."
    link={['https://www.geeksforgeeks.org/how-to-reverse-an-animation-on-mouse-out-after-hover/',
      'https://codepen.io/navdeepsingh/pen/oEwyqP']}
  >
    <InnerContainer>
      <Transition type="animation-reverse" />
    </InnerContainer>
  </StoryContainer>
);
