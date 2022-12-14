import styled from 'styled-components';

export const ContactDiv = styled.div`
  & label {
    margin-bottom: 15px;
    display: block;
  }
  & input {
    margin-bottom: 15px;
    border: 2px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  & input:focus {
    border-color: #4ca6ff;
  }
`;
