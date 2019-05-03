(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./node_modules/@ionic-super-tabs/core/dist/esm/es5/build/cak2ig5k.entry.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm/es5/build/cak2ig5k.entry.js ***!
  \**********************************************************************************/
/*! exports provided: SuperTab, SuperTabs, SuperTabsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperTab", function() { return SuperTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperTabs", function() { return SuperTabsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperTabsContainer", function() { return SuperTabsContainerComponent; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic-super-tabs/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _supertabs_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supertabs.core.js */ "./node_modules/@ionic-super-tabs/core/dist/esm/es5/supertabs.core.js");
/* harmony import */ var _chunk_39d8d03b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-39d8d03b.js */ "./node_modules/@ionic-super-tabs/core/dist/esm/es5/build/chunk-39d8d03b.js");
var SuperTabComponent=function(){function e(){}return e.prototype.getRootScrollableEl=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){return this.el.scrollHeight>this.el.clientHeight?[2,this.el]:(e=this.el.querySelector("ion-content"))?[2,e.getScrollElement()]:[2,null]})})},e.prototype.render=function(){return Object(_supertabs_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",null)},Object.defineProperty(e,"is",{get:function(){return"super-tab"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},getRootScrollableEl:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{height:100%;position:relative;display:block;overflow:hidden;z-index:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-positive:0;flex-grow:0;width:var(--super-tab-width,100vw);-webkit-transform:translateZ(0);transform:translateZ(0)}ion-nav{height:100%;max-height:100%}ion-nav,ion-nav>.ion-page{position:absolute}"},enumerable:!0,configurable:!0}),e}(),SuperTabsComponent=function(){function e(){this.activeTabIndex=0,this._config=_chunk_39d8d03b_js__WEBPACK_IMPORTED_MODULE_2__["a"]}return e.prototype.setConfig=function(e){this._config=Object.assign({},_chunk_39d8d03b_js__WEBPACK_IMPORTED_MODULE_2__["a"],e),this.container&&(this.container.config=this._config),this.toolbar&&(this.toolbar.config=this._config)},e.prototype.selectTab=function(e,t){void 0===t&&(t=!0),this.container&&this.container.moveContainerByIndex(e,t),this.toolbar&&this.toolbar.setActiveTab(e)},e.prototype.onConfigChange=function(e){this.setConfig(e)},e.prototype.onContainerSelectedTabChange=function(e){this.toolbar&&this.toolbar.setSelectedTab(e.detail)},e.prototype.onContainerActiveTabChange=function(e){var t=e.detail;this.tabChange.emit({changed:t!==this.activeTabIndex,index:t}),this.activeTabIndex=t,this.toolbar&&this.toolbar.setActiveTab(t)},e.prototype.onToolbarButtonClick=function(e){var t=e.detail.index;this.container&&this.container.setActiveTabIndex(t),this.tabChange.emit({changed:t!==this.activeTabIndex,index:t}),this.activeTabIndex=t},e.prototype.indexChildren=function(){var e=this.el.querySelector("super-tabs-container"),t=this.el.querySelector("super-tabs-toolbar");e&&this.container!==e&&(this.container=e,e.config=this._config),t&&this.toolbar!==t&&(this.toolbar=t,t.config=this._config)},e.prototype.componentDidUpdate=function(){this.indexChildren(),this.selectTab(this.activeTabIndex)},e.prototype.componentWillLoad=function(){this.indexChildren(),this.selectTab(this.activeTabIndex),this.el.addEventListener("selectedTabIndexChange",this.onContainerSelectedTabChange.bind(this)),this.el.addEventListener("activeTabIndexChange",this.onContainerActiveTabChange.bind(this)),this.el.addEventListener("buttonClick",this.onToolbarButtonClick.bind(this))},e.prototype.render=function(){return[Object(_supertabs_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"top"}),Object(_supertabs_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",null),Object(_supertabs_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",{name:"bottom"})]},Object.defineProperty(e,"is",{get:function(){return"super-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activeTabIndex:{type:Number,attr:"active-tab-index",reflectToAttr:!0,mutable:!0},config:{type:"Any",attr:"config",watchCallbacks:["onConfigChange"]},el:{elementRef:!0},selectTab:{method:!0},setConfig:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"tabChange",method:"tabChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:content-box;box-sizing:content-box;height:100%;max-height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;z-index:1;position:relative;contain:layout size style}"},enumerable:!0,configurable:!0}),e}(),SuperTabsContainerComponent=function(){function e(){this.swipeEnabled=!0,this.autoScrollTop=!1,this.tabs=[],this._activeTabIndex=0,this.leftThreshold=0,this.rightThreshold=0,this.scrollWidth=0,this.clientWidth=0}return e.prototype.componentDidLoad=function(){this.indexTabs()},e.prototype.componentDidUpdate=function(){this.indexTabs()},e.prototype.moveContainerByIndex=function(e,t){var n=this.indexToPosition(e);return this.moveContainer(n,t)},e.prototype.moveContainer=function(e,t){Object(_chunk_39d8d03b_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.el,e,0,t?this.config.transitionDuration:0,this.queue)},e.prototype.setActiveTabIndex=function(e){var t=this;if(this._activeTabIndex===e){if(!this.autoScrollTop)return;var n=this.tabs[this._activeTabIndex];this.queue.read(function(){n.getRootScrollableEl().then(function(e){e&&t.queue.write(function(){Object(_chunk_39d8d03b_js__WEBPACK_IMPORTED_MODULE_2__["b"])(e,0,0,t.config.transitionDuration,t.queue)})})})}this.moveContainerByIndex(e,!0),this.updateActiveTabIndex(e,!1)},e.prototype.updateActiveTabIndex=function(e,t){void 0===t&&(t=!0),this._activeTabIndex=e,t&&this.activeTabIndexChange.emit(this._activeTabIndex)},e.prototype.updateSelectedTabIndex=function(e){e!==this._selectedTabIndex&&(this._selectedTabIndex=e,this.selectedTabIndexChange.emit(this._selectedTabIndex))},e.prototype.onWindowResize=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(e){return this.indexTabs(),[2]})})},e.prototype.onTouchStart=function(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var t,n,i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(o){if(!this.swipeEnabled)return[2];if(t=e.target)do{if("function"==typeof t.getAttribute&&t.getAttribute("avoid-super-tabs"))return this.shouldCapture=!1,[2];t=t.parentElement}while(t);return n=Object(_chunk_39d8d03b_js__WEBPACK_IMPORTED_MODULE_2__["c"])(e),i=this.clientWidth,n.x<this.leftThreshold||n.x>i-this.rightThreshold?(this.shouldCapture=!1,[2]):(this.initialCoords=n,this.config.shortSwipeDuration>0&&(this.initialTimestamp=window.performance.now()),this.lastPosX=n.x,[2])})})},e.prototype.onTouchMove=function(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var t=this;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(n){return this.swipeEnabled?(this.queue.read(function(){var n=Object(_chunk_39d8d03b_js__WEBPACK_IMPORTED_MODULE_2__["c"])(e);if(!t.isDragging){if("boolean"!=typeof t.shouldCapture&&(t.shouldCapture=Object(_chunk_39d8d03b_js__WEBPACK_IMPORTED_MODULE_2__["d"])(n,t.initialCoords,t.config)),!0!==t.shouldCapture)return;t.isDragging=!0}t.config.allowElementScroll||(e.stopPropagation(),e.preventDefault());var i=t.lastPosX-n.x;if(0!==i){var o=t.el.scrollLeft,r=Object(_chunk_39d8d03b_js__WEBPACK_IMPORTED_MODULE_2__["e"])(t.el,i);r!==o&&(t.updateSelectedTabIndex(t.positionToIndex(r)),t.queue.write(function(){t.lastPosX=n.x,t.moveContainer(r,!1)}))}}),[2]):[2]})})},e.prototype.onTouchEnd=function(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var t,n,i,o,r=this;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(a){return this.swipeEnabled?(t=Object(_chunk_39d8d03b_js__WEBPACK_IMPORTED_MODULE_2__["c"])(e),!0===this.shouldCapture&&(n=window.performance.now()-this.initialTimestamp,i=this.config.shortSwipeDuration>0&&n<=this.config.shortSwipeDuration,o=t.x-this.initialCoords.x,this.queue.read(function(){var e=r.calcSelectedTab(),t=Math.round(e);i&&t===r._activeTabIndex&&(e+=o>0?-1:1),e=r.normalizeSelectedTab(e),r.updateActiveTabIndex(e),r.queue.write(function(){r.moveContainer(r.indexToPosition(e),!0)})})),this.isDragging=!1,this.shouldCapture=void 0,[2]):[2]})})},e.prototype.indexTabs=function(){var e=this;this.queue.read(function(){e.scrollWidth=e.el.scrollWidth,e.clientWidth=e.el.clientWidth;for(var t=e.el.querySelectorAll("super-tab"),n=[],i=0;i<t.length;i++)n.push(t[i]);e.tabs=n}),"both"!==this.config.sideMenu&&"left"!==this.config.sideMenu||(this.leftThreshold=this.config.sideMenuThreshold),"both"!==this.config.sideMenu&&"right"!==this.config.sideMenu||(this.rightThreshold=this.config.sideMenuThreshold)},e.prototype.calcSelectedTab=function(){var e=Math.max(0,Math.min(this.scrollWidth-this.clientWidth,this.el.scrollLeft));return this.positionToIndex(e)},e.prototype.positionToIndex=function(e){return e/this.clientWidth},e.prototype.indexToPosition=function(e){return e*this.clientWidth},e.prototype.normalizeSelectedTab=function(e){var t=this.clientWidth;return Math.max(0,Math.min(this.scrollWidth-t,t*Math.round(e)))/t},e.prototype.render=function(){return Object(_supertabs_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot",null)},Object.defineProperty(e,"is",{get:function(){return"super-tabs-container"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autoScrollTop:{type:Boolean,attr:"auto-scroll-top"},config:{type:"Any",attr:"config",mutable:!0},el:{elementRef:!0},moveContainer:{method:!0},moveContainerByIndex:{method:!0},queue:{context:"queue"},setActiveTabIndex:{method:!0},swipeEnabled:{type:Boolean,attr:"swipe-enabled"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"activeTabIndexChange",method:"activeTabIndexChange",bubbles:!0,cancelable:!0,composed:!0},{name:"selectedTabIndexChange",method:"selectedTabIndexChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"window:resize",method:"onWindowResize",passive:!0},{name:"touchstart",method:"onTouchStart",passive:!0},{name:"touchmove",method:"onTouchMove"},{name:"touchend",method:"onTouchEnd",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;min-width:100%;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;width:100%;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-ms-touch-action:pan-y;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;will-change:scroll-position}"},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=128.js.map