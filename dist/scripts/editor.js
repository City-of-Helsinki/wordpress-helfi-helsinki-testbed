(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/editor"],{

/***/ "./resources/assets/scripts/editor.js":
/*!********************************************!*\
  !*** ./resources/assets/scripts/editor.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_blocks_icon_and_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor/blocks/icon-and-text */ "./resources/assets/scripts/editor/blocks/icon-and-text/index.js");
/* harmony import */ var _editor_blocks_highlight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor/blocks/highlight */ "./resources/assets/scripts/editor/blocks/highlight/index.js");









/**
 * Forces image fill for Media & Text blocks with the hover style.
 */

var withForcedImageFill = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    if (props.name === 'core/media-text' && props.attributes.className && props.attributes.className.indexOf('is-style-hover') !== -1) {
      props.attributes.imageFill = true;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockListBlock, props);
  };
}, 'withForcedImageFill');
/**
 * Forces a default background color for Media & Text blocks with the hover
 * style.
 */

var withDefaultBackgroundColor = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    if (props.name === 'core/media-text' && props.attributes.className && props.attributes.className.indexOf('is-style-hover') !== -1 && !props.attributes.backgroundColor) {
      props.attributes.backgroundColor = 'c-kupari-kupari-light-20';
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockListBlock, props);
  };
}, 'withDefaultBackgroundColor');
/**
 * Sets outline as default style for buttons.
 */

var withDefaultButtonStyle = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    if (props.name === 'core/button' && (!props.attributes.className || props.attributes.className.indexOf('is-style') === -1)) {
      props.attributes.className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.attributes.classname, 'is-style-outline');
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockListBlock, props);
  };
}, 'withDefaultButtonStyle');
/**
 * Sets default color for buttons with outline style.
 */

var withDefaultColor = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    if (props.name === 'core/button' && props.attributes.className && props.attributes.className.indexOf('is-style-outline') !== -1 && !props.attributes.textColor) {
      props.attributes.textColor = 'dark-grey';
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockListBlock, props);
  };
}, 'withDefaultColor');
/**
 * Removes border radius from buttons.
 */

var withRemoveBorderRadius = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    if (props.name === 'core/button') {
      props.attributes.borderRadius = undefined;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockListBlock, props);
  };
}, 'withRemoveBorderRadius');
/**
 * Ensures that Group Block is set to full align if it has any koro style.
 */

var withAlignFullKoroStyles = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    if (props.name === 'core/group' && props.attributes.className && props.attributes.className.indexOf('is-style-koro') !== -1 && props.attributes.align !== 'full') {
      props.attributes.align = 'full';
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockListBlock, props);
  };
}, 'withAlignFullKoroStyles');
var excludeBlockTypes = ['core/archives', 'core/calendar', 'core/categories', 'core/latest-posts', 'core/navigation', 'core/nextpage', 'core/latest-comments', 'core/more', 'core/rss', 'core/search', 'core/social-links', 'core/table', 'core/tag-cloud', 'core-embed/amazon-kindle', 'core-embed/animoto', 'core-embed/cloudup', 'core-embed/collegehumor', 'core-embed/crowdsignal', 'core-embed/dailymotion', 'core-embed/facebook', 'core-embed/flickr', 'core-embed/hulu', 'core-embed/imgur', 'core-embed/instagram', 'core-embed/issuu', 'core-embed/kickstarter', 'core-embed/meetup-com', 'core-embed/mixcloud', 'core-embed/polldaddy', 'core-embed/reddit', 'core-embed/reverbnation', 'core-embed/screencast', 'core-embed/scribd', 'core-embed/slideshare', 'core-embed/smugmug', 'core-embed/soundcloud', 'core-embed/speaker', 'core-embed/speaker-deck', 'core-embed/spotify', 'core-embed/ted', 'core-embed/tiktok', 'core-embed/tumblr', 'core-embed/twitter', 'core-embed/videopress', 'core-embed/vimeo', 'core-embed/wordpress', 'core-embed/wordpress-tv', 'core-embed/youtube'];
wp.hooks.addFilter('blocks.registerBlockType', 'pw-examples/exclude-blocks', function (settings, name) {
  if (excludeBlockTypes.indexOf(name) !== -1) {
    return Object.assign({}, settings, {
      supports: Object.assign({}, settings.supports, {
        inserter: false
      })
    });
  }

  return settings;
});

