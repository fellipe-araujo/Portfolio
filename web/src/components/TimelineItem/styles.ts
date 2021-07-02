import styled from 'styled-components';

const TimelineItemContainer = styled.div`
  width: 20rem;
  /* height: 13rem; */
  margin: 1rem 2rem;
  
  position: relative;

  display: flex;
  flex-direction: column;

  .item-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .item-header-effect {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: absolute;
    right: 0;
  }

  .item-header-effect-circle {
    width: .7rem;
    height: .4rem;
    border-radius: 1rem;
    background-color: #61dafb;

    /* position: absolute; */
    /* left: -.7rem;
    top: .8rem; */
  }

  .item-header-effect-line {
    width: 10rem;
    height: 0.2rem;
    background: linear-gradient(
      to right,
      rgba(97, 218, 251, 1),
      rgba(155, 121, 252, 0.5),
      rgba(14, 21, 36, 1)
    );
  }
`;

export { TimelineItemContainer };
