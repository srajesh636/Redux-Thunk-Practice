import React, { Component } from 'react';

class ShimmerCard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="card-shimmer br">
				<div className="wrapper">
					<div className="profilePic animate" />
					<div className="comment br animate w80" />
					<div className="comment br animate" />
					<div className="comment br animate" />
				</div>
			</div>
		);
	}
}

export default ShimmerCard;
