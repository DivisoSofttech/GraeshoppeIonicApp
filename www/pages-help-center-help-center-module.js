(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-center-help-center-module"],{

/***/ "./src/app/pages/help-center/help-center.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/help-center/help-center.module.ts ***!
  \*********************************************************/
/*! exports provided: HelpCenterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCenterPageModule", function() { return HelpCenterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _help_center_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help-center.page */ "./src/app/pages/help-center/help-center.page.ts");







var routes = [
    {
        path: '',
        component: _help_center_page__WEBPACK_IMPORTED_MODULE_6__["HelpCenterPage"]
    }
];
var HelpCenterPageModule = /** @class */ (function () {
    function HelpCenterPageModule() {
    }
    HelpCenterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_help_center_page__WEBPACK_IMPORTED_MODULE_6__["HelpCenterPage"]]
        })
    ], HelpCenterPageModule);
    return HelpCenterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/help-center/help-center.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/help-center/help-center.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons>\r\n      <ion-menu-button slot=\"start\"></ion-menu-button>\r\n      <ion-title><strong>Help Center</strong></ion-title>\r\n      <ion-icon name=\"notifications\" class=\"larger\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/help-center/help-center.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/help-center/help-center.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHAtY2VudGVyL2hlbHAtY2VudGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/help-center/help-center.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/help-center/help-center.page.ts ***!
  \*******************************************************/
/*! exports provided: HelpCenterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCenterPage", function() { return HelpCenterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpCenterPage = /** @class */ (function () {
    function HelpCenterPage() {
    }
    HelpCenterPage.prototype.ngOnInit = function () {
    };
    HelpCenterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help-center',
            template: __webpack_require__(/*! ./help-center.page.html */ "./src/app/pages/help-center/help-center.page.html"),
            styles: [__webpack_require__(/*! ./help-center.page.scss */ "./src/app/pages/help-center/help-center.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpCenterPage);
    return HelpCenterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-help-center-help-center-module.js.map