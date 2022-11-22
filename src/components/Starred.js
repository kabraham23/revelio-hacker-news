import React, {Component} from "react";
import { connect } from "react-redux";
import StarredItem from "./StarredItem.js";

class Starred extends Component {
    render() {
        const listArticles = this.props.articles.map((reminder, index) => (
            <StarredItem article={article} key={index} />
        ));

        return (
            <div>
                <h2>Saved Articles</h2>
                {listArticles}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { articles: state.article }
};

export default connect(mapStateToProps)(Starred)