function getBackgroundShapeBlockList(BlockListBlock) {
  return function (props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockListBlock, props);
  };
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockListBlock', 'hds/print-block-list', Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["createHigherOrderComponent"])(getBackgroundShapeBlockList));
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["unregisterBlockStyle"])('core/button', 'fill');
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/button', {
    name: 'outline',
    label: 'Outline',
    isDefault: true
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/media-text', {
    name: 'default',
    label: 'Default',
    isDefault: true
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/media-text', {
    name: 'hover',
    label: 'Hover'
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/media-text', {
    name: 'hover-full',
    label: 'Hover full width'
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/group', {
    name: 'default',
    label: 'Default'
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/group', {
    name: 'koro-top-basic',
    label: 'Basic koro top'
  });
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockStyle"])('core/group', {
    name: 'koro-top-pulse',
    label: 'Pulse koro top'
  });
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockListBlock', 'sage/with-forced-image-fill', withForcedImageFill);
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockListBlock', 'sage/with-default-background-color-fill', withDefaultBackgroundColor);
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockListBlock', 'sage/with-default-color', withDefaultColor);
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockListBlock', 'sage/with-remove-border-radius', withRemoveBorderRadius);
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockListBlock', 'sage/with-default-button-style', withDefaultButtonStyle);
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__["addFilter"])('editor.BlockListBlock', 'sage/with-alignfull-koro-styles', withAlignFullKoroStyles);
});

/***/ }),

/***/ "./resources/assets/scripts/editor/blocks/highlight/block.json":
/*!*********************************************************************!*\
  !*** ./resources/assets/scripts/editor/blocks/highlight/block.json ***!
  \*********************************************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hds/highlight\",\"category\":\"sage\",\"attributes\":{\"iconName\":{\"type\":\"string\"},\"heading\":{\"type\":\"string\"},\"body\":{\"type\":\"string\"},\"iconColor\":{\"type\":\"string\"},\"textColor\":{\"type\":\"string\"},\"backgroundColor\":{\"type\":\"string\"},\"linkText\":{\"type\":\"string\"},\"linkUrl\":{\"type\":\"string\"}}}");

/***/ }),

