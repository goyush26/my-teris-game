import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 30px 0;
  padding: 15px;
  border: 2px solid #700270;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : '#b8cbe5')};
  background: #262424;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;
