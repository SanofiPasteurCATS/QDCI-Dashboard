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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
  !*** ./frontend/src/index.js + 71 modules ***!
  \********************************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@date-io/date-fns/build/index.esm.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@emotion/core/dist/core.browser.esm.js (<- Module is referenced from these modules with unsupported syntax: ./node_modules/react-spinners/BounceLoader.js (referenced with amd require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/AppBar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Breadcrumbs/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Button/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/CardActions/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/CardContent/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Card/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Checkbox/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Container/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/DialogActions/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/DialogContentText/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/DialogContent/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/DialogTitle/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Dialog/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Drawer/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Fab/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/FormControlLabel/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/FormControl/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/GridListTileBar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/GridListTile/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/GridList/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Grid/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Hidden/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/IconButton/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/InputLabel/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/ListItemIcon/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/ListItemText/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/ListItem/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/List/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/MenuItem/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Menu/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/MobileStepper/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Paper/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Popover/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/RadioGroup/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Radio/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Select/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Slide/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/StepLabel/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Step/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Stepper/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Switch/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/TableBody/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/TableCell/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/TableHead/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/TablePagination/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/TableRow/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/TableSortLabel/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Table/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/TextField/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Toolbar/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Tooltip/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/Typography/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/core/esm/styles/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/AccountBox.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/AccountCircle.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Add.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/ArrowDownward.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/ArrowUpward.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Close.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Dashboard.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Delete.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/DeleteForever.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Edit.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Email.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/FilterList.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/KeyboardArrowLeft.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/KeyboardArrowRight.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/KeyboardBackspace.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/LibraryAdd.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Menu.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/MoreHoriz.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Palette.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Publish.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Replay.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Save.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/School.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Settings.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/SupervisorAccount.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/icons/Timeline.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/pickers/esm/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@material-ui/styles/esm/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/axios/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/clsx/dist/clsx.m.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/d3/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/date-fns/esm/format/index.js (<- Module is referenced from these modules with unsupported syntax: ./node_modules/react-datepicker/dist/react-datepicker.min.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/date-fns/esm/parseISO/index.js (<- Module is referenced from these modules with unsupported syntax: ./node_modules/react-datepicker/dist/react-datepicker.min.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-alert/dist/esm/react-alert.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-apexcharts/dist/react-apexcharts.min.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-color/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-compound-slider/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-dom/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-faux-dom/lib/ReactFauxDOM.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-redux/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-router-dom/esm/react-router-dom.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-spinners/BounceLoader.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-swipeable-views-utils/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-swipeable-views/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/redux-devtools-extension/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/redux-thunk/es/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/redux/es/redux.js (<- Module is referenced from these modules with unsupported syntax: ./node_modules/redux-devtools-extension/index.js (referenced with cjs require)) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/core-js/index.js
var core_js = __webpack_require__("./node_modules/core-js/index.js");

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js + 6 modules
var react_router_dom = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./node_modules/react-alert/dist/esm/react-alert.js
var react_alert = __webpack_require__("./node_modules/react-alert/dist/esm/react-alert.js");

// EXTERNAL MODULE: ./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js
var react_alert_template_basic = __webpack_require__("./node_modules/react-alert-template-basic/dist/esm/react-alert-template-basic.js");

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 24 modules
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/index.js + 7 modules
var esm_styles = __webpack_require__("./node_modules/@material-ui/core/esm/styles/index.js");

// CONCATENATED MODULE: ./frontend/src/core/components/layout/Theme.js

var primaryTheme = Object(esm_styles["createMuiTheme"])({
  palette: {
    secondary: {
      main: "#9BB0DB"
    },
    primary: {
      main: "#3F51B5"
    }
  }
});
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/index.js + 2 modules
var Grid = __webpack_require__("./node_modules/@material-ui/core/esm/Grid/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/index.js + 3 modules
var TextField = __webpack_require__("./node_modules/@material-ui/core/esm/TextField/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/index.js + 1 modules
var Button = __webpack_require__("./node_modules/@material-ui/core/esm/Button/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/index.js + 1 modules
var Typography = __webpack_require__("./node_modules/@material-ui/core/esm/Typography/index.js");

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



 // REDUX


 // MATERIAL-UI








var login_styles = function styles(theme) {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: theme.spacing(20)
    },
    textField: {
      marginBottom: theme.spacing(3),
      display: "block"
    },
    footer: {
      marginTop: theme.spacing(3)
    }
  };
};

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
      var _this$props = this.props,
          isAuthenticated = _this$props.isAuthenticated,
          classes = _this$props.classes;
      var inputFontSize = 20;

      if (isAuthenticated) {
        return react_default.a.createElement(react_router_dom["Redirect"], {
          to: "/"
        });
      } // Need the current username and password to update the inputs


      var _this$state2 = this.state,
          username = _this$state2.username,
          password = _this$state2.password;
      return react_default.a.createElement(esm_styles["ThemeProvider"], {
        theme: primaryTheme
      }, react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement(Grid["default"], {
        container: true,
        className: classes.root
      }, react_default.a.createElement(Grid["default"], {
        item: true,
        md: 6,
        className: classes.container
      }, react_default.a.createElement(Typography["default"], {
        variant: "h3",
        color: "secondary"
      }, "LOGIN"), react_default.a.createElement(TextField["default"], {
        required: true,
        id: "username",
        label: "Username",
        onChange: this.onChange,
        value: username || "",
        name: "username",
        className: classes.textField,
        fullWidth: true,
        inputProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input text
        ,
        InputLabelProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input label

      }), react_default.a.createElement(TextField["default"], {
        required: true,
        id: "password",
        label: "Password",
        onChange: this.onChange,
        value: password || "",
        className: classes.textField,
        name: "password",
        fullWidth: true,
        type: "password",
        inputProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input text
        ,
        InputLabelProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input label

      }), react_default.a.createElement(Button["default"], {
        type: "submit",
        variant: "contained",
        color: "primary"
      }, "Sign In"), react_default.a.createElement(Typography["default"], {
        color: "textSecondary",
        className: classes.footer
      }, " ", "Don't have an account?", " ", react_default.a.createElement(react_router_dom["Link"], {
        to: "/register"
      }, "Sign up your department today!"))))));
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
})(Object(esm_styles["withStyles"])(login_styles)(login_Login)));
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



 // REDUX











var register_styles = function styles(theme) {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: theme.spacing(20)
    },
    textField: {
      marginBottom: theme.spacing(3),
      display: "block"
    },
    footer: {
      marginTop: theme.spacing(3)
    }
  };
};
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
      var _this$props2 = this.props,
          isAuthenticated = _this$props2.isAuthenticated,
          classes = _this$props2.classes;
      var inputFontSize = 20; // Redirect users whom already have valid Auth tokens

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
      return react_default.a.createElement(esm_styles["ThemeProvider"], {
        theme: primaryTheme
      }, react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement(Grid["default"], {
        container: true,
        className: classes.root
      }, react_default.a.createElement(Grid["default"], {
        item: true,
        md: 6,
        className: classes.container
      }, react_default.a.createElement(Typography["default"], {
        variant: "h3",
        color: "secondary"
      }, "REGISTER"), react_default.a.createElement(TextField["default"], {
        required: true,
        id: "username",
        label: "Username",
        onChange: this.onChange,
        value: username || "",
        name: "username",
        className: classes.textField,
        fullWidth: true,
        inputProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input text
        ,
        InputLabelProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input label

      }), react_default.a.createElement(TextField["default"], {
        required: true,
        id: "email",
        label: "Email",
        onChange: this.onChange,
        value: email || "",
        className: classes.textField,
        name: "email",
        fullWidth: true,
        type: "text",
        inputProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input text
        ,
        InputLabelProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input label

      }), react_default.a.createElement(TextField["default"], {
        required: true,
        id: "password",
        label: "Password",
        onChange: this.onChange,
        value: password || "",
        className: classes.textField,
        name: "password",
        fullWidth: true,
        type: "password",
        inputProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input text
        ,
        InputLabelProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input label

      }), react_default.a.createElement(TextField["default"], {
        required: true,
        id: "password2",
        label: "Comfirm Password",
        onChange: this.onChange,
        value: password2 || "",
        className: classes.textField,
        name: "password2",
        fullWidth: true,
        type: "password",
        inputProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input text
        ,
        InputLabelProps: {
          style: {
            fontSize: inputFontSize
          }
        } // font size of input label

      }), react_default.a.createElement(Button["default"], {
        type: "submit",
        variant: "contained",
        color: "primary"
      }, "Register"), react_default.a.createElement(Typography["default"], {
        color: "textSecondary",
        className: classes.footer
      }, " ", "Already have an account? ", react_default.a.createElement(react_router_dom["Link"], {
        to: "/login"
      }, " Login!"))))));
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
})(Object(esm_styles["withStyles"])(register_styles)(register_Register)));
// EXTERNAL MODULE: ./node_modules/d3/index.js + 488 modules
var d3 = __webpack_require__("./node_modules/d3/index.js");

// EXTERNAL MODULE: ./node_modules/react-faux-dom/lib/ReactFauxDOM.js
var ReactFauxDOM = __webpack_require__("./node_modules/react-faux-dom/lib/ReactFauxDOM.js");

