import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './commentList.css'
class CommentList extends Component {
    state = {}

    static propTypes = {
        comments: PropTypes.array.isRequired
    }
    render() {
        const { comments } = this.props        
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{ display: 'none' }}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="handle">
                            <a href="javascript:;">删除</a>
                        </div>
                        <p className="user"><span>xxx</span><span>说:</span></p>
                        <p className="centence">React不错!</p>
                    </li>
                    <li className="list-group-item">
                        <div className="handle">
                            <a href="javascript:;">删除</a>
                        </div>
                        <p className="user"><span>yyy</span><span>说:</span></p>
                        <p className="centence">React有点难!</p>
                    </li>
                </ul>
            </div>
        );
    }
}
// CommentList.propTypes = {
//     comments: PropTypes.array.isRequired
// }
export default CommentList;