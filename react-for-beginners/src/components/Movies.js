import PropTypes from "prop-types";

function Movies({medium_cover_image, title, summary, genres}) {
    return(
      <div>
        <div>
          <img src={medium_cover_image} alt={title} />
          <h2>{title}</h2>
          <p>{summary}</p>
          <ul>
            {genres.map(g => 
            <li key={g}>{g}</li>
            )}
          </ul>
        </div>
      </div>
    )
} 

Movies.propTypes = {
    medium_cover_image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movies;