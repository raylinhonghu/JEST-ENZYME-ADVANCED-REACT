import { ADD_COMMENT, FETCH_COMMENT } from 'action/types'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.payload]

        case FETCH_COMMENT:
            return [...state, ...action.payload.data.map((comment)=>{
                return comment.name
            })]
        default:
            return state;
    }
}