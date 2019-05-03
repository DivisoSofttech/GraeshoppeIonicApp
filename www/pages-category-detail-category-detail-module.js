(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-detail-category-detail-module"],{

/***/ "./src/app/pages/category-detail/category-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/category-detail/category-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: CategoryDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailPageModule", function() { return CategoryDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-detail.page */ "./src/app/pages/category-detail/category-detail.page.ts");







var routes = [
    {
        path: '',
        component: _category_detail_page__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailPage"]
    }
];
var CategoryDetailPageModule = /** @class */ (function () {
    function CategoryDetailPageModule() {
    }
    CategoryDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_category_detail_page__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailPage"]]
        })
    ], CategoryDetailPageModule);
    return CategoryDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/category-detail/category-detail.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/category-detail/category-detail.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>category-detail</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/category-detail/category-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/category-detail/category-detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5LWRldGFpbC9jYXRlZ29yeS1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/category-detail/category-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/category-detail/category-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: CategoryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailPage", function() { return CategoryDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoryDetailPage = /** @class */ (function () {
    function CategoryDetailPage() {
    }
    CategoryDetailPage.prototype.ngOnInit = function () {
    };
    CategoryDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-detail',
            template: __webpack_require__(/*! ./category-detail.page.html */ "./src/app/pages/category-detail/category-detail.page.html"),
            styles: [__webpack_require__(/*! ./category-detail.page.scss */ "./src/app/pages/category-detail/category-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoryDetailPage);
    return CategoryDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-category-detail-category-detail-module.js.map