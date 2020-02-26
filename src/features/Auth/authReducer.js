import { AsyncStorage } from 'react-native';
import { auth, database, provider } from '../../config';

export const LOGGED_IN_SUCCESS = 'auth/LOGGED_IN_SUCCESS';
export const LOGGED_IN_REQUEST = 'auth/LOGGED_IN_REQUEST';
export const LOGGED_IN_FAILURE = 'auth/LOGGED_IN_FAILURE';
export const LOGGED_OUT = 'auth/LOGGED_OUT';

const initialState = { isLoggedIn: false, user: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN_REQUEST:
      return { ...state, loading: true };
    case LOGGED_IN_SUCCESS:
      const { user } = action;

      AsyncStorage.multiSet([
        ['user', JSON.stringify(user)]
      ]);

      return {
        ...state, isLoggedIn: true, loading: false, user
      };
    case LOGGED_IN_FAILURE:
      return { ...state, loading: false, error: 'Error while authenticating' };
    case LOGGED_OUT:
      AsyncStorage.multiRemove(['user']);
      return {
        ...state, isLoggedIn: false, loading: false, user: null
      };
    default:
      return state;
  }
}

// Register
export function register({ email, password, username }) {
  return (dispatch) => {
    dispatch({ type: LOGGED_IN_REQUEST });
    auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const user = { username, uid: res.user.uid };
        const userRef = database.ref().child('users');

        userRef.child(user.uid).update({ ...user })
          .then(() => {
            dispatch({ type: LOGGED_IN_SUCCESS, user });
            return user;
          })
          .catch(() => dispatch({ type: LOGGED_IN_FAILURE }));
      })
      .catch(() => dispatch({ type: LOGGED_IN_FAILURE }));
  };
}

export function login(data) {
  return (dispatch) => {
    dispatch({ type: LOGGED_IN_REQUEST });
    const { email, password } = data;
    auth.signInWithEmailAndPassword(email, password)
      .then((resp) => {
        // Get the user object from the realtime database
        let { user } = resp;
        database.ref('users').child(user.uid).once('value')
          .then((snapshot) => {
            const exists = (snapshot.val() !== null);

            // if the user exist in the DB, replace the user variable with the returned snapshot
            if (exists) user = snapshot.val();

            if (exists) dispatch({ type: LOGGED_IN_SUCCESS, user });
          })
          .catch(() => dispatch({ type: LOGGED_IN_FAILURE }));
      })
      .catch(() => dispatch({ type: LOGGED_IN_FAILURE }));
  };
}

export function checkLoginStatus(callback) {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      const isLoggedIn = (user !== null);

      if (isLoggedIn) {
        // Get the user object from the realtime database
        database.ref('users').child(user.uid).once('value')
          .then((snapshot) => {
            const exists = (snapshot.val() !== null);

            // if the user exist in the DB, replace the user variable with the returned snapshot
            if (exists) {
              user = snapshot.val();
            }

            if (exists) dispatch({ type: LOGGED_IN_SUCCESS, user });
            callback(exists, isLoggedIn);
          })
          .catch(() => {
            // unable to get user
            dispatch({ type: LOGGED_OUT });
            callback(false, false);
          });
      } else {
        dispatch({ type: LOGGED_OUT });
        callback(false, isLoggedIn);
      }
    });
  };
}
