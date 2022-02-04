import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
  padding: 0 20rem;

  @media screen and (max-width: 1460px) {
    padding: 0 10rem;
  }

  @media screen and (max-width: 1220px) {
    flex-direction: column-reverse;
    margin-top: 0;
    padding: 0;
  }
`;

export const WelcomeWrapper = styled.div`
  @media screen and (max-width: 1220px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 5rem;
  }

  @media screen and (max-width: 767px) {
    margin-top: 0;
  }
`;

export const WelcomeText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.main};

  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const WelcomeTitle = styled.h2`
  font-size: 4rem;
  font-weight: 300;
  line-height: 4.6rem;

  color: ${({ theme }) => theme.colors.text};

  margin: 1rem 0;

  @media screen and (max-width: 1220px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

export const WelcomeOccupation = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text_detail};

  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const ProfileBox = styled.div`
  width: 25rem;
  height: 25rem;

  border-radius: 50%;
  border: 0.3rem solid transparent;
  background-image: linear-gradient(135deg, #121214 50%, #00b37e 100%),
    linear-gradient(117deg, transparent 34%, #00b37e);
  background-origin: border-box;
  background-clip: content-box, border-box;

  overflow: hidden;

  @media screen and (max-width: 767px) {
    width: 13rem;
    height: 13rem;

    margin: 3rem 0;
  }
`;

export const Image = styled.img`
  width: 25rem;

  @media screen and (max-width: 767px) {
    width: 13rem;
  }
`;
