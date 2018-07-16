import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mainColor } from './constants'

const messageWrapperStylesDefault = {
  width: '100%',
  height: 'auto',
  position: 'relative',
  margin: '10px 0',
  background: '#f4f9fa',
}

const senderWrapperStylesDefault = {
  justifyContent: 'flex-end',
  display: 'flex',
  position: 'relative'
}

const receiverWrapperStylesDefault = {
  display: 'flex',
  width: 'auto',
  // paddingLeft: '10px',
  marginLeft: '10px',
  marginTop: '20px',
  margin: 0
}

const defaultMessageStyles = {
  display: 'inline-block',
  padding: '12px',
  whiteSpace: 'pre-line',
  wordWrap: 'break-word',
  minWidth: '30px',
  maxWidth: '70%',
  fontSize: '13px',
  boxShadow: '0px 3px 5px -2px rgba(0,0,0,0.26)',
}

const senderMessageDefaultStyles = {
  background: mainColor,
  color: '#fff',
  marginRight: '25px',
  borderRadius: '15px 15px 3px 15px'
}

const receiverMessageDefaultStyles = {
  background: '#fff',
  color: '#333',
  marginLeft: '5px',
  borderRadius: '3px 15px 15px 15px'
}

const receiverImageStylesDefault = {
  width: '35px',
  height: '36px',
  background: '#fff',
  color: '#333',
  borderRadius: '50%',
  display: 'flex',
  fontSize: '14px',
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: '-12px',
  boxShadow: '0px 3px 5px -2px rgba(0,0,0,0.26)',
}

const imgStylesDefault = {
  width: '35px',
  borderRadius: '50%'
}

class Message extends Component {
  constructor(props) {
    super(props);

    this.displayMessage = this.displayMessage.bind(this);
    this.displayWrapper = this.displayWrapper.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
  }

  displayMessage(defaultStyles) {
    const { isSender } = this.props;
    
    if (isSender) {
      return Object.assign({}, defaultStyles, senderMessageDefaultStyles);
    }

    return Object.assign({}, defaultStyles, receiverMessageDefaultStyles);
  }

  displayUsername() {
    const { receiver } = this.props;

    const nameArr = receiver.username.split(' ');
    if (nameArr.length === 1) {
      return nameArr[0].split(0, 2).toUpperCase();
    }

    return nameArr[0][0].toUpperCase() + nameArr[1][0].toUpperCase();
  }

  displayWrapper(defaultStyles) {
    const {
      isSender,
      showReceiverImageOnMessage
    } = this.props;

    if (isSender) {
      return Object.assign({}, defaultStyles, senderWrapperStylesDefault);
    }

    return Object.assign(
      {},
      defaultStyles,
      receiverWrapperStylesDefault,
      { marginTop: showReceiverImageOnMessage ? '20px' : '10px' }
    );
  }

  render() {
    const {
      isSender,
      text,
      showReceiverImageOnMessage,
      receiverImageUrl
    } = this.props;

    return (
      <div style={ this.displayWrapper(messageWrapperStylesDefault) }>
        { (!isSender && showReceiverImageOnMessage) && (
          // display image
          <div style={ receiverImageStylesDefault }>
            { receiverImageUrl ? (
              <img style={ imgStylesDefault } src={ receiverImageUrl } alt='' />
            ) : (
              this.displayUsername()
            )}
          </div>
        )}
        <div style={ this.displayMessage(defaultMessageStyles) }>{ text }</div>
      </div>  
    )
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  isSender: PropTypes.bool.isRequired,
  receiver: PropTypes.object.isRequired,
  receiverImageUrl: PropTypes.string.isRequired,
}

Message.defaultProps = {

}

export default Message