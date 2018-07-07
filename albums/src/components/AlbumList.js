// Functional Component
//	-Used for presenting static data
//	-Can't handle fetching data
//	-Easy to write

// Class Component
//	-Used for dynamic sources of data
//	-Handles any data that might change(fetching data, user events, etc)
//	-Knows when it gets rendered to the device(useful for fetching)
//	-More code to write

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} data={album} />);
	}

	render() {
		console.log(this.state);

		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;