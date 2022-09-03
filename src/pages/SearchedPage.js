import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const SearchedPage = () => {
  const [loading, setLoading] = useState(false);
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  const params = useParams();

  const getSearched = async (name) => {
    setLoading(true);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipe(recipes.results);
    setLoading(false);
  };

  useEffect(() => {
    getSearched(params.query);
  }, [params.query]);

  return (
    <Grid>
      {loading && <h3 style={{ textAlign: 'center' }}>Loading...</h3>}
      {searchedRecipe &&
        searchedRecipe.map((recipe) => (
          <Card key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt='' />
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
    color: #444;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchedPage;
