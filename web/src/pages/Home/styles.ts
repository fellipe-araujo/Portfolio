import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 18rem 20rem;

  position: relative;

  @media screen and (max-width: 767px) {
    padding: 10rem 3rem;
  }
`;

export const SectionTitle = styled.h2`
  background: linear-gradient(150deg, #ffffff 0%, #39393a 30%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  font-size: 4rem;
  font-weight: 300;

  @media screen and (max-width: 767px) {
    background: linear-gradient(150deg, #ffffff 0%, #39393a 70%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    font-size: 3rem;
  }
`;

export const ProjectsList = styled.div`
  width: 95%;

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
    background-color: ${({ theme }) => theme.colors.main};
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
`;

export const Technologies = styled.div`
  margin: 3rem 0;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const TechnologiesBox = styled.div`
  width: 25rem;

  .home-techs-box-icon:nth-child(n + 2) {
    margin-left: 1rem;
  }

  @media screen and (max-width: 1100px) {
    align-self: center;

    &:nth-child(n + 2) {
      margin-top: 5rem;
    }
  }
`;

export const TechnologiesSectionTitle = styled.h2``;

export const TechnologiesSectionDescription = styled.p`
  margin-top: 1rem;
`;

export const AboutMe = styled.div``;

export const AboutMeHeader = styled.div`
  margin: 10rem 0;
  padding: 0 15rem;

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1100px) {
    margin: 5rem 0;
    padding: 0 1rem;

    flex-direction: column;
    align-items: center;
  }
`;

export const AboutMeImage = styled.img`
  width: 40rem;

  @media screen and (max-width: 1100px) {
    width: 30rem;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 767px) {
    width: 20rem;
  }
`;

export const AboutMeDescription = styled.p`
  font-size: 2rem;
  text-align: justify;
  margin-left: 10rem;

  @media screen and (max-width: 1100px) {
    margin: 0;
    text-align: center;
  }
`;

export const AboutMeTimeline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const AboutMeTimelineItem = styled.p`
  margin: 1rem 0;
`;

export const Achievements = styled.div`
  padding: 2rem 0;

  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    width: 95%;
    align-self: center;
    overflow-x: scroll;

    padding-bottom: 5rem;
  }
`;
