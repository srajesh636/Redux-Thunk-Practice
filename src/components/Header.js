import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewsList, setActiveKeyword } from '../actions/index';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: '',
			newsList: [],
		};
	}

	handleChange = e => {
		e.preventDefault();

		this.props.setActiveKeyword(e.target.value);

		this.setState({
			keyword: e.target.value,
		});
	};

	handleClick = e => {
		e.preventDefault();
		let { keyword } = this.state;
		this.props.getNewsList(keyword);
	};

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
					Redux Learning
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse float-right justify-content-end" id="navbarSupportedContent">
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							onChange={this.handleChange}
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handleClick}>
							Search
						</button>
					</form>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		store: state,
	};
};

export default connect(mapStateToProps,{getNewsList,setActiveKeyword})(Header);