// CONCATENATED MODULE: ./frontend/src/core/components/d3charts/HeatCheck.js
function HeatCheck_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HeatCheck_typeof = function _typeof(obj) { return typeof obj; }; } else { HeatCheck_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HeatCheck_typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { HeatCheck_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
        style: {
          display: "flex",
          justifyContent: "center",
          marginBottom: "15px"
        }
      }, chart);
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
      var text = textsData.enter().append("text").merge(texts).style("font-size", "24px").style("font-weight", "bold").attr("dx", function (d, i) {
        return 75 + 120 * i + d.value.toString().length * -9;
      }).attr("dy", function (d, i) {
        return 76;
      }).style("opacity", 1).text(function (d) {
        return "".concat(d.value);
      });
      var circles = chart.selectAll("circle"); // DATA BIND

      var circlesData = circles.data(heat); // ENTER SECLECTION

      var circleEnter = circlesData.enter().append("circle").attr("r", 0).merge(circles).attr("cy", 70).attr("cx", function (d, i) {
        return 75 + 120 * i;
      }).style("opacity", 0.6).on("click", function (d) {
        var newHeat = _objectSpread({}, d);

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
// CONCATENATED MODULE: ./frontend/src/core/actions/dashboards.js
function dashboards_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function dashboards_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dashboards_ownKeys(Object(source), true).forEach(function (key) { dashboards_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dashboards_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
var dashboards_addKpi = function addKpi(kpi, year) {
  return function (dispatch, getState) {
    // Send request to server
    axios_default.a.post("/api/kpis/?year=".concat(year), kpi, tokenConfig(getState)).then(function (res) {
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
var dashboards_updateActionTable = function updateActionTable(actionTable, id, parent, tableName) {
  return function (dispatch, getState) {
    axios_default.a.patch("api/actionTable/".concat(id, "/?parent=").concat(parent || "null", "&tableName=").concat(tableName || "null"), actionTable, tokenConfig(getState)).then(function (res) {
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
      headers: dashboards_objectSpread({}, tokenConfig(getState).headers, {
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
// EXTERNAL MODULE: ./node_modules/react-spinners/BounceLoader.js
var BounceLoader = __webpack_require__("./node_modules/react-spinners/BounceLoader.js");
var BounceLoader_default = /*#__PURE__*/__webpack_require__.n(BounceLoader);

// EXTERNAL MODULE: ./node_modules/@emotion/core/dist/core.browser.esm.js + 5 modules
var core_browser_esm = __webpack_require__("./node_modules/@emotion/core/dist/core.browser.esm.js");

// CONCATENATED MODULE: ./frontend/src/core/config/styleConfig.js
// COLORS
var primaryColor = "#EEEEEE";
var secondaryColor = "#EEEEEE";
var accentColor = "#9BB0DB";
// CONCATENATED MODULE: ./frontend/src/core/components/layout/LoadingScreen.js
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

// DEPENDANCIES


 // CONFIG




var override =  false ? undefined : {
  name: "11wvrmk-override",
  styles: "display:flex;margin:0 auto 20px auto;justify-content:center;align-items:center;;label:override;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxkZXZcXHFkY2lfZW52aXJvbWVudFxccWRjaV9wcm9qZWN0XFxmcm9udGVuZFxcc3JjXFxjb3JlXFxjb21wb25lbnRzXFxsYXlvdXRcXExvYWRpbmdTY3JlZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWW9CIiwiZmlsZSI6IkM6XFxkZXZcXHFkY2lfZW52aXJvbWVudFxccWRjaV9wcm9qZWN0XFxmcm9udGVuZFxcc3JjXFxjb3JlXFxjb21wb25lbnRzXFxsYXlvdXRcXExvYWRpbmdTY3JlZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBERVBFTkRBTkNJRVNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm91bmNlTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9Cb3VuY2VMb2FkZXJcIjtcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcclxuXHJcbi8vIENPTkZJR1xyXG5pbXBvcnQgeyBhY2NlbnRDb2xvciB9IGZyb20gXCIuLi8uLi9jb25maWcvc3R5bGVDb25maWdcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGUgPSBjc3NgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIlxyXG4gIH1cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyXHJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgc3BjYWluZz17MH1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XHJcbiAgICA+XHJcbiAgICAgIDxCb3VuY2VMb2FkZXJcclxuICAgICAgICBzaXplVW5pdD1cInB4XCJcclxuICAgICAgICBzaXplPXs2MH1cclxuICAgICAgICBjc3M9e292ZXJyaWRlfVxyXG4gICAgICAgIGNvbG9yPXthY2NlbnRDb2xvcn1cclxuICAgICAgLz5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var useStyles = Object(esm_styles["makeStyles"])({
  root: {
    height: "100%"
  }
});
/* harmony default export */ var LoadingScreen = (function () {
  var classes = useStyles();
  return react_default.a.createElement(Grid["default"], {
    container: true,
    alignItems: "center",
    justify: "center",
    spcaing: 0,
    className: classes.root
  }, react_default.a.createElement(BounceLoader_default.a, {
    sizeUnit: "px",
    size: 60,
    css: override,
    color: accentColor
  }));
});
// CONCATENATED MODULE: ./frontend/src/core/config/dashboardConfig.js
// Configuration for table headers and form controls

/********************************************
 *
 * FORM CONTROL CHOICES
 *
 ********************************************/
var PLOT_TYPE_CHOICES = [{
  id: "li",
  name: "line"
}, {
  id: "ar",
  name: "area"
}, {
  id: "bar",
  name: "bar"
}, {
  id: "sc",
  name: "scatter"
}];
var PLOT_TYPE_MAP = {
  li: "line",
  ar: "area",
  bar: "bar",
  sc: "scatter"
};
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
  formatter: function formatter(pillar) {
    return PILLAR_CHOICES.filter(function (choice) {
      return choice.id === pillar;
    })[0].name;
  }
}, {
  name: "Frequency",
  prop: "frequency",
  formatter: function formatter(frequency) {
    return FREQUENCY_CHOICES[frequency].name;
  }
}, {
  name: "Type",
  prop: "kpi_type",
  formatter: function formatter(kpi_type) {
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

function pillar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pillar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pillar_ownKeys(Object(source), true).forEach(function (key) { pillar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pillar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      var _this$props = this.props,
          chart = _this$props.chart,
          className = _this$props.className;
      return react_default.a.createElement("div", {
        style: {
          margin: "".concat(10, "px ", 10, "px")
        },
        className: className
      }, chart);
    } // Renders D3 chart to the faux DOM

  }, {
    key: "renderD3",
    value: function renderD3() {
      var _this$props2 = this.props,
          connectFauxDOM = _this$props2.connectFauxDOM,
          animateFauxDOM = _this$props2.animateFauxDOM;
      var faux = connectFauxDOM("svg", "chart");
      var plotSize = 200;
      var _this$props3 = this.props,
          letter = _this$props3.letter,
          dashboardId = _this$props3.dashboardId,
          labeled = _this$props3.labeled;
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
      var _this$props4 = this.props,
          kpis = _this$props4.kpis,
          letter = _this$props4.letter,
          labeled = _this$props4.labeled,
          onHover = _this$props4.onHover;
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
          }, d.data, {
            i: i
          })
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
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("./node_modules/clsx/dist/clsx.m.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/index.js + 1 modules
var Table = __webpack_require__("./node_modules/@material-ui/core/esm/Table/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/index.js + 1 modules
var TableBody = __webpack_require__("./node_modules/@material-ui/core/esm/TableBody/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/index.js + 1 modules
var TableCell = __webpack_require__("./node_modules/@material-ui/core/esm/TableCell/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/index.js + 1 modules
var TableHead = __webpack_require__("./node_modules/@material-ui/core/esm/TableHead/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TablePagination/index.js + 2 modules
var TablePagination = __webpack_require__("./node_modules/@material-ui/core/esm/TablePagination/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/index.js + 1 modules
var TableRow = __webpack_require__("./node_modules/@material-ui/core/esm/TableRow/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableSortLabel/index.js + 2 modules
var TableSortLabel = __webpack_require__("./node_modules/@material-ui/core/esm/TableSortLabel/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/index.js + 1 modules
var Toolbar = __webpack_require__("./node_modules/@material-ui/core/esm/Toolbar/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Checkbox/index.js + 4 modules
var Checkbox = __webpack_require__("./node_modules/@material-ui/core/esm/Checkbox/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/index.js + 1 modules
var IconButton = __webpack_require__("./node_modules/@material-ui/core/esm/IconButton/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Edit.js
var Edit = __webpack_require__("./node_modules/@material-ui/icons/Edit.js");
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/index.js + 3 modules
var Tooltip = __webpack_require__("./node_modules/@material-ui/core/esm/Tooltip/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__("./node_modules/@material-ui/icons/Delete.js");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__("./node_modules/@material-ui/icons/Add.js");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/FilterList.js
var FilterList = __webpack_require__("./node_modules/@material-ui/icons/FilterList.js");
var FilterList_default = /*#__PURE__*/__webpack_require__.n(FilterList);

// CONCATENATED MODULE: ./frontend/src/core/helpers/Filters.js
// Find the first object in an array whose property defined by prop matches value
var getItem = function getItem(value, arr, prop) {
  if (!arr) return null;
  var query = arr.filter(function (item) {
    return item[prop] == value;
  });
  if (!query.length) return null;else return query[0];
};
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/Table.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Table_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function getSorting(order, orderBy) {
  return order === "desc" ? function (a, b) {
    return desc(a, b, orderBy);
  } : function (a, b) {
    return -desc(a, b, orderBy);
  };
}

function EnhancedTableHead(props) {
  var classes = props.classes,
      onSelectAllClick = props.onSelectAllClick,
      order = props.order,
      orderBy = props.orderBy,
      numSelected = props.numSelected,
      rowCount = props.rowCount,
      onRequestSort = props.onRequestSort,
      tableMeta = props.tableMeta;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  return react_default.a.createElement(TableHead["default"], null, react_default.a.createElement(TableRow["default"], null, react_default.a.createElement(TableCell["default"], {
    padding: "checkbox"
  }, react_default.a.createElement(Checkbox["default"], {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: numSelected === rowCount && rowCount != 0,
    onChange: onSelectAllClick,
    inputProps: {
      "aria-label": "select all"
    }
  })), tableMeta.map(function (field, i) {
    return react_default.a.createElement(TableCell["default"], {
      key: field.name,
      align: field.numeric ? "right" : "left",
      className: classes.tableHeadCell,
      sortDirection: orderBy === field.prop ? order : false
    }, react_default.a.createElement(TableSortLabel["default"], {
      active: orderBy === field.prop,
      direction: order,
      onClick: createSortHandler(field.prop)
    }, field.name, orderBy === field.prop ? react_default.a.createElement("span", {
      className: classes.visuallyHidden
    }, order === "desc" ? "sorted descending" : "sorted ascending") : null));
  })));
}

EnhancedTableHead.propTypes = {
  classes: prop_types_default.a.object.isRequired,
  numSelected: prop_types_default.a.number.isRequired,
  onRequestSort: prop_types_default.a.func.isRequired,
  onSelectAllClick: prop_types_default.a.func.isRequired,
  order: prop_types_default.a.oneOf(["asc", "desc"]).isRequired,
  orderBy: prop_types_default.a.string.isRequired,
  rowCount: prop_types_default.a.number.isRequired
};
var useToolbarStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === "light" ? {
      color: theme.palette.secondary.main,
      backgroundColor: Object(esm_styles["lighten"])(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    title: {
      flex: "1 1 100%"
    }
  };
});

var Table_EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var classes = useToolbarStyles();
  var numSelected = props.numSelected,
      title = props.title,
      onClickAdd = props.onClickAdd,
      onClickDelete = props.onClickDelete,
      onClickEdit = props.onClickEdit,
      data = props.data;

  var handleClickEdit = function handleClickEdit() {
    var onClickEdit = props.onClickEdit,
        selected = props.selected,
        data = props.data;
    if (selected.length) onClickEdit(getItem(selected[0], data, "id"));
  };

  var handleClickDelete = function handleClickDelete() {
    var onClickDelete = props.onClickDelete,
        selected = props.selected,
        setSelected = props.setSelected;
    onClickDelete(selected);
    setSelected([]);
  };

  return react_default.a.createElement(Toolbar["default"], {
    className: Object(clsx_m["default"])(classes.root, Table_defineProperty({}, classes.highlight, numSelected > 0))
  }, numSelected > 0 ? react_default.a.createElement(Typography["default"], {
    className: classes.title,
    color: "inherit",
    variant: "subtitle1"
  }, numSelected, " selected") : react_default.a.createElement(Typography["default"], {
    className: classes.title,
    variant: "h6",
    id: "tableTitle"
  }, title), numSelected > 0 ? react_default.a.createElement(react_default.a.Fragment, null, onClickEdit && numSelected === 1 && react_default.a.createElement(Tooltip["default"], {
    title: "Edit"
  }, react_default.a.createElement(IconButton["default"], {
    onClick: handleClickEdit,
    "aria-label": "edit"
  }, react_default.a.createElement(Edit_default.a, null))), onClickDelete && react_default.a.createElement(Tooltip["default"], {
    title: "Delete"
  }, react_default.a.createElement(IconButton["default"], {
    onClick: handleClickDelete,
    "aria-label": "delete"
  }, react_default.a.createElement(Delete_default.a, null)))) : react_default.a.createElement(react_default.a.Fragment, null, onClickAdd && react_default.a.createElement(Tooltip["default"], {
    title: "Add entry"
  }, react_default.a.createElement(IconButton["default"], {
    "aria-label": "add",
    onClick: onClickAdd
  }, react_default.a.createElement(Add_default.a, null))), react_default.a.createElement(Tooltip["default"], {
    title: "Filter list"
  }, react_default.a.createElement(IconButton["default"], {
    "aria-label": "filter list"
  }, react_default.a.createElement(FilterList_default.a, null)))));
};

Table_EnhancedTableToolbar.propTypes = {
  numSelected: prop_types_default.a.number.isRequired
};
var Table_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      marginTop: theme.spacing(1),
      maxWidth: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      maxWidth: "100%"
    },
    tableWrapper: {
      overflowX: "auto"
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    },
    tableCell: {
      fontSize: "0.6rem",
      paddingLeft: "5px",
      paddingRight: "5px"
    },
    tableHeadCell: {
      paddingLeft: "5px",
      paddingRight: "5px"
    }
  };
});
function EnhancedTable(props) {
  var title = props.title,
      data = props.data,
      tableMeta = props.tableMeta,
      onClickAdd = props.onClickAdd,
      onClickDelete = props.onClickDelete,
      onClickEdit = props.onClickEdit;
  var classes = Table_useStyles();

  var _React$useState = react_default.a.useState("asc"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      order = _React$useState2[0],
      setOrder = _React$useState2[1];

  var _React$useState3 = react_default.a.useState(tableMeta[0].name),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      orderBy = _React$useState4[0],
      setOrderBy = _React$useState4[1];

  var _React$useState5 = react_default.a.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selected = _React$useState6[0],
      setSelected = _React$useState6[1];

  var _React$useState7 = react_default.a.useState(0),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      page = _React$useState8[0],
      setPage = _React$useState8[1];

  var _React$useState9 = react_default.a.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      dense = _React$useState10[0],
      setDense = _React$useState10[1];

  var _React$useState11 = react_default.a.useState(5),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      rowsPerPage = _React$useState12[0],
      setRowsPerPage = _React$useState12[1];

  var handleRequestSort = function handleRequestSort(event, property) {
    var isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = data.map(function (entry) {
        return entry.id;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  var setSelectedHook = function setSelectedHook(newSelected) {
    setSelected(newSelected);
  };

  var handleClick = function handleClick(event, id) {
    var selectedIndex = selected.indexOf(id);
    var newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  var isSelected = function isSelected(id) {
    return selected.indexOf(id) !== -1;
  };

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(Table_EnhancedTableToolbar, {
    title: title,
    numSelected: selected.length,
    onClickAdd: onClickAdd,
    onClickDelete: onClickDelete,
    onClickEdit: onClickEdit,
    selected: selected,
    setSelected: setSelectedHook,
    data: data
  }), react_default.a.createElement("div", {
    className: classes.tableWrapper
  }, react_default.a.createElement(Table["default"], {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    "aria-label": "enhanced table",
    size: "small"
  }, react_default.a.createElement(EnhancedTableHead, {
    classes: classes,
    numSelected: selected.length,
    order: order,
    orderBy: orderBy,
    onSelectAllClick: handleSelectAllClick,
    onRequestSort: handleRequestSort,
    rowCount: data.length,
    tableMeta: tableMeta
  }), react_default.a.createElement(TableBody["default"], null, stableSort(data, getSorting(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    var isItemSelected = isSelected(row.id);
    var labelId = "enhanced-table-checkbox-".concat(index);
    return react_default.a.createElement(TableRow["default"], {
      hover: true,
      onClick: function onClick(event) {
        return handleClick(event, row.id);
      },
      role: "checkbox",
      "aria-checked": isItemSelected,
      tabIndex: -1,
      key: "".concat(row.id, "-checkbox"),
      selected: isItemSelected
    }, react_default.a.createElement(TableCell["default"], {
      padding: "checkbox"
    }, react_default.a.createElement(Checkbox["default"], {
      checked: isItemSelected,
      inputProps: {
        "aria-labelledby": labelId
      }
    })), tableMeta.map(function (field, index) {
      return react_default.a.createElement(TableCell["default"], {
        key: "".concat(index, "-").concat(row.id),
        align: "left",
        id: row.id,
        className: classes.tableCell
      }, row[field.prop] === null ? "---" : row[field.prop]);
    }));
  }), emptyRows > 0 && react_default.a.createElement(TableRow["default"], {
    style: {
      height: 32.67 * emptyRows
    }
  }, react_default.a.createElement(TableCell["default"], {
    colSpan: 6
  }))))), react_default.a.createElement(TablePagination["default"], {
    rowsPerPageOptions: [],
    component: "div",
    count: data.length,
    rowsPerPage: rowsPerPage,
    page: page,
    backIconButtonProps: {
      "aria-label": "previous page"
    },
    nextIconButtonProps: {
      "aria-label": "next page"
    },
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/index.js + 1 modules
var Dialog = __webpack_require__("./node_modules/@material-ui/core/esm/Dialog/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/index.js + 1 modules
var DialogActions = __webpack_require__("./node_modules/@material-ui/core/esm/DialogActions/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/index.js + 1 modules
var DialogContent = __webpack_require__("./node_modules/@material-ui/core/esm/DialogContent/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/index.js + 1 modules
var DialogTitle = __webpack_require__("./node_modules/@material-ui/core/esm/DialogTitle/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/pickers/esm/index.js + 57 modules
var esm = __webpack_require__("./node_modules/@material-ui/pickers/esm/index.js");

// EXTERNAL MODULE: ./node_modules/@date-io/date-fns/build/index.esm.js + 3 modules
var index_esm = __webpack_require__("./node_modules/@date-io/date-fns/build/index.esm.js");

// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/AuditForm.js
// DEPENDANCIES

 // MATERIAL-UI






var AuditForm_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    textField: {
      marginBottom: theme.spacing(5),
      width: "100%"
    }
  };
});

function AuditForm(props) {
  var _props$audit = props.audit,
      description = _props$audit.description,
      start_date = _props$audit.start_date,
      end_date = _props$audit.end_date;
  var onChange = props.onChange;
  var classes = AuditForm_useStyles();

  var handleDateChange = function handleDateChange(date, name) {
    var onChange = props.onChange;
    onChange({
      target: {
        value: date.toLocaleDateString(),
        name: name
      }
    });
  };

  return react_default.a.createElement(Grid["default"], {
    container: true
  }, react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(TextField["default"], {
    required: true,
    fullWidth: true,
    id: "description",
    label: "Description",
    className: classes.textField,
    onChange: onChange,
    value: description || "",
    name: "description"
  })), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(esm["MuiPickersUtilsProvider"], {
    utils: index_esm["default"]
  }, react_default.a.createElement(esm["KeyboardDatePicker"], {
    disableToolbar: true,
    variant: "inline",
    format: "MM/dd/yyyy",
    margin: "normal",
    className: classes.textField,
    id: "start_date",
    label: "Start Date",
    value: start_date,
    onChange: function onChange(date) {
      handleDateChange(date, "start_date");
    },
    KeyboardButtonProps: {
      "aria-label": "change date"
    }
  }))), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(esm["MuiPickersUtilsProvider"], {
    utils: index_esm["default"]
  }, react_default.a.createElement(esm["KeyboardDatePicker"], {
    disableToolbar: true,
    variant: "inline",
    format: "MM/dd/yyyy",
    margin: "normal",
    id: "end_date",
    className: classes.textField,
    label: "End Date",
    value: end_date,
    onChange: function onChange(date) {
      handleDateChange(date, "end_date");
    },
    KeyboardButtonProps: {
      "aria-label": "change date"
    }
  }))));
}

/* harmony default export */ var components_AuditForm = (AuditForm);
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/AuditView.js
function AuditView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AuditView_typeof = function _typeof(obj) { return typeof obj; }; } else { AuditView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AuditView_typeof(obj); }

function AuditView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AuditView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AuditView_ownKeys(Object(source), true).forEach(function (key) { AuditView_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AuditView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AuditView_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AuditView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AuditView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AuditView_createClass(Constructor, protoProps, staticProps) { if (protoProps) AuditView_defineProperties(Constructor.prototype, protoProps); if (staticProps) AuditView_defineProperties(Constructor, staticProps); return Constructor; }

function AuditView_possibleConstructorReturn(self, call) { if (call && (AuditView_typeof(call) === "object" || typeof call === "function")) { return call; } return AuditView_assertThisInitialized(self); }

function AuditView_getPrototypeOf(o) { AuditView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AuditView_getPrototypeOf(o); }

function AuditView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AuditView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AuditView_setPrototypeOf(subClass, superClass); }

function AuditView_setPrototypeOf(o, p) { AuditView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AuditView_setPrototypeOf(o, p); }




 // MATERIAL-UI





 //CORE COMPONENTS


 // NATIVE COMPONENTS



var AuditView_AuditView =
/*#__PURE__*/
function (_Component) {
  AuditView_inherits(AuditView, _Component);

  function AuditView(props) {
    var _this;

    AuditView_classCallCheck(this, AuditView);

    _this = AuditView_possibleConstructorReturn(this, AuditView_getPrototypeOf(AuditView).call(this, props));

    _this.edit = function (selection) {
      _this.setState({
        open: true,
        formState: selection
      });
    };

    _this.handleToggleOpen = function (state) {
      return function () {
        _this.setState({
          open: state
        });
      };
    };

    _this.onChange = function (e) {
      _this.setState({
        formState: AuditView_objectSpread({}, _this.state.formState, AuditView_defineProperty({}, e.target.name, e.target.value))
      });
    };

    _this.handleUpdate = function (e) {
      _this.setState({
        open: false
      });

      var updateAudit = _this.props.updateAudit;
      var formState = _this.state.formState;

      var audit = AuditView_objectSpread({}, formState);

      updateAudit(audit, audit.id);

      _this.setState({
        formState: {
          description: "",
          start_date: "",
          end_date: ""
        }
      });
    };

    _this.update = _this.update.bind(AuditView_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(AuditView_assertThisInitialized(_this));
    _this.insert = _this.insert.bind(AuditView_assertThisInitialized(_this));
    _this.state = {
      open: false,
      formState: {}
    };
    return _this;
  }

  AuditView_createClass(AuditView, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var _this$state = this.state,
          open = _this$state.open,
          formState = _this$state.formState;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(EnhancedTable, {
        title: "Audits",
        onClickDelete: this["delete"],
        onClickEdit: this.edit,
        onClickAdd: this.insert,
        data: data,
        tableMeta: AUDIT_TABLE_HEADERS
      }), react_default.a.createElement(Dialog["default"], {
        open: open,
        onClose: this.handleToggleOpen(false),
        "aria-labelledby": "form-dialog-title"
      }, react_default.a.createElement(DialogTitle["default"], {
        id: "form-dialog-title"
      }, "Edit Audit"), react_default.a.createElement(DialogContent["default"], null, react_default.a.createElement(components_AuditForm, {
        audit: formState,
        onChange: this.onChange
      })), react_default.a.createElement(DialogActions["default"], null, react_default.a.createElement(Button["default"], {
        onClick: this.handleToggleOpen(false),
        color: "primary"
      }, "Cancel"), react_default.a.createElement(Button["default"], {
        onClick: this.handleUpdate,
        color: "primary"
      }, "Confirm"))));
    }
  }, {
    key: "insert",
    value: function insert() {
      var _this$props = this.props,
          addAudit = _this$props.addAudit,
          dashboardId = _this$props.dashboardId;
      var audit = {
        description: null,
        end_date: null,
        start_date: null,
        dashboard: dashboardId
      };
      addAudit(audit);
    }
  }, {
    key: "delete",
    value: function _delete(selection) {
      var deleteAudit = this.props.deleteAudit;

      for (var i in selection) {
        deleteAudit(selection[i]);
      }
    }
  }, {
    key: "update",
    value: function update(current, id) {
      var updateAudit = this.props.updateAudit;
      updateAudit(current, id);
    }
  }]);

  return AuditView;
}(react["Component"]);

AuditView_AuditView.propTypes = {
  data: prop_types_default.a.array,
  editable: prop_types_default.a.bool,
  rowClick: prop_types_default.a.func,
  deletable: prop_types_default.a.bool
};
/* harmony default export */ var components_AuditView = (Object(es["connect"])(null, {
  updateAudit: dashboards_updateAudit,
  deleteAudit: dashboards_deleteAudit,
  addAudit: dashboards_addAudit
})(AuditView_AuditView));
AuditView_AuditView.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/index.js + 1 modules
var DialogContentText = __webpack_require__("./node_modules/@material-ui/core/esm/DialogContentText/index.js");

// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/WinForm.js
// DEPENDANCIES

 // MATERIAL-UI






var WinForm_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    textField: {
      marginBottom: theme.spacing(5),
      width: "100%"
    }
  };
});

function WinForm(props) {
  var _props$win = props.win,
      description = _props$win.description,
      date = _props$win.date,
      participants = _props$win.participants;
  var onChange = props.onChange;
  var classes = WinForm_useStyles();

  var handleDateChange = function handleDateChange(date) {
    var onChange = props.onChange;
    onChange({
      target: {
        value: date.toLocaleDateString(),
        name: "date"
      }
    });
  };

  return react_default.a.createElement(Grid["default"], {
    container: true
  }, react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(TextField["default"], {
    required: true,
    fullWidth: true,
    id: "description",
    label: "Description",
    className: classes.textField,
    onChange: onChange,
    value: description || "",
    name: "description"
  })), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(TextField["default"], {
    required: true,
    fullWidth: true,
    id: "participants",
    label: "Participants",
    className: classes.textField,
    onChange: onChange,
    value: participants || "",
    name: "participants"
  })), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(esm["MuiPickersUtilsProvider"], {
    utils: index_esm["default"]
  }, react_default.a.createElement(esm["KeyboardDatePicker"], {
    disableToolbar: true,
    variant: "inline",
    format: "MM/dd/yyyy",
    margin: "normal",
    id: "date",
    label: "Date",
    className: classes.textField,
    value: date,
    onChange: handleDateChange,
    KeyboardButtonProps: {
      "aria-label": "change date"
    }
  }))));
}

WinForm.propTypes = {
  win: prop_types_default.a.object,
  onChange: prop_types_default.a.func
};
/* harmony default export */ var components_WinForm = (WinForm);
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/WinView.js
function WinView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WinView_typeof = function _typeof(obj) { return typeof obj; }; } else { WinView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WinView_typeof(obj); }

function WinView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function WinView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { WinView_ownKeys(Object(source), true).forEach(function (key) { WinView_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { WinView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function WinView_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function WinView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WinView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WinView_createClass(Constructor, protoProps, staticProps) { if (protoProps) WinView_defineProperties(Constructor.prototype, protoProps); if (staticProps) WinView_defineProperties(Constructor, staticProps); return Constructor; }

function WinView_possibleConstructorReturn(self, call) { if (call && (WinView_typeof(call) === "object" || typeof call === "function")) { return call; } return WinView_assertThisInitialized(self); }

function WinView_getPrototypeOf(o) { WinView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WinView_getPrototypeOf(o); }

function WinView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WinView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WinView_setPrototypeOf(subClass, superClass); }

function WinView_setPrototypeOf(o, p) { WinView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WinView_setPrototypeOf(o, p); }
















var WinView_WinView =
/*#__PURE__*/
function (_Component) {
  WinView_inherits(WinView, _Component);

  function WinView(props) {
    var _this;

    WinView_classCallCheck(this, WinView);

    _this = WinView_possibleConstructorReturn(this, WinView_getPrototypeOf(WinView).call(this, props));

    _this.edit = function (selection) {
      _this.setState({
        open: true,
        formState: selection
      });
    };

    _this.handleToggleOpen = function (state) {
      return function () {
        _this.setState({
          open: state
        });
      };
    };

    _this.onChange = function (e) {
      _this.setState({
        formState: WinView_objectSpread({}, _this.state.formState, WinView_defineProperty({}, e.target.name, e.target.value))
      });
    };

    _this.handleUpdate = function (e) {
      var updateWin = _this.props.updateWin;
      var formState = _this.state.formState;

      var win = WinView_objectSpread({}, formState);

      updateWin(win, win.id);

      _this.setState({
        formState: {
          description: "",
          participants: ""
        }
      });

      _this.setState({
        open: false
      });
    };

    _this.update = _this.update.bind(WinView_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(WinView_assertThisInitialized(_this));
    _this.insert = _this.insert.bind(WinView_assertThisInitialized(_this));
    _this.state = {
      open: false,
      formState: {}
    };
    return _this;
  }

  WinView_createClass(WinView, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      var _this$state = this.state,
          open = _this$state.open,
          formState = _this$state.formState;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(EnhancedTable, {
        title: "Wins",
        onClickDelete: this["delete"],
        onClickEdit: this.edit,
        onClickAdd: this.insert,
        data: data,
        tableMeta: WIN_TABLE_HEADERS
      }), react_default.a.createElement(Dialog["default"], {
        open: open,
        onClose: this.handleToggleOpen(false),
        "aria-labelledby": "form-dialog-title"
      }, react_default.a.createElement(DialogTitle["default"], {
        id: "form-dialog-title"
      }, "Edit Win"), react_default.a.createElement(DialogContent["default"], null, react_default.a.createElement(components_WinForm, {
        win: formState,
        onChange: this.onChange
      })), react_default.a.createElement(DialogActions["default"], null, react_default.a.createElement(Button["default"], {
        onClick: this.handleToggleOpen(false),
        color: "primary"
      }, "Cancel"), react_default.a.createElement(Button["default"], {
        onClick: this.handleUpdate,
        color: "primary"
      }, "Confirm"))));
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
    value: function _delete(selection) {
      var deleteWin = this.props.deleteWin;

      for (var i in selection) {
        deleteWin(selection[i]);
      }
    }
  }, {
    key: "update",
    value: function update(current, id) {
      var updateWin = this.props.updateWin;
      updateWin(current, id);
    }
  }]);

  return WinView;
}(react["Component"]);

WinView_WinView.propTypes = {
  data: prop_types_default.a.array,
  editable: prop_types_default.a.bool,
  rowClick: prop_types_default.a.func,
  deletable: prop_types_default.a.bool
};
/* harmony default export */ var components_WinView = (Object(es["connect"])(null, {
  updateWin: dashboards_updateWin,
  deleteWin: dashboards_deleteWin,
  addWin: dashboards_addWin
})(WinView_WinView));
WinView_WinView.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MobileStepper/index.js + 3 modules
var MobileStepper = __webpack_require__("./node_modules/@material-ui/core/esm/MobileStepper/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__("./node_modules/@material-ui/icons/KeyboardArrowLeft.js");
var KeyboardArrowLeft_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowLeft);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/KeyboardArrowRight.js
var KeyboardArrowRight = __webpack_require__("./node_modules/@material-ui/icons/KeyboardArrowRight.js");
var KeyboardArrowRight_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowRight);

// EXTERNAL MODULE: ./node_modules/react-swipeable-views/lib/index.js
var lib = __webpack_require__("./node_modules/react-swipeable-views/lib/index.js");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/react-swipeable-views-utils/lib/index.js
var react_swipeable_views_utils_lib = __webpack_require__("./node_modules/react-swipeable-views-utils/lib/index.js");

// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/Carousel.js
function Carousel_slicedToArray(arr, i) { return Carousel_arrayWithHoles(arr) || Carousel_iterableToArrayLimit(arr, i) || Carousel_nonIterableRest(); }

function Carousel_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Carousel_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Carousel_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Carousel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // MATERIAL-UI








var AutoPlaySwipeableViews = Object(react_swipeable_views_utils_lib["autoPlay"])(lib_default.a);
var Carousel_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  var _img;

  return {
    root: {
      maxWidth: "100%",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      position: "relative"
    },
    header: {
      color: "white",
      display: "flex",
      alignItems: "center",
      height: 50,
      width: "100%",
      paddingLeft: theme.spacing(1),
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      position: "absolute",
      top: 0,
      left: 0
    },
    img: (_img = {
      display: "block",
      maxWidth: "100%",
      overflow: "hidden",
      maxHeight: "250px"
    }, Carousel_defineProperty(_img, "maxWidth", "1500px"), Carousel_defineProperty(_img, "marginLeft", "auto"), Carousel_defineProperty(_img, "marginRight", "auto"), _img),
    stepper: {
      position: "relative",
      top: -32,
      backgroundColor: "transparent"
    },
    buttonsContainer: {
      position: "absolute",
      height: "100%",
      width: "100%",
      padding: theme.spacing(3)
    },
    buttons: {
      display: "flex",
      justifyContent: "space-between",
      height: "100%",
      alignItems: "center"
    },
    button: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      color: "white",
      margin: "0 8px"
    }
  };
});

function SwipeableTextMobileStepper(props) {
  var classes = Carousel_useStyles();
  var theme = Object(esm_styles["useTheme"])();
  var slides = props.slides;

  var _React$useState = react_default.a.useState(0),
      _React$useState2 = Carousel_slicedToArray(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var maxSteps = slides.length;

  function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  }

  function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(AutoPlaySwipeableViews, {
    axis: theme.direction === "rtl" ? "x-reverse" : "x",
    index: activeStep,
    enableMouseEvents: true
  }, slides.map(function (step, index) {
    return react_default.a.createElement("div", {
      key: index
    }, Math.abs(activeStep - index) <= 2 ? react_default.a.createElement("img", {
      className: classes.img,
      src: step.imgPath,
      alt: step.label
    }) : null);
  })), react_default.a.createElement("div", {
    className: classes.buttonsContainer
  }, react_default.a.createElement("div", {
    className: classes.buttons
  }, react_default.a.createElement(IconButton["default"], {
    size: "small",
    onClick: handleBack,
    disabled: activeStep === 0,
    className: classes.button
  }, theme.direction === "rtl" ? react_default.a.createElement(KeyboardArrowRight_default.a, null) : react_default.a.createElement(KeyboardArrowLeft_default.a, null)), react_default.a.createElement(IconButton["default"], {
    size: "small",
    onClick: handleNext,
    disabled: activeStep === maxSteps - 1,
    className: classes.button
  }, theme.direction === "rtl" ? react_default.a.createElement(KeyboardArrowLeft_default.a, null) : react_default.a.createElement(KeyboardArrowRight_default.a, null)))), react_default.a.createElement(MobileStepper["default"], {
    steps: maxSteps,
    position: "static",
    variant: "dots",
    activeStep: activeStep,
    className: classes.stepper,
    backButton: react_default.a.createElement("div", null),
    nextButton: react_default.a.createElement("div", null)
  }));
}

/* harmony default export */ var Carousel = (SwipeableTextMobileStepper);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowDownward.js
var ArrowDownward = __webpack_require__("./node_modules/@material-ui/icons/ArrowDownward.js");
var ArrowDownward_default = /*#__PURE__*/__webpack_require__.n(ArrowDownward);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Settings.js
var Settings = __webpack_require__("./node_modules/@material-ui/icons/Settings.js");
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowUpward.js
var ArrowUpward = __webpack_require__("./node_modules/@material-ui/icons/ArrowUpward.js");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward);

// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/ActionTable.js
function ActionTable_slicedToArray(arr, i) { return ActionTable_arrayWithHoles(arr) || ActionTable_iterableToArrayLimit(arr, i) || ActionTable_nonIterableRest(); }

function ActionTable_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function ActionTable_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ActionTable_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ActionTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // MATERIAL-UI






















function ActionTable_desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function ActionTable_stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function ActionTable_getSorting(order, orderBy) {
  return order === "desc" ? function (a, b) {
    return ActionTable_desc(a, b, orderBy);
  } : function (a, b) {
    return -ActionTable_desc(a, b, orderBy);
  };
}

function ActionTable_EnhancedTableHead(props) {
  var classes = props.classes,
      onSelectAllClick = props.onSelectAllClick,
      order = props.order,
      orderBy = props.orderBy,
      numSelected = props.numSelected,
      rowCount = props.rowCount,
      onRequestSort = props.onRequestSort,
      tableMeta = props.tableMeta;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  return react_default.a.createElement(TableHead["default"], null, react_default.a.createElement(TableRow["default"], null, react_default.a.createElement(TableCell["default"], {
    padding: "checkbox"
  }, react_default.a.createElement(Checkbox["default"], {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: numSelected === rowCount && rowCount != 0,
    onChange: onSelectAllClick,
    inputProps: {
      "aria-label": "select all"
    }
  })), tableMeta.map(function (field, i) {
    return react_default.a.createElement(TableCell["default"], {
      key: field.name,
      align: field.numeric ? "right" : "left",
      className: classes.tableHeadCell,
      sortDirection: orderBy === field.prop ? order : false
    }, react_default.a.createElement(TableSortLabel["default"], {
      active: orderBy === field.prop,
      direction: order,
      onClick: createSortHandler(field.prop)
    }, field.name, orderBy === field.prop ? react_default.a.createElement("span", {
      className: classes.visuallyHidden
    }, order === "desc" ? "sorted descending" : "sorted ascending") : null));
  }), react_default.a.createElement(TableCell["default"], {
    align: "left"
  }, "Status")));
}

ActionTable_EnhancedTableHead.propTypes = {
  classes: prop_types_default.a.object.isRequired,
  numSelected: prop_types_default.a.number.isRequired,
  onRequestSort: prop_types_default.a.func.isRequired,
  onSelectAllClick: prop_types_default.a.func.isRequired,
  order: prop_types_default.a.oneOf(["asc", "desc"]).isRequired,
  orderBy: prop_types_default.a.string.isRequired,
  rowCount: prop_types_default.a.number.isRequired
};
var ActionTable_useToolbarStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === "light" ? {
      color: theme.palette.secondary.main,
      backgroundColor: Object(esm_styles["lighten"])(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    title: {
      flex: "1 1 100%"
    }
  };
});

var ActionTable_EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var classes = ActionTable_useToolbarStyles();
  var numSelected = props.numSelected,
      title = props.title,
      onClickAdd = props.onClickAdd,
      onClickDelete = props.onClickDelete,
      onClickEdit = props.onClickEdit,
      onManageClick = props.onManageClick,
      data = props.data;

  var handleClickEdit = function handleClickEdit() {
    var onClickEdit = props.onClickEdit,
        selected = props.selected,
        data = props.data;
    if (selected.length) onClickEdit(getItem(selected[0], data, "id"));
  };

  var handleClickDelete = function handleClickDelete() {
    var onClickDelete = props.onClickDelete,
        selected = props.selected,
        setSelected = props.setSelected;
    onClickDelete(selected);
    setSelected([]);
  };

  var handleClickEscalate = function handleClickEscalate() {
    var onClickEscalate = props.onClickEscalate,
        selected = props.selected,
        setSelected = props.setSelected;
    onClickEscalate(getItem(selected[0], data, "id"));
    setSelected([]);
  };

  return react_default.a.createElement(Toolbar["default"], {
    className: Object(clsx_m["default"])(classes.root, ActionTable_defineProperty({}, classes.highlight, numSelected > 0))
  }, numSelected > 0 ? react_default.a.createElement(Typography["default"], {
    className: classes.title,
    color: "inherit",
    variant: "subtitle1"
  }, numSelected, " selected") : react_default.a.createElement(Typography["default"], {
    className: classes.title,
    variant: "h6",
    id: "tableTitle"
  }, title), numSelected > 0 ? react_default.a.createElement(react_default.a.Fragment, null, onClickDelete && numSelected === 1 && react_default.a.createElement(Tooltip["default"], {
    title: "Escalate"
  }, react_default.a.createElement(IconButton["default"], {
    onClick: handleClickEscalate,
    "aria-label": "delete"
  }, react_default.a.createElement(ArrowUpward_default.a, null))), onClickEdit && numSelected === 1 && react_default.a.createElement(Tooltip["default"], {
    title: "Edit"
  }, react_default.a.createElement(IconButton["default"], {
    onClick: handleClickEdit,
    "aria-label": "edit"
  }, react_default.a.createElement(Edit_default.a, null))), onClickDelete && react_default.a.createElement(Tooltip["default"], {
    title: "Delete"
  }, react_default.a.createElement(IconButton["default"], {
    onClick: handleClickDelete,
    "aria-label": "delete"
  }, react_default.a.createElement(Delete_default.a, null)))) : react_default.a.createElement(react_default.a.Fragment, null, onClickAdd && react_default.a.createElement(Tooltip["default"], {
    title: "Add entry"
  }, react_default.a.createElement(IconButton["default"], {
    "aria-label": "add",
    onClick: onClickAdd
  }, react_default.a.createElement(Add_default.a, null))), react_default.a.createElement(Tooltip["default"], {
    title: "Manage Escaltions"
  }, react_default.a.createElement(IconButton["default"], {
    "aria-label": "manage escalations",
    onClick: onManageClick
  }, react_default.a.createElement(Settings_default.a, null)))));
};

ActionTable_EnhancedTableToolbar.propTypes = {
  numSelected: prop_types_default.a.number.isRequired
};
var ActionTable_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      marginTop: theme.spacing(1),
      maxWidth: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      maxWidth: "100%"
    },
    tableWrapper: {
      overflowX: "auto"
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    },
    tableCell: {
      fontSize: "0.6rem",
      paddingLeft: "5px",
      paddingRight: "5px"
    },
    tableHeadCell: {
      paddingLeft: "5px",
      paddingRight: "5px"
    }
  };
});
function ActionTable_EnhancedTable(props) {
  var title = props.title,
      data = props.data,
      tableMeta = props.tableMeta,
      onClickAdd = props.onClickAdd,
      onClickDelete = props.onClickDelete,
      onClickEdit = props.onClickEdit,
      onClickEscalate = props.onClickEscalate,
      onManageClick = props.onManageClick,
      currentDashboardId = props.currentDashboardId;
  var classes = ActionTable_useStyles();

  var _React$useState = react_default.a.useState("asc"),
      _React$useState2 = ActionTable_slicedToArray(_React$useState, 2),
      order = _React$useState2[0],
      setOrder = _React$useState2[1];

  var _React$useState3 = react_default.a.useState(tableMeta[0].name),
      _React$useState4 = ActionTable_slicedToArray(_React$useState3, 2),
      orderBy = _React$useState4[0],
      setOrderBy = _React$useState4[1];

  var _React$useState5 = react_default.a.useState([]),
      _React$useState6 = ActionTable_slicedToArray(_React$useState5, 2),
      selected = _React$useState6[0],
      setSelected = _React$useState6[1];

  var _React$useState7 = react_default.a.useState(0),
      _React$useState8 = ActionTable_slicedToArray(_React$useState7, 2),
      page = _React$useState8[0],
      setPage = _React$useState8[1];

  var _React$useState9 = react_default.a.useState(false),
      _React$useState10 = ActionTable_slicedToArray(_React$useState9, 2),
      dense = _React$useState10[0],
      setDense = _React$useState10[1];

  var _React$useState11 = react_default.a.useState(5),
      _React$useState12 = ActionTable_slicedToArray(_React$useState11, 2),
      rowsPerPage = _React$useState12[0],
      setRowsPerPage = _React$useState12[1];

  var handleRequestSort = function handleRequestSort(event, property) {
    var isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = data.map(function (entry) {
        return entry.id;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  var setSelectedHook = function setSelectedHook(newSelected) {
    setSelected(newSelected);
  };

  var handleClick = function handleClick(event, id) {
    var selectedIndex = selected.indexOf(id);
    var newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  var getStatus = function getStatus(entry) {
    if (!entry.tables) return "---";

    if (entry.tables.length > 1) {
      if (entry.source.dashboard.id != currentDashboardId) return react_default.a.createElement(Tooltip["default"], {
        disableFocusListener: true,
        disableTouchListener: true,
        title: "Source - ".concat(entry.source.dashboard.title)
      }, react_default.a.createElement(ArrowDownward_default.a, null));else return react_default.a.createElement(Tooltip["default"], {
        disableFocusListener: true,
        disableTouchListener: true,
        title: "Escalated upward"
      }, react_default.a.createElement(ArrowUpward_default.a, null));
    }

    return "---";
  };

  var isSelected = function isSelected(id) {
    return selected.indexOf(id) !== -1;
  };

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(ActionTable_EnhancedTableToolbar, {
    title: title,
    numSelected: selected.length,
    onClickAdd: onClickAdd,
    onClickDelete: onClickDelete,
    onClickEdit: onClickEdit,
    selected: selected,
    onClickEscalate: onClickEscalate,
    onManageClick: onManageClick,
    setSelected: setSelectedHook,
    data: data
  }), react_default.a.createElement("div", {
    className: classes.tableWrapper
  }, react_default.a.createElement(Table["default"], {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    "aria-label": "enhanced table",
    size: "small"
  }, react_default.a.createElement(ActionTable_EnhancedTableHead, {
    classes: classes,
    numSelected: selected.length,
    order: order,
    orderBy: orderBy,
    onSelectAllClick: handleSelectAllClick,
    onRequestSort: handleRequestSort,
    rowCount: data.length,
    tableMeta: tableMeta
  }), react_default.a.createElement(TableBody["default"], null, ActionTable_stableSort(data, ActionTable_getSorting(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    var isItemSelected = isSelected(row.id);
    var labelId = "enhanced-table-checkbox-".concat(index);
    return react_default.a.createElement(TableRow["default"], {
      hover: true,
      onClick: function onClick(event) {
        return handleClick(event, row.id);
      },
      role: "checkbox",
      "aria-checked": isItemSelected,
      tabIndex: -1,
      key: "".concat(row.id, "-checkbox"),
      selected: isItemSelected
    }, react_default.a.createElement(TableCell["default"], {
      padding: "checkbox"
    }, react_default.a.createElement(Checkbox["default"], {
      checked: isItemSelected,
      inputProps: {
        "aria-labelledby": labelId
      }
    })), tableMeta.map(function (field, index) {
      return react_default.a.createElement(TableCell["default"], {
        align: "left",
        id: row.id,
        key: "".concat(index, "-").concat(row.id),
        className: classes.tableCell
      }, row[field.prop] === null ? "---" : row[field.prop]);
    }), react_default.a.createElement(TableCell["default"], {
      align: "left"
    }, getStatus(row)));
  }), emptyRows > 0 && react_default.a.createElement(TableRow["default"], {
    style: {
      height: 32.67 * emptyRows
    }
  }, react_default.a.createElement(TableCell["default"], {
    colSpan: 6
  }))))), react_default.a.createElement(TablePagination["default"], {
    rowsPerPageOptions: [],
    component: "div",
    count: data.length,
    rowsPerPage: rowsPerPage,
    page: page,
    backIconButtonProps: {
      "aria-label": "previous page"
    },
    nextIconButtonProps: {
      "aria-label": "next page"
    },
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__("./node_modules/@material-ui/icons/Close.js");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slide/index.js + 1 modules
var Slide = __webpack_require__("./node_modules/@material-ui/core/esm/Slide/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/index.js + 1 modules
var AppBar = __webpack_require__("./node_modules/@material-ui/core/esm/AppBar/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/index.js + 1 modules
var Card = __webpack_require__("./node_modules/@material-ui/core/esm/Card/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/index.js + 1 modules
var CardContent = __webpack_require__("./node_modules/@material-ui/core/esm/CardContent/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardActions/index.js + 1 modules
var CardActions = __webpack_require__("./node_modules/@material-ui/core/esm/CardActions/index.js");

// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/EscalationCard.js

 // MATERIAL_UI







var EscalationCard_useStyles = Object(esm_styles["makeStyles"])({
  card: {
    minWidth: 275,
    marginBottom: "20px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginTop: "5px"
  },
  viewBtn: {
    marginLeft: "auto"
  }
});
function EscalationCard(props) {
  var classes = EscalationCard_useStyles();
  var selected = props.selected,
      handleClick = props.handleClick;
  var _props$dashboard = props.dashboard,
      author = _props$dashboard.author,
      title = _props$dashboard.title,
      level = _props$dashboard.level,
      id = _props$dashboard.id;
  var styles = selected === id ? {
    border: "#9BB0DB solid 2px"
  } : {};
  return react_default.a.createElement(Card["default"], {
    className: classes.card,
    style: styles
  }, react_default.a.createElement(CardContent["default"], null, react_default.a.createElement(Typography["default"], {
    variant: "h5",
    component: "h2"
  }, title), react_default.a.createElement(Typography["default"], {
    className: classes.pos,
    color: "textSecondary"
  }, "Author: ", author), react_default.a.createElement(Typography["default"], {
    color: "textSecondary"
  }, "Level: ", level)), react_default.a.createElement(CardActions["default"], null, react_default.a.createElement(Button["default"], {
    size: "medium",
    onClick: function onClick() {
      return handleClick(id);
    }
  }, "SELECT")));
}
EscalationCard.propTypes = {
  dashboard: prop_types_default.a.shape({
    title: prop_types_default.a.string,
    author: prop_types_default.a.string,
    level: prop_types_default.a.number,
    dashboard_type: prop_types_default.a.dashboard_type,
    id: prop_types_default.a.number
  })
};
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/EscalationView.js
function EscalationView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EscalationView_typeof = function _typeof(obj) { return typeof obj; }; } else { EscalationView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EscalationView_typeof(obj); }

function EscalationView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EscalationView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EscalationView_createClass(Constructor, protoProps, staticProps) { if (protoProps) EscalationView_defineProperties(Constructor.prototype, protoProps); if (staticProps) EscalationView_defineProperties(Constructor, staticProps); return Constructor; }

function EscalationView_possibleConstructorReturn(self, call) { if (call && (EscalationView_typeof(call) === "object" || typeof call === "function")) { return call; } return EscalationView_assertThisInitialized(self); }

function EscalationView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EscalationView_getPrototypeOf(o) { EscalationView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EscalationView_getPrototypeOf(o); }

function EscalationView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EscalationView_setPrototypeOf(subClass, superClass); }

function EscalationView_setPrototypeOf(o, p) { EscalationView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EscalationView_setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // CORE COMPONENTS

 // MATERIAL-UI










 // NATIVE COMPONENTS


var EscalationView_Transition = react_default.a.forwardRef(function Transition(props, ref) {
  return react_default.a.createElement(Slide["default"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

var EscalationView_styles = function styles(theme) {
  return {
    appBar: {
      position: "relative",
      background: "#9BB0DB"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    },
    container: {
      padding: theme.spacing(4)
    }
  };
};

var EscalationView_ActionView =
/*#__PURE__*/
function (_Component) {
  EscalationView_inherits(ActionView, _Component);

  function ActionView(props) {
    var _this;

    EscalationView_classCallCheck(this, ActionView);

    _this = EscalationView_possibleConstructorReturn(this, EscalationView_getPrototypeOf(ActionView).call(this, props));

    _this.handleClick = function (id) {
      _this.setState({
        selected: id
      });
    };

    _this.handleToggleOpen = function (state) {
      return function () {
        var toggleOpen = _this.props.toggleOpen;
        toggleOpen(state)();

        _this.setDefaultSelected();
      };
    };

    _this.handleUpdate = function () {
      var _this$props = _this.props,
          updateActionTable = _this$props.updateActionTable,
          toggleOpen = _this$props.toggleOpen;
      var selected = _this.state.selected;

      var stap = _this.filterTables("Short Term Action Plan");

      var ltap = _this.filterTables("Long Term Action Plan");

      updateActionTable(stap, stap.id, selected, stap.title);
      updateActionTable(ltap, ltap.id, selected, ltap.title);
      toggleOpen(false)();
    };

    _this.state = {
      selected: null
    };
    return _this;
  }

  EscalationView_createClass(ActionView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var actionTables = this.props.actionTables;
      if (prevProps.actionTables === actionTables) return;
      this.setDefaultSelected();
    }
  }, {
    key: "setDefaultSelected",
    value: function setDefaultSelected() {
      var actionTables = this.props.actionTables;
      if (!actionTables) return;
      var parent = actionTables[0].parent_dashboard;
      this.setState({
        selected: parent
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          open = _this$props2.open,
          dashboards = _this$props2.dashboards,
          currentDashboard = _this$props2.currentDashboard,
          classes = _this$props2.classes;
      var selected = this.state.selected;
      return react_default.a.createElement(Dialog["default"], {
        open: open,
        onClose: this.handleToggleOpen(false),
        "aria-labelledby": "form-dialog-title",
        fullScreen: true,
        TransitionComponent: EscalationView_Transition
      }, react_default.a.createElement(AppBar["default"], {
        className: classes.appBar
      }, react_default.a.createElement(Toolbar["default"], null, react_default.a.createElement(IconButton["default"], {
        edge: "start",
        color: "inherit",
        onClick: this.handleToggleOpen(false),
        "aria-label": "close"
      }, react_default.a.createElement(Close_default.a, null)), react_default.a.createElement(Typography["default"], {
        variant: "h6",
        className: classes.title
      }, "Manage Escalation"), react_default.a.createElement(Button["default"], {
        autoFocus: true,
        color: "inherit",
        onClick: this.handleUpdate
      }, "save"))), react_default.a.createElement("div", {
        className: classes.container
      }, react_default.a.createElement(Grid["default"], {
        container: true,
        spacing: 3
      }, dashboards.filter(function (dashboard) {
        return dashboard.id !== currentDashboard.id;
      }).map(function (dashboard) {
        return react_default.a.createElement(Grid["default"], {
          item: true,
          lg: 3,
          key: dashboard.id
        }, react_default.a.createElement(EscalationCard, {
          dashboard: dashboard,
          selected: selected,
          handleClick: _this2.handleClick,
          key: dashboard.id
        }));
      }))));
    }
  }, {
    key: "filterTables",
    value: function filterTables(title) {
      var actionTables = this.props.actionTables;
      var payload = actionTables.filter(function (table) {
        return table.title === title;
      });
      return payload ? payload[0] : null;
    }
  }]);

  return ActionView;
}(react["Component"]);

EscalationView_ActionView.propTypes = {
  open: prop_types_default.a.bool
};
/* harmony default export */ var EscalationView = (Object(es["connect"])(null, {
  updateActionTable: dashboards_updateActionTable
})(Object(esm_styles["withStyles"])(EscalationView_styles)(EscalationView_ActionView)));
EscalationView_ActionView.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/ActionForm.js
// DEPENDANCIES

 // MATERIAL-UI






var ActionForm_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    textField: {
      marginBottom: theme.spacing(5),
      width: "100%"
    }
  };
});

function ActionForm(props) {
  var onChange = props.onChange;
  var classes = ActionForm_useStyles();

  var handleDateChange = function handleDateChange(date, name) {
    var onChange = props.onChange;
    onChange({
      target: {
        value: date.toLocaleDateString(),
        name: name
      }
    });
  };

  var _props$action = props.action,
      letter = _props$action.letter,
      problem = _props$action.problem,
      root_cause = _props$action.root_cause,
      solution = _props$action.solution,
      leader = _props$action.leader,
      date = _props$action.date;
  return react_default.a.createElement(Grid["default"], {
    container: true
  }, react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(TextField["default"], {
    required: true,
    fullWidth: true,
    id: "letter",
    label: "Letter",
    className: classes.textField,
    onChange: onChange,
    value: letter || "",
    name: "letter"
  })), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(TextField["default"], {
    required: true,
    fullWidth: true,
    id: "problem",
    label: "Problem",
    className: classes.textField,
    onChange: onChange,
    value: problem || "",
    name: "problem"
  })), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(TextField["default"], {
    required: true,
    fullWidth: true,
    id: "root_cause",
    label: "Root Cause",
    className: classes.textField,
    onChange: onChange,
    value: root_cause || "",
    name: "root_cause"
  })), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(TextField["default"], {
    required: true,
    fullWidth: true,
    id: "solution",
    label: "Solution",
    className: classes.textField,
    onChange: onChange,
    value: solution || "",
    name: "solution"
  })), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(TextField["default"], {
    required: true,
    fullWidth: true,
    id: "leader",
    label: "Leader",
    className: classes.textField,
    onChange: onChange,
    value: leader || "",
    name: "leader"
  })), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(esm["MuiPickersUtilsProvider"], {
    utils: index_esm["default"]
  }, react_default.a.createElement(esm["KeyboardDatePicker"], {
    disableToolbar: true,
    variant: "inline",
    format: "MM/dd/yyyy",
    margin: "normal",
    id: "date",
    className: classes.textField,
    label: "Due Date",
    value: date,
    onChange: function onChange(date) {
      handleDateChange(date, "date");
    },
    KeyboardButtonProps: {
      "aria-label": "change date"
    }
  }))));
}

ActionForm.defaultProps = {
  action: null
};
/* harmony default export */ var components_ActionForm = (ActionForm);
// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/components/ActionView.js
function ActionView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ActionView_typeof = function _typeof(obj) { return typeof obj; }; } else { ActionView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ActionView_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ActionView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ActionView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ActionView_ownKeys(Object(source), true).forEach(function (key) { ActionView_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ActionView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ActionView_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ActionView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ActionView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ActionView_createClass(Constructor, protoProps, staticProps) { if (protoProps) ActionView_defineProperties(Constructor.prototype, protoProps); if (staticProps) ActionView_defineProperties(Constructor, staticProps); return Constructor; }

function ActionView_possibleConstructorReturn(self, call) { if (call && (ActionView_typeof(call) === "object" || typeof call === "function")) { return call; } return ActionView_assertThisInitialized(self); }

function ActionView_getPrototypeOf(o) { ActionView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ActionView_getPrototypeOf(o); }

function ActionView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ActionView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ActionView_setPrototypeOf(subClass, superClass); }

function ActionView_setPrototypeOf(o, p) { ActionView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ActionView_setPrototypeOf(o, p); }




 // MATERIAL-UI











var ActionView_ActionView =
/*#__PURE__*/
function (_Component) {
  ActionView_inherits(ActionView, _Component);

  function ActionView(props) {
    var _this;

    ActionView_classCallCheck(this, ActionView);

    _this = ActionView_possibleConstructorReturn(this, ActionView_getPrototypeOf(ActionView).call(this, props));

    _this.insert = function (source) {
      return function () {
        if (!source) return;
        var addAction = _this.props.addAction;
        var action = {
          tables: [source.id],
          source_id: source.id
        };
        addAction(action);
      };
    };

    _this.escalate = function (table) {
      return function (selection) {
        var updateAction = _this.props.updateAction;

        var action = ActionView_objectSpread({}, selection, {
          tables: [].concat(_toConsumableArray(selection.tables), [table.parent])
        });

        updateAction(action, action.id);
      };
    };

    _this.toggleEscalationOpen = function (state) {
      return function () {
        _this.setState({
          escalationOpen: state
        });
      };
    };

    _this.edit = function (selection) {
      _this.setState({
        open: true,
        formState: selection
      });
    };

    _this.handleToggleOpen = function (state) {
      return function () {
        _this.setState({
          open: state
        });
      };
    };

    _this.onChange = function (e) {
      _this.setState({
        formState: ActionView_objectSpread({}, _this.state.formState, ActionView_defineProperty({}, e.target.name, e.target.value))
      });
    };

    _this.handleUpdate = function (e) {
      _this.setState({
        open: false
      });

      var updateAction = _this.props.updateAction;
      var formState = _this.state.formState;

      var action = ActionView_objectSpread({}, formState);

      updateAction(action, action.id);

      _this.setState({
        formState: {
          letter: "",
          problem: "",
          root_cause: "",
          solution: "",
          leader: ""
        }
      });
    };

    _this.update = _this.update.bind(ActionView_assertThisInitialized(_this));
    _this["delete"] = _this["delete"].bind(ActionView_assertThisInitialized(_this));
    _this.insert = _this.insert.bind(ActionView_assertThisInitialized(_this));
    _this.state = {
      open: false,
      formState: {},
      escalationOpen: false
    };
    return _this;
  }

  ActionView_createClass(ActionView, [{
    key: "filterTables",
    value: function filterTables(title) {
      var tables = this.props.tables;
      var payload = tables.filter(function (table) {
        return table.title === title;
      });
      return payload ? payload[0] : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          formState = _this$state.formState,
          escalationOpen = _this$state.escalationOpen;
      var _this$props = this.props,
          tables = _this$props.tables,
          dashboards = _this$props.dashboards,
          currentDashboard = _this$props.currentDashboard;
      var stap = this.filterTables("Short Term Action Plan");
      var ltap = this.filterTables("Long Term Action Plan");
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(ActionTable_EnhancedTable, {
        title: "Short Term Actions",
        onClickDelete: this["delete"],
        onClickEdit: this.edit,
        onClickAdd: this.insert(stap),
        onClickEscalate: this.escalate(stap),
        onManageClick: this.toggleEscalationOpen(true),
        data: stap ? stap.actions : [],
        tableMeta: ACTION_TABLE_HEADERS,
        currentDashboardId: currentDashboard.id
      }), react_default.a.createElement(ActionTable_EnhancedTable, {
        title: "Long Term Actions",
        onClickDelete: this["delete"],
        onClickEdit: this.edit,
        onClickAdd: this.insert(ltap),
        onClickEscalate: this.escalate(ltap),
        onManageClick: this.toggleEscalationOpen(true),
        data: ltap ? ltap.actions : [],
        tableMeta: ACTION_TABLE_HEADERS,
        currentDashboardId: currentDashboard.id
      }), react_default.a.createElement(Dialog["default"], {
        open: open,
        onClose: this.handleToggleOpen(false),
        "aria-labelledby": "form-dialog-title"
      }, react_default.a.createElement(DialogTitle["default"], {
        id: "form-dialog-title"
      }, "Edit Action"), react_default.a.createElement(DialogContent["default"], null, react_default.a.createElement(components_ActionForm, {
        action: formState,
        onChange: this.onChange
      })), react_default.a.createElement(DialogActions["default"], null, react_default.a.createElement(Button["default"], {
        onClick: this.handleToggleOpen(false),
        color: "primary"
      }, "Cancel"), react_default.a.createElement(Button["default"], {
        onClick: this.handleUpdate,
        color: "primary"
      }, "Confirm"))), react_default.a.createElement(EscalationView, {
        toggleOpen: this.toggleEscalationOpen,
        open: escalationOpen,
        actionTables: tables,
        dashboards: dashboards,
        currentDashboard: currentDashboard
      }));
    }
  }, {
    key: "delete",
    value: function _delete(selection) {
      var deleteAction = this.props.deleteAction;

      for (var i in selection) {
        deleteAction(selection[i]);
      }
    }
  }, {
    key: "update",
    value: function update(current, id) {
      var updateAction = this.props.updateAction;
      updateAction(current, id);
    }
  }]);

  return ActionView;
}(react["Component"]);

ActionView_ActionView.propTypes = {
  data: prop_types_default.a.array,
  editable: prop_types_default.a.bool,
  rowClick: prop_types_default.a.func,
  deletable: prop_types_default.a.bool
};
/* harmony default export */ var components_ActionView = (Object(es["connect"])(null, {
  updateAction: dashboards_updateAction,
  deleteAction: dashboards_deleteAction,
  addAction: dashboards_addAction
})(ActionView_ActionView));
ActionView_ActionView.defaultProps = {
  hoverable: false,
  editable: false,
  deletable: false,
  appendable: false,
  rowClick: null
};
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Replay.js
var Replay = __webpack_require__("./node_modules/@material-ui/icons/Replay.js");
var Replay_default = /*#__PURE__*/__webpack_require__.n(Replay);

// CONCATENATED MODULE: ./frontend/src/scenes/boardRoom/index.js
function boardRoom_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { boardRoom_typeof = function _typeof(obj) { return typeof obj; }; } else { boardRoom_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return boardRoom_typeof(obj); }

function boardRoom_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function boardRoom_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { boardRoom_ownKeys(Object(source), true).forEach(function (key) { boardRoom_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { boardRoom_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function boardRoom_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function boardRoom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function boardRoom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function boardRoom_createClass(Constructor, protoProps, staticProps) { if (protoProps) boardRoom_defineProperties(Constructor.prototype, protoProps); if (staticProps) boardRoom_defineProperties(Constructor, staticProps); return Constructor; }

function boardRoom_possibleConstructorReturn(self, call) { if (call && (boardRoom_typeof(call) === "object" || typeof call === "function")) { return call; } return boardRoom_assertThisInitialized(self); }

function boardRoom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function boardRoom_getPrototypeOf(o) { boardRoom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return boardRoom_getPrototypeOf(o); }

function boardRoom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) boardRoom_setPrototypeOf(subClass, superClass); }

function boardRoom_setPrototypeOf(o, p) { boardRoom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return boardRoom_setPrototypeOf(o, p); }

// DEPENDACIES



 // CORE COMPONENTS


 //import Carousel from "../../core/components/ui/Carousel";
// NATIVE COMPONENTS





 // MATERIAL-UI










var boardRoom_styles = function styles(theme) {
  return {
    rootContainer: {
      margin: 0,
      width: "100%",
      paddingTop: theme.spacing(5)
    },
    carouselContainer: {
      display: "flex",
      justifyContent: "center",
      height: "fit-content"
    },
    nestedColumn: {
      marginTop: "-8px",
      flexDirection: "column",
      paddingRight: "0 !important"
    },
    pillarBarContainer: {
      width: "100%"
    },
    column: {
      flexDirection: "column"
    },
    mediaContainer: {
      justifyContent: "start"
    },
    card: {
      maxWidth: "100%"
    },
    stackedCard: {
      marginBottom: theme.spacing(4)
    },
    title: {
      flex: "1 1 100%",
      color: "rgba(0, 0, 0, 0.87)"
    },
    heatCheck: {
      width: "100%",
      marginBottom: theme.spacing(3)
    }
  };
};

var boardRoom_Boardroom =
/*#__PURE__*/
function (_Component) {
  boardRoom_inherits(Boardroom, _Component);

  function Boardroom() {
    var _getPrototypeOf2;

    var _temp, _this;

    boardRoom_classCallCheck(this, Boardroom);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return boardRoom_possibleConstructorReturn(_this, (_temp = _this = boardRoom_possibleConstructorReturn(this, (_getPrototypeOf2 = boardRoom_getPrototypeOf(Boardroom)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.resetHeat = function () {
      var _this$props = _this.props,
          updateHeat = _this$props.updateHeat,
          heat = _this$props.heat;

      for (var i in heat) {
        var h = boardRoom_objectSpread({}, heat[i]);

        h.value = 0;
        updateHeat(h, h.id);
      }
    }, _temp));
  }

  boardRoom_createClass(Boardroom, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          getADashboard = _this$props2.getADashboard,
          getKpis = _this$props2.getKpis,
          getActionTable = _this$props2.getActionTable,
          getDashboards = _this$props2.getDashboards,
          getAudits = _this$props2.getAudits,
          getWins = _this$props2.getWins,
          getHeat = _this$props2.getHeat; // Fetch data from server
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
      var _this$props3 = this.props,
          currentDashboard = _this$props3.currentDashboard,
          kpis = _this$props3.kpis,
          actionTables = _this$props3.actionTables,
          dashboards = _this$props3.dashboards,
          audits = _this$props3.audits,
          wins = _this$props3.wins,
          heat = _this$props3.heat,
          classes = _this$props3.classes,
          updateHeat = _this$props3.updateHeat;
      var id = this.props.match.params.id; // If there is no current dashboard show the loading screen

      if (currentDashboard == null) {
        return react_default.a.createElement(LoadingScreen, null);
      }

      var images = currentDashboard.images;
      return react_default.a.createElement(Grid["default"], {
        container: true,
        spacing: 4,
        className: classes.rootContainer,
        style: {
          background: currentDashboard.background
        }
      }, react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 2,
        className: classes.pillarBarContainer
      }, react_default.a.createElement(Card["default"], {
        className: classes.card
      }, react_default.a.createElement(components_PillarBar, {
        kpis: kpis,
        dashboardId: id
      }))), react_default.a.createElement(Grid["default"], {
        item: true,
        container: true,
        lg: 10,
        spacing: 1,
        className: classes.mediaContainer,
        alignContent: "flex-start"
      }, react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 7,
        className: classes.carouselContainer
      }, images.length ? react_default.a.createElement(Carousel, {
        slides: images.map(function (image) {
          return {
            imgPath: image.image
          };
        })
      }) : null), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 5,
        className: classes.heatCheck
      }, react_default.a.createElement(Card["default"], {
        className: classes.card
      }, react_default.a.createElement(Toolbar["default"], null, react_default.a.createElement(Typography["default"], {
        className: classes.title,
        variant: "h6",
        id: "heatCheckTitle",
        color: "inherit"
      }, "Heat Check"), react_default.a.createElement(Tooltip["default"], {
        title: "Reset"
      }, react_default.a.createElement(IconButton["default"], {
        onClick: this.resetHeat,
        "aria-label": "reset"
      }, react_default.a.createElement(Replay_default.a, null)))), react_default.a.createElement(d3charts_HeatCheck, {
        heat: heat,
        onClick: updateHeat
      }))), react_default.a.createElement(Grid["default"], {
        item: true,
        container: true,
        spacing: 4
      }, react_default.a.createElement(Grid["default"], {
        item: true,
        container: true,
        lg: 7,
        className: classes.column,
        spacing: 2
      }, react_default.a.createElement(Card["default"], {
        className: classes.card
      }, react_default.a.createElement(components_ActionView, {
        tables: actionTables,
        dashboardId: currentDashboard.id,
        dashboards: dashboards,
        currentDashboard: currentDashboard
      }))), react_default.a.createElement(Grid["default"], {
        item: true,
        container: true,
        lg: 5,
        className: classes.nestedColumn
      }, react_default.a.createElement(Card["default"], {
        className: classes.stackedCard
      }, react_default.a.createElement(components_WinView, {
        data: wins,
        dashboardId: currentDashboard.id
      })), react_default.a.createElement(Card["default"], null, react_default.a.createElement(components_AuditView, {
        data: audits,
        dashboardId: currentDashboard.id
      }))))));
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
  updateHeat: dashboards_updateHeat,
  addWin: dashboards_addWin
})(Object(esm_styles["withStyles"])(boardRoom_styles)(boardRoom_Boardroom)));
// CONCATENATED MODULE: ./frontend/src/core/components/utils/PrivateRoute.js
function PrivateRoute_extends() { PrivateRoute_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PrivateRoute_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * Component will check if user is authenticatd before preceding to mount component
 */

var PrivateRoute_PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      auth = _ref.auth,
      rest = _objectWithoutProperties(_ref, ["component", "auth"]);

  return react_default.a.createElement(react_router_dom["Route"], PrivateRoute_extends({}, rest, {
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
// EXTERNAL MODULE: ./node_modules/react-apexcharts/dist/react-apexcharts.min.js
var react_apexcharts_min = __webpack_require__("./node_modules/react-apexcharts/dist/react-apexcharts.min.js");
var react_apexcharts_min_default = /*#__PURE__*/__webpack_require__.n(react_apexcharts_min);

// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/Chart.js
function Chart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Chart_typeof = function _typeof(obj) { return typeof obj; }; } else { Chart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Chart_typeof(obj); }

function Chart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Chart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Chart_ownKeys(Object(source), true).forEach(function (key) { Chart_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Chart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Chart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Chart_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Chart_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Chart_createClass(Constructor, protoProps, staticProps) { if (protoProps) Chart_defineProperties(Constructor.prototype, protoProps); if (staticProps) Chart_defineProperties(Constructor, staticProps); return Constructor; }

function Chart_possibleConstructorReturn(self, call) { if (call && (Chart_typeof(call) === "object" || typeof call === "function")) { return call; } return Chart_assertThisInitialized(self); }

function Chart_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Chart_getPrototypeOf(o) { Chart_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Chart_getPrototypeOf(o); }

function Chart_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Chart_setPrototypeOf(subClass, superClass); }

function Chart_setPrototypeOf(o, p) { Chart_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Chart_setPrototypeOf(o, p); }




var Chart_Chart =
/*#__PURE__*/
function (_Component) {
  Chart_inherits(Chart, _Component);

  function Chart(props) {
    var _this;

    Chart_classCallCheck(this, Chart);

    _this = Chart_possibleConstructorReturn(this, Chart_getPrototypeOf(Chart).call(this, props));

    _this.toggleLabels = function () {
      _this.setState({
        options: Chart_objectSpread({}, _this.state.options, {
          dataLabels: Chart_objectSpread({}, _this.state.options.dataLabels, {
            enabled: !_this.state.options.dataLabels.enabled
          })
        })
      });
    };

    _this.state = {
      series: props.series,
      options: {
        chart: {
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
              enabled: false,
              delay: 150
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
          zoom: {
            enabled: false
          },
          toolbar: {
            tools: {
              download: true,
              customIcons: [{
                icon: '<i class="fas fa-tag chart-icon"></i>',
                index: -1,
                title: "Toggle data labels",
                click: _this.toggleLabels
              }]
            }
          }
        },
        markers: {
          size: 5,
          colors: undefined,
          strokeColors: "#fff",
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
          radius: 5,
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          hover: {
            size: 7,
            sizeOffset: 3
          }
        },
        colors: props.colors,
        dataLabels: {
          enabled: false,
          formatter: function formatter(val, opts) {
            return val;
          }
        },
        stroke: {
          curve: "smooth"
        },
        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 0.6,
            opacityTo: 0.8
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "left"
        },
        xaxis: {
          type: "datetime"
        }
      }
    };
    return _this;
  }

  Chart_createClass(Chart, [{
    key: "generateDayWiseTimeSeries",
    value: function generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      var series = [];

      while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push([x, y]);
        baseval += 86400000;
        i++;
      }

      return series;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          series = _this$props.series,
          colors = _this$props.colors,
          unit = _this$props.unit;

      var formatter = function (unit) {
        return function (val) {
          return "".concat(val, " ").concat(unit);
        };
      }(unit);

      if (series !== prevProps.series || unit != prevProps.unit || colors != prevProps.colors) {
        this.setState({
          series: series,
          options: Chart_objectSpread({}, this.state.options, {
            colors: colors,
            dataLabels: Chart_objectSpread({}, this.state.options.dataLabels, {
              formatter: formatter
            })
          })
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var type = this.props.type;
      return react_default.a.createElement(react_apexcharts_min_default.a, {
        options: this.state.options,
        series: this.state.series,
        type: type,
        height: "95%"
      });
    }
  }]);

  return Chart;
}(react["Component"]);

Chart_Chart.defaultProps = {
  unit: ""
};
/* harmony default export */ var components_Chart = (Chart_Chart);
// CONCATENATED MODULE: ./frontend/src/core/components/d3charts/LineChart.js
function LineChart_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LineChart_typeof = function _typeof(obj) { return typeof obj; }; } else { LineChart_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LineChart_typeof(obj); }

function LineChart_toConsumableArray(arr) { return LineChart_arrayWithoutHoles(arr) || LineChart_iterableToArray(arr) || LineChart_nonIterableSpread(); }

function LineChart_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function LineChart_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function LineChart_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function LineChart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LineChart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LineChart_ownKeys(Object(source), true).forEach(function (key) { LineChart_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LineChart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  left: 24
};
var LineChart_width = 950 - margin.left - margin.right;
var LineChart_height = 550 - margin.top - margin.bottom;

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
  } // Trigger D3 initial render()


  LineChart_createClass(LineChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderD3();
      this.updateD3();
    } // Trigger D3 update()

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
      .append("g").attr("id", "plotArea").attr("transform", "translate(".concat(margin.left + 30, ",").concat(margin.bottom, ")"));
      svg.append("rect").attr("width", LineChart_width).attr("height", LineChart_height).style("opacity", 0).attr("id", "facade").on("click", function () {
        highlightLine("null");
        selectSeries(null);
      }); // Y-axis

      svg.append("g").attr("class", "myYaxis").style("color", "black").style("font-size", "0.8rem"); // X-axis

      svg.append("g").attr("class", "myXaxis").attr("transform", "translate(0, ".concat(LineChart_height - margin.bottom, ")")).style("color", "black").style("font-size", "0.8rem"); // Y-axis Unit

      svg.append("text").attr("x", 0 - margin.left / 4).attr("y", 0 - margin.top).attr("id", "y_unit").style("fill", "black").attr("text-anchor", "middle").style("font-size", "15px"); // Title

      svg.append("text").attr("x", LineChart_width / 2).attr("id", "title").attr("y", 0 - margin.top / 2).attr("text-anchor", "middle").style("font-weight", "bold").style("font-size", "31px").attr("fill", accentColor);
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
      var test = null;

      if (kpis[index] && kpis[index].series) {
        test = LineChart_objectSpread({}, kpis[index].series[0]);

        var entries = LineChart_toConsumableArray(kpis[index].series[0].entries);

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

      var startDate = new Date();

      if (data[0]) {
        if (data[0].entries[0]) {
          var date = data[0].entries[0].date;
          var parts = date.split("-");
          startDate = new Date(parts[0], parts[1] - 1, parts[2]);
        }
      }

      var xScale = d3["scaleTime"]().domain([new Date(startDate.getFullYear(), 0, 1), new Date(startDate.getFullYear(), 11, 31)]).range([0, LineChart_width]);
      var yScale = d3["scaleLinear"]().domain(minimum.length ? [d3["min"](minimum) * 0.8, d3["max"](maximum) * 1.2] : [0, 100]).range([LineChart_height - margin.bottom, 0]);
      var y_axis = d3["axisLeft"](yScale);
      var x_axis = d3["axisBottom"](xScale).tickFormat(d3["timeFormat"]("%b")); // Update the X_Axis

      d3["select"](faux).selectAll(".myXaxis").style("font-size", "0.7rem").transition().duration(1000).call(x_axis); // Update the Y_Axis

      d3["select"](faux).selectAll(".myYaxis").style("font-size", "0.6rem").transition().duration(1000).call(y_axis); // -----------------------------------------------------------------------------
      // LINES
      // -----------------------------------------------------------------------------

      var line = d3["line"]().curve(d3["curveCardinal"]).y(function (d) {
        return yScale(d.value);
      }).defined(function (d) {
        return d.value != null;
      }).x(function (d) {
        return xScale(parseTime(d.date));
      });
      var s = d3["select"](faux).select("#plotArea").selectAll(".line");
      var extendedData = test != null ? [test].concat(LineChart_toConsumableArray(data)) : data;
      var sData = s.data(extendedData);
      var sEnter = sData.enter().append("path").merge(s).attr("d", function (d) {
        return line(d.entries);
      }).style("opacity", 1).attr("id", function (d) {
        return "line_".concat(d.id);
      }).attr("class", "line").attr("fill", function (d) {
        return "url(#".concat(d.id, "-gradient)");
      }).attr("stroke-width", 1.8).attr("stroke", function (d) {
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
      }).enter().append("circle").attr("cx", function (d) {
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
        return margin.top * 2 + 20 * i;
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
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/Table.js
function Table_slicedToArray(arr, i) { return Table_arrayWithHoles(arr) || Table_iterableToArrayLimit(arr, i) || Table_nonIterableRest(); }

function Table_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Table_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Table_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Table_desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function Table_stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function Table_getSorting(order, orderBy) {
  return order === "desc" ? function (a, b) {
    return Table_desc(a, b, orderBy);
  } : function (a, b) {
    return -Table_desc(a, b, orderBy);
  };
}

function ExtendedTableHead(props) {
  var classes = props.classes,
      order = props.order,
      orderBy = props.orderBy,
      tableMeta = props.tableMeta;
  return react_default.a.createElement(TableHead["default"], null, react_default.a.createElement(TableRow["default"], null, tableMeta.map(function (field, i) {
    return react_default.a.createElement(TableCell["default"], {
      key: field.name,
      align: field.numeric ? "right" : "left",
      className: classes.tableHeadCell,
      sortDirection: orderBy === field.prop ? order : false
    }, field.name);
  })));
}

ExtendedTableHead.propTypes = {
  classes: prop_types_default.a.object.isRequired,
  rowCount: prop_types_default.a.number.isRequired
};
var components_Table_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      maxWidth: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      maxWidth: "100%"
    },
    tableWrapper: {
      overflowX: "auto"
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    },
    tableCell: {
      fontSize: "0.6rem",
      paddingLeft: "5px",
      paddingRight: "5px"
    },
    tableHeadCell: {
      paddingLeft: "5px",
      paddingRight: "5px"
    }
  };
});
function Table_EnhancedTable(props) {
  var data = props.data,
      tableMeta = props.tableMeta;
  var classes = components_Table_useStyles();

  var _React$useState = react_default.a.useState("asc"),
      _React$useState2 = Table_slicedToArray(_React$useState, 2),
      order = _React$useState2[0],
      setOrder = _React$useState2[1];

  var _React$useState3 = react_default.a.useState(tableMeta[0].name),
      _React$useState4 = Table_slicedToArray(_React$useState3, 2),
      orderBy = _React$useState4[0],
      setOrderBy = _React$useState4[1];

  var _React$useState5 = react_default.a.useState(0),
      _React$useState6 = Table_slicedToArray(_React$useState5, 2),
      page = _React$useState6[0],
      setPage = _React$useState6[1];

  var _React$useState7 = react_default.a.useState(5),
      _React$useState8 = Table_slicedToArray(_React$useState7, 2),
      rowsPerPage = _React$useState8[0],
      setRowsPerPage = _React$useState8[1];

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement("div", {
    className: classes.tableWrapper
  }, react_default.a.createElement(Table["default"], {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    "aria-label": "enhanced table",
    size: "small"
  }, react_default.a.createElement(ExtendedTableHead, {
    classes: classes,
    rowCount: data.length,
    tableMeta: tableMeta
  }), react_default.a.createElement(TableBody["default"], null, Table_stableSort(data, Table_getSorting(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    return react_default.a.createElement(TableRow["default"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.id
    }, tableMeta.map(function (field, index) {
      return react_default.a.createElement(TableCell["default"], {
        align: "left",
        id: row.id,
        key: "".concat(index, "-").concat(row.id),
        className: classes.tableCell
      }, row[field.prop] === null ? "---" : field.formatter ? field.formatter(row[field.prop]) : row[field.prop]);
    }));
  }), emptyRows > 0 && react_default.a.createElement(TableRow["default"], {
    style: {
      height: 32.67 * emptyRows
    }
  }, react_default.a.createElement(TableCell["default"], {
    colSpan: 6
  }))))), react_default.a.createElement(TablePagination["default"], {
    rowsPerPageOptions: [],
    component: "div",
    count: data.length,
    rowsPerPage: rowsPerPage,
    page: page,
    backIconButtonProps: {
      "aria-label": "previous page"
    },
    nextIconButtonProps: {
      "aria-label": "next page"
    },
    onChangePage: handleChangePage
  }));
}
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/index.js + 1 modules
var MenuItem = __webpack_require__("./node_modules/@material-ui/core/esm/MenuItem/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/index.js + 5 modules
var Select = __webpack_require__("./node_modules/@material-ui/core/esm/Select/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Timeline.js
var Timeline = __webpack_require__("./node_modules/@material-ui/icons/Timeline.js");
var Timeline_default = /*#__PURE__*/__webpack_require__.n(Timeline);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/LibraryAdd.js
var LibraryAdd = __webpack_require__("./node_modules/@material-ui/icons/LibraryAdd.js");
var LibraryAdd_default = /*#__PURE__*/__webpack_require__.n(LibraryAdd);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/index.js + 49 modules
var styles_esm = __webpack_require__("./node_modules/@material-ui/styles/esm/index.js");

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
 // MATERIAL-UI









var ChartOptions_styles = function styles(theme) {
  return {
    KpiSelect: {
      width: "200px"
    },
    plotButton: {
      marginLeft: "auto !important"
    }
  };
};

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
          kpi = _this$props2.kpi,
          classes = _this$props2.classes,
          handleKpiNewOpen = _this$props2.handleKpiNewOpen;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(Select["default"], {
        onChange: this.onChange,
        className: classes.KpiSelect,
        value: kpi ? kpi.id : ""
      }, kpis.map(function (kpi) {
        return react_default.a.createElement(MenuItem["default"], {
          key: "choice-".concat(kpi.id),
          value: kpi.id
        }, kpi.name);
      })), react_default.a.createElement(IconButton["default"], {
        onClick: handleKpiNewOpen(true)
      }, react_default.a.createElement(LibraryAdd_default.a, {
        color: "primary"
      })), kpi && react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(IconButton["default"], {
        className: classes.plotButton,
        onClick: function onClick() {
          return changeMenu(false);
        },
        disabled: menuMode ? false : true
      }, react_default.a.createElement(Timeline_default.a, null)), react_default.a.createElement(IconButton["default"], {
        onClick: function onClick() {
          return changeMenu(true);
        },
        disabled: menuMode ? true : false
      }, react_default.a.createElement(Settings_default.a, null))));
    }
  }]);

  return ChartOptions;
}(react["Component"]);

/* harmony default export */ var components_ChartOptions = (Object(styles_esm["withStyles"])(ChartOptions_styles)(ChartOptions_ChartOptions));
// EXTERNAL MODULE: ./node_modules/react-color/lib/index.js
var react_color_lib = __webpack_require__("./node_modules/react-color/lib/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/RadioGroup/index.js + 3 modules
var RadioGroup = __webpack_require__("./node_modules/@material-ui/core/esm/RadioGroup/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Radio/index.js + 4 modules
var Radio = __webpack_require__("./node_modules/@material-ui/core/esm/Radio/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/index.js + 1 modules
var FormControlLabel = __webpack_require__("./node_modules/@material-ui/core/esm/FormControlLabel/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/index.js + 1 modules
var FormControl = __webpack_require__("./node_modules/@material-ui/core/esm/FormControl/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/index.js + 3 modules
var InputLabel = __webpack_require__("./node_modules/@material-ui/core/esm/InputLabel/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Save.js
var Save = __webpack_require__("./node_modules/@material-ui/icons/Save.js");
var Save_default = /*#__PURE__*/__webpack_require__.n(Save);

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

 // MATERIAL-UI
















var SeriesEdit_styles = function styles(theme) {
  return {
    textField: {
      marginBottom: "40px",
      paddingRight: theme.spacing(2)
    },
    formControl: {
      width: "100%",
      marginBottom: "20px"
    }
  };
};

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
      var classes = this.props.classes;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        noValidate: true,
        className: "w-100"
      }, react_default.a.createElement(Grid["default"], {
        container: true,
        spacing: 4
      }, react_default.a.createElement(Grid["default"], {
        item: true,
        sm: 6
      }, react_default.a.createElement(TextField["default"], {
        fullWidth: true,
        label: "Name",
        className: classes.textField,
        type: "text",
        name: "name",
        onChange: this.onChange,
        placeholder: "...",
        value: name,
        required: true
      }), react_default.a.createElement(FormControl["default"], {
        className: classes.formControl
      }, react_default.a.createElement(InputLabel["default"], {
        id: "kpi_type"
      }, "Type"), react_default.a.createElement(Select["default"], {
        type: "text",
        name: "plot_type",
        onChange: this.onChange,
        placeholder: "...",
        value: plot_type,
        fullWidth: true,
        required: true
      }, PLOT_TYPE_CHOICES.map(function (choice) {
        return react_default.a.createElement(MenuItem["default"], {
          key: "choice-".concat(choice.id),
          value: choice.id
        }, choice.name);
      })))), react_default.a.createElement(Grid["default"], {
        item: true,
        sm: 4
      }, react_default.a.createElement(FormControl["default"], {
        className: classes.textField
      }, react_default.a.createElement("label", {
        htmlFor: "color"
      }, "Color"), react_default.a.createElement(react_color_lib["ChromePicker"], {
        color: color,
        onChangeComplete: this.onChangeColor
      })))), react_default.a.createElement(Button["default"], {
        type: "submit",
        color: "primary",
        variant: "contained",
        startIcon: react_default.a.createElement(Save_default.a, null)
      }, "Save Series")));
    }
  }]);

  return SeriesEdit;
}(react["Component"]);

