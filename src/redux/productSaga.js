import { put, takeEvery } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant';

function* getProductsList() {
    let data = yield fetch('http://localhost:3500/product');
    data = yield data.json();
    yield put({type: SET_PRODUCT_LIST, data})
}

function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProductsList);
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}


export default productSaga;