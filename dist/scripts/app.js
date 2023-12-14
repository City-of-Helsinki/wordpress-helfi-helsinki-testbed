(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/app"],{

/***/ "./resources/assets/scripts/app.js":
/*!*****************************************!*\
  !*** ./resources/assets/scripts/app.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dropdown */ "./resources/assets/scripts/components/dropdown.js");
/* harmony import */ var _components_toggler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toggler */ "./resources/assets/scripts/components/toggler.js");




if (matchMedia('(min-width: 1024px)').matches) {
  if (document.querySelector('.site-navigation')) {
    Object(_components_dropdown__WEBPACK_IMPORTED_MODULE_1__["menu"])(document.querySelector('.site-navigation'));
  }

  Object(_components_dropdown__WEBPACK_IMPORTED_MODULE_1__["button"])(document.querySelector('.site-languages__button'));
} else {
  Object(_components_toggler__WEBPACK_IMPORTED_MODULE_2__["toggler"])(document.querySelector('.site-hamburger-button'));
  var submenuTriggers = document.querySelectorAll('.site-navigation__submenu-trigger');

  for (var i = 0; i < submenuTriggers.length; i++) {
    var trigger = submenuTriggers[i];
    trigger.addEventListener('click', function (e) {
      var item = e.target.closest('[aria-haspopup]');
      Object(_components_toggler__WEBPACK_IMPORTED_MODULE_2__["toggle"])(item);
      e.preventDefault();
    });
  }
}

var appHeight = function appHeight() {
  var doc = document.documentElement;
  doc.style.setProperty('--app-height', "".concat(window.innerHeight, "px"));
};

window.addEventListener('resize', Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(appHeight, 150));
appHeight();

/***/ }),

/***/ "./resources/assets/scripts/components/dropdown.js":
/*!*********************************************************!*\
  !*** ./resources/assets/scripts/components/dropdown.js ***!
  \*********************************************************/
/*! exports provided: button, menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
var KEY_UP = 38;
var KEY_DOWN = 40;
var KEY_LEFT = 37;
var KEY_RIGHT = 39;

function open(el) {
  el.setAttribute('aria-expanded', true);
}

function close(el) {
  el.setAttribute('aria-expanded', false);
}

function keydownListener(e) {
  var currentLink = e.target; // The element that would trigger a submenu

  var currentItem = currentLink.matches('[aria-haspopup]') ? currentLink : currentLink.closest('[aria-haspopup');
  var isInSubmenu = !!currentLink.closest('[role="menu"]');
  var nextItem = currentLink.parentElement.nextElementSibling;
  var prevItem = currentLink.parentElement.previousElementSibling;
  var nextLink = nextItem ? nextItem.querySelector('a') : null;
  var prevLink = prevItem ? prevItem.querySelector('a') : null; // Either current submenu or inner submenu

  var submenu = isInSubmenu ? currentLink.closest('[role="menu"]') : currentLink.parentElement.querySelector('[role="menu"]'); // The closest tabbable element which is a parent

  var parentLink = isInSubmenu ? submenu.parentElement.querySelector('a, button') : null; // The closest parent element that triggers a submenu

  var parentItem = parentLink ? parentLink.matches('[aria-haspopup') ? parentLink : parentLink.closest('[aria-haspopup') : null;

  switch (e.keyCode) {
    case KEY_DOWN:
      // If it's in a submenu, go to next. If not, open submenu
      if (isInSubmenu) {
        if (nextLink) {
          nextLink.focus();
          e.preventDefault();
        }
      } else if (submenu) {
        open(currentItem);
        submenu.querySelector('[role="menuitem"]').focus();
        e.preventDefault();
      }

      break;

    case KEY_UP:
      // If it's in a submenu, go to previous until there's more then exit
      if (isInSubmenu) {
        if (prevLink) {
          prevLink.focus();
        } else if (parentLink) {
          parentLink.focus();
          close(parentItem);
        }

        e.preventDefault();
      }

      break;

    case KEY_LEFT:
      // If it's in a submenu exit, otherwise previous link
      if (isInSubmenu) {
        parentLink.focus();
        close(currentItem);
        e.preventDefault();
      } else if (prevLink) {
        prevLink.focus();
        e.preventDefault();
      }

      break;

    case KEY_RIGHT:
      // Next link
      if (nextLink) {
        nextLink.focus();
        e.preventDefault();
      }

      break;
  }
}

function button(button) {
  var parent = button.parentNode;
  parent.addEventListener('mouseout', function () {
    return requestAnimationFrame(function () {
      return close(button);
    });
  }); // On mouseover close all other submenus

  parent.addEventListener('mouseover', function () {
    return requestAnimationFrame(function () {
      open(button);
    });
  });
  parent.addEventListener('keydown', keydownListener);
}
function menu(menu) {
  var triggers = menu.querySelectorAll('[aria-haspopup="true"]');

  var _loop = function _loop(i) {
    var trigger = triggers[i];
    trigger.addEventListener('mouseout', function () {
      return requestAnimationFrame(function () {
        return close(trigger);
      });
    }); // On mouseover close all other submenus

    trigger.addEventListener('mouseover', function () {
      return requestAnimationFrame(function () {
        Array.from(triggers).slice(i, 1).forEach(close);
        open(trigger);
      });
    });
  };

  for (var i = 0; i < triggers.length; i++) {
    _loop(i);
  }

  menu.addEventListener('keydown', keydownListener);
}

/***/ }),

