import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    > svg {
      width: 2rem;
    }
  }
`;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.main};
  cursor: pointer;

  &:nth-child(n + 2) {
    margin-left: 2rem;
  }

  @media screen and (max-width: 767px) {
    width: 2rem;
  }
`;
