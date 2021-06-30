import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 8rem;

  .home-separator {
    width: 10rem;
    height: 0.5rem;
    margin: 3rem 0;
    border-radius: 1rem;
    background: linear-gradient(90deg, #61dafb 0%, #9b79fc 100%);
  }
`;

const HomeTitle = styled.h1`
  /* background: linear-gradient(90deg, #ffffff 0%, #0e1524 50%);
  -webkit-text-fill-color: transparent;
  background-clip: text; */

  font-size: 5rem;
`;

const HomeSubtitle = styled(HomeTitle)`
  font-size: 4rem;
  margin-top: 2rem;
`;

const HomeProjectsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export { HomeContainer, HomeTitle, HomeSubtitle, HomeProjectsList };
