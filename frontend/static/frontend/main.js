/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./frontend/src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/src/index.js":
/*!********************************************!*\
  !*** ./frontend/src/index.js + 67 modules ***!
  \********************************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@emotion/core/dist/core.browser.esm.js (<- Module is referenced from these modules with unsupported syntax: ./node_modules/react-spinners/CircleLoader.js (referenced with amd require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/d3/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/date-fns/esm/format/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/date-fns/esm/parseISO/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-alert/dist/esm/react-alert.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-color/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-compound-slider/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-datepicker/es/index.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-faux-dom/lib/ReactFauxDOM.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-redux/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-spinners/CircleLoader.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-tooltip/dist/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/redux-devtools-extension/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/redux-thunk/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/redux/es/redux.js (<- Module is referenced from these modules with unsupported syntax: ./node_modules/redux-devtools-extension/index.js (referenced with cjs require)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.min.js
var bootstrap_min = __webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.min.js");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var css_bootstrap_min = __webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.min.css");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/core-js/index.js
var core_js = __webpack_require__("./node_modules/core-js/index.js");

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 7 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./node_modules/react-alert/dist/esm/react-alert.js
var react_alert = __webpack_require__("./node_modules/react-alert/dist/esm/react-alert.js");

// EXTERNAL MODULE: ./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js
var react_alert_template_basic = __webpack_require__("./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js");

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__("./node_modules/react-redux/es/index.js");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("./node_modules/axios/index.js");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./frontend/src/core/actions/types.js
// Reference this list for Redux action types
var GET_DASHBOARDS = "GET_DASHBOARDS";
var DELETE_DASHBOARD = "DELETE_DASHBOARD";
var ADD_DASHBOARD = "ADD_DASHBOARD";
var UPDATE_DASHBOARD = "UPDATE_DASHBOARD";
var GET_ERRORS = "GET_ERRORS";
var GET_A_DASHBOARD = "GET_A_DASHBOARD";
var CREATE_MESSAGE = "CREATE_MESSAGE";
var USER_LOADING = "USER_LOADING";
var USER_LOADED = "USER_LOADED";
var AUTH_ERROR = "AUTH_ERROR";
var LOGIN_SUCCESS = "LOGIN_SUCCESS";
var LOGIN_FAIL = "LOGIN_FAIL";
var LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
var LOGOUT_FAIL = "LOGOUT_FAIL";
var REGISTER_FAIL = "REGISTER_FAIL";
var REGISTER_SUCCESS = "REGISTER_SUCCESS";
var GET_KPIS = "GET_KPIS";
var GET_PILLAR_KPIS = "GET_PILLARS_KPI";
var CLEAR_PILLAR_KPIS = "CLEAR_PILLAR_KPIS";
var ADD_KPI = "ADD_KPI";
var UPDATE_KPI = "UPDATE_KPI";
var DELETE_KPI = "DELETE_KPI";
var CLEAR_KPIS = "CLEAR_KPIS";
var ADD_SERIES = "ADD_SERIES";
var GET_SERIES = "GET_SERIES";
var DELETE_SERIES = "DELETE_SERIES";
var UPDATE_SERIES = "UPDATE_SERIES";
var DELETE_DATAPOINT = "DELETE_DATAPOINT";
var UPDATE_DATAPOINT = "UPDATE_DATAPOINT";
var ADD_DATAPOINT = "ADD_DATAPOINT";
var ADD_ACTION = "ADD_ACTIONS";
var DELETE_ACTION = "DELETE_ACTIONS";
var UPDATE_ACTION = "UPDATE_ACTION";
var UPDATE_ACTION_TABLE = "UPDATE_ACTION_TABLE";
var GET_ACTION_TABLE = "GET_ACTION_TABLE";
var CLEAR_CURRENT_DASHBOARD = "CLEAR_CURRENT_DASHBOARD";
var CLEAR_ACTION_TABLES = "CLEAR_ACTION_TABLE";
var GET_AUDITS = "GET_AUDITS";
var ADD_AUDIT = "GET_AUDIT";
var UPDATE_AUDIT = "UPDATE_AUDIT";
var DELETE_AUDIT = "DELETE_AUDIT";
var GET_WINS = "GET_WIN";
var ADD_WIN = "ADD_WIN";
var UPDATE_WIN = "UPDATE_WIN";
var DELETE_WIN = "DELETE_WIN";
var GET_HEAT = "GET_HEAT";
var UPDATE_HEAT = "UPDATE_HEAT";
var ADD_IMAGE = "ADD_IMAGE";
var DELETE_IMAGE = "DELETE_IMAGE";
// CONCATENATED MODULE: ./frontend/src/core/actions/messages.js
 // CREATE MESSAGE

var messages_createMessage = function createMessage(msg) {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
}; // RETURN ERRORS

var messages_returnErrors = function returnErrors(msg, status) {
  return {
    type: GET_ERRORS,
    payload: {
      msg: msg,
      status: status
    }
  };
};
// CONCATENATED MODULE: ./frontend/src/core/actions/auth.js


 // Setup config with token - helper function

var tokenConfig = function tokenConfig(getState) {
  // Get token from state
  var token = getState().auth.token; // Headers

  var config = {
    headers: {
      "Content-Type": "application/json"
    }
  }; // If token, add to headers config

  if (token) {
    config.headers.Authorization = "Token ".concat(token);
  }

  return config;
}; // CHECK TOKEN & LOAD USER

var auth_loadUser = function loadUser() {
  return function (dispatch, getState) {
    // User Loading
    dispatch({
      type: USER_LOADING
    }); // Get token from state

    axios_default.a.get("/api/auth/user", tokenConfig(getState)).then(function (res) {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
  };
}; // LOGIN USER

var auth_login = function login(username, password) {
  return function (dispatch) {
    // Headers
    var config = {
      headers: {
        "Content-Type": "application/json"
      }
    }; // Request Body

    var body = JSON.stringify({
      username: username,
      password: password
    });
    axios_default.a.post("/api/auth/login", body, config).then(function (res) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
  };
}; // REGISTER USER

var auth_register = function register(_ref) {
  var username = _ref.username,
      password = _ref.password,
      email = _ref.email;
  return function (dispatch) {
    // Headers
    var config = {
      headers: {
        "Content-Type": "application/json"
      }
    }; // Request Body

    var body = JSON.stringify({
      username: username,
      email: email,
      password: password
    });
    axios_default.a.post("/api/auth/register", body, config).then(function (res) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
  };
}; // LOGOUT USER

var auth_logout = function logout() {
  return function (dispatch, getState) {
    axios_default.a.post("/api/auth/logout/", null, tokenConfig(getState)).then(function () {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
    });
  };
};
// CONCATENATED MODULE: ./frontend/src/scenes/portal/scenes/login/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// -----------------------------------------------------------------------------
//                            LOGIN COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
//
//
//           * Login component handles login markup and control
//       * Validates users and supplies Auth tokens via the login action
// -----------------------------------------------------------------------------





var login_Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      username: "",
      password: ""
    }, _this.onSubmit = function (e) {
      // Dispatches a login action which will check credentials
      var login = _this.props.login;
      var _this$state = _this.state,
          username = _this$state.username,
          password = _this$state.password;
      e.preventDefault();
      login(username, password);
    }, _this.onChange = function (e) {
      // Updates the local state with user input from form
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    }, _temp));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      // Redirects users which are already authenticated to there homepage
      var isAuthenticated = this.props.isAuthenticated;

      if (isAuthenticated) {
        return react_default.a.createElement(react_router_dom["Redirect"], {
          to: "/"
        });
      } // Need the current username and password to update the inputs


      var _this$state2 = this.state,
          username = _this$state2.username,
          password = _this$state2.password;
      return react_default.a.createElement("div", {
        className: "col-md-6 m-auto"
      }, react_default.a.createElement("div", {
        className: "card card-body mt-5"
      }, react_default.a.createElement("h2", {
        className: "text-center"
      }, "Login"), react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "username"
      }, "Username"), react_default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "username",
        onChange: this.onChange,
        value: username
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "password"
      }, "Password"), react_default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        onChange: this.onChange,
        value: password
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Login")), react_default.a.createElement("p", null, "Don't have an account?", " ", react_default.a.createElement(react_router_dom["Link"], {
        to: "/register"
      }, "Sign up your department today!")))));
    }
  }]);

  return Login;
}(react["Component"]);
login_Login.propTypes = {
  login: prop_types_default.a.func.isRequired,
  isAuthenticated: prop_types_default.a.bool.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ var scenes_login = (Object(es["connect"])(mapStateToProps, {
  login: auth_login
})(login_Login));
// CONCATENATED MODULE: ./frontend/src/scenes/portal/scenes/register/index.js
function register_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { register_typeof = function _typeof(obj) { return typeof obj; }; } else { register_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return register_typeof(obj); }

function register_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function register_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function register_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function register_createClass(Constructor, protoProps, staticProps) { if (protoProps) register_defineProperties(Constructor.prototype, protoProps); if (staticProps) register_defineProperties(Constructor, staticProps); return Constructor; }

function register_possibleConstructorReturn(self, call) { if (call && (register_typeof(call) === "object" || typeof call === "function")) { return call; } return register_assertThisInitialized(self); }

function register_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function register_getPrototypeOf(o) { register_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return register_getPrototypeOf(o); }

function register_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) register_setPrototypeOf(subClass, superClass); }

function register_setPrototypeOf(o, p) { register_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return register_setPrototypeOf(o, p); }

// -----------------------------------------------------------------------------
//                            REGISTER COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
//
//
//            * Register component privides a form to create a new account
//            * Apon succesful completion the user will be auto logged in
// -----------------------------------------------------------------------------






/**
 * Register component privides a form to create a new account
 * Apon succesful completion the user will be auto logged in
 */

var register_Register =
/*#__PURE__*/
function (_Component) {
  register_inherits(Register, _Component);

  function Register() {
    var _getPrototypeOf2;

    var _temp, _this;

    register_classCallCheck(this, Register);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return register_possibleConstructorReturn(_this, (_temp = _this = register_possibleConstructorReturn(this, (_getPrototypeOf2 = register_getPrototypeOf(Register)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      username: "",
      email: "",
      password: "",
      password2: ""
    }, _this.onSubmit = function (e) {
      e.preventDefault(); // Need current field values to create a new user instance

      var _this$state = _this.state,
          username = _this$state.username,
          email = _this$state.email,
          password = _this$state.password,
          password2 = _this$state.password2;
      var _this$props = _this.props,
          createMessage = _this$props.createMessage,
          register = _this$props.register; // Check password consitancy

      if (password !== password2) {
        createMessage({
          passwordsNotMatch: "Passwords Do Not Match"
        });
      } else {
        var newUser = {
          username: username,
          password: password,
          email: email
        }; // Create new user

        register(newUser);
      }
    }, _this.onChange = function (e) {
      // Update state to relfect current field values
      _this.setState(register_defineProperty({}, e.target.name, e.target.value));
    }, _temp));
  }

  register_createClass(Register, [{
    key: "render",
    value: function render() {
      var isAuthenticated = this.props.isAuthenticated; // Redirect users whom already have valid Auth tokens

      if (isAuthenticated) {
        return react_default.a.createElement(react_router_dom["Redirect"], {
          to: "/"
        });
      } // Need these state values to update form fields


      var _this$state2 = this.state,
          username = _this$state2.username,
          email = _this$state2.email,
          password = _this$state2.password,
          password2 = _this$state2.password2;
      return react_default.a.createElement("div", {
        className: "col-md-6 m-auto"
      }, react_default.a.createElement("div", {
        className: "card card-body mt-5"
      }, react_default.a.createElement("h2", {
        className: "text-center"
      }, "Register Your Department"), react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "username"
      }, "Username"), react_default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "username",
        onChange: this.onChange,
        value: username
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "email"
      }, "Email"), react_default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "email",
        onChange: this.onChange,
        value: email
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "password"
      }, "Password"), react_default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        onChange: this.onChange,
        value: password
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "password2"
      }, "Confirm Password"), react_default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password2",
        onChange: this.onChange,
        value: password2
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Register")), react_default.a.createElement("p", null, "Already have an account?", ' ', react_default.a.createElement(react_router_dom["Link"], {
        to: "/login"
      }, " Login!")))));
    }
  }]);

  return Register;
}(react["Component"]);
register_Register.propTypes = {
  register: prop_types_default.a.func.isRequired,
  isAuthenticated: prop_types_default.a.bool.isRequired,
  createMessage: prop_types_default.a.func.isRequired
};

var register_mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ var scenes_register = (Object(es["connect"])(register_mapStateToProps, {
  register: auth_register,
  createMessage: messages_createMessage
})(register_Register));
// CONCATENATED MODULE: ./frontend/src/core/actions/dashboards.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { dashboards_defineProperty(target, key, source[key]); }); } return target; }

function dashboards_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/*---------------------------------------
          DASHBOARD ACTIONS
-----------------------------------------*/
// Thunk actions which consume and request the server's RestFUL API

var dashboards_getDashboards = function getDashboards() {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a.get("/api/dashboards/", tokenConfig(getState)).then(function (res) {
      /* Dispatch action to reducer once data is retrieved from server
        Payload is an array of all dashboards belonging to the user */
      dispatch({
        type: GET_DASHBOARDS,
        payload: res.data
      });
    }) // If there is an error, dispatch a error message to reducer
    ["catch"](function (err) {
      return dispatch(messages_returnErrors(err.response.data, err.response.status));
    });
  };
}; // DELETE DASHBOARD

