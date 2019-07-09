import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './colorBox.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      copyOverlay: false
    };
  }

  changeCopyState = () => {
    this.setState({ copyOverlay: true }, () => {
      setTimeout(() => this.setState({ copyOverlay: false}), 800);
    });
  }
  
  render() {
    const { background, name, paletteId, colorId, showLink } = this.props;
    const show = this.state.copyOverlay ? 'show' : '';
    const textColor = chroma(background).luminance() <= 0.06 ? 'color-box__light-text' : 'color-box__dark-text';

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className='color-box' style={{ background }}>
          <div className={`color-box__copy-overlay ${show}`} style={{ background }} />
          <div className={`color-box__copy-msg ${show}`}>
            <h2>copied!</h2>
            <p className={`${textColor}`}>{this.props.background}</p>
          </div>
          <div className='color-box__copy-box'>
            <div className='color-box__content'>
              <span className={`color-box__name ${textColor}`}>{name}</span>
            </div>
            <button className={`color-box__copy-btn ${textColor}`}>Copy</button>
          </div>
          {
            showLink && (
              <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                <span className={`color-box__see-more ${textColor}`}>More colors</span>
              </Link>
            )
          }
          
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;