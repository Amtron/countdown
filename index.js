"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Count = function (_Component) {
	_inherits(Count, _Component);

	function Count(props) {
		_classCallCheck(this, Count);

		var _this = _possibleConstructorReturn(this, (Count.__proto__ || Object.getPrototypeOf(Count)).call(this, props));

		_this.state = {
			timeEnd: _this.props.timeEnd / 1000
		};
		return _this;
	}

	_createClass(Count, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.timeCount = setInterval(this.count.bind(this), 1000);
		}
	}, {
		key: "count",
		value: function count() {
			var timeEnd = this.state.timeEnd;
			var options = this.props.options;

			if (options !== undefined) {
				var atTimeCallback = options.atTimeCallback,
				    _callback = options.callback;

				if (atTimeCallback !== undefined) {
					atTimeCallback.forEach(function (eachCallback) {
						if (eachCallback.time === timeEnd) {
							eachCallback.callback();
						}
					});
				}
			}
			var d = void 0,
			    h = void 0,
			    m = void 0,
			    s = void 0,
			    rest = void 0;

			if (timeEnd > 0) {
				rest = timeEnd;
				s = Math.floor(rest % 60);
				rest = rest / 60;
				m = Math.floor(rest % 60);
				rest = rest / 60;
				h = Math.floor(rest % 24);
				rest = rest / 24;
				d = Math.floor(rest);
				var newTimeEnd = timeEnd - 1;
				this.setState({
					d: d,
					h: h,
					m: m,
					s: s,
					timeEnd: newTimeEnd
				});
			} else {
				clearInterval(this.timeCount);
				if (callback !== undefined) {
					callback();
				}
			}
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearInterval(this.timeCount);
		}
	}, {
		key: "render",
		value: function render() {
			var _state = this.state,
			    d = _state.d,
			    h = _state.h,
			    m = _state.m,
			    s = _state.s;
			var _props = this.props,
			    className = _props.className,
			    style = _props.style,
			    options = _props.options;

			var qs = void 0,
			    qm = void 0,
			    qh = void 0,
			    qd = void 0;
			qs = s < 10 ? "0" + s : s;
			qm = m < 10 ? "0" + m : m;
			qh = h < 10 ? "0" + h : h;
			qd = d < 10 ? "0" + d : d;

			var result = void 0;
			if (d !== undefined) {
				switch (options.model) {
					case "standard":
						result = qh + " : " + qm + " : " + qs;
						break;
					case "text":
						result = d > 0 ? qd + "d " + qh + "h " + qm + "m" : qh + "h " + qm + "m " + qs + "s";
						break;
				}
			}

			return _react2.default.createElement(
				"span",
				{ className: className, style: style },
				result
			);
		}
	}]);

	return Count;
}(_react.Component);

Count.defaultProps = {
	options: {
		model: "standard"
	}
};
exports.default = Count;
