import React from 'react';

const JaroisSN = () => {
	return (
		<div className="jarois-sn">
			<div className="jarois-sn__row">
				<a
					className="jarois-sn__link"
					title="My Instagram @imajaroiswebdev"
					href="http://www.instagram.com/imjaroiswebdev" target="_blank"><i className="fa fa-instagram fa-fw fa-lg" aria-hidden="true"></i>
				</a>
				<a
					className="jarois-sn__link"
					title="My code in Github"
					href="https://github.com/imjaroiswebdev" target="_blank"><i className="fa fa-github-square fa-fw fa-lg" aria-hidden="true"></i>
				</a>
				<a
					className="jarois-sn__link"
					title="Send me an email"
					href="mailto:imajroiswebdev@gmail.com"><i className="fa fa-envelope fa-fw fa-lg" aria-hidden="true"></i>
				</a>
			</div>
			<div className="jarois-sn__username">@imjaroiswebdev</div>
			<div className="jarois-sn__logo ma">
				<img
					className="img-responsive"
					src="images/logo-lowPoly_270_alpha.png" alt="logotipo @imjaroiswebdev"
				/>
			</div>
		</div>
	)
}

export default JaroisSN;