var dashboards_deleteDashboard = function deleteDashboard(id) {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a["delete"]("/api/dashboards/".concat(id, "/"), tokenConfig(getState)).then(function () {
      // Dispatch a message action which notifies user of success
      dispatch(messages_createMessage({
        deleteDashboard: "Dashboard Deleted!"
      }));
      /* Dispatch delete action to reducer. Payload is the id of the deleted dashboard.
        This way the reducer can run a filter on the dashboards in the store state */

      dispatch({
        type: DELETE_DASHBOARD,
        payload: id
      });
    }) // If there is an error, dispatch a error message to reducer
    ["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
    });
  };
};
var dashboards_updateDashboard = function updateDashboard(dashboard, id) {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a.patch("/api/dashboards/".concat(id, "/"), dashboard, tokenConfig(getState)).then(function (res) {
      // Message informing user of success
      dispatch(messages_createMessage({
        updateDashboard: "Dashboard Updated!"
      })); // Send action to reducer. Payload is the object representing updated KPI

      dispatch({
        type: UPDATE_DASHBOARD,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_getADashboard = function getADashboard(id) {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a.get("api/dashboards/".concat(id, "/"), tokenConfig(getState)).then(function (res) {
      // Dispatch the action to reducer. Payload is the dashboard object
      dispatch({
        type: GET_A_DASHBOARD,
        payload: res.data
      });
    }) // If there is an error, dispatch a error message to reducer
    ["catch"](function (err) {
      return dispatch(messages_returnErrors(err.response.data, err.response.status));
    });
  };
}; // ADD DASHBOARD

var dashboards_addDashboard = function addDashboard(dashboard) {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a.post("/api/dashboards/", dashboard, tokenConfig(getState)).then(function (res) {
      // Dispatch a message action which notifies user of success
      dispatch(messages_createMessage({
        addDashboard: "Dashboard Added!"
      })); // Dispatch the action to reducer. Payload is the dashboard which was added

      dispatch({
        type: ADD_DASHBOARD,
        payload: res.data
      });
    }) // If there is an error, dispatch a error message to reducer
    ["catch"](function (err) {
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
      dispatch(messages_returnErrors(err.response.data, err.response.status));
    });
  };
};
/*---------------------------------------
             KPI ACTIONS
-----------------------------------------*/

var dashboards_getKpis = function getKpis(id) {
  var pillar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return function (dispatch, getState) {
    // Send request to server
    var endpoint = pillar ? "/api/kpis/?dashboard=".concat(id, "&pillar=").concat(pillar) : "/api/kpis/?dashboard=".concat(id);
    axios_default.a.get(endpoint, tokenConfig(getState)).then(function (res) {
      // Dispatch get action to reducer. Payload is a list of all KPIs for the given dashboard
      dispatch({
        type: GET_KPIS,
        payload: res.data
      });
    }) // If there is an error, dispatch a error message to reducer
    ["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
    });
  };
};
var dashboards_addKpi = function addKpi(kpi) {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a.post("/api/kpis/", kpi, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        addKpi: "KPI Added!"
      }));
      dispatch({
        type: ADD_KPI,
        payload: res.data
      });
    }) // If there is an error, dispatch a error message to reducer
    ["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_updateKpi = function updateKpi(kpi, id) {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a.patch("/api/kpis/".concat(id, "/"), kpi, tokenConfig(getState)).then(function (res) {
      // Message informing user of success
      dispatch(messages_createMessage({
        updateKpi: "KPI Updated!"
      })); // Send action to reducer. Payload is the object representing updated KPI

      dispatch({
        type: UPDATE_KPI,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_deleteKpi = function deleteKpi(id) {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a // Payload is id for filtering the store state
    ["delete"]("/api/kpis/".concat(id, "/"), tokenConfig(getState)).then(function () {
      dispatch(messages_createMessage({
        deleteKpi: "KPI deleted"
      }));
      dispatch({
        type: DELETE_KPI,
        payload: id
      });
    })["catch"](function (err) {
      return dispatch(messages_returnErrors(err.response.data, err.response.status));
    });
  };
};
var dashboards_clearKpis = function clearKpis() {
  return function (dispatch) {
    dispatch({
      type: CLEAR_KPIS
    });
  };
};
/*---------------------------------------
             SERIES ACTIONS
-----------------------------------------*/

var dashboards_addSeries = function addSeries(series) {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a.post("/api/series/", series, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        addSeries: "Series Added!"
      }));
      var entryCount = res.data.entries.length;
      dispatch(messages_createMessage({
        entriesCreated: "".concat(entryCount, " Entries Created")
      }));
      dispatch({
        type: ADD_SERIES,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_getSeries = function getSeries(id) {
  var kpi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return function (dispatch, getState) {
    // Send request to server
    var endpoint = kpi ? "/api/series/".concat(id, "/").concat(kpi) : "/api/series/".concat(id);
    axios_default.a.get(endpoint, tokenConfig(getState)).then(function (res) {
      dispatch({
        type: GET_SERIES,
        payload: res.data
      });
    });
  };
};
var dashboards_updateSeries = function updateSeries(series, id) {
  return function (dispatch, getState) {
    axios_default.a.patch("/api/series/".concat(id, "/"), series, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        updateSeries: "Series Updated"
      }));
      dispatch({
        type: UPDATE_SERIES,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_deleteSeries = function deleteSeries(id) {
  return function (dispatch, getState) {
    axios_default.a["delete"]("/api/series/".concat(id, "/"), tokenConfig(getState)).then(function () {
      dispatch(messages_createMessage({
        deleteSeries: "Series Deleted"
      }));
      dispatch({
        type: DELETE_SERIES,
        payload: id
      });
    });
  };
};
var dashboards_updateDatapoint = function updateDatapoint(datapoint, id) {
  return function (dispatch, getState) {
    console.log(datapoint);
    axios_default.a.patch("/api/datapoint/".concat(id, "/"), datapoint, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        updateDatapoint: "Datapoint Updated"
      }));
      dispatch({
        type: UPDATE_DATAPOINT,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_deleteDatapoint = function deleteDatapoint(id) {
  return function (dispatch, getState) {
    axios_default.a["delete"]("/api/datapoint/".concat(id, "/"), tokenConfig(getState)).then(function () {
      dispatch(messages_createMessage({
        deleteDatapoint: "Datapoint Deleted"
      }));
      dispatch({
        type: DELETE_DATAPOINT,
        payload: id
      });
    });
  };
};
var dashboards_addDatapoint = function addDatapoint(datapoint) {
  return function (dispatch, getState) {
    axios_default.a.post("/api/datapoint/", datapoint, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        addDatapoint: "Datapoint Added"
      }));
      dispatch({
        type: ADD_DATAPOINT,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_addAction = function addAction(action) {
  return function (dispatch, getState) {
    axios_default.a.post("/api/action/", action, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        addAction: "Action Added"
      }));
      dispatch({
        type: ADD_ACTION,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_getActionTable = function getActionTable() {
  var dashboard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return function (dispatch, getState) {
    var endpoint = dashboard ? "/api/actionTable/?dashboard=".concat(dashboard) : "/api/actionTable/";
    axios_default.a.get(endpoint, tokenConfig(getState)).then(function (res) {
      dispatch({
        type: GET_ACTION_TABLE,
        payload: res.data
      });
    });
  };
};
var dashboards_deleteAction = function deleteAction(id) {
  return function (dispatch, getState) {
    axios_default.a["delete"]("api/action/".concat(id, "/"), tokenConfig(getState)).then(function () {
      dispatch(messages_createMessage({
        deleteAction: "Action Deleted"
      }));
      dispatch({
        type: DELETE_ACTION,
        payload: id
      });
    });
  };
};
var dashboards_updateAction = function updateAction(action, id) {
  return function (dispatch, getState) {
    axios_default.a.patch("api/action/".concat(id, "/"), action, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        updateAction: "Action Updated"
      }));
      dispatch({
        type: UPDATE_ACTION,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_updateActionTable = function updateActionTable(actionTable, id, parent) {
  return function (dispatch, getState) {
    axios_default.a.patch("api/actionTable/".concat(id, "/?parent=").concat(parent || "null"), actionTable, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        updateActionTable: "Connection Made"
      }));
      dispatch({
        type: UPDATE_ACTION_TABLE,
        payload: res.data
      });
    });
  };
};
var dashboards_clearActionTables = function clearActionTables() {
  return function (dispatch) {
    dispatch({
      type: CLEAR_ACTION_TABLES
    });
  };
};
var dashboards_clearCurrentDashboard = function clearCurrentDashboard() {
  return function (dispatch) {
    dispatch({
      type: CLEAR_CURRENT_DASHBOARD
    });
  };
};
var dashboards_getAudits = function getAudits(dashboardId) {
  return function (dispatch, getState) {
    axios_default.a.get("api/audit/?dashboard=".concat(dashboardId), tokenConfig(getState)).then(function (res) {
      dispatch({
        type: GET_AUDITS,
        payload: res.data
      });
    });
  };
};
var dashboards_addAudit = function addAudit(audit) {
  return function (dispatch, getState) {
    axios_default.a.post("api/audit/", audit, tokenConfig(getState)).then(function (res) {
      // Dispatch a message action which notifies user of success
      dispatch(messages_createMessage({
        addAudit: "Audit Added!"
      })); // Dispatch the action to reducer. Payload is the dashboard which was added

      dispatch({
        type: ADD_AUDIT,
        payload: res.data
      });
    }) // If there is an error, dispatch a error message to reducer
    ["catch"](function (err) {
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
      dispatch(messages_returnErrors(err.response.data, err.response.status));
    });
  };
};
var dashboards_updateAudit = function updateAudit(audit, id) {
  return function (dispatch, getState) {
    axios_default.a.patch("/api/audit/".concat(id, "/"), audit, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        updateAudit: "Audit Updated"
      }));
      dispatch({
        type: UPDATE_AUDIT,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_deleteAudit = function deleteAudit(id) {
  return function (dispatch, getState) {
    axios_default.a["delete"]("/api/audit/".concat(id, "/"), tokenConfig(getState)).then(function () {
      dispatch(messages_createMessage({
        deleteAudit: "Audit Deleted"
      }));
      dispatch({
        type: DELETE_AUDIT,
        payload: id
      });
    });
  };
};
var dashboards_getWins = function getWins(dashboardId) {
  return function (dispatch, getState) {
    axios_default.a.get("api/win/?dashboard=".concat(dashboardId), tokenConfig(getState)).then(function (res) {
      dispatch({
        type: GET_WINS,
        payload: res.data
      });
    });
  };
};
var dashboards_addWin = function addWin(win) {
  return function (dispatch, getState) {
    axios_default.a.post("api/win/", win, tokenConfig(getState)).then(function (res) {
      // Dispatch a message action which notifies user of success
      dispatch(messages_createMessage({
        addWin: "Win Added!"
      })); // Dispatch the action to reducer. Payload is the dashboard which was added

      dispatch({
        type: ADD_WIN,
        payload: res.data
      });
    }) // If there is an error, dispatch a error message to reducer
    ["catch"](function (err) {
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
      dispatch(messages_returnErrors(err.response.data, err.response.status));
    });
  };
};
var dashboards_updateWin = function updateWin(win, id) {
  return function (dispatch, getState) {
    axios_default.a.patch("/api/win/".concat(id, "/"), win, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        updateWin: "Win Updated"
      }));
      dispatch({
        type: UPDATE_WIN,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_deleteWin = function deleteWin(id) {
  return function (dispatch, getState) {
    axios_default.a["delete"]("/api/win/".concat(id, "/"), tokenConfig(getState)).then(function () {
      dispatch(messages_createMessage({
        deleteWin: "Win Deleted"
      }));
      dispatch({
        type: DELETE_WIN,
        payload: id
      });
    });
  };
};
var dashboards_updateHeat = function updateHeat(heat, id) {
  return function (dispatch, getState) {
    axios_default.a.patch("/api/heat/".concat(id, "/"), heat, tokenConfig(getState)).then(function (res) {
      dispatch({
        type: UPDATE_HEAT,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch(messages_returnErrors(err.response.data, err.response.status));
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
    });
  };
};
var dashboards_getHeat = function getHeat(dashboardId) {
  return function (dispatch, getState) {
    axios_default.a.get("api/heat/?dashboard=".concat(dashboardId), tokenConfig(getState)).then(function (res) {
      dispatch({
        type: GET_HEAT,
        payload: res.data
      });
    });
  };
};
var dashboards_addImage = function addImage(image) {
  return function (dispatch, getState) {
    var formData = new FormData();
    formData.append("dashboard", JSON.stringify(image.dashboard));
    formData.append("image", image.image);
    axios_default.a.post("api/image/", formData, {
      headers: _objectSpread({}, tokenConfig(getState).headers, {
        "Content-Type": "multipart/form-data"
      })
    }).then(function (res) {
      // Dispatch a message action which notifies user of success
      dispatch(messages_createMessage({
        addImage: "Image Added!"
      })); // Dispatch the action to reducer. Payload is the dashboard which was added

      dispatch({
        type: ADD_IMAGE,
        payload: res.data
      });
    }) // If there is an error, dispatch a error message to reducer
    ["catch"](function (err) {
      dispatch(messages_createMessage({
        invalidForm: "Form is invalid"
      }));
      dispatch(messages_returnErrors(err, err));
    });
  };
};
var dashboards_deleteImage = function deleteImage(id) {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a // Payload is id for filtering the store state
    ["delete"]("/api/image/".concat(id, "/"), tokenConfig(getState)).then(function () {
      dispatch(messages_createMessage({
        deleteImage: "Image deleted"
      }));
      dispatch({
        type: DELETE_IMAGE,
        payload: id
      });
    })["catch"](function (err) {
      return dispatch(messages_returnErrors(err.response.data, err.response.status));
    });
  };
};
// EXTERNAL MODULE: ./node_modules/react-spinners/CircleLoader.js
var CircleLoader = __webpack_require__("./node_modules/react-spinners/CircleLoader.js");
var CircleLoader_default = /*#__PURE__*/__webpack_require__.n(CircleLoader);

// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 5 modules
var core_browser_esm = __webpack_require__("./node_modules/@emotion/core/dist/core.browser.esm.js");

// CONCATENATED MODULE: ./frontend/src/core/config/styleConfig.js
// COLORS
var primaryColor = "#EEEEEE";
var secondaryColor = "#EEEEEE";
var accentColor = "#9BB0DB";
// CONCATENATED MODULE: ./frontend/src/core/components/layout/LoadingScreen.js
// DEPENDANCIES


 // CONFIG


var override =  false ? undefined : {
  name: "qdsigz-override",
  styles: "display:flex;margin:0 auto 20px auto;justify-content:center;align-items:center;label:override;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdGhhdGNcXERvY3VtZW50c1xccWRjaV9lbnZpcm9tZW50XFxxZGNpX3Byb2plY3RcXGZyb250ZW5kXFxzcmNcXGNvcmVcXGNvbXBvbmVudHNcXGxheW91dFxcTG9hZGluZ1NjcmVlbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRb0IiLCJmaWxlIjoiQzpcXFVzZXJzXFx0aGF0Y1xcRG9jdW1lbnRzXFxxZGNpX2Vudmlyb21lbnRcXHFkY2lfcHJvamVjdFxcZnJvbnRlbmRcXHNyY1xcY29yZVxcY29tcG9uZW50c1xcbGF5b3V0XFxMb2FkaW5nU2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gREVQRU5EQU5DSUVTXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENpcmNsZUxvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvQ2lyY2xlTG9hZGVyXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XHJcblxyXG4vLyBDT05GSUdcclxuaW1wb3J0IHsgYWNjZW50Q29sb3IgfSBmcm9tIFwiLi4vLi4vY29uZmlnL3N0eWxlQ29uZmlnXCI7XHJcblxyXG5jb25zdCBvdmVycmlkZSA9IGNzc2BcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbS1hdXRvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgPENpcmNsZUxvYWRlclxyXG4gICAgICAgICAgICBzaXplVW5pdD1cInB4XCJcclxuICAgICAgICAgICAgc2l6ZT17NjB9XHJcbiAgICAgICAgICAgIGNzcz17b3ZlcnJpZGV9XHJcbiAgICAgICAgICAgIGNvbG9yPXthY2NlbnRDb2xvcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luOiAwIH19PkxvYWRpbmc8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */"
};
/* harmony default export */ var LoadingScreen = (function () {
  return react_default.a.createElement("div", {
    className: "col-md-6 m-auto"
  }, react_default.a.createElement("div", {
    className: "card text-center mt-5"
  }, react_default.a.createElement("div", {
    className: "card card-body"
  }, react_default.a.createElement(CircleLoader_default.a, {
    sizeUnit: "px",
    size: 60,
    css: override,
    color: accentColor
  }), react_default.a.createElement("h1", {
    style: {
      margin: 0
    }
  }, "Loading"))));
});
// CONCATENATED MODULE: ./frontend/src/core/components/ui/Carousel.js
function Carousel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Carousel_typeof = function _typeof(obj) { return typeof obj; }; } else { Carousel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Carousel_typeof(obj); }

function Carousel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Carousel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Carousel_createClass(Constructor, protoProps, staticProps) { if (protoProps) Carousel_defineProperties(Constructor.prototype, protoProps); if (staticProps) Carousel_defineProperties(Constructor, staticProps); return Constructor; }

function Carousel_possibleConstructorReturn(self, call) { if (call && (Carousel_typeof(call) === "object" || typeof call === "function")) { return call; } return Carousel_assertThisInitialized(self); }

function Carousel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Carousel_getPrototypeOf(o) { Carousel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Carousel_getPrototypeOf(o); }

function Carousel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Carousel_setPrototypeOf(subClass, superClass); }

function Carousel_setPrototypeOf(o, p) { Carousel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Carousel_setPrototypeOf(o, p); }





var Carousel_Carousel =
/*#__PURE__*/
function (_Component) {
  Carousel_inherits(Carousel, _Component);

  function Carousel(props) {
    Carousel_classCallCheck(this, Carousel);

    return Carousel_possibleConstructorReturn(this, Carousel_getPrototypeOf(Carousel).call(this, props));
  }

  Carousel_createClass(Carousel, [{
    key: "render",
    value: function render() {
      var images = this.props.images;
      return react_default.a.createElement("div", {
        id: "demo",
        className: "carousel slide ml-auto mr-auto",
        "data-ride": "carousel"
      }, react_default.a.createElement("ul", {
        className: "carousel-indicators"
      }, images.map(function (image, i) {
        return react_default.a.createElement("li", {
          "data-target": "#demo",
          className: i === 0 ? "active" : "",
          "data-slide-to": i
        });
      })), react_default.a.createElement("div", {
        className: "carousel-inner"
      }, images.map(function (image, i) {
        return react_default.a.createElement("div", {
          className: "carousel-item ".concat(i === 0 ? "active" : "")
        }, react_default.a.createElement("img", {
          style: {
            maxHeight: "300px",
            maxWidth: "1500px"
          },
          src: image.image,
          alt: true
        }));
      })), react_default.a.createElement("a", {
        className: "carousel-control-prev",
        href: "#demo",
        "data-slide": "prev"
      }, react_default.a.createElement("span", {
        className: "carousel-control-prev-icon"
      })), react_default.a.createElement("a", {
        className: "carousel-control-next",
        href: "#demo",
        "data-slide": "next"
      }, react_default.a.createElement("span", {
        className: "carousel-control-next-icon"
      })));
    }
  }]);

  return Carousel;
}(react["Component"]);

Carousel_Carousel.propTypes = {
  images: prop_types_default.a.array.isRequired
};
/* harmony default export */ var ui_Carousel = (Carousel_Carousel);
// EXTERNAL MODULE: ./node_modules/d3/index.js + 483 modules
var d3 = __webpack_require__("./node_modules/d3/index.js");

// EXTERNAL MODULE: ./node_modules/react-faux-dom/lib/ReactFauxDOM.js
var ReactFauxDOM = __webpack_require__("./node_modules/react-faux-dom/lib/ReactFauxDOM.js");

// CONCATENATED MODULE: ./frontend/src/core/config/dashboardConfig.js
// Configuration for table headers and form controls

/********************************************
 *
 * FORM CONTROL CHOICES
 *
 ********************************************/
var PLOT_TYPE_CHOICES = [{
  id: "li",
  name: "Connected Scatter Plot"
}];
var DASHBOARD_TYPE_CHOICES = [{
  id: 0,
  name: "QDCI Dashboard"
}];
var KPI_TYPE_CHOICES = [{
  id: 0,
  name: "Deviation"
}, {
  id: 1,
  name: "Win-Lose"
}, {
  id: 2,
  name: "Threshold"
}];
var LEVEL_CHOICES = [{
  id: 1,
  name: "Level 1"
}, {
  id: 2,
  name: "Level 2"
}, {
  id: 3,
  name: "Level 3"
}, {
  id: 4,
  name: "Level 4"
}];
var PILLAR_CHOICES = [{
  id: "Plus",
  name: "Safety"
}, {
  id: "Q",
  name: "Quality"
}, {
  id: "D",
  name: "Delivery"
}, {
  id: "C",
  name: "Cost"
}, {
  id: "I",
  name: "Involvement"
}];
var FREQUENCY_CHOICES = [{
  id: 0,
  name: "Monthly"
}, {
  id: 1,
  name: "Weekly"
}, {
  id: 2,
  name: "Bi-Weekly"
}];
/********************************************
 *
 * TABLE HEADERS
 *
 ********************************************/

var DATAPOINT_TABLE_HEADERS = [{
  name: "Value",
  prop: "value"
}, {
  name: "Target",
  prop: "target"
}, {
  name: "Date",
  prop: "date"
}];
var KPI_TABLE_HEADERS = [{
  name: "Name",
  prop: "name"
}, {
  name: "Pillar",
  prop: "pillar",
  map: function map(pillar) {
    return PILLAR_CHOICES.filter(function (choice) {
      return choice.id === pillar;
    })[0].name;
  }
}, {
  name: "Frequency",
  prop: "frequency",
  map: function map(frequency) {
    return FREQUENCY_CHOICES[frequency].name;
  }
}, {
  name: "Type",
  prop: "kpi_type",
  map: function map(kpi_type) {
    return KPI_TYPE_CHOICES[kpi_type].name;
  }
}];
var SERIES_TABLE_HEADERS = [{
  name: "Name",
  prop: "name"
}, {
  name: "Plot Type",
  prop: "plot_type"
}, {
  name: "Color",
  prop: "color"
}];
var AUDIT_TABLE_HEADERS = [{
  name: "Description",
  prop: "description"
}, {
  name: "Start Date",
  prop: "start_date"
}, {
  name: "End Date",
  prop: "end_date"
}];
var WIN_TABLE_HEADERS = [{
  name: "Description",
  prop: "description"
}, {
  name: "Participants",
  prop: "participants"
}, {
  name: "Date",
  prop: "date"
}];
var ACTION_TABLE_HEADERS = [{
  name: "Letter",
  prop: "letter"
}, {
  name: "Problem",
  prop: "problem"
}, {
  name: "Root Cause",
  prop: "root_cause"
}, {
  name: "Solution",
  prop: "solution"
}, {
  name: "Leader",
  prop: "leader"
}, {
  name: "Date",
  prop: "date",
  date: true
}];
/********************************************
 *
 * MISCELLANEOUS
 *
 ********************************************/

var PILLAR_LABELS = [{
  date: "2019-01-01"
}, {
  date: "2019-02-01"
}, {
  date: "2019-03-01"
}, {
  date: "2019-04-01"
}, {
  date: "2019-05-01"
}, {
  date: "2019-06-01"
}, {
  date: "2019-07-01"
}, {
  date: "2019-08-01"
}, {
  date: "2019-09-01"
}, {
  date: "2019-10-01"
}, {
  date: "2019-11-01"
}, {
  date: "2019-12-01"
}];
var DEFAULT_ACTION_TABLES = ["Short Term Action Plan", "Mid Term Action Plan", "Upper Level Escalations", "Lower Level Escalations"];
var THRESHOLD_TYPE_GREATER = 0;
var THRESHOLD_TYPE_LESS = 1;
var KPI_TYPE_DEVIATION = 0;
var KPI_TYPE_WIN_LOSE = 1;
var KPI_TYPE_THRESHOLD = 2;
// CONCATENATED MODULE: ./frontend/src/core/components/d3charts/ColorHelpers.js

var ColorHelpers_getColor = function getColor(_ref) {
  var safe_deviation = _ref.safe_deviation,
      danger_deviation = _ref.danger_deviation,
      kpi_type = _ref.kpi_type,
      warning_margin = _ref.warning_margin,
      threshold_type = _ref.threshold_type,
      isPercentage = _ref.isPercentage,
      value = _ref.value,
      target = _ref.target;
  var color = "#F2F2F2";
  var deviation = (value / target - 1) * 100;
  var abs_deviation = Math.abs(deviation);
  if (value == null) return color;

  switch (kpi_type) {
    case KPI_TYPE_DEVIATION:
      if (abs_deviation < safe_deviation) color = "green";else if (abs_deviation > safe_deviation && abs_deviation < danger_deviation) color = "orange";else color = "red";
      break;

    case KPI_TYPE_THRESHOLD:
      if (!isPercentage) return ColorHelpers_getAbsoluteColor(target, value, warning_margin, threshold_type);

      switch (threshold_type) {
        case THRESHOLD_TYPE_GREATER:
          if (value >= target) color = "green";else if (deviation < warning_margin) color = "red";else color = "orange";
          break;

        case THRESHOLD_TYPE_LESS:
          if (value <= target) color = "green";else if (deviation > warning_margin) color = "red";else color = "orange";
          break;
      }

      break;

    case KPI_TYPE_WIN_LOSE:
      switch (threshold_type) {
        case THRESHOLD_TYPE_GREATER:
          if (value >= target) color = "green";else color = "red";
          break;

        case THRESHOLD_TYPE_LESS:
          if (value <= target) color = "green";else color = "red";
          break;
      }

  }

  return color;
};

var ColorHelpers_getAbsoluteColor = function getAbsoluteColor(target, value, warning_margin, threshold_type) {
  var color = "#F2F2F2";

  switch (threshold_type) {
    case THRESHOLD_TYPE_GREATER:
      if (value >= target) color = "green";else if (value < target && value >= warning_margin) color = "orange";else color = "red";
      break;

    case THRESHOLD_TYPE_LESS:
      if (value <= target) color = "green";else if (value > target && value <= warning_margin) color = "orange";else color = "red";
      break;
  }

  return color;
};
// CONCATENATED MODULE: ./frontend/src/core/components/d3charts/pillar.js
function pillar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pillar_typeof = function _typeof(obj) { return typeof obj; }; } else { pillar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pillar_typeof(obj); }

function pillar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { pillar_defineProperty(target, key, source[key]); }); } return target; }

function pillar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function pillar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pillar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pillar_createClass(Constructor, protoProps, staticProps) { if (protoProps) pillar_defineProperties(Constructor.prototype, protoProps); if (staticProps) pillar_defineProperties(Constructor, staticProps); return Constructor; }

function pillar_possibleConstructorReturn(self, call) { if (call && (pillar_typeof(call) === "object" || typeof call === "function")) { return call; } return pillar_assertThisInitialized(self); }

function pillar_getPrototypeOf(o) { pillar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pillar_getPrototypeOf(o); }

function pillar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pillar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pillar_setPrototypeOf(subClass, superClass); }

function pillar_setPrototypeOf(o, p) { pillar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pillar_setPrototypeOf(o, p); }

// DEPENDANCIES




 // COMPONENTS



/**
 * Pillar component renders individual +QDCI Pillars using d3 and react-faux-dom
 * Recieves props "kpis" which contains all information for kpis
 */

var xFactor = 4;

var pillar_Pillar =
/*#__PURE__*/
function (_React$Component) {
  pillar_inherits(Pillar, _React$Component);

  function Pillar(props) {
    var _this;

    pillar_classCallCheck(this, Pillar);

    _this = pillar_possibleConstructorReturn(this, pillar_getPrototypeOf(Pillar).call(this, props));
    _this.renderD3 = _this.renderD3.bind(pillar_assertThisInitialized(_this));
    _this.updateD3 = _this.updateD3.bind(pillar_assertThisInitialized(_this));
    return _this;
  } // Trigger D3 intial render()


  pillar_createClass(Pillar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderD3();
      this.updateD3();
    } // Triger D3 update()

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var kpis = this.props.kpis;

      if (kpis !== prevProps.kpis) {
        this.updateD3();
      }
    } // Renders svg markup in the chart props

  }, {
    key: "render",
    value: function render() {
      var chart = this.props.chart;
      return react_default.a.createElement("div", {
        style: {
          margin: "".concat(10, "px ", 0)
        }
      }, chart);
    } // Renders D3 chart to the faux DOM

  }, {
    key: "renderD3",
    value: function renderD3() {
      var _this$props = this.props,
          connectFauxDOM = _this$props.connectFauxDOM,
          animateFauxDOM = _this$props.animateFauxDOM;
      var faux = connectFauxDOM("svg", "chart");
      var plotSize = 200;
      var _this$props2 = this.props,
          letter = _this$props2.letter,
          dashboardId = _this$props2.dashboardId,
          labeled = _this$props2.labeled;
      var radius = plotSize / xFactor;
      var labelScale = labeled ? 0.4 : 1;
      var svg = d3["select"](faux).attr("id", "chartPillar").attr("xmlns", "http://www.w3.org/2000/svg").attr("xmlnsXlink", "http://www.w3.org/1999/xlink").attr("viewBox", "0 0 ".concat(plotSize, " ").concat(plotSize)).attr("preserveAspectRatio", "xMidYMid meet").classed("svg-content", true);
      var link = svg.append("a").attr("href", "#/pillar/".concat(dashboardId, "/").concat(letter === "+" ? "Plus" : letter)).style("text-decoration", "none");
      link.append("circle").attr("cx", plotSize / 2).attr("cy", plotSize / 2).attr("alignment-baseline", "middle").attr("r", 0).style("fill", accentColor).attr("id", "circle").transition().duration(800).attr("r", radius - plotSize / (50 * labelScale));
      animateFauxDOM(800);
      link.append("text").text(letter).attr("dx", "50%").attr("dy", "52%").attr("id", "text").attr("text-anchor", "middle").attr("alignment-baseline", "middle").style("fill", primaryColor).style("font-size", plotSize / 2.9).style("text-decoration", "none");
    } // Handles all D3 updates caused by changes to dataset

  }, {
    key: "updateD3",
    value: function updateD3() {
      var _this$props3 = this.props,
          kpis = _this$props3.kpis,
          letter = _this$props3.letter,
          labeled = _this$props3.labeled,
          onHover = _this$props3.onHover;
      var plotSize = 200;
      var radius = plotSize / xFactor;
      var count = kpis.length;
      var labelOffset = labeled ? -1 : 0;
      var labelScale = labeled ? 0.9 : 1;
      var parseTime = d3["timeParse"]("%Y-%m-%d");
      var formatTime = d3["timeFormat"]("%b"); // Sorting all data points in chronological order

      for (var y in kpis) {
        for (var x in kpis[y].series) {
          var series = kpis[y].series[x].entries;
          series.sort(function (a, b) {
            if (!a.date && b.date) return 1;
            if (a.date && !b.date) return -1;
            if (!a.date && !b.date) return 0;
            return new Date(a.date) - new Date(b.date);
          });
        }
      }

      var pie = d3["pie"]().sort(null).value(function (d) {
        return 1;
      });
      var arc = d3["arc"]().cornerRadius(2).padAngle(0.6).padRadius(3);
      var labelArc = d3["arc"]().innerRadius(radius * 0.84 + plotSize * labelScale / 21 * (count - 1) * 1.0 + 15).outerRadius(radius * 0.84 + plotSize * labelScale / 20 * (count - 1) * 1.3 + 15).cornerRadius(2).padAngle(0.05).padRadius(80);
      var faux = this.props.connectFauxDOM("svg", "chart");
      d3["select"](faux).select("#text").text(letter);
      var pathBind = d3["select"](faux).selectAll(".kpi").data(kpis);
      pathBind.exit().remove();
      var pathEnter = pathBind.enter().append("g").attr("class", "kpi").merge(pathBind).attr("data-index", function (d, i) {
        return i;
      }).attr("data-safe", function (d) {
        return d.safe_deviation;
      }).attr("data-frequency", function (d) {
        return d.frequency;
      }).attr("data-danger", function (d) {
        return d.danger_deviation;
      }).attr("data-name", function (d) {
        return d.name;
      }).attr("data-thresh-type", function (d) {
        return d.threshold_type;
      }).attr("data-warning", function (d) {
        return d.warning_margin;
      }).attr("data-type", function (d) {
        return d.kpi_type;
      }).attr("data-is-percentage", function (d) {
        return d.isPercentage;
      }).attr("transform", "translate(".concat(plotSize / 2, ",").concat(plotSize / 2, ")"));
      this.props.animateFauxDOM(800);
      pathEnter.selectAll(".ring").remove();
      var ring = pathEnter.selectAll(".ring");
      var ringBind = ring.data(function (d) {
        return pie(d.series[0] ? d.series[0].entries : []);
      });
      ringBind.enter().append("path").attr("class", "ring").attr("id", function (d) {
        return "ring_".concat(d.data.id);
      }).attr("d", function (d, i, j) {
        var index = $(j)[i].parentNode.getAttribute("data-index");
        return arc.outerRadius(radius + plotSize * labelScale / 16 * (index + 1 + labelOffset)).innerRadius(radius + plotSize * labelScale / 16 * (index + labelOffset) + 4)(d);
      }).on("mouseover", function (d, i, j) {
        var kpi_type = $(j)[i].parentNode.getAttribute("data-type");
        var kpiName = $(j)[i].parentNode.getAttribute("data-name");
        var threshold_type = $(j)[i].parentNode.getAttribute("data-thresh-type");
        var warning_margin = $(j)[i].parentNode.getAttribute("data-warning");
        d3["select"]("#ring_".concat(d.data.id)).style("stroke", "#000").attr("stroke-width", "1");
        if (!onHover) return;
        onHover(true, {
          payload: pillar_objectSpread({
            x: d3["event"].pageX,
            y: d3["event"].pageY,
            kpi_type: kpi_type,
            kpiName: kpiName,
            threshold_type: threshold_type,
            warning_margin: warning_margin
          }, d.data)
        });
      }).on("mouseout", function (d) {
        d3["select"]("#ring_".concat(d.data.id)).style("stroke", "none");
        if (!onHover) return;
        onHover(false);
      }).merge(ringBind).style("fill", function (d, i, j) {
        var colorProps = {
          safe_deviation: $(j)[i].parentNode.getAttribute("data-safe"),
          danger_deviation: $(j)[i].parentNode.getAttribute("data-danger"),
          kpi_type: $(j)[i].parentNode.getAttribute("data-type"),
          warning_margin: $(j)[i].parentNode.getAttribute("data-warning"),
          threshold_type: $(j)[i].parentNode.getAttribute("data-thresh-type"),
          isPercentage: $(j)[i].parentNode.getAttribute("data-is-percentage"),
          value: d.data.value,
          target: d.data.target
        };
        return ColorHelpers_getColor(colorProps);
      });
      d3["select"](faux).selectAll(".label").remove();

      if (kpis[count - 1] && labeled && kpis[count - 1].series[0]) {
        var labels = d3["select"](faux).selectAll(".label").data(pie(PILLAR_LABELS)).enter().append("text").text(function (d, i, j) {
          if (d.data.date) return formatTime(parseTime(d.data.date));
          return "";
        }).attr("class", "label").attr("transform", function (d) {
          var pos = labelArc.centroid(d);
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // ABSOLUTE VALUES! ToDo: Change to relative!

          pos[0] += 100;
          pos[1] += 102;
          return "translate(".concat(pos, ")");
        }).style("font-size", "0.5rem").style("text-anchor", function (d) {
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          return midangle < Math.PI ? "start" : "end";
        }).style("fill", accentColor);
        this.props.animateFauxDOM(800);
      }
    }
  }]);

  return Pillar;
}(react_default.a.Component);

pillar_Pillar.propTypes = {
  kpis: prop_types_default.a.array.isRequired,
  letter: prop_types_default.a.string.isRequired,
  dashboardId: prop_types_default.a.string.isRequired,
  labeled: prop_types_default.a.bool,
  onHover: prop_types_default.a.func,
  connectFauxDOM: prop_types_default.a.func.isRequired
};
pillar_Pillar.defaultProps = {
  chart: "loading",
  labeled: false,
  onHover: null
};
/* harmony default export */ var d3charts_pillar = (Object(ReactFauxDOM["withFauxDOM"])(pillar_Pillar));
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/PillarBar.js
// -----------------------------------------------------------------------------
//                          PillarBar COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
//
//
//* The boardroom/PillarBar component mounts all Pillar components to the board room
//               * Filters KPIs into there respective pillars
// -----------------------------------------------------------------------------




var PillarBar_PillarBar = function PillarBar(props) {
  var kpis = props.kpis,
      dashboardId = props.dashboardId; // Helper function to filter KPIS by pillar for each pillar component

  var filterKpis = function filterKpis(pillar) {
    if (!kpis) return [];
    return kpis.filter(function (kpi) {
      return kpi.pillar === pillar;
    });
  };

  return react_default.a.createElement("div", null, react_default.a.createElement(d3charts_pillar, {
    kpis: filterKpis("Plus"),
    letter: "+",
    dashboardId: dashboardId
  }), react_default.a.createElement(d3charts_pillar, {
    kpis: filterKpis("Q"),
    letter: "Q",
    dashboardId: dashboardId
  }), react_default.a.createElement(d3charts_pillar, {
    kpis: filterKpis("D"),
    letter: "D",
    dashboardId: dashboardId
  }), react_default.a.createElement(d3charts_pillar, {
    kpis: filterKpis("C"),
    letter: "C",
    dashboardId: dashboardId
  }), react_default.a.createElement(d3charts_pillar, {
    kpis: filterKpis("I"),
    letter: "I",
    dashboardId: dashboardId
  }));
};

PillarBar_PillarBar.propType = {
  kpis: prop_types_default.a.arrayOf(prop_types_default.a.object),
  dashboardId: prop_types_default.a.number.isRequired
};
PillarBar_PillarBar.defaultProps = {
  kpis: null
};
/* harmony default export */ var components_PillarBar = (PillarBar_PillarBar);
// EXTERNAL MODULE: ./node_modules/react-tooltip/dist/index.js
var dist = __webpack_require__("./node_modules/react-tooltip/dist/index.js");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/react-datepicker/es/index.js
var react_datepicker_es = __webpack_require__("./node_modules/react-datepicker/es/index.js");

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.css");

// CONCATENATED MODULE: ./frontend/src/core/components/ui/table/Row.js
function Row_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Row_typeof = function _typeof(obj) { return typeof obj; }; } else { Row_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Row_typeof(obj); }

function Row_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Row_defineProperty(target, key, source[key]); }); } return target; }

function Row_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Row_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Row_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Row_createClass(Constructor, protoProps, staticProps) { if (protoProps) Row_defineProperties(Constructor.prototype, protoProps); if (staticProps) Row_defineProperties(Constructor, staticProps); return Constructor; }

function Row_possibleConstructorReturn(self, call) { if (call && (Row_typeof(call) === "object" || typeof call === "function")) { return call; } return Row_assertThisInitialized(self); }

function Row_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Row_getPrototypeOf(o) { Row_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Row_getPrototypeOf(o); }

function Row_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Row_setPrototypeOf(subClass, superClass); }

function Row_setPrototypeOf(o, p) { Row_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Row_setPrototypeOf(o, p); }






var Row_Row =
/*#__PURE__*/
function (_Component) {
  Row_inherits(Row, _Component);

  function Row(props) {
    var _this;

    Row_classCallCheck(this, Row);

    _this = Row_possibleConstructorReturn(this, Row_getPrototypeOf(Row).call(this, props));

    _this.handleChange = function (e) {
      var current = Row_objectSpread({}, _this.state.entry);

      current[e.target.name] = e.target.value;

      _this.setState({
        entry: current
      });
    };

    _this.handleDateChange = function (date, prop) {
      var current = Row_objectSpread({}, _this.state.entry);

      current[prop] = date;

      _this.setState({
        entry: current
      });
    };

    var row = [];

    for (var i in _this.props.header) {
      var prop = _this.props.header[i].prop;
      row[prop] = _this.props.data[prop];
    }

    _this.state = {
      entry: row
    };
    return _this;
  }

  Row_createClass(Row, [{
    key: "stopEditing",
    value: function stopEditing(e) {
      var current = this.state.entry;
      this.props.stopEditingHook(e, this.props.id, current);
    }
  }, {
    key: "renderCellData",
    value: function renderCellData(y) {
      if (y.map) return y.map(this.props.data[y.prop]);else return this.props.data[y.prop];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          editIdx = _this$props.editIdx,
          data = _this$props.data,
          header = _this$props.header,
          i = _this$props.i,
          editable = _this$props.editable,
          tableId = _this$props.tableId,
          rowClick = _this$props.rowClick,
          deletable = _this$props.deletable,
          formatRow = _this$props.formatRow;
      var entry = this.state.entry;
      var currentlyEditing = editIdx === i;

      if (editable) {
        return react_default.a.createElement("tr", {
          className: formatRow ? formatRow(data) : "",
          key: data.id,
          "data-tip": i,
          "data-for": "global-".concat(tableId),
          onClick: function onClick() {
            if (rowClick) rowClick(data.id);
          }
        }, header.map(function (y, k) {
          if (y.date) return react_default.a.createElement("td", {
            key: "trc-".concat(k)
          }, currentlyEditing ? react_default.a.createElement(react_datepicker_es["default"], {
            onChange: function onChange(date) {
              return _this2.handleDateChange(date, y.prop);
            },
            selected: entry[y.prop]
          }) : _this2.props.data[y.prop] != null ? _this2.props.data[y.prop] : "---");
          return react_default.a.createElement("td", {
            key: "trc-".concat(k)
          }, currentlyEditing ? react_default.a.createElement("input", {
            name: y.prop,
            onChange: function onChange(e) {
              return _this2.handleChange(e);
            },
            type: "text",
            placeholder: _this2.props.data[y.prop],
            value: entry[y.prop],
            style: {
              width: "".concat(100, "%")
            }
          }) : _this2.props.data[y.prop] != null ? _this2.renderCellData(y) : "---");
        }), currentlyEditing ? react_default.a.createElement("td", {
          key: "done",
          className: "im im-check-mark icon co-primary",
          style: {
            display: "table-cell"
          },
          onClick: function onClick(e) {
            return _this2.stopEditing(e);
          }
        }) : react_default.a.createElement("td", {
          style: {
            display: "table-cell"
          },
          className: "im im-edit co-primary icon",
          key: "edit",
          onClick: function onClick() {
            return _this2.props.startEditing(i);
          }
        }), deletable && react_default.a.createElement("td", {
          style: {
            display: "table-cell"
          },
          className: "im im-trash-can co-primary icon",
          key: "delete",
          onClick: function onClick() {
            return _this2.props.handleRemove(data.id);
          }
        }));
      }

      return react_default.a.createElement("tr", {
        key: data.id,
        "data-tip": i,
        "data-for": "global-".concat(tableId),
        onClick: function onClick() {
          if (rowClick) rowClick(data.id);
        }
      }, header.map(function (y, k) {
        return react_default.a.createElement("td", {
          key: "trc-".concat(k)
        }, _this2.props.data[y.prop] != null ? _this2.renderCellData(y) : "---");
      }), deletable && react_default.a.createElement("td", {
        style: {
          display: "table-cell"
        },
        className: "im im-trash-can co-primary icon",
        key: "delete",
        onClick: function onClick() {
          return _this2.props.handleRemove(data.id);
        }
      }));
    }
  }]);

  return Row;
}(react["Component"]);

/* harmony default export */ var table_Row = (Row_Row);
// CONCATENATED MODULE: ./frontend/src/core/components/ui/table/Table.js
function Table_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Table_typeof = function _typeof(obj) { return typeof obj; }; } else { Table_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Table_typeof(obj); }

function Table_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Table_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Table_createClass(Constructor, protoProps, staticProps) { if (protoProps) Table_defineProperties(Constructor.prototype, protoProps); if (staticProps) Table_defineProperties(Constructor, staticProps); return Constructor; }

function Table_possibleConstructorReturn(self, call) { if (call && (Table_typeof(call) === "object" || typeof call === "function")) { return call; } return Table_assertThisInitialized(self); }

function Table_getPrototypeOf(o) { Table_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Table_getPrototypeOf(o); }

function Table_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Table_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Table_setPrototypeOf(subClass, superClass); }

function Table_setPrototypeOf(o, p) { Table_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Table_setPrototypeOf(o, p); }

// DEPENDACIES


 // COMPONENTS




var Table_Table =
/*#__PURE__*/
function (_Component) {
  Table_inherits(Table, _Component);

  function Table(props) {
    var _this;

    Table_classCallCheck(this, Table);

    _this = Table_possibleConstructorReturn(this, Table_getPrototypeOf(Table).call(this, props));
    _this.id = _this.constructor.generateUID();

    _this.handleRemove = function (id) {
      var response = confirm("Are you sure you want to delete this entry? \n All related data will be lost.");

      if (response) {
        _this.setState({
          editIdx: -1
        });

        _this.props["delete"](id);
      }
    };

    _this.startEditing = function (i) {
      _this.setState({
        editIdx: i
      });
    };

    _this.handleInsert = function () {
      _this.props.insert();
    };

    _this.stopEditingHook = function (e, id, current) {
      _this.props.update(current, id);

      _this.setState({
        editIdx: -1
      });
    };

    _this.handleRemove = _this.handleRemove.bind(Table_assertThisInitialized(_this));
    _this.startEditing = _this.startEditing.bind(Table_assertThisInitialized(_this));
    _this.stopEditingHook = _this.stopEditingHook.bind(Table_assertThisInitialized(_this));
    _this.handleInsert = _this.handleInsert.bind(Table_assertThisInitialized(_this));
    _this.state = {
      isLoading: true,
      editIdx: -1
    };
    return _this;
  }

  Table_createClass(Table, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      dist_default.a.rebuild();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          header = _this$props.header,
          editable = _this$props.editable,
          fontSize = _this$props.fontSize,
          summary = _this$props.summary,
          appendable = _this$props.appendable,
          tooltipMessage = _this$props.tooltipMessage,
          rowClick = _this$props.rowClick,
          deletable = _this$props.deletable,
          formatRow = _this$props.formatRow;
      if (!data) return react_default.a.createElement(LoadingScreen, null);
      return !data.length ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "d-flex flex-row justify-content-start mb-5"
      }, react_default.a.createElement("p", null, "Nothing to show"), appendable && react_default.a.createElement("i", {
        className: "im im-plus co-primary icon d-flex ml-3 pb-1",
        style: {
          lineHeight: 1.5,
          verticalAlign: "middle",
          fontSize: "".concat(1, "rem")
        },
        onClick: this.handleInsert
      }))) : react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "column"
      }, summary && react_default.a.createElement("p", {
        className: "d-inline",
        style: {
          fontSize: "0.9rem"
        }
      }, "Showing ", react_default.a.createElement("strong", null, data.length), " items"), appendable && react_default.a.createElement("i", {
        className: "im im-plus co-primary icon d-line ml-3 pb-1",
        style: {
          lineHeight: 1.5,
          verticalAlign: "middle",
          fontSize: "".concat(1, "rem")
        },
        onClick: this.handleInsert
      }), react_default.a.createElement("div", {
        className: "table-responsive mt-3",
        style: {
          fontSize: fontSize
        }
      }, react_default.a.createElement("table", {
        className: "table is-striped table-sm",
        style: {
          textAlign: "center"
        }
      }, react_default.a.createElement("thead", null, react_default.a.createElement("tr", {
        key: "thr"
      }, header.map(function (x, i) {
        return react_default.a.createElement("th", {
          key: "thc-".concat(i)
        }, x.name);
      }), editable && react_default.a.createElement("th", null, "Edit"), editable && react_default.a.createElement("th", null, "Delete"))), react_default.a.createElement("tbody", null, data.map(function (x, i) {
        var hover = null;
        return react_default.a.createElement(react["Fragment"], {
          key: data[i].id
        }, react_default.a.createElement(table_Row, {
          data: x,
          i: i,
          id: data[i].id,
          header: header,
          startEditing: _this2.startEditing,
          editable: _this2.props.editable,
          editIdx: _this2.state.editIdx,
          stopEditingHook: _this2.stopEditingHook,
          handleRemove: _this2.handleRemove,
          hover: hover,
          tableId: _this2.id,
          rowClick: rowClick,
          deletable: deletable,
          formatRow: formatRow
        }));
      }))))), tooltipMessage && react_default.a.createElement(dist_default.a, {
        id: "global-".concat(this.id),
        type: "info",
        place: "left",
        effect: "solid",
        getContent: function getContent(dataTip) {
          if (!dataTip) return;
          if (!data[dataTip]) return;
          if (tooltipMessage) return tooltipMessage(dataTip);
        }
      }));
    }
  }]);

  return Table;
}(react["Component"]);

Table_Table.propTypes = {
  data: prop_types_default.a.array.isRequired,
  header: prop_types_default.a.array.isRequired,
  "delete": prop_types_default.a.func,
  update: prop_types_default.a.func,
  editable: prop_types_default.a.bool,
  insert: prop_types_default.a.func,
  fontSize: prop_types_default.a.string,
  summary: prop_types_default.a.bool,
  tooltipMessage: prop_types_default.a.func
};

Table_Table.generateUID = function () {
  return "_".concat(Math.random().toString(36).substr(2, 9));
};

Table_Table.defaultProps = {
  editable: false,
  update: null,
  "delete": null,
  fontSize: "".concat(1, "rem"),
  summary: true,
  deletable: false
};
/* harmony default export */ var table_Table = (Table_Table);
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/ActionTable.js
function ActionTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ActionTable_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionTable_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionTable_typeof(obj); }

function ActionTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionTable_defineProperties(Constructor, staticProps); return Constructor; }

