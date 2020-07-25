import {REGISTER} from '../../utility';

const initialState = {
  loading: false,
  isLoggedIn: false,
  userData: null,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER.REGISTER_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
    case REGISTER.REGISTER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        isLoggedIn: true,
        userData: action.payload,
      });
    case REGISTER.REGISTER_FAIL:
      return Object.assign({}, state, {
        loading: false,
      });

    default:
      return state;
  }
}

export default AuthReducer;
