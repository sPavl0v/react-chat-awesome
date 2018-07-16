'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _ClosedChatButton = require('./ClosedChatButton');

var _ClosedChatButton2 = _interopRequireDefault(_ClosedChatButton);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// General wrapper styles
var wrapperStylesDefault = {
  width: '350px',
  position: 'fixed',
  boxShadow: '1px 6px 18px -4px rgba(0,0,0,0.78)',
  fontFamily: 'Arial, Helvetica, sans-serif',
  bottom: '120px',
  right: '50px'

  // Header Styles
};var headerStylesDefault = {
  background: _constants.mainColor,
  color: '#fff',
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px'
};

var iconWrapperStylesDefault = {
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
};

var iconStylesDefault = {
  width: '47px',
  borderRadius: '50%'
};

var headerNameStylesDefault = {
  paddingTop: '26px',
  fontSize: '18px'
};

var crossBtnStylesDefault = {
  fontSize: '35px',
  paddingTop: '16px',
  cursor: 'pointer'

  // Body styles
};var bodyStylesDefault = {
  height: '350px',
  overflowY: 'auto',
  background: '#f4f9fa',
  paddingTop: '0.1px'

  // Footer styles
};var footerStylesDefault = {
  display: 'flex',
  minHeight: '40px'
};

var inputStylesDefault = {
  width: '300px',
  maxWidth: '300px',
  padding: '10px',
  maxHeight: '80px',
  overflowY: 'auto',
  outline: 'none',
  color: '#333',
  boxSizing: 'border-box'
};

var sendButtonStylesDefault = {
  width: '50px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  cursor: 'pointer',
  boxSizing: 'border-box'

  // Closed Chat view
};var closedChatStylesDefault = {
  position: 'fixed',
  bottom: '30px',
  right: '50px',
  background: _constants.mainColor,
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
};

