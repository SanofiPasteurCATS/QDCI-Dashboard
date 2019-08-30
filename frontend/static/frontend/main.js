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
  !*** ./frontend/src/index.js + 52 modules ***!
  \********************************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@emotion/core/dist/core.browser.esm.js (<- Module is referenced from these modules with unsupported syntax: ./node_modules/react-spinners/CircleLoader.js (referenced with amd require), ./node_modules/react-spinners/PropagateLoader.js (referenced with amd require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/d3/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/date-fns/esm/format/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/date-fns/esm/parseISO/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-alert/dist/esm/react-alert.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-color/lib/index.js (<- Module is not an ECMAScript module) */
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

// CONCATENATED MODULE: ./frontend/src/actions/types.js
// Reference this list for action types
var GET_DASHBOARDS = "GET_DASHBOARDS";
var DELETE_DASHBOARD = "DELETE_DASHBOARD";
var ADD_DASHBOARD = "ADD_DASHBOARD";
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
// CONCATENATED MODULE: ./frontend/src/actions/messages.js
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
// CONCATENATED MODULE: ./frontend/src/actions/auth.js


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
// CONCATENATED MODULE: ./frontend/src/components/layout/Header.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// -----------------------------------------------------------------------------
//                           HEADER COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
// -----------------------------------------------------------------------------





/**
 * Header component for the site
 */

var Header_Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      var currentDashboard = this.props.currentDashboard;
      var authLinks = react_default.a.createElement("ul", {
        className: "navbar-nav ml-auto mt-2"
      }, react_default.a.createElement("span", {
        className: "navbar-text mr-3"
      }, react_default.a.createElement("strong", null, user ? "Welcome ".concat(user.username) : "")), react_default.a.createElement("li", {
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
        className: "navbar navbar-expand-lg navbar-light bg-light"
      }, react_default.a.createElement("div", {
        className: "container-fluid"
      }, react_default.a.createElement("a", {
        className: "navbar-brand",
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
        href: "#"
      }, "Browse")), react_default.a.createElement("li", {
        className: "nav-item"
      }, react_default.a.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "Contact an Admin"))), currentDashboard && react_default.a.createElement("h2", {
        className: "m-auto"
      }, currentDashboard.title), isAuthenticated ? authLinks : guestLinks)));
    }
  }]);

  return Header;
}(react["Component"]);

Header_Header.propTypes = {
  auth: prop_types_default.a.object.isRequired,
  logout: prop_types_default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    currentDashboard: state.dashboards.currentDashboard
  };
};

/* harmony default export */ var layout_Header = (Object(es["connect"])(mapStateToProps, {
  logout: auth_logout
})(Header_Header));
// CONCATENATED MODULE: ./frontend/src/actions/dashboards.js




/*---------------------------------------
          DASHBOARD ACTIONS
-----------------------------------------*/

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
      return dispatch(messages_returnErrors(err.response.data, err.response.status));
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
      return dispatch(messages_returnErrors(err.response.data, err.response.status));
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
      return dispatch(messages_returnErrors(err.response.data, err.response.status));
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
      return dispatch(messages_returnErrors(err.response.data, err.response.status));
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
      dispatch({
        type: ADD_SERIES,
        payload: res.data
      });
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
    axios_default.a.patch("/api/datapoint/".concat(id, "/"), datapoint, tokenConfig(getState)).then(function (res) {
      dispatch(messages_createMessage({
        updateDatapoint: "Datapoint Updated"
      }));
      dispatch({
        type: UPDATE_DATAPOINT,
        payload: res.data
      });
    });
  };
};
var dashboards_deleteDatapoint = function deleteDatapoint(id) {
  return function (dispatch, getState) {
    axios_default.a["delete"]("/api/datapoint/".concat(id, "/"), tokenConfig(getState)).then(function () {
      dispatch(messages_createMessage({
        deleteDatapoint: "Series Datapoint"
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
      dispatch({
        type: UPDATE_ACTION,
        payload: res.data
      });
    })["catch"](function (err) {
      return dispatch(messages_returnErrors(err.response.data, err.response.status));
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
// CONCATENATED MODULE: ./frontend/src/components/common/ui/DashboardDisplayCard.js
function DashboardDisplayCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashboardDisplayCard_typeof = function _typeof(obj) { return typeof obj; }; } else { DashboardDisplayCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashboardDisplayCard_typeof(obj); }

function DashboardDisplayCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashboardDisplayCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashboardDisplayCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashboardDisplayCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashboardDisplayCard_defineProperties(Constructor, staticProps); return Constructor; }

function DashboardDisplayCard_possibleConstructorReturn(self, call) { if (call && (DashboardDisplayCard_typeof(call) === "object" || typeof call === "function")) { return call; } return DashboardDisplayCard_assertThisInitialized(self); }

function DashboardDisplayCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DashboardDisplayCard_getPrototypeOf(o) { DashboardDisplayCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashboardDisplayCard_getPrototypeOf(o); }

function DashboardDisplayCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashboardDisplayCard_setPrototypeOf(subClass, superClass); }

function DashboardDisplayCard_setPrototypeOf(o, p) { DashboardDisplayCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashboardDisplayCard_setPrototypeOf(o, p); }






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
          deleteClick = _this$props.deleteClick;
      return react_default.a.createElement("div", {
        className: "card m-3"
      }, react_default.a.createElement("img", {
        className: "card-img-top",
        src: "https://via.placeholder.com/320x200.png",
        alt: "Card image cap"
      }), react_default.a.createElement("div", {
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
      })), react_default.a.createElement("p", {
        className: "card-text"
      }, "Author: ", dashboard.author, react_default.a.createElement("br", null), "Level: ", dashboard.level), react_default.a.createElement("div", {
        className: "d-flex"
      }, react_default.a.createElement(react_router_dom["Link"], {
        to: "/boardroom/".concat(dashboard.id),
        className: "btn btn-primary btn-sm"
      }, "View"), react_default.a.createElement("button", {
        onClick: function onClick() {
          return deleteClick("dashboard", dashboard.title);
        },
        className: "btn btn-danger btn-sm ml-auto"
      }, " ", "Delete"))));
    }
  }]);

  return DashboardDisplayCard;
}(react["Component"]);

/* harmony default export */ var ui_DashboardDisplayCard = (Object(es["connect"])(null, {
  deleteDashboard: dashboards_deleteDashboard
})(DashboardDisplayCard_DashboardDisplayCard));
// CONCATENATED MODULE: ./frontend/src/components/common/ui/NewDashboardCard.js


var NewDashboardCard_NewDashboardCard = function NewDashboardCard(props) {
  var handleClick = props.handleClick;
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
    className: " mt-5 im im-plus"
  }), react_default.a.createElement("h4", {
    className: "mt-2 mb-5"
  }, "New Dashboard")))));
};

/* harmony default export */ var ui_NewDashboardCard = (NewDashboardCard_NewDashboardCard);
// CONCATENATED MODULE: ./frontend/src/common/dashboardOptions.js
// Options for form-controls. This is a temp solution until I can pull the data directly from the database
var PLOT_TYPE_CHOICES = [{
  id: "li",
  name: "Connected Scatter Plot"
}];
var DASHBOARD_TYPE_CHOICES = [{
  id: 0,
  name: "QDCI Dashboard"
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
var PILLAR_CHOICES = [{
  id: "+",
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
var KPI_TABLE_HEADERS = [{
  name: "Name",
  prop: "name"
}, {
  name: "Pillar",
  prop: "pillar"
}, {
  name: "Frequency",
  prop: "frequency"
}, {
  name: "Safe Threshold",
  prop: "safe"
}, {
  name: "Danger Threshold",
  prop: "danger"
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
var DEFAULT_ACTION_TABLES = ["Short Term Action Plan", "Mid Term Action Plan", "Upper Level Escalations", "Lower Level Escalations"];
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
var ACTION_TABLE_DUMMY_DATA = [{
  letter: "Q",
  problem: "not enough sleep",
  root_cause: "Insomnia",
  solution: "take sleeping pills",
  leader: "Kyle",
  date: "24-OCT-2019"
}, {
  letter: "Q",
  problem: "Not enough coffee",
  root_cause: "coffe machine is broken",
  solution: "fix coffee machine",
  leader: "Kyle",
  date: "08-AUG-2019"
}, {
  letter: "I",
  problem: "Not enough GEMBAS",
  root_cause: "No legs",
  solution: "Get legs",
  leader: "Kyle",
  date: "03-SEP-2019"
}];
// EXTERNAL MODULE: ./node_modules/react-color/lib/index.js
var lib = __webpack_require__("./node_modules/react-color/lib/index.js");

// CONCATENATED MODULE: ./frontend/src/components/hompage/DashboardForm.js
function DashboardForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashboardForm_typeof = function _typeof(obj) { return typeof obj; }; } else { DashboardForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashboardForm_typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DashboardForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashboardForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashboardForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashboardForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashboardForm_defineProperties(Constructor, staticProps); return Constructor; }

function DashboardForm_possibleConstructorReturn(self, call) { if (call && (DashboardForm_typeof(call) === "object" || typeof call === "function")) { return call; } return DashboardForm_assertThisInitialized(self); }

function DashboardForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DashboardForm_getPrototypeOf(o) { DashboardForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashboardForm_getPrototypeOf(o); }

function DashboardForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashboardForm_setPrototypeOf(subClass, superClass); }

function DashboardForm_setPrototypeOf(o, p) { DashboardForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashboardForm_setPrototypeOf(o, p); }








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

    return DashboardForm_possibleConstructorReturn(_this, (_temp = _this = DashboardForm_possibleConstructorReturn(this, (_getPrototypeOf2 = DashboardForm_getPrototypeOf(DashboardForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      title: "",
      author: "",
      background: "",
      dashboardType: "0",
      level: "0"
    }, _this.onChange = function (e) {
      return _this.setState(_defineProperty({}, e.target.name, e.target.value));
    }, _this.onChangeColor = function (color) {
      _this.setState({
        background: color.hex
      });
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          title = _this$state.title,
          author = _this$state.author,
          background = _this$state.background,
          dashboardType = _this$state.dashboardType,
          level = _this$state.level;
      var dashboard = {
        title: title,
        author: author,
        background: background,
        dashboardType: dashboardType,
        level: level
      };

      _this.props.addDashboard(dashboard);

      _this.setState({
        title: "",
        author: "",
        background: "#0",
        level: ""
      });
    }, _temp));
  }

  DashboardForm_createClass(DashboardForm, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          title = _this$state2.title,
          author = _this$state2.author,
          background = _this$state2.background;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h2", null, "Create Dashboard"), react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement("div", {
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
        onChange: this.onChange,
        value: title
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "author"
      }, "Author"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "author",
        onChange: this.onChange,
        value: author
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "dashboardType"
      }, "Type"), react_default.a.createElement("select", {
        className: "form-control",
        type: "text",
        name: "dashboardType",
        onChange: this.onChange
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
        onChange: this.onChange
      }, LEVEL_CHOICES.map(function (choice) {
        return react_default.a.createElement("option", {
          key: choice.id,
          value: choice.id
        }, choice.name);
      })))), react_default.a.createElement("div", {
        className: "col-sm-5"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "color"
      }, "Background Color"), react_default.a.createElement(lib["ChromePicker"], {
        color: background,
        onChangeComplete: this.onChangeColor
      }))), react_default.a.createElement("div", {
        className: "col-sm-12"
      }, react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("button", {
        type: "submit",
        className: "btn\r btn-primary"
      }, "Submit"))))));
    }
  }]);

  return DashboardForm;
}(react["Component"]);

DashboardForm_DashboardForm.propTypes = {
  addDashboard: prop_types_default.a.func.isRequired
};
/* harmony default export */ var hompage_DashboardForm = (Object(es["connect"])(null, {
  addDashboard: dashboards_addDashboard
})(DashboardForm_DashboardForm));
// CONCATENATED MODULE: ./frontend/src/components/hompage/DashboardOptions.js



var DashboardOptions_DashboardOptions = function DashboardOptions(props) {
  return react_default.a.createElement("div", {
    className: "modal fade",
    id: "dashboardOptions",
    role: "dialog",
    "aria-labelledby": "dashboardOptionsLabel",
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
    id: "dashboardOptionsLabel"
  }, react_default.a.createElement("span", {
    className: "im im-computer",
    style: {
      fontSize: "".concat(2.5, "rem"),
      verticalAlign: "-0.1em"
    }
  }), "  ", "Create New Dashboard"), react_default.a.createElement("button", {
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
  }, react_default.a.createElement(hompage_DashboardForm, null)))))));
};

/* harmony default export */ var hompage_DashboardOptions = (DashboardOptions_DashboardOptions);
// CONCATENATED MODULE: ./frontend/src/components/common/ui/DeleteConfirmation.js
function DeleteConfirmation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DeleteConfirmation_typeof = function _typeof(obj) { return typeof obj; }; } else { DeleteConfirmation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DeleteConfirmation_typeof(obj); }

