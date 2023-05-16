import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const listStyle = {
    listStyle: 'none',
  };

  return (
    <ul>
      {movies.length > 0 &&
        movies.map(movie => {
          return (
            <li key={movie.id} style={listStyle}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesList;
