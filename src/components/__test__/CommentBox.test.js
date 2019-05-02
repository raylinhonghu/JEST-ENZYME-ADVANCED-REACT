import React from 'react'
import { mount, unmount } from 'enzyme'
import CommentBox from 'components/CommentBox';
import { WSAEPROTONOSUPPORT } from 'constants';
import { wrap } from 'module';
import { descriptions } from 'jest-config';

import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    )
})

afterEach(() => {
    wrapped.unmount();
})

it('shows a textarea and 2 buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area ', () => {
    beforeEach(() => {
        expect(wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        }));
        wrapped.update();
    })

    it('shows a textarea that user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    })

    it('submits and empty the textarea', () => {
        expect(wrapped.find('form').simulate('submit'))
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})

