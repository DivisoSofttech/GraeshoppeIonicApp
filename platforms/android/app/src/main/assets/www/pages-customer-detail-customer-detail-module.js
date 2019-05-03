(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customer-detail-customer-detail-module"],{

/***/ "./src/app/pages/customer-detail/customer-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailPageModule", function() { return CustomerDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-detail.page */ "./src/app/pages/customer-detail/customer-detail.page.ts");







var routes = [
    {
        path: '',
        component: _customer_detail_page__WEBPACK_IMPORTED_MODULE_6__["CustomerDetailPage"]
    }
];
var CustomerDetailPageModule = /** @class */ (function () {
    function CustomerDetailPageModule() {
    }
    CustomerDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_customer_detail_page__WEBPACK_IMPORTED_MODULE_6__["CustomerDetailPage"]]
        })
    ], CustomerDetailPageModule);
    return CustomerDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/customer-detail/customer-detail.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>customer-detail</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/customer-detail/customer-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyLWRldGFpbC9jdXN0b21lci1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/customer-detail/customer-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: CustomerDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailPage", function() { return CustomerDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerDetailPage = /** @class */ (function () {
    function CustomerDetailPage() {
    }
    CustomerDetailPage.prototype.ngOnInit = function () {
    };
    CustomerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-detail',
            template: __webpack_require__(/*! ./customer-detail.page.html */ "./src/app/pages/customer-detail/customer-detail.page.html"),
            styles: [__webpack_require__(/*! ./customer-detail.page.scss */ "./src/app/pages/customer-detail/customer-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerDetailPage);
    return CustomerDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-customer-detail-customer-detail-module.js.map