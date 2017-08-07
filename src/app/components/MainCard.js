import React from 'react';
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
			<p className="main-card__username">@imjaroiswebdev</p>
		</div>
	)
}

export default MainCard;