SeriesEdit_SeriesEdit.propTypes = {
  updateSeries: prop_types_default.a.func.isRequired
};
/* harmony default export */ var series_SeriesEdit = (Object(es["connect"])(null, {
  updateSeries: dashboards_updateSeries
})(Object(esm_styles["withStyles"])(SeriesEdit_styles)(SeriesEdit_SeriesEdit)));
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












var RemoveConfirmation_RemoveConfirmation =
/*#__PURE__*/
function (_Component) {
  RemoveConfirmation_inherits(RemoveConfirmation, _Component);

  function RemoveConfirmation(props) {
    var _this;

    RemoveConfirmation_classCallCheck(this, RemoveConfirmation);

    _this = RemoveConfirmation_possibleConstructorReturn(this, RemoveConfirmation_getPrototypeOf(RemoveConfirmation).call(this, props));

    _this.handleChange = function (e) {
      _this.setState(RemoveConfirmation_defineProperty({}, e.target.name, e.target.value));
    };

    _this.handleToggleOpen = function (state) {
      return function () {
        _this.setState({
          open: state
        });
      };
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var removeContext = _this.props.removeContext;
      var response = removeContext.onSubmit(_this.state);
      if (response) _this.setState({
        open: false
      });
    };

    _this.modalRef = react_default.a.createRef();
    _this.state = {
      password: "",
      exported: false,
      name: "",
      open: false
    };
    return _this;
  }

  RemoveConfirmation_createClass(RemoveConfirmation, [{
    key: "render",
    value: function render() {
      var removeContext = this.props.removeContext;
      if (!removeContext) return react_default.a.createElement(react_default.a.Fragment, null);
      var type = removeContext.type,
          item = removeContext.item;
      var _this$state = this.state,
          name = _this$state.name,
          open = _this$state.open;
      return react_default.a.createElement(Dialog["default"], {
        open: open,
        onClose: this.handleToggleOpen(false),
        "aria-labelledby": "form-dialog-title"
      }, react_default.a.createElement(DialogTitle["default"], {
        id: "form-dialog-title"
      }, "Are You Sure?"), react_default.a.createElement(DialogContent["default"], null, react_default.a.createElement(DialogContentText["default"], null, "This action cannot be undone. This will permanetly remove the", " ", react_default.a.createElement("span", {
        style: {
          color: "#3F51B5",
          fontWeight: "bold"
        }
      }, item ? item.name || item.title : "null"), " ", "".concat(type, " and all associated data."), " "), react_default.a.createElement(TextField["default"], {
        autoFocus: true,
        margin: "dense",
        id: "name",
        label: "Confirm name",
        type: "text",
        fullWidth: true,
        name: "name",
        onChange: this.handleChange,
        value: name
      })), react_default.a.createElement(DialogActions["default"], null, react_default.a.createElement(Button["default"], {
        onClick: this.handleToggleOpen(false),
        color: "primary"
      }, "Cancel"), react_default.a.createElement(Button["default"], {
        onClick: this.handleSubmit,
        color: "primary"
      }, "Confirm")));
    }
  }]);

  return RemoveConfirmation;
}(react["Component"]);