function ActionTable_possibleConstructorReturn(self, call) { if (call && (ActionTable_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionTable_assertThisInitialized(self); }

function ActionTable_getPrototypeOf(o) { ActionTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionTable_getPrototypeOf(o); }

function ActionTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ActionTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionTable_setPrototypeOf(subClass, superClass); }

function ActionTable_setPrototypeOf(o, p) { ActionTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionTable_setPrototypeOf(o, p); }







var ActionTable_ActionTable =
/*#__PURE__*/
function (_Component) {
  ActionTable_inherits(ActionTable, _Component);

  function ActionTable(props) {
    var _this;

    ActionTable_classCallCheck(this, ActionTable);

    _this = ActionTable_possibleConstructorReturn(this, ActionTable_getPrototypeOf(ActionTable).call(this, props));

    _this.tooltipMessage = function (i) {
      var data = _this.props.data;
      var d = new Date(data.actions[i].date_created);
      d.toDateString();
      return react_default.a.createElement("div", null, react_default.a.createElement("h5", null, data.actions[i].source.dashboard.title), react_default.a.createElement("p", null, "Date Created:", d.toGMTString()));
    };

    _this.update = _this.update.bind(ActionTable_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(ActionTable_assertThisInitialized(_this));
    _this.insert = _this.insert.bind(ActionTable_assertThisInitialized(_this));
    _this.tooltipMessage = _this.tooltipMessage.bind(ActionTable_assertThisInitialized(_this));
    return _this;
  }

  ActionTable_createClass(ActionTable, [{
    key: "update",
    value: function update(current, id) {
      var updateAction = this.props.updateAction;
      updateAction(current, id);
    }
  }, {
    key: "insert",
    value: function insert() {
      var _this$props = this.props,
          data = _this$props.data,
          addAction = _this$props.addAction;
      var action = {
        tables: data.parent ? [data.id, data.parent] : [data.id],
        source_id: data.id
      };
      addAction(action);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var deleteAction = this.props.deleteAction;
      deleteAction(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          header = _this$props2.header,
          editable = _this$props2.editable,
          appendable = _this$props2.appendable,
          rowClick = _this$props2.rowClick,
          hoverable = _this$props2.hoverable,
          deletable = _this$props2.deletable;
      return react_default.a.createElement(table_Table, {
        editable: editable,
        appendable: appendable,
        data: data.actions,
        header: header,
        update: this.update,
        "delete": this["delete"],
        insert: this.insert,
        rowClick: rowClick,
        deletable: deletable,
        fontSize: "0.6rem",
        summary: true,
        tooltipMessage: hoverable ? this.tooltipMessage : null
      });
    }
  }]);

  return ActionTable;
}(react["Component"]);

ActionTable_ActionTable.propTypes = ActionTable_defineProperty({
  data: prop_types_default.a.object.isRequired,
  header: prop_types_default.a.array.isRequired,
  editable: prop_types_default.a.bool,
  rowClick: prop_types_default.a.func,
  hoverable: prop_types_default.a.bool,
  deletable: prop_types_default.a.bool
}, "hoverable", prop_types_default.a.bool);
/* harmony default export */ var components_ActionTable = (Object(es["connect"])(null, {
  updateAction: dashboards_updateAction,
  deleteAction: dashboards_deleteAction,
  addAction: dashboards_addAction
})(ActionTable_ActionTable));
ActionTable_ActionTable.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
// CONCATENATED MODULE: ./frontend/src/core/components/ui/DashboardCard.js



var DashboardCard_DashboardCard = function DashboardCard(props) {
  var dashboard = props.dashboard,
      selection = props.selection,
      handleClick = props.handleClick;
  var highlighted = selection == dashboard.id ? {
    border: "".concat("2px" + " solid ").concat(accentColor)
  } : {
    border: "1px solid rgba(0,0,0,.125)"
  };

  var onClick = function onClick() {
    handleClick(dashboard.id);
  };

  return react_default.a.createElement("div", {
    className: "card m-3",
    onClick: onClick,
    style: highlighted
  }, react_default.a.createElement("div", {
    className: "card-body"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, dashboard.title), react_default.a.createElement("p", {
    className: "card-text"
  }, "Author:", ' ', dashboard.author, react_default.a.createElement("br", null), "Level:", ' ', dashboard.level)));
};

/* harmony default export */ var ui_DashboardCard = (DashboardCard_DashboardCard);
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/EscalationsOptions.js
function EscalationsOptions_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EscalationsOptions_typeof = function _typeof(obj) { return typeof obj; }; } else { EscalationsOptions_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EscalationsOptions_typeof(obj); }

function EscalationsOptions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EscalationsOptions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EscalationsOptions_createClass(Constructor, protoProps, staticProps) { if (protoProps) EscalationsOptions_defineProperties(Constructor.prototype, protoProps); if (staticProps) EscalationsOptions_defineProperties(Constructor, staticProps); return Constructor; }

function EscalationsOptions_possibleConstructorReturn(self, call) { if (call && (EscalationsOptions_typeof(call) === "object" || typeof call === "function")) { return call; } return EscalationsOptions_assertThisInitialized(self); }

function EscalationsOptions_getPrototypeOf(o) { EscalationsOptions_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EscalationsOptions_getPrototypeOf(o); }

function EscalationsOptions_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EscalationsOptions_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EscalationsOptions_setPrototypeOf(subClass, superClass); }

function EscalationsOptions_setPrototypeOf(o, p) { EscalationsOptions_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EscalationsOptions_setPrototypeOf(o, p); }

// DEPENDaNCIES


 // CONFIG

 // CORE COMPONENTS




var EscalationsOptions_EscalationOptions =
/*#__PURE__*/
function (_Component) {
  EscalationsOptions_inherits(EscalationOptions, _Component);

  function EscalationOptions(props) {
    var _this;

    EscalationsOptions_classCallCheck(this, EscalationOptions);

    _this = EscalationsOptions_possibleConstructorReturn(this, EscalationsOptions_getPrototypeOf(EscalationOptions).call(this, props));

    _this.handleClick = function (id) {
      _this.setState({
        selected: id
      });
    };

    _this.onSubmit = function (e) {
      var _this$props = _this.props,
          updateActionTable = _this$props.updateActionTable,
          actionTable = _this$props.actionTable;
      var selected = _this.state.selected;
      e.preventDefault();
      updateActionTable(actionTable, actionTable.id, selected);
      $("#escalationOptions").modal("hide");
    };

    _this.handleClick = _this.handleClick.bind(EscalationsOptions_assertThisInitialized(_this));
    _this.state = {
      selected: _this.props.actionTable.parent_dashboard ? _this.props.actionTable.parent_dashboard : null
    };
    return _this;
  }

  EscalationsOptions_createClass(EscalationOptions, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          dashboards = _this$props2.dashboards,
          currentDashboard = _this$props2.currentDashboard;
      var selected = this.state.selected;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "modal fade",
        id: "escalationOptions",
        role: "dialog",
        "aria-labelledby": "escalationOptionsLabel",
        "aria-hidden": "true"
      }, react_default.a.createElement("div", {
        className: "modal-dialog",
        role: "document"
      }, react_default.a.createElement("div", {
        className: "modal-content"
      }, react_default.a.createElement("div", {
        className: "modal-header"
      }, react_default.a.createElement("h1", {
        className: "modal-title",
        id: "escalationOptionsLabel"
      }, react_default.a.createElement("span", {
        className: "im im-link",
        style: {
          fontSize: "".concat(2.5, "rem"),
          verticalAlign: "-0.1em"
        }
      }), "  ", "Manage Escalation"), react_default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, react_default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), react_default.a.createElement("div", {
        className: "modal-body",
        style: {
          padding: 0
        }
      }, react_default.a.createElement("div", {
        className: "card"
      }, react_default.a.createElement("div", {
        className: "card-header"
      }, react_default.a.createElement("ul", {
        className: "nav nav-tabs card-header-tabs"
      }, react_default.a.createElement("li", {
        className: "nav-item"
      }, react_default.a.createElement("a", {
        className: "nav-link active",
        "data-toggle": "tab",
        href: "#options"
      }, "Options")))), react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement("div", {
        className: "tab-content",
        style: {
          maxHeight: "".concat(550, "px"),
          overflow: "auto",
          overflowX: "auto"
        }
      }, react_default.a.createElement("h5", {
        className: "card-title"
      }, "Select a Parent Board"), react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement("div", {
        className: "row"
      }, dashboards.filter(function (dashboard) {
        return dashboard.id !== currentDashboard.id;
      }).map(function (dashboard) {
        return react_default.a.createElement("div", {
          className: "col-lrg-3",
          key: dashboard.id
        }, react_default.a.createElement(ui_DashboardCard, {
          dashboard: dashboard,
          selection: selected,
          handleClick: _this2.handleClick,
          key: dashboard.id
        }));
      }), react_default.a.createElement("div", {
        className: "card m-3",
        style: selected == null ? {
          border: "2px solid ".concat(accentColor)
        } : {
          border: "1px solid rgba(0,0,0,.125)"
        },
        onClick: function onClick() {
          _this2.handleClick(null);
        }
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement("h5", {
        className: "card-title"
      }, "None")))), react_default.a.createElement("div", {
        className: "modal-footer"
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal"
      }, "Close"), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Confirm")))))))))));
    }
  }]);

  return EscalationOptions;
}(react["Component"]);

EscalationsOptions_EscalationOptions.propTypes = {
  updateActionTable: prop_types_default.a.func.isRequired,
  actionTable: prop_types_default.a.object.isRequired,
  dashboards: prop_types_default.a.array.isRequired,
  currentDashboard: prop_types_default.a.object.isRequired
};
/* harmony default export */ var EscalationsOptions = (Object(es["connect"])(null, {
  updateActionTable: dashboards_updateActionTable
})(EscalationsOptions_EscalationOptions));
// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var parseISO = __webpack_require__("./node_modules/date-fns/esm/parseISO/index.js");

// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 28 modules
var esm_format = __webpack_require__("./node_modules/date-fns/esm/format/index.js");

// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/ActionForm.js
function ActionForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionForm_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionForm_typeof(obj); }

function ActionForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ActionForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionForm_defineProperties(Constructor, staticProps); return Constructor; }

function ActionForm_possibleConstructorReturn(self, call) { if (call && (ActionForm_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionForm_assertThisInitialized(self); }

function ActionForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ActionForm_getPrototypeOf(o) { ActionForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionForm_getPrototypeOf(o); }

function ActionForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionForm_setPrototypeOf(subClass, superClass); }

function ActionForm_setPrototypeOf(o, p) { ActionForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionForm_setPrototypeOf(o, p); }

// DEPENDANCIES






 // ACTIONS



var ActionForm_ActionForm =
/*#__PURE__*/
function (_Component) {
  ActionForm_inherits(ActionForm, _Component);

  function ActionForm() {
    var _getPrototypeOf2;

    var _temp, _this;

    ActionForm_classCallCheck(this, ActionForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ActionForm_possibleConstructorReturn(_this, (_temp = _this = ActionForm_possibleConstructorReturn(this, (_getPrototypeOf2 = ActionForm_getPrototypeOf(ActionForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      letter: "",
      problem: "",
      root_cause: "",
      solution: "",
      leader: "",
      date: new Date()
    }, _this.update = function (state) {
      _this.setState(state);
    }, _this.onChange = function (e) {
      return _this.setState(ActionForm_defineProperty({}, e.target.name, e.target.value));
    }, _this.onDateChange = function (date) {
      _this.setState({
        date: date
      });
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          letter = _this$state.letter,
          problem = _this$state.problem,
          root_cause = _this$state.root_cause,
          solution = _this$state.solution,
          leader = _this$state.leader,
          date = _this$state.date;
      var _this$props = _this.props,
          action = _this$props.action,
          updateAction = _this$props.updateAction;
      var newAction = {
        letter: letter,
        problem: problem,
        root_cause: root_cause,
        solution: solution,
        leader: leader
      };
      newAction.date = Object(esm_format["default"])(date, "yyyy-MM-dd");
      updateAction(newAction, action.id);

      _this.setState({
        letter: "",
        problem: "",
        root_cause: "",
        solution: "",
        leader: "",
        date: Object(parseISO["default"])("2019-01-01")
      });

      $("#actionOptions").modal("hide");
    }, _this["delete"] = function () {
      var _this$props2 = _this.props,
          deleteAction = _this$props2.deleteAction,
          action = _this$props2.action;
      deleteAction(action.id);
      $("#actionOptions").modal("hide");
    }, _temp));
  }

  ActionForm_createClass(ActionForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var action = this.props.action;

      if (prevProps.action !== action) {
        if (!action) return;
        this.update({
          letter: action.letter || "",
          problem: action.problem || "",
          root_cause: action.root_cause || "",
          solution: action.solution || "",
          leader: action.leader || "",
          date: action.date ? Object(parseISO["default"])(action.date) : new Date()
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          letter = _this$state2.letter,
          problem = _this$state2.problem,
          root_cause = _this$state2.root_cause,
          solution = _this$state2.solution,
          leader = _this$state2.leader,
          date = _this$state2.date;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h2", null, "Edit Action"), react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement("div", {
        className: "row justify-content-between"
      }, react_default.a.createElement("div", {
        className: "col-sm-6"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "letter"
      }, "Letter"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "letter",
        onChange: this.onChange,
        value: letter || ""
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "problem"
      }, "Problem"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "problem",
        onChange: this.onChange,
        value: problem
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "root_cause"
      }, "Root Cause"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "root_cause",
        onChange: this.onChange,
        value: root_cause
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "solution"
      }, "Solution"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "solution",
        onChange: this.onChange,
        value: solution
      }))), react_default.a.createElement("div", {
        className: "col-sm-5"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "leader"
      }, "Leader"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "leader",
        onChange: this.onChange,
        value: leader
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "date",
        className: "d-block"
      }, "Date"), react_default.a.createElement(react_datepicker_es["default"], {
        className: "form-control",
        onChange: function onChange(date) {
          return _this2.onDateChange(date);
        },
        selected: date,
        dateFormat: "yyyy-MM-dd"
      }))), react_default.a.createElement("div", {
        className: "col-sm-12 d-flex justify-content-end"
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn\r btn-danger mr-4",
        onClick: this["delete"]
      }, "Delete"), react_default.a.createElement("button", {
        type: "submit",
        className: "btn\r btn-primary"
      }, "Submit")))));
    }
  }]);

  return ActionForm;
}(react["Component"]);

ActionForm_ActionForm.propTypes = {
  action: prop_types_default.a.object,
  updateAction: prop_types_default.a.func.isRequired,
  deleteAction: prop_types_default.a.func.isRequired
};
ActionForm_ActionForm.defaultProps = {
  action: null
};
/* harmony default export */ var components_ActionForm = (Object(es["connect"])(null, {
  updateAction: dashboards_updateAction,
  deleteAction: dashboards_deleteAction
})(ActionForm_ActionForm));
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/ActionOptions.js




var ActionOptions_ActionOptions = function ActionOptions(props) {
  var action = props.action;
  return react_default.a.createElement("div", {
    className: "modal fade",
    id: "actionOptions",
    role: "dialog",
    "aria-labelledby": "actionOptionsLabel",
    "aria-hidden": "true"
  }, react_default.a.createElement("div", {
    className: "modal-dialog",
    role: "document",
    style: {
      maxWidth: "fit-content"
    }
  }, react_default.a.createElement("div", {
    className: "modal-content"
  }, react_default.a.createElement("div", {
    className: "modal-header"
  }, react_default.a.createElement("h1", {
    className: "modal-title",
    id: "actionOptionsLabel"
  }, react_default.a.createElement("span", {
    className: "im im-pin",
    style: {
      fontSize: "".concat(2.5, "rem"),
      verticalAlign: "-0.1em"
    }
  }), "  ", "Edit Action"), react_default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, react_default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), react_default.a.createElement("div", {
    className: "modal-body",
    style: {
      padding: 0
    }
  }, react_default.a.createElement("div", {
    className: "card"
  }, react_default.a.createElement("div", {
    className: "card-body"
  }, react_default.a.createElement(components_ActionForm, {
    action: action
  })))))));
};

ActionOptions_ActionOptions.propTypes = {
  action: prop_types_default.a.object
};
/* harmony default export */ var components_ActionOptions = (ActionOptions_ActionOptions);
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/AuditTable.js
function AuditTable_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AuditTable_typeof = function _typeof(obj) { return typeof obj; }; } else { AuditTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AuditTable_typeof(obj); }

function AuditTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AuditTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AuditTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) AuditTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) AuditTable_defineProperties(Constructor, staticProps); return Constructor; }

function AuditTable_possibleConstructorReturn(self, call) { if (call && (AuditTable_typeof(call) === "object" || typeof call === "function")) { return call; } return AuditTable_assertThisInitialized(self); }

function AuditTable_getPrototypeOf(o) { AuditTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AuditTable_getPrototypeOf(o); }

function AuditTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AuditTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AuditTable_setPrototypeOf(subClass, superClass); }

function AuditTable_setPrototypeOf(o, p) { AuditTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AuditTable_setPrototypeOf(o, p); }








var AuditTable_AuditTable =
/*#__PURE__*/
function (_Component) {
  AuditTable_inherits(AuditTable, _Component);

  function AuditTable(props) {
    var _this;

    AuditTable_classCallCheck(this, AuditTable);

    _this = AuditTable_possibleConstructorReturn(this, AuditTable_getPrototypeOf(AuditTable).call(this, props));
    _this.update = _this.update.bind(AuditTable_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(AuditTable_assertThisInitialized(_this));
    _this.insert = _this.insert.bind(AuditTable_assertThisInitialized(_this));
    return _this;
  }

  AuditTable_createClass(AuditTable, [{
    key: "update",
    value: function update(current, id) {
      var updateAudit = this.props.updateAudit;
      updateAudit(current, id);
    }
  }, {
    key: "insert",
    value: function insert() {
      var _this$props = this.props,
          addAudit = _this$props.addAudit,
          dashboardId = _this$props.dashboardId;
      var audit = {
        description: null,
        date: null,
        dashboard: dashboardId
      };
      addAudit(audit);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var deleteAudit = this.props.deleteAudit;
      deleteAudit(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          editable = _this$props2.editable,
          appendable = _this$props2.appendable,
          rowClick = _this$props2.rowClick,
          deletable = _this$props2.deletable;
      return react_default.a.createElement(table_Table, {
        editable: editable,
        appendable: appendable,
        data: data,
        header: AUDIT_TABLE_HEADERS,
        update: this.update,
        "delete": this["delete"],
        insert: this.insert,
        rowClick: rowClick,
        deletable: deletable,
        fontSize: "0.6rem",
        summary: true
      });
    }
  }]);

  return AuditTable;
}(react["Component"]);

AuditTable_AuditTable.propTypes = {
  data: prop_types_default.a.array,
  editable: prop_types_default.a.bool,
  rowClick: prop_types_default.a.func,
  deletable: prop_types_default.a.bool
};
/* harmony default export */ var components_AuditTable = (Object(es["connect"])(null, {
  updateAudit: dashboards_updateAudit,
  deleteAudit: dashboards_deleteAudit,
  addAudit: dashboards_addAudit
})(AuditTable_AuditTable));
AuditTable_AuditTable.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
// CONCATENATED MODULE: ./frontend/src/core/components/ui/modal/Modal.js
function Modal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Modal_typeof = function _typeof(obj) { return typeof obj; }; } else { Modal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Modal_typeof(obj); }

function Modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) Modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) Modal_defineProperties(Constructor, staticProps); return Constructor; }

function Modal_possibleConstructorReturn(self, call) { if (call && (Modal_typeof(call) === "object" || typeof call === "function")) { return call; } return Modal_assertThisInitialized(self); }

function Modal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Modal_getPrototypeOf(o) { Modal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Modal_getPrototypeOf(o); }

function Modal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Modal_setPrototypeOf(subClass, superClass); }

function Modal_setPrototypeOf(o, p) { Modal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Modal_setPrototypeOf(o, p); }

// DEPENDANCIES


var Modal_Modal =
/*#__PURE__*/
function (_Component) {
  Modal_inherits(Modal, _Component);

  function Modal(props) {
    Modal_classCallCheck(this, Modal);

    return Modal_possibleConstructorReturn(this, Modal_getPrototypeOf(Modal).call(this, props));
  }

  Modal_createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          iconClass = _this$props.iconClass,
          id = _this$props.id,
          children = _this$props.children,
          overflow = _this$props.overflow;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "modal fade",
        id: id,
        role: "dialog",
        "aria-labelledby": "".concat(id, "Label"),
        "aria-hidden": "true"
      }, react_default.a.createElement("div", {
        className: "modal-dialog",
        role: "document",
        style: {
          maxWidth: "fit-content",
          overflow: "visible"
        }
      }, react_default.a.createElement("div", {
        className: "modal-content",
        style: {
          overflow: overflow || "visible"
        }
      }, react_default.a.createElement("div", {
        className: "modal-header"
      }, react_default.a.createElement("h1", {
        className: "modal-title",
        id: "".concat(id, "Label")
      }, react_default.a.createElement("span", {
        className: iconClass,
        style: {
          fontSize: "".concat(2.5, "rem"),
          verticalAlign: "-0.1em"
        }
      }), "  ", title), react_default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "modal",
        "aria-label": "Close"
      }, react_default.a.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7"))), react_default.a.createElement("div", {
        className: "modal-body",
        style: {
          padding: 0
        }
      }, react_default.a.createElement("div", {
        className: "card"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, children)))))));
    }
  }]);

  return Modal;
}(react["Component"]);

/* harmony default export */ var modal_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/AuditForm.js
function AuditForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AuditForm_typeof = function _typeof(obj) { return typeof obj; }; } else { AuditForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AuditForm_typeof(obj); }

function AuditForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AuditForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AuditForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AuditForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) AuditForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) AuditForm_defineProperties(Constructor, staticProps); return Constructor; }

function AuditForm_possibleConstructorReturn(self, call) { if (call && (AuditForm_typeof(call) === "object" || typeof call === "function")) { return call; } return AuditForm_assertThisInitialized(self); }

function AuditForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AuditForm_getPrototypeOf(o) { AuditForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AuditForm_getPrototypeOf(o); }

function AuditForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AuditForm_setPrototypeOf(subClass, superClass); }

function AuditForm_setPrototypeOf(o, p) { AuditForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AuditForm_setPrototypeOf(o, p); }

// DEPENDANCIES






 // ACTIONS



var AuditForm_AuditForm =
/*#__PURE__*/
function (_Component) {
  AuditForm_inherits(AuditForm, _Component);

  function AuditForm() {
    var _getPrototypeOf2;

    var _temp, _this;

    AuditForm_classCallCheck(this, AuditForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return AuditForm_possibleConstructorReturn(_this, (_temp = _this = AuditForm_possibleConstructorReturn(this, (_getPrototypeOf2 = AuditForm_getPrototypeOf(AuditForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      description: "",
      start_date: new Date(),
      end_date: new Date()
    }, _this.onUpdate = function (hook) {
      hook();
    }, _this.onChange = function (e) {
      return _this.setState(AuditForm_defineProperty({}, e.target.name, e.target.value));
    }, _this.onDateChange = function (date, key) {
      _this.setState(AuditForm_defineProperty({}, key, date));
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          description = _this$state.description,
          start_date = _this$state.start_date,
          end_date = _this$state.end_date;
      var _this$props = _this.props,
          audit = _this$props.audit,
          updateAudit = _this$props.updateAudit;
      var newAudit = {
        description: description
      };
      newAudit.start_date = Object(esm_format["default"])(start_date, "yyyy-MM-dd");
      newAudit.end_date = Object(esm_format["default"])(end_date, "yyyy-MM-dd");
      updateAudit(newAudit, audit.id);

      _this.setState({
        description: "",
        start_date: Object(parseISO["default"])("2019-01-01"),
        end_date: Object(parseISO["default"])("2019-01-01")
      });

      $("#auditOptions").modal("hide");
    }, _this["delete"] = function () {
      var _this$props2 = _this.props,
          deleteAudit = _this$props2.deleteAudit,
          audit = _this$props2.audit;
      deleteAudit(audit.id);
      $("#auditOptions").modal("hide");
    }, _temp));
  }

  AuditForm_createClass(AuditForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var audit = this.props.audit;

      if (prevProps.audit !== audit) {
        if (!audit) return;
        this.onUpdate(function () {
          _this2.setState({
            description: audit.description,
            start_date: audit.start_date ? Object(parseISO["default"])(audit.start_date) : new Date(),
            end_date: audit.end_date ? Object(parseISO["default"])(audit.end_date) : new Date()
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          description = _this$state2.description,
          end_date = _this$state2.end_date,
          start_date = _this$state2.start_date;
      return react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement("div", {
        className: "row justify-content-between"
      }, react_default.a.createElement("div", {
        className: "col-sm-12"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "description"
      }, "Description"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "description",
        onChange: this.onChange,
        value: description || ""
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "start_date",
        className: "d-block"
      }, "Start Date"), react_default.a.createElement(react_datepicker_es["default"], {
        className: "form-control",
        onChange: function onChange(date) {
          return _this3.onDateChange(date, "start_date");
        },
        selected: start_date,
        dateFormat: "yyyy-MM-dd"
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "end_date",
        className: "d-block"
      }, "End Date"), react_default.a.createElement(react_datepicker_es["default"], {
        className: "form-control",
        onChange: function onChange(date) {
          return _this3.onDateChange(date, "end_date");
        },
        selected: end_date,
        dateFormat: "yyyy-MM-dd"
      }))), react_default.a.createElement("div", {
        className: "col-sm-12 d-flex justify-content-end"
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn\r btn-danger mr-4",
        onClick: this["delete"]
      }, "Delete"), react_default.a.createElement("button", {
        type: "submit",
        className: "btn\r btn-primary"
      }, "Submit"))));
    }
  }]);

  return AuditForm;
}(react["Component"]);

AuditForm_AuditForm.propTypes = {
  audit: prop_types_default.a.object,
  updateAudit: prop_types_default.a.func.isRequired,
  deleteAudit: prop_types_default.a.func.isRequired
};
/* harmony default export */ var components_AuditForm = (Object(es["connect"])(null, {
  updateAudit: dashboards_updateAudit,
  deleteAudit: dashboards_deleteAudit
})(AuditForm_AuditForm));
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/WinTable.js
function WinTable_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WinTable_typeof = function _typeof(obj) { return typeof obj; }; } else { WinTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WinTable_typeof(obj); }

function WinTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WinTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WinTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) WinTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) WinTable_defineProperties(Constructor, staticProps); return Constructor; }

function WinTable_possibleConstructorReturn(self, call) { if (call && (WinTable_typeof(call) === "object" || typeof call === "function")) { return call; } return WinTable_assertThisInitialized(self); }

function WinTable_getPrototypeOf(o) { WinTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WinTable_getPrototypeOf(o); }

function WinTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WinTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WinTable_setPrototypeOf(subClass, superClass); }

function WinTable_setPrototypeOf(o, p) { WinTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WinTable_setPrototypeOf(o, p); }








var WinTable_WinTable =
/*#__PURE__*/
function (_Component) {
  WinTable_inherits(WinTable, _Component);

  function WinTable(props) {
    var _this;

    WinTable_classCallCheck(this, WinTable);

    _this = WinTable_possibleConstructorReturn(this, WinTable_getPrototypeOf(WinTable).call(this, props));
    _this.update = _this.update.bind(WinTable_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(WinTable_assertThisInitialized(_this));
    _this.insert = _this.insert.bind(WinTable_assertThisInitialized(_this));
    return _this;
  }

  WinTable_createClass(WinTable, [{
    key: "update",
    value: function update(current, id) {
      var updateWin = this.props.updateWin;
      updateWin(current, id);
    }
  }, {
    key: "insert",
    value: function insert() {
      var _this$props = this.props,
          addWin = _this$props.addWin,
          dashboardId = _this$props.dashboardId;
      var win = {
        description: null,
        participants: null,
        date: null,
        dashboard: dashboardId
      };
      addWin(win);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var deleteWin = this.props.deleteWin;
      deleteWin(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          editable = _this$props2.editable,
          appendable = _this$props2.appendable,
          rowClick = _this$props2.rowClick,
          deletable = _this$props2.deletable;
      return react_default.a.createElement(table_Table, {
        editable: editable,
        appendable: appendable,
        data: data,
        header: WIN_TABLE_HEADERS,
        update: this.update,
        "delete": this["delete"],
        insert: this.insert,
        rowClick: rowClick,
        deletable: deletable,
        fontSize: "0.6rem",
        summary: true
      });
    }
  }]);

  return WinTable;
}(react["Component"]);

WinTable_WinTable.propTypes = {
  data: prop_types_default.a.array,
  editable: prop_types_default.a.bool,
  rowClick: prop_types_default.a.func,
  deletable: prop_types_default.a.bool
};
/* harmony default export */ var components_WinTable = (Object(es["connect"])(null, {
  updateWin: dashboards_updateWin,
  deleteWin: dashboards_deleteWin,
  addWin: dashboards_addWin
})(WinTable_WinTable));
WinTable_WinTable.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/WinForm.js
function WinForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WinForm_typeof = function _typeof(obj) { return typeof obj; }; } else { WinForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WinForm_typeof(obj); }

function WinForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function WinForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WinForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WinForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) WinForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) WinForm_defineProperties(Constructor, staticProps); return Constructor; }

function WinForm_possibleConstructorReturn(self, call) { if (call && (WinForm_typeof(call) === "object" || typeof call === "function")) { return call; } return WinForm_assertThisInitialized(self); }

function WinForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WinForm_getPrototypeOf(o) { WinForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WinForm_getPrototypeOf(o); }

function WinForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WinForm_setPrototypeOf(subClass, superClass); }

function WinForm_setPrototypeOf(o, p) { WinForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WinForm_setPrototypeOf(o, p); }

// DEPENDANCIES






 // ACTIONS


/* The boardroom is the landing page for all dashboards
Parent of all boardroom components Contains pillar widgets and action tables
This component makes ALL GET request for Boardroom data
*/

var WinForm_WinForm =
/*#__PURE__*/
function (_Component) {
  WinForm_inherits(WinForm, _Component);

  function WinForm() {
    var _getPrototypeOf2;

    var _temp, _this;

    WinForm_classCallCheck(this, WinForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return WinForm_possibleConstructorReturn(_this, (_temp = _this = WinForm_possibleConstructorReturn(this, (_getPrototypeOf2 = WinForm_getPrototypeOf(WinForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      description: "",
      participants: "",
      date: new Date()
    }, _this.onUpdate = function (hook) {
      hook();
    }, _this.onChange = function (e) {
      return _this.setState(WinForm_defineProperty({}, e.target.name, e.target.value));
    }, _this.onDateChange = function (date) {
      _this.setState({
        date: date
      });
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          description = _this$state.description,
          date = _this$state.date,
          participants = _this$state.participants;
      var _this$props = _this.props,
          win = _this$props.win,
          updateWin = _this$props.updateWin;
      var newWin = {
        description: description,
        participants: participants
      };
      newWin.date = Object(esm_format["default"])(date, "yyyy-MM-dd");
      updateWin(newWin, win.id);

      _this.setState({
        description: "",
        date: Object(parseISO["default"])("2019-01-01")
      });

      $("#winOptions").modal("hide");
    }, _this["delete"] = function () {
      var _this$props2 = _this.props,
          deleteWin = _this$props2.deleteWin,
          win = _this$props2.win;
      deleteWin(win.id);
      $("#winOptions").modal("hide");
    }, _temp));
  }

  WinForm_createClass(WinForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var win = this.props.win;

      if (prevProps.win !== win) {
        if (!win) return;
        this.onUpdate(function () {
          _this2.setState({
            description: win.description,
            participants: win.participants,
            date: win.date ? Object(parseISO["default"])(win.date) : new Date()
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          description = _this$state2.description,
          date = _this$state2.date,
          participants = _this$state2.participants;
      return react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement("div", {
        className: "row justify-content-between"
      }, react_default.a.createElement("div", {
        className: "col-sm-12"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "description"
      }, "Description"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "description",
        onChange: this.onChange,
        value: description || ""
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "participants"
      }, "Participants"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "participants",
        onChange: this.onChange,
        value: participants || ""
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "date",
        className: "d-block"
      }, "Date"), react_default.a.createElement(react_datepicker_es["default"], {
        className: "form-control",
        onChange: function onChange(date) {
          return _this3.onDateChange(date);
        },
        selected: date,
        dateFormat: "yyyy-MM-dd"
      }))), react_default.a.createElement("div", {
        className: "col-sm-12 d-flex justify-content-end"
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn\r btn-danger mr-4",
        onClick: this["delete"]
      }, "Delete"), react_default.a.createElement("button", {
        type: "submit",
        className: "btn\r btn-primary"
      }, "Submit"))));
    }
  }]);

  return WinForm;
}(react["Component"]);

WinForm_WinForm.propTypes = {
  win: prop_types_default.a.object,
  updateWin: prop_types_default.a.func.isRequired,
  deleteWin: prop_types_default.a.func.isRequired
};
/* harmony default export */ var components_WinForm = (Object(es["connect"])(null, {
  updateWin: dashboards_updateWin,
  deleteWin: dashboards_deleteWin
})(WinForm_WinForm));
// CONCATENATED MODULE: ./frontend/src/core/components/d3charts/HeatCheck.js
function HeatCheck_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HeatCheck_typeof = function _typeof(obj) { return typeof obj; }; } else { HeatCheck_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HeatCheck_typeof(obj); }

function HeatCheck_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { HeatCheck_defineProperty(target, key, source[key]); }); } return target; }

function HeatCheck_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function HeatCheck_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HeatCheck_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HeatCheck_createClass(Constructor, protoProps, staticProps) { if (protoProps) HeatCheck_defineProperties(Constructor.prototype, protoProps); if (staticProps) HeatCheck_defineProperties(Constructor, staticProps); return Constructor; }

