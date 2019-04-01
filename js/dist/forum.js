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
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/UserCard */ "flarum/components/UserCard");
/* harmony import */ var flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/DiscussionHero */ "flarum/components/DiscussionHero");
/* harmony import */ var flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DropArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/DropArea */ "./src/forum/components/DropArea.js");
/* harmony import */ var _components_MovingFish__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/MovingFish */ "./src/forum/components/MovingFish.js");








function fishIdFromEvent(event) {
  var data = event.dataTransfer.getData("text/plain");
  var match = /^fish:([0-9]+)$/.exec(data);
  return match ? match[1] : null;
}

function movingFishContent(dragover, model) {
  var content = [];

  if (dragover) {
    content.push(_components_DropArea__WEBPACK_IMPORTED_MODULE_5__["default"].component());
  }

  var fishes = model.catchTheFishFishes();

  if (fishes) {
    fishes.forEach(function (fish) {
      if (!fish.canSee()) {
        return;
      } // Remove fish from relationship


      content.push(_components_MovingFish__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        fish: fish,
        oncatch: function oncatch() {
          model.pushData({
            relationships: {
              catchTheFishFishes: {
                data: model.data.relationships.catchTheFishFishes.data.filter(function (f) {
                  return f.id !== fish.id();
                })
              }
            }
          });
        }
      }));
    });
  }

  return content;
}

function addDropAttrs(attrs, modelProperty) {
  var _this = this;

  attrs.ondrop = function (event) {
    _this.fishDragOver = false;
    var fishId = fishIdFromEvent(event);

    if (fishId) {
      event.preventDefault();
      var fish = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.getById('catchthefish-fishes', fishId);

      if (fish) {
        var placement = {};
        placement[modelProperty + '_id'] = _this.props[modelProperty].id();
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          method: 'POST',
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/catch-the-fish/fishes/' + fish.id() + '/place',
          data: {
            placement: placement
          }
        }).then(function (result) {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.pushPayload(result); // Refresh basket by reloading user

          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('users', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()).then(function () {
            m.redraw();
          });
        });
      } else {
        alert(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('clarkwinkelmann-catch-the-fish.forum.drop-area.missing-from-store'));
      }
    }
  };

  attrs.ondragover = function (event) {
    var fishId = fishIdFromEvent(event);

    if (fishId) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      _this.fishDragOver = true;
    }
  };

  attrs.ondragenter = function (event) {
    event.preventDefault();
  };

  attrs.ondragleave = function () {
    _this.fishDragOver = false;
  };
}

