import {restClient} from '../../helpers';
import {REGISTER, ENDPOINTS} from '../../utility';
/**
 * API calling to register new user.
 */

export function register(data) {
  const method = 'post';
  const endPoint = '';
  const reqParam = data;
  return async (dispatch) => {
    dispatch({type: REGISTER.REGISTER_REQUEST, payload: data});
    try {
      const response = await restClient()[`${method}`](endPoint, reqParam);
      if (response.status === 200) {
        dispatch({
          type: REGISTER.REGISTER_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({type: REGISTER.REGISTER_FAIL, payload: response});
      }
    } catch (err) {
      dispatch({type: REGISTER.REGISTER_FAIL, payload: err});
    }
  };
}
