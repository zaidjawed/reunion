import {
  GET_DATA,
  GET_FILTER_DATA,
} from '../constants/app';

//==============================================
// QUESTION
//==============================================

export const getData = () => ({
  type: GET_DATA,
})

export const getFilterData = (data) => ({
  type: GET_FILTER_DATA,
  data: data
})