RemoveConfirmation_RemoveConfirmation.propTypes = {
  removeContext: prop_types_default.a.object
};
/* harmony default export */ var ui_RemoveConfirmation = (RemoveConfirmation_RemoveConfirmation);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/index.js + 1 modules
var Paper = __webpack_require__("./node_modules/@material-ui/core/esm/Paper/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/index.js + 1 modules
var Switch = __webpack_require__("./node_modules/@material-ui/core/esm/Switch/index.js");

// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/datapoints/DataTable.js
function DataTable_slicedToArray(arr, i) { return DataTable_arrayWithHoles(arr) || DataTable_iterableToArrayLimit(arr, i) || DataTable_nonIterableRest(); }

function DataTable_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function DataTable_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function DataTable_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function DataTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function DataTable_desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function DataTable_stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function DataTable_getSorting(order, orderBy) {
  return order === "desc" ? function (a, b) {
    return DataTable_desc(a, b, orderBy);
  } : function (a, b) {
    return -DataTable_desc(a, b, orderBy);
  };
}

function DataTable_EnhancedTableHead(props) {
  var classes = props.classes,
      onSelectAllClick = props.onSelectAllClick,
      order = props.order,
      orderBy = props.orderBy,
      numSelected = props.numSelected,
      rowCount = props.rowCount,
      onRequestSort = props.onRequestSort,
      tableMeta = props.tableMeta;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  return react_default.a.createElement(TableHead["default"], null, react_default.a.createElement(TableRow["default"], null, tableMeta.map(function (field, i) {
    return react_default.a.createElement(TableCell["default"], {
      key: field.name,
      align: field.numeric ? "right" : "left",
      className: classes.tableHeadCell,
      sortDirection: orderBy === field.prop ? order : false
    }, react_default.a.createElement(TableSortLabel["default"], {
      active: orderBy === field.prop,
      direction: order,
      onClick: createSortHandler(field.prop)
    }, field.name, orderBy === field.prop ? react_default.a.createElement("span", {
      className: classes.visuallyHidden
    }, order === "desc" ? "sorted descending" : "sorted ascending") : null));
  })));
}

DataTable_EnhancedTableHead.propTypes = {
  classes: prop_types_default.a.object.isRequired,
  numSelected: prop_types_default.a.number.isRequired,
  onRequestSort: prop_types_default.a.func.isRequired,
  onSelectAllClick: prop_types_default.a.func.isRequired,
  order: prop_types_default.a.oneOf(["asc", "desc"]).isRequired,
  orderBy: prop_types_default.a.string.isRequired,
  rowCount: prop_types_default.a.number.isRequired
};
var DataTable_useToolbarStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === "light" ? {
      color: theme.palette.secondary.main,
      backgroundColor: Object(esm_styles["lighten"])(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    title: {
      flex: "1 1 100%"
    }
  };
});

