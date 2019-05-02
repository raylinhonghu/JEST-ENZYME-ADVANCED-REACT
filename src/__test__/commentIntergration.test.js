import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import App from 'components/App'
import Root from 'Root'

let wrapped

beforeEach(() => {
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'comment 1 ' }, { name: 'comment 2 ' }]
    })

    wrapped = mount(
        <Root>
            <App />
        </Root>
    )
})


afterEach(()=>{
    moxios.uninstall()
})

it('fetchs a list of comments and display them', (done) => {

    wrapped.find('.fetch_comments').simulate('click')

    moxios.wait(()=>{
        wrapped.update()

        expect(wrapped.find('li').length).toEqual(2)    

        done()

        wrapped.unmount()
    })
})