import React, { Component } from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
        let data=this.props.data;
		return (
            <div className="col-12 col-md-3 my-2">
            	<div className="card">
				<img src={data.urlToImage} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{data.title}</h5>
					<p className="card-text">
                        {data.content}
                	</p>
					<a href={data.url} className="btn btn-primary" target="_blank">
                        Read More
					</a>
				</div>
			</div>
            </div>
		
		);
	}
}

export default Card;
