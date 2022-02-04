import styled from 'styled-components';

export const SeparatorContainer = styled.div`
  width: 10rem;
  height: 0.5rem;
  margin: 3rem 0;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.main};
  align-self: flex-start;
`;
