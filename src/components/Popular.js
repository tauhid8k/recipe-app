import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const checkPopular = localStorage.getItem('popular');
    if (checkPopular) {
      setPopular(JSON.parse(checkPopular));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
      );
      const data = await api.json();
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <Wrapper>
        <h3>Popular Pics</h3>
        <Grid>
          {popular.map((recipe) => (
            <Card key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Link>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 1rem;
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Card = styled.div`
  flex: 1 1 20%;
  min-height: 25rem;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  @media (max-width: 1024px) {
    flex: 1 1 30%;
  }
  @media (max-width: 768px) {
    flex: 1 1 45%;
  }
  @media (max-width: 500px) {
    flex: 1 1 100%;
  }
  img {
    border-radius: 10px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    padding: 0 0.2rem;
    position: absolute;
    left: 50%;
    bottom: -5%;
    z-index: 10;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
