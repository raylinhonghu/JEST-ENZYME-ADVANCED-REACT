import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

import Root from 'Root'

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})

it('shows a comment box using plain jest', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Root>
            <App />
        </Root>
        , div);

    // expect(div.innerHTML).toContain('CommentBox')

    ReactDOM.unmountComponentAtNode(div);
})


it('shows a comment box and comment list component using enzyme', () => {

    expect(wrapped.find(CommentBox).length + wrapped.find(CommentList).length).toEqual(2);

})

