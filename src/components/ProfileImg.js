import React, { Component } from 'react';
import profile from 'images/Profile-closeup-02-480-optimize'
import placeholder from 'images/profile-placeholder'

// Component inspired in blurred image placeholders used
// in Medium

class ProfileImg extends Component {
	constructor() {
		super();
		this.state = {
			loadedClass: '',
			photoUrl: placeholder
		}
	}

	// Request for the profile photo through a promise to wait
	// with the blurred placeholder till the body (blob) of the
	// image file is loaded,  then just render the loaded image
	// and applies a class that removes the blur filter of the photo
	componentDidMount() {
		fetch(profile)
			.then(response => response.blob())
			.then(imgBlob => {
				const blobURL = URL.createObjectURL(imgBlob);
				this.setState({photoUrl: blobURL, loadedClass: 'profile-img__loaded'})
			})
	}

	renderPhoto() {
		let { photoUrl } = this.state;
		return (
			<img
				src= {photoUrl}
				alt="@imjarois"
				className={ `${this.state.loadedClass} profile-img__photo img-responsive` }
			/>
		)
	}

	render() {
		return (
			<div className="profile-img">
				{ this.renderPhoto() }
				<div style={{ paddingBottom: '100%' }}></div>				
			</div>
		)		
	}
}

export default ProfileImg;