function addAreaToComponent(component, viewName, modelProperty) {
  if (viewName === 'content') {
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(component, viewName, function (content) {
      return content().concat(movingFishContent(this.fishDragOver, this.props[modelProperty]));
    });
  } else {
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(component, viewName, function (items) {
      items.add('catchthefish-fish-and-drop', movingFishContent(this.fishDragOver, this.props[modelProperty]));
    });
  }

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(component, 'init', function () {
    var _this2 = this;

    this.fishDragOver = false; // Add a condition to the post tree retainer

    if (this.subtree) {
      this.subtree.check(function () {
        return _this2.fishDragOver;
      });
    }
  });

  if (viewName === 'content') {
    // CommentPost has an attrs() method we can extend
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(component, 'attrs', function (attrs) {
      addDropAttrs.bind(this)(attrs, modelProperty);
    });
  } else {
    // For other elements we manually add attrs to the vdom of the view
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(component, 'view', function (vdom) {
      vdom.attrs = vdom.attrs || {};
      addDropAttrs.bind(this)(vdom.attrs, modelProperty);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  addAreaToComponent(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'content', 'post');
  addAreaToComponent(flarum_components_UserCard__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'infoItems', 'user');
  addAreaToComponent(flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'items', 'discussion');
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
/* harmony import */ var _models_Ranking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/Ranking */ "./src/forum/models/Ranking.js");
/* harmony import */ var _models_Round__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/Round */ "./src/forum/models/Round.js");









/* harmony default export */ __webpack_exports__["default"] = (function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models['catchthefish-fishes'] = _models_Fish__WEBPACK_IMPORTED_MODULE_6__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models['catchthefish-rankings'] = _models_Ranking__WEBPACK_IMPORTED_MODULE_7__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.store.models['catchthefish-rounds'] = _models_Round__WEBPACK_IMPORTED_MODULE_8__["default"];
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.catchTheFishFishes = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('catchTheFishFishes');
  flarum_models_Post__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.catchTheFishFishes = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('catchTheFishFishes');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.catchTheFishFishes = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('catchTheFishFishes');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.catchTheFishBasket = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('catchTheFishBasket');
  flarum_models_Forum__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.catchTheFishActiveRounds = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('catchTheFishActiveRounds');
  flarum_models_Forum__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.catchTheFishCanModerate = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('catchTheFishCanModerate');
  flarum_models_Forum__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.catchTheFishCanSeeRankingsPage = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('catchTheFishCanSeeRankingsPage');
  flarum_models_Forum__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.catchTheFishCanSeeProfileRankings = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('catchTheFishCanSeeProfileRankings');
  flarum_models_Forum__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.catchTheFishAnimateFlip = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('catchTheFishAnimateFlip');
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
    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.catchTheFishCanSeeRankingsPage()) {
      items.add('catchthefish-rankings', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        icon: 'fas fa-fish',
        children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'rankings'),
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('catchTheFishRankings')
      }));
    }

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
/* harmony import */ var _pages_Rankings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Rankings */ "./src/forum/pages/Rankings.js");
/* harmony import */ var _pages_RoundList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/RoundList */ "./src/forum/pages/RoundList.js");
/* harmony import */ var _pages_RoundSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/RoundSettings */ "./src/forum/pages/RoundSettings.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.catchTheFishRankings = {
    path: '/catch-the-fish',
    component: _pages_Rankings__WEBPACK_IMPORTED_MODULE_1__["default"].component()
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.catchTheFishRounds = {
    path: '/catch-the-fish/rounds',
    component: _pages_RoundList__WEBPACK_IMPORTED_MODULE_2__["default"].component()
  };
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.catchTheFishRound = {
    path: '/catch-the-fish/rounds/:id',
    component: _pages_RoundSettings__WEBPACK_IMPORTED_MODULE_3__["default"].component()
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

    if (!basket) {
      return m('div');
    }

    var fishesThatCanBePlaced = basket.filter(function (fish) {
      return fish.canPlace();
    });

    if (fishesThatCanBePlaced.length === 0) {
      return m('div');
    }

    return m('.catchthefish-basket', [m('.catchthefish-basket-title', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title')), m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'drag-help')), fishesThatCanBePlaced.map(function (fish) {
      return m('.catchthefish-basket-entry', [m('.catchthefish-basket-fish', {
        draggable: true,
        ondragstart: function ondragstart(event) {
          event.dataTransfer.setData('text/plain', 'fish:' + fish.id());
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
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);



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
    return m('.catchthefish-drop-area', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('clarkwinkelmann-catch-the-fish.forum.drop-area.message'));
  };

  return DropArea;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



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
    var _this = this;

    return m('form', {
      onsubmit: function onsubmit(event) {
        event.preventDefault();

        _this.saveRecord();
      }
    }, [m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name')), m('input.FormControl', {
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
    var _this2 = this;

    this.processing = true;
    this.fish.save(this.fish.data.attributes).then(function () {
      if (_this2.props.onsave) {
        _this2.props.onsave();
      }

      _this2.processing = false;
      _this2.dirty = false;
      m.redraw();
    }).catch(function (err) {
      _this2.processing = false;
      m.redraw();
      throw err;
    });
  };

  _proto.deleteRecord = function deleteRecord() {
    var _this3 = this;

    if (!confirm(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'delete-confirmation', {
      name: this.fish.name()
    }).join(''))) {
      return;
    }

    this.processing = true;
    this.fish.delete().then(function () {
      if (_this3.props.ondelete) {
        _this3.props.ondelete();
      }

      _this3.processing = false;
      m.redraw();
    }).catch(function (err) {
      _this3.processing = false;
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
    var _this = this;

    return m('form', {
      onsubmit: function onsubmit(event) {
        event.preventDefault();

        _this.saveRecord();
      }
    }, [m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name')), m('input.FormControl', {
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
    var _this2 = this;

    this.processing = true;
    this.round.save(this.round.data.attributes).then(function () {
      if (_this2.props.onsave) {
        _this2.props.onsave();
      }

      _this2.processing = false;
      _this2.dirty = false;
      m.redraw();
    }).catch(function (err) {
      _this2.processing = false;
      m.redraw();
      throw err;
    });
  };

  _proto.deleteRecord = function deleteRecord() {
    var _this3 = this;

    if (!confirm(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'delete-confirmation', {
      name: this.round.name()
    }).join(''))) {
      return;
    }

    this.processing = true;
    this.round.delete().then(function () {
      if (_this3.props.ondelete) {
        _this3.props.ondelete();
      }

      _this3.processing = false;
      m.redraw();
    }).catch(function (err) {
      _this3.processing = false;
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
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_2__);



/* global m */

var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.fish-image.';

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
        alt: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'alt', {
          name: this.props.fish.name()
        }).join(''),
        src: src,
        style: {
          animationDuration: this.props.animationDuration || '10s'
        }
      });
    }

    return m('.catchthefish-no-image', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'missing'));
  };

  return FishImage;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



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
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/classList */ "flarum/utils/classList");
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_classList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FishImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FishImage */ "./src/forum/components/FishImage.js");
/* harmony import */ var _modals_CaughtFishModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/CaughtFishModal */ "./src/forum/modals/CaughtFishModal.js");






/* global m */

var MovingFish =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MovingFish, _Component);

  function MovingFish() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MovingFish.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    this.reverseAnimation = Math.random() > 0.5;
    this.animationDuration = 5 + Math.floor(Math.random() * 70) / 10 + 's';
  };

  _proto.view = function view() {
    var _this = this;

    var fish = this.props.fish;
    return m('.catchthefish-moving-fish', {
      className: flarum_utils_classList__WEBPACK_IMPORTED_MODULE_2___default()({
        'catchthefish-animate-flip': flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.catchTheFishAnimateFlip(),
        'catchthefish-animate-reverse': this.reverseAnimation
      }),
      style: {
        animationDuration: this.animationDuration
      },
      onclick: function onclick() {
        if (!fish.canCatch() && !flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
          alert(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('clarkwinkelmann-catch-the-fish.forum.moving-fish.login'));
          return;
        }

        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          method: 'POST',
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/catch-the-fish/fishes/' + fish.id() + '/catch',
          data: fish.placement()
        }).then(function (result) {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _modals_CaughtFishModal__WEBPACK_IMPORTED_MODULE_5__["default"]({
            fish: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.pushPayload(result)
          })); // So the parent can remove the fish from the relationship

          if (_this.props.oncatch) {
            _this.props.oncatch();
          }
        });
      }
    }, [m('.catchthefish-name', fish.name()), _FishImage__WEBPACK_IMPORTED_MODULE_4__["default"].component({
      fish: fish,
      animationDuration: this.animationDuration
    })]);
  };

  return MovingFish;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_3___default.a);



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
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);





