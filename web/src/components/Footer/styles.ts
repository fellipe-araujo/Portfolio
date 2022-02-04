import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3rem 0;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.text_detail}50;
  background-color: ${({ theme }) => theme.colors.background_primary};
  box-shadow: 4rem 0 2rem rgba(0, 0, 0, 0.3);

  position: absolute;
  bottom: 0;
  align-self: center;
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:nth-child(2) {
    margin-left: 4rem;
  }

  @media screen and (max-width: 767px) {
    &:nth-child(2) {
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`;

export const ContactText = styled.p`
  margin-left: 2rem;
  font-size: 2rem;

  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const SocialMediasContent = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
