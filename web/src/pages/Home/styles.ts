import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 18rem 20rem;

  position: relative;

  .home-separator {
    width: 10rem;
    height: 0.5rem;
    margin: 3rem 0;
    border-radius: 1rem;
    background: linear-gradient(90deg, #61dafb 0%, #9b79fc 100%);
  }
`;

const HomeTitle = styled.h1`
  background: linear-gradient(90deg, #ffffff 0%, #0e1524 50%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

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

  .home-project-link {
    text-decoration: none;
  }
`;

const HomeTechnologies = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  .home-techs-box {
    width: 20rem;
    height: 13rem;
  }

  .home-techs-box-icon:nth-child(n + 2) {
    margin-left: 1rem;
  }

  .home-techs-box-decription {
    margin-top: 1rem;
    text-align: justify;
  }
`;

const HomeAboutMe = styled.div`
  .home-about-me-header {
    margin: 10rem 0;
    padding: 0 15rem;
    
    display: flex;
    flex-direction: row;
  }

  .home-about-me-image {
    width: 40rem;
  }

  .home-about-me-text {
    font-size: 2.4rem;
    text-align: justify;
    margin-left: 10rem;
    /* margin: 2rem 0 5rem 0; */
  }

  .home-about-me-timeline {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .home-about-me-timeline-item {
    text-align: justify;
    margin: 1rem 0;
  }
`;

const HomeAchievements = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
`;

export {
  HomeContainer,
  HomeTitle,
  HomeSubtitle,
  HomeProjectsList,
  HomeTechnologies,
  HomeAboutMe,
  HomeAchievements,
};
