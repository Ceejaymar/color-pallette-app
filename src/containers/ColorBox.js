import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
    const { background, name } = this.props;
    const { copyOverlay } = this.state;
    const show = copyOverlay ? 'show' : '';

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className='color-box' style={{ background }}>
          <div className={`color-box__copy-overlay ${show}`} style={{ background }} />
          <div className={`color-box__copy-msg ${show}`}>
            <h2>copied!</h2>
            <p>{this.props.background}</p>
          </div>
          <div className='color-box__copy-box'>
            <div className='color-box__content'>
              <span className='color-box__name'>{name}</span>
            </div>
            <button className='color-box__copy-btn'>Copy</button>
          </div>
          <Link to='/' onClick={e => e.stopPropagation()}>
            <span className='color-box__see-more'>More colors</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;  