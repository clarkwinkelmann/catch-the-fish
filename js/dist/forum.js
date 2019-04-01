module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/addDropAreas.js":
/*!***********************************!*\
  !*** ./src/forum/addDropAreas.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DropArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DropArea */ "./src/forum/components/DropArea.js");
/* harmony import */ var _components_MovingFish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MovingFish */ "./src/forum/components/MovingFish.js");






function fishIdFromEvent(event) {
  var data = event.dataTransfer.getData("text/plain");
  var match = /^fish:([0-9]+)$/.exec(data);
  return match ? match[1] : null;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'content', function (content) {
    var _this = this;

    var addContent = [];

    if (this.fishDragOver) {
      addContent.push(_components_DropArea__WEBPACK_IMPORTED_MODULE_3__["default"].component());
    }

    var fishes = this.props.post.catchTheFishFishes();

    if (fishes) {
      fishes.forEach(function (fish) {
        addContent.push(_components_MovingFish__WEBPACK_IMPORTED_MODULE_4__["default"].component({
          fish: fish,
          oncatch: function oncatch() {
            _this.props.post.pushData({
              relationships: {
                catchTheFishFishes: {
                  data: []
                }
              }
            });
          }
        }));
      });
    }

    return content().concat(addContent);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'init', function () {
    var _this2 = this;

    this.fishDragOver = false; // Add a condition to the tree retainer

    this.subtree.check(function () {
      return _this2.fishDragOver;
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'attrs', function (attrs) {
    var _this3 = this;

    attrs.ondrop = function (event) {
      _this3.fishDragOver = false;
      var fishId = fishIdFromEvent(event);

      if (fishId) {
        event.preventDefault();
        var fish = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.getById('catchthefish-fishes', fishId);

        if (fish) {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
            method: 'POST',
            url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/catch-the-fish/fishes/' + fish.id() + '/place',
            data: {
              placement: {
                post_id: _this3.props.post.id()
              }
            }
          }).then(function (result) {
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.pushPayload(result); // Refresh basket my reloading user
            //app.store.find('users', app.session.user.id());
          });
        } else {
          alert('Invalid fish');
        }
      }
    };

    attrs.ondragover = function (event) {
      var fishId = fishIdFromEvent(event);

      if (fishId) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        _this3.fishDragOver = true;
      }
    };

    attrs.ondragenter = function (event) {
      event.preventDefault();
    };

    attrs.ondragleave = function () {
      _this3.fishDragOver = false;
    };
  });
});

/***/ }),

/***/ "./src/forum/addFishBasket.js":
/*!************************************!*\
  !*** ./src/forum/addFishBasket.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/HeaderPrimary */ "flarum/components/HeaderPrimary");
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Basket */ "./src/forum/components/Basket.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'items', function (items) {
    items.add('catchthefish-basket', _components_Basket__WEBPACK_IMPORTED_MODULE_2__["default"].component());
  });
});

/***/ }),

/***/ "./src/forum/addModels.js":
/*!********************************!*\
  !*** ./src/forum/addModels.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/models/Post */ "flarum/models/Post");
/* harmony import */ var flarum_models_Post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_models_Forum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/models/Forum */ "flarum/models/Forum");
/* harmony import */ var flarum_models_Forum__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Forum__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_Fish__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/Fish */ "./src/forum/models/Fish.js");
/* harmony import */ var _models_Round__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/Round */ "./src/forum/models/Round.js");








/* harmony default export */ __webpack_exports__["default"] = (function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models['catchthefish-fishes'] = _models_Fish__WEBPACK_IMPORTED_MODULE_6__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models['catchthefish-rounds'] = _models_Round__WEBPACK_IMPORTED_MODULE_7__["default"];
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.catchTheFishFishes = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('catchTheFishFishes');
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.catchTheFishFishes = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('catchTheFishFishes');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.catchTheFishFishes = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('catchTheFishFishes');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.catchTheFishBasket = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('catchTheFishBasket');
  flarum_models_Forum__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.catchTheFishActiveRounds = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('catchTheFishActiveRounds');
  flarum_models_Forum__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.catchTheFishCanModerate = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('catchTheFishCanModerate');
});

