import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3rem 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.text_detail}50;
  background-color: #121214;
  box-shadow: 4rem 0 2rem rgba(0, 0, 0, 0.3);

  position: fixed;
  top: 0;
  z-index: 1000;
  align-self: center;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PortfolioLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > svg {
    margin-right: 2rem;
  }

  @media screen and (max-width: 767px) {
    > svg {
      width: 2rem;
      margin-right: 1rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;

  .header-menu-item:nth-child(n + 2) {
    margin-left: 4rem;
  }

  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const HeaderMenuTitle = styled.h2`
  font-weight: 300;
  font-size: 1.8rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: #00b37e;
    transition: color 400ms linear;
  }

  @media screen and (max-width: 1017px) {
    font-size: 1.8rem;
  }
`;
