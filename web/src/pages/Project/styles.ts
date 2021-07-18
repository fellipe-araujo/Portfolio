import styled, { css } from 'styled-components';

interface Props {
  web?: boolean;
  mobile?: boolean;
}

const ProjectContainer = styled.div`
  padding: 6rem 13rem 18rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .project-title {
    background: linear-gradient(150deg, #ffffff 2%, #39393a 80%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    align-self: flex-start;
    font-size: 4rem;
  }

  .project-description {
    font-size: 2.4rem;
    margin: 0 1.4rem 3rem;
    text-align: justify;
  }

  .project-subtitle {
    align-self: flex-start;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .project-techs {
    width: 100%;
    margin-bottom: 3rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .project-link {
    align-self: flex-start;
    margin: 0 2rem 3rem;
    font-size: 2.4rem;
    color: #e6e6e6;
  }

  @media screen and (max-width: 767px) {
    padding: 3rem 2rem 12rem;

    .project-title {
      font-size: 3rem;
    }

    .project-subtitle {
      font-size: 2.6rem;
    }

    .project-description,
    .project-link {
      font-size: 2.2rem;
    }

    .project-techs {
      flex-wrap: wrap;
    }
  }
`;

const Platform = styled.div<Props>`
  align-self: flex-start;
  border-radius: 2rem;
  margin: 3rem 0 3rem 5rem;
  padding: 0.5rem 1rem;

  ${(props) =>
    props.web &&
    css`
      background-color: #61dafb;
    `}

  ${(props) =>
    props.mobile &&
    css`
      background-color: #9b79fc;
    `}
  
  @media screen and (max-width: 767px) {
    margin-left: 2rem;
  }
`;

const Carousel = styled.div<Props>`
  width: 70rem;
  margin: 5rem 0;

  .project-carousel-image-web {
    width: 50rem;
  }

  .project-carousel-image-mobile {
    height: 50rem;
  }

  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-dots {
    position: relative;
  }

  .slick-dots li {
    width: 1rem;
    height: 1rem;
  }

  .slick-dots .slick-active {
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
  }

  .slick-prev:before,
  .slick-next:before {
    content: '';
  }

  ${(props) =>
    props.web &&
    css`
      .slick-dots .slick-active {
        background-color: #61dafb;
      }
    `}

  ${(props) =>
    props.mobile &&
    css`
      .slick-dots .slick-active {
        background-color: #9b79fc;
      }
    `}

  @media screen and (max-width: 767px) {
    width: 80%;

    .project-carousel-image-web {
      width: 23rem;
    }

    .project-carousel-image-mobile {
      height: 38rem;
    }
  }
`;

export { ProjectContainer, Platform, Carousel };