function HeatCheck_possibleConstructorReturn(self, call) { if (call && (HeatCheck_typeof(call) === "object" || typeof call === "function")) { return call; } return HeatCheck_assertThisInitialized(self); }

function HeatCheck_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HeatCheck_getPrototypeOf(o) { HeatCheck_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HeatCheck_getPrototypeOf(o); }

function HeatCheck_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) HeatCheck_setPrototypeOf(subClass, superClass); }

function HeatCheck_setPrototypeOf(o, p) { HeatCheck_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HeatCheck_setPrototypeOf(o, p); }





var width = 400;
var height = 130;

var HeatCheck_HeatCheck =
/*#__PURE__*/
function (_Component) {
  HeatCheck_inherits(HeatCheck, _Component);

  function HeatCheck(props) {
    HeatCheck_classCallCheck(this, HeatCheck);

    return HeatCheck_possibleConstructorReturn(this, HeatCheck_getPrototypeOf(HeatCheck).call(this, props));
  }

  HeatCheck_createClass(HeatCheck, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderD3();
      this.updateD3();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var heat = this.props.heat;

      if (prevProps.heat != heat) {
        this.updateD3();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var chart = this.props.chart;
      return react_default.a.createElement("div", {
        className: "d-flex justify-content-center"
      }, " ", chart, " ");
    }
  }, {
    key: "renderD3",
    value: function renderD3() {
      var connectFauxDOM = this.props.connectFauxDOM;
      var faux = connectFauxDOM("svg", "chart");
      var chart = d3["select"](faux);
      chart.attr("viewBox", "0 0 ".concat(width, " ").concat(height)).attr("height", height).attr("width", width).attr("preserveAspectRatio", "xMidYMid meet").classed("svg-content", true).attr("xmlns", "http://www.w3.org/2000/svg").attr("xmlnsXlink", "http://www.w3.org/1999/xlink");
    }
  }, {
    key: "updateD3",
    value: function updateD3() {
      var _this$props = this.props,
          connectFauxDOM = _this$props.connectFauxDOM,
          animateFauxDOM = _this$props.animateFauxDOM,
          heat = _this$props.heat,
          onClick = _this$props.onClick;
      var faux = connectFauxDOM("svg", "chart");
      var chart = d3["select"](faux);
      if (!heat) return; // Scale used to size the heat range circles

      var heatValues = heat.map(function (h) {
        return h.value;
      });
      var radiusScale = d3["scaleLinear"]().domain([d3["min"](heatValues), d3["max"](heatValues)]).range([30, 50]); // Creates the text fields inside the circles which will display the heat number

      var texts = chart.selectAll("text");
      var textsData = texts.data(heat);
      var text = textsData.enter().append("text").merge(texts).attr("dx", function (d, i) {
        return 56 + 120 * i + d.value.toString().length * -9;
      }).attr("dy", function (d, i) {
        return 76;
      }).style("opacity", 1).text(function (d) {
        return "".concat(d.value);
      });
      var circles = chart.selectAll("circle"); // DATA BIND

      var circlesData = circles.data(heat); // ENTER SECLECTION

      var circleEnter = circlesData.enter().append("circle").attr("r", 0).merge(circles).attr("cy", 70).attr("cx", function (d, i) {
        return 53 + 120 * i;
      }).style("opacity", 0.6).on("click", function (d) {
        var newHeat = HeatCheck_objectSpread({}, d);

        newHeat.value += 1;
        onClick(newHeat, newHeat.id);
      }).transition().duration(500).attr("r", function (d) {
        return radiusScale(parseInt(d.value));
      }).transition().duration(500).style("fill", function (d) {
        return d.color;
      });
      animateFauxDOM(2500);
    }
  }]);

  return HeatCheck;
}(react["Component"]);

HeatCheck_HeatCheck.defaultProps = {
  chart: "Loading"
};
/* harmony default export */ var d3charts_HeatCheck = (Object(ReactFauxDOM["withFauxDOM"])(HeatCheck_HeatCheck));
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/ActionPlan.js
function ActionPlan_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionPlan_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionPlan_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionPlan_typeof(obj); }

function ActionPlan_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { ActionPlan_defineProperty(target, key, source[key]); }); } return target; }

function ActionPlan_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ActionPlan_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionPlan_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionPlan_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionPlan_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionPlan_defineProperties(Constructor, staticProps); return Constructor; }

function ActionPlan_possibleConstructorReturn(self, call) { if (call && (ActionPlan_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionPlan_assertThisInitialized(self); }

function ActionPlan_getPrototypeOf(o) { ActionPlan_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionPlan_getPrototypeOf(o); }

function ActionPlan_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ActionPlan_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionPlan_setPrototypeOf(subClass, superClass); }

function ActionPlan_setPrototypeOf(o, p) { ActionPlan_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionPlan_setPrototypeOf(o, p); }



 // COMPONENTS















var ActionPlan_ActionPlan =
/*#__PURE__*/
function (_Component) {
  ActionPlan_inherits(ActionPlan, _Component);

  function ActionPlan(props) {
    var _this;

    ActionPlan_classCallCheck(this, ActionPlan);

    _this = ActionPlan_possibleConstructorReturn(this, ActionPlan_getPrototypeOf(ActionPlan).call(this, props));
    _this.rowActionClick = _this.rowActionClick.bind(ActionPlan_assertThisInitialized(_this));
    _this.rowAuditClick = _this.rowAuditClick.bind(ActionPlan_assertThisInitialized(_this));
    _this.rowWinClick = _this.rowWinClick.bind(ActionPlan_assertThisInitialized(_this));
    _this.resetHeat = _this.resetHeat.bind(ActionPlan_assertThisInitialized(_this));
    _this.state = {
      currentActionId: null,
      currentWinId: null
    };
    return _this;
  }

  ActionPlan_createClass(ActionPlan, [{
    key: "filterTables",
    value: function filterTables(title) {
      var tables = this.props.tables;
      var payload = tables.filter(function (table) {
        return table.title === title;
      });
      return payload ? payload[0] : null;
    }
  }, {
    key: "rowActionClick",
    value: function rowActionClick(id) {
      this.setState({
        currentActionId: id
      });
      $("#actionOptions").modal("show");
    }
  }, {
    key: "rowAuditClick",
    value: function rowAuditClick(id) {
      this.setState({
        currentAuditId: id
      });
      $("#auditOptions").modal("show");
    }
  }, {
    key: "rowWinClick",
    value: function rowWinClick(id) {
      this.setState({
        currentWinId: id
      });
      $("#winOptions").modal("show");
    }
  }, {
    key: "resetHeat",
    value: function resetHeat() {
      var _this$props = this.props,
          updateHeat = _this$props.updateHeat,
          heat = _this$props.heat;

      for (var i in heat) {
        var h = ActionPlan_objectSpread({}, heat[i]);

        h.value = 0;
        updateHeat(h, h.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          tables = _this$props2.tables,
          dashboards = _this$props2.dashboards,
          currentDashboard = _this$props2.currentDashboard,
          audits = _this$props2.audits,
          wins = _this$props2.wins,
          heat = _this$props2.heat,
          updateHeat = _this$props2.updateHeat;
      var _this$state = this.state,
          currentActionId = _this$state.currentActionId,
          currentAuditId = _this$state.currentAuditId,
          currentWinId = _this$state.currentWinId;
      var actionQuery = tables.map(function (table) {
        return table.actions.filter(function (action) {
          return action.id === currentActionId;
        });
      }).flat();
      var currentAction = actionQuery ? actionQuery[0] : null;
      var auditQuery = audits.filter(function (audit) {
        return audit.id === currentAuditId;
      });
      var winQuery = wins.filter(function (win) {
        return win.id === currentWinId;
      });
      var currentAudit = auditQuery ? auditQuery[0] : null;
      var currentWin = winQuery ? winQuery[0] : null;
      var ul = this.filterTables("Upper Level Escalation");
      var ll = this.filterTables("Lower Level Feed");
      var lt = this.filterTables("Long Term Action Plan");
      var st = this.filterTables("Short Term Action Plan");
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(components_ActionOptions, {
        action: currentAction
      }), react_default.a.createElement(modal_Modal, {
        title: "Update Audit",
        id: "auditOptions"
      }, react_default.a.createElement(components_AuditForm, {
        audit: currentAudit
      })), react_default.a.createElement(modal_Modal, {
        title: "Update WIN",
        id: "winOptions"
      }, react_default.a.createElement(components_WinForm, {
        win: currentWin
      })), react_default.a.createElement("div", {
        className: "col-lg-6 p-0"
      }, react_default.a.createElement("h2", {
        className: "ml-2 mb-1 color-text-action-plans"
      }, "Action Plans", react_default.a.createElement("span", {
        className: "im im-date-o ml-3"
      })), react_default.a.createElement("div", {
        className: "card mt-1 ml-2 mr-2 border-action-plans"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, st ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h5", null, " Short Term"), react_default.a.createElement(components_ActionTable, {
        data: st,
        header: ACTION_TABLE_HEADERS,
        appendable: true,
        rowClick: this.rowActionClick
      })) : react_default.a.createElement(LoadingScreen, null), lt ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h5", {
        className: "mt-3"
      }, " Long Term"), react_default.a.createElement(components_ActionTable, {
        data: lt,
        header: ACTION_TABLE_HEADERS,
        appendable: true,
        rowClick: this.rowActionClick
      })) : react_default.a.createElement(LoadingScreen, null), ul ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "row",
        style: {
          padding: "0 1rem"
        }
      }, react_default.a.createElement("h5", null, "Escalation"), react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary btn-sm mb-1 ml-auto",
        onClick: function onClick(e) {
          $("#escalationOptions").modal("show");
        }
      }, "Manage Escalations")), react_default.a.createElement(components_ActionTable, {
        data: ul,
        header: ACTION_TABLE_HEADERS,
        appendable: true,
        rowClick: this.rowActionClick
      }), react_default.a.createElement(EscalationsOptions, {
        dashboards: dashboards,
        currentDashboard: currentDashboard,
        actionTable: this.filterTables("Upper Level Escalation")
      })) : react_default.a.createElement(LoadingScreen, null), ll ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h5", {
        className: "mt-3"
      }, " Lower Level Feed"), react_default.a.createElement(components_ActionTable, {
        data: ll,
        header: ACTION_TABLE_HEADERS,
        hoverable: true
      })) : react_default.a.createElement(LoadingScreen, null)))), react_default.a.createElement("div", {
        className: "col-lg-6 p-0"
      }, react_default.a.createElement("div", {
        className: "row m-0"
      }, react_default.a.createElement("div", {
        className: "col-lg-6"
      }, react_default.a.createElement("h2", {
        className: "ml-2 mb-1 color-text-audits"
      }, "Audits", react_default.a.createElement("span", {
        className: "im im-thumb-up ml-3"
      })), react_default.a.createElement("div", {
        className: "card mt-1 ml-2 mr-2 border-audits"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement(components_AuditTable, {
        data: audits,
        rowClick: this.rowAuditClick,
        appendable: true,
        dashboardId: currentDashboard.id
      }))), react_default.a.createElement("h2", {
        className: "ml-2 mt-4 mb-1 color-text-heat-check"
      }, "Heat Check", react_default.a.createElement("span", {
        className: "im im-fire ml-3"
      })), react_default.a.createElement("div", {
        className: "card card-body ml-2 mt-1 mr-2 mb-4 border-heat-check"
      }, react_default.a.createElement("div", {
        className: "row",
        style: {
          padding: "0px 1rem"
        }
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary btn-sm mb-1 ml-auto",
        onClick: this.resetHeat
      }, "Reset")), react_default.a.createElement(d3charts_HeatCheck, {
        heat: heat,
        onClick: updateHeat
      }))), react_default.a.createElement("div", {
        className: "col-lg-6"
      }, react_default.a.createElement("h2", {
        className: "ml-2 mb-1 color-text-wins"
      }, "Wins", react_default.a.createElement("span", {
        className: "im im-trophy ml-3"
      })), react_default.a.createElement("div", {
        className: "card mt-1 ml-2 mr-2 border-wins"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement(components_WinTable, {
        data: wins,
        rowClick: this.rowWinClick,
        appendable: true,
        dashboardId: currentDashboard.id
      })))))));
    }
  }]);

  return ActionPlan;
}(react["Component"]);

ActionPlan_ActionPlan.propTypes = {
  tables: prop_types_default.a.array.isRequired,
  dashboards: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,
  currentDashboard: prop_types_default.a.object.isRequired,
  audit: prop_types_default.a.array
};

var ActionPlan_mapStateToProps = function mapStateToProps(state) {
  return {
    currentDashboard: state.dashboards.currentDashboard
  };
};

/* harmony default export */ var components_ActionPlan = (Object(es["connect"])(ActionPlan_mapStateToProps, {
  updateHeat: dashboards_updateHeat
})(ActionPlan_ActionPlan));
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/index.js
function boardRoom_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { boardRoom_typeof = function _typeof(obj) { return typeof obj; }; } else { boardRoom_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return boardRoom_typeof(obj); }

function boardRoom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function boardRoom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function boardRoom_createClass(Constructor, protoProps, staticProps) { if (protoProps) boardRoom_defineProperties(Constructor.prototype, protoProps); if (staticProps) boardRoom_defineProperties(Constructor, staticProps); return Constructor; }

function boardRoom_possibleConstructorReturn(self, call) { if (call && (boardRoom_typeof(call) === "object" || typeof call === "function")) { return call; } return boardRoom_assertThisInitialized(self); }

function boardRoom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function boardRoom_getPrototypeOf(o) { boardRoom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return boardRoom_getPrototypeOf(o); }

function boardRoom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) boardRoom_setPrototypeOf(subClass, superClass); }

function boardRoom_setPrototypeOf(o, p) { boardRoom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return boardRoom_setPrototypeOf(o, p); }

// -----------------------------------------------------------------------------
//                          BOARDROOM SCENE
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
//
//
//          * The boardroom is the landing page for all dashboards
//                  * Parent of all boardroom components
//               * Contains pillar widgets and action tables
//         * This component makes ALL GET request for Boardroom data
// -----------------------------------------------------------------------------
// DEPENDACIES


 // CORE COMPONENTS



 // NATIVE COMPONENTS




var boardRoom_Boardroom =
/*#__PURE__*/
function (_Component) {
  boardRoom_inherits(Boardroom, _Component);

  function Boardroom() {
    boardRoom_classCallCheck(this, Boardroom);

    return boardRoom_possibleConstructorReturn(this, boardRoom_getPrototypeOf(Boardroom).apply(this, arguments));
  }

  boardRoom_createClass(Boardroom, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          getADashboard = _this$props.getADashboard,
          getKpis = _this$props.getKpis,
          getActionTable = _this$props.getActionTable,
          getDashboards = _this$props.getDashboards,
          getAudits = _this$props.getAudits,
          getWins = _this$props.getWins,
          getHeat = _this$props.getHeat; // Fetch data from server
      // Source of ALL data for boardroom

      var id = this.props.match.params.id;
      getDashboards();
      getADashboard(id);
      getActionTable(id);
      getKpis(id);
      getAudits(id);
      getWins(id);
      getHeat(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          currentDashboard = _this$props2.currentDashboard,
          kpis = _this$props2.kpis,
          actionTables = _this$props2.actionTables,
          dashboards = _this$props2.dashboards,
          audits = _this$props2.audits,
          wins = _this$props2.wins,
          heat = _this$props2.heat;
      var id = this.props.match.params.id; // If there is no current dashboard show the loading screen

      if (currentDashboard == null) {
        return react_default.a.createElement(LoadingScreen, null);
      }

      var color = currentDashboard.background;
      return react_default.a.createElement("div", {
        className: "container-fluid h-100",
        style: {
          padding: 0,
          background: color,
          height: "".concat(100, "%")
        }
      }, react_default.a.createElement("div", {
        className: "row",
        style: {
          margin: 0
        }
      }, react_default.a.createElement("div", {
        className: "col-lg-2 p-0"
      }, react_default.a.createElement("div", {
        className: "card card-body ml-4 mt-4 mr-2 mb-4 border-pillars"
      }, react_default.a.createElement(components_PillarBar, {
        kpis: kpis,
        dashboardId: id
      }))), react_default.a.createElement("div", {
        className: "col-lg-10 p-0"
      }, react_default.a.createElement("div", {
        className: "row m-0"
      }, react_default.a.createElement("div", {
        className: "col-lg-12 mt-4"
      }, react_default.a.createElement("div", {
        className: "row"
      }, currentDashboard.images.length ? react_default.a.createElement("div", {
        className: "col-lg-6 mb-4"
      }, react_default.a.createElement(ui_Carousel, {
        images: currentDashboard.images
      })) : react_default.a.createElement(react_default.a.Fragment, null))), react_default.a.createElement(components_ActionPlan, {
        tables: actionTables,
        audits: audits,
        wins: wins,
        heat: heat,
        dashboards: dashboards
      })))));
    }
  }]);

  return Boardroom;
}(react["Component"]);

boardRoom_Boardroom.propTypes = {
  dashboards: prop_types_default.a.array,
  kpis: prop_types_default.a.array.isRequired,
  getDashboards: prop_types_default.a.func.isRequired,
  getADashboard: prop_types_default.a.func.isRequired,
  getKpis: prop_types_default.a.func.isRequired,
  getActionTable: prop_types_default.a.func.isRequired,
  currentDashboard: prop_types_default.a.object,
  actionTables: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired
};
boardRoom_Boardroom.defaultProps = {
  dashboards: null,
  currentDashboard: null
};

var boardRoom_mapStateToProps = function mapStateToProps(state) {
  return {
    dashboards: state.dashboards.dashboards,
    kpis: state.dashboards.kpis,
    isAuthenticated: state.auth.isAuthenticated,
    actionTables: state.dashboards.actionTables,
    currentDashboard: state.dashboards.currentDashboard,
    audits: state.dashboards.audits,
    wins: state.dashboards.wins,
    heat: state.dashboards.heat
  };
};

/* harmony default export */ var boardRoom = (Object(es["connect"])(boardRoom_mapStateToProps, {
  getKpis: dashboards_getKpis,
  getDashboards: dashboards_getDashboards,
  getADashboard: dashboards_getADashboard,
  clearKpis: dashboards_clearKpis,
  getActionTable: dashboards_getActionTable,
  getAudits: dashboards_getAudits,
  getWins: dashboards_getWins,
  getHeat: dashboards_getHeat,
  updateHeat: dashboards_updateHeat
})(boardRoom_Boardroom));
// CONCATENATED MODULE: ./frontend/src/core/components/utils/PrivateRoute.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * Component will check if user is authenticatd before preceding to mount component
 */

var PrivateRoute_PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      auth = _ref.auth,
      rest = _objectWithoutProperties(_ref, ["component", "auth"]);

  return react_default.a.createElement(react_router_dom["Route"], _extends({}, rest, {
    render: function render(props) {
      if (auth.isLoading) {
        return react_default.a.createElement(LoadingScreen, null);
      }

      if (auth.isAuthenticated === false) {
        return react_default.a.createElement(react_router_dom["Redirect"], {
          to: "/login"
        });
      }

      return react_default.a.createElement(Component, props);
    }
  }));
};

var PrivateRoute_mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

PrivateRoute_PrivateRoute.propTypes = {
  component: prop_types_default.a.object,
  auth: prop_types_default.a.object
};
/* harmony default export */ var utils_PrivateRoute = (Object(es["connect"])(PrivateRoute_mapStateToProps)(PrivateRoute_PrivateRoute));
// CONCATENATED MODULE: ./frontend/src/core/components/d3charts/LineChart.js
function LineChart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LineChart_typeof = function _typeof(obj) { return typeof obj; }; } else { LineChart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LineChart_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function LineChart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { LineChart_defineProperty(target, key, source[key]); }); } return target; }

function LineChart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function LineChart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LineChart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LineChart_createClass(Constructor, protoProps, staticProps) { if (protoProps) LineChart_defineProperties(Constructor.prototype, protoProps); if (staticProps) LineChart_defineProperties(Constructor, staticProps); return Constructor; }

function LineChart_possibleConstructorReturn(self, call) { if (call && (LineChart_typeof(call) === "object" || typeof call === "function")) { return call; } return LineChart_assertThisInitialized(self); }

function LineChart_getPrototypeOf(o) { LineChart_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LineChart_getPrototypeOf(o); }

function LineChart_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LineChart_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LineChart_setPrototypeOf(subClass, superClass); }

function LineChart_setPrototypeOf(o, p) { LineChart_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LineChart_setPrototypeOf(o, p); }

// DEPENDACIES



 // COMPONENTS


var margin = {
  top: 10,
  right: 150,
  bottom: 30,
  left: 50
};
var LineChart_width = 1100 - margin.left - margin.right;
var LineChart_height = 600 - margin.top - margin.bottom;

var LineChart_LineChart =
/*#__PURE__*/
function (_React$Component) {
  LineChart_inherits(LineChart, _React$Component);

  function LineChart(props) {
    var _this;

    LineChart_classCallCheck(this, LineChart);

    _this = LineChart_possibleConstructorReturn(this, LineChart_getPrototypeOf(LineChart).call(this, props));
    _this.renderD3 = _this.renderD3.bind(LineChart_assertThisInitialized(_this));
    _this.updateD3 = _this.updateD3.bind(LineChart_assertThisInitialized(_this));
    return _this;
  } // Trigger D3 intial render()


  LineChart_createClass(LineChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderD3();
      this.updateD3();
    } // Triger D3 update()

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          kpis = _this$props.kpis,
          selectedKpi = _this$props.selectedKpi;

      if (kpis !== prevProps.kpis || selectedKpi !== prevProps.selectedKpi) {
        this.updateD3();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var chart = this.props.chart;
      return react_default.a.createElement("div", null, chart);
    }
  }, {
    key: "renderD3",
    value: function renderD3() {
      var _this$props2 = this.props,
          connectFauxDOM = _this$props2.connectFauxDOM,
          selectSeries = _this$props2.selectSeries;
      var faux = connectFauxDOM("svg", "chart");

      function highlightLine(id) {
        if (id == null) return;
        d3["selectAll"](".line").attr("stroke-width", 1.8);
        d3["selectAll"](".dot").attr("r", 3);
        d3["selectAll"](".dot_".concat(id)).attr("r", 5);
        d3["select"]("#line_".concat(id)).attr("stroke-width", 4.5);
        d3["selectAll"](".legend").attr("font-weight", "normal").attr("font-size", "17");
        d3["select"]("#legend_".concat(id)).attr("font-weight", "bold").attr("font-size", "20");
      }

      var svg = d3["select"](faux).attr("id", "chart").attr("viewBox", "0 0 ".concat(LineChart_width + margin.left + margin.right, " ").concat(LineChart_height + margin.bottom + margin.top)).attr("preserveAspectRatio", "xMidYMid meet").classed("svg-content", true).attr("xmlns", "http://www.w3.org/2000/svg").attr("xmlnsXlink", "http://www.w3.org/1999/xlink") // CSS Styles
      .style("margin", "20px 0").append("g").attr("id", "plotArea").attr("transform", "translate(".concat(margin.left + 30, ",").concat(margin.bottom, ")"));
      svg.append("rect").attr("width", LineChart_width).attr("height", LineChart_height).style("opacity", 0).attr("id", "facade").on("click", function () {
        highlightLine("null");
        selectSeries(null);
      }); // Y-axis

      svg.append("g").attr("class", "myYaxis").style("color", "black").style("font-size", "0.8rem"); // X-axis

      svg.append("g").attr("class", "myXaxis").attr("transform", "translate(0, ".concat(LineChart_height - margin.bottom, ")")).style("color", "black").style("font-size", "0.8rem"); // Y-axis Unit

      svg.append("text").attr("x", 0 - margin.left / 4).attr("y", 0 - margin.top).attr("id", "y_unit").style("fill", "black").attr("text-anchor", "middle").style("font-size", "15px"); // Title

      svg.append("text").attr("x", LineChart_width / 2).attr("id", "title").attr("y", 0 - margin.top / 2).attr("text-anchor", "middle").style("text-decoration", "underline").style("font-size", "31px").attr("fill", accentColor);
    }
  }, {
    key: "updateD3",
    value: function updateD3() {
      var x;
      var _this$props3 = this.props,
          connectFauxDOM = _this$props3.connectFauxDOM,
          kpis = _this$props3.kpis,
          selectSeries = _this$props3.selectSeries,
          animateFauxDOM = _this$props3.animateFauxDOM,
          selectedKpi = _this$props3.selectedKpi;
      var faux = connectFauxDOM("svg", "chart");
      var index = kpis.findIndex(function (kpi) {
        return kpi.id == selectedKpi;
      });
      index = index == -1 ? 0 : index;
      var data = kpis[index] ? kpis[index].series : [];
      var test = {};

      if (kpis[index] && kpis[index].series) {
        test = LineChart_objectSpread({}, kpis[index].series[0]);

        var entries = _toConsumableArray(kpis[index].series[0].entries);

        test.id = Math.round(Math.random() * 500000);
        test.entries = entries.map(function (datapoint) {
          return {
            value: datapoint.target,
            date: datapoint.date,
            target: datapoint.target,
            id: Math.round(Math.random() * 500000)
          };
        });
        test.color = "#008000";
        test.name = "".concat(test.name, " Threshold");
        data = [test].concat(_toConsumableArray(data));
      }

      var parseTime = d3["timeParse"]("%Y-%m-%d");

      function highlightLine(id) {
        d3["selectAll"](".line").attr("stroke-width", 1.8);
        d3["selectAll"](".dot").attr("r", 3);
        d3["selectAll"](".dot_".concat(id)).attr("r", 5);
        d3["select"]("#line_".concat(id)).attr("stroke-width", 4.5);
        d3["selectAll"](".legend").attr("font-weight", "normal").attr("font-size", "17");
        d3["select"]("#legend_".concat(id)).attr("font-weight", "bold").attr("font-size", "20");
      } // Sort by Date


      for (x in data) {
        var series = data[x].entries;
        series.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        });
      } // In order to scale the axes must find minimum and maximum from all series


      var mins = [];

      for (x in data) {
        mins.push(d3["min"](data[x].entries, function (d) {
          return d.value;
        }));
      }

      var maxs = [];

      for (x in data) {
        maxs.push(d3["max"](data[x].entries, function (d) {
          return d.value;
        }));
      }

      var minimum = mins.filter(function (d) {
        return d != null;
      });
      var maximum = maxs.filter(function (d) {
        return d != null;
      }); // -----------------------------------------------------------------------------
      // AXES & SCALES
      // -----------------------------------------------------------------------------

      var xScale = d3["scaleTime"]().domain([new Date("2019-01-01"), new Date("2019-12-31")]).range([0, LineChart_width]);
      var yScale = d3["scaleLinear"]().domain(minimum.length ? [d3["min"](minimum) * 0.8, d3["max"](maximum) * 1.2] : [0, 100]).range([LineChart_height - margin.bottom, 0]);
      var y_axis = d3["axisLeft"](yScale);
      var x_axis = d3["axisBottom"](xScale).tickFormat(d3["timeFormat"]("%b")); // Update the X_Axis

      d3["select"](faux).selectAll(".myXaxis").transition().duration(1000).call(x_axis); // Update the Y_Axis

      d3["select"](faux).selectAll(".myYaxis").transition().duration(1000).call(y_axis); // -----------------------------------------------------------------------------
      // LINES
      // -----------------------------------------------------------------------------

      var line = d3["line"]().y(function (d) {
        return yScale(d.value);
      }).defined(function (d) {
        return d.value != null;
      }).x(function (d) {
        return xScale(parseTime(d.date));
      });
      var s = d3["select"](faux).select("#plotArea").selectAll(".line");
      var sData = s.data(data);
      var sEnter = sData.enter().append("path").merge(s).attr("d", function (d) {
        return line(d.entries);
      }).style("opacity", 1).attr("id", function (d) {
        return "line_".concat(d.id);
      }).attr("class", "line").attr("fill", "none").attr("stroke-width", 1.8).attr("stroke", function (d) {
        return d.color;
      }); // Then the following lines transition the line so that the gap is hidden...

      sData.exit().remove(); // -----------------------------------------------------------------------------
      // POINTS
      // -----------------------------------------------------------------------------

      var d = d3["select"](faux).selectAll(".dots");
      d.remove();
      var dotBind = d3["select"](faux).select("#plotArea").selectAll(".dots").data(data);
      dotBind.enter().append("g").attr("class", "dots").attr("data-id", function (d) {
        return d.id;
      }).style("fill", function (d) {
        return d3["rgb"](d.color).darker(1);
      }) // Second we need to enter in the 'values' part of this group
      .selectAll(".dot").data(function (d) {
        return d.entries;
      }).enter().append("circle")
      /* .attr("class", function(d) {
        var color = "grey";
        var deviation = Math.abs(d.val / d.target - 1);
        if (d.val == null) return color;
        // Calculating color
        if (deviation < safe) color = "green";
        else if (deviation > safe && deviation < danger) color = "orange";
        else color = "red";
        return color;
      }) */
      .attr("cx", function (d) {
        return xScale(parseTime(d.date));
      }).attr("cy", function (d) {
        return yScale(d.value ? d.value : -50);
      }).attr("r", 3).style("opacity", 0).attr("class", function (d, i, j) {
        var id = $(j).parent().attr("data-id");
        return "dot_".concat(id, " ") + "dot";
      }).attr("stroke", function (d) {
        return d3["rgb"](d.color).darker(1);
      }).attr("stroke-width", "1").attr("stroke-opacity", "0").transition().delay(500).duration(1000).style("opacity", 1);
      animateFauxDOM(3000); // -----------------------------------------------------------------------------
      // LEGEND
      // -----------------------------------------------------------------------------

      var w = d3["select"](faux).selectAll(".legend");
      w.remove();
      var legend = d3["select"](faux).selectAll(".legend").data(data).enter().append("g").attr("class", "legend").attr("transform", function (d, i) {
        return "translate(".concat(0, ",", i * 20, ")");
      }); // Legend text explaining the symbols

      legend.append("text").attr("x", LineChart_width + margin.right).attr("y", function (d, i) {
        return LineChart_height / 2 + 20 * i;
      }).attr("id", function (d) {
        return "legend_".concat(d.id);
      }).attr("class", "legend").style("opacity", 1).style("cursor", "pointer").attr("dy", ".35em").attr("font-size", 17).attr("fill", function (d) {
        return d.color;
      }).style("text-anchor", "end").text(function (d) {
        return d.name;
      }).on("click", function (d) {
        highlightLine(d.id);
        selectSeries(d.id);
      });
      d3["select"](faux).select("#title").text(function () {
        return kpis[index] ? kpis[index].name : "";
      });
      d3["select"](faux).select("#y_unit").text(function () {
        return kpis[index] ? kpis[index].unit || "" : "";
      });
      d3["select"](faux).select("#plotArea").selectAll("#curtain").remove();
      d3["select"](faux).select("#plotArea").append("rect").attr("id", "curtain").style("fill", "#ffffff").attr("x", 0).attr("width", LineChart_width).attr("height", LineChart_height - margin.bottom).transition().delay(500).ease(d3["easeExp"]).duration(4000).attr("x", LineChart_width + 5);
      animateFauxDOM(9000);
    }
  }]);

  return LineChart;
}(react_default.a.Component);

LineChart_LineChart.propTypes = {
  kpis: prop_types_default.a.array.isRequired,
  selectSeries: prop_types_default.a.func.isRequired,
  chart: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  selectedKpi: prop_types_default.a.number,
  connectFauxDOM: prop_types_default.a.func.isRequired,
  animateFauxDOM: prop_types_default.a.func.isRequired
};
LineChart_LineChart.defaultProps = {
  chart: "Loading",
  selectedKpi: null
};
/* harmony default export */ var d3charts_LineChart = (Object(ReactFauxDOM["withFauxDOM"])(LineChart_LineChart));
// CONCATENATED MODULE: ./frontend/src/core/helpers/Filters.js
// Find the first object in an array whose property defined by prop matches value
var getItem = function getItem(value, arr, prop) {
  if (!arr) return null;
  var query = arr.filter(function (item) {
    return item[prop] == value;
  });
  if (!query.length) return null;else return query[0];
};
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/ChartOptions.js
function ChartOptions_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ChartOptions_typeof = function _typeof(obj) { return typeof obj; }; } else { ChartOptions_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ChartOptions_typeof(obj); }

