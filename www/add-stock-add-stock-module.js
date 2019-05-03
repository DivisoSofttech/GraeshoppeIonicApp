(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-stock-add-stock-module"],{

/***/ "./src/app/add-stock/add-stock.module.ts":
/*!***********************************************!*\
  !*** ./src/app/add-stock/add-stock.module.ts ***!
  \***********************************************/
/*! exports provided: AddStockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStockPageModule", function() { return AddStockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-stock.page */ "./src/app/add-stock/add-stock.page.ts");







var routes = [
    {
        path: '',
        component: _add_stock_page__WEBPACK_IMPORTED_MODULE_6__["AddStockPage"]
    }
];
var AddStockPageModule = /** @class */ (function () {
    function AddStockPageModule() {
    }
    AddStockPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_stock_page__WEBPACK_IMPORTED_MODULE_6__["AddStockPage"]]
        })
    ], AddStockPageModule);
    return AddStockPageModule;
}());



/***/ }),

/***/ "./src/app/add-stock/add-stock.page.html":
/*!***********************************************!*\
  !*** ./src/app/add-stock/add-stock.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>add-stock</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/add-stock/add-stock.page.scss":
/*!***********************************************!*\
  !*** ./src/app/add-stock/add-stock.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zdG9jay9hZGQtc3RvY2sucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-stock/add-stock.page.ts":
/*!*********************************************!*\
  !*** ./src/app/add-stock/add-stock.page.ts ***!
  \*********************************************/
/*! exports provided: AddStockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStockPage", function() { return AddStockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddStockPage = /** @class */ (function () {
    function AddStockPage() {
    }
    AddStockPage.prototype.ngOnInit = function () {
    };
    AddStockPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-stock',
            template: __webpack_require__(/*! ./add-stock.page.html */ "./src/app/add-stock/add-stock.page.html"),
            styles: [__webpack_require__(/*! ./add-stock.page.scss */ "./src/app/add-stock/add-stock.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddStockPage);
    return AddStockPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-stock-add-stock-module.js.map