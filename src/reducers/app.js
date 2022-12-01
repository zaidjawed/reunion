import { fromJS } from 'immutable';

import {
  SET_DATA,
  SET_FILTER_DATA
} from '../constants/app';

const initialState = fromJS({
  data: [],
  filterData: []
})

const AppReducer = (state = initialState, action) => {
	switch (action.type) {    
    case SET_DATA:
      return state
      .set('data', fromJS(action.data));
    
    case SET_FILTER_DATA:
      return state
      .set('filterData', fromJS(action.data));

    default:
      return state;
  }
};

export default AppReducer;