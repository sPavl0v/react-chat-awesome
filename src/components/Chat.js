import React, { Component, isValidElement } from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import ClosedChatButton from './ClosedChatButton'
import { mainColor, secondaryColor, gray } from './constants'

// General wrapper styles
const wrapperStylesDefault = {
  width: '350px',
  position: 'fixed',
  boxShadow: '1px 6px 18px -4px rgba(0,0,0,0.78)',
  fontFamily: 'Arial, Helvetica, sans-serif',
  bottom: '120px',
  right: '50px',
}

// Header Styles
const headerStylesDefault = {
  background: mainColor,
  color: '#fff',
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px'
}

const iconWrapperStylesDefault = {
  width: '45px',
  height: '45px',
  color: '#333',
  display: 'flex',
  alignItems: 'center',
  fontSize: '22px',
  justifyContent: 'center',
  background: 'rgb(255, 255, 255)',
  borderRadius: '50%',
  marginTop: '12px'
}

const iconStylesDefault = {
  width: '47px',
  borderRadius: '50%'
}

const headerNameStylesDefault = {
  paddingTop: '26px',
  fontSize: '18px'
}

const crossBtnStylesDefault = {
  fontSize: '35px',
  paddingTop: '16px',
  cursor: 'pointer',
}

// Body styles
const bodyStylesDefault = {
  height: '350px',
  overflowY: 'auto',
  background: '#f4f9fa',
  paddingTop: '0.1px'
}

// Footer styles
const footerStylesDefault = {
  display: 'flex',
  minHeight: '40px',
}

const inputStylesDefault = {
  width: '300px',
  maxWidth: '300px',
  padding: '10px',
  maxHeight: '80px',
  overflowY: 'auto',
  outline: 'none',
  color: '#333',
  boxSizing: 'border-box'
}

const sendButtonStylesDefault = {
  width: '50px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  cursor: 'pointer',
  boxSizing: 'border-box'
}

// Closed Chat view
const closedChatStylesDefault = {
  position: 'fixed',
  bottom: '30px',
  right: '50px',
  background: mainColor,
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}

