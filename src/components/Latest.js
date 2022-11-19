import React, {Component} from "react";

class Latest extends Component {
    state = {
        data:{}
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        fetch('https://gnews.io/api/v3/topics/world?token=990d9071ebb8b5c6202a5b355abf617f')
        .then(data => data.json())
        .then(data => this.setState({data}))
    };

    render() {
        return (
            <div id="news">
                <ol>
                {Object.keys(this.state.data).length && this.state.data.articles.map((data) => 
                {return(
                    <div className="article">
                        <li>
                            <a href={data.url}>{data.title}</a>
                            <p>{data.description}</p>
                            <p>{data.source.name}</p>
                        </li>
                    </div>
                )})}
                </ol>
            </div>
        )
    }
}

export default Latest;