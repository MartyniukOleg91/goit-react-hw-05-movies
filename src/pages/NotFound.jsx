import { useNavigate } from 'react-router-dom';
import { NotFoundContainer, HomeButton } from './Styles/NotFound.styled';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <NotFoundContainer>
      <h1>Page not found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <HomeButton type="button" onClick={handleGoHome}>
        Go home
      </HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;
