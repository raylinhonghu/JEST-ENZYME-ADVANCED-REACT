import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

import { signIn } from 'action'

class App extends React.Component {

    renderButtonText = () => {
        if(this.props.authState){
            return 'sign out'
        }else{
            return 'sign in'
        }
    }

    handleSignClick = () => {
        this.props.signIn(!this.props.authState)
    }

    renderHeader = () => {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/post">Post</Link></li>
                    <li><button onClick={this.handleSignClick}>{this.renderButtonText()}</button></li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}></Route>
                <Route path="/" exact component={CommentList}></Route>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        authState: state.signIn
    }
}

export default connect(mapStateToprops, { signIn })(App);