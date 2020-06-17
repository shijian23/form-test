import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentAdd extends Component {

    state = {
        username: '',
        content: ''
    }

    static propTypes = {
        addComment: PropTypes.func.isRequired,
    }

    usernameInput = (event) => {
        const username = event.target.value
        this.setState({ username })        
    }

    contentInput = (event) => {
        const content = event.target.value
        this.setState({ content })
    }

    commentSubmit = () => {
        // 获取数据
        const comment = this.state
        // 调用父类方法,把数据传过去
        this.props.addComment(comment)        
        // 初始化
        this.setState({
            username: "",
            content: "",
        })
    }

    render() {
        const { username, content } = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" value={username} onChange={this.usernameInput} />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.contentInput}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.commentSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default CommentAdd;