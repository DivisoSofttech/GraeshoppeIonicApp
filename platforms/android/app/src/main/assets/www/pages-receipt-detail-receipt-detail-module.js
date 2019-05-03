(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-receipt-detail-receipt-detail-module"],{

/***/ "./src/app/pages/receipt-detail/receipt-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/receipt-detail/receipt-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: ReceiptDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptDetailPageModule", function() { return ReceiptDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_receipt_detail_popover_receipt_detail_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/receipt-detail-popover/receipt-detail-popover.component */ "./src/app/components/receipt-detail-popover/receipt-detail-popover.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _receipt_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./receipt-detail.page */ "./src/app/pages/receipt-detail/receipt-detail.page.ts");









var routes = [
    {
        path: '',
        component: _receipt_detail_page__WEBPACK_IMPORTED_MODULE_8__["ReceiptDetailPage"]
    }
];
var ReceiptDetailPageModule = /** @class */ (function () {
    function ReceiptDetailPageModule() {
    }
    ReceiptDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_receipt_detail_page__WEBPACK_IMPORTED_MODULE_8__["ReceiptDetailPage"]],
            entryComponents: [_components_receipt_detail_popover_receipt_detail_popover_component__WEBPACK_IMPORTED_MODULE_2__["ReceiptDetailPopoverComponent"]]
        })
    ], ReceiptDetailPageModule);
    return ReceiptDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/receipt-detail/receipt-detail.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/receipt-detail/receipt-detail.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"light\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"navigateToRefund()\" >REFUND</ion-button>\r\n      <ion-button (click)=\"presentPopover($event)\">\r\n        <ion-icon name=\"more\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'#' + id}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item text-center>\r\n      <ion-label class=\"bold-text large-text\">2.58<br><span class=\"thin-text small-text\">Total</span></ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <span>Cashier: Owner</span><br>\r\n        <span>POS: POS1</span>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <span>Product name</span><br>\r\n        <span class=\"small-text\">{{quantity}} x {{unitPrice}}</span>\r\n      </ion-label>\r\n      <ion-label text-end>\r\n        2.58\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label>\r\n          <span>Total</span><br>\r\n          <span>Cash</span>\r\n        </ion-label>\r\n        <ion-label text-end>\r\n            <span>2.58</span><br>\r\n            <span>2.58</span>\r\n          </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label>\r\n            26/4/2019 2:13 pm\r\n          </ion-label>\r\n          <ion-label text-end>\r\n              {{'#' + id}}\r\n            </ion-label>\r\n        </ion-item>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/receipt-detail/receipt-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/receipt-detail/receipt-detail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bold-text {\n  font-weight: 400; }\n\n.thin-text {\n  font-weight: 100; }\n\n.large-text {\n  font-size: 24px; }\n\n.small-text {\n  color: grey;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjZWlwdC1kZXRhaWwvZjpcXFByb2plY3RzXFxHcmFlc2hvcHBlSW9uaWNBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWNlaXB0LWRldGFpbFxccmVjZWlwdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWNlaXB0LWRldGFpbC9yZWNlaXB0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9sZC10ZXh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi50aGluLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLmxhcmdlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uc21hbGwtdGV4dCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/receipt-detail/receipt-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/receipt-detail/receipt-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: ReceiptDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptDetailPage", function() { return ReceiptDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_receipt_detail_popover_receipt_detail_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/receipt-detail-popover/receipt-detail-popover.component */ "./src/app/components/receipt-detail-popover/receipt-detail-popover.component.ts");





var ReceiptDetailPage = /** @class */ (function () {
    function ReceiptDetailPage(popoverController, route, navController) {
        this.popoverController = popoverController;
        this.route = route;
        this.navController = navController;
        this.quantity = 2;
        this.unitPrice = 1.29;
    }
    ReceiptDetailPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
    };
    ReceiptDetailPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: src_app_components_receipt_detail_popover_receipt_detail_popover_component__WEBPACK_IMPORTED_MODULE_4__["ReceiptDetailPopoverComponent"],
                            event: ev,
                            translucent: true,
                            showBackdrop: false,
                            backdropDismiss: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReceiptDetailPage.prototype.navigateToRefund = function () {
        this.navController.navigateForward(/refund/ + this.id);
    };
    ReceiptDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receipt-detail',
            template: __webpack_require__(/*! ./receipt-detail.page.html */ "./src/app/pages/receipt-detail/receipt-detail.page.html"),
            styles: [__webpack_require__(/*! ./receipt-detail.page.scss */ "./src/app/pages/receipt-detail/receipt-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], ReceiptDetailPage);
    return ReceiptDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-receipt-detail-receipt-detail-module.js.map