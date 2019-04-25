import { takeLatest } from 'redux-saga/effects';
import { DISPATCH_SAGA } from './constants'
import { put } from 'redux-saga/effects';
import { frontPageAction } from './actions'

function* initialFetch() {
    yield put(frontPageAction({
        data: 'front page'
    }));
}

export default function* rootSaga() {
    yield takeLatest(DISPATCH_SAGA, initialFetch);
}
