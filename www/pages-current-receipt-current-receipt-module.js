(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-current-receipt-current-receipt-module"],{

/***/ "./src/app/pages/current-receipt/current-receipt.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/current-receipt/current-receipt.module.ts ***!
  \*****************************************************************/
/*! exports provided: CurrentReceiptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentReceiptPageModule", function() { return CurrentReceiptPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_product_quantity_modal_product_quantity_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/product-quantity-modal/product-quantity-modal.component */ "./src/app/components/product-quantity-modal/product-quantity-modal.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _make_payment_make_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../make-payment/make-payment.page */ "./src/app/pages/make-payment/make-payment.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _current_receipt_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./current-receipt.page */ "./src/app/pages/current-receipt/current-receipt.page.ts");
/* harmony import */ var _make_payment_make_payment_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../make-payment/make-payment.module */ "./src/app/pages/make-payment/make-payment.module.ts");











var routes = [
    {
        path: '',
        component: _current_receipt_page__WEBPACK_IMPORTED_MODULE_9__["CurrentReceiptPage"]
    }
];
var CurrentReceiptPageModule = /** @class */ (function () {
    function CurrentReceiptPageModule() {
    }
    CurrentReceiptPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _make_payment_make_payment_module__WEBPACK_IMPORTED_MODULE_10__["MakePaymentPageModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
                // CustomersPageModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
            ],
            declarations: [_current_receipt_page__WEBPACK_IMPORTED_MODULE_9__["CurrentReceiptPage"]],
            entryComponents: [_make_payment_make_payment_page__WEBPACK_IMPORTED_MODULE_3__["MakePaymentPage"], _components_product_quantity_modal_product_quantity_modal_component__WEBPACK_IMPORTED_MODULE_1__["ProductQuantityModalComponent"]]
        })
    ], CurrentReceiptPageModule);
    return CurrentReceiptPageModule;
}());



/***/ }),

/***/ "./src/app/pages/current-receipt/current-receipt.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/current-receipt/current-receipt.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-back-button></ion-back-button>    \r\n      <ion-title>Basket</ion-title>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"ticketLines.length > 0\" >\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"danger\" (click)=\"setCustomer()\" >\r\n      <ion-icon name=\"person\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-grid class=\"bg-grey\">\r\n    <ion-row justify-content-center class=\"ion-margin-top\">\r\n      <ion-col size=\"8\" text-center>\r\n        <ion-label>\r\n          Order total\r\n        </ion-label>\r\n        <ion-text cl>{{'(' +ticketLines.length +' items)'}}</ion-text>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row justify-content-center>\r\n      <ion-col size=\"12\" text-center>\r\n          <p class=\"price\">&#x20b9;{{total}}</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-button color=\"danger\" expand=\"full\" (click)=\"checkout()\">Go To Checkout</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid margin>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"8\" text-left>\r\n          <ion-label class=\"bold\">Order summary</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"4\" text-right>\r\n          <ion-label class=\"bold\">Total</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngFor=\"let ticket of ticketLines\" class=\"border-top ion-margin-vertical ion-padding-vertical\"\r\n      (click)=\"productQuantity()\">\r\n          <ion-col size=\"6\" text-left>\r\n            <ion-label *ngIf=\"products.length > 0\">{{getProduct(ticket).name}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-label *ngIf=\"products.length > 0\">{{'x' +ticket.quantity}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" text-right>\r\n            <ion-label>&#x20b9;{{ticket.total}}</ion-label>\r\n          </ion-col>\r\n      </ion-row>\r\n\r\n         <ion-row class=\"border-top ion-padding-vertical\">\r\n          <ion-col size=\"8\" text-left>\r\n            <ion-label class=\"bold\">Total</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\" text-right>\r\n            <ion-label class=\"bold\">\r\n                &#x20b9;{{total}}\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- <ion-row>\r\n          <ion-col>\r\n              <ion-label>\r\n                  <address>Bridgewater Hall Summer Hill,Dublin, DUBLIN 1</address>\r\n                </ion-label>\r\n          </ion-col>\r\n        </ion-row> -->\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"ticketLines.length === 0\" >\r\n  <ion-grid class=\"bg-grey\">\r\n    <ion-row justify-content-center class=\"ion-margin-top\">\r\n      <ion-col size=\"8\" text-center>\r\n        <ion-label>\r\n          Order total\r\n        </ion-label>\r\n        <ion-text cl>(0 items)</ion-text>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row justify-content-center>\r\n      <ion-col size=\"12\" text-center>\r\n          <p class=\"price\">&#x20b9;0</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <ion-icon class=\"cart\" name=\"cart\"></ion-icon>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/current-receipt/current-receipt.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/current-receipt/current-receipt.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-grey {\n  background: #eae4e4; }\n\n.cl-grey {\n  color: grey; }\n\n.bold {\n  color: black;\n  font-weight: bold; }\n\n.price {\n  font-size: 41px;\n  margin: 3px;\n  color: darkslategrey; }\n\n.info-icon {\n  font-size: 50px;\n  margin-right: 5px; }\n\n.border-top {\n  border-top: 1px solid grey; }\n\n.line-height-medium {\n  line-height: 22px; }\n\naddress {\n  font-weight: bold;\n  font-size: 13px; }\n\n.cart {\n  font-size: 275px;\n  opacity: .35; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VycmVudC1yZWNlaXB0L2Y6XFxQcm9qZWN0c1xcR3JhZXNob3BwZUlvbmljQXBwL3NyY1xcYXBwXFxwYWdlc1xcY3VycmVudC1yZWNlaXB0XFxjdXJyZW50LXJlY2VpcHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBRUksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUVJLDBCQUEwQixFQUFBOztBQUc5QjtFQUVJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1cnJlbnQtcmVjZWlwdC9jdXJyZW50LXJlY2VpcHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWdyZXkge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWFlNGU0O1xyXG59XHJcblxyXG4uY2wtZ3JleSB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmJvbGQge1xyXG5cclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiA0MXB4O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxufVxyXG5cclxuLmluZm8taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJvcmRlci10b3B7XHJcblxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5saW5lLWhlaWdodC1tZWRpdW0ge1xyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG5hZGRyZXNzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uY2FydCB7XHJcbiAgICBmb250LXNpemU6IDI3NXB4O1xyXG4gICAgb3BhY2l0eTogLjM1O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/current-receipt/current-receipt.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/current-receipt/current-receipt.page.ts ***!
  \***************************************************************/
