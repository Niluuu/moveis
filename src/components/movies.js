import React, { Component } from "react";
import { Row, Col } from "antd";
import play from "../img/play-button.png";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import { Link } from "react-router-dom";

class Movies extends Component {
  componentWillMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    const { movies, movie } = this.props;
    console.log("movie", movie);

    return (
      <div className="movie-section">
        <Row gutter={[32, 32]}>
          {movies &&
            movies.map(movie => (
              <MovieList
                {...movie}
                key={movie.id}
                getMoveData={() => this.getMoveData(movie.id)}
              />
            ))}
        </Row>
      </div>
    );
  }
}

const MovieList = ({ id, title, backdrop_path, release_date }) => {
  return (
    <Col span={6} className="movie-cart" key={id}>
      <Link to={`watch/${id}`}>
        <div
          className="movie-img"
          style={{
            background:
              backdrop_path === null
                ? "#eee"
                : `url("https://image.tmdb.org/t/p/w342${backdrop_path}")`
          }}
        ></div>
        <img src={play} />
        <div class="movie-caption">
          <h3 class="title">{title}</h3>
          <div class="movie-info">
            <span class="movie-year">{release_date.substr(0, 4)}</span>
            <span class="movie-ganre"></span>
          </div>
        </div>
      </Link>
    </Col>
  );
};

const mapStateToProps = state => ({
  error: state.moviesReducer.error,
  movies: state.moviesReducer.movies,
  pending: state.moviesReducer.pending,
  movie: state.getMovieReducer.movie
});

export default connect(mapStateToProps)(Movies);
