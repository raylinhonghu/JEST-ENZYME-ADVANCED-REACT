import React from 'react'

import commentsReducer from 'reducer/commentsReducer'
import { ADD_COMMENT } from 'action/types'

it('handles action ADD_COMMENT', () => {
    let comment = {
        type: ADD_COMMENT,
        payload: 'new Comment'
    }

    let newState = commentsReducer([],comment)

    expect(newState).toEqual(['new Comment'])
})

it('handles action with unknow type',()=>{
    let newState = commentsReducer([], {})

    expect(newState).toEqual([])
})