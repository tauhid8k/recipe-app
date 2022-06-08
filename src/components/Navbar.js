import styled from "styled-components";
import { ImSpoonKnife } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Link to="/" className="logo">
        <ImSpoonKnife /> Recipes
      </Link>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  .logo {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export default Navbar;
