import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addStarred } from '../actions/index.js';

class StarredButton extends Component {
    state = { object: {} };

    handleChange = e => { this.setState({ object: e.target.value }); };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addStarred(this.state.object);
        this.setState({ object: {} });
    };

    render() {
        return (
            <div>
                <button onClick={() => addStarred(this.props.currentArticle)}>Star</button>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addStarred: object => dispatch(addStarred(object))
    };
};

export default connect(null, mapDispatchToProps)(StarredButton);