function DeleteConfirmation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DeleteConfirmation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DeleteConfirmation_createClass(Constructor, protoProps, staticProps) { if (protoProps) DeleteConfirmation_defineProperties(Constructor.prototype, protoProps); if (staticProps) DeleteConfirmation_defineProperties(Constructor, staticProps); return Constructor; }

function DeleteConfirmation_possibleConstructorReturn(self, call) { if (call && (DeleteConfirmation_typeof(call) === "object" || typeof call === "function")) { return call; } return DeleteConfirmation_assertThisInitialized(self); }

function DeleteConfirmation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DeleteConfirmation_getPrototypeOf(o) { DeleteConfirmation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DeleteConfirmation_getPrototypeOf(o); }

function DeleteConfirmation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DeleteConfirmation_setPrototypeOf(subClass, superClass); }

function DeleteConfirmation_setPrototypeOf(o, p) { DeleteConfirmation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DeleteConfirmation_setPrototypeOf(o, p); }




var DeleteConfirmation_DeletetionConformation =
/*#__PURE__*/
function (_Component) {
  DeleteConfirmation_inherits(DeletetionConformation, _Component);

  function DeletetionConformation() {
    DeleteConfirmation_classCallCheck(this, DeletetionConformation);

    return DeleteConfirmation_possibleConstructorReturn(this, DeleteConfirmation_getPrototypeOf(DeletetionConformation).apply(this, arguments));
  }

  DeleteConfirmation_createClass(DeletetionConformation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          deletionItem = _this$props.deletionItem,
          deletionName = _this$props.deletionName;
      return react_default.a.createElement("div", {
        className: "modal fade",
        id: "deletionConfirmation",
        role: "dialog",
        "aria-labelledby": "deletionConfirmationLabel",
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
        id: "deletionConfirmationLabel"
      }, react_default.a.createElement("span", {
        className: "im im-data-delete",
        style: {
          fontSize: "".concat(2.5, "rem"),
          verticalAlign: "-0.1em"
        }
      }), "  ", "Are you absolutely sure?"), react_default.a.createElement("button", {
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
      }, react_default.a.createElement("p", {
        className: "card-text"
      }, "This action cannot be undone. This will permanently delete the ".concat(deletionName, " ").concat(deletionItem, " and all associated data."), " "), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        "for": "password"
      }, "Please enter dashboard password"), react_default.a.createElement("input", {
        type: "password",
        className: "form-control"
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        "for": "name"
      }, "Please type in the name of the ".concat(deletionItem, " to confirm")), react_default.a.createElement("input", {
        type: "text",
        className: "form-control"
      })), react_default.a.createElement("div", {
        className: "form-check"
      }, react_default.a.createElement("input", {
        type: "checkbox",
        name: "export",
        className: "form-check-input"
      }), react_default.a.createElement("label", {
        "for": "export",
        className: "form-check-label mb-3"
      }, "Do you want to export data?")), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-warning"
      }, "I understand the consequences, delete this item")))))));
    }
  }]);

  return DeletetionConformation;
}(react["Component"]);

DeleteConfirmation_DeletetionConformation.propTypes = {
  deletionItem: prop_types_default.a.string.isRequired,
  deletionName: prop_types_default.a.string.isRequired
};
/* harmony default export */ var DeleteConfirmation = (DeleteConfirmation_DeletetionConformation);
// CONCATENATED MODULE: ./frontend/src/components/hompage/List.js
function List_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { List_typeof = function _typeof(obj) { return typeof obj; }; } else { List_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return List_typeof(obj); }

function List_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function List_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function List_createClass(Constructor, protoProps, staticProps) { if (protoProps) List_defineProperties(Constructor.prototype, protoProps); if (staticProps) List_defineProperties(Constructor, staticProps); return Constructor; }

function List_possibleConstructorReturn(self, call) { if (call && (List_typeof(call) === "object" || typeof call === "function")) { return call; } return List_assertThisInitialized(self); }

function List_getPrototypeOf(o) { List_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return List_getPrototypeOf(o); }

function List_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function List_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) List_setPrototypeOf(subClass, superClass); }

function List_setPrototypeOf(o, p) { List_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return List_setPrototypeOf(o, p); }











var List_List =
/*#__PURE__*/
function (_Component) {
  List_inherits(List, _Component);

  function List(props) {
    var _this;

    List_classCallCheck(this, List);

    _this = List_possibleConstructorReturn(this, List_getPrototypeOf(List).call(this, props));

    _this.newDashboardClick = function () {
      $("#dashboardOptions").modal("show");
    };

    _this.deleteClick = function (deletionItem, deletionName) {
      _this.setState({
        deletionItem: deletionItem,
        deletionName: deletionName
      });

      $("#deletionConfirmation").modal("show");
    };

    _this.state = {
      deletionItem: "",
      deletionName: ""
    };
    _this.deleteClick = _this.deleteClick.bind(List_assertThisInitialized(_this));
    return _this;
  }

  List_createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getDashboards();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          dashboards = _this$props.dashboards,
          deleteDashboard = _this$props.deleteDashboard;
      var _this$state = this.state,
          deletionItem = _this$state.deletionItem,
          deletionName = _this$state.deletionName;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "row"
      }, dashboards.map(function (dashboard) {
        return react_default.a.createElement("div", {
          key: dashboard.id,
          className: "col-lg-4 col-sm-12"
        }, react_default.a.createElement(ui_DashboardDisplayCard, {
          dashboard: dashboard,
          deleteClick: _this2.deleteClick
        }));
      }), react_default.a.createElement("div", {
        className: "col-lg-4 col-sm-12"
      }, react_default.a.createElement(ui_NewDashboardCard, {
        handleClick: this.newDashboardClick
      }))), react_default.a.createElement(hompage_DashboardOptions, null), react_default.a.createElement(DeleteConfirmation, {
        deletionItem: deletionItem,
        deletionName: deletionName
      }));
    }
  }]);

  return List;
}(react["Component"]);

List_List.propTypes = {
  dashboards: prop_types_default.a.array.isRequired,
  getDashboards: prop_types_default.a.func.isRequired,
  deleteDashboard: prop_types_default.a.func.isRequired
};

var List_mapStateToProps = function mapStateToProps(state) {
  return {
    dashboards: state.dashboards.dashboards
  };
};

/* harmony default export */ var hompage_List = (Object(es["connect"])(List_mapStateToProps, {
  getDashboards: dashboards_getDashboards,
  deleteDashboard: dashboards_deleteDashboard
})(List_List));
// CONCATENATED MODULE: ./frontend/src/components/hompage/dashboard.js
function dashboard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dashboard_typeof = function _typeof(obj) { return typeof obj; }; } else { dashboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dashboard_typeof(obj); }

function dashboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dashboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dashboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) dashboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) dashboard_defineProperties(Constructor, staticProps); return Constructor; }

function dashboard_possibleConstructorReturn(self, call) { if (call && (dashboard_typeof(call) === "object" || typeof call === "function")) { return call; } return dashboard_assertThisInitialized(self); }

function dashboard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dashboard_getPrototypeOf(o) { dashboard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dashboard_getPrototypeOf(o); }

function dashboard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dashboard_setPrototypeOf(subClass, superClass); }

function dashboard_setPrototypeOf(o, p) { dashboard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dashboard_setPrototypeOf(o, p); }








var dashboard_Dashboard =
/*#__PURE__*/
function (_Component) {
  dashboard_inherits(Dashboard, _Component);

  function Dashboard() {
    dashboard_classCallCheck(this, Dashboard);

    return dashboard_possibleConstructorReturn(this, dashboard_getPrototypeOf(Dashboard).apply(this, arguments));
  }

  dashboard_createClass(Dashboard, [{
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
      return react_default.a.createElement("div", null, react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "container"
      }, react_default.a.createElement(hompage_List, null))));
    }
  }]);

  return Dashboard;
}(react["Component"]);

/* harmony default export */ var hompage_dashboard = (Object(es["connect"])(null, {
  clearCurrentDashboard: dashboards_clearCurrentDashboard,
  clearActionTables: dashboards_clearActionTables
})(dashboard_Dashboard));
// CONCATENATED MODULE: ./frontend/src/components/layout/Alerts.js
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
        if (messages.updateKpi) alert.success(messages.updateKpi);
        if (messages.deleteKpi) alert.success(messages.deleteKpi);
        if (messages.updateActionTable) alert.success(messages.updateActionTable);
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

// CONCATENATED MODULE: ./frontend/src/reducers/dashboards.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { dashboards_defineProperty(target, key, source[key]); }); } return target; }

function dashboards_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initalState = {
  dashboards: [],
  kpis: [],
  currentDashboard: null,
  actionTables: []
};
/* harmony default export */ var reducers_dashboards = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_A_DASHBOARD:
      return _objectSpread({}, state, {
        currentDashboard: action.payload
      });

    case GET_DASHBOARDS:
      return _objectSpread({}, state, {
        dashboards: action.payload
      });

    case DELETE_DASHBOARD:
      return _objectSpread({}, state, {
        dashboards: state.dashboards.filter(function (dashboard) {
          return dashboard.id !== action.payload;
        })
      });

    case ADD_DASHBOARD:
      return _objectSpread({}, state, {
        dashboards: [].concat(_toConsumableArray(state.dashboards), [action.payload])
      });

    case GET_KPIS:
      return _objectSpread({}, state, {
        kpis: action.payload
      });

    case ADD_KPI:
      return _objectSpread({}, state, {
        kpis: [].concat(_toConsumableArray(state.kpis), [action.payload])
      });

    case UPDATE_KPI:
      return _objectSpread({}, state, {
        kpis: state.kpis.map(function (kpi) {
          return kpi.id === action.payload.id ? action.payload : kpi;
        })
      });

    case DELETE_KPI:
      return _objectSpread({}, state, {
        kpis: state.kpis.filter(function (kpi) {
          return kpi.id !== action.payload;
        })
      });

    case CLEAR_KPIS:
      return _objectSpread({}, state, {
        kpis: []
      });

    case ADD_SERIES:
      console.log("added");
      var kpis = state.kpis.map(function (kpi) {
        if (kpi.id != action.payload.kpi) return kpi;
        var series = kpi.series;
        return _objectSpread({}, kpi, {
          series: [].concat(_toConsumableArray(series), [action.payload])
        });
      });
      return _objectSpread({}, state, {
        kpis: kpis
      });

    case UPDATE_SERIES:
      var kpis__ = state.kpis.map(function (kpi) {
        return _objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            if (series.id != action.payload.id) return series;else return action.payload;
          })
        });
      });
      return _objectSpread({}, state, {
        kpis: kpis__
      });

    case GET_SERIES:
      return _objectSpread({}, state, {
        series: action.payload
      });

    case DELETE_SERIES:
      var kpis_ = state.kpis.map(function (kpi) {
        return _objectSpread({}, kpi, {
          series: kpi.series.filter(function (series) {
            return series.id != action.payload;
          })
        });
      });
      return _objectSpread({}, state, {
        kpis: kpis_
      });

    case UPDATE_DATAPOINT:
      var kpis = state.kpis.map(function (kpi) {
        return _objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            if (series.id != action.payload.series) return series;
            return _objectSpread({}, series, {
              entries: series.entries.map(function (datapoint) {
                if (datapoint.id != action.payload.id) return datapoint;else return action.payload;
              })
            });
          })
        });
      });
      return _objectSpread({}, state, {
        kpis: kpis
      });

    case DELETE_DATAPOINT:
      var kpis = state.kpis.map(function (kpi) {
        return _objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            return _objectSpread({}, series, {
              entries: series.entries.filter(function (datapoint) {
                return datapoint != action.payload;
              })
            });
          })
        });
      });
      return _objectSpread({}, state, {
        kpis: kpis
      });

    case ADD_DATAPOINT:
      var kpis___ = state.kpis.map(function (kpi) {
        return _objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            if (series.id != action.payload.series) return series;else return _objectSpread({}, series, {
              entries: [].concat(_toConsumableArray(series.entries), [action.payload])
            });
          })
        });
      });
      return _objectSpread({}, state, {
        kpis: kpis___
      });

    case GET_ACTION_TABLE:
      return _objectSpread({}, state, {
        actionTables: action.payload
      });

    case ADD_ACTION:
      var actionTables = state.actionTables.map(function (at) {
        if (action.payload.tables.indexOf(at.id) == -1) return at;else return _objectSpread({}, at, {
          actions: [].concat(_toConsumableArray(at.actions), [action.payload])
        });
      });
      return _objectSpread({}, state, {
        actionTables: actionTables
      });

    case DELETE_ACTION:
      var actionTables = state.actionTables.map(function (at) {
        return _objectSpread({}, at, {
          actions: at.actions.filter(function (act) {
            return act.id != action.payload;
          })
        });
      });
      return _objectSpread({}, state, {
        actionTables: actionTables
      });

    case UPDATE_ACTION:
      var actionTables = state.actionTables.map(function (at) {
        return _objectSpread({}, at, {
          actions: at.actions.map(function (act) {
            if (act.id != action.payload.id) return act;else return action.payload;
          })
        });
      });
      return _objectSpread({}, state, {
        actionTables: actionTables
      });

    case UPDATE_ACTION_TABLE:
      var actionTables = state.actionTables.map(function (at) {
        if (at.id != action.payload.id) return at;else return action.payload;
      });
      return _objectSpread({}, state, {
        actionTables: actionTables
      });

    case CLEAR_CURRENT_DASHBOARD:
      return _objectSpread({}, state, {
        actionTables: []
      });

    case CLEAR_ACTION_TABLES:
      return _objectSpread({}, state, {
        currentDashboard: null
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./frontend/src/reducers/errors.js

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
// CONCATENATED MODULE: ./frontend/src/reducers/messages.js

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
// CONCATENATED MODULE: ./frontend/src/reducers/auth.js
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
// CONCATENATED MODULE: ./frontend/src/reducers/index.js





/* harmony default export */ var reducers = (Object(redux["combineReducers"])({
  dashboards: reducers_dashboards,
  errors: errors,
  messages: messages,
  auth: reducers_auth
}));
// CONCATENATED MODULE: ./frontend/src/store.js




var store_initialState = {};
var middleware = [redux_thunk_es["default"]];
var store = Object(redux["createStore"])(reducers, store_initialState, Object(redux_devtools_extension["composeWithDevTools"])(redux["applyMiddleware"].apply(void 0, middleware)));
/* harmony default export */ var src_store = (store);
// CONCATENATED MODULE: ./frontend/src/components/accounts/login.js
function login_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { login_typeof = function _typeof(obj) { return typeof obj; }; } else { login_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return login_typeof(obj); }

function login_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function login_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function login_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function login_createClass(Constructor, protoProps, staticProps) { if (protoProps) login_defineProperties(Constructor.prototype, protoProps); if (staticProps) login_defineProperties(Constructor, staticProps); return Constructor; }

function login_possibleConstructorReturn(self, call) { if (call && (login_typeof(call) === "object" || typeof call === "function")) { return call; } return login_assertThisInitialized(self); }

function login_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function login_getPrototypeOf(o) { login_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return login_getPrototypeOf(o); }

function login_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) login_setPrototypeOf(subClass, superClass); }

