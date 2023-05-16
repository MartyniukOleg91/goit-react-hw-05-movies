import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const listStyle = {
    listStyle: 'none',
    height: 30,
  };

  return (
    <ul>
      {movies.length > 0 &&
        movies.map(movie => {
          return (
            <li key={movie.id} style={listStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <circle cx="12" cy="12" r="10" fill="yellow" />
                <circle cx="8" cy="9" r="2" fill="black">
                  <animate
                    attributeName="cy"
                    dur="1s"
                    repeatCount="indefinite"
                    values="9;15;9"
                  />
                </circle>
                <circle cx="16" cy="9" r="2" fill="black">
                  <animate
                    attributeName="cy"
                    dur="1s"
                    repeatCount="indefinite"
                    values="9;15;9"
                    begin="0.1s"
                  />
                </circle>
                <path
                  d="M8 15h8M9 17h6"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke"
                    dur="1s"
                    repeatCount="indefinite"
                    values="black;red;black"
                  />
                </path>
              </svg>
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