/* global m, moment */

var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.round-alert.';

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
      children: [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'message', {
        name: this.props.round.name(),
        time: moment(this.props.round.ends_at()).calendar()
      }), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.catchTheFishCanSeeRankingsPage() ? [' ', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        className: 'Button',
        children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'rankings'),
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('catchTheFishRankings')
      })] : null],
      dismissible: false
    });
  };

  return UpdateAlert;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/RoundRankings.js":
/*!***********************************************!*\
  !*** ./src/forum/components/RoundRankings.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoundRankings; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./src/forum/components/User.js");




/* global m */

var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.table-ranking.';

var RoundRankings =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RoundRankings, _Page);

  function RoundRankings() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = RoundRankings.prototype;

  _proto.init = function init() {
    var _this = this;

    _Page.prototype.init.call(this);

    this.rankings = null;
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      method: 'GET',
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/catch-the-fish/rounds/' + this.props.round.id() + '/rankings'
    }).then(function (result) {
      _this.rankings = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.pushPayload(result);
      m.redraw();
    });
  };

  _proto.view = function view() {
    if (this.rankings === null) {
      return m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'loading'));
    }

    return m('div', [m('h2', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title', {
      name: this.props.round.name()
    })), m('table.catchthefish-table', [m('thead', m('tr', [m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'rank')), m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'count')), m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'user'))])), m('tbody', this.rankings.map(function (ranking, index) {
      return m('tr', [m('td', '#' + (index + 1)), m('td', ranking.catch_count()), m('td', _User__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        user: ranking.user()
      }))]);
    }))])]);
  };

  return RoundRankings;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/components/User.js":
/*!**************************************!*\
  !*** ./src/forum/components/User.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropArea; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_4__);





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
    var user = this.props.user;
    return m('a', {
      href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(user),
      config: m.route
    }, [flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(user), ' ', flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(user)]);
  };

  return DropArea;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_4___default.a);



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
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/User */ "./src/forum/components/User.js");






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
    return 'Modal--small catchthefish-catch-modal';
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

        if (_this.props.fish.canPlace() && !randomPlacement) {
          // Refresh basket by reloading user
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('users', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()).then(function () {
            m.redraw();
          });
        }
      }).catch(function (err) {
        _this.loading = false;
        m.redraw();
        throw err;
      });
    } else {
      this.hide();

      if (this.props.fish.canPlace() && !randomPlacement) {
        // Refresh basket by reloading user
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('users', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.id()).then(function () {
          m.redraw();
        });
      }
    }
  };

  _proto.content = function content() {
    var _this2 = this;

    var fish = this.props.fish;
    var namedBy = fish.namedBy();
    var placedBy = fish.placedBy();
    return m('.Modal-body', [m('h3', '"' + fish.name() + '"'), _components_FishImage__WEBPACK_IMPORTED_MODULE_4__["default"].component({
      fish: fish
    }), namedBy ? m('p', [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'named-by'), ' ', _components_User__WEBPACK_IMPORTED_MODULE_5__["default"].component({
      user: namedBy
    })]) : null, placedBy ? m('p', [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'placed-by'), ' ', _components_User__WEBPACK_IMPORTED_MODULE_5__["default"].component({
      user: placedBy
    })]) : null, m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'congratulation', {
      catch_count: fish.round().ranking().catch_count()
    })), fish.canName() ? m('.Form-group', [m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name-help')), m('label', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name')), m('input.FormControl', {
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

  _proto.onsubmit = function onsubmit() {
    // Because the modal has its own form, pressing enter will submit here
    // In this case we apply the same feature as the first button
    this.saveNameAndPlacement();
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
  canSee: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canSee'),
  canCatch: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canCatch'),
  canName: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canName'),
  canPlace: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canPlace'),
  placeUntil: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('placeUntil'),
  namedBy: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('lastUserNaming'),
  placedBy: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('lastUserPlacement'),
  round: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('round')
}));



