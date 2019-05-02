import React from 'react'

import { ADD_COMMENT } from 'action/types'
import { addComment } from 'action'


describe('addComment', () => {
    it('has the correct type', () => {
        let action = addComment()
        expect(action.type).toEqual(ADD_COMMENT)
    })

    it('has the correct payload', () => {
        let action = addComment('new comment')
        expect(action.payload).toEqual('new comment')
    })
})