function login_setPrototypeOf(o, p) { login_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return login_setPrototypeOf(o, p); }

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
  login_inherits(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _temp, _this;

    login_classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return login_possibleConstructorReturn(_this, (_temp = _this = login_possibleConstructorReturn(this, (_getPrototypeOf2 = login_getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
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
      _this.setState(login_defineProperty({}, e.target.name, e.target.value));
    }, _temp));
  }

  login_createClass(Login, [{
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

var login_mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ var accounts_login = (Object(es["connect"])(login_mapStateToProps, {
  login: auth_login
})(login_Login));
// CONCATENATED MODULE: ./frontend/src/components/accounts/register.js
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
//                            LOGIN COMPONENT
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
      }, "Register")), react_default.a.createElement("p", null, "Already have an account? ", react_default.a.createElement(react_router_dom["Link"], {
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

/* harmony default export */ var accounts_register = (Object(es["connect"])(register_mapStateToProps, {
  register: auth_register,
  createMessage: messages_createMessage
})(register_Register));
// EXTERNAL MODULE: ./node_modules/react-spinners/PropagateLoader.js
var PropagateLoader = __webpack_require__("./node_modules/react-spinners/PropagateLoader.js");

// EXTERNAL MODULE: ./node_modules/react-spinners/CircleLoader.js
var CircleLoader = __webpack_require__("./node_modules/react-spinners/CircleLoader.js");
var CircleLoader_default = /*#__PURE__*/__webpack_require__.n(CircleLoader);

// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 5 modules
var core_browser_esm = __webpack_require__("./node_modules/@emotion/core/dist/core.browser.esm.js");

// CONCATENATED MODULE: ./frontend/src/components/common/style-config.js
// COLORS
var primary_color = "#EEEEEE";
var secondary_color = "#EEEEEE";
var accent_color = "#437bb7";
// CONCATENATED MODULE: ./frontend/src/components/layout/LoadingScreen.js





var override =  false ? undefined : {
  name: "qdsigz-override",
  styles: "display:flex;margin:0 auto 20px auto;justify-content:center;align-items:center;label:override;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdGhhdGNcXERvY3VtZW50c1xccWRjaV9lbnZpcm9tZW50XFxxZGNpX3Byb2plY3RcXGZyb250ZW5kXFxzcmNcXGNvbXBvbmVudHNcXGxheW91dFxcTG9hZGluZ1NjcmVlbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNb0IiLCJmaWxlIjoiQzpcXFVzZXJzXFx0aGF0Y1xcRG9jdW1lbnRzXFxxZGNpX2Vudmlyb21lbnRcXHFkY2lfcHJvamVjdFxcZnJvbnRlbmRcXHNyY1xcY29tcG9uZW50c1xcbGF5b3V0XFxMb2FkaW5nU2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcGFnYXRlTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9Qcm9wYWdhdGVMb2FkZXJcIjtcclxuaW1wb3J0IENpcmNsZUxvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvQ2lyY2xlTG9hZGVyXCI7XHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XHJcbmltcG9ydCB7IGFjY2VudF9jb2xvciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9zdHlsZS1jb25maWdcIjtcclxuXHJcbmNvbnN0IG92ZXJyaWRlID0gY3NzYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMjBweCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtLWF1dG9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtY2VudGVyIG10LTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8Q2lyY2xlTG9hZGVyXHJcbiAgICAgICAgICAgIHNpemVVbml0PXtcInB4XCJ9XHJcbiAgICAgICAgICAgIHNpemU9ezYwfVxyXG4gICAgICAgICAgICBjc3M9e292ZXJyaWRlfVxyXG4gICAgICAgICAgICBjb2xvcj17YWNjZW50X2NvbG9yfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46IDAgfX0+TG9hZGluZzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */"
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
    color: accent_color
  }), react_default.a.createElement("h1", {
    style: {
      margin: 0
    }
  }, "Loading"))));
});
// EXTERNAL MODULE: ./node_modules/d3/index.js + 515 modules
var d3 = __webpack_require__("./node_modules/d3/index.js");

// EXTERNAL MODULE: ./node_modules/react-faux-dom/lib/ReactFauxDOM.js
var ReactFauxDOM = __webpack_require__("./node_modules/react-faux-dom/lib/ReactFauxDOM.js");

// CONCATENATED MODULE: ./frontend/src/components/common/d3charts/pillar.js
function pillar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pillar_typeof = function _typeof(obj) { return typeof obj; }; } else { pillar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pillar_typeof(obj); }

function pillar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pillar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pillar_createClass(Constructor, protoProps, staticProps) { if (protoProps) pillar_defineProperties(Constructor.prototype, protoProps); if (staticProps) pillar_defineProperties(Constructor, staticProps); return Constructor; }

function pillar_possibleConstructorReturn(self, call) { if (call && (pillar_typeof(call) === "object" || typeof call === "function")) { return call; } return pillar_assertThisInitialized(self); }

function pillar_getPrototypeOf(o) { pillar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pillar_getPrototypeOf(o); }

function pillar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pillar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pillar_setPrototypeOf(subClass, superClass); }

function pillar_setPrototypeOf(o, p) { pillar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pillar_setPrototypeOf(o, p); }

// -----------------------------------------------------------------------------
//                           PILLAR COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
// -----------------------------------------------------------------------------





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
      if (this.props.kpis !== prevProps.kpis) {
        this.updateD3();
      }
    } // Renders svg markup in the chart props

  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        style: {
          margin: "".concat(10, "px ", 0)
        }
      }, this.props.chart);
    } // Renders D3 chart to the faux DOM

  }, {
    key: "renderD3",
    value: function renderD3() {
      var faux = this.props.connectFauxDOM("svg", "chart");
      var plotSize = 200;
      var _this$props = this.props,
          letter = _this$props.letter,
          dashboardId = _this$props.dashboardId,
          labeled = _this$props.labeled;
      var radius = plotSize / xFactor;
      var labelScale = labeled ? 0.4 : 1;
      var svg = d3["select"](faux).attr("id", "chartPillar").attr("xmlns", "http://www.w3.org/2000/svg").attr("xmlnsXlink", "http://www.w3.org/1999/xlink").attr("viewBox", "0 0 ".concat(plotSize, " ").concat(plotSize)).attr("preserveAspectRatio", "xMidYMid meet").classed("svg-content", true);
      var link = svg.append("a").attr("href", "#/pillar/".concat(dashboardId, "/").concat(letter)).style("text-decoration", "none");
      var img = link.append("circle").attr("cx", plotSize / 2).attr("cy", plotSize / 2).attr("alignment-baseline", "middle").attr("r", 0).style("fill", accent_color).attr("id", "circle").transition().duration(800).attr("r", radius - plotSize / (50 * labelScale));
      this.props.animateFauxDOM(800);
      link.append("text").text(letter).attr("dx", "50%").attr("dy", "52%").attr("id", "text").attr("text-anchor", "middle").attr("alignment-baseline", "middle").style("fill", primary_color).style("font-size", plotSize / 2.9).style("text-decoration", "none");
    } // Handles all D3 updates caused by changes to dataset

  }, {
    key: "updateD3",
    value: function updateD3() {
      var _this$props2 = this.props,
          kpis = _this$props2.kpis,
          letter = _this$props2.letter,
          labeled = _this$props2.labeled;
      var plotSize = 200;
      var radius = plotSize / xFactor;
      var count = kpis.length;
      var labelOffset = labeled ? -1 : 0;
      var labelScale = labeled ? 0.9 : 1;
      var parseTime = d3["timeParse"]("%Y-%m-%d");
      var formatTime = d3["timeFormat"]("%b");

      for (var y in kpis) {
        for (var x in kpis[y].series) {
          var series = kpis[y].series[x].entries;
          series.sort(function (a, b) {
            if (!a.date && b.date) return 1;
            if (a.date && !b.date) return -1;
            if (!a.date && !b.date) return 0;else return new Date(a.date) - new Date(b.date);
          });
        }
      }

      var pie = d3["pie"]().sort(null).value(function (d) {
        return 1;
      });
      var arc = d3["arc"]().cornerRadius(2).padAngle(0.6).padRadius(3);
      var labelArc = d3["arc"]().innerRadius(radius * 0.84 + plotSize * labelScale / 21 * (count - 1) * 1.0 + 15).outerRadius(radius * 0.84 + plotSize * labelScale / 20 * (count - 1) * 1.3 + 15).cornerRadius(2).padAngle(0.05).padRadius(80);
      var faux = this.props.connectFauxDOM("svg", "chart");
      d3["select"](faux).select("#circle");
      d3["select"](faux).select("#text").text(letter);
      var pathBind = d3["select"](faux).selectAll(".kpi").data(kpis);
      pathBind.exit().remove();
      var pathEnter = pathBind.enter().append("g").attr("class", "kpi").merge(pathBind).attr("data-index", function (d, i) {
        return i;
      }).attr("data-safe", function (d) {
        return d.safe;
      }).attr("data-danger", function (d) {
        return d.danger;
      }).attr("transform", "translate(".concat(plotSize / 2, ",").concat(plotSize / 2, ")"));
      this.props.animateFauxDOM(800);
      pathEnter.selectAll(".ring").remove();
      var ring = pathEnter.selectAll(".ring");
      var ringBind = ring.data(function (d) {
        return pie(d.series[0] ? d.series[0].entries : []);
      });
      ringBind.enter().append("path").attr("class", "ring").attr("id", function (d) {
        return "ring_" + d.data.id;
      }).attr("d", function (d, i, j) {
        var index = $(j)[i].parentNode.getAttribute("data-index");
        return arc.outerRadius(radius + plotSize * labelScale / 16 * (index + 1 + labelOffset)).innerRadius(radius + plotSize * labelScale / 16 * (index + labelOffset) + 4)(d);
      }).on("mouseover", function (d) {
        d3["select"]("#ring_".concat(d.data.id)).style("stroke", "#000").attr("stroke-width", "1");
      }).on("mouseout", function (d) {
        d3["select"]("#ring_".concat(d.data.id)).style("stroke", "none");
      }).merge(ringBind).style("fill", function (d, i, j) {
        var safe = $(j)[i].parentNode.getAttribute("data-safe");
        var danger = $(j)[i].parentNode.getAttribute("data-danger");
        var color = "rgba(0,0,0,0.05)";
        var deviation = Math.abs(d.data.value / d.data.target - 1);
        if (d.data.value == null) return color;
        if (deviation < safe) color = "green";else if (deviation > safe && deviation < danger) color = "orange";else color = "red";
        return color;
      });
      d3["select"](faux).selectAll(".label").remove();

      if (kpis[count - 1] && labeled && kpis[count - 1].series[0]) {
        var labels = d3["select"](faux).selectAll(".label").data(pie(kpis[count - 1].series[0].entries)).enter().append("text").text(function (d) {
          if (d.data.date) return formatTime(parseTime(d.data.date));else return "";
        }).attr("class", "label").attr("transform", function (d) {
          var pos = labelArc.centroid(d);
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // ABSOLUTE VALUES! ToDo: Change to relative!

          pos[0] += 100;
          pos[1] += 102;
          return "translate(".concat(pos, ")");
        }).style("font-size", "0.5rem").style("text-anchor", function (d) {
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          return midangle < Math.PI ? "start" : "end";
        }).style("fill", accent_color);
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
  labeled: prop_types_default.a.bool
};
pillar_Pillar.defaultProps = {
  chart: "loading",
  labeled: false
};
/* harmony default export */ var d3charts_pillar = (Object(ReactFauxDOM["withFauxDOM"])(pillar_Pillar));
// CONCATENATED MODULE: ./frontend/src/components/boardroom/PillarBar.js
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
    kpis: filterKpis("+"),
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
/* harmony default export */ var boardroom_PillarBar = (PillarBar_PillarBar);
// EXTERNAL MODULE: ./node_modules/react-datepicker/es/index.js
var react_datepicker_es = __webpack_require__("./node_modules/react-datepicker/es/index.js");

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.css");

// CONCATENATED MODULE: ./frontend/src/components/common/ui/table/Row.js
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
          }) : _this2.props.data[y.prop] != null ? _this2.props.data[y.prop] : "NULL");
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
          }) : _this2.props.data[y.prop] != null ? _this2.props.data[y.prop] : "NULL");
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
        }, _this2.props.data[y.prop] != null ? _this2.props.data[y.prop] : "NULL");
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
// EXTERNAL MODULE: ./node_modules/react-tooltip/dist/index.js
var dist = __webpack_require__("./node_modules/react-tooltip/dist/index.js");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./frontend/src/components/common/ui/table/Table.js
function Table_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Table_typeof = function _typeof(obj) { return typeof obj; }; } else { Table_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Table_typeof(obj); }

