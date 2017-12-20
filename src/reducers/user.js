import { handleActions } from 'redux-actions';
import * as actions from '../actions/main';

const initialState = {
  user: null,
};

export default handleActions({
  [actions.setUser]: (state, action) => ({ ...state, user: action.payload }),
}, initialState);
