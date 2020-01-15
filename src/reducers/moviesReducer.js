import { FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../actions/fetchMovies';

const initialState = {
  pending: false,
  movies: null,
  error: null
}

export function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        movies: action.movies.results 
      }
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}
