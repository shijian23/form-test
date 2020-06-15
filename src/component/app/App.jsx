import React, { Component } from 'react';
import CommentAdd from '../comment-add/CommentAdd'
import CommentList from '../comment-list/CommentList'
class App extends Component {
    state = {
        comments: [
            { username: 'zhangsan', content: '哈哈哈哈哈' },
            { username: 'lisi', content: '呵呵呵呵呵呵' }
        ]
    }

    render() {
        const { comments } = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd></CommentAdd>
                    <CommentList comments={comments}></CommentList>
                </div>
            </div>
        );
    }
}

export default App;