/***/ "./resources/assets/scripts/editor/blocks/highlight/edit.js":
/*!******************************************************************!*\
  !*** ./resources/assets/scripts/editor/blocks/highlight/edit.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






var DOMAIN = 'hds';
var CLASS_NAME = "wp-block-".concat(DOMAIN, "-highlight");
var ICONS = ['alert-circle', 'book', 'calendar-clock', 'car', 'car-wifi', 'check', 'clock', 'cogwheel', 'drone', 'ed-tech', 'envelope', 'globe', 'group', 'heart', 'home', 'home-solar-panels', 'kiertotalous', 'ship', 'speechbubble', 'tree'];

function BlockEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      iconColor = _ref.iconColor,
      setIconColor = _ref.setIconColor,
      textColor = _ref.textColor,
      setTextColor = _ref.setTextColor,
      backgroundColor = _ref.backgroundColor,
      setBackgroundColor = _ref.setBackgroundColor;
  var iconName = attributes.iconName,
      heading = attributes.heading,
      body = attributes.body,
      linkText = attributes.linkText,
      linkUrl = attributes.linkUrl;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(CLASS_NAME, backgroundColor["class"], !!backgroundColor["class"] && 'has-background-color')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(CLASS_NAME, "__columns")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(CLASS_NAME, "__column icon-column")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(CLASS_NAME, "__icon"), "has-".concat(iconName, "-icon"), iconColor["class"])
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(CLASS_NAME, "__column body-column")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enter heading', DOMAIN),
    tagName: "h2",
    className: "".concat(CLASS_NAME, "__heading ").concat(textColor["class"]),
    value: heading,
    onChange: function onChange(heading) {
      return setAttributes({
        heading: heading
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enter body text', DOMAIN),
    tagName: "div",
    className: "".concat(CLASS_NAME, "__body ").concat(textColor["class"]),
    value: body,
    onChange: function onChange(body) {
      return setAttributes({
        body: body
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(CLASS_NAME, "__column button-column")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["URLInput"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enter link url', DOMAIN),
    tagName: "div",
    className: "".concat(CLASS_NAME, "__link-url-input ").concat(textColor["class"]),
    value: linkUrl,
    type: "string",
    onChange: function onChange(linkUrl) {
      return setAttributes({
        linkUrl: linkUrl
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    "class": "wp-block-button is-style-outline ".concat(CLASS_NAME, "__button")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enter button text', DOMAIN),
    tagName: "div",
    className: "".concat(textColor["class"], " wp-block-button__link"),
    value: linkText,
    onChange: function onChange(linkText) {
      return setAttributes({
        linkText: linkText
      });
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["__experimentalPanelColorGradientSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color settings'),
    settings: [{
      colorValue: backgroundColor.color,
      onColorChange: setBackgroundColor,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background color')
    }, {
      colorValue: iconColor.color,
      onColorChange: setIconColor,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon color')
    }, {
      colorValue: textColor.color,
      onColorChange: setTextColor,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Text color')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon', DOMAIN),
    selected: iconName,
    onChange: function onChange(value) {
      return setAttributes({
        iconName: value
      });
    },
    options: ICONS.map(function (name) {
      return {
        label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("has-".concat(name, "-icon")),
          style: {
            display: 'inline-block',
            width: '30px',
            height: '30px',
            color: iconColor.color
          }
        }),
        value: name
      };
    })
  })))));
}

BlockEdit.displayName = 'HighlightBlockEdit';
BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    iconName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    linkText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    linkUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    iconColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    textColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }).isRequired,
  setAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["withColors"])('backgroundColor', {
  textColor: 'color'
}, {
  iconColor: 'color'
})(BlockEdit));

/***/ }),

/***/ "./resources/assets/scripts/editor/blocks/highlight/index.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/scripts/editor/blocks/highlight/index.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./resources/assets/scripts/editor/blocks/highlight/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./resources/assets/scripts/editor/blocks/highlight/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./resources/assets/scripts/editor/blocks/highlight/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./resources/assets/scripts/editor/blocks/highlight/block.json", 1);





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_4__["name"], {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlight', 'hds'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display a highlight', 'hds'),
  category: _block_json__WEBPACK_IMPORTED_MODULE_4__["category"],
  parent: null,
  supports: {
    align: ['wide', 'full'],
    alignWide: false,
    customClassName: true,
    html: false,
    inserter: true,
    multiple: true,
    reusable: false
  },
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_4__["attributes"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["save"]
});

/***/ }),

/***/ "./resources/assets/scripts/editor/blocks/highlight/save.js":
/*!******************************************************************!*\
  !*** ./resources/assets/scripts/editor/blocks/highlight/save.js ***!
  \******************************************************************/
/*! exports provided: save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var save = function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
};



/***/ }),

/***/ "./resources/assets/scripts/editor/blocks/icon-and-text/block.json":
/*!*************************************************************************!*\
  !*** ./resources/assets/scripts/editor/blocks/icon-and-text/block.json ***!
  \*************************************************************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"hds/icon-and-text\",\"category\":\"sage\",\"attributes\":{\"iconName\":{\"type\":\"string\"},\"heading\":{\"type\":\"string\"},\"body\":{\"type\":\"string\"},\"iconColor\":{\"type\":\"string\"},\"textColor\":{\"type\":\"string\"},\"backgroundColor\":{\"type\":\"string\"}}}");

/***/ }),

/***/ "./resources/assets/scripts/editor/blocks/icon-and-text/edit.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/scripts/editor/blocks/icon-and-text/edit.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