function ChartOptions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChartOptions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ChartOptions_createClass(Constructor, protoProps, staticProps) { if (protoProps) ChartOptions_defineProperties(Constructor.prototype, protoProps); if (staticProps) ChartOptions_defineProperties(Constructor, staticProps); return Constructor; }

function ChartOptions_possibleConstructorReturn(self, call) { if (call && (ChartOptions_typeof(call) === "object" || typeof call === "function")) { return call; } return ChartOptions_assertThisInitialized(self); }

function ChartOptions_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ChartOptions_getPrototypeOf(o) { ChartOptions_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ChartOptions_getPrototypeOf(o); }

function ChartOptions_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ChartOptions_setPrototypeOf(subClass, superClass); }

function ChartOptions_setPrototypeOf(o, p) { ChartOptions_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ChartOptions_setPrototypeOf(o, p); }

// DEPENDANCIES


var ChartOptions_ChartOptions =
/*#__PURE__*/
function (_Component) {
  ChartOptions_inherits(ChartOptions, _Component);

  function ChartOptions() {
    var _getPrototypeOf2;

    var _temp, _this;

    ChartOptions_classCallCheck(this, ChartOptions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ChartOptions_possibleConstructorReturn(_this, (_temp = _this = ChartOptions_possibleConstructorReturn(this, (_getPrototypeOf2 = ChartOptions_getPrototypeOf(ChartOptions)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.onChange = function (e) {
      var _this$props = _this.props,
          selectKpi = _this$props.selectKpi,
          selectSeries = _this$props.selectSeries,
          deselect = _this$props.deselect;
      selectKpi(e.target.value);
      selectSeries(null);
      deselect();
    }, _this.openKpiNew = function () {
      $("#newKpi").modal("show");
    }, _temp));
  }

  ChartOptions_createClass(ChartOptions, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var selectKpi = this.props.selectKpi;

      if (!prevProps.kpis[0] && this.props.kpis[0]) {
        selectKpi(this.props.kpis[0].id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          kpis = _this$props2.kpis,
          changeMenu = _this$props2.changeMenu,
          menuMode = _this$props2.menuMode,
          kpi = _this$props2.kpi;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h4", {
        style: {
          height: "fit-content",
          marginBottom: 0,
          lineHeight: 1.4
        },
        className: "mt-auto mb-auto"
      }, "KPI:", " "), react_default.a.createElement("select", {
        className: "form-control ml-2 mt-auto mb-auto",
        style: {
          width: "".concat(200, "px")
        },
        onChange: this.onChange
      }, kpis.map(function (kpi) {
        return react_default.a.createElement("option", {
          key: "choice-".concat(kpi.id),
          value: kpi.id
        }, kpi.name);
      })), react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-success btn-sm mt-auto ml-3",
        style: {
          padding: "1px 8px"
        },
        onClick: this.openKpiNew
      }, react_default.a.createElement("i", {
        className: "im im-plus",
        style: {
          lineHeight: "1.5",
          fontSize: "20px"
        }
      })), kpi && react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-sm mt-auto ml-auto ".concat(menuMode ? "btn-secondary" : "btn-primary"),
        onClick: function onClick() {
          return changeMenu(false);
        },
        style: {
          padding: "1px 8px"
        },
        disabled: menuMode ? false : true
      }, react_default.a.createElement("i", {
        className: "im im-line-chart-up",
        style: {
          lineHeight: "1.5",
          fontSize: "20px"
        }
      })), react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-sm mt-auto ml-2 ".concat(menuMode ? "btn-primary" : "btn-secondary"),
        onClick: function onClick() {
          return changeMenu(true);
        },
        style: {
          padding: "1px 8px"
        },
        disabled: menuMode ? true : false
      }, react_default.a.createElement("i", {
        className: "im im-gear",
        style: {
          lineHeight: "1.5",
          fontSize: "20px"
        }
      })), " "));
    }
  }]);

  return ChartOptions;
}(react["Component"]);

/* harmony default export */ var components_ChartOptions = (ChartOptions_ChartOptions);
// EXTERNAL MODULE: ./node_modules/react-color/lib/index.js
var lib = __webpack_require__("./node_modules/react-color/lib/index.js");

// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/series/SeriesEdit.js
function SeriesEdit_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SeriesEdit_typeof = function _typeof(obj) { return typeof obj; }; } else { SeriesEdit_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SeriesEdit_typeof(obj); }

function SeriesEdit_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SeriesEdit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SeriesEdit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SeriesEdit_createClass(Constructor, protoProps, staticProps) { if (protoProps) SeriesEdit_defineProperties(Constructor.prototype, protoProps); if (staticProps) SeriesEdit_defineProperties(Constructor, staticProps); return Constructor; }

function SeriesEdit_possibleConstructorReturn(self, call) { if (call && (SeriesEdit_typeof(call) === "object" || typeof call === "function")) { return call; } return SeriesEdit_assertThisInitialized(self); }

function SeriesEdit_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SeriesEdit_getPrototypeOf(o) { SeriesEdit_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SeriesEdit_getPrototypeOf(o); }

function SeriesEdit_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SeriesEdit_setPrototypeOf(subClass, superClass); }

function SeriesEdit_setPrototypeOf(o, p) { SeriesEdit_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SeriesEdit_setPrototypeOf(o, p); }

// DEPENDANCIES



 // CONFIG

 // ACTIONS



var SeriesEdit_SeriesEdit =
/*#__PURE__*/
function (_Component) {
  SeriesEdit_inherits(SeriesEdit, _Component);

  function SeriesEdit() {
    var _getPrototypeOf2;

    var _temp, _this;

    SeriesEdit_classCallCheck(this, SeriesEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return SeriesEdit_possibleConstructorReturn(_this, (_temp = _this = SeriesEdit_possibleConstructorReturn(this, (_getPrototypeOf2 = SeriesEdit_getPrototypeOf(SeriesEdit)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      name: "",
      color: "",
      plot_type: "li"
    }, _this.onChangeColor = function (color) {
      _this.setState({
        color: color.hex
      });
    }, _this.update = function (series) {
      _this.setState({
        name: series.name,
        color: series.color,
        plot_type: series.plot_type
      });
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          kpi = _this$props.kpi,
          series = _this$props.series,
          updateSeries = _this$props.updateSeries;
      var _this$state = _this.state,
          name = _this$state.name,
          color = _this$state.color,
          plot_type = _this$state.plot_type;
      var s = {
        name: name,
        color: color,
        plot_type: plot_type,
        kpi: kpi
      };
      updateSeries(s, series.id);
    }, _this.onChange = function (e) {
      _this.setState(SeriesEdit_defineProperty({}, e.target.name, e.target.value));
    }, _temp));
  }

  SeriesEdit_createClass(SeriesEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var series = this.props.series;
      this.setState({
        name: series.name,
        color: series.color,
        plot_type: series.plot_type
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var series = this.props.series;
      if (series !== prevProps.series) this.update(series);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          color = _this$state2.color,
          plot_type = _this$state2.plot_type;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        noValidate: true,
        className: "w-100"
      }, react_default.a.createElement("div", {
        className: "row m-0"
      }, react_default.a.createElement("div", {
        className: "col-sm-6"
      }, react_default.a.createElement("div", {
        className: "d-flex flex-column"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "name"
      }, "Name"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "name",
        onChange: this.onChange,
        placeholder: "...",
        value: name,
        required: true
      })), react_default.a.createElement("div", {
        className: "form-group mt-4"
      }, react_default.a.createElement("label", {
        htmlFor: "plot_type"
      }, "Plot Type"), react_default.a.createElement("select", {
        className: "form-control",
        type: "text",
        name: "plot_type",
        onChange: this.onChange,
        placeholder: "...",
        value: plot_type,
        required: true
      }, PLOT_TYPE_CHOICES.map(function (choice) {
        return react_default.a.createElement("option", {
          key: "choice-".concat(choice.id),
          value: choice.id
        }, choice.name);
      }))))), react_default.a.createElement("div", {
        className: "col-sm-4 m-auto"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "color"
      }, "Color"), react_default.a.createElement(lib["ChromePicker"], {
        color: color,
        onChangeComplete: this.onChangeColor
      })))), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-success" //data-dismiss="modal"

      }, "Save Changes")));
    }
  }]);

  return SeriesEdit;
}(react["Component"]);

SeriesEdit_SeriesEdit.propTypes = {
  updateSeries: prop_types_default.a.func.isRequired
};
/* harmony default export */ var series_SeriesEdit = (Object(es["connect"])(null, {
  updateSeries: dashboards_updateSeries
})(SeriesEdit_SeriesEdit));
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/datapoints/DataTable.js
function DataTable_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DataTable_typeof = function _typeof(obj) { return typeof obj; }; } else { DataTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DataTable_typeof(obj); }

function DataTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DataTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DataTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) DataTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) DataTable_defineProperties(Constructor, staticProps); return Constructor; }

function DataTable_possibleConstructorReturn(self, call) { if (call && (DataTable_typeof(call) === "object" || typeof call === "function")) { return call; } return DataTable_assertThisInitialized(self); }

function DataTable_getPrototypeOf(o) { DataTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DataTable_getPrototypeOf(o); }

function DataTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DataTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DataTable_setPrototypeOf(subClass, superClass); }

function DataTable_setPrototypeOf(o, p) { DataTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DataTable_setPrototypeOf(o, p); }

// DEPENDANCIES


 // CONFIG

 // ACTIONS

 // CORE COMPONENTS



var DataTable_DatapointTable =
/*#__PURE__*/
function (_Component) {
  DataTable_inherits(DatapointTable, _Component);

  function DatapointTable(props) {
    var _this;

    DataTable_classCallCheck(this, DatapointTable);

    _this = DataTable_possibleConstructorReturn(this, DataTable_getPrototypeOf(DatapointTable).call(this, props));

    _this.formatRow = function (datapoint) {
      var today = new Date();
      var date = new Date(datapoint.date);

      if (date.getTime() <= today.getTime()) {
        if (!datapoint.value) return "table-danger";
      } else if (date.getTime() <= today.setDate(today.getDate() + 5)) return "table-warning";

      return "";
    };

    _this.update = _this.update.bind(DataTable_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(DataTable_assertThisInitialized(_this));
    return _this;
  }

  DataTable_createClass(DatapointTable, [{
    key: "delete",
    value: function _delete(id) {
      alert("Cannot Delete Datapoint");
    }
  }, {
    key: "update",
    value: function update(current, id) {
      this.props.updateDatapoint(current, id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          header = _this$props.header,
          rowClick = _this$props.rowClick;
      return react_default.a.createElement(table_Table //editable
      , {
        data: data,
        header: header,
        update: this.update //delete={this.delete}
        //deletable
        ,
        rowClick: rowClick,
        formatRow: this.formatRow
      });
    }
  }]);

  return DatapointTable;
}(react["Component"]);

DataTable_DatapointTable.propTypes = {
  data: prop_types_default.a.array.isRequired,
  header: prop_types_default.a.array
};
DataTable_DatapointTable.defaultProps = {
  header: DATAPOINT_TABLE_HEADERS
};
/* harmony default export */ var DataTable = (Object(es["connect"])(null, {
  updateDatapoint: dashboards_updateDatapoint,
  deleteDatapoint: dashboards_deleteDatapoint
})(DataTable_DatapointTable));
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/datapoints/DataForm.js
function DataForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DataForm_typeof = function _typeof(obj) { return typeof obj; }; } else { DataForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DataForm_typeof(obj); }

function DataForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { DataForm_defineProperty(target, key, source[key]); }); } return target; }

function DataForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DataForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DataForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DataForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) DataForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) DataForm_defineProperties(Constructor, staticProps); return Constructor; }

function DataForm_possibleConstructorReturn(self, call) { if (call && (DataForm_typeof(call) === "object" || typeof call === "function")) { return call; } return DataForm_assertThisInitialized(self); }

function DataForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DataForm_getPrototypeOf(o) { DataForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DataForm_getPrototypeOf(o); }

function DataForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DataForm_setPrototypeOf(subClass, superClass); }

function DataForm_setPrototypeOf(o, p) { DataForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DataForm_setPrototypeOf(o, p); }










var DataForm_DataForm =
/*#__PURE__*/
function (_Component) {
  DataForm_inherits(DataForm, _Component);

  function DataForm() {
    var _getPrototypeOf2;

    var _temp, _this;

    DataForm_classCallCheck(this, DataForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return DataForm_possibleConstructorReturn(_this, (_temp = _this = DataForm_possibleConstructorReturn(this, (_getPrototypeOf2 = DataForm_getPrototypeOf(DataForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      value: "",
      target: "",
      date: new Date()
    }, _this.update = function (payload) {
      _this.setState(DataForm_objectSpread({}, payload));
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          updateDatapoint = _this$props.updateDatapoint,
          series = _this$props.series;
      var _this$state = _this.state,
          value = _this$state.value,
          target = _this$state.target,
          date = _this$state.date,
          id = _this$state.id;
      var datapoint = {
        value: value,
        target: target,
        series: series,
        date: Object(esm_format["default"])(date, "yyyy-MM-dd")
      };
      updateDatapoint(datapoint, id);
      $("#dataOptions").modal("hide");
    }, _this.onChange = function (e) {
      _this.setState(DataForm_defineProperty({}, e.target.name, e.target.value));
    }, _this.onDateChange = function (date) {
      _this.setState({
        date: date
      });
    }, _temp));
  }

  DataForm_createClass(DataForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var datapoint = this.props.datapoint;

      if (prevProps.datapoint !== datapoint) {
        this.update(DataForm_objectSpread({}, datapoint, {
          date: datapoint.date ? Object(parseISO["default"])(datapoint.date) : new Date()
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          value = _this$state2.value,
          target = _this$state2.target,
          date = _this$state2.date;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        noValidate: true
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "name"
      }, "Value"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "value",
        onChange: this.onChange,
        placeholder: "...",
        value: value != null ? value : ""
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "plot_type"
      }, "Target"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "target",
        onChange: this.onChange,
        placeholder: "...",
        value: target != null ? target : ""
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "date",
        className: "d-block"
      }, "Date"), react_default.a.createElement(react_datepicker_es["default"], {
        className: "form-control",
        onChange: function onChange(date) {
          return _this2.onDateChange(date);
        },
        selected: date,
        dateFormat: "yyyy-MM-dd"
      })), react_default.a.createElement("div", {
        className: "modal-footer"
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal"
      }, "Close"), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Update Datapoint"))));
    }
  }]);

  return DataForm;
}(react["Component"]);

DataForm_DataForm.propTypes = {
  datapoint: prop_types_default.a.object,
  updateDatapoint: prop_types_default.a.func.isRequired,
  series: prop_types_default.a.number
};
DataForm_DataForm.defaultProps = {
  datapoint: null,
  series: null
};
/* harmony default export */ var datapoints_DataForm = (Object(es["connect"])(null, {
  updateDatapoint: dashboards_updateDatapoint
})(DataForm_DataForm));
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/series/SeriesView.js
function SeriesView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SeriesView_typeof = function _typeof(obj) { return typeof obj; }; } else { SeriesView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SeriesView_typeof(obj); }

function SeriesView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SeriesView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SeriesView_createClass(Constructor, protoProps, staticProps) { if (protoProps) SeriesView_defineProperties(Constructor.prototype, protoProps); if (staticProps) SeriesView_defineProperties(Constructor, staticProps); return Constructor; }

function SeriesView_possibleConstructorReturn(self, call) { if (call && (SeriesView_typeof(call) === "object" || typeof call === "function")) { return call; } return SeriesView_assertThisInitialized(self); }

function SeriesView_getPrototypeOf(o) { SeriesView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SeriesView_getPrototypeOf(o); }

function SeriesView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SeriesView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SeriesView_setPrototypeOf(subClass, superClass); }

function SeriesView_setPrototypeOf(o, p) { SeriesView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SeriesView_setPrototypeOf(o, p); }

// DEPENDANCIES


 // ACTIONS

 // COMPONENTS







var SeriesView_SeriesView =
/*#__PURE__*/
function (_Component) {
  SeriesView_inherits(SeriesView, _Component);

  function SeriesView(props) {
    var _this;

    SeriesView_classCallCheck(this, SeriesView);

    _this = SeriesView_possibleConstructorReturn(this, SeriesView_getPrototypeOf(SeriesView).call(this, props));
    _this.state = {
      selectedDatapoint: null
    };

    _this.setRemove = function () {
      $("#removeConfirmation").modal("show");
    };

    _this.onSubmitRemove = function (state) {
      var _this$props = _this.props,
          series = _this$props.series,
          deleteSeries = _this$props.deleteSeries;

      if (state.name === series.name) {
        deleteSeries(series.id);
        return true;
      } else return false;
    };

    _this.selectDatapoint = function (id) {
      _this.setState({
        selectedDatapoint: id
      });

      $("#dataOptions").modal("show");
    };

    _this.onSubmitRemove = _this.onSubmitRemove.bind(SeriesView_assertThisInitialized(_this));
    return _this;
  }

  SeriesView_createClass(SeriesView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          setRemove = _this$props2.setRemove,
          series = _this$props2.series;
      setRemove({
        type: "series",
        item: series,
        onSubmit: this.onSubmitRemove
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          series = _this$props3.series,
          onBack = _this$props3.onBack;
      var selectedDatapoint = this.state.selectedDatapoint;
      if (!series) return react_default.a.createElement(react_default.a.Fragment, null);
      var datapoint = {};

      if (series.entries) {
        datapoint = getItem(selectedDatapoint, series.entries, "id");
      }

      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("button", {
        className: "mb-4 btn btn-sm btn-primary",
        onClick: onBack,
        style: {
          padding: "1px 8px",
          position: "fixed",
          zIndex: 1000
        }
      }, react_default.a.createElement("i", {
        className: "im im-arrow-left icon",
        style: {
          lineHeight: 1.5,
          fontSize: "20px"
        }
      })), react_default.a.createElement("h3", null, "Properties"), react_default.a.createElement("div", {
        className: "d-flex"
      }, react_default.a.createElement(series_SeriesEdit, {
        series: series
      })), react_default.a.createElement("hr", null), react_default.a.createElement("h3", {
        className: "mt-4"
      }, "Data"), react_default.a.createElement(DataTable, {
        data: series.entries,
        rowClick: this.selectDatapoint
      }), react_default.a.createElement(modal_Modal, {
        title: "Update Data",
        id: "dataOptions",
        overflow: "visible"
      }, react_default.a.createElement(datapoints_DataForm, {
        datapoint: datapoint,
        series: series.id
      })), react_default.a.createElement("div", {
        className: "d-flex justify-content-end"
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-danger",
        onClick: this.setRemove
      }, "Delete Series")));
    }
  }]);

  return SeriesView;
}(react["Component"]);

/* harmony default export */ var series_SeriesView = (Object(es["connect"])(null, {
  deleteSeries: dashboards_deleteSeries
})(SeriesView_SeriesView));
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/series/SeriesCard.js
function SeriesCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SeriesCard_typeof = function _typeof(obj) { return typeof obj; }; } else { SeriesCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SeriesCard_typeof(obj); }

function SeriesCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SeriesCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SeriesCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) SeriesCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) SeriesCard_defineProperties(Constructor, staticProps); return Constructor; }

function SeriesCard_possibleConstructorReturn(self, call) { if (call && (SeriesCard_typeof(call) === "object" || typeof call === "function")) { return call; } return SeriesCard_assertThisInitialized(self); }

function SeriesCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SeriesCard_getPrototypeOf(o) { SeriesCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SeriesCard_getPrototypeOf(o); }

function SeriesCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SeriesCard_setPrototypeOf(subClass, superClass); }

function SeriesCard_setPrototypeOf(o, p) { SeriesCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SeriesCard_setPrototypeOf(o, p); }

// DEPENDANCIES


var SeriesCard_SeriesCard =
/*#__PURE__*/
function (_Component) {
  SeriesCard_inherits(SeriesCard, _Component);

  function SeriesCard() {
    SeriesCard_classCallCheck(this, SeriesCard);

    return SeriesCard_possibleConstructorReturn(this, SeriesCard_getPrototypeOf(SeriesCard).apply(this, arguments));
  }

  SeriesCard_createClass(SeriesCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          series = _this$props.series,
          _onClick = _this$props.onClick;
      return react_default.a.createElement("div", {
        className: "card m-3 card-hover",
        onClick: function onClick() {
          return _onClick(series.id);
        },
        "data-toggle": "modal",
        "data-target": "#manageKpi"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement("div", {
        className: "d-flex"
      }, react_default.a.createElement("div", {
        className: "card-title",
        style: {
          fontSize: "1.25rem",
          fontWeight: "bold"
        }
      }, series.name, " "), react_default.a.createElement("i", {
        style: {
          color: series.color,
          textAlign: "right"
        },
        className: "im im-drop ml-auto"
      }))));
    }
  }]);

  return SeriesCard;
}(react["Component"]);

/* harmony default export */ var series_SeriesCard = (SeriesCard_SeriesCard);
// CONCATENATED MODULE: ./frontend/src/core/components/ui/NewCard.js
// DEPENDANCIES


var NewCard_NewCard = function NewCard(props) {
  var handleClick = props.handleClick,
      text = props.text;
  return react_default.a.createElement("div", {
    className: "card m-3 text-center icon",
    onClick: handleClick
  }, react_default.a.createElement("div", {
    className: "card-body",
    style: {
      paddingBottom: "-1rem !important"
    }
  }, react_default.a.createElement("div", {
    className: "d-flex h-100 w-100"
  }, react_default.a.createElement("div", {
    className: "m-auto"
  }, react_default.a.createElement("i", {
    className: " im im-plus"
  })))));
};

/* harmony default export */ var ui_NewCard = (NewCard_NewCard);
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/series/SeriesList.js
function SeriesList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SeriesList_typeof = function _typeof(obj) { return typeof obj; }; } else { SeriesList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SeriesList_typeof(obj); }

function SeriesList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SeriesList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SeriesList_createClass(Constructor, protoProps, staticProps) { if (protoProps) SeriesList_defineProperties(Constructor.prototype, protoProps); if (staticProps) SeriesList_defineProperties(Constructor, staticProps); return Constructor; }

function SeriesList_possibleConstructorReturn(self, call) { if (call && (SeriesList_typeof(call) === "object" || typeof call === "function")) { return call; } return SeriesList_assertThisInitialized(self); }

function SeriesList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SeriesList_getPrototypeOf(o) { SeriesList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SeriesList_getPrototypeOf(o); }

function SeriesList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SeriesList_setPrototypeOf(subClass, superClass); }

function SeriesList_setPrototypeOf(o, p) { SeriesList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SeriesList_setPrototypeOf(o, p); }

// DEPENDANCIES



 // CORE COMPONENTS



var SeriesList_SeriesList =
/*#__PURE__*/
function (_Component) {
  SeriesList_inherits(SeriesList, _Component);

  function SeriesList() {
    var _getPrototypeOf2;

    var _temp, _this;

    SeriesList_classCallCheck(this, SeriesList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return SeriesList_possibleConstructorReturn(_this, (_temp = _this = SeriesList_possibleConstructorReturn(this, (_getPrototypeOf2 = SeriesList_getPrototypeOf(SeriesList)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.onNewSeriesClick = function (e) {
      var _this$props = _this.props,
          addSeries = _this$props.addSeries,
          kpiId = _this$props.kpiId;
      addSeries({
        kpi: kpiId,
        color: "#000",
        name: "My Series",
        plot_type: "li"
      });
    }, _temp));
  }

  SeriesList_createClass(SeriesList, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          series = _this$props2.series,
          onClick = _this$props2.onClick;
      if (!series) return react_default.a.createElement("div", null);
      return react_default.a.createElement("div", {
        className: "row"
      }, series.map(function (series) {
        return react_default.a.createElement("div", {
          key: series.id,
          className: "col-sm-3"
        }, react_default.a.createElement(series_SeriesCard, {
          onClick: onClick,
          series: series
        }));
      }), react_default.a.createElement("div", {
        className: "col-sm-3"
      }, react_default.a.createElement(ui_NewCard, {
        handleClick: this.onNewSeriesClick,
        text: "Series"
      })));
    }
  }]);

  return SeriesList;
}(react["Component"]);

/* harmony default export */ var series_SeriesList = (Object(es["connect"])(null, {
  addSeries: dashboards_addSeries
})(SeriesList_SeriesList));
// EXTERNAL MODULE: ./node_modules/react-compound-slider/es/index.js + 33 modules
var react_compound_slider_es = __webpack_require__("./node_modules/react-compound-slider/es/index.js");

// CONCATENATED MODULE: ./frontend/src/core/components/ui/slider/SliderProps.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SliderProps_extends() { SliderProps_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SliderProps_extends.apply(this, arguments); }

function SliderProps_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { SliderProps_defineProperty(target, key, source[key]); }); } return target; }

function SliderProps_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // *******************************************************
// RAIL
// *******************************************************

var railOuterStyle = {
  position: "absolute",
  width: "100%",
  height: 42,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  cursor: "pointer" // border: '1px solid white',

};
var railInnerStyle = {
  position: "absolute",
  width: "100%",
  height: 14,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  pointerEvents: "none",
  backgroundColor: "#218838"
};
function SliderRail(_ref) {
  var getRailProps = _ref.getRailProps,
      color = _ref.color;

  var style = SliderProps_objectSpread({}, railInnerStyle);

  style.backgroundColor = color;
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", SliderProps_extends({
    style: railOuterStyle
  }, getRailProps())), react_default.a.createElement("div", {
    style: style
  }));
}
SliderRail.propTypes = {
  getRailProps: prop_types_default.a.func.isRequired
}; // *******************************************************
// HANDLE COMPONENT
// *******************************************************

function Handle(_ref2) {
  var _ref2$domain = _slicedToArray(_ref2.domain, 2),
      min = _ref2$domain[0],
      max = _ref2$domain[1],
      _ref2$handle = _ref2.handle,
      id = _ref2$handle.id,
      value = _ref2$handle.value,
      percent = _ref2$handle.percent,
      disabled = _ref2.disabled,
      getHandleProps = _ref2.getHandleProps,
      noDisplay = _ref2.noDisplay;

  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", SliderProps_extends({
    style: {
      left: "".concat(percent, "%"),
      position: "absolute",
      transform: "translate(-50%, -50%)",
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
      zIndex: disabled ? 0 : 5,
      pointerEvents: disabled ? "none" : "auto",
      width: 28,
      height: 42,
      cursor: "pointer",
      // border: '1px solid white',
      backgroundColor: "none"
    }
  }, getHandleProps(id))), react_default.a.createElement("div", {
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    style: {
      left: "".concat(percent, "%"),
      position: "absolute",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      width: noDisplay ? 0 : 20,
      height: noDisplay ? 0 : 20,
      borderRadius: "50%",
      boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
      backgroundColor: disabled ? "#666" : "#ffc400"
    }
  }));
}
Handle.propTypes = {
  domain: prop_types_default.a.array.isRequired,
  handle: prop_types_default.a.shape({
    id: prop_types_default.a.string.isRequired,
    value: prop_types_default.a.number.isRequired,
    percent: prop_types_default.a.number.isRequired
  }).isRequired,
  getHandleProps: prop_types_default.a.func.isRequired,
  disabled: prop_types_default.a.bool
};
Handle.defaultProps = {
  disabled: false
}; // *******************************************************
// KEYBOARD HANDLE COMPONENT
// Uses a button to allow keyboard events
// *******************************************************

function KeyboardHandle(_ref3) {
  var _ref3$domain = _slicedToArray(_ref3.domain, 2),
      min = _ref3$domain[0],
      max = _ref3$domain[1],
      _ref3$handle = _ref3.handle,
      id = _ref3$handle.id,
      value = _ref3$handle.value,
      percent = _ref3$handle.percent,
      disabled = _ref3.disabled,
      getHandleProps = _ref3.getHandleProps;

  return react_default.a.createElement("button", SliderProps_extends({
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    style: {
      left: "".concat(percent, "%"),
      position: "absolute",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      width: 24,
      height: 24,
      borderRadius: "50%",
      boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
      backgroundColor: disabled ? "#666" : "#218838"
    },
    disabled: true
  }, getHandleProps(id)));
}
KeyboardHandle.propTypes = {
  domain: prop_types_default.a.array.isRequired,
  handle: prop_types_default.a.shape({
    id: prop_types_default.a.string.isRequired,
    value: prop_types_default.a.number.isRequired,
    percent: prop_types_default.a.number.isRequired
  }).isRequired,
  getHandleProps: prop_types_default.a.func.isRequired,
  disabled: prop_types_default.a.bool
};
KeyboardHandle.defaultProps = {
  disabled: false
}; // *******************************************************
// TRACK COMPONENT
// *******************************************************

function Track(_ref4) {
  var source = _ref4.source,
      target = _ref4.target,
      getTrackProps = _ref4.getTrackProps,
      disabled = _ref4.disabled,
      color = _ref4.color;
  return react_default.a.createElement("div", SliderProps_extends({
    style: {
      position: "absolute",
      transform: "translate(0%, -50%)",
      height: 14,
      zIndex: 1,
      backgroundColor: disabled ? "#999" : color,
      borderRadius: 7,
      cursor: "pointer",
      left: "".concat(source.percent, "%"),
      width: "".concat(target.percent - source.percent, "%")
    }
  }, getTrackProps()));
}
Track.propTypes = {
  source: prop_types_default.a.shape({
    id: prop_types_default.a.string.isRequired,
    value: prop_types_default.a.number.isRequired,
    percent: prop_types_default.a.number.isRequired
  }).isRequired,
  target: prop_types_default.a.shape({
    id: prop_types_default.a.string.isRequired,
    value: prop_types_default.a.number.isRequired,
    percent: prop_types_default.a.number.isRequired
  }).isRequired,
  getTrackProps: prop_types_default.a.func.isRequired,
  disabled: prop_types_default.a.bool
};
Track.defaultProps = {
  disabled: false
}; // *******************************************************
// TICK COMPONENT
// *******************************************************

function Tick(_ref5) {
  var tick = _ref5.tick,
      count = _ref5.count,
      format = _ref5.format,
      prefix = _ref5.prefix,
      suffix = _ref5.suffix,
      name = _ref5.name;
  return react_default.a.createElement("div", null, react_default.a.createElement("div", {
    style: {
      position: "absolute",
      marginTop: 14,
      width: 1,
      height: 5,
      backgroundColor: "rgb(200,200,200)",
      left: "".concat(tick.percent, "%")
    }
  }), react_default.a.createElement("div", {
    style: {
      position: "absolute",
      marginTop: 22,
      fontSize: 10,
      textAlign: "center",
      marginLeft: "".concat(-(100 / count) / 2, "%"),
      width: "".concat(100 / count, "%"),
      left: "".concat(tick.percent, "%")
    }
  }, !name ? format("".concat(prefix).concat(tick.value).concat(suffix)) : name));
}
Tick.propTypes = {
  tick: prop_types_default.a.shape({
    id: prop_types_default.a.string.isRequired,
    value: prop_types_default.a.number.isRequired,
    percent: prop_types_default.a.number.isRequired
  }).isRequired,
  count: prop_types_default.a.number.isRequired,
  format: prop_types_default.a.func.isRequired
};
Tick.defaultProps = {
  format: function format(d) {
    return d;
  },
  prefix: "",
  suffix: ""
};
// CONCATENATED MODULE: ./frontend/src/core/components/ui/slider/DeviationSlider.js
function DeviationSlider_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DeviationSlider_typeof = function _typeof(obj) { return typeof obj; }; } else { DeviationSlider_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DeviationSlider_typeof(obj); }

function DeviationSlider_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DeviationSlider_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DeviationSlider_createClass(Constructor, protoProps, staticProps) { if (protoProps) DeviationSlider_defineProperties(Constructor.prototype, protoProps); if (staticProps) DeviationSlider_defineProperties(Constructor, staticProps); return Constructor; }

function DeviationSlider_possibleConstructorReturn(self, call) { if (call && (DeviationSlider_typeof(call) === "object" || typeof call === "function")) { return call; } return DeviationSlider_assertThisInitialized(self); }

function DeviationSlider_getPrototypeOf(o) { DeviationSlider_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DeviationSlider_getPrototypeOf(o); }

function DeviationSlider_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DeviationSlider_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DeviationSlider_setPrototypeOf(subClass, superClass); }

function DeviationSlider_setPrototypeOf(o, p) { DeviationSlider_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DeviationSlider_setPrototypeOf(o, p); }



 // example render components - source below

