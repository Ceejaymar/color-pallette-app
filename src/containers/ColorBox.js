import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ColorBoxStyles';

class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copyOverlay: false,
    };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copyOverlay: true }, () => {
      setTimeout(() => this.setState({ copyOverlay: false }), 800);
    });
  }

  render() {
    const { copyOverlay: copied } = this.state;
    const {
      background,
      name,
      paletteId,
      colorId,
      showFullPalette,
      classes: {
        copyText,
        colorName,
        seeMore,
        copyButton,
        colorBox,
        boxContent,
        copyOverlay,
        showOverlay,
        copyMessage,
        showMessage,
      },
    } = this.props;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={colorBox} style={{ background }}>
          <div className={`${copyOverlay} ${copied && showOverlay}`} style={{ background }} />
          <div className={`${copyMessage} ${copied && showMessage}`}>
            <h2>copied!</h2>
            <p className={`${copyText}`}>{background}</p>
          </div>
          <div className="color-box__copy-box">
            <div className={`${boxContent}`}>
              <span className={`color-box__name ${colorName}`}>{name}</span>
            </div>
            <button type="button" className={`${copyButton}`}>Copy</button>
          </div>
          {
            showFullPalette && (
              <Link to={`/palette/${paletteId}/${colorId}`} onClick={(e) => e.stopPropagation()}>
                <span className={`${seeMore}`}>More colors</span>
              </Link>
            )
          }
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
