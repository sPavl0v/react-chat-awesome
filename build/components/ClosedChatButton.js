'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClosedChatButton = function (_React$Component) {
  _inherits(ClosedChatButton, _React$Component);

  function ClosedChatButton() {
    _classCallCheck(this, ClosedChatButton);

    return _possibleConstructorReturn(this, (ClosedChatButton.__proto__ || Object.getPrototypeOf(ClosedChatButton)).apply(this, arguments));
  }

  _createClass(ClosedChatButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          styles = _props.styles;


      return _react2.default.createElement(
        'div',
        {
          style: styles,
          onClick: onClick
        },
        _react2.default.createElement(
          'svg',
          { xmlns: 'http://www.w3.org/2000/svg', width: '36', height: '36', viewBox: '0 0 24 24' },
          _react2.default.createElement('path', { fill: '#fff', d: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z' }),
          _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
        )
      );
    }
  }]);

  return ClosedChatButton;
}(_react2.default.Component);

ClosedChatButton.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  styles: _propTypes2.default.object.isRequired
};

exports.default = ClosedChatButton;