import styled from 'styled-components';

const StackTagContainer = styled.div`
  padding: .5rem;
  margin: .4rem 1rem;
  border: .2rem solid ${props => props.color};
  border-radius: 100rem;
  /* background-color: ${props => props.color}; */

  .stack-title {
    color: ${props => props.color};
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export { StackTagContainer };
