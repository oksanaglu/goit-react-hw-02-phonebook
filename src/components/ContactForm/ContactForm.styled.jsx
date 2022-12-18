import styled from 'styled-components';

export const Form = styled.form`
  max-width: 300px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: 3px;

  :hover,
  :focus {
    border-color:  dodgerblue;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;

   :hover {
    background-color: dodgerblue;
  }
`;