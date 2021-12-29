import React from 'react';
import InnerContainer from '../../component/InnerContainer/InnerContainer';
import StoryContainer from '../../component/StoryContainer/StoryContainer';
import DifferentTransition from './DifferentTransition';

export default {
  title: 'animation/02',
  component: DifferentTransition,
};

export const UXImprovement = () => (
  <StoryContainer
    title="Action 전후로 다른 animation 효과 주기"
    description="Action의 성질을 고려해 전후로 animation 효과를 다르게 주면 UX를 향상시킬 수 있다."
    link={['https://www.joshwcomeau.com/animation/css-transitions/#action-driven-motion']}
  >
    <InnerContainer title="동일한 경우">
      <DifferentTransition />
    </InnerContainer>
    <InnerContainer title="다르게 한 경우">
      <DifferentTransition type="different" />
    </InnerContainer>
  </StoryContainer>
);
