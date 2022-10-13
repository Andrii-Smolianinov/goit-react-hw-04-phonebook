import styled from 'styled-components';

export const ContactUl = styled.ul`
  text-align: left;
  .button {
  background-color: #fff;
  width: fit-content;
  padding: 3px 5px;
  border-radius: 5px;
  margin: 0 auto;
  border: 2px solid rgba(33, 33, 33, 0.2);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 10px;
}

.button:hover {
  cursor: pointer;
}

.button:active {
  border-color: #4ca6ff;
}
`;




