import React from 'react';
import JaroisSN from './JaroisSN';
// import profilePic from '../../assets/images/Profile-closeup-02-480-optimize.jpg';

const MainCard = () => {
	return (
		<div className="main-card">
			<img
				src="images/Profile-closeup-02-480-optimize.jpg"
				alt="@imjarois"
				className="main-card__photo img-responsive"
			/>
			<h1 className="main-card__title">José Antonio Reyes</h1>
			<h3 className="main-card__sub">Javascript Full Stak Web Developer</h3>
			<JaroisSN />
		</div>
	)
}

export default MainCard;