import React, { Component } from 'react';
import styled from 'styled-components'
import Typed from 'typed.js';
import Emoji from './Emoji';
import coffee from '../assets/images/emoji/coffee.png';
import octocat from '../assets/images/emoji/octocat.png';

class RenderSelfType extends Component {
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

    this.typed = new Typed(this.typedNode, settings);
  }

  restartTyping = () => {
    this.typed.destroy();
    this.typed.reset(true)
  }

  setRef = el => {
    this.typedNode = el
  }

  render() {
    return (
      <React.Fragment>
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
          className="subs"
          ref={ el => { this.typedNode = el } }
          onClick={ this.restartTyping }
        />
      </React.Fragment>
    )
  }
}

const SelfType = styled(({ className }) => (
  <div className={className}>
    <RenderSelfType />
  </div>
))`
  height: 40px;

  @media (min-width: var(--phone-land)) {
    height: auto;
  }

  .subs, span {
    display: inline-block;
    font-size: 12px;
    line-height: 20px;
    color: var(--primary-color-light);
    font-weight: 400;
    font-family: var(--inconsolata);
    margin-bottom: 10px;

    @media (min-width: var(--phone-land)) {
      font-size: 16px;
    }
  }

  span {
    color: var(--accent-color);
  }
`

export default SelfType;
