'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log('less',less)
var Button = function Button(props) {
    console.log('style', _index2.default);
    return _react2.default.createElement(
        'button',
        { className: 'btn' },
        _react2.default.createElement(
            'span',
            null,
            props.children
        ),
        _react2.default.createElement(
            'div',
            { className: _index2.default.outer },
            '\u5916\u5C42',
            _react2.default.createElement(
                'div',
                { className: _index2.default.inner },
                '\u5185\u5C42'
            )
        )
    );
};
exports.default = Button;