/***/ }),

/***/ "./src/forum/models/Ranking.js":
/*!*************************************!*\
  !*** ./src/forum/models/Ranking.js ***!
  \*************************************/
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

  return Fish;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  catch_count: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('catch_count'),
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('user')
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
  include_starting_pack: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('include_starting_pack'),
  ranking: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('ranking')
}));



/***/ }),

/***/ "./src/forum/pages/Rankings.js":
/*!*************************************!*\
  !*** ./src/forum/pages/Rankings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rankings; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_RoundRankings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RoundRankings */ "./src/forum/components/RoundRankings.js");




/* global m */

var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.page-ranking.';

var Rankings =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Rankings, _Page);

  function Rankings() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = Rankings.prototype;

  _proto.view = function view() {
    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.catchTheFishCanSeeRankingsPage()) {
      return m('.container', m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'permission')));
    }

    var rounds = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.catchTheFishActiveRounds();
    return m('.container', [m('h2', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title')), rounds ? rounds.map(function (round) {
      return _components_RoundRankings__WEBPACK_IMPORTED_MODULE_3__["default"].component({
        round: round
      });
    }) : m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'nothing'))]);
  };

  return Rankings;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



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

var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.table-round.';

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
      return m('.container', m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'loading')));
    }

    return m('.container', [m('h2', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title')), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button Button--primary',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _modals_NewRoundModal__WEBPACK_IMPORTED_MODULE_5__["default"]({
          oncreateordelete: function oncreateordelete() {
            _this2.refreshRounds();
          }
        }));
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'new')
    }), m('table.catchthefish-table', [m('thead', m('tr', [m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name')), m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'start')), m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'end')), m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'actions'))])), m('tbody', this.rounds.map(function (round) {
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
        children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'edit')
      }), ' ', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default.a.component({
        className: 'Button',
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('catchTheFishRound', {
          id: round.id()
        }),
        children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'fishes')
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
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/User */ "./src/forum/components/User.js");








/* global m */

var translationPrefix = 'clarkwinkelmann-catch-the-fish.forum.table-fish.';

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
      return m('.container', m('p', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'loading')));
    }

    return m('.container', [m('h2', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'title', {
      name: this.round.name()
    })), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button Button--primary',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _modals_NewFishModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
          round: _this3.round,
          oncreateordelete: function oncreateordelete() {
            _this3.refreshFishes();
          }
        }));
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'new')
    }), m('table.catchthefish-table', [m('thead', m('tr', [m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'image')), m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'name')), m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'user-name')), m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'user-place')), m('th', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'actions'))])), m('tbody', this.fishes.length === 0 ? m('tr', [m('td', 'No fishes')]) : this.fishes.map(function (fish) {
      return m('tr', [m('td', _components_FishImage__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        fish: fish
      })), m('td', fish.name()), m('td', fish.namedBy() ? _components_User__WEBPACK_IMPORTED_MODULE_7__["default"].component({
        user: fish.namedBy()
      }) : m('em', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'no-user-name'))), m('td', fish.placedBy() ? _components_User__WEBPACK_IMPORTED_MODULE_7__["default"].component({
        user: fish.placedBy()
      }) : m('em', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'no-user-place'))), m('td', [flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        className: 'Button',
        onclick: function onclick() {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _modals_EditFishModal__WEBPACK_IMPORTED_MODULE_5__["default"]({
            fish: fish,
            oncreateordelete: function oncreateordelete() {
              _this3.refreshFishes();
            }
          }));
        },
        children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'edit')
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

/***/ "flarum/components/DiscussionHero":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionHero']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionHero'];

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

/***/ "flarum/components/UserCard":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/UserCard']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/UserCard'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

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

/***/ "flarum/utils/classList":
/*!********************************************************!*\
  !*** external "flarum.core.compat['utils/classList']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/classList'];

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