var sliderStyle = {
  position: "relative",
  width: "100%"
};
var DeviationSlider_domain = [0, 100];
var defaultValues = [0, 25, 75, 100];

var DeviationSlider_Example =
/*#__PURE__*/
function (_Component) {
  DeviationSlider_inherits(Example, _Component);

  function Example(props) {
    var _this;

    DeviationSlider_classCallCheck(this, Example);

    _this = DeviationSlider_possibleConstructorReturn(this, DeviationSlider_getPrototypeOf(Example).call(this, props));

    DeviationSlider_initialiseProps.call(DeviationSlider_assertThisInitialized(_this));

    var _this$props = _this.props,
        danger_deviation = _this$props.danger_deviation,
        safe_deviation = _this$props.safe_deviation;
    var values = [0, danger_deviation, safe_deviation, 100];
    _this.state = {
      values: values.slice(),
      update: values.slice()
    };
    return _this;
  }

  DeviationSlider_createClass(Example, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          values = _this$state.values,
          update = _this$state.update;
      return react_default.a.createElement("div", {
        className: "mt-5",
        style: {
          height: 70,
          width: "95%"
        }
      }, react_default.a.createElement(react_compound_slider_es["Slider"], {
        mode: 1,
        step: 1,
        domain: DeviationSlider_domain,
        rootStyle: sliderStyle,
        onUpdate: this.onUpdate,
        onChange: this.onChange,
        values: values
      }, react_default.a.createElement(react_compound_slider_es["Rail"], null, function (_ref) {
        var getRailProps = _ref.getRailProps;
        var props = getRailProps();

        props.onMouseDown = function () {};

        props.onTouchStart = function () {};

        return react_default.a.createElement(SliderRail, {
          getRailProps: function getRailProps() {
            props;
          },
          color: "#218838"
        });
      }), react_default.a.createElement(react_compound_slider_es["Handles"], null, function (_ref2) {
        var handles = _ref2.handles,
            getHandleProps = _ref2.getHandleProps;
        return react_default.a.createElement("div", {
          className: "slider-handles"
        }, handles.map(function (handle, i, arr) {
          if (i === 0) return react_default.a.createElement(Handle, {
            key: handle.id,
            handle: handle,
            domain: DeviationSlider_domain,
            getHandleProps: function getHandleProps() {},
            disabled: true
          });
          if (i + 1 === arr.length) return react_default.a.createElement(Handle, {
            key: handle.id,
            handle: handle,
            domain: DeviationSlider_domain,
            getHandleProps: function getHandleProps() {},
            disabled: true,
            noDisplay: true
          });
          return react_default.a.createElement(Handle, {
            key: handle.id,
            handle: handle,
            domain: DeviationSlider_domain,
            getHandleProps: getHandleProps
          });
        }));
      }), react_default.a.createElement(react_compound_slider_es["Tracks"], {
        left: false,
        right: false
      }, function (_ref3) {
        var tracks = _ref3.tracks,
            getTrackProps = _ref3.getTrackProps;
        return react_default.a.createElement("div", {
          className: "slider-tracks"
        }, tracks.map(function (_ref4, i, arr) {
          var id = _ref4.id,
              source = _ref4.source,
              target = _ref4.target;
          if (i === 0) return react_default.a.createElement(Track, {
            key: id,
            source: source,
            target: target,
            getTrackProps: function getTrackProps() {},
            color: "#218838"
          });
          if (i + 1 === arr.length) return react_default.a.createElement(Track, {
            key: id,
            source: source,
            target: target,
            getTrackProps: function getTrackProps() {},
            color: "#ff0000"
          });
          return react_default.a.createElement(Track, {
            key: id,
            source: source,
            target: target,
            getTrackProps: function getTrackProps() {},
            color: "#b28900"
          });
        }));
      }), react_default.a.createElement(react_compound_slider_es["Ticks"], {
        count: 5
      }, function (_ref5) {
        var ticks = _ref5.ticks;
        return react_default.a.createElement("div", {
          className: "slider-ticks"
        }, ticks.map(function (tick, i, arr) {
          if (i === 0) return react_default.a.createElement(Tick, {
            key: tick.id,
            tick: tick,
            count: ticks.length,
            name: "Target"
          });
          return react_default.a.createElement(Tick, {
            key: tick.id,
            tick: tick,
            count: ticks.length,
            prefix: "+/-",
            suffix: "%"
          });
        }));
      })));
    }
  }]);

  return Example;
}(react["Component"]);

var DeviationSlider_initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onUpdate = function (update) {
    var onUpdate = _this2.props.onUpdate;
    onUpdate(update);
  };

  this.onChange = function (values) {
    _this2.setState({
      values: values
    });
  };
};

/* harmony default export */ var DeviationSlider = (DeviationSlider_Example);
// CONCATENATED MODULE: ./frontend/src/core/components/ui/slider/ThresholdSlider.js
function ThresholdSlider_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ThresholdSlider_typeof = function _typeof(obj) { return typeof obj; }; } else { ThresholdSlider_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ThresholdSlider_typeof(obj); }

function ThresholdSlider_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ThresholdSlider_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ThresholdSlider_createClass(Constructor, protoProps, staticProps) { if (protoProps) ThresholdSlider_defineProperties(Constructor.prototype, protoProps); if (staticProps) ThresholdSlider_defineProperties(Constructor, staticProps); return Constructor; }

function ThresholdSlider_possibleConstructorReturn(self, call) { if (call && (ThresholdSlider_typeof(call) === "object" || typeof call === "function")) { return call; } return ThresholdSlider_assertThisInitialized(self); }

function ThresholdSlider_getPrototypeOf(o) { ThresholdSlider_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ThresholdSlider_getPrototypeOf(o); }

function ThresholdSlider_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ThresholdSlider_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ThresholdSlider_setPrototypeOf(subClass, superClass); }

function ThresholdSlider_setPrototypeOf(o, p) { ThresholdSlider_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ThresholdSlider_setPrototypeOf(o, p); }



 // example render components - source below


var ThresholdSlider_sliderStyle = {
  position: "relative",
  width: "100%"
};
var ThresholdSlider_domain = [-100, 100];

var ThresholdSlider_Example =
/*#__PURE__*/
function (_Component) {
  ThresholdSlider_inherits(Example, _Component);

  function Example(props) {
    var _this;

    ThresholdSlider_classCallCheck(this, Example);

    _this = ThresholdSlider_possibleConstructorReturn(this, ThresholdSlider_getPrototypeOf(Example).call(this, props));

    ThresholdSlider_initialiseProps.call(ThresholdSlider_assertThisInitialized(_this));

    var values = _this.getValues();

    _this.state = {
      values: values,
      update: values
    };
    return _this;
  }

  ThresholdSlider_createClass(Example, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          target = _this$props.target,
          threshold_type = _this$props.threshold_type;

      if (prevProps.target !== target || prevProps.threshold_type !== threshold_type) {
        var _this$props2 = this.props,
            _target = _this$props2.target,
            warning_margin = _this$props2.warning_margin,
            _threshold_type = _this$props2.threshold_type;
        var values = [0, 0];
        var newTarget = parseInt(_target);

        if (!_target) {
          values = _threshold_type === THRESHOLD_TYPE_GREATER ? [-75, 0, 100].slice() : [0, 75, 100].slice();
        } else {
          values = _threshold_type === THRESHOLD_TYPE_GREATER ? [Math.round(newTarget - newTarget * 0.5), newTarget, newTarget * 2] : [newTarget, Math.round(newTarget * 1.5), newTarget * 2];
        }

        console.log(values);
        this.setState({
          values: values.slice(),
          update: values.slice()
        });
        this.onUpdate(values);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          values = _this$state.values,
          update = _this$state.update;
      var _this$props3 = this.props,
          threshold_type = _this$props3.threshold_type,
          target = _this$props3.target,
          domain = _this$props3.domain;
      return react_default.a.createElement("div", {
        className: "mt-5",
        style: {
          height: 70,
          width: "95%"
        }
      }, react_default.a.createElement(react_compound_slider_es["Slider"], {
        mode: 2,
        step: 1,
        domain: domain,
        rootStyle: ThresholdSlider_sliderStyle,
        onUpdate: this.onUpdate,
        onChange: this.onChange,
        values: values
      }, react_default.a.createElement(react_compound_slider_es["Rail"], null, function (_ref) {
        var getRailProps = _ref.getRailProps;
        var props = getRailProps();

        props.onMouseDown = function () {};

        props.onTouchStart = function () {};

        return react_default.a.createElement(SliderRail, {
          getRailProps: function getRailProps() {
            props;
          },
          color: threshold_type === THRESHOLD_TYPE_GREATER ? "#ff0000" : "#218838"
        });
      }), react_default.a.createElement(react_compound_slider_es["Handles"], null, function (_ref2) {
        var handles = _ref2.handles,
            getHandleProps = _ref2.getHandleProps;
        return react_default.a.createElement("div", {
          className: "slider-handles"
        }, handles.map(function (handle, i, arr) {
          if (i === (threshold_type === THRESHOLD_TYPE_GREATER ? 1 : 0)) return react_default.a.createElement(Handle, {
            key: handle.id,
            handle: handle,
            domain: domain,
            getHandleProps: function getHandleProps() {},
            disabled: true
          });
          if (i + 1 == arr.length) return react_default.a.createElement(Handle, {
            key: handle.id,
            handle: handle,
            domain: domain,
            getHandleProps: function getHandleProps() {},
            disabled: true,
            noDisplay: true
          });
          return react_default.a.createElement(Handle, {
            key: handle.id,
            handle: handle,
            domain: domain,
            getHandleProps: getHandleProps
          });
        }));
      }), react_default.a.createElement(react_compound_slider_es["Tracks"], {
        left: false,
        right: false
      }, function (_ref3) {
        var tracks = _ref3.tracks,
            getTrackProps = _ref3.getTrackProps;
        return react_default.a.createElement("div", {
          className: "slider-tracks"
        }, tracks.map(function (_ref4, i, arr) {
          var id = _ref4.id,
              source = _ref4.source,
              target = _ref4.target;
          if (i + 1 === arr.length) return react_default.a.createElement(Track, {
            key: id,
            source: source,
            target: target,
            getTrackProps: function getTrackProps() {},
            color: threshold_type === THRESHOLD_TYPE_GREATER ? "#218838" : "#ff0000"
          });
          return react_default.a.createElement(Track, {
            key: id,
            source: source,
            target: target,
            getTrackProps: function getTrackProps() {},
            color: "#b28900"
          });
        }));
      }), react_default.a.createElement(react_compound_slider_es["Ticks"], {
        count: 5
      }, function (_ref5) {
        var ticks = _ref5.ticks;
        return react_default.a.createElement("div", {
          className: "slider-ticks"
        }, ticks.map(function (tick, i, arr) {
          if (i === Math.floor(arr.length / 2)) return react_default.a.createElement(Tick, {
            key: tick.id,
            tick: tick,
            count: ticks.length,
            suffix: target ? "" : "%",
            name: target ? null : "Target"
          });
          if (i > Math.floor(arr.length / 2)) return react_default.a.createElement(Tick, {
            key: tick.id,
            tick: tick,
            count: ticks.length,
            suffix: target ? "" : "%",
            prefix: "+"
          });
          return react_default.a.createElement(Tick, {
            key: tick.id,
            tick: tick,
            count: ticks.length,
            suffix: target ? "" : "%"
          });
        }));
      })));
    }
  }]);

  return Example;
}(react["Component"]);

var ThresholdSlider_initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getValues = function () {
    var _this2$props = _this2.props,
        target = _this2$props.target,
        warning_margin = _this2$props.warning_margin,
        threshold_type = _this2$props.threshold_type;
    var values = [0, 0];
    var newTarget = parseInt(target);

    if (!target) {
      values = threshold_type === THRESHOLD_TYPE_GREATER ? [warning_margin, 0, 100].slice() : [0, warning_margin, 100].slice();
    } else {
      values = threshold_type === THRESHOLD_TYPE_GREATER ? [warning_margin || Math.round(newTarget - newTarget * 0.5), newTarget, newTarget * 2] : [newTarget, warning_margin || Math.round(newTarget * 1.5), newTarget * 2];
    }

    return values;
  };

  this.onUpdate = function (update) {
    var onUpdate = _this2.props.onUpdate;
    onUpdate(update);
  };

  this.onChange = function (values) {
    _this2.setState({
      values: values
    });
  };
};

/* harmony default export */ var ThresholdSlider = (ThresholdSlider_Example);
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/kpis/KpiForm.js
function KpiForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { KpiForm_typeof = function _typeof(obj) { return typeof obj; }; } else { KpiForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return KpiForm_typeof(obj); }

function KpiForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function KpiForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function KpiForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) KpiForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) KpiForm_defineProperties(Constructor, staticProps); return Constructor; }

function KpiForm_possibleConstructorReturn(self, call) { if (call && (KpiForm_typeof(call) === "object" || typeof call === "function")) { return call; } return KpiForm_assertThisInitialized(self); }

function KpiForm_getPrototypeOf(o) { KpiForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return KpiForm_getPrototypeOf(o); }

function KpiForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function KpiForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) KpiForm_setPrototypeOf(subClass, superClass); }

function KpiForm_setPrototypeOf(o, p) { KpiForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return KpiForm_setPrototypeOf(o, p); }

// DEPENDANCIES

 // CORE COMPONENTS


 // CONFIG




var KpiForm_KpiForm =
/*#__PURE__*/
function (_Component) {
  KpiForm_inherits(KpiForm, _Component);

  function KpiForm(props) {
    var _this;

    KpiForm_classCallCheck(this, KpiForm);

    _this = KpiForm_possibleConstructorReturn(this, KpiForm_getPrototypeOf(KpiForm).call(this, props));

    _this.onSliderUpdate = function (update) {
      var onChange = _this.props.onChange;
      onChange({
        target: {
          name: "safe_deviation",
          value: update[1]
        }
      });
      onChange({
        target: {
          name: "danger_deviation",
          value: update[2]
        }
      });
    };

    _this.onThresholdSliderUpdate = function (update) {
      var threshold_type = _this.props.values.threshold_type;
      var onChange = _this.props.onChange;
      onChange({
        target: {
          name: "warning_margin",
          value: threshold_type === THRESHOLD_TYPE_GREATER ? update[0] : update[1]
        }
      });
    };

    _this.onKpiTypeChange = function (e) {
      var onChange = _this.props.onChange;
      var _this$props$values = _this.props.values,
          kpi_type = _this$props$values.kpi_type,
          safe_deviation = _this$props$values.safe_deviation,
          warning_margin = _this$props$values.warning_margin,
          danger_deviation = _this$props$values.danger_deviation;
      if (kpi_type === 0) _this.updateSlider([0, safe_deviation, danger_deviation, 100]);else if (kpi_type === 1) _this.updateSlider([0, warning_margin, 100]);
      onChange(e);
    };

    _this.onGlobalTargetChange = function (e) {
      var onChange = _this.props.onChange;
      var target = e.target.value;
      if (isNaN(target)) return;else onChange(e);
    };

    _this.onThresholdTypeChange = function (e) {
      var onChange = _this.props.onChange;

      if (e.target.id === "greater" && e.target.checked) {
        _this.updateSlider([-50, 0, 100]);

        onChange({
          target: {
            name: "threshold_type",
            value: 0
          }
        });
        onChange({
          target: {
            name: "warning_margin",
            value: -50
          }
        });
      }

      if (e.target.id === "less" && e.target.checked) {
        _this.updateSlider([0, 50, 100]);

        onChange({
          target: {
            name: "threshold_type",
            value: 1
          }
        });
        onChange({
          target: {
            name: "warning_margin",
            value: 50
          }
        });
      }
    };

    _this.onSliderUpdate = _this.onSliderUpdate.bind(KpiForm_assertThisInitialized(_this));
    _this.slider = react_default.a.createRef();
    return _this;
  }

  KpiForm_createClass(KpiForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$values2 = this.props.values,
          danger_deviation = _this$props$values2.danger_deviation,
          safe_deviation = _this$props$values2.safe_deviation,
          kpi_type = _this$props$values2.kpi_type,
          warning_margin = _this$props$values2.warning_margin;
      if (kpi_type === 0) this.updateSlider([0, safe_deviation, danger_deviation, 100]);else if (kpi_type === 1) this.updateSlider([0, warning_margin, 100]);
    }
  }, {
    key: "updateSlider",
    value: function updateSlider(values) {
      if (this.slider.current) this.slider.current.onChange(values);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          pillar = _this$props.pillar,
          editFrequency = _this$props.editFrequency;
      var _this$props$values3 = this.props.values,
          name = _this$props$values3.name,
          frequency = _this$props$values3.frequency,
          safe_deviation = _this$props$values3.safe_deviation,
          danger_deviation = _this$props$values3.danger_deviation,
          kpi_type = _this$props$values3.kpi_type,
          warning_margin = _this$props$values3.warning_margin,
          threshold_type = _this$props$values3.threshold_type,
          global_target = _this$props$values3.global_target,
          leader = _this$props$values3.leader,
          unit = _this$props$values3.unit;
      var sliders = [react_default.a.createElement("div", {
        className: "row justify-content-center"
      }, react_default.a.createElement("div", {
        className: "col-sm-11"
      }, react_default.a.createElement(DeviationSlider, {
        disabledRail: true,
        onUpdate: this.onSliderUpdate,
        ref: this.slider,
        danger_deviation: danger_deviation,
        safe_deviation: safe_deviation
      })), react_default.a.createElement("div", {
        className: "col-sm-4"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "safe"
      }, "Safe Limit"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "safe_deviation",
        placeholder: "...",
        value: "".concat(safe_deviation, "%"),
        disabled: true
      }))), react_default.a.createElement("div", {
        className: "col-sm-4"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "danger"
      }, "Danger Limit"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "danger_deviation",
        placeholder: "...",
        value: "".concat(danger_deviation, "%"),
        disabled: true
      })))), react_default.a.createElement("div", {
        className: "row justify-content-center"
      }, react_default.a.createElement("div", {
        className: "col-sm-6 mt-3"
      }, react_default.a.createElement("div", {
        className: "form-check"
      }, react_default.a.createElement("input", {
        type: "radio",
        name: "threshold_type",
        className: "form-check-input",
        id: "greater",
        onChange: this.onThresholdTypeChange,
        checked: threshold_type ? false : true
      }), react_default.a.createElement("label", {
        htmlFor: "threshold_type",
        className: "form-check-label mb-3"
      }, "Greater Than")), react_default.a.createElement("div", {
        className: "form-check"
      }, react_default.a.createElement("input", {
        type: "radio",
        name: "threshold_type",
        className: "form-check-input",
        id: "less",
        onChange: this.onThresholdTypeChange,
        checked: threshold_type ? true : false
      }), react_default.a.createElement("label", {
        htmlFor: "threshold_type",
        className: "form-check-label mb-3"
      }, "Less Than"))), react_default.a.createElement("div", {
        className: "col-sm-6 mt-3"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "global_target"
      }, "Target"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "global_target",
        onChange: this.onGlobalTargetChange,
        placeholder: "...",
        value: global_target || "",
        required: true
      })))), react_default.a.createElement("div", {
        className: "row justify-content-center"
      }, react_default.a.createElement("div", {
        className: "col-sm-11"
      }, react_default.a.createElement(ThresholdSlider, {
        threshold_type: threshold_type,
        disabledRail: true,
        onUpdate: this.onThresholdSliderUpdate,
        ref: this.slider,
        warning_margin: warning_margin,
        target: global_target,
        domain: threshold_type === THRESHOLD_TYPE_GREATER ? [global_target ? 0 : -100, global_target ? parseInt(global_target) * 1.5 : 100] : [parseInt(global_target) - parseInt(global_target) * 0.5 || -100, global_target ? parseInt(global_target) * 2 : 100]
      })), react_default.a.createElement("div", {
        className: "col-sm-2"
      }, react_default.a.createElement("div", {
        className: "form-check"
      }, react_default.a.createElement("input", {
        type: "radio",
        name: "threshold_type",
        className: "form-check-input",
        id: "greater",
        onChange: this.onThresholdTypeChange,
        checked: threshold_type ? false : true
      }), react_default.a.createElement("label", {
        htmlFor: "threshold_type",
        className: "form-check-label mb-3"
      }, "Greater Than")), react_default.a.createElement("div", {
        className: "form-check"
      }, react_default.a.createElement("input", {
        type: "radio",
        name: "threshold_type",
        className: "form-check-input",
        id: "less",
        onChange: this.onThresholdTypeChange,
        checked: threshold_type ? true : false
      }), react_default.a.createElement("label", {
        htmlFor: "threshold_type",
        className: "form-check-label mb-3"
      }, "Less Than"))), react_default.a.createElement("div", {
        className: "col-sm-4"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "global_target"
      }, "Target"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "global_target",
        onChange: this.onGlobalTargetChange,
        placeholder: "...",
        value: global_target || ""
      }))), react_default.a.createElement("div", {
        className: "col-sm-4"
      }, react_default.a.createElement("label", {
        htmlFor: "warning_margin"
      }, "Warning Limit"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "warning_margin",
        placeholder: "...",
        value: "".concat(warning_margin).concat(global_target ? "" : "%"),
        disabled: true
      })))];
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
        className: "row"
      }, react_default.a.createElement("div", {
        className: "col-sm-6"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "name"
      }, "Name"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "name",
        onChange: onChange,
        placeholder: "...",
        value: name,
        required: true
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "kpi_type"
      }, "Type"), react_default.a.createElement("select", {
        className: "form-control",
        type: "text",
        name: "kpi_type",
        onChange: this.onKpiTypeChange,
        placeholder: "...",
        value: kpi_type,
        required: true
      }, KPI_TYPE_CHOICES.map(function (choice) {
        return react_default.a.createElement("option", {
          key: "choice-".concat(choice.id),
          value: choice.id
        }, choice.name);
      }))), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "frequency"
      }, "Frequency"), react_default.a.createElement("select", {
        className: "form-control",
        type: "text",
        name: "frequency",
        onChange: onChange,
        placeholder: "...",
        value: frequency,
        required: true,
        disabled: !editFrequency
      }, FREQUENCY_CHOICES.map(function (choice) {
        return react_default.a.createElement("option", {
          key: "choice-".concat(choice.id),
          value: choice.id
        }, choice.name);
      })))), react_default.a.createElement("div", {
        className: "col-sm-6"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "leader"
      }, "Leader"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "leader",
        onChange: onChange,
        placeholder: "...",
        value: leader,
        required: true
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "unit"
      }, "Unit"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "unit",
        onChange: onChange,
        placeholder: "...",
        value: unit || ""
      })))), sliders[kpi_type]);
    }
  }]);

  return KpiForm;
}(react["Component"]);

KpiForm_KpiForm.propTypes = {
  onChange: prop_types_default.a.func.isRequired
};
/* harmony default export */ var kpis_KpiForm = (KpiForm_KpiForm);
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/kpis/KpiEdit.js
function KpiEdit_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { KpiEdit_typeof = function _typeof(obj) { return typeof obj; }; } else { KpiEdit_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return KpiEdit_typeof(obj); }

function KpiEdit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { KpiEdit_defineProperty(target, key, source[key]); }); } return target; }

function KpiEdit_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function KpiEdit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function KpiEdit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function KpiEdit_createClass(Constructor, protoProps, staticProps) { if (protoProps) KpiEdit_defineProperties(Constructor.prototype, protoProps); if (staticProps) KpiEdit_defineProperties(Constructor, staticProps); return Constructor; }

function KpiEdit_possibleConstructorReturn(self, call) { if (call && (KpiEdit_typeof(call) === "object" || typeof call === "function")) { return call; } return KpiEdit_assertThisInitialized(self); }

function KpiEdit_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function KpiEdit_getPrototypeOf(o) { KpiEdit_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return KpiEdit_getPrototypeOf(o); }

function KpiEdit_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) KpiEdit_setPrototypeOf(subClass, superClass); }

function KpiEdit_setPrototypeOf(o, p) { KpiEdit_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return KpiEdit_setPrototypeOf(o, p); }

// DEPENDANCIES


 // NATIVE COMPONENTS

 // ACTIONS



var KpiEdit_KpiEdit =
/*#__PURE__*/
function (_Component) {
  KpiEdit_inherits(KpiEdit, _Component);

  function KpiEdit(props) {
    var _this;

    KpiEdit_classCallCheck(this, KpiEdit);

    _this = KpiEdit_possibleConstructorReturn(this, KpiEdit_getPrototypeOf(KpiEdit).call(this, props));

    _this.update = function (kpi) {
      _this.setState(KpiEdit_objectSpread({}, kpi));
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          updateKpi = _this$props.updateKpi,
          kpi = _this$props.kpi;
      var _this$state = _this.state,
          name = _this$state.name,
          frequency = _this$state.frequency,
          safe_deviation = _this$state.safe_deviation,
          danger_deviation = _this$state.danger_deviation,
          warning_margin = _this$state.warning_margin,
          dashboard = _this$state.dashboard,
          kpi_type = _this$state.kpi_type,
          threshold_type = _this$state.threshold_type,
          leader = _this$state.leader,
          unit = _this$state.unit;
      var global_target = _this.state.global_target || null;
      var isPercentage = global_target ? false : true;
      var k = {
        name: name,
        danger_deviation: danger_deviation,
        safe_deviation: safe_deviation,
        warning_margin: warning_margin,
        frequency: frequency,
        dashboard: dashboard,
        kpi_type: kpi_type,
        threshold_type: threshold_type,
        global_target: global_target,
        leader: leader,
        unit: unit,
        isPercentage: isPercentage
      };
      updateKpi(k, kpi.id);
    };

    _this.onChange = function (e) {
      _this.setState(KpiEdit_defineProperty({}, e.target.name, e.target.value));
    };

    if (props.kpi) _this.state = KpiEdit_objectSpread({}, props.kpi);else _this.state = {
      name: "",
      danger_deviation: "",
      safe_deviation: "",
      warning_margin: 0.5,
      frequency: "",
      kpi_type: 0,
      global_target: "",
      threshold_type: 0,
      leader: "",
      unit: ""
    };
    return _this;
  }

  KpiEdit_createClass(KpiEdit, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var kpi = this.props.kpi;

      if (kpi != prevProps.kpi) {
        this.update(kpi);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var kpi = this.props.kpi;
      return react_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        className: "w-100 mt-3"
      }, react_default.a.createElement(kpis_KpiForm, {
        onChange: this.onChange,
        pillar: kpi.pillar,
        values: this.state
      }), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-success mb-4 mt-3"
      }, "Save Changes"));
    }
  }]);

  return KpiEdit;
}(react["Component"]);

KpiEdit_KpiEdit.propTypes = {
  updateKpi: prop_types_default.a.func.isRequired
};
/* harmony default export */ var kpis_KpiEdit = (Object(es["connect"])(null, {
  updateKpi: dashboards_updateKpi
})(KpiEdit_KpiEdit));
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/kpis/KpiView.js
function KpiView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { KpiView_typeof = function _typeof(obj) { return typeof obj; }; } else { KpiView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return KpiView_typeof(obj); }

function KpiView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function KpiView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function KpiView_createClass(Constructor, protoProps, staticProps) { if (protoProps) KpiView_defineProperties(Constructor.prototype, protoProps); if (staticProps) KpiView_defineProperties(Constructor, staticProps); return Constructor; }

function KpiView_possibleConstructorReturn(self, call) { if (call && (KpiView_typeof(call) === "object" || typeof call === "function")) { return call; } return KpiView_assertThisInitialized(self); }

function KpiView_getPrototypeOf(o) { KpiView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return KpiView_getPrototypeOf(o); }

function KpiView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function KpiView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) KpiView_setPrototypeOf(subClass, superClass); }

function KpiView_setPrototypeOf(o, p) { KpiView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return KpiView_setPrototypeOf(o, p); }




 // ACTIONS



var KpiView_KpiView =
/*#__PURE__*/
function (_Component) {
  KpiView_inherits(KpiView, _Component);

  function KpiView(props) {
    var _this;

    KpiView_classCallCheck(this, KpiView);

    _this = KpiView_possibleConstructorReturn(this, KpiView_getPrototypeOf(KpiView).call(this, props));

    _this.onRemove = function () {
      $("#removeConfirmation").modal("show");
    };

    _this.onSubmitRemove = function (state) {
      var _this$props = _this.props,
          kpi = _this$props.kpi,
          deleteKpi = _this$props.deleteKpi;

      if (state.name === kpi.name) {
        deleteKpi(kpi.id);
        return true;
      } else return false;
    };

    _this.onSubmitRemove = _this.onSubmitRemove.bind(KpiView_assertThisInitialized(_this));
    return _this;
  }

  KpiView_createClass(KpiView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          setRemove = _this$props2.setRemove,
          kpi = _this$props2.kpi;
      setRemove({
        type: "kpi",
        item: kpi,
        onSubmit: this.onSubmitRemove
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          kpi = _this$props3.kpi,
          setRemove = _this$props3.setRemove;
      if (prevProps.kpi !== kpi) ;
      setRemove({
        type: "kpi",
        item: kpi,
        onSubmit: this.onSubmitRemove
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          kpi = _this$props4.kpi,
          onSeriesSelect = _this$props4.onSeriesSelect;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h3", {
        className: "mt-4"
      }, "Series"), react_default.a.createElement(series_SeriesList, {
        kpiId: kpi.id,
        onClick: onSeriesSelect,
        series: kpi.series
      }), react_default.a.createElement("h3", null, "Properties"), react_default.a.createElement("div", {
        className: "d-flex"
      }, react_default.a.createElement(kpis_KpiEdit, {
        kpi: kpi
      })), react_default.a.createElement("hr", null), react_default.a.createElement("div", {
        className: "d-flex justify-content-end"
      }, react_default.a.createElement("button", {
        className: "btn btn-danger",
        onClick: this.onRemove
      }, "Delete Kpi")));
    }
  }]);

  return KpiView;
}(react["Component"]);

/* harmony default export */ var kpis_KpiView = (Object(es["connect"])(null, {
  deleteKpi: dashboards_deleteKpi
})(KpiView_KpiView));
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/MenuView.js
function MenuView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MenuView_typeof = function _typeof(obj) { return typeof obj; }; } else { MenuView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MenuView_typeof(obj); }

function MenuView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MenuView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MenuView_createClass(Constructor, protoProps, staticProps) { if (protoProps) MenuView_defineProperties(Constructor.prototype, protoProps); if (staticProps) MenuView_defineProperties(Constructor, staticProps); return Constructor; }

function MenuView_possibleConstructorReturn(self, call) { if (call && (MenuView_typeof(call) === "object" || typeof call === "function")) { return call; } return MenuView_assertThisInitialized(self); }

function MenuView_getPrototypeOf(o) { MenuView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MenuView_getPrototypeOf(o); }

function MenuView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MenuView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MenuView_setPrototypeOf(subClass, superClass); }

function MenuView_setPrototypeOf(o, p) { MenuView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MenuView_setPrototypeOf(o, p); }

// DEPENDANCIES

 // CORE COMPONENTS

 // NATIVE COMPONENTS



var KPI_VIEW = 0;
var SERIES_VIEW = 1;

var MenuView_MenuView =
/*#__PURE__*/
function (_Component) {
  MenuView_inherits(MenuView, _Component);

  function MenuView(props) {
    var _this;

    MenuView_classCallCheck(this, MenuView);

    _this = MenuView_possibleConstructorReturn(this, MenuView_getPrototypeOf(MenuView).call(this, props));

    _this.onSeriesSelect = function (id) {
      _this.setState({
        selectedSeries: id
      });

      _this.setViewState(SERIES_VIEW);
    };

    _this.setViewState = function (view) {
      _this.setState({
        view: view
      });
    };

    _this.onSeriesBack = function () {
      _this.setState({
        view: KPI_VIEW
      });
    };

    _this.setRemove = function (removeItem) {
      var setRemove = _this.props.setRemove;
      setRemove(removeItem);
    };

    _this.state = {
      selectedSeries: null,
      view: 0
    };
    _this.onSeriesSelect = _this.onSeriesSelect.bind(MenuView_assertThisInitialized(_this));
    _this.setViewState = _this.setViewState.bind(MenuView_assertThisInitialized(_this));
    _this.onSeriesBack = _this.onSeriesBack.bind(MenuView_assertThisInitialized(_this));
    _this.setRemove = _this.setRemove.bind(MenuView_assertThisInitialized(_this));
    return _this;
  }

  MenuView_createClass(MenuView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          kpi = _this$props.kpi,
          changeMenu = _this$props.changeMenu,
          resetKpiSelect = _this$props.resetKpiSelect;

      if (!kpi) {
        changeMenu(false);
        resetKpiSelect();
        return;
      }

      if (prevProps.kpi.id !== kpi.id || prevProps.kpi.series.length !== kpi.series.length) {
        this.setState({
          view: KPI_VIEW
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          kpi = _this$props2.kpi,
          changeMenu = _this$props2.changeMenu;

      if (!kpi) {
        changeMenu(false);
        return react_default.a.createElement("div", null);
      }

      var _this$state = this.state,
          selectedSeries = _this$state.selectedSeries,
          view = _this$state.view;
      var series = getItem(selectedSeries, kpi.series, "id");

      switch (view) {
        case KPI_VIEW:
          return react_default.a.createElement(kpis_KpiView, {
            kpi: kpi,
            onSeriesSelect: this.onSeriesSelect,
            setRemove: this.setRemove
          });

        case SERIES_VIEW:
          return react_default.a.createElement(series_SeriesView, {
            series: series,
            onBack: this.onSeriesBack,
            setRemove: this.setRemove
          });

        default:
          return "404";
      }
    }
  }]);

  return MenuView;
}(react["Component"]);