/***/ }),

/***/ "./src/forum/addNavLinks.js":
/*!**********************************!*\
  !*** ./src/forum/addNavLinks.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);




var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.nav.';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'navItems', function (items) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.catchTheFishCanModerate()) {
      items.add('catchthefish-settings', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        icon: 'fas fa-fish',
        children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'settings'),
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('catchTheFishRounds')
      }));
    }
  });
});

/***/ }),

/***/ "./src/forum/addPages.js":
/*!*******************************!*\
  !*** ./src/forum/addPages.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_RoundList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/RoundList */ "./src/forum/pages/RoundList.js");
/* harmony import */ var _pages_RoundSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/RoundSettings */ "./src/forum/pages/RoundSettings.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.catchTheFishRounds = {
    path: '/catch-the-fish/rounds',
    component: _pages_RoundList__WEBPACK_IMPORTED_MODULE_1__["default"].component()
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.catchTheFishRound = {
    path: '/catch-the-fish/rounds/:id',
    component: _pages_RoundSettings__WEBPACK_IMPORTED_MODULE_2__["default"].component()
  };
});

/***/ }),

/***/ "./src/forum/addRoundAlert.js":
/*!************************************!*\
  !*** ./src/forum/addRoundAlert.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RoundAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/RoundAlert */ "./src/forum/components/RoundAlert.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'hero', function (original) {
    var existing = original();
    var rounds = app.forum.catchTheFishActiveRounds();

    if (!rounds) {
      return existing;
    } // Replace missing rounds with null. Happens if you delete a round and go back to homepage


    var additional = rounds.map(function (round) {
      return round ? _components_RoundAlert__WEBPACK_IMPORTED_MODULE_2__["default"].component({
        round: round
      }) : null;
    });

    if (Array.isArray(existing)) {
      return round.concat(existing);
    }

    return m('div', [additional, existing]);
  });
});

/***/ }),

/***/ "./src/forum/components/Basket.js":
/*!****************************************!*\
  !*** ./src/forum/components/Basket.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Basket; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FishImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FishImage */ "./src/forum/components/FishImage.js");




/* global m, moment */

var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.basket.';

var Basket =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Basket, _Component);

  function Basket() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Basket.prototype;

  _proto.view = function view() {
    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
      return m('div');
    }

    var basket = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.catchTheFishBasket();

    if (!basket || basket.length === 0) {
      return m('div');
    }

    return m('.catchthefish-basket', [m('.catchthefish-basket-title', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title')), m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'drag-help')), basket.map(function (fish) {
      return m('.catchthefish-basket-entry', [m('.catchthefish-basket-fish', {
        draggable: true,
        ondragstart: function ondragstart(event) {
          event.dataTransfer.setData('text/plain', 'fish:1');
        }
      }, _FishImage__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        fish: fish
      })), m('.catchthefish-basket-time', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'time', {
        time: moment(fish.placeUntil()).fromNow()
      }))]);
    })]);
  };

  return Basket;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/DropArea.js":
/*!******************************************!*\
  !*** ./src/forum/components/DropArea.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropArea; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);


/* global m */

var DropArea =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DropArea, _Component);

  function DropArea() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DropArea.prototype;

  _proto.view = function view() {
    return m('.catchthefish-drop-area', 'Drop it here');
  };

  return DropArea;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/EditFish.js":
/*!******************************************!*\
  !*** ./src/forum/components/EditFish.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditFish; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);




/* global m */

var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.edit-fish.';

