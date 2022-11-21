import React, {Component} from 'react';
import { connect } from 'react-redux';
import { myAction } from '../actions/index.js';

class StarredButton extends Component {
    render() {
        return <button onClick={() => this.props.triggerAction('saveArticle')} />;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        triggerAction: text => dispatch(myAction(text))
    };
};

const ConnectStarredButton = connect(null, mapDispatchToProps)(StarredButton);

export default ConnectStarredButton;