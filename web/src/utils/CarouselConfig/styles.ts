import styled from 'styled-components';

interface PlatformProps {
  border?: string;
}

interface ArrowProps {
  background?: string;
}

const CustomPagingDots = styled.div<PlatformProps>`
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  border: .1rem ${({ theme }) => theme.colors.main} solid;
`;

const CustomArrow = styled.div<ArrowProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.main};
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
  }
`;

export { CustomPagingDots, CustomArrow };