var EditFish =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditFish, _Component);

  function EditFish() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EditFish.prototype;

  _proto.init = function init() {
    this.fish = this.props.fish;
    this.dirty = false;
    this.processing = false;

    if (typeof this.fish === 'undefined') {
      this.initNewRecord();
    }
  };

  _proto.initNewRecord = function initNewRecord() {
    this.fish = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.createRecord('catchthefish-fishes', {
      attributes: {
        round_id: this.props.round.id(),
        name: ''
      }
    });
  };

  _proto.view = function view() {
    return m('form', [m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name')), m('input.FormControl', {
      value: this.fish.name(),
      oninput: m.withAttr('value', this.updateAttribute.bind(this, 'name'))
    }), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name-help'))]), m('.ButtonGroup', [flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + (this.fish.exists ? 'save' : 'create')),
      loading: this.processing,
      disabled: !this.readyToSave(),
      onclick: this.saveRecord.bind(this)
    }), this.fish.exists ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: 'button',
      className: 'Button Button--danger',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'delete'),
      loading: this.processing,
      onclick: this.deleteRecord.bind(this)
    }) : ''])]);
  };

  _proto.updateAttribute = function updateAttribute(attribute, value) {
    var _this$fish$pushAttrib;

    this.fish.pushAttributes((_this$fish$pushAttrib = {}, _this$fish$pushAttrib[attribute] = value, _this$fish$pushAttrib));
    this.dirty = true;
  };

  _proto.readyToSave = function readyToSave() {
    if (!this.fish.name()) {
      return false;
    }

    return this.dirty;
  };

  _proto.saveRecord = function saveRecord() {
    var _this = this;

    this.processing = true;
    this.fish.save(this.fish.data.attributes).then(function () {
      if (_this.props.onsave) {
        _this.props.onsave();
      }

      _this.processing = false;
      _this.dirty = false;
      m.redraw();
    }).catch(function (err) {
      _this.processing = false;
      m.redraw();
      throw err;
    });
  };

  _proto.deleteRecord = function deleteRecord() {
    var _this2 = this;

    if (!confirm(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'delete-confirmation', {
      name: this.fish.name()
    }).join(''))) {
      return;
    }

    this.processing = true;
    this.fish.delete().then(function () {
      if (_this2.props.ondelete) {
        _this2.props.ondelete();
      }

      _this2.processing = false;
      m.redraw();
    }).catch(function (err) {
      _this2.processing = false;
      m.redraw();
      throw err;
    });
  };

  return EditFish;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/EditRound.js":
/*!*******************************************!*\
  !*** ./src/forum/components/EditRound.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditRound; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__);





/* global m */

var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.edit-round.';

var EditRound =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditRound, _Component);

  function EditRound() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EditRound.prototype;

  _proto.init = function init() {
    this.round = this.props.round;
    this.dirty = false;
    this.processing = false;

    if (typeof this.round === 'undefined') {
      this.initNewRecord();
    }
  };

  _proto.initNewRecord = function initNewRecord() {
    this.round = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.createRecord('catchthefish-rounds', {
      attributes: {
        name: '',
        starts_at: '',
        ends_at: moment().add(1, 'day').toISOString(),
        include_starting_pack: true
      }
    });
  };

  _proto.view = function view() {
    return m('form', [m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name')), m('input.FormControl', {
      value: this.round.name(),
      oninput: m.withAttr('value', this.updateAttribute.bind(this, 'name'))
    }), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name-help'))]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'starts-at')), m('input.FormControl', {
      value: this.round.starts_at(),
      oninput: m.withAttr('value', this.updateAttribute.bind(this, 'starts_at'))
    })]), m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'ends-at')), m('input.FormControl', {
      value: this.round.ends_at(),
      oninput: m.withAttr('value', this.updateAttribute.bind(this, 'ends_at'))
    })]), this.round.exists ? '' : m('.Form-group', [m('label', [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      state: this.round.include_starting_pack(),
      onchange: this.updateAttribute.bind(this, 'include_starting_pack'),
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'starting-pack')
    })]), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'starting-pack-help'))]), m('.ButtonGroup', [flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + (this.round.exists ? 'save' : 'create')),
      loading: this.processing,
      disabled: !this.readyToSave(),
      onclick: this.saveRecord.bind(this)
    }), this.round.exists ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: 'button',
      className: 'Button Button--danger',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'delete'),
      loading: this.processing,
      onclick: this.deleteRecord.bind(this)
    }) : ''])]);
  };

  _proto.updateAttribute = function updateAttribute(attribute, value) {
    var _this$round$pushAttri;

    this.round.pushAttributes((_this$round$pushAttri = {}, _this$round$pushAttri[attribute] = value, _this$round$pushAttri));
    this.dirty = true;
  };

  _proto.readyToSave = function readyToSave() {
    if (!this.round.name()) {
      return false;
    }

    return this.dirty;
  };

  _proto.saveRecord = function saveRecord() {
    var _this = this;

    this.processing = true;
    this.round.save(this.round.data.attributes).then(function () {
      if (_this.props.onsave) {
        _this.props.onsave();
      }

      _this.processing = false;
      _this.dirty = false;
      m.redraw();
    }).catch(function (err) {
      _this.processing = false;
      m.redraw();
      throw err;
    });
  };

  _proto.deleteRecord = function deleteRecord() {
    var _this2 = this;

    if (!confirm(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'delete-confirmation', {
      name: this.round.name()
    }).join(''))) {
      return;
    }

    this.processing = true;
    this.round.delete().then(function () {
      if (_this2.props.ondelete) {
        _this2.props.ondelete();
      }

      _this2.processing = false;
      m.redraw();
    }).catch(function (err) {
      _this2.processing = false;
      m.redraw();
      throw err;
    });
  };

  return EditRound;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/FishImage.js":
