'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/siddhant/Documents/Ethereum/kickstart/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                                _this.setState({ loading: true, errorMessage: '' });
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                            case 10:
                                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:
                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, ' ', _react2.default.createElement(_semanticUiReact.Icon, { primary: true, name: 'arrow left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), ' Back ')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'Create')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJNZXNzYWdlIiwiRm9ybSIsIklucHV0IiwiSWNvbiIsIkNhbXBhaWduIiwid2ViMyIsIkxpbmsiLCJSb3V0ZXIiLCJMYXlvdXQiLCJSZXF1ZXN0TmV3Iiwic3RhdGUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwicmVjaXBpZW50IiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQVMsQUFBTSxBQUFPOztBQUN2QyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBTSxBQUFhOztBQUMzQixBQUFPLEFBQVk7Ozs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7Ozs7Ozt3TkFFRixBO21CQUFPLEFBQ0ksQUFDUDt5QkFGRyxBQUVVLEFBQ2I7dUJBSEcsQUFHUSxBQUNYOzBCQUpHLEFBSVcsQUFDZDtxQkFMRyxBLEFBS0s7QUFMTCxBQUNILGlCLEFBYUo7aUdBQVcsaUJBQUEsQUFBTSxPQUFOOzBFQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ0E7QUFGQywyQ0FFVSx3QkFBUyxNQUFBLEFBQUssTUFGeEIsQUFFVSxBQUFvQjs4Q0FDSyxNQUhuQyxBQUd3QyxPQUh4QyxBQUdDLDBCQUhELEFBR0MsYUFIRCxBQUdjLG9CQUhkLEFBR2MsT0FIZCxBQUdxQix3QkFIckIsQUFHcUIsQUFDNUI7O3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBSnhCLEFBSVAsQUFBYyxBQUE4QjtnREFKckM7Z0RBQUE7dUNBTW9CLGNBQUEsQUFBSyxJQU56QixBQU1vQixBQUFTOztpQ0FBMUI7QUFOSCxvREFBQTtnREFBQTt1Q0FPRyxTQUFBLEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUNGLGFBQ0EsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BRmYsQUFFRixBQUF1QixVQUZyQixBQUdGLFdBSEUsQUFJSixLQUFLLEVBQUMsTUFBTSxTQVhYLEFBT0csQUFJQyxBQUFPLEFBQVM7O2lDQUN2QjsrQ0FBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFadkM7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBY0g7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFkM0IsQUFjSCxBQUFjLEFBQW9COztpQ0FFdEM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FoQlIsQUFnQlAsQUFBYyxBQUFVOztpQ0FoQmpCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBbUJIO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQUkscUJBQUEsQUFBQyx1Q0FBSyxTQUFOLE1BQWMsTUFBZCxBQUFtQjs4QkFBbkI7Z0NBQUosQUFBSTtBQUFBO2dCQUZaLEFBQ0ksQUFDSSxBQUVKLDRCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUpKLEFBSUksQUFDQSxxQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxnQ0FBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFDLGFBQWEsTUFBQSxBQUFNLE9BRDVCLEFBQ04sQUFBYyxBQUEyQjtBQUhqRDs7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBT0o7QUFQSTtBQUNJLGlDQU1QLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1DQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FEdEIsQUFDTixBQUFjLEFBQXFCO0FBSDNDOzs4QkFBQTtnQ0FaUixBQVVJLEFBRUksQUFPSjtBQVBJO0FBQ0ksaUNBTVAsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOEJBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQ04sT0FBQSxBQUFLLFNBQVMsRUFBQyxXQUFXLE1BQUEsQUFBTSxPQUQxQixBQUNOLEFBQWMsQUFBeUI7QUFIL0M7OzhCQUFBO2dDQXJCUixBQW1CSSxBQUVJLEFBT0o7QUFQSTtBQUNJLGlDQU1SLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBNUJKLEFBNEJJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7ZUFuQ1osQUFDSSxBQUtJLEFBNkJJLEFBSWY7Ozs7O21IQWpFNEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE1BQWxCLEE7a0VBRUQsRUFBRSxTQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFiVSxBLEFBNkV6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc2lkZGhhbnQvRG9jdW1lbnRzL0V0aGVyZXVtL2tpY2tzdGFydCJ9