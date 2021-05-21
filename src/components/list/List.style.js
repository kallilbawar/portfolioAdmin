import styled from "styled-components";

const MaterialIcon = (props) => (
  <i className={`material-icons ${props.className}`}>account_balance</i>
);

export const List = styled.li`
  list-style-type: none;
  text-align: left;
  font-size: 0.9rem;
  color: 'black';
  font-weight: 300;
  font-family: system-ui;
  padding: 15px;
  cursor: pointer;

`;
const Icon = styled(MaterialIcon)`
  background-color: green;
  font-size: 50px;
`;