/*!*******************************************!*\
  !*** ./src/forum/components/FishImage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FishImage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);


/* global m */

var FishImage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FishImage, _Component);

  function FishImage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FishImage.prototype;

  _proto.view = function view() {
    var src = this.props.fish.image_url();

    if (src) {
      return m('img.catchthefish-image', {
        alt: 'Image of fish ' + this.props.fish.name(),
        src: src
      });
    }

    return m('.catchthefish-no-image', 'Missing fish image');
  };

  return FishImage;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/MovingFish.js":
/*!********************************************!*\
  !*** ./src/forum/components/MovingFish.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovingFish; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FishImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FishImage */ "./src/forum/components/FishImage.js");
/* harmony import */ var _modals_CaughtFishModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/CaughtFishModal */ "./src/forum/modals/CaughtFishModal.js");





/* global m */

var MovingFish =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MovingFish, _Component);

  function MovingFish() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MovingFish.prototype;

  _proto.view = function view() {
    var _this = this;

    var fish = this.props.fish;
    return m('.catchthefish-moving-fish', {
      onclick: function onclick() {
        if (!fish.canCatch()) {
          if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
            alert('Login to catch fishes');
          } else {
            alert('Catching fishes is restricted to certain groups');
          }

          return;
        }

        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          method: 'POST',
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/catch-the-fish/fishes/' + fish.id() + '/catch',
          data: fish.placement()
        }).then(function (result) {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _modals_CaughtFishModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
            fish: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.pushPayload(result)
          })); // So the parent can remove the fish from the relationship

          if (_this.props.oncatch) {
            _this.props.oncatch();
          }
        });
      }
    }, [m('.catchthefish-name', fish.name()), _FishImage__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      fish: fish
    })]);
  };

  return MovingFish;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/RoundAlert.js":
/*!********************************************!*\
  !*** ./src/forum/components/RoundAlert.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateAlert; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3__);




/* global m, moment */

var AlertWithContainer =
/*#__PURE__*/
function (_Alert) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AlertWithContainer, _Alert);

  function AlertWithContainer() {
    return _Alert.apply(this, arguments) || this;
  }

  var _proto = AlertWithContainer.prototype;

  _proto.view = function view() {
    var vdom = _Alert.prototype.view.call(this);

    vdom.children = [m('.container', vdom.children)];
    return vdom;
  };

  return AlertWithContainer;
}(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_3___default.a);

var UpdateAlert =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(UpdateAlert, _Component);

  function UpdateAlert() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto2 = UpdateAlert.prototype;

  _proto2.view = function view() {
    return AlertWithContainer.component({
      type: 'info',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('clarkwinkelmann-catch-the-fish.forum.round-alert.message', {
        name: this.props.round.name(),
        time: moment(this.props.round.ends_at()).calendar()
      }),
      dismissible: false
    });
  };

  return UpdateAlert;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _addModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addModels */ "./src/forum/addModels.js");
