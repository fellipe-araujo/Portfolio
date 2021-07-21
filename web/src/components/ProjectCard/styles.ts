import styled from 'styled-components';

interface PlatformProps {
  platform: string;
}

const ProjectContainer = styled.div`
  width: 30rem;
  height: 50rem;
  background: #0A0F1A;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: transform 0.5s;

  position: relative;

  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 2rem rgba(255, 255, 255, 0.1);
  }

  .project-card-platform-tag + .project-card-platform-tag {
    right: 7rem;
  }

  .project-card-platform-tag-title {
    color: #fff;
  }

  .project-card-image {
    width: 100%;
    height: 15rem;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }

  @media screen and (max-width: 767px) {
    width: 28rem;
    margin: 3rem 1rem;
    box-shadow: 0 0 2rem rgba(255, 255, 255, 0.1);

    &:hover {
      transform: scale(1);
    }
  }
`;

const PlatformTag = styled.div<PlatformProps>`
  position: absolute;
  right: 0.5rem;
  top: -2rem;

  border-radius: 0.3rem;
  padding: 0.3rem 0.5rem;
  background-color: ${(props) => props.platform};
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.1);

  &:nth-child(2) {
    right: 6rem;
  }

  .project-card-platform-tag-title {
    font-size: 1.8rem;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;

  .project-card-title {
    color: #fff;
    text-align: center;
    margin-top: 1rem;
  }

  .project-card-description-content {
    max-height: 15rem;
    margin: 2rem 1rem;
    overflow: hidden;

    position: relative;
  }

  .project-card-description-text {
    color: #fff;
    margin-top: 1rem;
    text-align: justify;
  }

  .readmore {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    background-image: linear-gradient(to bottom, transparent, #0A0F1A);
  }

  .project-card-separator {
    width: 20%;
    height: 0.5rem;
    margin: 1rem 0;
    border-radius: 1rem;
    background: linear-gradient(90deg, #61dafb 0%, #9b79fc 100%);

    align-self: center;
  }

  .project-card-stacks-content {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export { ProjectContainer, PlatformTag, ProjectContent };
