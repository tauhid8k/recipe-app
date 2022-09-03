import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Recipe = () => {
  const [detail, setDetail] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  const params = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detail = await data.json();
      setDetail(detail);
    };
    getRecipe();
  }, []);

  return (
    <DetailWrapper>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt='' />
      </div>
      <Info>
        <Button
          className={`${activeTab === 'instructions' ? 'active' : ''}`}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button
          className={`${activeTab === 'ingredients' ? 'active' : ''}`}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <Text>
            <h3 dangerouslySetInnerHTML={{ __html: detail.summary }}></h3>
          </Text>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {detail.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  h2 {
    margin-bottom: 1rem;
  }
  img {
    border-radius: 1rem;
  }
  ul {
    margin-top: 1rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  .active {
    background-color: #313131;
    color: white;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 5rem;
`;

const Text = styled.div`
  h3 {
    font-weight: 400;
  }
`;

export default Recipe;