/* harmony default export */ var components_MenuView = (MenuView_MenuView);
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/kpis/KpiNew.js
function KpiNew_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { KpiNew_typeof = function _typeof(obj) { return typeof obj; }; } else { KpiNew_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return KpiNew_typeof(obj); }

function KpiNew_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { KpiNew_defineProperty(target, key, source[key]); }); } return target; }

function KpiNew_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function KpiNew_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function KpiNew_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function KpiNew_createClass(Constructor, protoProps, staticProps) { if (protoProps) KpiNew_defineProperties(Constructor.prototype, protoProps); if (staticProps) KpiNew_defineProperties(Constructor, staticProps); return Constructor; }

function KpiNew_possibleConstructorReturn(self, call) { if (call && (KpiNew_typeof(call) === "object" || typeof call === "function")) { return call; } return KpiNew_assertThisInitialized(self); }

function KpiNew_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function KpiNew_getPrototypeOf(o) { KpiNew_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return KpiNew_getPrototypeOf(o); }

function KpiNew_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) KpiNew_setPrototypeOf(subClass, superClass); }

function KpiNew_setPrototypeOf(o, p) { KpiNew_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return KpiNew_setPrototypeOf(o, p); }

// DEPENDANCIES



 // ACTIONS



var KpiNew_KpiNew =
/*#__PURE__*/
function (_Component) {
  KpiNew_inherits(KpiNew, _Component);

  function KpiNew(props) {
    var _this;

    KpiNew_classCallCheck(this, KpiNew);

    _this = KpiNew_possibleConstructorReturn(this, KpiNew_getPrototypeOf(KpiNew).call(this, props));

    _this.update = function (kpi) {
      _this.setState(KpiNew_objectSpread({}, kpi));
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          addKpi = _this$props.addKpi,
          pillar = _this$props.pillar,
          dashboard = _this$props.dashboard;
      var _this$state = _this.state,
          name = _this$state.name,
          frequency = _this$state.frequency,
          safe_deviation = _this$state.safe_deviation,
          danger_deviation = _this$state.danger_deviation,
          warning_margin = _this$state.warning_margin,
          kpi_type = _this$state.kpi_type,
          leader = _this$state.leader,
          threshold_type = _this$state.threshold_type;
      var global_target = _this.state.global_target || null;
      var isPercentage = global_target ? false : true;
      var unit = _this.state.unit || null;
      var k = {
        name: name,
        danger_deviation: danger_deviation,
        safe_deviation: safe_deviation,
        frequency: frequency,
        kpi_type: kpi_type,
        warning_margin: warning_margin,
        dashboard: dashboard,
        leader: leader,
        pillar: pillar,
        global_target: global_target,
        threshold_type: threshold_type,
        unit: unit,
        isPercentage: isPercentage
      };
      addKpi(k);

      _this.setState({
        name: "",
        danger_deviation: 75,
        safe_deviation: 25,
        frequency: 0,
        warning_margin: -50,
        kpi_type: 0,
        leader: "",
        global_target: "",
        unit: ""
      });

      $("#newKpi").modal("hide");
    };

    _this.onChange = function (e) {
      _this.setState(KpiNew_defineProperty({}, e.target.name, e.target.value));
    };

    if (props.kpi) _this.state = KpiNew_objectSpread({}, props.kpi);else _this.state = {
      name: "",
      kpi_type: 0,
      danger_deviation: 75,
      safe_deviation: 25,
      warning_margin: -50,
      frequency: 0,
      global_target: "",
      threshold_type: 0,
      leader: "",
      unit: ""
    };
    return _this;
  }

  KpiNew_createClass(KpiNew, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var kpi = this.props.kpi;

      if (kpi != prevProps.kpi) {
        this.update(kpi);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var pillar = this.props.pillar;
      return react_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        className: "w-100 mt-3"
      }, react_default.a.createElement(kpis_KpiForm, {
        onChange: this.onChange,
        values: this.state,
        pillar: pillar,
        editFrequency: true
      }), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-success mb-4 mt-3"
      }, "Create"));
    }
  }]);

  return KpiNew;
}(react["Component"]);

KpiNew_KpiNew.propTypes = {
  addKpi: prop_types_default.a.func.isRequired
};
/* harmony default export */ var kpis_KpiNew = (Object(es["connect"])(null, {
  addKpi: dashboards_addKpi
})(KpiNew_KpiNew));
// CONCATENATED MODULE: ./frontend/src/core/components/ui/RemoveConfirmation.js
function RemoveConfirmation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RemoveConfirmation_typeof = function _typeof(obj) { return typeof obj; }; } else { RemoveConfirmation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RemoveConfirmation_typeof(obj); }

function RemoveConfirmation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function RemoveConfirmation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RemoveConfirmation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RemoveConfirmation_createClass(Constructor, protoProps, staticProps) { if (protoProps) RemoveConfirmation_defineProperties(Constructor.prototype, protoProps); if (staticProps) RemoveConfirmation_defineProperties(Constructor, staticProps); return Constructor; }

function RemoveConfirmation_possibleConstructorReturn(self, call) { if (call && (RemoveConfirmation_typeof(call) === "object" || typeof call === "function")) { return call; } return RemoveConfirmation_assertThisInitialized(self); }

function RemoveConfirmation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RemoveConfirmation_getPrototypeOf(o) { RemoveConfirmation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RemoveConfirmation_getPrototypeOf(o); }

function RemoveConfirmation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RemoveConfirmation_setPrototypeOf(subClass, superClass); }

function RemoveConfirmation_setPrototypeOf(o, p) { RemoveConfirmation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RemoveConfirmation_setPrototypeOf(o, p); }





var RemoveConfirmation_RemoveConformation =
/*#__PURE__*/
function (_Component) {
  RemoveConfirmation_inherits(RemoveConformation, _Component);

  function RemoveConformation(props) {
    var _this;

    RemoveConfirmation_classCallCheck(this, RemoveConformation);

    _this = RemoveConfirmation_possibleConstructorReturn(this, RemoveConfirmation_getPrototypeOf(RemoveConformation).call(this, props));

    _this.onChange = function (e) {
      _this.setState(RemoveConfirmation_defineProperty({}, e.target.name, e.target.value));
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var removeContext = _this.props.removeContext;
      var response = removeContext.onSubmit(_this.state);
      if (response) $("#removeConfirmation").modal("hide");
    };

    _this.modalRef = react_default.a.createRef();
    _this.state = {
      password: "",
      exported: false,
      name: ""
    };
    return _this;
  }

  RemoveConfirmation_createClass(RemoveConformation, [{
    key: "render",
    value: function render() {
      var removeContext = this.props.removeContext;
      if (!removeContext) return react_default.a.createElement(modal_Modal, {
        title: "Are You Sure?",
        iconClass: "im im-data-remove",
        id: "removeConfirmation"
      }, " ");
      var type = removeContext.type,
          item = removeContext.item;
      var _this$state = this.state,
          password = _this$state.password,
          name = _this$state.name,
          exported = _this$state.exported;
      return react_default.a.createElement(modal_Modal, {
        title: "Are You Sure?",
        iconClass: "im im-data-remove",
        id: "removeConfirmation",
        ref: this.modalRef
      }, react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement("p", {
        className: "card-text"
      }, "This action cannot be undone. This will permanently remove the", " ", react_default.a.createElement("span", {
        style: {
          color: "red",
          fontWeight: "bold"
        }
      }, item ? item.name || item.title : "null"), " ", "".concat(type, " and all associated data."), " "), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "name"
      }, "Please type in the name of the ".concat(type, " to confirm")), react_default.a.createElement("input", {
        type: "text",
        name: "name",
        value: name,
        className: "form-control",
        onChange: this.onChange
      })), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-warning"
      }, "I understand the consequences, remove this item")));
    }
  }]);

  return RemoveConformation;
}(react["Component"]);

RemoveConfirmation_RemoveConformation.propTypes = {
  removeContext: prop_types_default.a.object
};
/* harmony default export */ var RemoveConfirmation = (RemoveConfirmation_RemoveConformation);
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/Tooltip.js



var Tooltip_Tooltip = function Tooltip(props) {
  if (!props.show || !props.data) return react_default.a.createElement(react_default.a.Fragment, null);
  var _props$data = props.data,
      kpiName = _props$data.kpiName,
      warning_margin = _props$data.warning_margin,
      target = _props$data.target,
      date = _props$data.date,
      value = _props$data.value,
      kpi_type = _props$data.kpi_type,
      x = _props$data.x,
      y = _props$data.y;

  switch (kpi_type) {
    case KPI_TYPE_THRESHOLD:
      return react_default.a.createElement("div", {
        className: "card qd-tooltip",
        style: {
          left: x + "px",
          top: y + "px",
          display: "block"
        }
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement("h5", {
        style: {
          lineHeight: 0.4
        }
      }, kpiName), react_default.a.createElement("div", {
        className: "card-text",
        style: {
          lineHeight: 0.5
        }
      }, react_default.a.createElement("hr", null), react_default.a.createElement("p", null, "Value: ", value), react_default.a.createElement("p", null, "Target: ", target), react_default.a.createElement("p", null, "Date: ", date, " "), react_default.a.createElement("p", null, "Warning Margin: ", warning_margin, " "))));

    case KPI_TYPE_DEVIATION:
      return react_default.a.createElement("div", {
        className: "card p-2 qd-tooltip",
        style: {
          left: x + "px",
          top: y + "px",
          display: "block"
        }
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement("h5", {
        style: {
          lineHeight: 0.4
        }
      }, kpiName), react_default.a.createElement("div", {
        className: "card-text",
        style: {
          lineHeight: 0.5
        }
      }, react_default.a.createElement("hr", null), react_default.a.createElement("p", null, "Value: ", value), react_default.a.createElement("p", null, "Target: ", target), react_default.a.createElement("p", null, "Date: ", date, " "), react_default.a.createElement("p", null, "Deviation: ", ((value / target - 1) * 100).toFixed(2), "% "))));

    case KPI_TYPE_WIN_LOSE:
      return react_default.a.createElement("div", {
        className: "card p-2 qd-tooltip",
        style: {
          left: x + "px",
          top: y + "px",
          display: "block"
        }
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement("h5", {
        style: {
          lineHeight: 0.4
        }
      }, kpiName), react_default.a.createElement("div", {
        className: "card-text",
        style: {
          lineHeight: 0.5
        }
      }, react_default.a.createElement("hr", null), react_default.a.createElement("p", null, "Value: ", value), react_default.a.createElement("p", null, "Target: ", target), react_default.a.createElement("p", null, "Date: ", date, " "))));
  }
};

/* harmony default export */ var components_Tooltip = (Tooltip_Tooltip);
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/index.js
function pillarRoom_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pillarRoom_typeof = function _typeof(obj) { return typeof obj; }; } else { pillarRoom_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pillarRoom_typeof(obj); }

function pillarRoom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pillarRoom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pillarRoom_createClass(Constructor, protoProps, staticProps) { if (protoProps) pillarRoom_defineProperties(Constructor.prototype, protoProps); if (staticProps) pillarRoom_defineProperties(Constructor, staticProps); return Constructor; }

function pillarRoom_possibleConstructorReturn(self, call) { if (call && (pillarRoom_typeof(call) === "object" || typeof call === "function")) { return call; } return pillarRoom_assertThisInitialized(self); }

function pillarRoom_getPrototypeOf(o) { pillarRoom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pillarRoom_getPrototypeOf(o); }

function pillarRoom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pillarRoom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pillarRoom_setPrototypeOf(subClass, superClass); }

function pillarRoom_setPrototypeOf(o, p) { pillarRoom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pillarRoom_setPrototypeOf(o, p); }

// DEPENDACIES



 // CONFIG

 // CORE COMPONENTS






 // ACTIONS

 // NATIVE COMPONENTS







var pillarRoom_pillarRoom =
/*#__PURE__*/
function (_Component) {
  pillarRoom_inherits(pillarRoom, _Component);

  function pillarRoom(props) {
    var _this;

    pillarRoom_classCallCheck(this, pillarRoom);

    _this = pillarRoom_possibleConstructorReturn(this, pillarRoom_getPrototypeOf(pillarRoom).call(this, props));

    _this.setMenuState = function (menuMode) {
      _this.setState({
        menuMode: menuMode
      });
    };

    _this.setRemove = function (removeContext) {
      _this.setState({
        removeContext: removeContext
      });
    };

    _this.showTooltip = function (show) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _this.setState({
        toolTipShow: show
      });

      if (!data) return;

      if (data.payload) {
        _this.setState({
          toolTipData: data.payload
        });
      }
    };

    _this.resetKpiSelect = function () {
      var kpis = _this.props.kpis;
      if (!kpis[0]) return;

      _this.setState({
        selectedKpi: kpis[0].id
      });
    };

    _this.deselect = function () {
      d3["selectAll"](".line").attr("stroke-width", 1.8);
      d3["selectAll"](".dot").attr("r", 3);
      d3["selectAll"](".legend").attr("font-weight", "normal").attr("font-size", "17");

      _this.selectSeries(null);
    };

    _this.state = {
      selectedSeries: null,
      selectedExport: "",
      selectedKpi: null,
      menuMode: false,
      removeContext: null,
      toolTipData: null,
      toolTipShow: false
    };
    _this.selectSeries = _this.selectSeries.bind(pillarRoom_assertThisInitialized(_this));
    _this.selectKpi = _this.selectKpi.bind(pillarRoom_assertThisInitialized(_this));
    _this.setRemove = _this.setRemove.bind(pillarRoom_assertThisInitialized(_this));
    _this.resetKpiSelect = _this.resetKpiSelect.bind(pillarRoom_assertThisInitialized(_this));
    _this.showTooltip = _this.showTooltip.bind(pillarRoom_assertThisInitialized(_this));
    return _this;
  }

  pillarRoom_createClass(pillarRoom, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.kpis != this.props.kpis) {// this.selectSeriesHook(null);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          getADashboard = _this$props.getADashboard,
          getKpis = _this$props.getKpis,
          clearKpis = _this$props.clearKpis;
      var _this$props$match$par = this.props.match.params,
          dashboardId = _this$props$match$par.dashboardId,
          pillarId = _this$props$match$par.pillarId;
      clearKpis();
      getADashboard(this.props.match.params.dashboardId);
      getKpis(dashboardId, pillarId);
    }
  }, {
    key: "selectSeries",
    value: function selectSeries(id) {
      this.setState({
        selectedSeries: id
      });
    }
  }, {
    key: "selectKpi",
    value: function selectKpi(id) {
      this.setState({
        selectedKpi: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          kpis = _this$props2.kpis,
          currentDashboard = _this$props2.currentDashboard;
      var _this$props$match$par2 = this.props.match.params,
          pillarId = _this$props$match$par2.pillarId,
          dashboardId = _this$props$match$par2.dashboardId;
      var _this$state = this.state,
          selectedSeries = _this$state.selectedSeries,
          selectedKpi = _this$state.selectedKpi,
          menuMode = _this$state.menuMode,
          removeContext = _this$state.removeContext,
          toolTipData = _this$state.toolTipData,
          toolTipShow = _this$state.toolTipShow;
      var kpi = getItem(selectedKpi, kpis, "id");

      if (currentDashboard == null) {
        return react_default.a.createElement(LoadingScreen, null);
      }

      var color = currentDashboard.background;
      return react_default.a.createElement("div", {
        className: "container-fluid pt-4 pb-4",
        style: {
          padding: 0,
          background: color,
          height: "".concat(100, "%"),
          minHeight: "fit-content"
        }
      }, react_default.a.createElement(components_Tooltip, {
        data: toolTipData,
        show: toolTipShow
      }), react_default.a.createElement("div", {
        className: "row m-0 h-100"
      }, react_default.a.createElement("div", {
        className: "col-lg-4"
      }, react_default.a.createElement("div", {
        className: "card h-100"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement(d3charts_pillar, {
        kpis: kpis,
        letter: pillarId === "Plus" ? "+" : pillarId,
        dashboardId: dashboardId,
        labeled: true,
        onHover: this.showTooltip
      })), react_default.a.createElement("div", {
        className: "card-footer",
        style: {
          display: "flex"
        }
      }, react_default.a.createElement("div", {
        className: "row w-100"
      }, react_default.a.createElement("div", {
        className: "col-lg-12"
      }, react_default.a.createElement(table_Table, {
        data: kpis,
        header: KPI_TABLE_HEADERS,
        fontSize: "".concat(0.7, "rem"),
        summary: false
      })))))), react_default.a.createElement("div", {
        className: "col-lg-8"
      }, react_default.a.createElement("div", {
        className: "card h-100"
      }, react_default.a.createElement("div", {
        className: "card-body scroll"
      }, menuMode ? react_default.a.createElement(components_MenuView, {
        kpi: kpi,
        setRemove: this.setRemove,
        changeMenu: this.setMenuState,
        menuState: this.menuMode,
        resetKpiSelect: this.resetKpiSelect
      }) : react_default.a.createElement(d3charts_LineChart, {
        kpis: kpis,
        selectSeries: this.selectSeries,
        selectedKpi: selectedKpi
      })), react_default.a.createElement("div", {
        className: "card-footer",
        style: {
          display: "flex"
        }
      }, react_default.a.createElement(components_ChartOptions, {
        active: selectedSeries,
        selectKpi: this.selectKpi,
        selectSeries: this.selectSeries,
        deselect: this.deselect,
        kpis: kpis,
        changeMenu: this.setMenuState,
        menuMode: menuMode,
        kpi: kpi
      }))))), react_default.a.createElement(modal_Modal, {
        id: "newKpi",
        title: "New KPI",
        iconClass: "im im-dashboard"
      }, react_default.a.createElement(kpis_KpiNew, {
        pillar: pillarId,
        dashboard: currentDashboard.id
      })), react_default.a.createElement(RemoveConfirmation, {
        removeContext: removeContext
      }));
    }
  }]);

  return pillarRoom;
}(react["Component"]);

pillarRoom_pillarRoom.propTypes = {
  getADashboard: prop_types_default.a.func.isRequired,
  kpis: prop_types_default.a.array.isRequired,
  currentDashboard: prop_types_default.a.object
};

var pillarRoom_mapStateToProps = function mapStateToProps(state) {
  return {
    kpis: state.dashboards.kpis,
    currentDashboard: state.dashboards.currentDashboard
  };
};

/* harmony default export */ var scenes_pillarRoom = (Object(es["connect"])(pillarRoom_mapStateToProps, {
  getADashboard: dashboards_getADashboard,
  getKpis: dashboards_getKpis,
  clearKpis: dashboards_clearKpis
})(pillarRoom_pillarRoom));
// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardDisplayCard.js
function DashboardDisplayCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashboardDisplayCard_typeof = function _typeof(obj) { return typeof obj; }; } else { DashboardDisplayCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashboardDisplayCard_typeof(obj); }

function DashboardDisplayCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashboardDisplayCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashboardDisplayCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashboardDisplayCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashboardDisplayCard_defineProperties(Constructor, staticProps); return Constructor; }

function DashboardDisplayCard_possibleConstructorReturn(self, call) { if (call && (DashboardDisplayCard_typeof(call) === "object" || typeof call === "function")) { return call; } return DashboardDisplayCard_assertThisInitialized(self); }

function DashboardDisplayCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DashboardDisplayCard_getPrototypeOf(o) { DashboardDisplayCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashboardDisplayCard_getPrototypeOf(o); }

function DashboardDisplayCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashboardDisplayCard_setPrototypeOf(subClass, superClass); }

function DashboardDisplayCard_setPrototypeOf(o, p) { DashboardDisplayCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashboardDisplayCard_setPrototypeOf(o, p); }

// DEPENDACIES


 // ACTIONS



var DashboardDisplayCard_DashboardDisplayCard =
/*#__PURE__*/
function (_Component) {
  DashboardDisplayCard_inherits(DashboardDisplayCard, _Component);

  function DashboardDisplayCard() {
    DashboardDisplayCard_classCallCheck(this, DashboardDisplayCard);

    return DashboardDisplayCard_possibleConstructorReturn(this, DashboardDisplayCard_getPrototypeOf(DashboardDisplayCard).apply(this, arguments));
  }

  DashboardDisplayCard_createClass(DashboardDisplayCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dashboard = _this$props.dashboard,
          deleteDashboard = _this$props.deleteDashboard,
          onRemoveClick = _this$props.onRemoveClick,
          onEditClick = _this$props.onEditClick;
      return react_default.a.createElement("div", {
        className: "card m-3"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement("div", {
        className: "d-flex"
      }, react_default.a.createElement("div", {
        className: "card-title",
        style: {
          fontSize: "1.25rem",
          fontWeight: "bold"
        }
      }, dashboard.title, " "), react_default.a.createElement("i", {
        style: {
          color: dashboard.background,
          textAlign: "right"
        },
        className: "im im-drop ml-auto"
      }), react_default.a.createElement("i", {
        style: {
          textAlign: "right"
        },
        className: "im im-gear ml-3 gear-anim",
        onClick: function onClick() {
          return onEditClick(dashboard);
        }
      })), react_default.a.createElement("p", {
        className: "card-text"
      }, "Author: ", dashboard.author, react_default.a.createElement("br", null), "Level: ", dashboard.level), react_default.a.createElement("div", {
        className: "d-flex"
      }, react_default.a.createElement(react_router_dom["Link"], {
        to: "/boardroom/".concat(dashboard.id),
        className: "btn btn-primary btn-sm"
      }, "View"), react_default.a.createElement("button", {
        onClick: function onClick() {
          return onRemoveClick(dashboard);
        },
        className: "btn btn-danger btn-sm ml-auto"
      }, " ", "Delete"))));
    }
  }]);

  return DashboardDisplayCard;
}(react["Component"]);

/* harmony default export */ var components_DashboardDisplayCard = (Object(es["connect"])(null, {
  deleteDashboard: dashboards_deleteDashboard
})(DashboardDisplayCard_DashboardDisplayCard));
// CONCATENATED MODULE: ./frontend/src/scenes/home/components/ImageList.js
function ImageList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ImageList_typeof = function _typeof(obj) { return typeof obj; }; } else { ImageList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ImageList_typeof(obj); }

function ImageList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ImageList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ImageList_createClass(Constructor, protoProps, staticProps) { if (protoProps) ImageList_defineProperties(Constructor.prototype, protoProps); if (staticProps) ImageList_defineProperties(Constructor, staticProps); return Constructor; }

function ImageList_possibleConstructorReturn(self, call) { if (call && (ImageList_typeof(call) === "object" || typeof call === "function")) { return call; } return ImageList_assertThisInitialized(self); }

function ImageList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ImageList_getPrototypeOf(o) { ImageList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ImageList_getPrototypeOf(o); }

function ImageList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ImageList_setPrototypeOf(subClass, superClass); }

function ImageList_setPrototypeOf(o, p) { ImageList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ImageList_setPrototypeOf(o, p); }





var ImageList_ImageList =
/*#__PURE__*/
function (_Component) {
  ImageList_inherits(ImageList, _Component);

  function ImageList() {
    var _getPrototypeOf2;

    var _temp, _this;

    ImageList_classCallCheck(this, ImageList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ImageList_possibleConstructorReturn(_this, (_temp = _this = ImageList_possibleConstructorReturn(this, (_getPrototypeOf2 = ImageList_getPrototypeOf(ImageList)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      deleteMode: false
    }, _this.onToggleDeleteMode = function () {
      _this.setState({
        deleteMode: !_this.state.deleteMode
      });
    }, _this.onDelete = function (id) {
      var deleteImage = _this.props.deleteImage;
      deleteImage(id);

      _this.setState({
        deleteMode: !_this.state.deleteMode
      });
    }, _temp));
  }

  ImageList_createClass(ImageList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = this.props.images;
      var deleteMode = this.state.deleteMode;
      if (!images) return react_default.a.createElement(react_default.a.Fragment, null);
      if (!images.length) return react_default.a.createElement(react_default.a.Fragment, null);
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("label", {
        htmlFor: "image",
        style: {
          marginBottom: "-20px"
        }
      }, "Infographics"), react_default.a.createElement("div", {
        className: "container"
      }, react_default.a.createElement("div", {
        className: "container--fluid"
      }, images.map(function (image) {
        return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
          "class": "image-container"
        }, react_default.a.createElement("img", {
          className: "image",
          src: image.image
        }), deleteMode && react_default.a.createElement("i", {
          "class": "image-delete im im-x-mark",
          onClick: function onClick(e) {
            return _this2.onDelete(image.id);
          }
        })));
      }))), !deleteMode && react_default.a.createElement("button", {
        onClick: this.onToggleDeleteMode,
        type: "button",
        className: "btn ".concat(deleteMode ? "btn-success" : "btn-danger", " btn-sm mt-3")
      }, deleteMode ? "Done" : "Delete Mode"));
    }
  }]);

  return ImageList;
}(react["Component"]);

/* harmony default export */ var components_ImageList = (Object(es["connect"])(null, {
  deleteImage: dashboards_deleteImage
})(ImageList_ImageList));
// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardForm.js
function DashboardForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashboardForm_typeof = function _typeof(obj) { return typeof obj; }; } else { DashboardForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashboardForm_typeof(obj); }

function DashboardForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashboardForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashboardForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashboardForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashboardForm_defineProperties(Constructor, staticProps); return Constructor; }

function DashboardForm_possibleConstructorReturn(self, call) { if (call && (DashboardForm_typeof(call) === "object" || typeof call === "function")) { return call; } return DashboardForm_assertThisInitialized(self); }

function DashboardForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DashboardForm_getPrototypeOf(o) { DashboardForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashboardForm_getPrototypeOf(o); }

function DashboardForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashboardForm_setPrototypeOf(subClass, superClass); }

function DashboardForm_setPrototypeOf(o, p) { DashboardForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashboardForm_setPrototypeOf(o, p); }

// DEPENDANCIES



 // CONFIG

 // ACTIONS




var DashboardForm_DashboardForm =
/*#__PURE__*/
function (_Component) {
  DashboardForm_inherits(DashboardForm, _Component);

  function DashboardForm() {
    var _getPrototypeOf2;

    var _temp, _this;

    DashboardForm_classCallCheck(this, DashboardForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return DashboardForm_possibleConstructorReturn(_this, (_temp = _this = DashboardForm_possibleConstructorReturn(this, (_getPrototypeOf2 = DashboardForm_getPrototypeOf(DashboardForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.onChangeColor = function (color) {
      var onChange = _this.props.onChange;
      onChange({
        target: {
          name: "background",
          value: color.hex
        }
      });
    }, _this.onChangeFile = function (e) {
      var onChange = _this.props.onChange;
      onChange({
        target: {
          name: "image",
          value: e.target.files[0]
        }
      });
    }, _temp));
  }

  DashboardForm_createClass(DashboardForm, [{
    key: "render",
    value: function render() {
      var _this$props$values = this.props.values,
          title = _this$props$values.title,
          author = _this$props$values.author,
          background = _this$props$values.background,
          dashboard_type = _this$props$values.dashboard_type,
          level = _this$props$values.level;
      var images = this.props.images;
      var _this$props = this.props,
          onChange = _this$props.onChange,
          showImageField = _this$props.showImageField;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "row justify-content-between"
      }, react_default.a.createElement("div", {
        className: "col-sm-6"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "title"
      }, "Title"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "title",
        onChange: onChange,
        value: title || ""
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "author"
      }, "Author"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "author",
        onChange: onChange,
        value: author || ""
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "dashboard_type"
      }, "Type"), react_default.a.createElement("select", {
        className: "form-control",
        type: "text",
        name: "dashboard_type",
        onChange: onChange,
        value: dashboard_type
      }, DASHBOARD_TYPE_CHOICES.map(function (choice) {
        return react_default.a.createElement("option", {
          key: "choice-".concat(choice.id),
          value: choice.id
        }, choice.name);
      }))), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "level"
      }, "Level"), react_default.a.createElement("select", {
        className: "form-control",
        type: "text",
        name: "level",
        value: level,
        onChange: onChange
      }, LEVEL_CHOICES.map(function (choice) {
        return react_default.a.createElement("option", {
          key: choice.id,
          value: choice.id
        }, choice.name);
      })))), react_default.a.createElement("div", {
        className: "col-sm-6"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "color"
      }, "Background Color"), react_default.a.createElement(lib["ChromePicker"], {
        color: background,
        onChangeComplete: this.onChangeColor
      }))), showImageField && react_default.a.createElement("div", {
        className: "col-12 mr-2"
      }, react_default.a.createElement(components_ImageList, {
        images: images
      })), showImageField && react_default.a.createElement("div", {
        className: "col-12 mt-2"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "image"
      }, "Add Infographic"), react_default.a.createElement("input", {
        type: "file",
        name: "image",
        className: "form-control-file",
        onChange: this.onChangeFile
      })))));
    }
  }]);

  return DashboardForm;
}(react["Component"]);

DashboardForm_DashboardForm.propTypes = {
  addDashboard: prop_types_default.a.func.isRequired
};
/* harmony default export */ var components_DashboardForm = (Object(es["connect"])(null, {
  addDashboard: dashboards_addDashboard
})(DashboardForm_DashboardForm));
// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardNew.js
function DashboardNew_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashboardNew_typeof = function _typeof(obj) { return typeof obj; }; } else { DashboardNew_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashboardNew_typeof(obj); }

function DashboardNew_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { DashboardNew_defineProperty(target, key, source[key]); }); } return target; }

function DashboardNew_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DashboardNew_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashboardNew_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashboardNew_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashboardNew_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashboardNew_defineProperties(Constructor, staticProps); return Constructor; }

function DashboardNew_possibleConstructorReturn(self, call) { if (call && (DashboardNew_typeof(call) === "object" || typeof call === "function")) { return call; } return DashboardNew_assertThisInitialized(self); }

function DashboardNew_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DashboardNew_getPrototypeOf(o) { DashboardNew_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashboardNew_getPrototypeOf(o); }

function DashboardNew_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashboardNew_setPrototypeOf(subClass, superClass); }

function DashboardNew_setPrototypeOf(o, p) { DashboardNew_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashboardNew_setPrototypeOf(o, p); }

// DEPENDANCIES



 // ACTIONS



var DashboardNew_DashboardNew =
/*#__PURE__*/
function (_Component) {
  DashboardNew_inherits(DashboardNew, _Component);

  function DashboardNew(props) {
    var _this;

    DashboardNew_classCallCheck(this, DashboardNew);

    _this = DashboardNew_possibleConstructorReturn(this, DashboardNew_getPrototypeOf(DashboardNew).call(this, props));

    _this.update = function (dashboard) {
      _this.setState(DashboardNew_objectSpread({}, dashboard));
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var addDashboard = _this.props.addDashboard;
      var _this$state = _this.state,
          title = _this$state.title,
          author = _this$state.author,
          background = _this$state.background,
          dashboard_type = _this$state.dashboard_type,
          level = _this$state.level;
      var dashboard = {
        title: title,
        author: author,
        background: background,
        dashboard_type: dashboard_type,
        level: level
      };
      addDashboard(dashboard);

      _this.setState({
        title: "",
        author: "",
        background: "#ffffff",
        dashboard_type: "0",
        level: "0"
      });

      $("#dashboardNew").modal("hide");
    };

    _this.onChange = function (e) {
      _this.setState(DashboardNew_defineProperty({}, e.target.name, e.target.value));
    };

    _this.state = {
      title: "",
      author: "",
      background: "#ffffff",
      dashboard_type: "0",
      level: "0"
    };
    if (props.dashboard) _this.state = DashboardNew_objectSpread({}, props.dashboard);
    return _this;
  }

  DashboardNew_createClass(DashboardNew, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var dashboard = this.props.dashboard;

      if (dashboard != prevProps.dashboard) {
        this.update(dashboard);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        className: "w-100 mt-3"
      }, react_default.a.createElement(components_DashboardForm, {
        showImageField: true,
        onChange: this.onChange,
        values: this.state
      }), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-success mb-4 mt-3"
      }, "Create"));
    }
  }]);

  return DashboardNew;
}(react["Component"]);