var DataTable_EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var classes = DataTable_useToolbarStyles();
  var numSelected = props.numSelected,
      title = props.title,
      onClickAdd = props.onClickAdd,
      onClickDelete = props.onClickDelete,
      onClickEdit = props.onClickEdit,
      data = props.data;

  var handleClickEdit = function handleClickEdit() {
    var onClickEdit = props.onClickEdit,
        selected = props.selected,
        data = props.data;
    if (selected.length) onClickEdit(getItem(selected[0], data, "id"));
  };

  var handleClickDelete = function handleClickDelete() {
    var onClickDelete = props.onClickDelete,
        selected = props.selected,
        setSelected = props.setSelected;
    onClickDelete(selected);
    setSelected([]);
  };

  return react_default.a.createElement(Toolbar["default"], {
    className: Object(clsx_m["default"])(classes.root, DataTable_defineProperty({}, classes.highlight, numSelected > 0))
  }, numSelected > 0 ? react_default.a.createElement(Typography["default"], {
    className: classes.title,
    color: "inherit",
    variant: "subtitle1"
  }, numSelected, " selected") : react_default.a.createElement(Typography["default"], {
    className: classes.title,
    variant: "h6",
    id: "tableTitle"
  }, title), numSelected > 0 ? react_default.a.createElement(react_default.a.Fragment, null, onClickEdit && numSelected === 1 && react_default.a.createElement(Tooltip["default"], {
    title: "Edit"
  }, react_default.a.createElement(IconButton["default"], {
    onClick: handleClickEdit,
    "aria-label": "edit"
  }, react_default.a.createElement(Edit_default.a, null))), onClickDelete && react_default.a.createElement(Tooltip["default"], {
    title: "Delete"
  }, react_default.a.createElement(IconButton["default"], {
    onClick: handleClickDelete,
    "aria-label": "delete"
  }, react_default.a.createElement(Delete_default.a, null)))) : react_default.a.createElement(react_default.a.Fragment, null, onClickAdd && react_default.a.createElement(Tooltip["default"], {
    title: "Add entry"
  }, react_default.a.createElement(IconButton["default"], {
    "aria-label": "add",
    onClick: onClickAdd
  }, react_default.a.createElement(Add_default.a, null))), react_default.a.createElement(Tooltip["default"], {
    title: "Filter list"
  }, react_default.a.createElement(IconButton["default"], {
    "aria-label": "filter list"
  }, react_default.a.createElement(FilterList_default.a, null)))));
};

DataTable_EnhancedTableToolbar.propTypes = {
  numSelected: prop_types_default.a.number.isRequired
};
var DataTable_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    root: {
      width: "100%",
      marginTop: theme.spacing(1),
      maxWidth: "100%"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2)
    },
    table: {
      maxWidth: "100%"
    },
    tableWrapper: {
      overflowX: "auto"
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    },
    tableCell: {
      fontSize: "1rem",
      paddingLeft: "5px",
      paddingRight: "5px"
    },
    tableHeadCell: {
      paddingLeft: "5px",
      paddingRight: "5px"
    },
    tableRow: {
      cursor: "pointer"
    }
  };
});
function DataTable_EnhancedTable(props) {
  var title = props.title,
      data = props.data,
      tableMeta = props.tableMeta,
      onClickAdd = props.onClickAdd,
      onClickDelete = props.onClickDelete,
      onClickEdit = props.onClickEdit,
      onRowClick = props.onRowClick;
  var classes = DataTable_useStyles();

  var _React$useState = react_default.a.useState("asc"),
      _React$useState2 = DataTable_slicedToArray(_React$useState, 2),
      order = _React$useState2[0],
      setOrder = _React$useState2[1];

  var _React$useState3 = react_default.a.useState(tableMeta[0].name),
      _React$useState4 = DataTable_slicedToArray(_React$useState3, 2),
      orderBy = _React$useState4[0],
      setOrderBy = _React$useState4[1];

  var _React$useState5 = react_default.a.useState([]),
      _React$useState6 = DataTable_slicedToArray(_React$useState5, 2),
      selected = _React$useState6[0],
      setSelected = _React$useState6[1];

  var _React$useState7 = react_default.a.useState(0),
      _React$useState8 = DataTable_slicedToArray(_React$useState7, 2),
      page = _React$useState8[0],
      setPage = _React$useState8[1];

  var _React$useState9 = react_default.a.useState(false),
      _React$useState10 = DataTable_slicedToArray(_React$useState9, 2),
      dense = _React$useState10[0],
      setDense = _React$useState10[1];

  var _React$useState11 = react_default.a.useState(5),
      _React$useState12 = DataTable_slicedToArray(_React$useState11, 2),
      rowsPerPage = _React$useState12[0],
      setRowsPerPage = _React$useState12[1];

  var handleRequestSort = function handleRequestSort(event, property) {
    var isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = data.map(function (entry) {
        return entry.id;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  var setSelectedHook = function setSelectedHook(newSelected) {
    setSelected(newSelected);
  };

  var handleClick = function handleClick(event, id) {
    onRowClick(getItem(id, data, "id"));
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  var isSelected = function isSelected(id) {
    return selected.indexOf(id) !== -1;
  };

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(DataTable_EnhancedTableToolbar, {
    title: title,
    numSelected: selected.length,
    onClickAdd: onClickAdd,
    onClickDelete: onClickDelete,
    onClickEdit: onClickEdit,
    selected: selected,
    setSelected: setSelectedHook,
    data: data
  }), react_default.a.createElement("div", {
    className: classes.tableWrapper
  }, react_default.a.createElement(Table["default"], {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    "aria-label": "enhanced table"
  }, react_default.a.createElement(DataTable_EnhancedTableHead, {
    classes: classes,
    numSelected: selected.length,
    order: order,
    orderBy: orderBy,
    onSelectAllClick: handleSelectAllClick,
    onRequestSort: handleRequestSort,
    rowCount: data.length,
    tableMeta: tableMeta
  }), react_default.a.createElement(TableBody["default"], null, DataTable_stableSort(data, DataTable_getSorting(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    var isItemSelected = isSelected(row.id);
    var labelId = "enhanced-table-checkbox-".concat(index);
    return react_default.a.createElement(TableRow["default"], {
      hover: true,
      onClick: function onClick(event) {
        return handleClick(event, row.id);
      },
      role: "checkbox",
      "aria-checked": isItemSelected,
      tabIndex: -1,
      key: row.id,
      className: classes.tableRow,
      selected: isItemSelected
    }, tableMeta.map(function (field, index) {
      return react_default.a.createElement(TableCell["default"], {
        align: "left",
        id: row.id,
        className: classes.tableCell,
        key: "".concat(index, "-").concat(row.id)
      }, row[field.prop] === null ? "---" : row[field.prop]);
    }));
  }), emptyRows > 0 && react_default.a.createElement(TableRow["default"], {
    style: {
      height: 55.33 * emptyRows
    }
  }, react_default.a.createElement(TableCell["default"], {
    colSpan: 6
  }))))), react_default.a.createElement(TablePagination["default"], {
    rowsPerPageOptions: [],
    component: "div",
    count: data.length,
    rowsPerPage: rowsPerPage,
    page: page,
    backIconButtonProps: {
      "aria-label": "previous page"
    },
    nextIconButtonProps: {
      "aria-label": "next page"
    },
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  }));
}
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.min.js
var react_datepicker_min = __webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.min.js");

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.css");

// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var parseISO = __webpack_require__("./node_modules/date-fns/esm/parseISO/index.js");

// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 4 modules
var esm_format = __webpack_require__("./node_modules/date-fns/esm/format/index.js");

// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/datapoints/DataForm.js
function DataForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DataForm_typeof = function _typeof(obj) { return typeof obj; }; } else { DataForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DataForm_typeof(obj); }

function DataForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DataForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DataForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) DataForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) DataForm_defineProperties(Constructor, staticProps); return Constructor; }

function DataForm_possibleConstructorReturn(self, call) { if (call && (DataForm_typeof(call) === "object" || typeof call === "function")) { return call; } return DataForm_assertThisInitialized(self); }

function DataForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DataForm_getPrototypeOf(o) { DataForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DataForm_getPrototypeOf(o); }

function DataForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DataForm_setPrototypeOf(subClass, superClass); }

function DataForm_setPrototypeOf(o, p) { DataForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DataForm_setPrototypeOf(o, p); }















var DataForm_styles = function styles(theme) {
  return {
    textField: {
      marginBottom: theme.spacing(5),
      width: "100%"
    }
  };
};

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

    return DataForm_possibleConstructorReturn(_this, (_temp = _this = DataForm_possibleConstructorReturn(this, (_getPrototypeOf2 = DataForm_getPrototypeOf(DataForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.handleDateChange = function (date) {
      var onChange = _this.props.onChange;
      onChange({
        target: {
          name: "date",
          value: Object(esm_format["default"])(date, "yyyy-MM-dd")
        }
      });
    }, _temp));
  }

  DataForm_createClass(DataForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$datapoint = this.props.datapoint,
          value = _this$props$datapoint.value,
          target = _this$props$datapoint.target,
          date = _this$props$datapoint.date;
      var _this$props = this.props,
          classes = _this$props.classes,
          onChange = _this$props.onChange;
      var parts = date.split("-");
      var newDate = new Date(parts[0], parts[1] - 1, parts[2]);
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        noValidate: true
      }, react_default.a.createElement(TextField["default"], {
        required: true,
        fullWidth: true,
        id: "value",
        label: "Value",
        className: classes.textField,
        onChange: onChange,
        value: value != null ? value : "",
        name: "value"
      }), react_default.a.createElement(TextField["default"], {
        required: true,
        fullWidth: true,
        id: "target",
        label: "Target",
        className: classes.textField,
        onChange: onChange,
        value: target != null ? target : "",
        name: "target"
      }), react_default.a.createElement(esm["MuiPickersUtilsProvider"], {
        utils: index_esm["default"]
      }, react_default.a.createElement(esm["KeyboardDatePicker"], {
        disableToolbar: true,
        variant: "inline",
        format: "yyyy-MM-dd",
        margin: "normal",
        id: "date",
        className: classes.textField,
        label: "Date",
        value: newDate,
        onChange: function onChange(date) {
          _this2.handleDateChange(date);
        },
        KeyboardButtonProps: {
          "aria-label": "change date"
        }
      }))));
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
})(Object(esm_styles["withStyles"])(DataForm_styles)(DataForm_DataForm)));
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/datapoints/DataView.js
function DataView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DataView_typeof = function _typeof(obj) { return typeof obj; }; } else { DataView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DataView_typeof(obj); }

function DataView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DataView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DataView_ownKeys(Object(source), true).forEach(function (key) { DataView_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DataView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DataView_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DataView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DataView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DataView_createClass(Constructor, protoProps, staticProps) { if (protoProps) DataView_defineProperties(Constructor.prototype, protoProps); if (staticProps) DataView_defineProperties(Constructor, staticProps); return Constructor; }

function DataView_possibleConstructorReturn(self, call) { if (call && (DataView_typeof(call) === "object" || typeof call === "function")) { return call; } return DataView_assertThisInitialized(self); }

function DataView_getPrototypeOf(o) { DataView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DataView_getPrototypeOf(o); }

function DataView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DataView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DataView_setPrototypeOf(subClass, superClass); }

function DataView_setPrototypeOf(o, p) { DataView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DataView_setPrototypeOf(o, p); }















var DataView_DatapointView =
/*#__PURE__*/
function (_Component) {
  DataView_inherits(DatapointView, _Component);

  function DatapointView(props) {
    var _this;

    DataView_classCallCheck(this, DatapointView);

    _this = DataView_possibleConstructorReturn(this, DataView_getPrototypeOf(DatapointView).call(this, props));

    _this.rowClick = function (datapoint) {
      var open = _this.state.open;
      if (open) return;

      _this.setState({
        open: true,
        formState: DataView_objectSpread({}, datapoint)
      });
    };

    _this.edit = function (selection) {
      _this.setState({
        open: true,
        formState: selection
      });
    };

    _this.handleToggleOpen = function (state) {
      return function () {
        _this.setState({
          open: state
        });
      };
    };

    _this.onChange = function (e) {
      _this.setState({
        formState: DataView_objectSpread({}, _this.state.formState, DataView_defineProperty({}, e.target.name, e.target.value))
      });
    };

    _this.handleUpdate = function (e) {
      _this.setState({
        open: false
      });

      var updateDatapoint = _this.props.updateDatapoint;
      var formState = _this.state.formState;

      var datapoint = DataView_objectSpread({}, formState);

      updateDatapoint(datapoint, datapoint.id);
    };

    _this.update = _this.update.bind(DataView_assertThisInitialized(_this));
    _this.state = {
      open: false,
      formState: {}
    };
    return _this;
  }

  DataView_createClass(DatapointView, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          formState = _this$state.formState;
      var series = this.props.series;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(DataTable_EnhancedTable, {
        title: "Data",
        data: series.entries,
        tableMeta: DATAPOINT_TABLE_HEADERS,
        onRowClick: this.rowClick
      }), react_default.a.createElement(Dialog["default"], {
        open: open,
        onClose: this.handleToggleOpen(false),
        "aria-labelledby": "form-dialog-title"
      }, react_default.a.createElement(DialogTitle["default"], {
        id: "form-dialog-title"
      }, "Edit Datapoint"), react_default.a.createElement(DialogContent["default"], null, react_default.a.createElement(datapoints_DataForm, {
        datapoint: formState,
        onChange: this.onChange
      })), react_default.a.createElement(DialogActions["default"], null, react_default.a.createElement(Button["default"], {
        onClick: this.handleToggleOpen(false),
        color: "primary"
      }, "Cancel"), react_default.a.createElement(Button["default"], {
        onClick: this.handleUpdate,
        color: "primary"
      }, "Confirm"))));
    }
  }, {
    key: "update",
    value: function update(current, id) {
      var updateDatapoint = this.props.updateDatapoint;
      updateDatapoint(current, id);
    }
  }]);

  return DatapointView;
}(react["Component"]);

DataView_DatapointView.propTypes = {
  data: prop_types_default.a.array,
  editable: prop_types_default.a.bool,
  rowClick: prop_types_default.a.func,
  deletable: prop_types_default.a.bool
};
/* harmony default export */ var DataView = (Object(es["connect"])(null, {
  updateDatapoint: dashboards_updateDatapoint
})(DataView_DatapointView));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Breadcrumbs/index.js + 4 modules
var Breadcrumbs = __webpack_require__("./node_modules/@material-ui/core/esm/Breadcrumbs/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/KeyboardBackspace.js
var KeyboardBackspace = __webpack_require__("./node_modules/@material-ui/icons/KeyboardBackspace.js");
var KeyboardBackspace_default = /*#__PURE__*/__webpack_require__.n(KeyboardBackspace);

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













var SeriesView_styles = function styles(theme) {
  return {
    heading: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4)
    },
    breadcrumbs: {
      paddingTop: "12px",
      paddingBottom: "12px"
    }
  };
};

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
      _this.RemoveConfirmation.current.handleToggleOpen(true)();
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

    _this.onSubmitRemove = _this.onSubmitRemove.bind(SeriesView_assertThisInitialized(_this));
    _this.RemoveConfirmation = react_default.a.createRef();
    return _this;
  }

  SeriesView_createClass(SeriesView, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          series = _this$props2.series,
          onBack = _this$props2.onBack,
          kpi = _this$props2.kpi,
          pillarId = _this$props2.pillarId,
          classes = _this$props2.classes;
      var selectedDatapoint = this.state.selectedDatapoint;
      if (!series) return react_default.a.createElement(react_default.a.Fragment, null);
      var datapoint = {};

      if (series.entries) {
        datapoint = getItem(selectedDatapoint, series.entries, "id");
      }

      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(Breadcrumbs["default"], {
        "aria-label": "breadcrumb"
      }, react_default.a.createElement(Typography["default"], {
        color: "inherit",
        href: "/"
      }, pillarId), react_default.a.createElement(Typography["default"], {
        color: "inherit",
        href: "/getting-started/installation/"
      }, kpi.name), react_default.a.createElement(Typography["default"], null, series.name), react_default.a.createElement(IconButton["default"], {
        onClick: onBack
      }, react_default.a.createElement(KeyboardBackspace_default.a, null))), react_default.a.createElement(Typography["default"], {
        className: classes.heading,
        variant: "h4"
      }, "Properties"), react_default.a.createElement(series_SeriesEdit, {
        series: series
      }), react_default.a.createElement("hr", null), react_default.a.createElement(DataView, {
        series: series
      }), react_default.a.createElement("div", {
        style: {
          "float": "right"
        }
      }, react_default.a.createElement(Button["default"], {
        color: "secondary",
        variant: "contained",
        startIcon: react_default.a.createElement(Delete_default.a, null),
        onClick: this.setRemove
      }, "Delete Series")), react_default.a.createElement(ui_RemoveConfirmation, {
        removeContext: {
          item: series,
          type: "series",
          onSubmit: this.onSubmitRemove
        },
        ref: this.RemoveConfirmation
      }));
    }
  }]);

  return SeriesView;
}(react["Component"]);

/* harmony default export */ var series_SeriesView = (Object(es["connect"])(null, {
  deleteSeries: dashboards_deleteSeries
})(Object(esm_styles["withStyles"])(SeriesView_styles)(SeriesView_SeriesView)));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Palette.js
var Palette = __webpack_require__("./node_modules/@material-ui/icons/Palette.js");
var Palette_default = /*#__PURE__*/__webpack_require__.n(Palette);

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
      return react_default.a.createElement(Card["default"], null, react_default.a.createElement(CardContent["default"], null, react_default.a.createElement(Typography["default"], null, series.name, react_default.a.createElement(Palette_default.a, {
        style: {
          color: series.color,
          "float": "right"
        }
      }))), react_default.a.createElement(CardActions["default"], null, react_default.a.createElement(Button["default"], {
        onClick: function onClick() {
          return _onClick(series.id);
        }
      }, "EDIT")));
    }
  }]);

  return SeriesCard;
}(react["Component"]);

/* harmony default export */ var series_SeriesCard = (SeriesCard_SeriesCard);
// CONCATENATED MODULE: ./frontend/src/core/components/ui/NewCard.js
// DEPENDANCIES










var NewCard_useStyles = Object(esm_styles["makeStyles"])({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  card: {
    minWidth: 275,
    minHeight: 180,
    marginBottom: "20px"
  },
  icon: {
    margin: "auto",
    fontSize: 80,
    color: "#9bb0db"
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex"
  }
});

