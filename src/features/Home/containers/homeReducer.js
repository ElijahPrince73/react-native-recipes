export const GET_LATEST_MEALS = 'meals/LOAD';
export const GET_LATEST_MEALS_SUCCESS = 'meals/LOAD_SUCCESS';
export const GET_LATEST_MEALS_FAIL = 'meals/LOAD_FAIL';

export default function reducer(state = { meals: [] }, action) {
  switch (action.type) {
    case GET_LATEST_MEALS:
      return { ...state, loading: true };
    case GET_LATEST_MEALS_SUCCESS:
      return { ...state, loading: false, meals: action.payload.data.meals };
    case GET_LATEST_MEALS_FAIL:
      return { ...state, laoding: false, error: 'Error while fetching meals' };
    default:
      return state;
  }
}

export function listLatestMeals() {
  return {
    type: GET_LATEST_MEALS,
    payload: {
      request: {
        url: 'search.php?f=a'
      }
    }
  };
}
