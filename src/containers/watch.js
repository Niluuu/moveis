import React, { Component } from "react";
import { connect } from "react-redux";
import "../../node_modules/video-react/dist/video-react.css"; // import css
import { Player, BigPlayButton } from "video-react";
import { getMovie } from "../actions";
import { Row, Col } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
class Watch extends Component {
  componentWillMount() {
    const { params } = this.props.match;

    this.props.dispatch(getMovie(params.id));
  }

  render() {
    const { movie } = this.props;

    return (
      <div>
        {movie && (
          <Row className="watch-header">
            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
              <BigPlayButton position="center" />
            </Player>
            <Row type="flex" justify="center" className="watch-info">
              <Col span={4}>
                <Col span={3} className="movie-cart">
                  <div
                    className="movie-img"
                    style={{
                      background:
                        movie.backdrop_path === null
                          ? "#eee"
                          : `url("https://image.tmdb.org/t/p/w342${movie.backdrop_path}")`
                    }}
                  ></div>
                </Col>
              </Col>
              <Col span={12}>
                <Title level={2}>{movie.original_title}</Title>
                <p>{movie.overview}</p>
                <Col span={8}>
                  <p>
                    <strong>Budget :</strong> {movie.budget}
                  </p>
                  <p>
                    <strong>Renres :</strong>
                    {movie.genres.map(genr => (
                      <> {genr.name} </>
                    ))}
                  </p>
                </Col>
                <Col span={8}>
                  <p>
                    <strong>Release date</strong>: {movie.release_date}
                  </p>
                  <p>
                    <strong>Popularity</strong>: {movie.popularity}
                  </p>
                </Col>
              </Col>
            </Row>
          </Row>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.moviesReducer.error,
  movies: state.moviesReducer.movies,
  pending: state.moviesReducer.pending,
  movie: state.getMovieReducer.movie
});

export default connect(mapStateToProps)(Watch);
