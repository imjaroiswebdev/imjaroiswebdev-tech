import React, { Component } from 'react';
import Typed from 'typed.js';

class SelfType extends Component {
	componentDidMount() {
		const settings = {
			  stringsElement: '.self-typed__strings',
			  typeSpeed: 30,
			  backSpeed: 0,
			  fadeOut: true,
			  loop: false,
			  showCursor: true,
			  cursorChar: '&#x2588;'
			};

		this.typed = new Typed(this.el, settings);
	}

	render() {
		return (
			<div className="self-typed">
				<div className="self-typed__strings">
			    <h3><strong>Prestashop</strong> Shopping Cart Customizer</h3>
			    <h3><strong>NodeJs</strong> + <strong>express</strong> + <strong>MongoDB</strong> Apps Programmer</h3>
			    <h3>MVC Apps &amp; API REST Builder</h3>
			    <h3>Social signin for apps</h3>
			    <h3>Git and &#x2615; lover</h3>
			    <h3>#juniordevforlife</h3>
			    <h3>SPA with React &amp; Redux development</h3>
			    <h3>Proggresive Web Apps builder and amazed with them</h3>
			    <h3>Javascript Full Stack Web Developer</h3>
				</div>
				<div className="self-typed__sub" ref={(el) => {this.el = el}}></div>
			</div>
		)
	}
}

export default SelfType;