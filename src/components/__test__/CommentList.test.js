import React from 'react'
import CommentList from 'components/CommentList'

import { mount } from 'enzyme'
import Root from 'Root'

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['new comment1', 'new comment2','bew comment3']
    }

    wrapped = mount(
        <Root initialState={initialState} >
            <CommentList/>
        </Root>
    )
})

it('shows comments', () => {
    expect(wrapped.find('li').length).toEqual(3)
})

it('shows each comment is visible', ()=>{
    expect(wrapped.render().text()).toContain('new comment1');
    expect(wrapped.render().text()).toContain('new comment2');
    expect(wrapped.render().text()).toContain('bew comment3');

})