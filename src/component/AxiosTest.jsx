import React, { Component } from 'react';
import axios from 'axios'

class AxiosTest extends Component {
    state = {
        repoName: '',
        repoUrl: ''
    }
    componentDidMount() {
        const url = "https://api.github.com/search/repositories?q=re&sort=stars"
        axios.get(url).then(res => {
            console.log(res.data);
            
            const { name, html_url } = res.data.items[0]
            this.setState({
                repoName: name,
                repoUrl: html_url
            })
        })
    }
    render() {
        const { repoName, repoUrl } = this.state
        if (!repoName) {
            return <h2>Loading...</h2>
        } else {
            return <h2>The most star is <a href={repoUrl}>{repoName}</a></h2>
        }
    }


}

export default AxiosTest;

