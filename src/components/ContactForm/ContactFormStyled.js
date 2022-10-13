import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;
  display: inline-flex;
  flex-direction: column;
  padding: 8px;
  .label {
    margin-bottom: 15px;
  }
  .input {
    margin-bottom: 15px;
    border: 2px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .button {
    background-color: #fff;
    width: fit-content;
    padding: 5px 8px;
    border-radius: 5px;
    margin: 0 auto;
    border: 2px solid rgba(33, 33, 33, 0.2);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .button:hover {
    cursor: pointer;
  }

  .button:active {
    border-color: #4ca6ff;
  }

  .input:focus {
    border-color: #4ca6ff;
  }
`;
