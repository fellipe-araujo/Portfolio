import styled from 'styled-components';

const AchievementContainer = styled.div`
  width: 18rem;
  height: 10rem;
  border-radius: .8rem;
  padding: 1rem;
  background-color: #293245;

  &:nth-child(n + 2) {
    margin-left: 2rem;
  }

  .achievements-card-description {
    margin-top: 1rem;
  }
`;

export { AchievementContainer };
