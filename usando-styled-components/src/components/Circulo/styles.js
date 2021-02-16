import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 4px 4px 4px 4px ${props => props.corSombra};
  background: red;
  border: 2px solid purple;
  border-radius: 50%;
  width: 200px;
  height: 200px;

  &:hover {
    background: purple;
    border-color: red;
  }
`;

export default Container;