function Table_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Table_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Table_createClass(Constructor, protoProps, staticProps) { if (protoProps) Table_defineProperties(Constructor.prototype, protoProps); if (staticProps) Table_defineProperties(Constructor, staticProps); return Constructor; }

function Table_possibleConstructorReturn(self, call) { if (call && (Table_typeof(call) === "object" || typeof call === "function")) { return call; } return Table_assertThisInitialized(self); }

function Table_getPrototypeOf(o) { Table_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Table_getPrototypeOf(o); }

function Table_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Table_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Table_setPrototypeOf(subClass, superClass); }

function Table_setPrototypeOf(o, p) { Table_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Table_setPrototypeOf(o, p); }







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
          fontSize: 1 + "rem"
        },
        onClick: this.handleInsert
      }))) : react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "column"
      }, summary && react_default.a.createElement("h5", {
        className: "subtitle d-inline"
      }, "Showing ", react_default.a.createElement("strong", null, data.length), " items"), appendable && react_default.a.createElement("i", {
        className: "im im-plus co-primary icon d-line ml-3 pb-1",
        style: {
          lineHeight: 1.5,
          verticalAlign: "middle",
          fontSize: 1 + "rem"
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
  return "_" + Math.random().toString(36).substr(2, 9);
};

Table_Table.defaultProps = {
  editable: false,
  update: null,
  "delete": null,
  fontSize: 1 + "rem",
  summary: true,
  deletable: false
};
/* harmony default export */ var table_Table = (Table_Table);
// CONCATENATED MODULE: ./frontend/src/components/boardroom/actionPlans/ActionTable.js
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
/* harmony default export */ var actionPlans_ActionTable = (Object(es["connect"])(null, {
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
// CONCATENATED MODULE: ./frontend/src/components/common/ui/DashboardCard.js



var DashboardCard_DashboardCard = function DashboardCard(props) {
  var dashboard = props.dashboard,
      selection = props.selection,
      handleClick = props.handleClick;
  var highlighted = selection == dashboard.id ? {
    border: "2px" + " solid " + accent_color
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
  }, "Author: ", dashboard.author, react_default.a.createElement("br", null), "Level: ", dashboard.level)));
};

/* harmony default export */ var ui_DashboardCard = (DashboardCard_DashboardCard);
// CONCATENATED MODULE: ./frontend/src/components/boardroom/actionPlans/EscalationsOptions.js
function EscalationsOptions_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EscalationsOptions_typeof = function _typeof(obj) { return typeof obj; }; } else { EscalationsOptions_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EscalationsOptions_typeof(obj); }

function EscalationsOptions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EscalationsOptions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EscalationsOptions_createClass(Constructor, protoProps, staticProps) { if (protoProps) EscalationsOptions_defineProperties(Constructor.prototype, protoProps); if (staticProps) EscalationsOptions_defineProperties(Constructor, staticProps); return Constructor; }

function EscalationsOptions_possibleConstructorReturn(self, call) { if (call && (EscalationsOptions_typeof(call) === "object" || typeof call === "function")) { return call; } return EscalationsOptions_assertThisInitialized(self); }

function EscalationsOptions_getPrototypeOf(o) { EscalationsOptions_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EscalationsOptions_getPrototypeOf(o); }

function EscalationsOptions_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EscalationsOptions_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EscalationsOptions_setPrototypeOf(subClass, superClass); }

function EscalationsOptions_setPrototypeOf(o, p) { EscalationsOptions_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EscalationsOptions_setPrototypeOf(o, p); }








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
          border: "2px solid ".concat(accent_color)
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
  actionTable: prop_types_default.a.isRequired,
  dashboards: prop_types_default.a.isRequired,
  currentDashboard: prop_types_default.a.isRequired
};
/* harmony default export */ var EscalationsOptions = (Object(es["connect"])(null, {
  updateActionTable: dashboards_updateActionTable
})(EscalationsOptions_EscalationOptions));
// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var parseISO = __webpack_require__("./node_modules/date-fns/esm/parseISO/index.js");

// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 28 modules
var format = __webpack_require__("./node_modules/date-fns/esm/format/index.js");

// CONCATENATED MODULE: ./frontend/src/components/boardroom/actionPlans/ActionForm.js
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

// -----------------------------------------------------------------------------
//                             Action Form
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
    }, _this.onUpdate = function (hook) {
      hook();
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
      newAction.date = Object(format["default"])(date, "yyyy-MM-dd");
      updateAction(newAction, action.id);

      _this.setState({
        letter: "",
        problem: "",
        root_cause: "",
        solution: "",
        leader: "",
        date: Object(parseISO["default"])("2019-01-01")
      });
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
      var _this2 = this;

      var action = this.props.action;

      if (prevProps.action !== action) {
        if (!action) return;
        this.onUpdate(function () {
          _this2.setState({
            letter: action.letter || "",
            problem: action.problem || "",
            root_cause: action.root_cause || "",
            solution: action.solution || "",
            leader: action.leader || "",
            date: action.date ? Object(parseISO["default"])(action.date) : new Date()
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

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
        value: letter
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
      }, "Submit")))));
    }
  }]);

  return ActionForm;
}(react["Component"]);

ActionForm_ActionForm.propTypes = {
  action: prop_types_default.a.object.isRequired,
  updateAction: prop_types_default.a.func.isRequired,
  deleteAction: prop_types_default.a.func.isRequired
};
/* harmony default export */ var actionPlans_ActionForm = (Object(es["connect"])(null, {
  updateAction: dashboards_updateAction,
  deleteAction: dashboards_deleteAction
})(ActionForm_ActionForm));
// CONCATENATED MODULE: ./frontend/src/components/boardroom/actionPlans/ActionOptions.js




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
  }, react_default.a.createElement(actionPlans_ActionForm, {
    action: action
  })))))));
};

ActionOptions_ActionOptions.propTypes = {
  action: prop_types_default.a.object
};
/* harmony default export */ var actionPlans_ActionOptions = (ActionOptions_ActionOptions);
// CONCATENATED MODULE: ./frontend/src/components/boardroom/actionPlans/ActionPlan.js
function ActionPlan_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionPlan_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionPlan_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionPlan_typeof(obj); }

function ActionPlan_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionPlan_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionPlan_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionPlan_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionPlan_defineProperties(Constructor, staticProps); return Constructor; }

function ActionPlan_possibleConstructorReturn(self, call) { if (call && (ActionPlan_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionPlan_assertThisInitialized(self); }

function ActionPlan_getPrototypeOf(o) { ActionPlan_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionPlan_getPrototypeOf(o); }

function ActionPlan_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ActionPlan_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionPlan_setPrototypeOf(subClass, superClass); }

function ActionPlan_setPrototypeOf(o, p) { ActionPlan_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionPlan_setPrototypeOf(o, p); }










var ActionPlan_ActionPlan =
/*#__PURE__*/
function (_Component) {
  ActionPlan_inherits(ActionPlan, _Component);

  function ActionPlan(props) {
    var _this;

    ActionPlan_classCallCheck(this, ActionPlan);

    _this = ActionPlan_possibleConstructorReturn(this, ActionPlan_getPrototypeOf(ActionPlan).call(this, props));
    _this.rowClick = _this.rowClick.bind(ActionPlan_assertThisInitialized(_this));
    _this.state = {
      currentActionId: null
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
    key: "rowClick",
    value: function rowClick(id) {
      this.setState({
        currentActionId: id
      });
      $("#actionOptions").modal("show");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tables = _this$props.tables,
          dashboards = _this$props.dashboards,
          currentDashboard = _this$props.currentDashboard;
      var currentActionId = this.state.currentActionId;
      var actionQuery = tables.map(function (table) {
        return table.actions.filter(function (action) {
          return action.id === currentActionId;
        });
      }).flat();
      var currentAction = actionQuery ? actionQuery[0] : null;
      var ul = this.filterTables("Upper Level Escalation");
      var ll = this.filterTables("Lower Level Feed");
      var lt = this.filterTables("Long Term Action Plan");
      var st = this.filterTables("Short Term Action Plan");
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(actionPlans_ActionOptions, {
        action: currentAction
      }), react_default.a.createElement("div", {
        className: "row"
      }, react_default.a.createElement("div", {
        className: "col-lg-6"
      }, react_default.a.createElement("div", {
        className: "card m-4"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, st ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h3", null, " Short Term Action Plan"), react_default.a.createElement(actionPlans_ActionTable, {
        data: st,
        header: ACTION_TABLE_HEADERS,
        appendable: true,
        rowClick: this.rowClick
      })) : react_default.a.createElement(LoadingScreen, null), lt ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h3", {
        className: "mt-3"
      }, " Long Term Action Plan"), react_default.a.createElement(actionPlans_ActionTable, {
        data: lt,
        header: ACTION_TABLE_HEADERS,
        appendable: true,
        rowClick: this.rowClick
      })) : react_default.a.createElement(LoadingScreen, null)))), react_default.a.createElement("div", {
        className: "col-lg-6"
      }, react_default.a.createElement("div", {
        className: "card m-4"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, ul ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "row",
        style: {
          padding: "0 1rem"
        }
      }, react_default.a.createElement("div", {
        style: {
          fontSize: 1.75 + "rem",
          fontWeight: 500
        }
      }, " ", "Upper Level Escalation"), react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary btn-sm mb-1 ml-auto",
        "data-toggle": "modal",
        "data-target": "#escalationOptions"
      }, "Manage Escalations")), react_default.a.createElement(actionPlans_ActionTable, {
        data: ul,
        header: ACTION_TABLE_HEADERS,
        appendable: true,
        rowClick: this.rowClick
      }), react_default.a.createElement(EscalationsOptions, {
        dashboards: dashboards,
        currentDashboard: currentDashboard,
        actionTable: this.filterTables("Upper Level Escalation")
      })) : react_default.a.createElement(LoadingScreen, null), ll ? react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("h3", {
        className: "mt-3"
      }, " Lower Level Feed"), react_default.a.createElement(actionPlans_ActionTable, {
        data: ll,
        header: ACTION_TABLE_HEADERS,
        hoverable: true
      })) : react_default.a.createElement(LoadingScreen, null))))));
    }
  }]);

  return ActionPlan;
}(react["Component"]);

ActionPlan_ActionPlan.propTypes = {
  tables: prop_types_default.a.array.isRequired,
  dashboards: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired,
  currentDashboard: prop_types_default.a.object.isRequired
};

var ActionPlan_mapStateToProps = function mapStateToProps(state) {
  return {
    currentDashboard: state.dashboards.currentDashboard
  };
};

/* harmony default export */ var actionPlans_ActionPlan = (Object(es["connect"])(ActionPlan_mapStateToProps)(ActionPlan_ActionPlan));
// CONCATENATED MODULE: ./frontend/src/components/boardroom/boardroom.js
function boardroom_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { boardroom_typeof = function _typeof(obj) { return typeof obj; }; } else { boardroom_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return boardroom_typeof(obj); }

