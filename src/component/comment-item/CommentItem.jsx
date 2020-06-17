import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './commentItem.css'

class CommentItem extends Component {
    state = {}
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }
    delHandleClick = () => {
        const { comment, deleteComment, index } = this.props
        // 是否确认删除
        if (window.confirm(`确定删除${comment.username}的评论吗?`)) {
            deleteComment(index)            
        }

    }

    render() {
        const { comment, deleteComment } = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#" onClick={this.delHandleClick}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>);
    }
}

export default CommentItem;