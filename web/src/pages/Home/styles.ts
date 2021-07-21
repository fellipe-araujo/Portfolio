import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 18rem 20rem;

  position: relative;

  @media screen and (max-width: 767px) {
    padding: 10rem 3rem;
  }
`;

const HomeTitle = styled.h1`
  background: linear-gradient(150deg, #ffffff 0%, #39393a 30%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  font-size: 5rem;

  @media screen and (max-width: 767px) {
    background: linear-gradient(150deg, #ffffff 0%, #39393a 70%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    font-size: 3rem;
  }
`;

const HomeSubtitle = styled(HomeTitle)`
  font-size: 4rem;
  margin-top: 2rem;
`;

const HomeProjectsList = styled.div`
  width: 95%;
  /* overflow-x: scroll; */

  /* display: flex;
  flex-direction: row; */
  /* justify-content: center; */
  /* flex-wrap: wrap; */

  .home-project-link {
    margin: 5rem 10rem;
    text-decoration: none;
  }

  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-dots {
    position: relative;
    margin-bottom: 3rem;
  }

  .slick-dots li {
    width: 1rem;
    height: 1rem;
  }

  .slick-dots .slick-active {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background-color: #9b79fc;
  }

  .slick-prev:before,
  .slick-next:before {
    content: '';
  }

  @media screen and (max-width: 767px) {
    justify-content: flex-start;
    flex-wrap: nowrap;

    align-self: center;

    .home-project-link:nth-child(n + 2) {
      margin: 5rem 0 5rem 4rem;
    }

    .home-project-link:nth-child(1) {
      margin: 5rem 0;
    }

    .slick-dots {
      position: absolute;
      bottom: 0;
    }
  }

  /* @media screen and (max-width: 1420px) {
    .home-project-link {
      margin: 5rem 4rem;
    }
  } */
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

  @media screen and (max-width: 1100px) {
    flex-direction: column;

    .home-techs-box {
      align-self: center;
    }

    .home-techs-box:nth-child(n + 2) {
      margin-top: 2rem;
    }
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

  @media screen and (max-width: 1100px) {
    .home-about-me-header {
      margin: 5rem 0 10rem;
      padding: 0 1rem;

      flex-direction: column;
      align-items: center;
      /* align-self: center; */
    }

    .home-about-me-image {
      width: 30rem;
      margin-bottom: 3rem;
    }

    .home-about-me-text {
      margin: 0;
    }
  }

  @media screen and (max-width: 767px) {
    .home-about-me-image {
      width: 20rem;
    }

    .home-about-me-timeline {
      flex-direction: column;
    }
  }
`;

const HomeAchievements = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    width: 95%;
    align-self: center;
    overflow-x: scroll;
  }
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
