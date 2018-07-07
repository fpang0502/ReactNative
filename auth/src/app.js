import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
	 		apiKey: "AIzaSyB0H1FIbJCqv0zvGO-1dI-qiudzRlBmuJg",
	  		authDomain: "auth-10cc7.firebaseapp.com",
	  		databaseURL: "https://auth-10cc7.firebaseio.com",
	  		projectId: "auth-10cc7",
		    storageBucket: "auth-10cc7.appspot.com",
		    messagingSenderId: "950298171286"
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<View style={styles.containerStyle}>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</View>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" style={styles.containerStyle} />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flexDirection: 'row'
	}
};

export default App;