function boardroom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function boardroom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function boardroom_createClass(Constructor, protoProps, staticProps) { if (protoProps) boardroom_defineProperties(Constructor.prototype, protoProps); if (staticProps) boardroom_defineProperties(Constructor, staticProps); return Constructor; }

function boardroom_possibleConstructorReturn(self, call) { if (call && (boardroom_typeof(call) === "object" || typeof call === "function")) { return call; } return boardroom_assertThisInitialized(self); }

function boardroom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function boardroom_getPrototypeOf(o) { boardroom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return boardroom_getPrototypeOf(o); }

function boardroom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) boardroom_setPrototypeOf(subClass, superClass); }

function boardroom_setPrototypeOf(o, p) { boardroom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return boardroom_setPrototypeOf(o, p); }

// -----------------------------------------------------------------------------
//                         BOARDROOM COMPONENT
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








var boardroom_Boardroom =
/*#__PURE__*/
function (_Component) {
  boardroom_inherits(Boardroom, _Component);

  function Boardroom() {
    boardroom_classCallCheck(this, Boardroom);

    return boardroom_possibleConstructorReturn(this, boardroom_getPrototypeOf(Boardroom).apply(this, arguments));
  }

  boardroom_createClass(Boardroom, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          getADashboard = _this$props.getADashboard,
          getKpis = _this$props.getKpis,
          getActionTable = _this$props.getActionTable,
          getDashboards = _this$props.getDashboards; // Fetch data from server
      // Source of ALL data for boardroom

      var id = this.props.match.params.id;
      getDashboards();
      getADashboard(id);
      getActionTable(id);
      getKpis(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          currentDashboard = _this$props2.currentDashboard,
          kpis = _this$props2.kpis,
          actionTables = _this$props2.actionTables,
          dashboards = _this$props2.dashboards;
      var id = this.props.match.params.id; // If there is no current dashboard show the loading screen

      if (currentDashboard == null) {
        return react_default.a.createElement(LoadingScreen, null);
      }

      var color = currentDashboard.background;
      return react_default.a.createElement("div", null, react_default.a.createElement("div", {
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
        className: "col-lg-2"
      }, react_default.a.createElement("div", {
        className: "card card-body m-4"
      }, react_default.a.createElement(boardroom_PillarBar, {
        kpis: kpis,
        dashboardId: id
      }))), react_default.a.createElement("div", {
        className: "col-lg-10"
      }, react_default.a.createElement(actionPlans_ActionPlan, {
        tables: actionTables,
        dashboards: dashboards
      })))));
    }
  }]);

  return Boardroom;
}(react["Component"]);

boardroom_Boardroom.propTypes = {
  dashboards: prop_types_default.a.array,
  kpis: prop_types_default.a.array.isRequired,
  getDashboards: prop_types_default.a.func.isRequired,
  getADashboard: prop_types_default.a.func.isRequired,
  getKpis: prop_types_default.a.func.isRequired,
  getActionTable: prop_types_default.a.func.isRequired,
  currentDashboard: prop_types_default.a.object,
  actionTables: prop_types_default.a.arrayOf(prop_types_default.a.object).isRequired
};
boardroom_Boardroom.defaultProps = {
  dashboards: null,
  currentDashboard: null
};

var boardroom_mapStateToProps = function mapStateToProps(state) {
  return {
    dashboards: state.dashboards.dashboards,
    kpis: state.dashboards.kpis,
    isAuthenticated: state.auth.isAuthenticated,
    actionTables: state.dashboards.actionTables,
    currentDashboard: state.dashboards.currentDashboard
  };
};

/* harmony default export */ var boardroom = (Object(es["connect"])(boardroom_mapStateToProps, {
  getKpis: dashboards_getKpis,
  getDashboards: dashboards_getDashboards,
  getADashboard: dashboards_getADashboard,
  clearKpis: dashboards_clearKpis,
  getActionTable: dashboards_getActionTable
})(boardroom_Boardroom));
// CONCATENATED MODULE: ./frontend/src/components/common/PrivateRoute.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// -----------------------------------------------------------------------------
//                        PRIVATE ROUTE COMPONENT
//                      Organization: Sanofi Pasteur
//                         Author: Kyle Thatcher
//                           Date: 08JUL2019
// -----------------------------------------------------------------------------





/**
 * Component will check if user is authenticatd before preceding to mount component
 * @param {} param0
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
/* harmony default export */ var common_PrivateRoute = (Object(es["connect"])(PrivateRoute_mapStateToProps)(PrivateRoute_PrivateRoute));
// CONCATENATED MODULE: ./frontend/src/components/common/d3charts/LineChart.js
function LineChart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LineChart_typeof = function _typeof(obj) { return typeof obj; }; } else { LineChart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LineChart_typeof(obj); }

function LineChart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LineChart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LineChart_createClass(Constructor, protoProps, staticProps) { if (protoProps) LineChart_defineProperties(Constructor.prototype, protoProps); if (staticProps) LineChart_defineProperties(Constructor, staticProps); return Constructor; }

function LineChart_possibleConstructorReturn(self, call) { if (call && (LineChart_typeof(call) === "object" || typeof call === "function")) { return call; } return LineChart_assertThisInitialized(self); }

function LineChart_getPrototypeOf(o) { LineChart_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LineChart_getPrototypeOf(o); }

function LineChart_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function LineChart_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) LineChart_setPrototypeOf(subClass, superClass); }

function LineChart_setPrototypeOf(o, p) { LineChart_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LineChart_setPrototypeOf(o, p); }






var margin = {
  top: 10,
  right: 100,
  bottom: 30,
  left: 50
};
var width = 1100 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

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

      if (kpis !== prevProps.kpis || selectedKpi != prevProps.selectedKpi) {
        this.updateD3();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", null, this.props.chart);
    }
  }, {
    key: "renderD3",
    value: function renderD3() {
      var faux = this.props.connectFauxDOM("svg", "chart");
      var selectSeriesHook = this.props.selectSeriesHook;

      function highlightLine(id) {
        if (id == null) return;
        d3["selectAll"](".line").attr("stroke-width", 1.8);
        d3["selectAll"](".dot").attr("r", 3);
        d3["selectAll"](".dot_".concat(id)).attr("r", 5);
        d3["select"]("#line_".concat(id)).attr("stroke-width", 4.5);
        d3["selectAll"](".legend").attr("font-weight", "normal").attr("font-size", "17");
        d3["select"]("#legend_".concat(id)).attr("font-weight", "bold").attr("font-size", "20");
      }

      var svg = d3["select"](faux).attr("id", "chart").attr("viewBox", "0 0 ".concat(width + margin.left + margin.right, " ").concat(height + margin.bottom + margin.top)).attr("preserveAspectRatio", "xMidYMid meet").classed("svg-content", true).attr("xmlns", "http://www.w3.org/2000/svg").attr("xmlnsXlink", "http://www.w3.org/1999/xlink") // CSS Styles
      .style("margin", "20px 0").append("g").attr("id", "plotArea").attr("transform", "translate(".concat(margin.left + 30, ",").concat(margin.bottom, ")"));
      svg.append("rect").attr("width", width).attr("height", height).style("opacity", 0).attr("id", "facade").on("click", function () {
        highlightLine("null");
        selectSeriesHook(null);
      }); // Y-axis

      svg.append("g").attr("class", "myYaxis").style("color", "black").style("font-size", "0.8rem"); // X-axis

      svg.append("g").attr("class", "myXaxis").attr("transform", "translate(0, ".concat(height - margin.bottom, ")")).style("color", "black").style("font-size", "0.8rem"); // Y-axis Unit

      svg.append("text").attr("x", 0 - margin.left / 4).attr("y", 0 - margin.top).attr("id", "y_unit").text("$ CAD").style("fill", "black").attr("text-anchor", "middle").style("font-size", "15px"); // Title

      svg.append("text").attr("x", width / 2).attr("id", "title").attr("y", 0 - margin.top / 2).attr("text-anchor", "middle").style("text-decoration", "underline").style("font-size", "31px").attr("fill", accent_color);
    }
  }, {
    key: "updateD3",
    value: function updateD3() {
      var faux = this.props.connectFauxDOM("svg", "chart");
      var _this$props2 = this.props,
          kpis = _this$props2.kpis,
          selectSeriesHook = _this$props2.selectSeriesHook,
          animateFauxDOM = _this$props2.animateFauxDOM,
          selectedKpi = _this$props2.selectedKpi;
      var index = kpis.findIndex(function (kpi) {
        return kpi.id == selectedKpi;
      });
      index = index == -1 ? 0 : index;
      var data = kpis[index] ? kpis[index].series : [];
      var parseTime = d3["timeParse"]("%Y-%m-%d");

      function highlightLine(id, color) {
        d3["selectAll"](".line").attr("stroke-width", 1.8);
        d3["selectAll"](".dot").attr("r", 3);
        d3["selectAll"](".dot_".concat(id)).attr("r", 5);
        d3["select"]("#line_".concat(id)).attr("stroke-width", 4.5);
        d3["selectAll"](".legend").attr("font-weight", "normal").attr("font-size", "17");
        d3["select"]("#legend_".concat(id)).attr("font-weight", "bold").attr("font-size", "20");
      } // Sort by Date


      for (var x in data) {
        var series = data[x].entries;
        series.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        });
      } // In order to scale the axes must find minimum and maximum from all series


      var mins = [];

      for (var x in data) {
        mins.push(d3["min"](data[x].entries, function (d) {
          return d.value;
        }));
      }

      var maxs = [];

      for (var x in data) {
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

      var xScale = d3["scaleTime"]().domain([new Date("2019-01-01"), new Date("2019-12-31")]).range([0, width]);
      var yScale = d3["scaleLinear"]().domain(minimum.length ? [d3["min"](minimum) * 0.8, d3["max"](maximum) * 1.2] : [0, 100]).range([height - margin.bottom, 0]);
      var y_axis = d3["axisLeft"](yScale);
      var x_axis = d3["axisBottom"](xScale).tickFormat(d3["timeFormat"]("%b")); // Update the X_Axis

      d3["select"](faux).selectAll(".myXaxis").transition().duration(1000).call(x_axis); // Update the Y_Axis

      d3["select"](faux).selectAll(".myYaxis").transition().duration(1000).call(y_axis); // -----------------------------------------------------------------------------
      // LINES
      // -----------------------------------------------------------------------------

      var line = d3["line"]().y(function (d) {
        return yScale(d.value);
      }).defined(function (d) {
        return d.value;
      }).x(function (d) {
        return xScale(parseTime(d.date));
      });
      var s = d3["select"](faux).select("#plotArea").selectAll(".line");
      /*
      d3.select("#chartMsg").remove();
      if (!kpis[0]) {
        d3.select(faux)
          .select("#plotArea")
          .append("text")
          .attr("id", "chartMsg")
          .text("Please select a KPI")
          .style("fill", accent_color)
          .attr("font-size", 1.2 + "rem")
          .attr("y", height / 2)
          .attr("x", width / 2.3);
      } else if (!data.length) {
        d3.select(faux)
          .select("#plotArea")
          .append("text")
          .attr("id", "chartMsg")
          .text("You don't seem to have any Series for this KPI")
          .style("fill", accent_color)
          .attr("font-size", 1.2 + "rem")
          .attr("y", height / 2)
          .attr("x", width / 4);
      }
      */

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

      legend.append("text").attr("x", width - 12).attr("y", function (d, i) {
        return height / 2 + 20 * i;
      }).attr("id", function (d) {
        return "legend_".concat(d.id);
      }).attr("class", "legend").style("opacity", 1).style("cursor", "pointer").attr("dy", ".35em").attr("font-size", 17).attr("fill", function (d) {
        return d.color;
      }).style("text-anchor", "end").text(function (d) {
        return d.name;
      }).on("click", function (d) {
        highlightLine(d.id);
        selectSeriesHook(d.id);
      });
      d3["select"](faux).select("#title").text(function () {
        return kpis[index] ? kpis[index].name : "";
      });
      /*
      svg
        .select("#chart")
        .select("#y_unit")
        .text(context[i].units); */

      d3["select"](faux).select("#plotArea").selectAll("#curtain").remove();
      d3["select"](faux).select("#plotArea").append("rect").attr("id", "curtain").style("fill", "#ffffff").attr("x", 0).attr("width", width).attr("height", height - margin.bottom).transition().delay(500).ease(d3["easeExp"]).duration(4000).attr("x", width + 5);
      animateFauxDOM(9000);
    }
  }]);

  return LineChart;
}(react_default.a.Component);

LineChart_LineChart.propTypes = {
  kpis: prop_types_default.a.array.isRequired,
  selectSeriesHook: prop_types_default.a.func.isRequired,
  selectedKpi: prop_types_default.a.number
};
LineChart_LineChart.defaultProps = {
  chart: "loading",
  selectedKpi: null
};
/* harmony default export */ var d3charts_LineChart = (Object(ReactFauxDOM["withFauxDOM"])(LineChart_LineChart));
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/kpis/KpiForm.js
function KpiForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { KpiForm_typeof = function _typeof(obj) { return typeof obj; }; } else { KpiForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return KpiForm_typeof(obj); }

function KpiForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function KpiForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function KpiForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function KpiForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) KpiForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) KpiForm_defineProperties(Constructor, staticProps); return Constructor; }

function KpiForm_possibleConstructorReturn(self, call) { if (call && (KpiForm_typeof(call) === "object" || typeof call === "function")) { return call; } return KpiForm_assertThisInitialized(self); }

function KpiForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function KpiForm_getPrototypeOf(o) { KpiForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return KpiForm_getPrototypeOf(o); }

function KpiForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) KpiForm_setPrototypeOf(subClass, superClass); }

function KpiForm_setPrototypeOf(o, p) { KpiForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return KpiForm_setPrototypeOf(o, p); }







var KpiForm_KpiForm =
/*#__PURE__*/
function (_Component) {
  KpiForm_inherits(KpiForm, _Component);

  function KpiForm() {
    var _getPrototypeOf2;

    var _temp, _this;

    KpiForm_classCallCheck(this, KpiForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return KpiForm_possibleConstructorReturn(_this, (_temp = _this = KpiForm_possibleConstructorReturn(this, (_getPrototypeOf2 = KpiForm_getPrototypeOf(KpiForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      name: "",
      frequency: 0,
      safe: "",
      danger: "",
      dashboard: _this.props.dashboardId
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          addKpi = _this$props.addKpi,
          pillarId = _this$props.pillarId;
      var _this$state = _this.state,
          name = _this$state.name,
          frequency = _this$state.frequency,
          safe = _this$state.safe,
          danger = _this$state.danger,
          dashboard = _this$state.dashboard;
      var pillar = pillarId;
      var kpi = {
        name: name,
        pillar: pillar,
        danger: danger,
        safe: safe,
        frequency: frequency,
        dashboard: dashboard
      };
      addKpi(kpi);

      _this.setState({
        name: "",
        danger: "",
        safe: "",
        frequency: 0
      });
    }, _this.onChange = function (e) {
      _this.setState(KpiForm_defineProperty({}, e.target.name, e.target.value));
    }, _temp));
  }

  KpiForm_createClass(KpiForm, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          frequency = _this$state2.frequency,
          safe = _this$state2.safe,
          danger = _this$state2.danger;
      var pillarId = this.props.pillarId;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        noValidate: true
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
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "pillar"
      }, "Pillar"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "pillar",
        onChange: this.onChange,
        placeholder: "...",
        value: pillarId,
        required: true,
        disabled: true
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "frequency"
      }, "Frequency"), react_default.a.createElement("select", {
        className: "form-control",
        type: "text",
        name: "frequency",
        onChange: this.onChange,
        placeholder: "...",
        value: frequency,
        required: true
      }, FREQUENCY_CHOICES.map(function (choice) {
        return react_default.a.createElement("option", {
          key: "choice-".concat(choice.id),
          value: choice.id
        }, choice.name);
      }))), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "safe"
      }, "Safe Range"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "safe",
        onChange: this.onChange,
        placeholder: "...",
        value: safe,
        required: true
      })), react_default.a.createElement("div", {
        className: "form-group"
      }, react_default.a.createElement("label", {
        htmlFor: "danger"
      }, "Danger Range"), react_default.a.createElement("input", {
        className: "form-control",
        type: "text",
        name: "danger",
        onChange: this.onChange,
        placeholder: "...",
        value: danger,
        required: true
      })), react_default.a.createElement("div", {
        className: "modal-footer"
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal"
      }, "Close"), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Create Kpi"))));
    }
  }]);

  return KpiForm;
}(react["Component"]);

KpiForm_KpiForm.propTypes = {
  addKpi: prop_types_default.a.func.isRequired
};
/* harmony default export */ var kpis_KpiForm = (Object(es["connect"])(null, {
  addKpi: dashboards_addKpi
})(KpiForm_KpiForm));
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/kpis/KpiInfo.js


var KpiInfo_KpiInfo = function KpiInfo() {
  return react_default.a.createElement("div", {
    id: "info",
    className: "tab-pane fade show active"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, "KPIS"), react_default.a.createElement("p", {
    className: "card-text"
  }, "Here you can view and manage all your key preformance indicators. Each KPI is defined by the following fields."), react_default.a.createElement("h5", {
    className: "mt-4"
  }, react_default.a.createElement("i", {
    className: "im im-pencil mr-2"
  }), ' ', "Name"), react_default.a.createElement("p", {
    className: "card-text"
  }, " ", "- Give your KPIs distinct and informative labels"), react_default.a.createElement("h5", {
    className: "mt-4"
  }, react_default.a.createElement("i", {
    className: "im im-bank mr-2"
  }), ' ', "Pillar"), react_default.a.createElement("p", {
    className: "card-text"
  }, " - Defines which pillar the KPI belongs too."), react_default.a.createElement("h5", {
    className: "mt-4"
  }, " ", react_default.a.createElement("i", {
    className: "im im-date-o mr-2"
  }), ' ', "Frequency"), react_default.a.createElement("p", {
    className: "card-text"
  }, " ", "- Defines the frequency of measurement, ie, 12 for monthly or 52 for weekly"), react_default.a.createElement("h5", {
    className: "mt-4"
  }, react_default.a.createElement("i", {
    className: "im im-check-mark mr-2"
  }), ' ', "Safe Threshold"), react_default.a.createElement("p", {
    className: "card-text"
  }, " ", "- Defines the threshold for values which are considered within adequate range of the target", react_default.a.createElement("br", null), "- These values turn green"), react_default.a.createElement("h5", {
    className: "mt-4"
  }, react_default.a.createElement("i", {
    className: "im im-x-mark mr-2"
  }), ' ', "Danger Threshold"), react_default.a.createElement("p", {
    className: "card-text"
  }, " ", "- Defines the threshold for values which are not within adequate range of the target", ' ', react_default.a.createElement("br", null), "- These values will turn red and require actions"));
};

/* harmony default export */ var kpis_KpiInfo = (KpiInfo_KpiInfo);
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/kpis/KpiTable.js
function KpiTable_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { KpiTable_typeof = function _typeof(obj) { return typeof obj; }; } else { KpiTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return KpiTable_typeof(obj); }

function KpiTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function KpiTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function KpiTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) KpiTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) KpiTable_defineProperties(Constructor, staticProps); return Constructor; }

function KpiTable_possibleConstructorReturn(self, call) { if (call && (KpiTable_typeof(call) === "object" || typeof call === "function")) { return call; } return KpiTable_assertThisInitialized(self); }

function KpiTable_getPrototypeOf(o) { KpiTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return KpiTable_getPrototypeOf(o); }

function KpiTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function KpiTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) KpiTable_setPrototypeOf(subClass, superClass); }

function KpiTable_setPrototypeOf(o, p) { KpiTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return KpiTable_setPrototypeOf(o, p); }







var KpiTable_KpiTable =
/*#__PURE__*/
function (_Component) {
  KpiTable_inherits(KpiTable, _Component);

  function KpiTable(props) {
    var _this;

    KpiTable_classCallCheck(this, KpiTable);

    _this = KpiTable_possibleConstructorReturn(this, KpiTable_getPrototypeOf(KpiTable).call(this, props));
    _this.update = _this.update.bind(KpiTable_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(KpiTable_assertThisInitialized(_this));
    return _this;
  }

  KpiTable_createClass(KpiTable, [{
    key: "delete",
    value: function _delete(id) {
      this.props.deleteKpi(id);
    }
  }, {
    key: "update",
    value: function update(current, id) {
      this.props.updateKpi(current, id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          header = _this$props.header;
      return react_default.a.createElement(table_Table, {
        editable: true,
        data: data,
        header: header,
        update: this.update,
        "delete": this["delete"],
        deletable: true
      });
    }
  }]);

  return KpiTable;
}(react["Component"]);

KpiTable_KpiTable.propTypes = {
  data: prop_types_default.a.array.isRequired,
  header: prop_types_default.a.array.isRequired
};
/* harmony default export */ var kpis_KpiTable = (Object(es["connect"])(null, {
  updateKpi: dashboards_updateKpi,
  deleteKpi: dashboards_deleteKpi
})(KpiTable_KpiTable));
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/kpis/KpiOptions.js






var KpiOptions_KpiOptions = function KpiOptions(props) {
  var kpiCopy = [];

  for (var i in props.kpis) {
    var copy = {};
    var entry = props.kpis[i];
    copy.name = entry.name;
    copy.pillar = entry.pillar;
    copy.frequency = entry.frequency;
    copy.safe = entry.safe;
    copy.danger = entry.danger;
    copy.id = entry.id;
    kpiCopy.push(copy);
  }

  var pillarId = props.pillarId;
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    className: "modal fade",
    id: "kpiOptions",
    role: "dialog",
    "aria-labelledby": "kpiOptionsLabel",
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
    id: "kpiOptionsLabel"
  }, react_default.a.createElement("span", {
    className: "im im-dashboard",
    style: {
      fontSize: "".concat(2.5, "rem"),
      verticalAlign: "-0.1em"
    }
  }), "  ", "Manage KPIs"), react_default.a.createElement("button", {
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
    href: "#info"
  }, "Info")), react_default.a.createElement("li", {
    className: "nav-item"
  }, react_default.a.createElement("a", {
    className: "nav-link",
    "data-toggle": "tab",
    href: "#list"
  }, "View KPIs")), react_default.a.createElement("li", {
    className: "nav-item"
  }, react_default.a.createElement("a", {
    className: "nav-link",
    "data-toggle": "tab",
    href: "#add"
  }, "Add KPI")))), react_default.a.createElement("div", {
    className: "card-body"
  }, react_default.a.createElement("div", {
    className: "tab-content",
    style: {
      maxHeight: "".concat(550, "px"),
      overflow: "auto",
      overflowX: "auto"
    }
  }, react_default.a.createElement(kpis_KpiInfo, null), react_default.a.createElement("div", {
    id: "list",
    className: "tab-pane fade"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, "Your KPIs"), react_default.a.createElement(kpis_KpiTable, {
    data: kpiCopy,
    header: KPI_TABLE_HEADERS
  })), react_default.a.createElement("div", {
    id: "add",
    className: "tab-pane fade"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, "Create A New KPI"), react_default.a.createElement(kpis_KpiForm, {
    dashboardId: props.dashboardId,
    pillarId: pillarId
  }))))))))));
};

/* harmony default export */ var kpis_KpiOptions = (KpiOptions_KpiOptions);
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/series/SeriesInfo.js


var SeriesInfo_SeriesInfo = function SeriesInfo() {
  return react_default.a.createElement("div", {
    id: "infos",
    className: "tab-pane fade show active"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, "Series"), react_default.a.createElement("p", {
    className: "card-text"
  }, "Here you can view and manage all your series. Each Series is defined by the following fields."), react_default.a.createElement("h5", {
    className: "mt-4"
  }, react_default.a.createElement("i", {
    className: "im im-pencil mr-2"
  }), " Name"), react_default.a.createElement("p", {
    className: "card-text"
  }, " ", "- Give your Series distinct and informative labels"), react_default.a.createElement("h5", {
    className: "mt-4"
  }, " ", react_default.a.createElement("i", {
    className: "im im-flip-chart-o mr-2"
  }), " Plot Type"), react_default.a.createElement("p", {
    className: "card-text"
  }, " ", "- Defines the way which the series data is displayed"), react_default.a.createElement("h5", {
    className: "mt-4"
  }, react_default.a.createElement("i", {
    className: "im im-paintbrush mr-2"
  }), " Color"), react_default.a.createElement("p", {
    className: "card-text"
  }, " ", "- Give each series a distinct look with different colors"));
};

/* harmony default export */ var series_SeriesInfo = (SeriesInfo_SeriesInfo);
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/series/SeriesForm.js
function SeriesForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SeriesForm_typeof = function _typeof(obj) { return typeof obj; }; } else { SeriesForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SeriesForm_typeof(obj); }

function SeriesForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SeriesForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SeriesForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SeriesForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) SeriesForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) SeriesForm_defineProperties(Constructor, staticProps); return Constructor; }

function SeriesForm_possibleConstructorReturn(self, call) { if (call && (SeriesForm_typeof(call) === "object" || typeof call === "function")) { return call; } return SeriesForm_assertThisInitialized(self); }

function SeriesForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SeriesForm_getPrototypeOf(o) { SeriesForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SeriesForm_getPrototypeOf(o); }

function SeriesForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SeriesForm_setPrototypeOf(subClass, superClass); }

function SeriesForm_setPrototypeOf(o, p) { SeriesForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SeriesForm_setPrototypeOf(o, p); }








