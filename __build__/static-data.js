webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(162);

	var _libIndex = __webpack_require__(157);

	var _libIndex2 = _interopRequireDefault(_libIndex);

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h1',
	        null,
	        'Basic Example with Static Data'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'When using static data, you use the client to sort and filter the items, so ',
	        _react2['default'].createElement(
	          'code',
	          null,
	          'Autocomplete'
	        ),
	        ' has methods baked in to help.'
	      ),
	      _react2['default'].createElement(_libIndex2['default'], {
	        initialValue: 'Ma',
	        items: (0, _utils.getStates)(),
	        getItemValue: function (item) {
	          return item.name;
	        },
	        shouldItemRender: _utils.matchStateToTerm,
	        sortItems: _utils.sortStates,
	        renderItem: function (item, isHighlighted) {
	          return _react2['default'].createElement(
	            'div',
	            {
	              style: isHighlighted ? _utils.styles.highlightedItem : _utils.styles.item,
	              key: item.abbr
	            },
	            item.name
	          );
	        }
	      })
	    );
	  }
	});

	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('container'));

/***/ }
]);