var NewCard_NewCard = function NewCard(props) {
  var classes = NewCard_useStyles();
  var handleClick = props.handleClick;
  return react_default.a.createElement(Grid["default"], {
    container: true,
    spacing: 2,
    className: classes.root
  }, react_default.a.createElement(IconButton["default"], {
    className: classes.icon,
    onClick: handleClick
  }, react_default.a.createElement(Add_default.a, {
    className: classes.icon
  })));
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



 // REDUX

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
      return react_default.a.createElement(Grid["default"], {
        container: true,
        spacing: 3
      }, series.map(function (series) {
        return react_default.a.createElement(Grid["default"], {
          key: series.id,
          item: true,
          lg: 3
        }, react_default.a.createElement(series_SeriesCard, {
          onClick: onClick,
          series: series
        }));
      }), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 3
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
function SliderProps_slicedToArray(arr, i) { return SliderProps_arrayWithHoles(arr) || SliderProps_iterableToArrayLimit(arr, i) || SliderProps_nonIterableRest(); }

function SliderProps_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function SliderProps_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SliderProps_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SliderProps_extends() { SliderProps_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SliderProps_extends.apply(this, arguments); }

function SliderProps_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SliderProps_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SliderProps_ownKeys(Object(source), true).forEach(function (key) { SliderProps_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SliderProps_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SliderProps_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // *******************************************************
// RAIL
// *******************************************************

var railOuterStyle = {
  position: "absolute",
  width: "100%",
  height: 6,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  cursor: "pointer" // border: '1px solid white',

};
var railInnerStyle = {
  position: "absolute",
  width: "100%",
  height: 6,
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
  var _ref2$domain = SliderProps_slicedToArray(_ref2.domain, 2),
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
  var _ref3$domain = SliderProps_slicedToArray(_ref3.domain, 2),
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
      width: 16,
      height: 16,
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
      height: 6,
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
        style: {
          height: 70,
          width: "95%",
          paddingLeft: "10px"
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
        style: {
          height: 70,
          width: "95%",
          paddingLeft: "10px"
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




var KpiForm_styles = function styles(theme) {
  return {
    textField: {
      marginBottom: "20px",
      paddingRight: theme.spacing(2)
    },
    formControl: {
      width: "100%",
      marginBottom: "20px"
    },
    heading: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      width: "100%"
    },
    paragraph: {
      marginBottom: theme.spacing(2)
    }
  };
};

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

    _this.onKpiTypeChange = function (e, selection) {
      var onChange = _this.props.onChange;
      var _this$props$values = _this.props.values,
          kpi_type = _this$props$values.kpi_type,
          safe_deviation = _this$props$values.safe_deviation,
          warning_margin = _this$props$values.warning_margin,
          danger_deviation = _this$props$values.danger_deviation;
      if (kpi_type === 0) _this.updateSlider([0, safe_deviation, danger_deviation, 100]);else if (kpi_type === 1) _this.updateSlider([0, warning_margin, 100]);
      onChange({
        target: {
          name: "kpi_type",
          value: selection.props.value
        }
      });
    };

    _this.onGlobalTargetChange = function (e) {
      var onChange = _this.props.onChange;
      var target = e.target.value;
      if (isNaN(target)) return;else onChange(e);
    };

    _this.onThresholdTypeChange = function (e, value) {
      var onChange = _this.props.onChange;

      if (value == 0) {
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

      if (value == 1) {
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

    _this.deviationOptions = function () {
      var _this$props$values2 = _this.props.values,
          safe_deviation = _this$props$values2.safe_deviation,
          danger_deviation = _this$props$values2.danger_deviation;
      var classes = _this.props.classes;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 11
      }, react_default.a.createElement(DeviationSlider, {
        disabledRail: true,
        onUpdate: _this.onSliderUpdate,
        ref: _this.slider,
        danger_deviation: danger_deviation,
        safe_deviation: safe_deviation
      })), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 4
      }, react_default.a.createElement(TextField["default"], {
        fullWidth: true,
        id: "safe_deviation",
        label: "Safe Limit",
        className: classes.textField,
        disabled: true,
        value: safe_deviation || "",
        name: "safe_deviation"
      })), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 4
      }, react_default.a.createElement(TextField["default"], {
        fullWidth: true,
        id: "danger_deviation",
        label: "Danger Limit",
        className: classes.textField,
        disabled: true,
        value: danger_deviation || "",
        name: "danger_deviation"
      })));
    };

    _this.winLoseOptions = function () {
      var _this$props$values3 = _this.props.values,
          threshold_type = _this$props$values3.threshold_type,
          global_target = _this$props$values3.global_target;
      var classes = _this.props.classes;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 12
      }, react_default.a.createElement(Typography["default"], {
        className: classes.paragraph
      }, "Is green when value is:", " ")), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 4
      }, react_default.a.createElement(RadioGroup["default"], {
        "aria-label": "threshold_type",
        name: "threshold_type",
        value: threshold_type,
        onChange: _this.onThresholdTypeChange
      }, react_default.a.createElement(FormControlLabel["default"], {
        value: 0,
        control: react_default.a.createElement(Radio["default"], null),
        label: "Greater Than"
      }), react_default.a.createElement(FormControlLabel["default"], {
        value: 1,
        control: react_default.a.createElement(Radio["default"], null),
        label: "Less Than"
      }))), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 4
      }, react_default.a.createElement(TextField["default"], {
        fullWidth: true,
        id: "global_target",
        label: "Target",
        className: classes.textField,
        onChange: _this.onGlobalTargetChange,
        value: global_target || "",
        name: "global_target",
        type: "text",
        placeholder: "..."
      })));
    };

    _this.thresholdOptions = function () {
      var _this$props$values4 = _this.props.values,
          warning_margin = _this$props$values4.warning_margin,
          threshold_type = _this$props$values4.threshold_type,
          global_target = _this$props$values4.global_target;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          classes = _this$props.classes;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 11
      }, react_default.a.createElement(ThresholdSlider, {
        threshold_type: threshold_type,
        disabledRail: true,
        onUpdate: _this.onThresholdSliderUpdate,
        ref: _this.slider,
        warning_margin: warning_margin,
        target: global_target,
        domain: threshold_type === THRESHOLD_TYPE_GREATER ? [global_target ? 0 : -100, global_target ? parseInt(global_target) * 1.5 : 100] : [parseInt(global_target) - parseInt(global_target) * 0.5 || -100, global_target ? parseInt(global_target) * 2 : 100]
      })), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 3
      }, react_default.a.createElement(RadioGroup["default"], {
        "aria-label": "threshold_type",
        name: "threshold_type",
        value: threshold_type,
        onChange: _this.onThresholdTypeChange
      }, react_default.a.createElement(FormControlLabel["default"], {
        value: 0,
        control: react_default.a.createElement(Radio["default"], null),
        label: "Greater Than"
      }), react_default.a.createElement(FormControlLabel["default"], {
        value: 1,
        control: react_default.a.createElement(Radio["default"], null),
        label: "Less Than"
      }))), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 4
      }, react_default.a.createElement(TextField["default"], {
        fullWidth: true,
        id: "global_target",
        label: "Target",
        className: classes.textField,
        onChange: _this.onGlobalTargetChange,
        value: global_target || "",
        name: "global_target",
        type: "text",
        placeholder: "..."
      })), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 4
      }, react_default.a.createElement(TextField["default"], {
        fullWidth: true,
        label: "Warning Limit",
        className: classes.textField,
        onChange: onChange,
        value: "".concat(warning_margin).concat(global_target ? "" : "%"),
        name: "warning_margin",
        type: "text",
        placeholder: "..."
      })));
    };

    _this.onSliderUpdate = _this.onSliderUpdate.bind(KpiForm_assertThisInitialized(_this));
    _this.slider = react_default.a.createRef();
    return _this;
  }

  KpiForm_createClass(KpiForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$values5 = this.props.values,
          danger_deviation = _this$props$values5.danger_deviation,
          safe_deviation = _this$props$values5.safe_deviation,
          kpi_type = _this$props$values5.kpi_type,
          warning_margin = _this$props$values5.warning_margin;
      if (kpi_type === 0) this.updateSlider([0, safe_deviation, danger_deviation, 100]);else if (kpi_type === 1) this.updateSlider([0, warning_margin, 100]);
    }
  }, {
    key: "updateSlider",
    value: function updateSlider(values) {
      if (this.slider.current) this.slider.current.onChange(values);
    }
  }, {
    key: "renderSliderOptions",
    value: function renderSliderOptions() {
      var kpi_type = this.props.values.kpi_type;

      switch (kpi_type) {
        case 0:
          return this.deviationOptions();

        case 1:
          return this.winLoseOptions();

        case 2:
          return this.thresholdOptions();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          pillar = _this$props2.pillar,
          editFrequency = _this$props2.editFrequency,
          classes = _this$props2.classes;
      var _this$props$values6 = this.props.values,
          name = _this$props$values6.name,
          frequency = _this$props$values6.frequency,
          kpi_type = _this$props$values6.kpi_type,
          leader = _this$props$values6.leader,
          unit = _this$props$values6.unit,
          year = _this$props$values6.year;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Grid["default"], {
        container: true,
        spacing: 2
      }, react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 6
      }, react_default.a.createElement(TextField["default"], {
        fullWidth: true,
        label: "Name",
        className: classes.textField,
        type: "text",
        name: "name",
        onChange: onChange,
        placeholder: "...",
        value: name,
        required: true
      }), react_default.a.createElement(FormControl["default"], {
        className: classes.formControl
      }, react_default.a.createElement(InputLabel["default"], {
        id: "kpi_type"
      }, "Type"), react_default.a.createElement(Select["default"], {
        onChange: this.onKpiTypeChange,
        value: kpi_type
      }, KPI_TYPE_CHOICES.map(function (choice) {
        return react_default.a.createElement(MenuItem["default"], {
          key: "choice-".concat(choice.id),
          value: choice.id
        }, choice.name);
      }))), react_default.a.createElement(FormControl["default"], {
        className: classes.formControl
      }, react_default.a.createElement(InputLabel["default"], {
        id: "frequency"
      }, "Frequency"), react_default.a.createElement(Select["default"], {
        onChange: onChange,
        value: frequency,
        name: "frequency",
        required: true,
        disabled: !editFrequency
      }, FREQUENCY_CHOICES.map(function (choice) {
        return react_default.a.createElement(MenuItem["default"], {
          key: "choice-".concat(choice.id),
          value: choice.id
        }, choice.name);
      })))), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 6
      }, react_default.a.createElement(TextField["default"], {
        fullWidth: true,
        label: "Leader",
        className: classes.textField,
        type: "text",
        name: "leader",
        onChange: onChange,
        placeholder: "...",
        value: leader,
        required: true
      }), react_default.a.createElement(TextField["default"], {
        fullWidth: true,
        label: "Unit",
        className: classes.textField,
        type: "text",
        name: "unit",
        onChange: onChange,
        placeholder: "...",
        value: unit || ""
      }), react_default.a.createElement(TextField["default"], {
        fullWidth: true,
        label: "Year",
        className: classes.textField,
        type: "text",
        name: "year",
        onChange: onChange,
        placeholder: "...",
        value: year || ""
      })), react_default.a.createElement(Grid["default"], {
        item: true,
        container: true,
        lg: 12
      }, react_default.a.createElement(Typography["default"], {
        variant: "h4",
        className: classes.heading
      }, "Evaluation"), this.renderSliderOptions())));
    }
  }]);

  return KpiForm;
}(react["Component"]);

KpiForm_KpiForm.propTypes = {
  onChange: prop_types_default.a.func.isRequired
};
/* harmony default export */ var kpis_KpiForm = (Object(esm_styles["withStyles"])(KpiForm_styles)(KpiForm_KpiForm));
// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/kpis/KpiEdit.js
function KpiEdit_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { KpiEdit_typeof = function _typeof(obj) { return typeof obj; }; } else { KpiEdit_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return KpiEdit_typeof(obj); }

function KpiEdit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function KpiEdit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { KpiEdit_ownKeys(Object(source), true).forEach(function (key) { KpiEdit_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { KpiEdit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      var _this$props2 = this.props,
          kpi = _this$props2.kpi,
          onRemove = _this$props2.onRemove;
      return react_default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, react_default.a.createElement(kpis_KpiForm, {
        onChange: this.onChange,
        pillar: kpi.pillar,
        values: this.state
      }), react_default.a.createElement("div", {
        style: {
          "float": "right"
        }
      }, react_default.a.createElement(Button["default"], {
        color: "primary",
        type: "submit",
        variant: "contained",
        style: {
          marginRight: "15px"
        },
        startIcon: react_default.a.createElement(Save_default.a, null)
      }, "Save Changes"), react_default.a.createElement(Button["default"], {
        color: "secondary",
        variant: "contained",
        onClick: onRemove,
        startIcon: react_default.a.createElement(Delete_default.a, null)
      }, "Delete Kpi")));
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

 // MATERIAL-UI






var KpiView_styles = function styles(theme) {
  return {
    heading: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4)
    },
    breadcrumbs: {
      paddingTop: "12px",
      paddingBottom: "12px"
    }
  };
};

var KpiView_KpiView =
/*#__PURE__*/
function (_Component) {
  KpiView_inherits(KpiView, _Component);

  function KpiView(props) {
    var _this;

    KpiView_classCallCheck(this, KpiView);

    _this = KpiView_possibleConstructorReturn(this, KpiView_getPrototypeOf(KpiView).call(this, props));

    _this.onRemove = function () {
      _this.RemoveConfirmation.current.handleToggleOpen(true)();
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
    _this.RemoveConfirmation = react_default.a.createRef();
    return _this;
  }

  KpiView_createClass(KpiView, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          kpi = _this$props2.kpi,
          onSeriesSelect = _this$props2.onSeriesSelect,
          pillarId = _this$props2.pillarId,
          classes = _this$props2.classes;
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(Breadcrumbs["default"], {
        className: classes.breadcrumbs,
        "aria-label": "breadcrumb"
      }, react_default.a.createElement(Typography["default"], {
        color: "inherit",
        href: "/"
      }, pillarId), react_default.a.createElement(Typography["default"], {
        color: "inherit",
        href: "/getting-started/installation/"
      }, kpi.name)), react_default.a.createElement(Typography["default"], {
        className: classes.heading,
        variant: "h4"
      }, "Series"), react_default.a.createElement(series_SeriesList, {
        kpiId: kpi.id,
        onClick: onSeriesSelect,
        series: kpi.series
      }), react_default.a.createElement(Typography["default"], {
        className: classes.heading,
        variant: "h4"
      }, "Properties"), react_default.a.createElement(kpis_KpiEdit, {
        kpi: kpi,
        onRemove: this.onRemove
      }), react_default.a.createElement(ui_RemoveConfirmation, {
        removeContext: {
          item: kpi,
          type: "kpi",
          onSubmit: this.onSubmitRemove
        },
        ref: this.RemoveConfirmation
      }));
    }
  }]);

  return KpiView;
}(react["Component"]);

/* harmony default export */ var kpis_KpiView = (Object(es["connect"])(null, {
  deleteKpi: dashboards_deleteKpi
})(Object(esm_styles["withStyles"])(KpiView_styles)(KpiView_KpiView)));
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
          changeMenu = _this$props2.changeMenu,
          pillarId = _this$props2.pillarId;

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
            setRemove: this.setRemove,
            pillarId: pillarId
          });

        case SERIES_VIEW:
          return react_default.a.createElement(series_SeriesView, {
            series: series,
            kpi: kpi,
            onBack: this.onSeriesBack,
            setRemove: this.setRemove,
            pillarId: pillarId
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

function KpiNew_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function KpiNew_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { KpiNew_ownKeys(Object(source), true).forEach(function (key) { KpiNew_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { KpiNew_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

 // MATERIAL-Ui







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
          dashboard = _this$props.dashboard,
          handleToggleOpen = _this$props.handleToggleOpen;
      var _this$state = _this.state,
          name = _this$state.name,
          frequency = _this$state.frequency,
          safe_deviation = _this$state.safe_deviation,
          danger_deviation = _this$state.danger_deviation,
          warning_margin = _this$state.warning_margin,
          kpi_type = _this$state.kpi_type,
          leader = _this$state.leader,
          threshold_type = _this$state.threshold_type,
          year = _this$state.year;
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
      addKpi(k, year);

      _this.setState({
        name: "",
        danger_deviation: 75,
        safe_deviation: 25,
        frequency: 0,
        warning_margin: -50,
        kpi_type: 0,
        leader: "",
        global_target: "",
        unit: "",
        year: ""
      });

      handleToggleOpen(false)();
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
      var _this$props2 = this.props,
          pillar = _this$props2.pillar,
          open = _this$props2.open,
          handleToggleOpen = _this$props2.handleToggleOpen;
      return react_default.a.createElement(Dialog["default"], {
        open: open,
        onClose: handleToggleOpen(false),
        "aria-labelledby": "form-dialog-title"
      }, react_default.a.createElement(DialogTitle["default"], {
        id: "form-dialog-title"
      }, "New KPI"), react_default.a.createElement(DialogContent["default"], null, react_default.a.createElement(kpis_KpiForm, {
        onChange: this.onChange,
        values: this.state,
        pillar: pillar,
        editFrequency: true
      })), react_default.a.createElement(DialogActions["default"], null, react_default.a.createElement(Button["default"], {
        onClick: handleToggleOpen(false),
        color: "primary"
      }, "Cancel"), react_default.a.createElement(Button["default"], {
        onClick: this.onSubmit,
        color: "primary"
      }, "Confirm")));
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Popover/index.js + 1 modules
var Popover = __webpack_require__("./node_modules/@material-ui/core/esm/Popover/index.js");

// CONCATENATED MODULE: ./frontend/src/scenes/pillarRoom/components/PillarPopover.js
 // MATERIAL-UI



 // CONFIG


var PillarPopover_useStyles = Object(styles_esm["makeStyles"])({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: "10px"
  }
});

function PillarPopover(props) {
  var data = props.data,
      open = props.open;
  var classes = PillarPopover_useStyles();
  var renderDeviation = react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Typography["default"], {
    variant: "body1"
  }, "Target: ".concat(data.target)), react_default.a.createElement(Typography["default"], {
    variant: "body1"
  }, "Deviation: ".concat(((data.value / data.target - 1) * 100).toFixed(2), "%")));
  var renderThreshold = react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Typography["default"], {
    variant: "body1"
  }, "Target: ".concat(data.target)), react_default.a.createElement(Typography["default"], {
    variant: "body1"
  }, "Warning Margin: ".concat(data.warning_margin)));
  var renderWinLose = react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Typography["default"], {
    variant: "body1"
  }, "Target: ".concat(data.target)));

  var renderEvaluation = function renderEvaluation() {
    switch (data.kpi_type) {
      case KPI_TYPE_WIN_LOSE:
        return renderWinLose;

      case KPI_TYPE_THRESHOLD:
        return renderThreshold;

      case KPI_TYPE_DEVIATION:
        return renderDeviation;
    }
  };

  return react_default.a.createElement(Popover["default"], {
    anchorReference: "anchorPosition",
    anchorPosition: {
      top: data.y ? data.y : 0,
      left: data.x ? data.x : 0
    },
    anchorOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    classes: {
      paper: classes.paper
    },
    open: open,
    disableAutoFocus: true,
    disableEnforceFocus: true,
    disableRestoreFocus: true,
    className: classes.popover
  }, react_default.a.createElement(Typography["default"], {
    variant: "h6"
  }, "".concat(data.kpiName, " - (").concat(data.i + 1, ")"), react_default.a.createElement("hr", null)), react_default.a.createElement("div", {
    style: {
      display: "flex"
    }
  }, react_default.a.createElement("div", {
    style: {
      marginRight: "20px"
    }
  }, react_default.a.createElement(Typography["default"], {
    variant: "subtitle2",
    gutterBottom: true
  }, "Performance"), react_default.a.createElement(Typography["default"], {
    variant: "body1"
  }, "Value: ".concat(data.value)), react_default.a.createElement(Typography["default"], {
    variant: "body1"
  }, "Date: ".concat(data.date))), react_default.a.createElement("div", null, react_default.a.createElement(Typography["default"], {
    variant: "subtitle2",
    gutterBottom: true
  }, "Evaluation"), renderEvaluation())));
}

PillarPopover.defaultProps = {
  open: false,
  data: {}
};
/* harmony default export */ var components_PillarPopover = (PillarPopover);
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




 // MATERIAl-UI







var pillarRoom_styles = function styles(theme) {
  return {
    rootContainer: {
      margin: 0,
      width: "100%",
      overflow: "hidden",
      flex: 1
    },
    cardAction: {
      padding: "8px 25px",
      position: "sticky",
      marginTop: "auto",
      borderTop: "1px solid rgba(0, 0, 0, 0.14)"
    },
    card: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      height: "100%",
      maxHeight: "100%"
    },
    chartCardContent: {
      overflowX: "hidden",
      flex: 1
    },
    gridItem: {
      maxHeight: "100%"
    },
    pillar: {
      margin: "0 20px !important"
    }
  };
};

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

    _this.openKpiNew = function (state) {
      return function () {
        _this.setState({
          kpiNewOpen: state
        });
      };
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
      toolTipData: {},
      toolTipShow: false,
      kpiNewOpen: false
    };
    _this.selectSeries = _this.selectSeries.bind(pillarRoom_assertThisInitialized(_this));
    _this.selectKpi = _this.selectKpi.bind(pillarRoom_assertThisInitialized(_this));
    _this.setRemove = _this.setRemove.bind(pillarRoom_assertThisInitialized(_this));
    _this.resetKpiSelect = _this.resetKpiSelect.bind(pillarRoom_assertThisInitialized(_this));
    _this.showTooltip = _this.showTooltip.bind(pillarRoom_assertThisInitialized(_this));
    return _this;
  }

  pillarRoom_createClass(pillarRoom, [{
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
          currentDashboard = _this$props2.currentDashboard,
          classes = _this$props2.classes;
      var _this$props$match$par2 = this.props.match.params,
          pillarId = _this$props$match$par2.pillarId,
          dashboardId = _this$props$match$par2.dashboardId;
      var _this$state = this.state,
          selectedSeries = _this$state.selectedSeries,
          selectedKpi = _this$state.selectedKpi,
          menuMode = _this$state.menuMode,
          toolTipData = _this$state.toolTipData,
          toolTipShow = _this$state.toolTipShow,
          kpiNewOpen = _this$state.kpiNewOpen;
      var kpi = getItem(selectedKpi, kpis, "id");
      var chartSeries = [];
      var seriesColors = [];
      kpi && kpi.series.forEach(function (series) {
        var data = [];
        series.entries.forEach(function (datapoint) {
          if (!datapoint.value) return;
          data.push({
            x: new Date(datapoint.date).getTime(),
            y: datapoint.value
          });
        });
        chartSeries.push({
          name: series.name,
          data: data,
          type: PLOT_TYPE_MAP[series.plot_type]
        });
        seriesColors.push(series.color);
      });

      if (currentDashboard == null) {
        return react_default.a.createElement(LoadingScreen, null);
      }

      var color = currentDashboard.background;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components_PillarPopover, {
        open: toolTipShow,
        data: toolTipData
      }), react_default.a.createElement(Grid["default"], {
        container: true,
        spacing: 4,
        className: classes.rootContainer,
        style: {
          background: color
        }
      }, react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 4,
        className: classes.gridItem
      }, react_default.a.createElement(Card["default"], {
        className: classes.card
      }, react_default.a.createElement(CardContent["default"], null, react_default.a.createElement(d3charts_pillar, {
        kpis: kpis,
        letter: pillarId === "Plus" ? "+" : pillarId,
        dashboardId: dashboardId,
        labeled: true,
        className: classes.pillar,
        onHover: this.showTooltip
      }), react_default.a.createElement(CardActions["default"], null, react_default.a.createElement(Table_EnhancedTable, {
        data: kpis,
        tableMeta: KPI_TABLE_HEADERS
      }))))), react_default.a.createElement(Grid["default"], {
        item: true,
        lg: 8,
        className: classes.gridItem
      }, react_default.a.createElement(Card["default"], {
        className: classes.card
      }, react_default.a.createElement(CardContent["default"], {
        className: classes.chartCardContent
      }, menuMode ? react_default.a.createElement(components_MenuView, {
        kpi: kpi,
        setRemove: this.setRemove,
        changeMenu: this.setMenuState,
        menuState: this.menuMode,
        resetKpiSelect: this.resetKpiSelect,
        pillarId: pillarId
      }) : react_default.a.createElement(components_Chart, {
        type: "line",
        series: chartSeries,
        colors: seriesColors,
        unit: kpi ? kpi.unit : ""
      })
      /*
      <LineChart
        kpis={kpis}
        selectSeries={this.selectSeries}
        selectedKpi={selectedKpi}
      /> */
      ), react_default.a.createElement(CardActions["default"], {
        className: classes.cardAction
      }, react_default.a.createElement(components_ChartOptions, {
        active: selectedSeries,
        selectKpi: this.selectKpi,
        selectSeries: this.selectSeries,
        deselect: this.deselect,
        kpis: kpis,
        changeMenu: this.setMenuState,
        menuMode: menuMode,
        kpi: kpi,
        handleKpiNewOpen: this.openKpiNew
      }))))), react_default.a.createElement(kpis_KpiNew, {
        pillar: pillarId,
        dashboard: currentDashboard.id,
        open: kpiNewOpen,
        handleToggleOpen: this.openKpiNew
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
})(Object(esm_styles["withStyles"])(pillarRoom_styles)(pillarRoom_pillarRoom)));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/index.js + 1 modules
var Container = __webpack_require__("./node_modules/@material-ui/core/esm/Container/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Publish.js
var Publish = __webpack_require__("./node_modules/@material-ui/icons/Publish.js");
var Publish_default = /*#__PURE__*/__webpack_require__.n(Publish);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Fab/index.js + 1 modules
var Fab = __webpack_require__("./node_modules/@material-ui/core/esm/Fab/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/GridList/index.js + 1 modules
var GridList = __webpack_require__("./node_modules/@material-ui/core/esm/GridList/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/GridListTile/index.js + 1 modules
var GridListTile = __webpack_require__("./node_modules/@material-ui/core/esm/GridListTile/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/GridListTileBar/index.js + 1 modules
var GridListTileBar = __webpack_require__("./node_modules/@material-ui/core/esm/GridListTileBar/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/DeleteForever.js
var DeleteForever = __webpack_require__("./node_modules/@material-ui/icons/DeleteForever.js");
var DeleteForever_default = /*#__PURE__*/__webpack_require__.n(DeleteForever);

// CONCATENATED MODULE: ./frontend/src/scenes/home/components/ImageList.js
// DEPENDANCIES

 // REDUX



 // MATERIAL-UI






var ImageList_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This costs memory but helps keeping high FPS.
      transform: "translateZ(0)"
    },
    title: {
      color: "#3F51B5"
    },
    titleBar: {
      background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    },
    uploadFAB: {
      position: "absolute",
      bottom: "-27px",
      right: "100px",
      zIndex: "1000"
    }
  };
});

var ImageList_ImageList = function ImageList(props) {
  var classes = ImageList_useStyles();
  var images = props.images,
      deleteImage = props.deleteImage;
  if (!images) return react_default.a.createElement(react_default.a.Fragment, null);
  if (!images.length) return react_default.a.createElement(react_default.a.Fragment, null);
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(GridList["default"], {
    cellHeight: 160,
    className: classes.gridList,
    cols: 3
  }, images.map(function (tile) {
    return react_default.a.createElement(GridListTile["default"], {
      key: tile.id,
      cols: tile.cols || 1
    }, react_default.a.createElement("img", {
      src: tile.image
    }), react_default.a.createElement(GridListTileBar["default"], {
      title: "image",
      classes: {
        root: classes.titleBar,
        title: classes.title
      },
      actionIcon: react_default.a.createElement(IconButton["default"], {
        "aria-label": "star ".concat(tile.id),
        onClick: function onClick() {
          deleteImage(tile.id);
        }
      }, react_default.a.createElement(DeleteForever_default.a, {
        className: classes.title
      }))
    }));
  })));
};

