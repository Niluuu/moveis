import { key, baseUrl } from '../utils'
import history from "../history"

export const GET_MOVIE_PENDING = 'GET_MOVIE_PENDING';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';

function getMoviePending() {
    return {
        type: GET_MOVIE_PENDING
    }
}

function getMovieSuccess(movie) {
    return {
        type: GET_MOVIE_SUCCESS,
        movie: movie
    }
}

function getMovieError(error) {
    return {
        type: GET_MOVIE_ERROR,
        error: error
    }
}

// https://api.themoviedb.org/3/movie/11688?api_key=734c266a171652e992c46bc914cb2185&language=en-US

export function getMovie(id) {
    return dispatch => {
        dispatch(getMoviePending());
        fetch(`${baseUrl}/movie/${id}?api_key=${key}&language=en-US`)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(getMovieSuccess(res));
                return res;
            })
            .then(res => history.push(`watch`))
            .catch(error => {
                dispatch(getMovieError(error));
            })
    }
}
