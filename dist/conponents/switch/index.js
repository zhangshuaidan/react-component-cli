'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function Switch(props) {
    return _react2.default.createElement(
        'button',
        { type: 'button', role: 'switch', 'aria-checked': 'true', className: 'ant-switch ant-switch-checked', 'ant-click-animating': 'true' },
        _react2.default.createElement('span', { className: 'ant-switch-inner' }),
        _react2.default.createElement('div', { className: 'ant-click-animating-node' })
    );
};
exports.default = Switch;