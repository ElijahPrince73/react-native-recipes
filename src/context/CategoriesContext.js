import createDataContext from '../context/createDataContext'
import api from '../api/meals'

const categoriesReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_categories':
      return action.payload
    default:
      return state
  }
}

const fetchCategories = dispatch => async () => {
  const res = await api.get('/categories.php')
  dispatch({ type: 'fetch_categories', payload: res.data.categories })
}

export const { Provider, Context } = createDataContext(
  categoriesReducer,
  { fetchCategories },
  []
)