class ChatAwesome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen || false,
      isTouched: false
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.scrollMessageListToBottom = this.scrollMessageListToBottom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleChatView = this.toggleChatView.bind(this);
    this.displayUsername = this.displayUsername.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleKey(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      this.handleSubmit();
    }
  }

  toggleChatView(isOpen) {
    const { onChatClose, onChatOpen } = this.props;
    
    if (isOpen) {
      onChatOpen();
    } else {
      onChatClose();
    }

    this.setState({ isOpen: !this.state.isOpen });
  }

  // TODO: Move to utils
  decodeChars(str) {
    return String(str)
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"');
  }


  handleInput() {
    const { onMessageChange } = this.props;
    const { isTouched } = this.state;

    if (!isTouched) {
      this.setState({ isTouched: true });
    }

    if (onMessageChange) {
      const msg = this.decodeChars(this.userInput.innerHTML);
      this.props.onMessageChange(msg);
    }    
  }

  handleFocus() {
    const { isTouched } = this.state;

    // if (isTouched) {
    //   this.userInput.innerHTML = ''
    // }
  }

  // TODO: Move it to utils method
  displayUsername() {
    const { receiver } = this.props;

    const nameArr = receiver.username.split(' ');
    if (nameArr.length === 1) {
      return nameArr[0].split(0, 2).toUpperCase();
    }

    return nameArr[0][0].toUpperCase() + nameArr[1][0].toUpperCase();
  }

  // TODO: Update this method, move to utils
  isValidMessage(msg) {
    return !!msg; 
  }

  // TODO: Move to utils
  assignStyles(...args) {
    return Object.assign({}, ...args);
  }

  handleSubmit() {
    if (this.isValidMessage(this.userInput.innerHTML)) {
      const regex = new RegExp('<br>', 'gm');
      const input = this.userInput.innerHTML.replace(regex, '\n');
      const msg = this.decodeChars(input);
      
      this.props.onSendMessageClick(msg);
      this.userInput.innerHTML = '';
    }
  }

  scrollMessageListToBottom() {
    setTimeout(() => {
      if (this.messageWrapper) {
        this.messageWrapper.scrollTop = this.messageWrapper.scrollHeight - this.messageWrapper.clientHeight;        
      }
    }, 0);
  }

  componentDidMount() {
    if (this.userInput) {
      this.userInput.innerHTML = 'Enter text here';      
    }
    
    if (this.messageWrapper) {
      this.scrollMessageListToBottom();      
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isTouched } = this.props;

    if (this.messageWrapper) {
      this.scrollMessageListToBottom();      
    }
  }

  render() {
    const {
      history,
      sender,
      receiver,
      onSendMessageClick,
      showReceiverImageOnMessage,
      receiverImageUrl,
      wrapperStyles,
      headerStyles,
      sendButtonStyles,
      sendMessageIcon
    } = this.props;

    const { isOpen } = this.state;

    if (!isOpen) {
      return (
        <ClosedChatButton
          styles={ closedChatStylesDefault }
          onClick={ () => this.toggleChatView(true) }
        />
      );
    }

    return (
      <div>
        <div style={ this.assignStyles(wrapperStylesDefault, wrapperStyles) }>


          {/* Chat header */}
          <div style={ this.assignStyles(headerStylesDefault, headerStyles) }>
            {/* Receiver icon */}
            <div style={ iconWrapperStylesDefault }>
              { !!receiver.imageUrl ? (
                  <img style={ iconStylesDefault } src={ receiver.imageUrl } alt="" />
                ) : (
                  this.displayUsername()
                )
              }
            </div>
            {/* Receiver name */}
            <div style={ headerNameStylesDefault }>{ receiver.username }</div>
            {/* Close btn */}
            <div
              onClick={ () => this.toggleChatView(false) }
              style={ crossBtnStylesDefault }
            >&times;</div>
          </div>


          {/* Chat body */}
          <div
            style={ bodyStylesDefault }
            ref={ ref => { this.messageWrapper = ref } }
          >
            { history.map(message => {
              const { text, id, userID } = message;

              return (
                <Message
                  key={ id }
                  text={ text }
                  receiver={ receiver }
                  showReceiverImageOnMessage={ showReceiverImageOnMessage }
                  isSender={ userID === sender.id }
                  receiverImageUrl={ receiver.imageUrl || '' } // TODO: Fix this
                />)
            })}
          </div>

          {/* Chat footer */}
          <div style={ footerStylesDefault }>
            <div
              onKeyDown={ this.handleKey }
              onInput={ this.handleInput }
              onFocus={ this.handleFocus }
              style={ inputStylesDefault }
              role="button"
              ref={(e) => { this.userInput = e; }}
              contentEditable="true"
              tabIndex="0"
            >
            </div>
            <div
              style={ this.assignStyles(sendButtonStylesDefault, sendButtonStyles) }
              onClick={ this.handleSubmit }>
              { sendMessageIcon ? (
                <img src={ sendMessageIcon } alt="" />
              ): (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill={ mainColor } />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              )}
            </div>
          </div>
        </div>
        <ClosedChatButton
          styles={ closedChatStylesDefault }
          onClick={ () => this.toggleChatView(true) }
        />
      </div>  
    )
  }
}

ChatAwesome.propTypes = {
  history: PropTypes.array,
  sender: PropTypes.object.isRequired,
  receiver: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,  
  onMessageChange: PropTypes.func,
  onSendMessageClick: PropTypes.func,
  onChatClose: PropTypes.func,
  onChatOpen: PropTypes.func,
  showReceiverImageOnMessage: PropTypes.bool,
  sendMessageIcon: PropTypes.element,
  // messageMaxLen: PropTypes.number, // TODO: Implement it later

  // styles
  wrapperStyles: PropTypes.object,
  headerStyles: PropTypes.object,
  sendButtonStyles: PropTypes.object,
  bodyStyles: PropTypes.object,
  footerStyles: PropTypes.object,
  inputStyles: PropTypes.object,
  closedChatStyles: PropTypes.object,
  headerNameStyles: PropTypes.object
}

ChatAwesome.defaultProps = {
  history: [],
  wrapperStyles: {},
  headerStyles: {},
  bodyStyles: {},
  footerStyles: {},
  inputStyles: {},
  closedChatStyles: {},
  headerNameStyles: {},
  sendMessageIcon: null,
  sendButtonStyles: {},
  showReceiverImageOnMessage: false,
  // messageMaxLen: 1000
}

export default ChatAwesome