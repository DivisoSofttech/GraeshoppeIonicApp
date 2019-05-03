(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-receipts-receipts-module"],{

/***/ "./src/app/pages/receipts/receipts.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/receipts/receipts.module.ts ***!
  \***************************************************/
/*! exports provided: ReceiptsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPageModule", function() { return ReceiptsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _receipts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receipts.page */ "./src/app/pages/receipts/receipts.page.ts");







var routes = [
    {
        path: '',
        component: _receipts_page__WEBPACK_IMPORTED_MODULE_6__["ReceiptsPage"]
    }
];
var ReceiptsPageModule = /** @class */ (function () {
    function ReceiptsPageModule() {
    }
    ReceiptsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_receipts_page__WEBPACK_IMPORTED_MODULE_6__["ReceiptsPage"]]
        })
    ], ReceiptsPageModule);
    return ReceiptsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/receipts/receipts.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/receipts/receipts.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"danger\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n      <ion-title><strong>Receipts</strong></ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  \r\n    <ion-item lines=\"none\" class=\"border-bottom\">\r\n      <ion-icon name=\"search\" class=\"search-icon\"></ion-icon>\r\n      <ion-input class=\"ion-margin-start\" clearInput=\"true\" placeholder=\"Enter reciept Number\"></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-item lines=\"none\" class=\"border-bottom\">\r\n      <ion-label class=\"date\">Friday, April 26, 2019</ion-label>\r\n    </ion-item>\r\n  \r\n    <div>\r\n      <ion-grid >\r\n        <ion-row (click)=\"navigateToDetails()\" >\r\n          <ion-col size=\"2\" class=\"vertical-align-center\">\r\n              <ion-icon name=\"cash\" class=\"fs-20\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"border-bottom\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                  <ion-label>2.58</ion-label>\r\n              </ion-row>\r\n              <ion-row>\r\n                  <ion-label class=\"time\">9.48 AM</ion-label>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-col>\r\n          <ion-col size=\"4\" text-right class=\"border-bottom \">\r\n            <ion-label class=\"receipt-id\">{{id}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  \r\n    </div>\r\n  \r\n    <div  class=\"vertical-align-center\" *ngIf=\"test\">\r\n        <ion-grid>\r\n  \r\n            <ion-row>\r\n              <ion-col text-center>\r\n                <ion-icon class=\"no-receipt-icon\" src=\"./assets/receipt.svg\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col text-center class=\"ion-padding-top\">\r\n                <ion-label class=\"fs-20\">You have no reciepts yet</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n        \r\n          </ion-grid>\r\n    </div>\r\n  \r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./src/app/pages/receipts/receipts.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/receipts/receipts.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-bottom {\n  border-bottom: 1px solid #e2d7d7; }\n\n.no-receipt-icon {\n  width: 150px;\n  height: 150px;\n  background: #f0f0f0;\n  padding: 30px;\n  border-radius: 50%; }\n\n.vertical-align-center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important; }\n\n.fs-20 {\n  font-size: 20px; }\n\n.receipt-id::before {\n  content: \"#\"; }\n\n.date {\n  font-weight: 600;\n  color: green;\n  font-size: 12px;\n  font-family: monospace; }\n\n.time {\n  color: grey;\n  font-size: 14px; }\n\n.search-icon {\n  font-size: 20px;\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjZWlwdHMvZjpcXFByb2plY3RzXFxHcmFlc2hvcHBlSW9uaWNBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWNlaXB0c1xccmVjZWlwdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQStCLEVBQUE7O0FBSW5DO0VBRUksWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUl0QjtFQUVJLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksZUFBZSxFQUFBOztBQUluQjtFQUNJLFlBQVksRUFBQTs7QUFJaEI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0IsRUFBQTs7QUFHMUI7RUFFSSxXQUFXO0VBQ1gsZUFBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWNlaXB0cy9yZWNlaXB0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyLWJvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTJkN2Q3O1xyXG59XHJcblxyXG5cclxuLm5vLXJlY2VpcHQtaWNvbiBcclxue1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuLnZlcnRpY2FsLWFsaWduLWNlbnRlciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZzLTIwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuXHJcbi5yZWNlaXB0LWlkOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIjXCI7XHJcbn1cclxuXHJcblxyXG4uZGF0ZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG5cclxuLnRpbWUge1xyXG5cclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/receipts/receipts.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/receipts/receipts.page.ts ***!
  \*************************************************/
/*! exports provided: ReceiptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPage", function() { return ReceiptsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ReceiptsPage = /** @class */ (function () {
    function ReceiptsPage(navController) {
        this.navController = navController;
        this.test = false;
        this.id = '1-1001';
    }
    ReceiptsPage.prototype.ngOnInit = function () {
    };
    ReceiptsPage.prototype.navigateToDetails = function () {
        this.navController.navigateForward('/receipts/' + this.id);
    };
    ReceiptsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receipts',
            template: __webpack_require__(/*! ./receipts.page.html */ "./src/app/pages/receipts/receipts.page.html"),
            styles: [__webpack_require__(/*! ./receipts.page.scss */ "./src/app/pages/receipts/receipts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ReceiptsPage);
    return ReceiptsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-receipts-receipts-module.js.map