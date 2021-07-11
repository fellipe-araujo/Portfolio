import styled from 'styled-components';

const ProjectContainer = styled.div`
  width: 70%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  .project-carousel-container {
    width: 50rem;
    margin: 5rem 0;
  }

  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-center {
    -webkit-transform: scale(1.25);
    -moz-transform: scale(1.25);
    transform: scale(1.25);
  }

  .project-carousel-content {
    
  }

  .project-carousel-image {
    width: 25rem;
    /* transition: transform .2s; */
  }

  .project-carousel-image:hover {
    /* transform: scale(1.5);
    z-index: 1000; */
    width: 50rem;
  }
`;

export { ProjectContainer };
