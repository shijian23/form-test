import React, { Component } from 'react';
import CommentAdd from '../comment-add/CommentAdd'
import CommentList from '../comment-list/CommentList'
import AxiosTest from '../AxiosTest'
import Search from '../Search'
import UserList from '../UserList'
class App extends Component {
    state = {
        // comments: [
        //     { username: 'zhangsan', content: '哈哈哈哈哈' },
        //     { username: 'lisi', content: '呵呵呵呵呵呵' }
        // ]
        searchName: ''
    }


    setSearch = (searchName) => {
        this.setState({
            searchName
        })
    }


    addComment = comment => {
        const { comments } = this.state
        comments.unshift(comment)
        this.setState(comments)
    }

    deleteComment = (index) => {
        const { comments } = this.state
        comments.splice(index, 1)
        this.setState({ comments })
    }

    render() {
        const { comments } = this.state
        return (
            <div>
                {/* <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}></CommentAdd>
                    <CommentList comments={comments} deleteComment={this.deleteComment}></CommentList>
                </div> */}
                {/* <AxiosTest /> */}

                <div className="container">
                    <section className="jumbotron">
                        <h3 className="jumbotron-heading">Search Github Users</h3>
                        <Search setSearch={this.setSearch} />
                    </section>
                    <UserList searchName={this.state.searchName} />
                </div>
            </div>
        );
    }
}

export default App;
