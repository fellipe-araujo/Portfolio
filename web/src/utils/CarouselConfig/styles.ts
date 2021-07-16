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
  border: .1rem ${(props) => props.border} solid;
`;

const CustomArrow = styled.div<ArrowProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 5rem;
  background-color: ${(props) => props.background};
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.background};
  }
`;

export { CustomPagingDots, CustomArrow };
