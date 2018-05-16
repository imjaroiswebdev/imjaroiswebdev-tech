import React from 'react';
import ProfileImg from './ProfileImg';
import SelfType from './SelfType'
import JaroisSN from './JaroisSN';

const MainCard = () => {
	return (
		<div className="main-card">
			<ProfileImg />

			<h1 className="main-card__title">José Antonio Reyes</h1>
			
			<SelfType />
			{ JaroisSN() }
		</div>
	)
}

export default MainCard;