(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-orders-module"],{

/***/ "./src/app/pages/orders/orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/pages/orders/orders.page.ts");







var routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }
];
var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons>\r\n      <ion-menu-button slot=\"start\"></ion-menu-button>\r\n      <ion-title><strong>Orders</strong></ion-title>\r\n      <ion-icon name=\"notifications\" class=\"larger\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-item lines=\"none\" class=\"border-bottom\">\r\n    <ion-icon name=\"search\" class=\"search-icon\"></ion-icon>\r\n    <ion-input class=\"ion-margin-start\" clearInput=\"true\" placeholder=\"Enter Order Number\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item lines=\"none\" class=\"border-bottom\">\r\n    <ion-label class=\"date\">Wednesday, May 1, 2019</ion-label>\r\n  </ion-item>\r\n\r\n  <div>\r\n    <ion-grid >\r\n      <ion-row (click)=\"navigateToDetails()\" >\r\n        <ion-col size=\"2\" class=\"vertical-align-center\">\r\n            <ion-icon name=\"basket\" class=\"fs-20\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"border-bottom\">\r\n          <ion-grid>\r\n            <ion-row>\r\n                <ion-label>002</ion-label>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-label class=\"time\">9.48 AM</ion-label>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n        <ion-col size=\"4\" text-right class=\"border-bottom \">\r\n          <ion-label class=\"order-id\">{{id}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </div>\r\n\r\n  <div  class=\"vertical-align-center\" *ngIf=\"test\">\r\n      <ion-grid>\r\n\r\n          <ion-row>\r\n            <ion-col text-center>\r\n              <ion-icon class=\"no-receipt-icon\" src=\"./assets/receipt.svg\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col text-center class=\"ion-padding-top\">\r\n              <ion-label class=\"fs-20\">You have no orders yet</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n      \r\n        </ion-grid>\r\n  </div>\r\n\r\n  <div>\r\n    <ion-grid >\r\n      <ion-row (click)=\"navigateToDetails()\" >\r\n        <ion-col size=\"2\" class=\"vertical-align-center\">\r\n            <ion-icon name=\"basket\" class=\"fs-20\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"border-bottom\">\r\n          <ion-grid>\r\n            <ion-row>\r\n                <ion-label>001</ion-label>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-label class=\"time\">9.48 AM</ion-label>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-col>\r\n        <ion-col size=\"4\" text-right class=\"border-bottom \">\r\n          <ion-label class=\"order-id\">{{id}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </div>\r\n\r\n  <div  class=\"vertical-align-center\" *ngIf=\"test\">\r\n      <ion-grid>\r\n\r\n          <ion-row>\r\n            <ion-col text-center>\r\n              <ion-icon class=\"no-receipt-icon\" src=\"./assets/receipt.svg\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col text-center class=\"ion-padding-top\">\r\n              <ion-label class=\"fs-20\">You have no orders yet</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n      \r\n        </ion-grid>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/orders/orders.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-bottom {\n  border-bottom: 1px solid #e2d7d7; }\n\n.no-receipt-icon {\n  width: 150px;\n  height: 150px;\n  background: #f0f0f0;\n  padding: 30px;\n  border-radius: 50%; }\n\n.vertical-align-center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important; }\n\n.fs-20 {\n  font-size: 20px; }\n\n.receipt-id::before {\n  content: \"#\"; }\n\n.date {\n  font-weight: 600;\n  color: green;\n  font-size: 12px;\n  font-family: monospace; }\n\n.time {\n  color: grey;\n  font-size: 14px; }\n\n.search-icon {\n  font-size: 20px;\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJzL2Y6XFxQcm9qZWN0c1xcR3JhZXNob3BwZUlvbmljQXBwL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXJzXFxvcmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQStCLEVBQUE7O0FBSW5DO0VBRUksWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUl0QjtFQUVJLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksZUFBZSxFQUFBOztBQUluQjtFQUNJLFlBQVksRUFBQTs7QUFJaEI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0IsRUFBQTs7QUFHMUI7RUFFSSxXQUFXO0VBQ1gsZUFBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlMmQ3ZDc7XHJcbn1cclxuXHJcblxyXG4ubm8tcmVjZWlwdC1pY29uIFxyXG57XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcblxyXG4udmVydGljYWwtYWxpZ24tY2VudGVyIHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnMtMjAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLnJlY2VpcHQtaWQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIiNcIjtcclxufVxyXG5cclxuXHJcbi5kYXRlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcblxyXG4udGltZSB7XHJcblxyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufVxyXG5cclxuLnNlYXJjaC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/orders/orders.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrdersPage = /** @class */ (function () {
    function OrdersPage() {
    }
    OrdersPage.prototype.ngOnInit = function () {
    };
    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.page.html */ "./src/app/pages/orders/orders.page.html"),
            styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/pages/orders/orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrdersPage);
    return OrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-orders-orders-module.js.map