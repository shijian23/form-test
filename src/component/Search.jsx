import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {}
    static propTypes = {
        setSearch: PropTypes.func.isRequired
    }
    search = () => {
        const searchName = this.input.value.trim()
        if (searchName) {

            this.props.setSearch(searchName)
        }
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="enter the name you search" ref={input => this.input = input}
                />
                <button onClick={this.search}>Search</button>
            </div>
        );
    }
}

export default Search;