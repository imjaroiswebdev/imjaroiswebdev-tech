import React, { Component } from 'react';
import Typed from 'typed.js';
import Emoji from './Emoji';
import coffee from 'images/emoji/coffee';
import octocat from 'images/emoji/octocat';


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

	restartTyping() {
		this.typed.destroy();
		this.typed.reset(true)
	}

	render() {
		return (
			<div className="self-typed">
				<div className="self-typed__strings">
			    <h3><strong>Prestashop</strong> Shopping Cart Customizer</h3>
			    <h3><strong>NodeJs</strong> + <strong>express</strong> + <strong>MongoDB</strong> Apps Programmer</h3>
			    <h3>MVC Apps &amp; API REST <strong>Builder</strong></h3>
			    <h3><strong>Social signin</strong> for apps</h3>
			    <h3><Emoji icon={octocat} /> Git and <Emoji icon={coffee} /> lover</h3>
			    <h3>#juniordevforlife</h3>
			    <h3><strong>SPA</strong> with <strong>React</strong> &amp; <strong>Redux</strong> development</h3>
			    <h3><strong>Proggresive Web Apps</strong> builder and amazed with them</h3>
			    <h3>Javascript Full Stack Web Developer</h3>
				</div>
				<div
					className="self-typed__sub" 
					ref={(el) => {this.el = el}}
					onClick={ () => this.restartTyping() }
				>
				</div>
			</div>
		)
	}
}

export default SelfType;