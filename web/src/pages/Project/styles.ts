import styled from 'styled-components';

export const Container = styled.div`
  padding: 6rem 13rem 18rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 3rem 2rem 12rem;
  }
`;

export const ProjectTitle = styled.h2`
  background: linear-gradient(150deg, #ffffff 2%, #39393a 80%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  align-self: flex-start;
  font-size: 4rem;

  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }
`;

export const Carousel = styled.div`
  width: 70rem;
  margin: 5rem 0;

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
    background-color: ${({ theme }) => theme.colors.main};
  }

  .slick-prev:before,
  .slick-next:before {
    content: '';
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

export const ProjectImageWeb = styled.img`
  width: 50rem;

  @media screen and (max-width: 767px) {
    width: 23rem;
  }
`;

export const ProjectImageMobile = styled.img`
  height: 50rem;

  @media screen and (max-width: 767px) {
    height: 38rem;
  }
`;

export const ProjectSubTitle = styled.h3`
  align-self: flex-start;
  font-size: 3.6rem;
  font-weight: 300;
  margin-bottom: 2rem;

  @media screen and (max-width: 767px) {
    font-size: 2.6rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 2rem;
  margin: 0 1.4rem 3rem;
  text-align: justify;
`;

export const ProjectTechs = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const ProjectLink = styled.a`
  align-self: flex-start;
  margin: 0 2rem 3rem;

  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.text_detail};

  cursor: pointer;

  @media screen and (max-width: 767px) {
    font-size: 2.2rem;
  }
`;