var SeriesForm_SeriesForm =
/*#__PURE__*/
function (_Component) {
  SeriesForm_inherits(SeriesForm, _Component);

  function SeriesForm() {
    var _getPrototypeOf2;

    var _temp, _this;

    SeriesForm_classCallCheck(this, SeriesForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return SeriesForm_possibleConstructorReturn(_this, (_temp = _this = SeriesForm_possibleConstructorReturn(this, (_getPrototypeOf2 = SeriesForm_getPrototypeOf(SeriesForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      name: "",
      color: "",
      plot_type: "li"
    }, _this.onChangeColor = function (color) {
      _this.setState({
        color: color.hex
      });
    }, _this.onSubmit = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          addSeries = _this$props.addSeries,
          kpi = _this$props.kpi;
      var _this$state = _this.state,
          name = _this$state.name,
          color = _this$state.color,
          plot_type = _this$state.plot_type;
      var series = {
        name: name,
        color: color,
        plot_type: plot_type,
        kpi: kpi
      };
      addSeries(series);

      _this.setState({
        name: "",
        color: "",
        plot_type: "li"
      });
    }, _this.onChange = function (e) {
      _this.setState(SeriesForm_defineProperty({}, e.target.name, e.target.value));
    }, _temp));
  }

  SeriesForm_createClass(SeriesForm, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          color = _this$state2.color,
          plot_type = _this$state2.plot_type;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        noValidate: true
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
        color: this.state.color,
        onChangeComplete: this.onChangeColor
      })))), react_default.a.createElement("div", {
        className: "modal-footer"
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-secondary",
        "data-dismiss": "modal"
      }, "Close"), react_default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Create Series"))));
    }
  }]);

  return SeriesForm;
}(react["Component"]);

SeriesForm_SeriesForm.propTypes = {
  addSeries: prop_types_default.a.func.isRequired
};
/* harmony default export */ var series_SeriesForm = (Object(es["connect"])(null, {
  addSeries: dashboards_addSeries
})(SeriesForm_SeriesForm));
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/series/SeriesTable.js
function SeriesTable_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SeriesTable_typeof = function _typeof(obj) { return typeof obj; }; } else { SeriesTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SeriesTable_typeof(obj); }

function SeriesTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SeriesTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SeriesTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) SeriesTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) SeriesTable_defineProperties(Constructor, staticProps); return Constructor; }

function SeriesTable_possibleConstructorReturn(self, call) { if (call && (SeriesTable_typeof(call) === "object" || typeof call === "function")) { return call; } return SeriesTable_assertThisInitialized(self); }

function SeriesTable_getPrototypeOf(o) { SeriesTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SeriesTable_getPrototypeOf(o); }

function SeriesTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SeriesTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SeriesTable_setPrototypeOf(subClass, superClass); }

function SeriesTable_setPrototypeOf(o, p) { SeriesTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SeriesTable_setPrototypeOf(o, p); }







var SeriesTable_SeriesTable =
/*#__PURE__*/
function (_Component) {
  SeriesTable_inherits(SeriesTable, _Component);

  function SeriesTable(props) {
    var _this;

    SeriesTable_classCallCheck(this, SeriesTable);

    _this = SeriesTable_possibleConstructorReturn(this, SeriesTable_getPrototypeOf(SeriesTable).call(this, props));
    _this.update = _this.update.bind(SeriesTable_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(SeriesTable_assertThisInitialized(_this));
    return _this;
  }

  SeriesTable_createClass(SeriesTable, [{
    key: "delete",
    value: function _delete(id) {
      this.props.deleteSeries(id);
      this.props.deletionHook();
    }
  }, {
    key: "update",
    value: function update(current, id) {
      this.props.updateSeries(current, id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          header = _this$props.header;
      return react_default.a.createElement(table_Table, {
        editable: true,
        data: data,
        header: header,
        update: this.update,
        "delete": this["delete"]
      });
    }
  }]);

  return SeriesTable;
}(react["Component"]);

SeriesTable_SeriesTable.propTypes = {
  data: prop_types_default.a.array.isRequired,
  header: prop_types_default.a.array.isRequired
};
/* harmony default export */ var series_SeriesTable = (Object(es["connect"])(null, {
  updateSeries: dashboards_updateSeries,
  deleteSeries: dashboards_deleteSeries
})(SeriesTable_SeriesTable));
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/series/SeriesOptions.js






var SeriesOptions_SeriesOptions = function SeriesOptions(props) {
  var series = props.series,
      kpi = props.kpi;
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    className: "modal fade",
    id: "seriesOptions",
    role: "dialog",
    "aria-labelledby": "seriesOptionsLabel",
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
    id: "seriesOptionsLabel"
  }, react_default.a.createElement("span", {
    className: "im im-line-chart-up",
    style: {
      fontSize: "".concat(2.5, "rem"),
      verticalAlign: "-0.1em"
    }
  }), "  ", "Manage Series For ", kpi ? kpi.name : "Null"), react_default.a.createElement("button", {
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
    href: "#infos"
  }, "Info")), react_default.a.createElement("li", {
    className: "nav-item"
  }, react_default.a.createElement("a", {
    className: "nav-link",
    "data-toggle": "tab",
    href: "#lists"
  }, "View Series")), react_default.a.createElement("li", {
    className: "nav-item"
  }, react_default.a.createElement("a", {
    className: "nav-link",
    "data-toggle": "tab",
    href: "#adds"
  }, "Add a Series")))), react_default.a.createElement("div", {
    className: "card-body"
  }, react_default.a.createElement("div", {
    className: "tab-content",
    style: {
      maxHeight: "".concat(550, "px"),
      overflow: "auto",
      overflowX: "auto"
    }
  }, react_default.a.createElement(series_SeriesInfo, null), react_default.a.createElement("div", {
    id: "lists",
    className: "tab-pane fade"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, "Your Series"), react_default.a.createElement(series_SeriesTable, {
    data: series,
    header: SERIES_TABLE_HEADERS,
    deletionHook: props.deletionHook
  })), react_default.a.createElement("div", {
    id: "adds",
    className: "tab-pane fade"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, "Create A New Series"), react_default.a.createElement(series_SeriesForm, {
    kpi: kpi ? kpi.id : 0
  }))))))))));
};

/* harmony default export */ var series_SeriesOptions = (SeriesOptions_SeriesOptions);
// CONCATENATED MODULE: ./frontend/src/components/common/ui/svgExporter.js
function svgExporter_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { svgExporter_typeof = function _typeof(obj) { return typeof obj; }; } else { svgExporter_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return svgExporter_typeof(obj); }

function svgExporter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function svgExporter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function svgExporter_createClass(Constructor, protoProps, staticProps) { if (protoProps) svgExporter_defineProperties(Constructor.prototype, protoProps); if (staticProps) svgExporter_defineProperties(Constructor, staticProps); return Constructor; }

function svgExporter_possibleConstructorReturn(self, call) { if (call && (svgExporter_typeof(call) === "object" || typeof call === "function")) { return call; } return svgExporter_assertThisInitialized(self); }

function svgExporter_getPrototypeOf(o) { svgExporter_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return svgExporter_getPrototypeOf(o); }

function svgExporter_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function svgExporter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) svgExporter_setPrototypeOf(subClass, superClass); }

function svgExporter_setPrototypeOf(o, p) { svgExporter_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return svgExporter_setPrototypeOf(o, p); }





var svgExporter_SvgExporter =
/*#__PURE__*/
function (_Component) {
  svgExporter_inherits(SvgExporter, _Component);

  function SvgExporter(props) {
    var _this;

    svgExporter_classCallCheck(this, SvgExporter);

    _this = svgExporter_possibleConstructorReturn(this, svgExporter_getPrototypeOf(SvgExporter).call(this, props));
    _this["export"] = _this["export"].bind(svgExporter_assertThisInitialized(_this));
    _this.preview = _this.preview.bind(svgExporter_assertThisInitialized(_this));
    return _this;
  }

  svgExporter_createClass(SvgExporter, [{
    key: "export",
    value: function _export() {
      var svgData = $(this.props.target)[0].outerHTML;
      var svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8"
      });
      var svgUrl = URL.createObjectURL(svgBlob);
      var downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = "kpi_chart.svg";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }, {
    key: "preview",
    value: function preview() {
      var svgData = $(this.props.target)[0].outerHTML;
      var preview = document.createElement("div");
      preview.innerHTML = svgData;
      $("#preview").empty();
      $("#preview").append(preview);
    }
  }, {
    key: "render",
    value: function render() {
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "modal fade",
        id: "svgExporter",
        role: "dialog",
        "aria-labelledby": "svgExporterLabel",
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
        id: "svgExporterLabel"
      }, react_default.a.createElement("span", {
        className: "im im-picture-o",
        style: {
          fontSize: "".concat(2.5, "rem"),
          verticalAlign: "-0.1em"
        }
      }), "  ", "Export SVG"), react_default.a.createElement("button", {
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
        href: "#export"
      }, "Export")), react_default.a.createElement("li", {
        className: "nav-item"
      }, react_default.a.createElement("a", {
        className: "nav-link",
        "data-toggle": "tab",
        href: "#settings"
      }, "Settings")))), react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement("div", {
        className: "tab-content",
        style: {
          maxHeight: "".concat(550, "px"),
          overflow: "auto",
          overflowX: "auto"
        }
      }, react_default.a.createElement("div", {
        id: "export",
        className: "tab-pane fade show active"
      }, react_default.a.createElement("h5", null, "Preview"), react_default.a.createElement("button", {
        type: "button",
        onClick: this.preview,
        className: "btn btn-info"
      }, "Generate Preview"), react_default.a.createElement("div", {
        className: "container",
        id: "preview"
      }), react_default.a.createElement("h5", {
        className: "card-title mt-4"
      }, "Export Your SVG"), react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-success",
        onClick: this["export"]
      }, react_default.a.createElement("span", {
        className: "im im-download",
        style: {
          fontSize: "".concat(1, "rem")
        }
      }), "  ", "Export")), react_default.a.createElement("div", {
        id: "settings",
        className: "tab-pane fade"
      }, react_default.a.createElement("h5", {
        className: "card-title"
      }, "WIP"))))))))));
    }
  }]);

  return SvgExporter;
}(react["Component"]);

svgExporter_SvgExporter.propTypes = {
  target: prop_types_default.a.string.isRequired
};
/* harmony default export */ var svgExporter = (svgExporter_SvgExporter);
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/ChartOptions.js
function ChartOptions_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ChartOptions_typeof = function _typeof(obj) { return typeof obj; }; } else { ChartOptions_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ChartOptions_typeof(obj); }

function ChartOptions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChartOptions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ChartOptions_createClass(Constructor, protoProps, staticProps) { if (protoProps) ChartOptions_defineProperties(Constructor.prototype, protoProps); if (staticProps) ChartOptions_defineProperties(Constructor, staticProps); return Constructor; }

function ChartOptions_possibleConstructorReturn(self, call) { if (call && (ChartOptions_typeof(call) === "object" || typeof call === "function")) { return call; } return ChartOptions_assertThisInitialized(self); }

function ChartOptions_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ChartOptions_getPrototypeOf(o) { ChartOptions_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ChartOptions_getPrototypeOf(o); }

function ChartOptions_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ChartOptions_setPrototypeOf(subClass, superClass); }

function ChartOptions_setPrototypeOf(o, p) { ChartOptions_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ChartOptions_setPrototypeOf(o, p); }



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
      _this.props.selectKpiHook(e.target.value);

      _this.props.selectSeriesHook(null);

      _this.props.deselectHook();
    }, _temp));
  }

  ChartOptions_createClass(ChartOptions, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.kpis[0] && this.props.kpis[0]) {
        this.props.selectKpiHook(this.props.kpis[0].id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          kpis = _this$props.kpis;
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
      })), kpis[0] ? react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary mt-auto ml-2",
        "data-toggle": "modal",
        "data-target": "#seriesOptions"
      }, "Manage Series") : react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-secondary mt-auto ml-2",
        "data-toggle": "modal",
        "data-target": "#seriesOptions",
        disabled: true
      }, "Manage Series"), active ? react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary mt-auto ml-auto",
        "data-toggle": "modal",
        "data-target": "#dataOptions"
      }, "Edit Selected") : react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-secondary mt-auto ml-auto",
        disabled: true
      }, "Edit Selected"));
    }
  }]);

  return ChartOptions;
}(react["Component"]);

/* harmony default export */ var pillarRoom_ChartOptions = (ChartOptions_ChartOptions);
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/series/DataInfo.js


var DataInfo_DataInfo = function DataInfo() {
  return react_default.a.createElement("div", {
    id: "infoData",
    className: "tab-pane fade"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, "Data"), react_default.a.createElement("p", {
    className: "card-text"
  }, "Here you can view and manage all your datapoints. Each datapoint is defined by the following fields."), react_default.a.createElement("h5", {
    className: "mt-4"
  }, react_default.a.createElement("i", {
    className: "im im-file-o mr-2"
  }), " Value"), react_default.a.createElement("p", {
    className: "card-text"
  }, " - Defines the quantity of the measurement"), react_default.a.createElement("h5", {
    className: "mt-4"
  }, " ", react_default.a.createElement("i", {
    className: "im im-target mr-2"
  }), " Target"), react_default.a.createElement("p", {
    className: "card-text"
  }, " ", "- Defines the value at from which deviations are calculated"), react_default.a.createElement("h5", {
    className: "mt-4"
  }, react_default.a.createElement("i", {
    className: "im im-calendar mr-2"
  }), " Date"), react_default.a.createElement("p", {
    className: "card-text"
  }, " ", "- Defines the day which the data was reported ", react_default.a.createElement("br", null), "- Format: YYYY-MM-DD"));
};

