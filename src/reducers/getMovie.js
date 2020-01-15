import { GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR } from '../actions/getMovie';

const initialState = {
  pending: false,
  movie: null,
  error: null
}

export function getMovieReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        pending: false,
        movie: action.movie 
      }
    case GET_MOVIE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}