/* harmony import */ var _addFishBasket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addFishBasket */ "./src/forum/addFishBasket.js");
/* harmony import */ var _addDropAreas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addDropAreas */ "./src/forum/addDropAreas.js");
/* harmony import */ var _addPages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addPages */ "./src/forum/addPages.js");
/* harmony import */ var _addNavLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addNavLinks */ "./src/forum/addNavLinks.js");
/* harmony import */ var _addRoundAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addRoundAlert */ "./src/forum/addRoundAlert.js");








flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('clarkwinkelmann-catch-the-fish', function () {
  Object(_addModels__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_addFishBasket__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_addDropAreas__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_addPages__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_addNavLinks__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_addRoundAlert__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

/***/ }),

/***/ "./src/forum/modals/CaughtFishModal.js":
/*!*********************************************!*\
  !*** ./src/forum/modals/CaughtFishModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CaughtFishModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FishImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FishImage */ "./src/forum/components/FishImage.js");





/* global m */

var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.caught-fish-modal.';

var CaughtFishModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CaughtFishModal, _Modal);

  function CaughtFishModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = CaughtFishModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.newName = m.prop(this.props.fish.name());
    this.dirty = false;
    this.loading = false;
  };

  _proto.className = function className() {
    return 'Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title');
  };

  _proto.saveNameAndPlacement = function saveNameAndPlacement(randomPlacement) {
    var _this = this;

    if (randomPlacement === void 0) {
      randomPlacement = false;
    }

    var data = {};

    if (this.dirty) {
      data.name = this.newName();
    }

    if (randomPlacement) {
      data.placement = 'random';
    }

    if (data) {
      this.loading = true;
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
        method: 'POST',
        url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/catch-the-fish/fishes/' + this.props.fish.id() + '/place',
        data: data
      }).then(function (result) {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.pushPayload(result);

        _this.hide();
      }).catch(function (err) {
        _this.loading = false;
        m.redraw();
        throw err;
      });
    } else {
      this.hide();
    }
  };

  _proto.content = function content() {
    var _this2 = this;

    var fish = this.props.fish;
    return m('.Modal-body', [_components_FishImage__WEBPACK_IMPORTED_MODULE_4__["default"].component({
      fish: fish
    }), m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'congratulation')), fish.canName() ? m('.Form-group', [m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name-help')), m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name')), m('input.FormControl', {
      value: this.newName(),
      oninput: m.withAttr('value', function (value) {
        _this2.newName(value);

        _this2.dirty = true;
      })
    })]) : null, fish.canPlace() ? m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'placement-help')) : null, m('.Form-group', flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button Button--primary Button--block',
      type: 'button',
      loading: this.loading,
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + (this.dirty ? fish.canPlace() ? 'submit-name-place-later' : 'submit-name' : fish.canPlace() ? 'submit-place-later' : 'submit-continue')),
      onclick: function onclick() {
        _this2.saveNameAndPlacement();
      }
    })), fish.canPlace() ? m('.Form-group', flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button Button--primary Button--block',
      type: 'button',
      loading: this.loading,
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + (this.dirty ? 'submit-name-place-random' : 'submit-place-random')),
      onclick: function onclick() {
        _this2.saveNameAndPlacement(true);
      }
    })) : null]);
  };

  return CaughtFishModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/modals/EditFishModal.js":
/*!*******************************************!*\
  !*** ./src/forum/modals/EditFishModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditRoundModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_EditFish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EditFish */ "./src/forum/components/EditFish.js");




var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.edit-fish-modal.';

var EditRoundModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditRoundModal, _Modal);

  function EditRoundModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = EditRoundModal.prototype;

  _proto.className = function className() {
    return 'Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title', {
      name: this.props.fish.name()
    });
  };

  _proto.content = function content() {
    var _this = this;

    return m('.Modal-body', [_components_EditFish__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      fish: this.props.fish,
      ondelete: function ondelete() {
        _this.hide();

        if (_this.props.oncreateordelete) {
          _this.props.oncreateordelete();
        }
      }
    })]);
  };

  return EditRoundModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/modals/EditRoundModal.js":
