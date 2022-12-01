import React from 'react';
import 'antd/dist/reset.css';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './reducers/app';
import appSaga from './sagas/app';

import Navbar from './components//Navbar';
import Rent from './pages/Rent';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(appSaga);

const CustomRouter = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Rent />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default CustomRouter;