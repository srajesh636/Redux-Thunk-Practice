import React, { Component } from 'react';
import Card from './Card';
import ShimmerCard from './ShimmerCard';
import {connect} from 'react-redux';

class NewsList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let newsList = this.props.storeData && this.props.storeData.newsList;
		let keyword = this.props.storeData && this.props.storeData.keyword;

		return (
			<div>
				<div className="container">
					<div className="row">
						{newsList && newsList.length > 0 ? (
							<>
								{ newsList && newsList.map((i, index) => {
									return <Card key={index} data={i} />;
								})}
							</>
						) : (
							keyword  && <ShimmerCard />
						)}
					</div>
				</div>
			</div>
		);
	}
}

let getDataFromStore = store =>{
	return{
		storeData:store
	}
}

export default connect(getDataFromStore)(NewsList);