/***/ "./resources/assets/scripts/components/toggler.js":
/*!********************************************************!*\
  !*** ./resources/assets/scripts/components/toggler.js ***!
  \********************************************************/
/*! exports provided: open, close, toggle, toggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "open", function() { return open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggler", function() { return toggler; });
function open(el) {
  el.setAttribute('aria-expanded', true);
}
function close(el) {
  el.setAttribute('aria-expanded', false);
}
function toggle(el) {
  var isExpanded = el.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    close(el);
  } else {
    open(el);
  }
}
function toggler(el) {
  el.addEventListener('click', function () {
    return requestAnimationFrame(function () {
      var isExpanded = el.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        close(el);
      } else {
        open(el);
      }

      var controls = el.getAttribute('aria-controls');

      if (controls) {
        controls.split(' ').forEach(function (selector) {
          var el = document.getElementById(selector);

          if (isExpanded) {
            el.classList.remove('is-active');
          } else {
            el.classList.add('is-active');
          }
        });
      }
    });
  });
}

/***/ }),

/***/ "./resources/assets/styles/admin.scss":
/*!********************************************!*\
  !*** ./resources/assets/styles/admin.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/styles/app.scss":
/*!******************************************!*\
  !*** ./resources/assets/styles/app.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/styles/editor.scss":
/*!*********************************************!*\
  !*** ./resources/assets/styles/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/scripts/app.js ./resources/assets/styles/app.scss ./resources/assets/styles/admin.scss ./resources/assets/styles/editor.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/d/repositories-scm/genero-helsinki-testbed/web/app/themes/helsinki-testbed/resources/assets/scripts/app.js */"./resources/assets/scripts/app.js");
__webpack_require__(/*! /mnt/d/repositories-scm/genero-helsinki-testbed/web/app/themes/helsinki-testbed/resources/assets/styles/app.scss */"./resources/assets/styles/app.scss");
__webpack_require__(/*! /mnt/d/repositories-scm/genero-helsinki-testbed/web/app/themes/helsinki-testbed/resources/assets/styles/admin.scss */"./resources/assets/styles/admin.scss");
module.exports = __webpack_require__(/*! /mnt/d/repositories-scm/genero-helsinki-testbed/web/app/themes/helsinki-testbed/resources/assets/styles/editor.scss */"./resources/assets/styles/editor.scss");


/***/ })

},[[0,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=app.js.map