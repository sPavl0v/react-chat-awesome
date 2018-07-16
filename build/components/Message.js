'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var messageWrapperStylesDefault = {
  width: '100%',
  height: 'auto',
  position: 'relative',
  margin: '10px 0',
  background: '#f4f9fa'
};

var senderWrapperStylesDefault = {
  justifyContent: 'flex-end',
  display: 'flex',
  position: 'relative'
};

var receiverWrapperStylesDefault = {
  display: 'flex',
  width: 'auto',
  // paddingLeft: '10px',
  marginLeft: '10px',
  marginTop: '20px',
  margin: 0
};

var defaultMessageStyles = {
  display: 'inline-block',
  padding: '12px',
  whiteSpace: 'pre-line',
  wordWrap: 'break-word',
  minWidth: '30px',
  maxWidth: '70%',
  fontSize: '13px',
  boxShadow: '0px 3px 5px -2px rgba(0,0,0,0.26)'
};

var senderMessageDefaultStyles = {
  background: _constants.mainColor,
  color: '#fff',
  marginRight: '25px',
  borderRadius: '15px 15px 3px 15px'
};

var receiverMessageDefaultStyles = {
  background: '#fff',
  color: '#333',
  marginLeft: '5px',
  borderRadius: '3px 15px 15px 15px'
};

var receiverImageStylesDefault = {
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
  boxShadow: '0px 3px 5px -2px rgba(0,0,0,0.26)'
};

var imgStylesDefault = {
  width: '35px',
  borderRadius: '50%'
};

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message(props) {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, props));

    _this.displayMessage = _this.displayMessage.bind(_this);
    _this.displayWrapper = _this.displayWrapper.bind(_this);
    _this.displayUsername = _this.displayUsername.bind(_this);
    return _this;
  }

  _createClass(Message, [{
    key: 'displayMessage',
    value: function displayMessage(defaultStyles) {
      var isSender = this.props.isSender;


      if (isSender) {
        return Object.assign({}, defaultStyles, senderMessageDefaultStyles);
      }

      return Object.assign({}, defaultStyles, receiverMessageDefaultStyles);
    }
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
  }, {
    key: 'displayWrapper',
    value: function displayWrapper(defaultStyles) {
      var _props = this.props,
          isSender = _props.isSender,
          showReceiverImageOnMessage = _props.showReceiverImageOnMessage;


      if (isSender) {
        return Object.assign({}, defaultStyles, senderWrapperStylesDefault);
      }

      return Object.assign({}, defaultStyles, receiverWrapperStylesDefault, { marginTop: showReceiverImageOnMessage ? '20px' : '10px' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isSender = _props2.isSender,
          text = _props2.text,
          showReceiverImageOnMessage = _props2.showReceiverImageOnMessage,
          receiverImageUrl = _props2.receiverImageUrl;


      return _react2.default.createElement(
        'div',
        { style: this.displayWrapper(messageWrapperStylesDefault) },
        !isSender && showReceiverImageOnMessage &&
        // display image
        _react2.default.createElement(
          'div',
          { style: receiverImageStylesDefault },
          receiverImageUrl ? _react2.default.createElement('img', { style: imgStylesDefault, src: receiverImageUrl, alt: '' }) : this.displayUsername()
        ),
        _react2.default.createElement(
          'div',
          { style: this.displayMessage(defaultMessageStyles) },
          text
        )
      );
    }
  }]);

  return Message;
}(_react.Component);

Message.propTypes = {
  text: _propTypes2.default.string.isRequired,
  isSender: _propTypes2.default.bool.isRequired,
  receiver: _propTypes2.default.object.isRequired,
  receiverImageUrl: _propTypes2.default.string.isRequired
};

Message.defaultProps = {};

exports.default = Message;