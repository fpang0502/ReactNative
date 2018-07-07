import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

//replace props.data.thumbnail_image

const AlbumDetail = ({ data }) => {
	const { title, artist, thumbnail_image, image, url } = data;
	const { headerStyle, headerTextStyle, thumbnailStyle, thumbnailContainterStyle, imageStyle } = styles

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainterStyle}>
					<Image style={thumbnailStyle} 
						source={{ uri: thumbnail_image }} />
				</View>
				<View>
					<Text style={headerTextStyle}>{title}</Text>
					<Text style={headerStyle}>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image style={imageStyle} source={{ uri: image }} />
			</CardSection>
			
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy Album
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainterStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;