/*! exports provided: CurrentReceiptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentReceiptPage", function() { return CurrentReceiptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _customers_customers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../customers/customers.page */ "./src/app/pages/customers/customers.page.ts");
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ "./src/app/api/services.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _components_product_quantity_modal_product_quantity_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/product-quantity-modal/product-quantity-modal.component */ "./src/app/components/product-quantity-modal/product-quantity-modal.component.ts");
/* harmony import */ var _make_payment_make_payment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../make-payment/make-payment.page */ "./src/app/pages/make-payment/make-payment.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var CurrentReceiptPage = /** @class */ (function () {
    function CurrentReceiptPage(modalController, cartService, queryResourceService) {
        this.modalController = modalController;
        this.cartService = cartService;
        this.queryResourceService = queryResourceService;
        this.ticketLines = [];
        this.products = [];
        this.total = 0;
    }
    CurrentReceiptPage.prototype.ngOnInit = function () {
        var _this = this;
        this.ticketLines = this.cartService.ticketLines;
        this.ticketLines.forEach(function (ticket) {
            _this.total += ticket.total;
            _this.queryResourceService
                .findProductUsingGET(ticket.productId)
                .subscribe(function (result) {
                _this.products.push(result);
                console.log(result);
            });
        });
    };
    CurrentReceiptPage.prototype.checkout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _make_payment_make_payment_page__WEBPACK_IMPORTED_MODULE_5__["MakePaymentPage"],
                            componentProps: { ticketLines: this.ticketLines, toBePaid: this.total, customerId: this.customer.id }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CurrentReceiptPage.prototype.productQuantity = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_product_quantity_modal_product_quantity_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProductQuantityModalComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CurrentReceiptPage.prototype.getProduct = function (ticket) {
        return this.products[this.ticketLines.indexOf(ticket)];
    };
    CurrentReceiptPage.prototype.setCustomer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _customers_customers_page__WEBPACK_IMPORTED_MODULE_1__["CustomersPage"],
                            componentProps: { asModal: true }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        this.customer = data.selectedCustomer;
                        console.log(this.customer);
                        return [2 /*return*/];
                }
            });
        });
    };
    CurrentReceiptPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-current-receipt',
            template: __webpack_require__(/*! ./current-receipt.page.html */ "./src/app/pages/current-receipt/current-receipt.page.html"),
            styles: [__webpack_require__(/*! ./current-receipt.page.scss */ "./src/app/pages/current-receipt/current-receipt.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["QueryResourceService"]])
    ], CurrentReceiptPage);
    return CurrentReceiptPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-current-receipt-current-receipt-module.js.map