/*!********************************************!*\
  !*** ./src/forum/modals/EditRoundModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditRoundModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_EditRound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EditRound */ "./src/forum/components/EditRound.js");




var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.edit-round-modal.';

var EditRoundModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditRoundModal, _Modal);

  function EditRoundModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = EditRoundModal.prototype;

  _proto.className = function className() {
    return 'Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title', {
      name: this.props.round.name()
    });
  };

  _proto.content = function content() {
    var _this = this;

    return m('.Modal-body', [_components_EditRound__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      round: this.props.round,
      ondelete: function ondelete() {
        _this.hide();

        if (_this.props.oncreateordelete) {
          _this.props.oncreateordelete();
        }
      }
    })]);
  };

  return EditRoundModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/modals/NewFishModal.js":
/*!******************************************!*\
  !*** ./src/forum/modals/NewFishModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewFishModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_EditFish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EditFish */ "./src/forum/components/EditFish.js");




var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.new-fish-modal.';

var NewFishModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NewFishModal, _Modal);

  function NewFishModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = NewFishModal.prototype;

  _proto.className = function className() {
    return 'Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title');
  };

  _proto.content = function content() {
    var _this = this;

    return m('.Modal-body', [_components_EditFish__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      round: this.props.round,
      onsave: function onsave() {
        _this.hide();

        if (_this.props.oncreateordelete) {
          _this.props.oncreateordelete();
        }
      }
    })]);
  };

  return NewFishModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/modals/NewRoundModal.js":
/*!*******************************************!*\
  !*** ./src/forum/modals/NewRoundModal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewRoundModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_EditRound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EditRound */ "./src/forum/components/EditRound.js");




var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.new-round-modal.';

var NewRoundModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(NewRoundModal, _Modal);

  function NewRoundModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = NewRoundModal.prototype;

  _proto.className = function className() {
    return 'Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title');
  };

  _proto.content = function content() {
    var _this = this;

    return m('.Modal-body', [_components_EditRound__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      onsave: function onsave() {
        _this.hide();

        if (_this.props.oncreateordelete) {
          _this.props.oncreateordelete();
        }
      }
    })]);
  };

  return NewRoundModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/models/Fish.js":
/*!**********************************!*\
  !*** ./src/forum/models/Fish.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fish; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Fish =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Fish, _mixin);

  function Fish() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = Fish.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return '/catch-the-fish/' + (this.exists ? 'fishes/' + this.data.id : 'rounds/' + this.data.attributes.round_id + '/fishes');
  };

  return Fish;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  round_id: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('round_id'),
  // Just for the creation apiEndpoint creation
  placement: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('placement'),
  // Object
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('name'),
  image_url: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('image_url'),
  canCatch: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canCatch'),
  canName: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canName'),
  canPlace: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canPlace'),
  placeUntil: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('placeUntil')
}));



/***/ }),

/***/ "./src/forum/models/Round.js":
/*!***********************************!*\
  !*** ./src/forum/models/Round.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fish; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);




var Fish =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Fish, _mixin);

  function Fish() {
    return _mixin.apply(this, arguments) || this;
  }

  var _proto = Fish.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return '/catch-the-fish/rounds' + (this.exists ? '/' + this.data.id : '');
  };

  return Fish;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('name'),
  starts_at: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('starts_at'),
  ends_at: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('ends_at'),
  include_starting_pack: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('include_starting_pack')
}));



/***/ }),

/***/ "./src/forum/pages/RoundList.js":
/*!**************************************!*\
  !*** ./src/forum/pages/RoundList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoundList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modals_NewRoundModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/NewRoundModal */ "./src/forum/modals/NewRoundModal.js");
/* harmony import */ var _modals_EditRoundModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/EditRoundModal */ "./src/forum/modals/EditRoundModal.js");







/* global m */

