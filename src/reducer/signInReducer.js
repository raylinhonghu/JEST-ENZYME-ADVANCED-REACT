import { SIGN_IN } from 'action/types'

export default (state = false, action) => {
    switch (action.type) {
        case SIGN_IN:
            return action.payload
        default:
            return state
    }
}