ImageList_ImageList.propTypes = {
  images: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    id: prop_types_default.a.number,
    image: prop_types_default.a.string
  })),
  deleteImage: prop_types_default.a.func.isRequired
};
/* harmony default export */ var components_ImageList = (Object(es["connect"])(null, {
  deleteImage: dashboards_deleteImage
})(ImageList_ImageList));
// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardForm.js
// DEPENDANCIES

 // REDUX


 // MATERIAL-UI













 // CONFIG


var DashboardForm_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    },
    textField: {
      margin: theme.spacing(3),
      width: 200
    },
    uploadFAB: {
      color: "white"
    }
  };
});

var DashboardForm_DashboardForm = function DashboardForm(props) {
  var _props$values = props.values,
      title = _props$values.title,
      author = _props$values.author,
      background = _props$values.background,
      dashboard_type = _props$values.dashboard_type,
      level = _props$values.level;
  var images = props.images;
  var onChange = props.onChange,
      showImageField = props.showImageField;
  var classes = DashboardForm_useStyles();

  var onChangeColor = function onChangeColor(color) {
    var onChange = props.onChange;
    onChange({
      target: {
        name: "background",
        value: color.hex
      }
    });
  };

  var onChangeFile = function onChangeFile(e) {
    var onChange = props.onChange;
    onChange({
      target: {
        name: "image",
        value: e.target.files[0]
      }
    });
  };

  return react_default.a.createElement(esm_styles["ThemeProvider"], {
    theme: primaryTheme
  }, react_default.a.createElement(Grid["default"], {
    container: true,
    spacing: 3
  }, showImageField && react_default.a.createElement("div", {
    className: "col-12 mr-2"
  }, react_default.a.createElement(components_ImageList, {
    images: images
  })), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(TextField["default"], {
    required: true,
    id: "title",
    label: "Title",
    className: classes.textField,
    onChange: onChange,
    value: title || "",
    name: "title"
  }), react_default.a.createElement(TextField["default"], {
    required: true,
    id: "author",
    label: "Author",
    className: classes.textField,
    onChange: onChange,
    value: author || "",
    name: "author"
  }), react_default.a.createElement(FormControl["default"], {
    className: classes.textField
  }, react_default.a.createElement(InputLabel["default"], {
    id: "demo-customized-select-label"
  }, "Type"), react_default.a.createElement(Select["default"], {
    required: true,
    id: "dashboard_type",
    onChange: onChange,
    value: dashboard_type,
    name: "dashboard_type"
  }, DASHBOARD_TYPE_CHOICES.map(function (choice) {
    return react_default.a.createElement(MenuItem["default"], {
      value: choice.id,
      key: choice.id
    }, choice.name);
  }))), react_default.a.createElement(FormControl["default"], {
    className: classes.textField
  }, react_default.a.createElement(InputLabel["default"], {
    id: "demo-customized-select-label"
  }, "Type"), react_default.a.createElement(Select["default"], {
    required: true,
    id: "level",
    onChange: onChange,
    value: level,
    name: "level"
  }, LEVEL_CHOICES.map(function (choice) {
    return react_default.a.createElement(MenuItem["default"], {
      value: choice.id,
      key: choice.id
    }, choice.name);
  }))), react_default.a.createElement(Fab["default"], {
    color: "secondary",
    component: "label",
    "aria-label": "edit",
    className: classes.uploadFAB
  }, react_default.a.createElement(Publish_default.a, null), react_default.a.createElement("input", {
    accept: "image/*",
    id: "raised-button-file",
    multiple: true,
    type: "file",
    style: {
      display: "none"
    },
    onChange: onChangeFile
  }))), react_default.a.createElement(Grid["default"], {
    item: true,
    md: 12,
    className: classes.container
  }, react_default.a.createElement(FormControl["default"], {
    className: classes.textField
  }, react_default.a.createElement("label", {
    htmlFor: "color"
  }, "Background Color"), react_default.a.createElement(react_color_lib["ChromePicker"], {
    color: background,
    onChangeComplete: onChangeColor
  })))));
};

DashboardForm_DashboardForm.propTypes = {
  addDashboard: prop_types_default.a.func.isRequired,
  values: prop_types_default.a.shape({
    title: prop_types_default.a.string,
    author: prop_types_default.a.string,
    background: prop_types_default.a.color,
    dashboard_type: prop_types_default.a.number,
    level: prop_types_default.a.number
  })
};
/* harmony default export */ var components_DashboardForm = (Object(es["connect"])(null, {
  addDashboard: dashboards_addDashboard
})(DashboardForm_DashboardForm));
// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardEditDialog.js
function DashboardEditDialog_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashboardEditDialog_typeof = function _typeof(obj) { return typeof obj; }; } else { DashboardEditDialog_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashboardEditDialog_typeof(obj); }

function DashboardEditDialog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DashboardEditDialog_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DashboardEditDialog_ownKeys(Object(source), true).forEach(function (key) { DashboardEditDialog_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DashboardEditDialog_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DashboardEditDialog_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DashboardEditDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashboardEditDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashboardEditDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashboardEditDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashboardEditDialog_defineProperties(Constructor, staticProps); return Constructor; }

function DashboardEditDialog_possibleConstructorReturn(self, call) { if (call && (DashboardEditDialog_typeof(call) === "object" || typeof call === "function")) { return call; } return DashboardEditDialog_assertThisInitialized(self); }

function DashboardEditDialog_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DashboardEditDialog_getPrototypeOf(o) { DashboardEditDialog_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashboardEditDialog_getPrototypeOf(o); }

function DashboardEditDialog_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashboardEditDialog_setPrototypeOf(subClass, superClass); }

function DashboardEditDialog_setPrototypeOf(o, p) { DashboardEditDialog_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashboardEditDialog_setPrototypeOf(o, p); }

function DashboardEditDialog_extends() { DashboardEditDialog_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DashboardEditDialog_extends.apply(this, arguments); }


 // REDUX


 // MATERIAL-UI












var DashboardEditDialog_styles = function styles(theme) {
  return {
    appBar: {
      position: "relative",
      background: "#9BB0DB"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  };
};

var DashboardEditDialog_Transition = react_default.a.forwardRef(function Transition(props, ref) {
  return react_default.a.createElement(Slide["default"], DashboardEditDialog_extends({
    direction: "up",
    ref: ref
  }, props));
});

var DashboardEditDialog_DashboardEditDialog =
/*#__PURE__*/
function (_Component) {
  DashboardEditDialog_inherits(DashboardEditDialog, _Component);

  function DashboardEditDialog() {
    var _getPrototypeOf2;

    var _temp, _this;

    DashboardEditDialog_classCallCheck(this, DashboardEditDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return DashboardEditDialog_possibleConstructorReturn(_this, (_temp = _this = DashboardEditDialog_possibleConstructorReturn(this, (_getPrototypeOf2 = DashboardEditDialog_getPrototypeOf(DashboardEditDialog)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.update = function (dashboard) {
      _this.setState(DashboardEditDialog_objectSpread({}, dashboard));
    }, _this.handleChange = function (e) {
      _this.setState(DashboardEditDialog_defineProperty({}, e.target.name, e.target.value));
    }, _this.handleSave = function () {
      var handleClose = _this.props.handleClose;

      _this.handleSubmit();

      handleClose();
    }, _this.handleSubmit = function (e) {
      e && e.preventDefault();
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
    }, _temp));
  }

  DashboardEditDialog_createClass(DashboardEditDialog, [{
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
      var _this$props2 = this.props,
          dashboard = _this$props2.dashboard,
          open = _this$props2.open,
          handleClose = _this$props2.handleClose,
          classes = _this$props2.classes;
      return react_default.a.createElement(Dialog["default"], {
        fullScreen: true,
        open: open,
        onClose: handleClose,
        TransitionComponent: DashboardEditDialog_Transition
      }, react_default.a.createElement(AppBar["default"], {
        className: classes.appBar
      }, react_default.a.createElement(Toolbar["default"], null, react_default.a.createElement(IconButton["default"], {
        edge: "start",
        color: "inherit",
        onClick: handleClose,
        "aria-label": "close"
      }, react_default.a.createElement(Close_default.a, null)), react_default.a.createElement(Typography["default"], {
        variant: "h6",
        className: classes.title
      }, "Edit " + dashboard.title + " Dashboard"), react_default.a.createElement(Button["default"], {
        autoFocus: true,
        color: "inherit",
        onClick: this.handleSave
      }, "save"))), react_default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "w-100 mt-3"
      }, react_default.a.createElement(components_DashboardForm, {
        showImageField: true,
        onChange: this.handleChange,
        values: this.state,
        images: dashboard ? dashboard.images : null
      })));
    }
    /**
     *
     */

  }]);

  return DashboardEditDialog;
}(react["Component"]);

DashboardEditDialog_DashboardEditDialog.propTypes = {
  dashboard: prop_types_default.a.shape({
    title: prop_types_default.a.string,
    author: prop_types_default.a.string,
    level: prop_types_default.a.number,
    dashboard_type: prop_types_default.a.dashboard_type,
    id: prop_types_default.a.number
  }),
  handleClose: prop_types_default.a.func.isRequired,
  open: prop_types_default.a.bool
};
/* harmony default export */ var components_DashboardEditDialog = (Object(es["connect"])(null, {
  updateDashboard: dashboards_updateDashboard,
  addImage: dashboards_addImage
})(Object(esm_styles["withStyles"])(DashboardEditDialog_styles)(DashboardEditDialog_DashboardEditDialog)));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Stepper/index.js + 3 modules
var Stepper = __webpack_require__("./node_modules/@material-ui/core/esm/Stepper/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Step/index.js + 1 modules
var Step = __webpack_require__("./node_modules/@material-ui/core/esm/Step/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/StepLabel/index.js + 5 modules
var StepLabel = __webpack_require__("./node_modules/@material-ui/core/esm/StepLabel/index.js");

// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardBuilder.js
function DashboardBuilder_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashboardBuilder_typeof = function _typeof(obj) { return typeof obj; }; } else { DashboardBuilder_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashboardBuilder_typeof(obj); }

function DashboardBuilder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DashboardBuilder_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashboardBuilder_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashboardBuilder_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashboardBuilder_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashboardBuilder_defineProperties(Constructor, staticProps); return Constructor; }

function DashboardBuilder_possibleConstructorReturn(self, call) { if (call && (DashboardBuilder_typeof(call) === "object" || typeof call === "function")) { return call; } return DashboardBuilder_assertThisInitialized(self); }

function DashboardBuilder_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DashboardBuilder_getPrototypeOf(o) { DashboardBuilder_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashboardBuilder_getPrototypeOf(o); }

function DashboardBuilder_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashboardBuilder_setPrototypeOf(subClass, superClass); }

function DashboardBuilder_setPrototypeOf(o, p) { DashboardBuilder_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashboardBuilder_setPrototypeOf(o, p); }


 // REDUX


 // MATERIAL-UI












 //THIRD PARTY

 //CONFIG



var DashboardBuilder_styles = function styles(theme) {
  return {
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    nameInput: {
      fontSize: "20px"
    },
    textField: {
      width: 200,
      margin: theme.spacing(3)
    },
    flexContainer: {
      display: "flex",
      justifyContent: "center"
    },
    formContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(5),
      marginTop: theme.spacing(7)
    }
  };
};

function getSteps() {
  return ["Name your board", "Select board settings", "Choose a background color"];
}

var DashboardBuilder_DashboardBuilder =
/*#__PURE__*/
function (_Component) {
  DashboardBuilder_inherits(DashboardBuilder, _Component);

  function DashboardBuilder(props) {
    var _this;

    DashboardBuilder_classCallCheck(this, DashboardBuilder);

    _this = DashboardBuilder_possibleConstructorReturn(this, DashboardBuilder_getPrototypeOf(DashboardBuilder).call(this, props));

    _this.getStepContent = function (stepIndex) {
      switch (stepIndex) {
        case 0:
          return _this.firstForm();

        case 1:
          return _this.secondForm();

        case 2:
          return _this.thirdForm();

        default:
          return "Unknown stepIndex";
      }
    };

    _this.handleNext = function () {
      var steps = getSteps();
      var activeStep = _this.state.activeStep;

      _this.setState({
        activeStep: activeStep + 1
      });

      if (activeStep + 1 === steps.length) {
        _this.handleFormSubmit();
      }
    };

    _this.handleBack = function () {
      _this.setState({
        activeStep: _this.state.activeStep - 1
      });
    };

    _this.handleFieldChange = function (e) {
      _this.setState(DashboardBuilder_defineProperty({}, e.target.name, e.target.value));
    };

    _this.handleReset = function () {
      _this.setState({
        activeStep: 0
      });
    };

    _this.handleFormSubmit = function () {
      var _this$state = _this.state,
          title = _this$state.title,
          author = _this$state.author,
          dashboard_type = _this$state.dashboard_type,
          level = _this$state.level,
          background = _this$state.background;
      var _this$props = _this.props,
          onCreate = _this$props.onCreate,
          addDashboard = _this$props.addDashboard;

      if (!title) {
        _this.setState({
          activeStep: 0
        });

        return;
      } else if (!author || isNaN(dashboard_type) || isNaN(level)) {
        _this.setState({
          activeStep: 1
        });

        return;
      } else if (!background) {
        _this.setState({
          activeStep: 2
        });

        return;
      } else {
        var dashboard = {
          title: title,
          author: author,
          dashboard_type: dashboard_type,
          level: level,
          background: background
        };
        addDashboard(dashboard);
        onCreate();
      }
    };

    _this.handleChangeColor = function (color) {
      _this.handleFieldChange({
        target: {
          name: "background",
          value: color.hex
        }
      });
    };

    _this.firstForm = function () {
      var classes = _this.props.classes;
      var name = _this.state.name;
      return react_default.a.createElement(TextField["default"], {
        required: true,
        id: "title",
        label: "Title",
        className: classes.textField,
        name: "title",
        value: name,
        onChange: _this.handleFieldChange
      });
    };

    _this.secondForm = function () {
      var classes = _this.props.classes;
      var _this$state2 = _this.state,
          author = _this$state2.author,
          level = _this$state2.level,
          dashboard_type = _this$state2.dashboard_type;
      return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(TextField["default"], {
        required: true,
        id: "author",
        label: "Author",
        className: classes.textField,
        onChange: _this.handleFieldChange,
        value: author || "",
        name: "author"
      }), react_default.a.createElement(FormControl["default"], {
        className: classes.textField
      }, react_default.a.createElement(InputLabel["default"], {
        id: "demo-customized-select-label"
      }, "Type"), react_default.a.createElement(Select["default"], {
        required: true,
        id: "dashboard_type",
        onChange: _this.handleFieldChange,
        value: dashboard_type,
        name: "dashboard_type"
      }, DASHBOARD_TYPE_CHOICES.map(function (choice) {
        return react_default.a.createElement(MenuItem["default"], {
          value: choice.id,
          key: choice.id
        }, choice.name);
      }))), react_default.a.createElement(FormControl["default"], {
        className: classes.textField
      }, react_default.a.createElement(InputLabel["default"], {
        id: "demo-customized-select-label"
      }, "Type"), react_default.a.createElement(Select["default"], {
        required: true,
        id: "level",
        onChange: _this.handleFieldChange,
        value: level,
        name: "level"
      }, LEVEL_CHOICES.map(function (choice) {
        return react_default.a.createElement(MenuItem["default"], {
          value: choice.id,
          key: choice.id
        }, choice.name);
      }))));
    };

    _this.thirdForm = function () {
      var background = _this.state.background;
      return react_default.a.createElement(react_color_lib["ChromePicker"], {
        color: background,
        onChangeComplete: _this.handleChangeColor
      });
    };

    _this.state = {
      activeStep: 0,
      title: "",
      dashboard_type: 0,
      level: 1,
      author: "",
      background: "#ffffff"
    };
    return _this;
  }

  DashboardBuilder_createClass(DashboardBuilder, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state3 = this.state,
          activeStep = _this$state3.activeStep,
          background = _this$state3.background;
      var steps = getSteps();
      return react_default.a.createElement("div", {
        className: classes.root,
        style: {
          background: background
        }
      }, react_default.a.createElement(Stepper["default"], {
        activeStep: activeStep,
        alternativeLabel: true,
        style: {
          background: background
        }
      }, steps.map(function (label) {
        return react_default.a.createElement(Step["default"], {
          key: label
        }, react_default.a.createElement(StepLabel["default"], null, label));
      })), react_default.a.createElement("div", null, activeStep === steps.length ? react_default.a.createElement("div", null, react_default.a.createElement(Typography["default"], {
        className: classes.instructions
      }, "All steps completed")) : react_default.a.createElement("div", null, react_default.a.createElement(Grid["default"], {
        container: true,
        className: classes.flexContainer
      }, react_default.a.createElement(Grid["default"], {
        container: true,
        className: classes.formContainer
      }, react_default.a.createElement("form", {
        onSubmit: this.handleFormSubmit
      }, this.getStepContent(activeStep))), react_default.a.createElement(Button["default"], {
        disabled: activeStep === 0,
        onClick: this.handleBack,
        className: classes.backButton
      }, "Back"), react_default.a.createElement(Button["default"], {
        variant: "contained",
        color: "primary",
        onClick: this.handleNext
      }, activeStep === steps.length - 1 ? "Finish" : "Next")), react_default.a.createElement("div", null))));
    }
  }]);

  return DashboardBuilder;
}(react["Component"]);

DashboardBuilder_DashboardBuilder.propTypes = {
  onCreate: prop_types_default.a.func.isRequired,
  addDashboard: prop_types_default.a.func.isRequired,
  classes: prop_types_default.a.object.isRequired
};
/* harmony default export */ var components_DashboardBuilder = (Object(es["connect"])(null, {
  addDashboard: dashboards_addDashboard
})(Object(esm_styles["withStyles"])(DashboardBuilder_styles)(DashboardBuilder_DashboardBuilder)));
// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardNewDialog.js
function DashboardNewDialog_extends() { DashboardNewDialog_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return DashboardNewDialog_extends.apply(this, arguments); }

// DEPENDANCIES

 // MATERIAL-UI











var DashboardNewDialog_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    appBar: {
      position: "relative",
      background: "#9BB0DB"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  };
});
var DashboardNewDialog_Transition = react_default.a.forwardRef(function Transition(props, ref) {
  return react_default.a.createElement(Slide["default"], DashboardNewDialog_extends({
    direction: "up",
    ref: ref
  }, props));
});
function DashboardNewDialog(props) {
  //const { handleClose,open } = props;
  var open = props.open,
      handleClose = props.handleClose;
  var classes = DashboardNewDialog_useStyles();
  return react_default.a.createElement(Dialog["default"], {
    fullScreen: true,
    open: open,
    onClose: handleClose,
    TransitionComponent: DashboardNewDialog_Transition
  }, react_default.a.createElement(AppBar["default"], {
    className: classes.appBar
  }, react_default.a.createElement(Toolbar["default"], null, react_default.a.createElement(IconButton["default"], {
    edge: "start",
    color: "inherit",
    onClick: handleClose,
    "aria-label": "close"
  }, react_default.a.createElement(Close_default.a, null)), react_default.a.createElement(Typography["default"], {
    variant: "h6",
    className: classes.title
  }, "Create A New Dashboard"), react_default.a.createElement(Button["default"], {
    autoFocus: true,
    color: "inherit",
    onClick: handleClose
  }, "Cancel"))), react_default.a.createElement(components_DashboardBuilder, {
    onCreate: handleClose
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/index.js
var Menu = __webpack_require__("./node_modules/@material-ui/core/esm/Menu/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/MoreHoriz.js
var MoreHoriz = __webpack_require__("./node_modules/@material-ui/icons/MoreHoriz.js");
var MoreHoriz_default = /*#__PURE__*/__webpack_require__.n(MoreHoriz);

// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardCard.js
function DashboardCard_slicedToArray(arr, i) { return DashboardCard_arrayWithHoles(arr) || DashboardCard_iterableToArrayLimit(arr, i) || DashboardCard_nonIterableRest(); }

function DashboardCard_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function DashboardCard_iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function DashboardCard_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // MATERIAL_UI











var DashboardCard_useStyles = Object(esm_styles["makeStyles"])({
  card: {
    minWidth: 275,
    marginBottom: "20px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginTop: "5px"
  },
  viewBtn: {
    marginLeft: "auto"
  }
});
function DashboardCard(props) {
  var classes = DashboardCard_useStyles();
  var _props$dashboard = props.dashboard,
      author = _props$dashboard.author,
      title = _props$dashboard.title,
      level = _props$dashboard.level;
  var onEditClick = props.onEditClick,
      onRemoveClick = props.onRemoveClick;

  var _React$useState = react_default.a.useState(null),
      _React$useState2 = DashboardCard_slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var open = Boolean(anchorEl);

  var handleMenu = function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Card["default"], {
    className: classes.card
  }, react_default.a.createElement(CardContent["default"], null, react_default.a.createElement(Typography["default"], {
    variant: "h5",
    component: "h2"
  }, title), react_default.a.createElement(Typography["default"], {
    className: classes.pos,
    color: "textSecondary"
  }, "Author: ", author), react_default.a.createElement(Typography["default"], {
    color: "textSecondary"
  }, "Level: ", level)), react_default.a.createElement(CardActions["default"], null, react_default.a.createElement(Button["default"], {
    className: classes.viewBtn,
    size: "medium"
  }, react_default.a.createElement(react_router_dom["Link"], {
    to: "/boardroom/".concat(props.dashboard.id)
  }, "VIEW")), react_default.a.createElement(IconButton["default"], {
    "aria-label": "options for dashboard card",
    "aria-controls": "menu-dashboard",
    "aria-haspopup": "true",
    onClick: handleMenu,
    color: "inherit"
  }, react_default.a.createElement(MoreHoriz_default.a, null)))), react_default.a.createElement(Menu["default"], {
    id: "menu-dashboard",
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: open,
    onClose: handleClose
  }, react_default.a.createElement(MenuItem["default"], {
    onClick: function onClick() {
      handleClose();
      onEditClick(props.dashboard);
    }
  }, "Edit"), react_default.a.createElement(MenuItem["default"], {
    onClick: function onClick() {
      handleClose();
      onRemoveClick(props.dashboard);
    }
  }, "Delete")));
}
DashboardCard.propTypes = {
  onEditClick: prop_types_default.a.func.isRequired,
  onRemoveClick: prop_types_default.a.func.isRequired,
  dashboard: prop_types_default.a.shape({
    title: prop_types_default.a.string,
    author: prop_types_default.a.string,
    level: prop_types_default.a.number,
    dashboard_type: prop_types_default.a.dashboard_type,
    id: prop_types_default.a.number
  })
};
// CONCATENATED MODULE: ./frontend/src/scenes/home/components/DashboardView.js
function DashboardView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DashboardView_typeof = function _typeof(obj) { return typeof obj; }; } else { DashboardView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DashboardView_typeof(obj); }

function DashboardView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DashboardView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DashboardView_createClass(Constructor, protoProps, staticProps) { if (protoProps) DashboardView_defineProperties(Constructor.prototype, protoProps); if (staticProps) DashboardView_defineProperties(Constructor, staticProps); return Constructor; }

function DashboardView_possibleConstructorReturn(self, call) { if (call && (DashboardView_typeof(call) === "object" || typeof call === "function")) { return call; } return DashboardView_assertThisInitialized(self); }

function DashboardView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DashboardView_getPrototypeOf(o) { DashboardView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DashboardView_getPrototypeOf(o); }

function DashboardView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DashboardView_setPrototypeOf(subClass, superClass); }

function DashboardView_setPrototypeOf(o, p) { DashboardView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DashboardView_setPrototypeOf(o, p); }

// DEPENDANCIES


 // ACTIONS

 // MATERIAL-UI









var DashboardView_styles = {
  cardRoot: {
    flexBasis: "100%"
  }
};

var DashboardView_DashboardView =
/*#__PURE__*/
function (_Component) {
  DashboardView_inherits(DashboardView, _Component);

  function DashboardView(props) {
    var _this;

    DashboardView_classCallCheck(this, DashboardView);

    _this = DashboardView_possibleConstructorReturn(this, DashboardView_getPrototypeOf(DashboardView).call(this, props));

    _this.setRemove = function (removeItem) {
      _this.setState({
        removeItem: removeItem
      });

      _this.RemoveConfirmation.current.handleToggleOpen(true)();
    };

    _this.setEdit = function (dashboard) {
      _this.setState({
        editItem: dashboard,
        editIsOpen: true
      });
    };

    _this.handleOpenNew = function () {
      _this.setState({
        newIsOpen: true
      });
    };

    _this.handleCloseNew = function () {
      _this.setState({
        newIsOpen: false
      });
    };

    _this.handleCloseEdit = function () {
      _this.setState({
        editIsOpen: false
      });
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
      editItem: null,
      editIsOpen: false,
      newIsOpen: false
    };
    _this.RemoveConfirmation = react_default.a.createRef();
    return _this;
  }

  DashboardView_createClass(DashboardView, [{
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
          classes = _this$props.classes;
      var _this$state = this.state,
          removeItem = _this$state.removeItem,
          editItem = _this$state.editItem,
          editIsOpen = _this$state.editIsOpen,
          newIsOpen = _this$state.newIsOpen;
      var editableDashboard = {};
      if (editItem) editableDashboard = getItem(editItem.id, dashboards, "id");
      return react_default.a.createElement(react["Fragment"], null, react_default.a.createElement(Grid["default"], {
        container: true,
        spacing: 2
      }, dashboards.map(function (dashboard) {
        return react_default.a.createElement(Grid["default"], {
          item: true,
          md: 4,
          key: dashboard.id,
          className: classes.cardRoot
        }, react_default.a.createElement(DashboardCard, {
          dashboard: dashboard,
          onRemoveClick: _this2.setRemove,
          onEditClick: _this2.setEdit
        }));
      }), react_default.a.createElement(Grid["default"], {
        item: true,
        md: 4
      }, react_default.a.createElement(ui_NewCard, {
        text: "Dashboard",
        handleClick: this.handleOpenNew
      }))), react_default.a.createElement(ui_RemoveConfirmation, {
        removeContext: {
          item: removeItem,
          type: "dashboard",
          onSubmit: this.onRemoveConfirmationSubmit
        },
        ref: this.RemoveConfirmation
      }), react_default.a.createElement(components_DashboardEditDialog, {
        open: editIsOpen,
        handleClose: this.handleCloseEdit,
        dashboard: editableDashboard
      }), react_default.a.createElement(DashboardNewDialog, {
        open: newIsOpen,
        handleClose: this.handleCloseNew
      }));
    }
  }]);

  return DashboardView;
}(react["Component"]);