var RoundList =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RoundList, _Page);

  function RoundList() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = RoundList.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    this.refreshRounds();
  };

  _proto.refreshRounds = function refreshRounds() {
    var _this = this;

    this.rounds = null;
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      method: 'GET',
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/catch-the-fish/rounds'
    }).then(function (result) {
      _this.rounds = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.pushPayload(result);
      m.redraw();
    });
  };

  _proto.view = function view() {
    var _this2 = this;

    if (this.rounds === null) {
      return m('.container', m('p', 'Loading...'));
    }

    return m('.container', [m('h2', 'Rounds'), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button Button--primary',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _modals_NewRoundModal__WEBPACK_IMPORTED_MODULE_5__["default"]({
          oncreateordelete: function oncreateordelete() {
            _this2.refreshRounds();
          }
        }));
      },
      children: 'New'
    }), m('table', [m('thead', m('tr', [m('th', 'Name'), m('th', 'From'), m('th', 'To'), m('th', 'Actions')])), m('tbody', this.rounds.map(function (round) {
      return m('tr', [m('td', round.name()), m('td', round.starts_at()), m('td', round.ends_at()), m('td', [flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        className: 'Button',
        onclick: function onclick() {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _modals_EditRoundModal__WEBPACK_IMPORTED_MODULE_6__["default"]({
            round: round,
            oncreateordelete: function oncreateordelete() {
              _this2.refreshRounds();
            }
          }));
        },
        children: 'Edit'
      }), ' ', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        className: 'Button',
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('catchTheFishRound', {
          id: round.id()
        }),
        children: 'Fishes'
      })])]);
    }))])]);
  };

  return RoundList;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/pages/RoundSettings.js":
/*!******************************************!*\
  !*** ./src/forum/pages/RoundSettings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoundSettings; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modals_NewFishModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/NewFishModal */ "./src/forum/modals/NewFishModal.js");
/* harmony import */ var _modals_EditFishModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/EditFishModal */ "./src/forum/modals/EditFishModal.js");
/* harmony import */ var _components_FishImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FishImage */ "./src/forum/components/FishImage.js");







/* global m */

var RoundSettings =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RoundSettings, _Page);

  function RoundSettings() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = RoundSettings.prototype;

  _proto.init = function init() {
    var _this = this;

    _Page.prototype.init.call(this);

    this.roundId = m.route.param('id');
    this.round = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.getById('catchthefish-round', this.roundId);

    if (!this.round) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('catch-the-fish/rounds', this.roundId).then(function (round) {
        _this.round = round;
        m.redraw();
      });
    }

    this.refreshFishes();
  };

  _proto.refreshFishes = function refreshFishes() {
    var _this2 = this;

    this.fishes = null;
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      method: 'GET',
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/catch-the-fish/rounds/' + this.roundId + '/fishes'
    }).then(function (result) {
      _this2.fishes = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.pushPayload(result);
      m.redraw();
    });
  };

  _proto.view = function view() {
    var _this3 = this;

    if (!this.round || this.fishes === null) {
      return m('.container', m('p', 'Loading...'));
    }

    return m('.container', [m('h2', 'Settings for round ' + this.round.name()), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button Button--primary',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _modals_NewFishModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
          round: _this3.round,
          oncreateordelete: function oncreateordelete() {
            _this3.refreshFishes();
          }
        }));
      },
      children: 'New'
    }), m('table', [m('thead', m('tr', [m('th', 'Image'), m('th', 'Name'), m('th', 'Actions')])), m('tbody', this.fishes.length === 0 ? m('tr', [m('td', 'No fishes')]) : this.fishes.map(function (fish) {
      return m('tr', [m('td', _components_FishImage__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        fish: fish
      })), m('td', fish.name()), m('td', [flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        className: 'Button',
        onclick: function onclick() {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _modals_EditFishModal__WEBPACK_IMPORTED_MODULE_5__["default"]({
            fish: fish,
            oncreateordelete: function oncreateordelete() {
              _this3.refreshFishes();
            }
          }));
        },
        children: 'Edit'
      })])]);
    }))])]);
  };

  return RoundSettings;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/HeaderPrimary":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/HeaderPrimary']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/HeaderPrimary'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/models/Discussion":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['models/Discussion']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Discussion'];

/***/ }),

/***/ "flarum/models/Forum":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['models/Forum']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Forum'];

/***/ }),

/***/ "flarum/models/Post":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/Post']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Post'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map