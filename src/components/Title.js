import React, { Component } from 'react';
import {connect} from 'react-redux';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let title = this.props.title;
        return (
            <h4 className="my-3 text-center text-muted">
                You searched for "{title && title.keyword}" .
            </h4>
        );
    }
}
const getDataFromStore = store =>{
    return{
        title:store
    }
}
export default connect(getDataFromStore)(Title);