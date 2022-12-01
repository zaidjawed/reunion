import { takeLatest, all, put } from 'redux-saga/effects';
import falseData from '../dummy/data.json';

import {
  GET_DATA,
  GET_FILTER_DATA,
  SET_DATA,
  SET_FILTER_DATA
} from '../constants/app';

function* getData(action) {
  try {
    yield put({ type: SET_DATA, data: falseData });
    yield put({ type: SET_FILTER_DATA, data: falseData });
  } catch (e) {
    console.log(e);
  }
}

function* getFilterData(action) {
  let {data, filter} = action.data;
  let keys = Object.keys(filter);
  let res = [];

  for(let val of data){
    let push = true;

    for(let key of keys){
      if(filter[key] == "") continue;

      if(key == 'price'){
        let arr = filter[key].split("-");
        
        if(val.price > arr[1]*1 || val.price < arr[0]*1) push = false;
      }
      else {
        if(val[key] != filter[key]) push = false;
      }

      if(!push) break;
    }

    if(push) res.push(val);
  }

  try {
    yield put({ type: SET_FILTER_DATA, data: res });
  } catch (e) {
    console.log(e);
  }
}

export default function* appSaga() {
  yield all([yield takeLatest(GET_DATA, getData)]);
  yield all([yield takeLatest(GET_FILTER_DATA, getFilterData)]);
}