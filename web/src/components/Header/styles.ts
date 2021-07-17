import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  border-bottom: 0.1rem solid #39393A50;
  background-color: #0e1524;

  position: fixed;
  top: 0;
  z-index: 1000;
  align-self: center;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .header-menu {
    display: flex;
    flex-direction: row;
  }

  .header-menu-item:nth-child(n + 2) {
    margin-left: 4rem;
  }

  .header-menu-subtitle {
    font-weight: 400;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    justify-content: space-around;

    .header-menu {
      display: none;
    }
  }
`;

export { HeaderContainer };