/* harmony default export */ var series_DataInfo = (DataInfo_DataInfo);
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/series/DataTable.js
function DataTable_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DataTable_typeof = function _typeof(obj) { return typeof obj; }; } else { DataTable_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DataTable_typeof(obj); }

function DataTable_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DataTable_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DataTable_createClass(Constructor, protoProps, staticProps) { if (protoProps) DataTable_defineProperties(Constructor.prototype, protoProps); if (staticProps) DataTable_defineProperties(Constructor, staticProps); return Constructor; }

function DataTable_possibleConstructorReturn(self, call) { if (call && (DataTable_typeof(call) === "object" || typeof call === "function")) { return call; } return DataTable_assertThisInitialized(self); }

function DataTable_getPrototypeOf(o) { DataTable_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DataTable_getPrototypeOf(o); }

function DataTable_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DataTable_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DataTable_setPrototypeOf(subClass, superClass); }

function DataTable_setPrototypeOf(o, p) { DataTable_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DataTable_setPrototypeOf(o, p); }







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
          header = _this$props.header;
      return react_default.a.createElement(table_Table, {
        editable: true,
        data: data,
        header: header,
        update: this.update,
        "delete": this["delete"],
        deletable: true,
        formatRow: this.formatRow
      });
    }
  }]);

  return DatapointTable;
}(react["Component"]);

DataTable_DatapointTable.propTypes = {
  data: prop_types_default.a.array.isRequired,
  header: prop_types_default.a.array.isRequired
};
/* harmony default export */ var DataTable = (Object(es["connect"])(null, {
  updateDatapoint: dashboards_updateDatapoint,
  deleteDatapoint: dashboards_deleteDatapoint
})(DataTable_DatapointTable));
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/series/DataOptions.js





var DataOptions_DataOptions = function DataOptions(props) {
  var series = props.series;
  var data = series ? series : {
    name: "Error",
    plot_type: "Error",
    color: "Error",
    kpi: "Error",
    entries: [],
    id: "Error"
  };
  return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
    className: "modal fade",
    id: "dataOptions",
    role: "dialog",
    "aria-labelledby": "dataOptionsLabel",
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
    id: "dataOptionsLabel"
  }, react_default.a.createElement("span", {
    className: "im im-archive",
    style: {
      fontSize: "".concat(2.5, "rem"),
      verticalAlign: "-0.1em"
    }
  }), "  ", "Edit ", data.name), react_default.a.createElement("button", {
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
    className: "nav-link",
    "data-toggle": "tab",
    href: "#infoData"
  }, "Info")), react_default.a.createElement("li", {
    className: "nav-item"
  }, react_default.a.createElement("a", {
    className: "nav-link active",
    "data-toggle": "tab",
    href: "#viewData"
  }, "View Data")), react_default.a.createElement("li", {
    className: "nav-item"
  }, react_default.a.createElement("a", {
    className: "nav-link",
    "data-toggle": "tab",
    href: "#importData"
  }, "Import")), react_default.a.createElement("li", {
    className: "nav-item"
  }, react_default.a.createElement("a", {
    className: "nav-link",
    "data-toggle": "tab",
    href: "#exportData"
  }, "Export")))), react_default.a.createElement("div", {
    className: "card-body"
  }, react_default.a.createElement("div", {
    className: "tab-content",
    style: {
      maxHeight: "".concat(550, "px"),
      overflow: "auto",
      overflowX: "auto"
    }
  }, react_default.a.createElement(series_DataInfo, null), react_default.a.createElement("div", {
    id: "viewData",
    className: "tab-pane fade show active"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, "Your Data"), react_default.a.createElement(DataTable, {
    data: data.entries,
    header: DATAPOINT_TABLE_HEADERS
  })), react_default.a.createElement("div", {
    id: "exportData",
    className: "tab-pane fade"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, "WIP")), react_default.a.createElement("div", {
    id: "importData",
    className: "tab-pane fade"
  }, react_default.a.createElement("h5", {
    className: "card-title"
  }, "WIP"))))))))));
};

/* harmony default export */ var series_DataOptions = (DataOptions_DataOptions);
// CONCATENATED MODULE: ./frontend/src/components/pillarRoom/PillarRoom.js
function PillarRoom_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PillarRoom_typeof = function _typeof(obj) { return typeof obj; }; } else { PillarRoom_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PillarRoom_typeof(obj); }

function PillarRoom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PillarRoom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PillarRoom_createClass(Constructor, protoProps, staticProps) { if (protoProps) PillarRoom_defineProperties(Constructor.prototype, protoProps); if (staticProps) PillarRoom_defineProperties(Constructor, staticProps); return Constructor; }

function PillarRoom_possibleConstructorReturn(self, call) { if (call && (PillarRoom_typeof(call) === "object" || typeof call === "function")) { return call; } return PillarRoom_assertThisInitialized(self); }

function PillarRoom_getPrototypeOf(o) { PillarRoom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PillarRoom_getPrototypeOf(o); }

function PillarRoom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PillarRoom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PillarRoom_setPrototypeOf(subClass, superClass); }

function PillarRoom_setPrototypeOf(o, p) { PillarRoom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PillarRoom_setPrototypeOf(o, p); }

















var PillarRoom_pillarRoom =
/*#__PURE__*/
function (_Component) {
  PillarRoom_inherits(pillarRoom, _Component);

  function pillarRoom(props) {
    var _this;

    PillarRoom_classCallCheck(this, pillarRoom);

    _this = PillarRoom_possibleConstructorReturn(this, PillarRoom_getPrototypeOf(pillarRoom).call(this, props));

    _this.deselect = function () {
      d3["selectAll"](".line").attr("stroke-width", 1.8);
      d3["selectAll"](".dot").attr("r", 3);
      d3["selectAll"](".legend").attr("font-weight", "normal").attr("font-size", "17");

      _this.selectSeriesHook(null);
    };

    _this.state = {
      selectedSeries: null,
      selectedExport: "",
      selectedKpi: null
    };
    _this.selectSeriesHook = _this.selectSeriesHook.bind(PillarRoom_assertThisInitialized(_this));
    _this.selectKpiHook = _this.selectKpiHook.bind(PillarRoom_assertThisInitialized(_this));
    _this.updateExport = _this.updateExport.bind(PillarRoom_assertThisInitialized(_this));
    return _this;
  }

  PillarRoom_createClass(pillarRoom, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.kpis != this.props.kpis) {//this.selectSeriesHook(null);
      }
    }
  }, {
    key: "selectSeriesHook",
    value: function selectSeriesHook(id) {
      this.setState({
        selectedSeries: id
      });
    }
  }, {
    key: "selectKpiHook",
    value: function selectKpiHook(id) {
      this.setState({
        selectedKpi: id
      });
    }
  }, {
    key: "updateExport",
    value: function updateExport(target) {
      this.setState({
        selectedExport: target
      });
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
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          kpis = _this$props2.kpis,
          currentDashboard = _this$props2.currentDashboard;
      var _this$props$match$par2 = this.props.match.params,
          pillarId = _this$props$match$par2.pillarId,
          dashboardId = _this$props$match$par2.dashboardId;
      var _this$state = this.state,
          selectedSeries = _this$state.selectedSeries,
          selectedKpi = _this$state.selectedKpi,
          selectedExport = _this$state.selectedExport;
      var kpi = kpis.filter(function (kpi) {
        return kpi.id == selectedKpi;
      })[0];
      var series = kpi ? kpi.series : [];
      var s = series ? series.filter(function (s) {
        return s.id == selectedSeries;
      }) : [];

      if (currentDashboard == null) {
        return react_default.a.createElement(LoadingScreen, null);
      }

      var color = currentDashboard.background;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("div", {
        className: "container-fluid h-100",
        style: {
          padding: 0,
          background: color,
          height: "".concat(100, "%")
        }
      }, react_default.a.createElement("div", {
        className: "row m-0"
      }, react_default.a.createElement("div", {
        className: "col-lg-4"
      }, react_default.a.createElement("div", {
        className: "card ml-4 mt-4 mb-4 mr-4"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement(d3charts_pillar, {
        kpis: kpis,
        letter: pillarId,
        dashboardId: dashboardId,
        labeled: true
      })), react_default.a.createElement("div", {
        className: "card-footer",
        style: {
          display: "flex"
        }
      }, react_default.a.createElement("div", {
        className: "row"
      }, react_default.a.createElement("div", {
        className: "col-lg-12"
      }, react_default.a.createElement(table_Table, {
        data: kpis,
        header: KPI_TABLE_HEADERS,
        fontSize: 0.7 + "rem",
        summary: false
      })), react_default.a.createElement("div", {
        className: "col-lg-12",
        style: {
          display: "flex"
        }
      }, react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-primary mt-auto",
        "data-toggle": "modal",
        "data-target": "#kpiOptions"
      }, "Manage KPIs"), react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-info mt-auto ml-auto",
        "data-toggle": "modal",
        "data-target": "#svgExporter",
        onClick: function onClick() {
          _this2.updateExport("#chartPillar");
        }
      }, "Export Pillar")))))), react_default.a.createElement("div", {
        className: "col-lg-8"
      }, react_default.a.createElement("div", {
        className: "card ml-4 mt-4 mb-4 mr-4"
      }, react_default.a.createElement("div", {
        className: "card-body"
      }, react_default.a.createElement(d3charts_LineChart, {
        kpis: kpis,
        selectSeriesHook: this.selectSeriesHook,
        selectedKpi: selectedKpi
      })), react_default.a.createElement("div", {
        className: "card-footer",
        style: {
          display: "flex",
          overflow: "auto"
        }
      }, react_default.a.createElement(pillarRoom_ChartOptions, {
        active: selectedSeries,
        selectKpiHook: this.selectKpiHook,
        selectSeriesHook: this.selectSeriesHook,
        deselectHook: this.deselect,
        kpis: kpis
      }), react_default.a.createElement("button", {
        type: "button",
        className: "btn btn-info mt-auto ml-lg-auto ml-s-2 ml-xs-2",
        "data-toggle": "modal",
        "data-target": "#svgExporter",
        onClick: function onClick() {
          _this2.updateExport("#chart");
        }
      }, "Export Chart"))))), react_default.a.createElement(kpis_KpiOptions, {
        dashboardId: dashboardId,
        kpis: kpis,
        pillarId: pillarId
      }), react_default.a.createElement(series_DataOptions, {
        series: s[0]
      }), react_default.a.createElement(series_SeriesOptions, {
        series: series,
        kpi: kpi,
        deletionHook: this.deselect
      }), react_default.a.createElement(svgExporter, {
        target: selectedExport
      })));
    }
  }]);

  return pillarRoom;
}(react["Component"]);

PillarRoom_pillarRoom.propTypes = {
  getADashboard: prop_types_default.a.func.isRequired,
  kpis: prop_types_default.a.array.isRequired,
  currentDashboard: prop_types_default.a.object
};

var PillarRoom_mapStateToProps = function mapStateToProps(state) {
  return {
    kpis: state.dashboards.kpis,
    currentDashboard: state.dashboards.currentDashboard
  };
};

/* harmony default export */ var PillarRoom = (Object(es["connect"])(PillarRoom_mapStateToProps, {
  getADashboard: dashboards_getADashboard,
  getKpis: dashboards_getKpis,
  clearKpis: dashboards_clearKpis
})(PillarRoom_pillarRoom));
// CONCATENATED MODULE: ./frontend/src/components/App.js
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
      }, alertOptions), react_default.a.createElement(react_router_dom["HashRouter"], null, react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(layout_Header, null), react_default.a.createElement(layout_Alerts, null), react_default.a.createElement(react_router_dom["Switch"], null, react_default.a.createElement(common_PrivateRoute, {
        exact: true,
        path: "/",
        component: hompage_dashboard
      }), react_default.a.createElement(react_router_dom["Route"], {
        exact: true,
        path: "/register",
        component: accounts_register
      }), react_default.a.createElement(react_router_dom["Route"], {
        exact: true,
        path: "/login",
        component: accounts_login
      }), react_default.a.createElement(react_router_dom["Route"], {
        exact: true,
        path: "/",
        component: hompage_dashboard
      }), react_default.a.createElement(common_PrivateRoute, {
        path: "/boardroom/:id",
        component: boardroom
      }), react_default.a.createElement(common_PrivateRoute, {
        path: "/pillar/:dashboardId/:pillarId",
        component: PillarRoom
      }))))));
    }
  }]);

  return App;
}(react["Component"]);

react_dom_default.a.render(react_default.a.createElement(App_App, null), document.getElementById("app"));
// CONCATENATED MODULE: ./frontend/src/index.js




/***/ })

/******/ });