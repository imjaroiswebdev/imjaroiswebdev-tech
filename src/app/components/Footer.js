import React from 'react';
import Emoji from './Emoji';
import heart from 'images/emoji/heart';
import reactEmoji from 'images/emoji/react';


const Footer = () => {
	return (
		<div className="footer ma">
			2017 | Made with<Emoji className="footer__heart" icon={heart} size="14px" title="LOVE" /> 
			using ReactJs<Emoji icon={reactEmoji} size="14px" title="ReactJs" />
			in Santiago by
			<a
				href="https://github.com/imjaroiswebdev/"
				title="Github Repository to this site"> José Antonio Reyes.
			</a>
		</div>
	)
}

export default Footer;