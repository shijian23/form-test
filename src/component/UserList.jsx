import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
class UserList extends Component {

    constructor(props) {
        super(props);
    }
    state = {
        user: '',
        initView: true,
        loading: false,
        users: null,
        errMsg: null,
        modal: {}

    }
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }

    componentDidMount() {

    }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {

    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     const searchName = nextProps

    //     const url = `https://api.github.com/search/users?q=${searchName}`
    //     Axios.get(url).then(res => {
    //         const result = res.data
    //         const user = result
    //         const { loading: false, users: response.data.items } = { loading: false, users: response.data.items }

    //     }).catch(error => {

    //     })
    //     return null
    // }

    async componentWillReceiveProps(nextProps) {
        let searchName = nextProps.searchName
        console.log('发送ajax请求', searchName)
        const url = `https://api.github.com/search/users?q=${searchName}`
        this.setState({ initView: false, loading: true })

        // 使用axios库
        axios.get(url)
            .then((response) => {
                console.log(response)
                this.setState({ loading: false, users: response.data.items })
            })
            .catch((error) => {
                // debugger
                this.setState({ loading: false, error: error.message })
            })
    }


    render() {
        const {  initView, loading, users, errMsg } = this.state
        const { searchName } = this.props
        
        if (initView) {
            return <p>请输入 {searchName}</p>
            
        } else if (loading) {
            return <p>请求中</p>

        } else if (errMsg) {
            return { errMsg }
        } else {            
            return (
                <div className="row">
                    {users.map((user, index) => (
                        <div className="card" key={user.html_url}>
                            <a href={user.html_url} target="_blank">
                                <img src={user.avatar_url} style={{ width: '100px' }} alt='user' />
                            </a>
                            <p className="card-text">{user.login}</p>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default UserList;