import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Title from './components/Title';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Title />
				<NewsList />
			</div>
		);
	}
}

export default App;
