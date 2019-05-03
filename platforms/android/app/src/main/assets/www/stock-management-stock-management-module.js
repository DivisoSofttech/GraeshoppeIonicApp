(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-management-stock-management-module"],{

/***/ "./src/app/stock-management/stock-management.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/stock-management/stock-management.module.ts ***!
  \*************************************************************/
/*! exports provided: StockManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockManagementPageModule", function() { return StockManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-management.page */ "./src/app/stock-management/stock-management.page.ts");







var routes = [
    {
        path: '',
        component: _stock_management_page__WEBPACK_IMPORTED_MODULE_6__["StockManagementPage"]
    }
];
var StockManagementPageModule = /** @class */ (function () {
    function StockManagementPageModule() {
    }
    StockManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_stock_management_page__WEBPACK_IMPORTED_MODULE_6__["StockManagementPage"]]
        })
    ], StockManagementPageModule);
    return StockManagementPageModule;
}());



/***/ }),

/***/ "./src/app/stock-management/stock-management.page.html":
/*!*************************************************************!*\
  !*** ./src/app/stock-management/stock-management.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>stock-management</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" margin>\r\n    <ion-fab-button color=\"danger\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/stock-management/stock-management.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/stock-management/stock-management.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLW1hbmFnZW1lbnQvc3RvY2stbWFuYWdlbWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/stock-management/stock-management.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/stock-management/stock-management.page.ts ***!
  \***********************************************************/
/*! exports provided: StockManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockManagementPage", function() { return StockManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StockManagementPage = /** @class */ (function () {
    function StockManagementPage() {
    }
    StockManagementPage.prototype.ngOnInit = function () {
    };
    StockManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-management',
            template: __webpack_require__(/*! ./stock-management.page.html */ "./src/app/stock-management/stock-management.page.html"),
            styles: [__webpack_require__(/*! ./stock-management.page.scss */ "./src/app/stock-management/stock-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StockManagementPage);
    return StockManagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=stock-management-stock-management-module.js.map