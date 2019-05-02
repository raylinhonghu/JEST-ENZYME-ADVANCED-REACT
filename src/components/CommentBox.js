import React from 'react'
import { connect } from 'react-redux'
import { addComment, fetchComments } from 'action'
import requireAuth from 'components/requireAuth'


class CommentBox extends React.Component {

    state = { comment: ''}

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({comment: e.target.value})
        this.props.addComment(this.state.comment)
    }


    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleFetchComments = () => {
        this.props.fetchComments();
    }

    render() {
        return (
            <div>
                <h4>
                    Enter Comment
                </h4>
                <form onSubmit={this.handleSubmit}>
                    <textarea placeholder="enter your text here" value={this.state.comment} onChange={(e) => this.handleChange(e)} />
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <button className="fetch_comments" onClick={this.handleFetchComments}>Fetch Remote Comments</button>
            </div>
        )
    }
}

const mapStateToprops = (state, ownProps) => {
    return {
        comments: state.comments,
    }
}

export default connect(mapStateToprops, {
    addComment,
    fetchComments
})(requireAuth(CommentBox));