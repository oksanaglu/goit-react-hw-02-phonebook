import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 3px;

  :hover,
  :focus {
    border-color:  dodgerblue;
  }

`;