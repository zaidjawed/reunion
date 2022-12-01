import { createSelector } from 'reselect';
const selectApp = (state) => state;

export const getDataList = () => createSelector(selectApp, (appState) => appState.get('data').toJS());

export const getFilterDataList = () => createSelector(selectApp, (appState) => appState.get('filterData').toJS());