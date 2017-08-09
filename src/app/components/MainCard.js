import React from 'react';
import JaroisSN from './JaroisSN';
import SelfType from './SelfType'

const MainCard = () => {
	return (
		<div className="main-card">
			<img
				src="images/Profile-closeup-02-480-optimize.jpg"
				alt="@imjarois"
				className="main-card__photo img-responsive"
			/>
			<h1 className="main-card__title">José Antonio Reyes</h1>
			
			<SelfType />
			<JaroisSN />
		</div>
	)
}

export default MainCard;