var ChatAwesome = function (_Component) {
  _inherits(ChatAwesome, _Component);

  function ChatAwesome(props) {
    _classCallCheck(this, ChatAwesome);

    var _this = _possibleConstructorReturn(this, (ChatAwesome.__proto__ || Object.getPrototypeOf(ChatAwesome)).call(this, props));

    _this.state = {
      isOpen: props.isOpen || false,
      isTouched: false
    };

    _this.handleInput = _this.handleInput.bind(_this);
    _this.handleKey = _this.handleKey.bind(_this);
    _this.scrollMessageListToBottom = _this.scrollMessageListToBottom.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.toggleChatView = _this.toggleChatView.bind(_this);
    _this.displayUsername = _this.displayUsername.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    return _this;
  }

  _createClass(ChatAwesome, [{
    key: 'handleKey',
    value: function handleKey(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        this.handleSubmit();
      }
    }
  }, {
    key: 'toggleChatView',
    value: function toggleChatView(isOpen) {
      var _props = this.props,
          onChatClose = _props.onChatClose,
          onChatOpen = _props.onChatOpen;


      if (isOpen) {
        onChatOpen();
      } else {
        onChatClose();
      }

      this.setState({ isOpen: !this.state.isOpen });
    }

    // TODO: Move to utils

  }, {
    key: 'decodeChars',
    value: function decodeChars(str) {
      return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
    }
  }, {
    key: 'handleInput',
    value: function handleInput() {
      var onMessageChange = this.props.onMessageChange;
      var isTouched = this.state.isTouched;


      if (!isTouched) {
        this.setState({ isTouched: true });
      }

      if (onMessageChange) {
        var msg = this.decodeChars(this.userInput.innerHTML);
        this.props.onMessageChange(msg);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      var isTouched = this.state.isTouched;

      // if (isTouched) {
      //   this.userInput.innerHTML = ''
      // }
    }

    // TODO: Move it to utils method

  }, {
    key: 'displayUsername',
    value: function displayUsername() {
      var receiver = this.props.receiver;


      var nameArr = receiver.username.split(' ');
      if (nameArr.length === 1) {
        return nameArr[0].split(0, 2).toUpperCase();
      }

      return nameArr[0][0].toUpperCase() + nameArr[1][0].toUpperCase();
    }

    // TODO: Update this method, move to utils

  }, {
    key: 'isValidMessage',
    value: function isValidMessage(msg) {
      return !!msg;
    }

    // TODO: Move to utils

  }, {
    key: 'assignStyles',
    value: function assignStyles() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return Object.assign.apply(Object, [{}].concat(args));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      if (this.isValidMessage(this.userInput.innerHTML)) {
        var regex = new RegExp('<br>', 'gm');
        var input = this.userInput.innerHTML.replace(regex, '\n');
        var msg = this.decodeChars(input);

        this.props.onSendMessageClick(msg);
        this.userInput.innerHTML = '';
      }
    }
  }, {
    key: 'scrollMessageListToBottom',
    value: function scrollMessageListToBottom() {
      var _this2 = this;

      setTimeout(function () {
        if (_this2.messageWrapper) {
          _this2.messageWrapper.scrollTop = _this2.messageWrapper.scrollHeight - _this2.messageWrapper.clientHeight;
        }
      }, 0);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.userInput) {
        this.userInput.innerHTML = 'Enter text here';
      }

      if (this.messageWrapper) {
        this.scrollMessageListToBottom();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isTouched = this.props.isTouched;


      if (this.messageWrapper) {
        this.scrollMessageListToBottom();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          history = _props2.history,
          sender = _props2.sender,
          receiver = _props2.receiver,
          onSendMessageClick = _props2.onSendMessageClick,
          showReceiverImageOnMessage = _props2.showReceiverImageOnMessage,
          receiverImageUrl = _props2.receiverImageUrl,
          wrapperStyles = _props2.wrapperStyles,
          headerStyles = _props2.headerStyles,
          sendButtonStyles = _props2.sendButtonStyles,
          sendMessageIcon = _props2.sendMessageIcon;
      var isOpen = this.state.isOpen;


      if (!isOpen) {
        return _react2.default.createElement(_ClosedChatButton2.default, {
          styles: closedChatStylesDefault,
          onClick: function onClick() {
            return _this3.toggleChatView(true);
          }
        });
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: this.assignStyles(wrapperStylesDefault, wrapperStyles) },
          _react2.default.createElement(
            'div',
            { style: this.assignStyles(headerStylesDefault, headerStyles) },
            _react2.default.createElement(
              'div',
              { style: iconWrapperStylesDefault },
              !!receiver.imageUrl ? _react2.default.createElement('img', { style: iconStylesDefault, src: receiver.imageUrl, alt: '' }) : this.displayUsername()
            ),
            _react2.default.createElement(
              'div',
              { style: headerNameStylesDefault },
              receiver.username
            ),
            _react2.default.createElement(
              'div',
              {
                onClick: function onClick() {
                  return _this3.toggleChatView(false);
                },
                style: crossBtnStylesDefault
              },
              '\xD7'
            )
          ),
          _react2.default.createElement(
            'div',
            {
              style: bodyStylesDefault,
              ref: function ref(_ref) {
                _this3.messageWrapper = _ref;
              }
            },
            history.map(function (message) {
              var text = message.text,
                  id = message.id,
                  userID = message.userID;


              return _react2.default.createElement(_Message2.default, {
                key: id,
                text: text,
                receiver: receiver,
                showReceiverImageOnMessage: showReceiverImageOnMessage,
                isSender: userID === sender.id,
                receiverImageUrl: receiver.imageUrl || '' // TODO: Fix this
              });
            })
          ),
          _react2.default.createElement(
            'div',
            { style: footerStylesDefault },
            _react2.default.createElement('div', {
              onKeyDown: this.handleKey,
              onInput: this.handleInput,
              onFocus: this.handleFocus,
              style: inputStylesDefault,
              role: 'button',
              ref: function ref(e) {
                _this3.userInput = e;
              },
              contentEditable: 'true',
              tabIndex: '0'
            }),
            _react2.default.createElement(
              'div',
              {
                style: this.assignStyles(sendButtonStylesDefault, sendButtonStyles),
                onClick: this.handleSubmit },
              sendMessageIcon ? _react2.default.createElement('img', { src: sendMessageIcon, alt: '' }) : _react2.default.createElement(
                'svg',
                { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
                _react2.default.createElement('path', { d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z', fill: _constants.mainColor }),
                _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
              )
            )
          )
        ),
        _react2.default.createElement(_ClosedChatButton2.default, {
          styles: closedChatStylesDefault,
          onClick: function onClick() {
            return _this3.toggleChatView(true);
          }
        })
      );
    }
  }]);

  return ChatAwesome;
}(_react.Component);

ChatAwesome.propTypes = {
  history: _propTypes2.default.array,
  sender: _propTypes2.default.object.isRequired,
  receiver: _propTypes2.default.object.isRequired,
  isOpen: _propTypes2.default.bool,
  onMessageChange: _propTypes2.default.func,
  onSendMessageClick: _propTypes2.default.func,
  onChatClose: _propTypes2.default.func,
  onChatOpen: _propTypes2.default.func,
  showReceiverImageOnMessage: _propTypes2.default.bool,
  sendMessageIcon: _propTypes2.default.element,
  // messageMaxLen: PropTypes.number, // TODO: Implement it later

  // styles
  wrapperStyles: _propTypes2.default.object,
  headerStyles: _propTypes2.default.object,
  sendButtonStyles: _propTypes2.default.object,
  bodyStyles: _propTypes2.default.object,
  footerStyles: _propTypes2.default.object,
  inputStyles: _propTypes2.default.object,
  closedChatStyles: _propTypes2.default.object,
  headerNameStyles: _propTypes2.default.object
};

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
  showReceiverImageOnMessage: false
  // messageMaxLen: 1000
};

exports.default = ChatAwesome;