var DOMAIN = 'hds';
var CLASS_NAME = "wp-block-".concat(DOMAIN, "-icon-and-text");
var ICONS = ['alert-circle', 'book', 'calendar-clock', 'car', 'car-wifi', 'check', 'clock', 'cogwheel', 'drone', 'ed-tech', 'envelope', 'globe', 'group', 'heart', 'home', 'home-solar-panels', 'kiertotalous', 'ship', 'speechbubble', 'tree'];

function BlockEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      iconColor = _ref.iconColor,
      setIconColor = _ref.setIconColor,
      textColor = _ref.textColor,
      setTextColor = _ref.setTextColor,
      backgroundColor = _ref.backgroundColor,
      setBackgroundColor = _ref.setBackgroundColor;
  var iconName = attributes.iconName,
      heading = attributes.heading,
      body = attributes.body;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(CLASS_NAME, backgroundColor["class"], !!backgroundColor["class"] && 'has-background-color')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(CLASS_NAME, "__icon"), "has-".concat(iconName, "-icon"), iconColor["class"])
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enter heading', DOMAIN),
    tagName: "div",
    className: "".concat(CLASS_NAME, "__heading ").concat(textColor["class"]),
    value: heading,
    onChange: function onChange(heading) {
      return setAttributes({
        heading: heading
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enter body text', DOMAIN),
    tagName: "div",
    className: "".concat(CLASS_NAME, "__body ").concat(textColor["class"]),
    value: body,
    onChange: function onChange(body) {
      return setAttributes({
        body: body
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["__experimentalPanelColorGradientSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Text Color'),
    settings: [{
      colorValue: backgroundColor.color,
      onColorChange: setBackgroundColor,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background color')
    }, {
      colorValue: iconColor.color,
      onColorChange: setIconColor,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon color')
    }, {
      colorValue: textColor.color,
      onColorChange: setTextColor,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Text color')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RadioControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon', DOMAIN),
    selected: iconName,
    onChange: function onChange(value) {
      return setAttributes({
        iconName: value
      });
    },
    options: ICONS.map(function (name) {
      return {
        label: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("has-".concat(name, "-icon")),
          style: {
            display: 'inline-block',
            width: '30px',
            height: '30px',
            color: iconColor.color
          }
        }),
        value: name
      };
    })
  })))));
}

BlockEdit.displayName = 'IconAndTextBlockEdit';
BlockEdit.propTypes = {
  attributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    iconName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    iconColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    textColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }).isRequired,
  setAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["withColors"])('backgroundColor', {
  textColor: 'color'
}, {
  iconColor: 'color'
})(BlockEdit));

/***/ }),

/***/ "./resources/assets/scripts/editor/blocks/icon-and-text/index.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/scripts/editor/blocks/icon-and-text/index.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./resources/assets/scripts/editor/blocks/icon-and-text/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./resources/assets/scripts/editor/blocks/icon-and-text/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./resources/assets/scripts/editor/blocks/icon-and-text/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./resources/assets/scripts/editor/blocks/icon-and-text/block.json", 1);





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_4__["name"], {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon & Text', 'hds'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display an icon and text', 'hds'),
  category: _block_json__WEBPACK_IMPORTED_MODULE_4__["category"],
  parent: null,
  supports: {
    align: false,
    alignWide: false,
    customClassName: true,
    html: false,
    inserter: true,
    multiple: true,
    reusable: false
  },
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_4__["attributes"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["save"]
});

/***/ }),

/***/ "./resources/assets/scripts/editor/blocks/icon-and-text/save.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/scripts/editor/blocks/icon-and-text/save.js ***!
  \**********************************************************************/
/*! exports provided: save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



var save = function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
};



/***/ }),

/***/ 2:
/*!**************************************************!*\
  !*** multi ./resources/assets/scripts/editor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/repositories-scm/genero-helsinki-testbed/web/app/themes/helsinki-testbed/resources/assets/scripts/editor.js */"./resources/assets/scripts/editor.js");


/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/dom-ready":
/*!*******************************************!*\
  !*** external {"this":["wp","domReady"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["domReady"]; }());

/***/ }),

/***/ "@wordpress/edit-post":
/*!*******************************************!*\
  !*** external {"this":["wp","editPost"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

},[[2,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=editor.js.map