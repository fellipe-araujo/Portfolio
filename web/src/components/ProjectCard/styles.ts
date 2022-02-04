import styled from 'styled-components';

export const Container = styled.div`
  width: 30rem;
  height: 50rem;
  background: ${({ theme }) => theme.colors.background_secondary};
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

  @media screen and (max-width: 767px) {
    width: 28rem;
    margin: 3rem 1rem;
  }
`;

export const PlatformTag = styled.div`
  position: absolute;
  right: 0.5rem;
  top: -2rem;

  border-radius: 0.3rem;
  padding: 0.3rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.1);

  &:nth-child(2) {
    right: 6rem;
  }
`;

export const PlatformTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.8rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 15rem;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h2`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: 1rem;
`;

export const ProjectDescriptionContent = styled.div`
  max-height: 15rem;
  margin: 2rem 1rem;
  overflow: hidden;

  position: relative;

  .readmore {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    background-image: linear-gradient(to bottom, transparent, #202024);
  }
`;

export const ProjectDescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1rem;
  text-align: justify;
`;

export const ProjectSeparator = styled.div`
  width: 20%;
  height: 0.5rem;
  margin: 1rem 0;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.text_detail};

  align-self: center;
`;

export const ProjectStacksContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 1rem;
  align-self: center;
`;
