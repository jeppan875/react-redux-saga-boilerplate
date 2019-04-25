import { DISPATCH_ACTION } from './constants'

const initialState = {
    p: 'init'
}

export default function frontReducer(state = initialState, action) {
    switch (action.type) {
        case DISPATCH_ACTION:
            return {
                ...state,
                p: 'front page'
            };

        default:
            return state;
    }
}