import styled from 'styled-components';

export const Container = styled.div`
  width: 18rem;
  border-radius: 0.8rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background_secondary};

  &:nth-child(n + 2) {
    margin-left: 2rem;
  }

  @media screen and (max-width: 767px) {
    min-width: 18rem;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.main};
`;

export const Description = styled.p`
  margin-top: 1rem;
`;
