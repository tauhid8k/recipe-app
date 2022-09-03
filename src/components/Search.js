import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  div {
    position: relative;
    width: 50%;
    @media (max-width: 500px) {
      width: 80%;
    }
    input {
      width: 100%;
      border: 0;
      background: #444;
      font-size: 1.5rem;
      color: white;
      border-radius: 1rem;
      outline: none;
      padding: 1rem 4rem;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color: white;
      font-size: 1.5rem;
    }
  }
`;

export default Search;