DashboardNew_DashboardNew.propTypes = {
  addDashboard: prop_types_default.a.func.isRequired
};
/* harmony default export */ var components_DashboardNew = (Object(es["connect"])(null, {
  addDashboard: dashboards_addDashboard
})(DashboardNew_DashboardNew));
// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardEdit.js
function DashboardEdit_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashboardEdit_typeof = function _typeof(obj) { return typeof obj; }; } else { DashboardEdit_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashboardEdit_typeof(obj); }

function DashboardEdit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { DashboardEdit_defineProperty(target, key, source[key]); }); } return target; }

function DashboardEdit_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DashboardEdit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashboardEdit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashboardEdit_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashboardEdit_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashboardEdit_defineProperties(Constructor, staticProps); return Constructor; }

function DashboardEdit_possibleConstructorReturn(self, call) { if (call && (DashboardEdit_typeof(call) === "object" || typeof call === "function")) { return call; } return DashboardEdit_assertThisInitialized(self); }

function DashboardEdit_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DashboardEdit_getPrototypeOf(o) { DashboardEdit_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashboardEdit_getPrototypeOf(o); }

function DashboardEdit_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashboardEdit_setPrototypeOf(subClass, superClass); }

function DashboardEdit_setPrototypeOf(o, p) { DashboardEdit_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashboardEdit_setPrototypeOf(o, p); }

// DEPENDANCIES



 // ACTIONS



var DashboardEdit_DashboardEdit =
/*#__PURE__*/
function (_Component) {
  DashboardEdit_inherits(DashboardEdit, _Component);

  function DashboardEdit(props) {
    var _this;

    DashboardEdit_classCallCheck(this, DashboardEdit);

    _this = DashboardEdit_possibleConstructorReturn(this, DashboardEdit_getPrototypeOf(DashboardEdit).call(this, props));

    _this.update = function (dashboard) {
      _this.setState(DashboardEdit_objectSpread({}, dashboard));
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          updateDashboard = _this$props.updateDashboard,
          dashboard = _this$props.dashboard,
          addImage = _this$props.addImage;
      var _this$state = _this.state,
          title = _this$state.title,
          author = _this$state.author,
          background = _this$state.background,
          dashboard_type = _this$state.dashboard_type,
          level = _this$state.level,
          image = _this$state.image;
      var newDashboard = {
        title: title,
        author: author,
        background: background,
        dashboard_type: dashboard_type,
        level: level
      };
      newDashboard.id = dashboard.id;
      updateDashboard(newDashboard, newDashboard.id);

      if (image) {
        var newImage = {
          image: image,
          dashboard: dashboard.id
        };
        addImage(newImage);
      }

      $("#dashboardEdit").modal("hide");
    };

    _this.onChange = function (e) {
      _this.setState(DashboardEdit_defineProperty({}, e.target.name, e.target.value));
    };

    _this.state = {
      title: "",
      author: "",
      background: "#ffffff",
      dashboard_type: "0",
      level: "0"
    };
    if (props.dashboard) _this.state = DashboardEdit_objectSpread({}, props.dashboard);
    return _this;
  }

  DashboardEdit_createClass(DashboardEdit, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var dashboard = this.props.dashboard;

      if (dashboard != prevProps.dashboard) {
        this.update(dashboard);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var dashboard = this.props.dashboard;
      return react_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        className: "w-100 mt-3"
      }, react_default.a.createElement(components_DashboardForm, {
        showImageField: true,
        onChange: this.onChange,
        values: this.state,
        images: dashboard ? dashboard.images : null
      }), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-success mb-4 mt-3"
      }, "Save"));
    }
  }]);

  return DashboardEdit;
}(react["Component"]);

DashboardEdit_DashboardEdit.propTypes = {
  updateDashboard: prop_types_default.a.func.isRequired
};
/* harmony default export */ var components_DashboardEdit = (Object(es["connect"])(null, {
  updateDashboard: dashboards_updateDashboard,
  addImage: dashboards_addImage
})(DashboardEdit_DashboardEdit));
// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardList.js
function DashboardList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashboardList_typeof = function _typeof(obj) { return typeof obj; }; } else { DashboardList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashboardList_typeof(obj); }

function DashboardList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashboardList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashboardList_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashboardList_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashboardList_defineProperties(Constructor, staticProps); return Constructor; }

function DashboardList_possibleConstructorReturn(self, call) { if (call && (DashboardList_typeof(call) === "object" || typeof call === "function")) { return call; } return DashboardList_assertThisInitialized(self); }

function DashboardList_getPrototypeOf(o) { DashboardList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashboardList_getPrototypeOf(o); }

function DashboardList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DashboardList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashboardList_setPrototypeOf(subClass, superClass); }

function DashboardList_setPrototypeOf(o, p) { DashboardList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashboardList_setPrototypeOf(o, p); }

// DEPENDANCIES


 // ACTIONS

 // CORE COMPONENTS





 // NATIVE COMPONENTS




var DashboardList_DashboardList =
/*#__PURE__*/
function (_Component) {
  DashboardList_inherits(DashboardList, _Component);

  function DashboardList(props) {
    var _this;

    DashboardList_classCallCheck(this, DashboardList);

    _this = DashboardList_possibleConstructorReturn(this, DashboardList_getPrototypeOf(DashboardList).call(this, props));

    _this.newDashboardClick = function () {
      $("#dashboardNew").modal("show");
    };

    _this.setRemove = function (removeItem) {
      _this.setState({
        removeItem: removeItem
      });

      $("#removeConfirmation").modal("show");
    };

    _this.setEdit = function (dashboard) {
      _this.setState({
        editItem: dashboard
      });

      $("#dashboardEdit").modal("show");
    };

    _this.onRemoveConfirmationSubmit = function (state) {
      var deleteDashboard = _this.props.deleteDashboard;
      var removeItem = _this.state.removeItem;

      if (state.name === removeItem.title) {
        deleteDashboard(removeItem.id);
        return true;
      } else return false;
    };

    _this.state = {
      removeItem: null,
      editItem: null
    };
    _this.setRemove = _this.setRemove.bind(DashboardList_assertThisInitialized(_this));
    _this.onRemoveConfirmationSubmit = _this.onRemoveConfirmationSubmit.bind(DashboardList_assertThisInitialized(_this));
    _this.setEdit = _this.setEdit.bind(DashboardList_assertThisInitialized(_this));
    return _this;
  }

  DashboardList_createClass(DashboardList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getDashboards();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var dashboards = this.props.dashboards;
      var _this$state = this.state,
          removeItem = _this$state.removeItem,
          editItem = _this$state.editItem;
      var editableDashboard = {};
      if (editItem) editableDashboard = getItem(editItem.id, dashboards, "id");
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "row m-0"
      }, dashboards.map(function (dashboard) {
        return react_default.a.createElement("div", {
          key: dashboard.id,
          className: "col-lg-4 col-sm-12"
        }, react_default.a.createElement(components_DashboardDisplayCard, {
          dashboard: dashboard,
          onRemoveClick: _this2.setRemove,
          onEditClick: _this2.setEdit
        }));
      }), react_default.a.createElement("div", {
        className: "col-lg-4 col-sm-12"
      }, react_default.a.createElement(ui_NewCard, {
        text: "Dashboard",
        handleClick: this.newDashboardClick
      }))), react_default.a.createElement(RemoveConfirmation, {
        removeContext: {
          item: removeItem,
          type: "dashboard",
          onSubmit: this.onRemoveConfirmationSubmit
        }
      }), react_default.a.createElement(modal_Modal, {
        title: "Edit Dashboard",
        id: "dashboardEdit"
      }, react_default.a.createElement(components_DashboardEdit, {
        dashboard: editableDashboard
      })), react_default.a.createElement(modal_Modal, {
        title: "New Dashboard",
        id: "dashboardNew"
      }, react_default.a.createElement(components_DashboardNew, null)));
    }
  }]);

  return DashboardList;
}(react["Component"]);

DashboardList_DashboardList.propTypes = {
  dashboards: prop_types_default.a.array.isRequired,
  getDashboards: prop_types_default.a.func.isRequired,
  deleteDashboard: prop_types_default.a.func.isRequired
};

var DashboardList_mapStateToProps = function mapStateToProps(state) {
  return {
    dashboards: state.dashboards.dashboards
  };
};

/* harmony default export */ var components_DashboardList = (Object(es["connect"])(DashboardList_mapStateToProps, {
  getDashboards: dashboards_getDashboards,
  deleteDashboard: dashboards_deleteDashboard
})(DashboardList_DashboardList));
// CONCATENATED MODULE: ./frontend/src/scenes/home/index.js
function home_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { home_typeof = function _typeof(obj) { return typeof obj; }; } else { home_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return home_typeof(obj); }

function home_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function home_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function home_createClass(Constructor, protoProps, staticProps) { if (protoProps) home_defineProperties(Constructor.prototype, protoProps); if (staticProps) home_defineProperties(Constructor, staticProps); return Constructor; }

function home_possibleConstructorReturn(self, call) { if (call && (home_typeof(call) === "object" || typeof call === "function")) { return call; } return home_assertThisInitialized(self); }

function home_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function home_getPrototypeOf(o) { home_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return home_getPrototypeOf(o); }

function home_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) home_setPrototypeOf(subClass, superClass); }

function home_setPrototypeOf(o, p) { home_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return home_setPrototypeOf(o, p); }

// DEPENDANCIES

 // CORE COMPONENTS

 // NATIVE COMPONENTS



var home_Dashboard =
/*#__PURE__*/
function (_Component) {
  home_inherits(Dashboard, _Component);

  function Dashboard() {
    home_classCallCheck(this, Dashboard);

    return home_possibleConstructorReturn(this, home_getPrototypeOf(Dashboard).apply(this, arguments));
  }

  home_createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          clearCurrentDashboard = _this$props.clearCurrentDashboard,
          clearActionTables = _this$props.clearActionTables;
      clearCurrentDashboard();
      clearActionTables();
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "container mt-5"
      }, react_default.a.createElement(components_DashboardList, null));
    }
  }]);

  return Dashboard;
}(react["Component"]);

/* harmony default export */ var home = (Object(es["connect"])(null, {
  clearCurrentDashboard: dashboards_clearCurrentDashboard,
  clearActionTables: dashboards_clearActionTables
})(home_Dashboard));
// CONCATENATED MODULE: ./frontend/src/scenes/contact/index.js


var contact_Contact = function Contact(props) {
  return react_default.a.createElement("div", {
    className: "row justify-content-center m-0"
  }, react_default.a.createElement("div", {
    className: "col-lg-5 mt-5"
  }, react_default.a.createElement("div", {
    className: "card"
  }, react_default.a.createElement("div", {
    className: "card-body"
  }, react_default.a.createElement("h1", {
    className: "card-title"
  }, "Contact"), react_default.a.createElement("p", {
    className: "card-text"
  }, react_default.a.createElement("span", {
    className: "im-user-male im mr-3"
  }), "Kyle Thatcher - Co-op Student"), react_default.a.createElement("p", {
    className: "card-text"
  }, react_default.a.createElement("span", {
    className: "im im-mail mr-3"
  }), "kyle.thatcher@sanofi.com"), react_default.a.createElement("p", {
    className: "card-text"
  }, "Please contact for any and all bugs and issues encountered")))));
};

/* harmony default export */ var contact = (contact_Contact);
// CONCATENATED MODULE: ./frontend/src/core/components/layout/Header.js
function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }

// DEPENDANCIES



 // ACTIONS


/**
 * Header component for the site
 */

var Header_Header =
/*#__PURE__*/
function (_Component) {
  Header_inherits(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _temp, _this;

    Header_classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Header_possibleConstructorReturn(_this, (_temp = _this = Header_possibleConstructorReturn(this, (_getPrototypeOf2 = Header_getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      curTime: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleDateString(),
      weekNum: 0
    }, _temp));
  }

  Header_createClass(Header, [{
    key: "getWeekNumber",
    value: function getWeekNumber(d) {
      // Copy date so don't modify original
      d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); // Set to nearest Thursday: current date + 4 - current day number
      // Make Sunday's day number 7

      d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7)); // Get first day of year

      var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)); // Calculate full weeks to nearest Thursday

      var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7); // Return array of year and week number

      return weekNo;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.setState({
          curTime: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleDateString()
        });
      }, 1000);
      this.setState({
        weekNum: this.getWeekNumber(new Date())
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      var currentDashboard = this.props.currentDashboard;
      var _this$state = this.state,
          curTime = _this$state.curTime,
          weekNum = _this$state.weekNum;
      var authLinks = react_default.a.createElement("ul", {
        className: "navbar-nav ml-auto mt-2"
      }, react_default.a.createElement("li", {
        className: "nav-item"
      }, react_default.a.createElement("button", {
        onClick: this.props.logout,
        className: "nav-link btn btn-info btn-sm text-light pl-2 pr-2"
      }, "Logout")));
      var guestLinks = react_default.a.createElement("ul", {
        className: "navbar-nav ml-auto mt-2"
      }, react_default.a.createElement("li", {
        className: "nav-item"
      }, react_default.a.createElement(react_router_dom["Link"], {
        to: "/register",
        className: "nav-link"
      }, "Register")), react_default.a.createElement("li", {
        className: "nav-item"
      }, react_default.a.createElement(react_router_dom["Link"], {
        to: "/login",
        className: "nav-link"
      }, "Login")));
      return react_default.a.createElement("nav", {
        className: "navbar navbar-expand-lg co-accent"
      }, react_default.a.createElement("div", {
        className: "container-fluid",
        style: {
          fontSize: 18 + "px"
        }
      }, react_default.a.createElement("img", {
        src: "../../../../static/media/sms-logo.png",
        style: {
          height: "50px",
          width: "50px"
        },
        className: "mr-3 p-1"
      }), react_default.a.createElement("a", {
        className: "navbar-brand brand",
        href: "#"
      }, "+QDCI Boards"), react_default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarNavDropdown",
        "aria-controls": "navbarNavDropdown",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react_default.a.createElement("span", {
        className: "navbar-toggler-icon"
      })), react_default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarNavDropdown"
      }, react_default.a.createElement("ul", {
        className: "navbar-nav"
      }, react_default.a.createElement("li", {
        className: "nav-item"
      }, react_default.a.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "My Dashboards")), react_default.a.createElement("li", {
        className: "nav-item"
      }, react_default.a.createElement("a", {
        className: "nav-link",
        href: "#/contact"
      }, "Contact an Admin"))), currentDashboard && react_default.a.createElement("h4", {
        className: "m-auto"
      }, currentDashboard.title), react_default.a.createElement("h5", {
        className: "m-auto"
      }, curTime, ", Week # ", weekNum), isAuthenticated ? authLinks : guestLinks)));
    }
  }]);

  return Header;
}(react["Component"]);

Header_Header.propTypes = {
  auth: prop_types_default.a.object.isRequired,
  logout: prop_types_default.a.func.isRequired
};

var Header_mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    currentDashboard: state.dashboards.currentDashboard
  };
};

/* harmony default export */ var layout_Header = (Object(es["connect"])(Header_mapStateToProps, {
  logout: auth_logout
})(Header_Header));
// CONCATENATED MODULE: ./frontend/src/core/components/layout/Alerts.js
function Alerts_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Alerts_typeof = function _typeof(obj) { return typeof obj; }; } else { Alerts_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Alerts_typeof(obj); }

function Alerts_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Alerts_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Alerts_createClass(Constructor, protoProps, staticProps) { if (protoProps) Alerts_defineProperties(Constructor.prototype, protoProps); if (staticProps) Alerts_defineProperties(Constructor, staticProps); return Constructor; }

function Alerts_possibleConstructorReturn(self, call) { if (call && (Alerts_typeof(call) === "object" || typeof call === "function")) { return call; } return Alerts_assertThisInitialized(self); }

function Alerts_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Alerts_getPrototypeOf(o) { Alerts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Alerts_getPrototypeOf(o); }

function Alerts_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Alerts_setPrototypeOf(subClass, superClass); }

function Alerts_setPrototypeOf(o, p) { Alerts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Alerts_setPrototypeOf(o, p); }

// -----------------------------------------------------------------------------
//                           ALERT COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
// -----------------------------------------------------------------------------




var Alerts_Alerts =
/*#__PURE__*/
function (_Component) {
  Alerts_inherits(Alerts, _Component);

  function Alerts() {
    Alerts_classCallCheck(this, Alerts);

    return Alerts_possibleConstructorReturn(this, Alerts_getPrototypeOf(Alerts).apply(this, arguments));
  }

  Alerts_createClass(Alerts, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          error = _this$props.error,
          alert = _this$props.alert,
          messages = _this$props.messages;

      if (error !== prevProps.error) {
        if (error.msg.title) alert.error("Title: ".concat(error.msg.title.join()));
        if (error.msg.author) alert.error("Author: ".concat(error.msg.author.join()));
        if (error.msg.background) alert.error("Color: ".concat(error.msg.background.join()));
        if (error.msg.non_field_errors) alert.error("Author: ".concat(error.msg.non_field_errors.join()));
        if (error.msg.username) alert.error(error.msg.username.join());
      }

      if (messages !== prevProps.messages) {
        if (messages.deleteDashboard) alert.success(messages.deleteDashboard);
        if (messages.addDashboard) alert.success(messages.addDashboard);
        if (messages.passwordsNotMatch) alert.error(messages.passwordsNotMatch);
        if (messages.addKpi) alert.success(messages.addKpi);
        if (messages.addSeries) alert.success(messages.addSeries);
        if (messages.addDatapoint) alert.success(messages.addDatapoint);
        if (messages.addAction) alert.success(messages.addAction);
        if (messages.deleteKpi) alert.success(messages.deleteKpi);
        if (messages.deleteAction) alert.success(messages.deleteAction);
        if (messages.deleteSeries) alert.success(messages.deleteSeries);
        if (messages.deleteDatapoint) alert.success(messages.deleteDatapoint);
        if (messages.updateKpi) alert.success(messages.updateKpi);
        if (messages.updateAction) alert.success(messages.updateAction);
        if (messages.updateActionTable) alert.success(messages.updateActionTable);
        if (messages.updateSeries) alert.success(messages.updateSeries);
        if (messages.updateDatapoint) alert.success(messages.updateDatapoint);
        if (messages.updateAudit) alert.success(messages.updateAudit);
        if (messages.updateWin) alert.success(messages.updateWin);
        if (messages.entriesCreated) alert.success(messages.entriesCreated);
        if (messages.invalidForm) alert.error(messages.invalidForm);
        if (messages.updateDashboard) alert.success(messages.updateDashboard);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement(react["Fragment"], null);
    }
  }]);

  return Alerts;
}(react["Component"]);
Alerts_Alerts.propTypes = {
  error: prop_types_default.a.object.isRequired,
  alert: prop_types_default.a.object.isRequired,
  messages: prop_types_default.a.object.isRequired
};

var Alerts_mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.errors,
    messages: state.messages
  };
};

/* harmony default export */ var layout_Alerts = (Object(es["connect"])(Alerts_mapStateToProps)(Object(react_alert["withAlert"])()(Alerts_Alerts)));
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__("./node_modules/redux/es/redux.js");

// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/index.js
var redux_devtools_extension = __webpack_require__("./node_modules/redux-devtools-extension/index.js");

// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__("./node_modules/redux-thunk/es/index.js");

// CONCATENATED MODULE: ./frontend/src/core/reducers/dashboards.js
function dashboards_toConsumableArray(arr) { return dashboards_arrayWithoutHoles(arr) || dashboards_iterableToArray(arr) || dashboards_nonIterableSpread(); }

function dashboards_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function dashboards_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function dashboards_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function dashboards_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { reducers_dashboards_defineProperty(target, key, source[key]); }); } return target; }

function reducers_dashboards_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initalState = {
  dashboards: [],
  kpis: [],
  currentDashboard: null,
  actionTables: [],
  audits: [],
  wins: []
};
/* harmony default export */ var reducers_dashboards = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_A_DASHBOARD:
      return dashboards_objectSpread({}, state, {
        currentDashboard: action.payload
      });

    case GET_DASHBOARDS:
      return dashboards_objectSpread({}, state, {
        dashboards: action.payload
      });

    case DELETE_DASHBOARD:
      return dashboards_objectSpread({}, state, {
        dashboards: state.dashboards.filter(function (dashboard) {
          return dashboard.id !== action.payload;
        })
      });

    case ADD_DASHBOARD:
      return dashboards_objectSpread({}, state, {
        dashboards: [].concat(dashboards_toConsumableArray(state.dashboards), [action.payload])
      });

    case UPDATE_DASHBOARD:
      return dashboards_objectSpread({}, state, {
        dashboards: state.dashboards.map(function (dashboard) {
          if (dashboard.id === action.payload.id) return action.payload;else return dashboard;
        })
      });

    case GET_KPIS:
      return dashboards_objectSpread({}, state, {
        kpis: action.payload
      });

    case ADD_KPI:
      return dashboards_objectSpread({}, state, {
        kpis: [].concat(dashboards_toConsumableArray(state.kpis), [action.payload])
      });

    case UPDATE_KPI:
      return dashboards_objectSpread({}, state, {
        kpis: state.kpis.map(function (kpi) {
          return kpi.id === action.payload.id ? action.payload : kpi;
        })
      });

    case DELETE_KPI:
      return dashboards_objectSpread({}, state, {
        kpis: state.kpis.filter(function (kpi) {
          return kpi.id !== action.payload;
        })
      });

    case CLEAR_KPIS:
      return dashboards_objectSpread({}, state, {
        kpis: []
      });

    case ADD_SERIES:
      var kpis = state.kpis.map(function (kpi) {
        if (kpi.id != action.payload.kpi) return kpi;
        var series = kpi.series;
        return dashboards_objectSpread({}, kpi, {
          series: [].concat(dashboards_toConsumableArray(series), [action.payload])
        });
      });
      return dashboards_objectSpread({}, state, {
        kpis: kpis
      });

    case UPDATE_SERIES:
      var kpis__ = state.kpis.map(function (kpi) {
        return dashboards_objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            if (series.id != action.payload.id) return series;
            return action.payload;
          })
        });
      });
      return dashboards_objectSpread({}, state, {
        kpis: kpis__
      });

    case GET_SERIES:
      return dashboards_objectSpread({}, state, {
        series: action.payload
      });

    case DELETE_SERIES:
      var kpis_ = state.kpis.map(function (kpi) {
        return dashboards_objectSpread({}, kpi, {
          series: kpi.series.filter(function (series) {
            return series.id != action.payload;
          })
        });
      });
      return dashboards_objectSpread({}, state, {
        kpis: kpis_
      });

    case UPDATE_DATAPOINT:
      var kpis = state.kpis.map(function (kpi) {
        return dashboards_objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            if (series.id != action.payload.series) return series;
            return dashboards_objectSpread({}, series, {
              entries: series.entries.map(function (datapoint) {
                if (datapoint.id != action.payload.id) return datapoint;
                return action.payload;
              })
            });
          })
        });
      });
      return dashboards_objectSpread({}, state, {
        kpis: kpis
      });

    case DELETE_DATAPOINT:
      var kpis = state.kpis.map(function (kpi) {
        return dashboards_objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            return dashboards_objectSpread({}, series, {
              entries: series.entries.filter(function (datapoint) {
                return datapoint != action.payload;
              })
            });
          })
        });
      });
      return dashboards_objectSpread({}, state, {
        kpis: kpis
      });

    case ADD_DATAPOINT:
      var kpis___ = state.kpis.map(function (kpi) {
        return dashboards_objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            if (series.id != action.payload.series) return series;
            return dashboards_objectSpread({}, series, {
              entries: [].concat(dashboards_toConsumableArray(series.entries), [action.payload])
            });
          })
        });
      });
      return dashboards_objectSpread({}, state, {
        kpis: kpis___
      });

    case GET_ACTION_TABLE:
      return dashboards_objectSpread({}, state, {
        actionTables: action.payload
      });

    case ADD_ACTION:
      var actionTables = state.actionTables.map(function (at) {
        if (action.payload.tables.indexOf(at.id) == -1) return at;
        return dashboards_objectSpread({}, at, {
          actions: [].concat(dashboards_toConsumableArray(at.actions), [action.payload])
        });
      });
      return dashboards_objectSpread({}, state, {
        actionTables: actionTables
      });

    case DELETE_ACTION:
      var actionTables = state.actionTables.map(function (at) {
        return dashboards_objectSpread({}, at, {
          actions: at.actions.filter(function (act) {
            return act.id != action.payload;
          })
        });
      });
      return dashboards_objectSpread({}, state, {
        actionTables: actionTables
      });

    case UPDATE_ACTION:
      var actionTables = state.actionTables.map(function (at) {
        return dashboards_objectSpread({}, at, {
          actions: at.actions.map(function (act) {
            if (act.id != action.payload.id) return act;
            return action.payload;
          })
        });
      });
      return dashboards_objectSpread({}, state, {
        actionTables: actionTables
      });

    case UPDATE_ACTION_TABLE:
      var actionTables = state.actionTables.map(function (at) {
        if (at.id != action.payload.id) return at;
        return action.payload;
      });
      return dashboards_objectSpread({}, state, {
        actionTables: actionTables
      });

    case CLEAR_CURRENT_DASHBOARD:
      return dashboards_objectSpread({}, state, {
        actionTables: []
      });

    case CLEAR_ACTION_TABLES:
      return dashboards_objectSpread({}, state, {
        currentDashboard: null
      });

    case GET_AUDITS:
      return dashboards_objectSpread({}, state, {
        audits: action.payload
      });

    case ADD_AUDIT:
      return dashboards_objectSpread({}, state, {
        audits: [].concat(dashboards_toConsumableArray(state.audits), [action.payload])
      });

    case DELETE_AUDIT:
      return dashboards_objectSpread({}, state, {
        audits: state.audits.filter(function (audit) {
          return audit.id != action.payload;
        })
      });

    case UPDATE_AUDIT:
      return dashboards_objectSpread({}, state, {
        audits: state.audits.map(function (audit) {
          if (audit.id === action.payload.id) return action.payload;else return audit;
        })
      });

    case GET_WINS:
      return dashboards_objectSpread({}, state, {
        wins: action.payload
      });

    case ADD_WIN:
      return dashboards_objectSpread({}, state, {
        wins: [].concat(dashboards_toConsumableArray(state.wins), [action.payload])
      });

    case DELETE_WIN:
      return dashboards_objectSpread({}, state, {
        wins: state.wins.filter(function (win) {
          return win.id != action.payload;
        })
      });

    case UPDATE_WIN:
      return dashboards_objectSpread({}, state, {
        wins: state.wins.map(function (win) {
          if (win.id === action.payload.id) return action.payload;else return win;
        })
      });

    case UPDATE_HEAT:
      return dashboards_objectSpread({}, state, {
        heat: state.heat.map(function (h) {
          if (h.id === action.payload.id) return action.payload;else return h;
        })
      });

    case GET_HEAT:
      return dashboards_objectSpread({}, state, {
        heat: action.payload
      });

    case ADD_IMAGE:
      return dashboards_objectSpread({}, state, {
        dashboards: state.dashboards.map(function (dashboard) {
          if (dashboard.id != action.payload.dashboard) return dashboard;else return dashboards_objectSpread({}, dashboard, {
            images: [].concat(dashboards_toConsumableArray(dashboard.images), [action.payload])
          });
        })
      });

    case DELETE_IMAGE:
      return dashboards_objectSpread({}, state, {
        dashboards: state.dashboards.map(function (dashboard) {
          return dashboards_objectSpread({}, dashboard, {
            images: dashboard.images.filter(function (image) {
              return image.id !== action.payload;
            })
          });
        })
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./frontend/src/core/reducers/errors.js

var initialState = {
  msg: {},
  status: null
};
/* harmony default export */ var errors = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./frontend/src/core/reducers/messages.js

var messages_initialState = {
  msg: {},
  status: null
};
/* harmony default export */ var messages = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : messages_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CREATE_MESSAGE:
      return state = action.payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./frontend/src/core/reducers/auth.js
function auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { auth_defineProperty(target, key, source[key]); }); } return target; }

function auth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var auth_initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};
/* harmony default export */ var reducers_auth = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : auth_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case USER_LOADING:
      return auth_objectSpread({}, state, {
        isLoading: true
      });

    case USER_LOADED:
      return auth_objectSpread({}, state, {
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      });

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return auth_objectSpread({}, state, action.payload, {
        isAuthenticated: true,
        isLoading: false
      });

    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return auth_objectSpread({}, state, {
        token: null,
        user: null,
        leads: [],
        isAuthenticated: false,
        isLoading: false
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./frontend/src/core/reducers/index.js





/* harmony default export */ var reducers = (Object(redux["combineReducers"])({
  dashboards: reducers_dashboards,
  errors: errors,
  messages: messages,
  auth: reducers_auth
}));
// CONCATENATED MODULE: ./frontend/src/store.js
// DEPENDANCIES


 // COMPONENTS


var store_initialState = {};
var middleware = [redux_thunk_es["default"]];
var store = Object(redux["createStore"])(reducers, store_initialState, Object(redux_devtools_extension["composeWithDevTools"])(redux["applyMiddleware"].apply(void 0, middleware)));
/* harmony default export */ var src_store = (store);
// CONCATENATED MODULE: ./frontend/src/core/components/App.js
function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_extends() { App_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return App_extends.apply(this, arguments); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }

// DEPENDANCIES






 // SCENES







 // COMPONENTS




 // Alert Options

var alertOptions = {
  timeout: 3000,
  position: react_alert["positions"].TOP_CENTER,
  containerStyle: {
    zIndex: 5000
  }
};

var App_App =
/*#__PURE__*/
function (_Component) {
  App_inherits(App, _Component);

  function App() {
    App_classCallCheck(this, App);

    return App_possibleConstructorReturn(this, App_getPrototypeOf(App).apply(this, arguments));
  }

  App_createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      src_store.dispatch(auth_loadUser());
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement(es["Provider"], {
        store: src_store
      }, react_default.a.createElement(react_alert["Provider"], App_extends({
        template: react_alert_template_basic["default"]
      }, alertOptions), react_default.a.createElement(react_router_dom["HashRouter"], null, react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "d-flex flex-column h-100"
      }, react_default.a.createElement("div", {
        className: "qd-container--header"
      }, react_default.a.createElement(layout_Header, null)), react_default.a.createElement(layout_Alerts, null), react_default.a.createElement("div", {
        className: "qd-container--page",
        style: {
          minHeight: "fit-content"
        }
      }, react_default.a.createElement(react_router_dom["Switch"], null, react_default.a.createElement(utils_PrivateRoute, {
        exact: true,
        path: "/",
        component: home
      }), react_default.a.createElement(react_router_dom["Route"], {
        exact: true,
        path: "/register",
        component: scenes_register
      }), react_default.a.createElement(react_router_dom["Route"], {
        exact: true,
        path: "/login",
        component: scenes_login
      }), react_default.a.createElement(react_router_dom["Route"], {
        exact: true,
        path: "/",
        component: home
      }), react_default.a.createElement(react_router_dom["Route"], {
        exact: true,
        path: "/contact",
        component: contact
      }), react_default.a.createElement(utils_PrivateRoute, {
        path: "/boardroom/:id",
        component: boardRoom
      }), react_default.a.createElement(utils_PrivateRoute, {
        path: "/pillar/:dashboardId/:pillarId",
        component: scenes_pillarRoom
      }))))))));
    }
  }]);

  return App;
}(react["Component"]);

react_dom_default.a.render(react_default.a.createElement(App_App, null), document.getElementById("app"));
// CONCATENATED MODULE: ./frontend/src/index.js




/***/ })

/******/ });