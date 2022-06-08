import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <NavLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to="/cuisine/thai">
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0rem;
  a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    &.active {
      color: tomato;
    }
  }
`;

export default Category;