DashboardView_DashboardView.propTypes = {
  dashboards: prop_types_default.a.array.isRequired,
  getDashboards: prop_types_default.a.func.isRequired,
  deleteDashboard: prop_types_default.a.func.isRequired
};

var DashboardView_mapStateToProps = function mapStateToProps(state) {
  return {
    dashboards: state.dashboards.dashboards
  };
};

/* harmony default export */ var components_DashboardView = (Object(es["connect"])(DashboardView_mapStateToProps, {
  getDashboards: dashboards_getDashboards,
  deleteDashboard: dashboards_deleteDashboard
})(Object(esm_styles["withStyles"])(DashboardView_styles)(DashboardView_DashboardView)));
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

 // REDUX


 // MATERIAL-UI


 // NATIVE COMPONENTS



var home_styles = function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing(6)
    }
  };
};

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
      var classes = this.props.classes;
      return react_default.a.createElement(Container["default"], {
        maxWidth: "lg",
        className: classes.root
      }, react_default.a.createElement(components_DashboardView, null));
    }
  }]);

  return Dashboard;
}(react["Component"]);

home_Dashboard.propType = {
  classes: prop_types_default.a.object
};
/* harmony default export */ var home = (Object(es["connect"])(null, {
  clearCurrentDashboard: dashboards_clearCurrentDashboard,
  clearActionTables: dashboards_clearActionTables
})(Object(esm_styles["withStyles"])(home_styles)(home_Dashboard)));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Email.js
var Email = __webpack_require__("./node_modules/@material-ui/icons/Email.js");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/AccountBox.js
var AccountBox = __webpack_require__("./node_modules/@material-ui/icons/AccountBox.js");
var AccountBox_default = /*#__PURE__*/__webpack_require__.n(AccountBox);

// CONCATENATED MODULE: ./frontend/src/scenes/contact/index.js
 // MATERIAL-UI








var contact_useStyles = Object(esm_styles["makeStyles"])(function (theme) {
  return {
    root: {
      height: "100%"
    },
    heading: {
      marginBottom: theme.spacing(3)
    },
    icon: {
      marginRight: theme.spacing(1)
    }
  };
});

var contact_Contact = function Contact(props) {
  var classes = contact_useStyles();
  return react_default.a.createElement(Grid["default"], {
    container: true,
    spacing: 0,
    alignItems: "center",
    justify: "center",
    className: classes.root
  }, react_default.a.createElement(Card["default"], null, react_default.a.createElement(CardContent["default"], null, react_default.a.createElement(Typography["default"], {
    variant: "h3",
    className: classes.heading
  }, "Contact"), react_default.a.createElement(Typography["default"], {
    variant: "body1",
    gutterBottom: true
  }, react_default.a.createElement(AccountBox_default.a, {
    className: classes.icon,
    color: "primary"
  }), "Kyle Thatcher - Co-op Student"), react_default.a.createElement(Typography["default"], {
    variant: "body1",
    gutterBottom: true
  }, react_default.a.createElement(Email_default.a, {
    className: classes.icon,
    color: "primary"
  }), "kyle.thatcher@sanofi.com"), react_default.a.createElement(Typography["default"], {
    variant: "body1"
  }, "Please contact for any and all bugs and issues encountered. Thanks."))));
};

/* harmony default export */ var contact = (contact_Contact);
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

function reducers_dashboards_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducers_dashboards_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_dashboards_ownKeys(Object(source), true).forEach(function (key) { reducers_dashboards_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducers_dashboards_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      return reducers_dashboards_objectSpread({}, state, {
        currentDashboard: action.payload
      });

    case GET_DASHBOARDS:
      return reducers_dashboards_objectSpread({}, state, {
        dashboards: action.payload
      });

    case DELETE_DASHBOARD:
      return reducers_dashboards_objectSpread({}, state, {
        dashboards: state.dashboards.filter(function (dashboard) {
          return dashboard.id !== action.payload;
        })
      });

    case ADD_DASHBOARD:
      return reducers_dashboards_objectSpread({}, state, {
        dashboards: [].concat(dashboards_toConsumableArray(state.dashboards), [action.payload])
      });

    case UPDATE_DASHBOARD:
      return reducers_dashboards_objectSpread({}, state, {
        dashboards: state.dashboards.map(function (dashboard) {
          if (dashboard.id === action.payload.id) return action.payload;else return dashboard;
        })
      });

    case GET_KPIS:
      return reducers_dashboards_objectSpread({}, state, {
        kpis: action.payload
      });

    case ADD_KPI:
      return reducers_dashboards_objectSpread({}, state, {
        kpis: [].concat(dashboards_toConsumableArray(state.kpis), [action.payload])
      });

    case UPDATE_KPI:
      return reducers_dashboards_objectSpread({}, state, {
        kpis: state.kpis.map(function (kpi) {
          return kpi.id === action.payload.id ? action.payload : kpi;
        })
      });

    case DELETE_KPI:
      return reducers_dashboards_objectSpread({}, state, {
        kpis: state.kpis.filter(function (kpi) {
          return kpi.id !== action.payload;
        })
      });

    case CLEAR_KPIS:
      return reducers_dashboards_objectSpread({}, state, {
        kpis: []
      });

    case ADD_SERIES:
      var kpis = state.kpis.map(function (kpi) {
        if (kpi.id != action.payload.kpi) return kpi;
        var series = kpi.series;
        return reducers_dashboards_objectSpread({}, kpi, {
          series: [].concat(dashboards_toConsumableArray(series), [action.payload])
        });
      });
      return reducers_dashboards_objectSpread({}, state, {
        kpis: kpis
      });

    case UPDATE_SERIES:
      var kpis__ = state.kpis.map(function (kpi) {
        return reducers_dashboards_objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            if (series.id != action.payload.id) return series;
            return action.payload;
          })
        });
      });
      return reducers_dashboards_objectSpread({}, state, {
        kpis: kpis__
      });

    case GET_SERIES:
      return reducers_dashboards_objectSpread({}, state, {
        series: action.payload
      });

    case DELETE_SERIES:
      var kpis_ = state.kpis.map(function (kpi) {
        return reducers_dashboards_objectSpread({}, kpi, {
          series: kpi.series.filter(function (series) {
            return series.id != action.payload;
          })
        });
      });
      return reducers_dashboards_objectSpread({}, state, {
        kpis: kpis_
      });

    case UPDATE_DATAPOINT:
      var kpis = state.kpis.map(function (kpi) {
        return reducers_dashboards_objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            if (series.id != action.payload.series) return series;
            return reducers_dashboards_objectSpread({}, series, {
              entries: series.entries.map(function (datapoint) {
                if (datapoint.id != action.payload.id) return datapoint;
                return action.payload;
              })
            });
          })
        });
      });
      return reducers_dashboards_objectSpread({}, state, {
        kpis: kpis
      });

    case DELETE_DATAPOINT:
      var kpis = state.kpis.map(function (kpi) {
        return reducers_dashboards_objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            return reducers_dashboards_objectSpread({}, series, {
              entries: series.entries.filter(function (datapoint) {
                return datapoint != action.payload;
              })
            });
          })
        });
      });
      return reducers_dashboards_objectSpread({}, state, {
        kpis: kpis
      });

    case ADD_DATAPOINT:
      var kpis___ = state.kpis.map(function (kpi) {
        return reducers_dashboards_objectSpread({}, kpi, {
          series: kpi.series.map(function (series) {
            if (series.id != action.payload.series) return series;
            return reducers_dashboards_objectSpread({}, series, {
              entries: [].concat(dashboards_toConsumableArray(series.entries), [action.payload])
            });
          })
        });
      });
      return reducers_dashboards_objectSpread({}, state, {
        kpis: kpis___
      });

    case GET_ACTION_TABLE:
      return reducers_dashboards_objectSpread({}, state, {
        actionTables: action.payload
      });

    case ADD_ACTION:
      var actionTables = state.actionTables.map(function (at) {
        if (action.payload.tables.indexOf(at.id) == -1) return at;
        return reducers_dashboards_objectSpread({}, at, {
          actions: [].concat(dashboards_toConsumableArray(at.actions), [action.payload])
        });
      });
      return reducers_dashboards_objectSpread({}, state, {
        actionTables: actionTables
      });

    case DELETE_ACTION:
      var actionTables = state.actionTables.map(function (at) {
        return reducers_dashboards_objectSpread({}, at, {
          actions: at.actions.filter(function (act) {
            return act.id != action.payload;
          })
        });
      });
      return reducers_dashboards_objectSpread({}, state, {
        actionTables: actionTables
      });

    case UPDATE_ACTION:
      var actionTables = state.actionTables.map(function (at) {
        return reducers_dashboards_objectSpread({}, at, {
          actions: at.actions.map(function (act) {
            if (act.id != action.payload.id) return act;
            return action.payload;
          })
        });
      });
      return reducers_dashboards_objectSpread({}, state, {
        actionTables: actionTables
      });

    case UPDATE_ACTION_TABLE:
      var actionTables = state.actionTables.map(function (at) {
        if (at.id != action.payload.id) return at;
        return action.payload;
      });
      return reducers_dashboards_objectSpread({}, state, {
        actionTables: actionTables
      });

    case CLEAR_CURRENT_DASHBOARD:
      return reducers_dashboards_objectSpread({}, state, {
        actionTables: []
      });

    case CLEAR_ACTION_TABLES:
      return reducers_dashboards_objectSpread({}, state, {
        currentDashboard: null
      });

    case GET_AUDITS:
      return reducers_dashboards_objectSpread({}, state, {
        audits: action.payload
      });

    case ADD_AUDIT:
      return reducers_dashboards_objectSpread({}, state, {
        audits: [].concat(dashboards_toConsumableArray(state.audits), [action.payload])
      });

    case DELETE_AUDIT:
      return reducers_dashboards_objectSpread({}, state, {
        audits: state.audits.filter(function (audit) {
          return audit.id != action.payload;
        })
      });

    case UPDATE_AUDIT:
      return reducers_dashboards_objectSpread({}, state, {
        audits: state.audits.map(function (audit) {
          if (audit.id === action.payload.id) return action.payload;else return audit;
        })
      });

    case GET_WINS:
      return reducers_dashboards_objectSpread({}, state, {
        wins: action.payload
      });

    case ADD_WIN:
      return reducers_dashboards_objectSpread({}, state, {
        wins: [].concat(dashboards_toConsumableArray(state.wins), [action.payload])
      });

    case DELETE_WIN:
      return reducers_dashboards_objectSpread({}, state, {
        wins: state.wins.filter(function (win) {
          return win.id != action.payload;
        })
      });

    case UPDATE_WIN:
      return reducers_dashboards_objectSpread({}, state, {
        wins: state.wins.map(function (win) {
          if (win.id === action.payload.id) return action.payload;else return win;
        })
      });

    case UPDATE_HEAT:
      return reducers_dashboards_objectSpread({}, state, {
        heat: state.heat.map(function (h) {
          if (h.id === action.payload.id) return action.payload;else return h;
        })
      });

    case GET_HEAT:
      return reducers_dashboards_objectSpread({}, state, {
        heat: action.payload
      });

    case ADD_IMAGE:
      return reducers_dashboards_objectSpread({}, state, {
        dashboards: state.dashboards.map(function (dashboard) {
          if (dashboard.id != action.payload.dashboard) return dashboard;else return reducers_dashboards_objectSpread({}, dashboard, {
            images: [].concat(dashboards_toConsumableArray(dashboard.images), [action.payload])
          });
        })
      });

    case DELETE_IMAGE:
      return reducers_dashboards_objectSpread({}, state, {
        dashboards: state.dashboards.map(function (dashboard) {
          return reducers_dashboards_objectSpread({}, dashboard, {
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
function auth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_ownKeys(Object(source), true).forEach(function (key) { auth_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      return auth_objectSpread({}, state, {}, action.payload, {
        isAuthenticated: true,
        isLoading: false
      });

    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      console.log(action);
      return auth_objectSpread({}, state, {
        token: null,
        user: null,
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
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Dashboard.js
var icons_Dashboard = __webpack_require__("./node_modules/@material-ui/icons/Dashboard.js");
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(icons_Dashboard);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/SupervisorAccount.js
var SupervisorAccount = __webpack_require__("./node_modules/@material-ui/icons/SupervisorAccount.js");
var SupervisorAccount_default = /*#__PURE__*/__webpack_require__.n(SupervisorAccount);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/School.js
var School = __webpack_require__("./node_modules/@material-ui/icons/School.js");
var School_default = /*#__PURE__*/__webpack_require__.n(School);

// CONCATENATED MODULE: ./frontend/src/core/components/layout/NavbarUtils.js




var sidenavLinks = [{
  text: "My Dashboards",
  icon: react_default.a.createElement(Dashboard_default.a, null),
  link: "/"
}, {
  text: "Tutorial",
  icon: react_default.a.createElement(School_default.a, null),
  link: "/"
}, {
  text: "Contact An Admin",
  icon: react_default.a.createElement(SupervisorAccount_default.a, null),
  link: "/contact"
}];
var getWeekNumber = function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7

  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7)); // Get first day of year

  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)); // Calculate full weeks to nearest Thursday

  var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7); // Return array of year and week number

  return weekNo;
};
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/index.js + 1 modules
var Drawer = __webpack_require__("./node_modules/@material-ui/core/esm/Drawer/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/index.js + 1 modules
var List = __webpack_require__("./node_modules/@material-ui/core/esm/List/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/index.js + 1 modules
var ListItem = __webpack_require__("./node_modules/@material-ui/core/esm/ListItem/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/index.js + 1 modules
var ListItemIcon = __webpack_require__("./node_modules/@material-ui/core/esm/ListItemIcon/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/index.js + 1 modules
var ListItemText = __webpack_require__("./node_modules/@material-ui/core/esm/ListItemText/index.js");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/AccountCircle.js
var AccountCircle = __webpack_require__("./node_modules/@material-ui/icons/AccountCircle.js");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Menu.js
var icons_Menu = __webpack_require__("./node_modules/@material-ui/icons/Menu.js");
var Menu_default = /*#__PURE__*/__webpack_require__.n(icons_Menu);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/index.js + 7 modules
var Hidden = __webpack_require__("./node_modules/@material-ui/core/esm/Hidden/index.js");

// CONCATENATED MODULE: ./frontend/src/core/components/layout/Navbar.js
function Navbar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Navbar_typeof = function _typeof(obj) { return typeof obj; }; } else { Navbar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Navbar_typeof(obj); }

function Navbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Navbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Navbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Navbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Navbar_defineProperties(Constructor, staticProps); return Constructor; }

function Navbar_possibleConstructorReturn(self, call) { if (call && (Navbar_typeof(call) === "object" || typeof call === "function")) { return call; } return Navbar_assertThisInitialized(self); }

function Navbar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Navbar_getPrototypeOf(o) { Navbar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Navbar_getPrototypeOf(o); }

function Navbar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Navbar_setPrototypeOf(subClass, superClass); }

function Navbar_setPrototypeOf(o, p) { Navbar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Navbar_setPrototypeOf(o, p); }







 // MATERIAL-UI

















var Navbar_styles = function styles(theme) {
  return {
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    appBar: {
      background: "#9BB0DB"
    },
    logo: {
      marginRight: theme.spacing(3)
    },
    date: {
      marginRight: theme.spacing(3)
    }
  };
};

var Navbar_Navbar =
/*#__PURE__*/
function (_Component) {
  Navbar_inherits(Navbar, _Component);

  function Navbar(props) {
    var _this;

    Navbar_classCallCheck(this, Navbar);

    _this = Navbar_possibleConstructorReturn(this, Navbar_getPrototypeOf(Navbar).call(this, props));

    _this.handleMenuOpen = function (event) {
      var isAuthenticated = _this.props.auth.isAuthenticated;

      if (isAuthenticated) {
        _this.setState({
          anchorEl: event.currentTarget,
          menuOpen: !_this.state.menuOpen
        });
      } else {
        return react_default.a.createElement(react_router_dom["Redirect"], {
          to: "/login"
        });
      }
    };

    _this.handleMenuClose = function () {
      _this.setState({
        anchorEl: null,
        menuOpen: !_this.state.menuOpen
      });
    };

    _this.toggleDrawer = function (open) {
      return function (event) {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
          return;
        }

        _this.setState({
          sidenavOpen: open
        });
      };
    };

    _this.handleLogout = function () {
      var logout = _this.props.logout;

      _this.handleMenuClose();

      logout();
    };

    _this.renderDrawer = function () {
      var classes = _this.props.classes;
      return react_default.a.createElement("div", {
        className: classes.list,
        role: "presentation",
        onClick: _this.toggleDrawer(false),
        onKeyDown: _this.toggleDrawer(false)
      }, react_default.a.createElement(List["default"], null, sidenavLinks.map(function (link, index) {
        return react_default.a.createElement(react_router_dom["Link"], {
          to: link.link,
          key: "link-".concat(index)
        }, react_default.a.createElement(ListItem["default"], {
          button: true,
          key: index
        }, react_default.a.createElement(ListItemIcon["default"], null, link.icon), react_default.a.createElement(ListItemText["default"], {
          primary: link.text
        })));
      })));
    };

    _this.state = {
      sidenavOpen: false,
      anchorEl: null,
      menuOpen: false,
      curTime: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleDateString(),
      weekNum: getWeekNumber(new Date())
    };
    return _this;
  }

  Navbar_createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          currentDashboard = _this$props.currentDashboard;
      var _this$state = this.state,
          sidenavOpen = _this$state.sidenavOpen,
          anchorEl = _this$state.anchorEl,
          menuOpen = _this$state.menuOpen,
          curTime = _this$state.curTime,
          weekNum = _this$state.weekNum;
      return react_default.a.createElement("div", {
        className: classes.root
      }, react_default.a.createElement(AppBar["default"], {
        className: classes.appBar,
        position: "static"
      }, react_default.a.createElement(Toolbar["default"], null, react_default.a.createElement("img", {
        className: classes.logo,
        src: "../../../../static/media/sms-logo.png",
        style: {
          height: "40px",
          width: "40px"
        }
      }), react_default.a.createElement(IconButton["default"], {
        edge: "start",
        className: classes.menuButton,
        color: "inherit",
        "aria-label": "menu",
        onClick: this.toggleDrawer(true)
      }, react_default.a.createElement(Menu_default.a, null)), react_default.a.createElement(Typography["default"], {
        variant: "h6",
        className: classes.title
      }, currentDashboard ? currentDashboard.title : "My Dashboards"), react_default.a.createElement(Hidden["default"], {
        smDown: true
      }, react_default.a.createElement(Typography["default"], {
        className: classes.date
      }, curTime, ", Week # ", weekNum)), react_default.a.createElement(IconButton["default"], {
        "aria-label": "account of current user",
        "aria-controls": "menu-appbar",
        "aria-haspopup": "true",
        onClick: this.handleMenuOpen,
        color: "inherit"
      }, react_default.a.createElement(AccountCircle_default.a, null)), react_default.a.createElement(Menu["default"], {
        id: "menu-appbar",
        anchorEl: anchorEl,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        keepMounted: true,
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        open: menuOpen,
        onClose: this.handleMenuClose
      }, react_default.a.createElement(MenuItem["default"], {
        onClick: this.handleMenuClose
      }, "My account"), react_default.a.createElement(MenuItem["default"], {
        onClick: this.handleLogout
      }, "Sign-out")))), react_default.a.createElement(Drawer["default"], {
        open: sidenavOpen,
        onClose: this.toggleDrawer(false)
      }, this.renderDrawer()));
    }
  }]);

  return Navbar;
}(react["Component"]);

Navbar_Navbar.propTypes = {
  auth: prop_types_default.a.object,
  classes: prop_types_default.a.object,
  currentDashboard: prop_types_default.a.object
};

var Navbar_mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    currentDashboard: state.dashboards.currentDashboard
  };
};

/* harmony default export */ var layout_Navbar = (Object(es["connect"])(Navbar_mapStateToProps, {
  logout: auth_logout
})(Object(esm_styles["withStyles"])(Navbar_styles)(Navbar_Navbar)));
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
      var state = src_store.getState();
      return react_default.a.createElement(es["Provider"], {
        store: src_store
      }, react_default.a.createElement(react_alert["Provider"], App_extends({
        template: react_alert_template_basic["default"]
      }, alertOptions), react_default.a.createElement(react_router_dom["HashRouter"], null, react_default.a.createElement(layout_Navbar, {
        currentDashboard: state.dashboards.currentDashboard
      }), react_default.a.createElement(layout_Alerts, null), react_default.a.createElement(react_router_dom["Switch"], null, react_default.a.createElement(utils_PrivateRoute, {
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
        path: "/contact",
        component: contact
      }), react_default.a.createElement(utils_PrivateRoute, {
        path: "/boardroom/:id",
        component: boardRoom
      }), react_default.a.createElement(utils_PrivateRoute, {
        path: "/pillar/:dashboardId/:pillarId",
        component: scenes_pillarRoom
      })))));
    }
  }]);

  return App;
}(react["Component"]);

react_dom_default.a.render(react_default.a.createElement(App_App, null), document.getElementById("app"));
// CONCATENATED MODULE: ./frontend/src/index.js


/***/ })

/******/ });