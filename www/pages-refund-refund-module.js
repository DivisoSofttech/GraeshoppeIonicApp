(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-refund-refund-module"],{

/***/ "./src/app/pages/refund/refund.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/refund/refund.module.ts ***!
  \***********************************************/
/*! exports provided: RefundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundPageModule", function() { return RefundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_refund_quantity_modal_refund_quantity_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/refund-quantity-modal/refund-quantity-modal.component */ "./src/app/components/refund-quantity-modal/refund-quantity-modal.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _refund_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./refund.page */ "./src/app/pages/refund/refund.page.ts");









var routes = [
    {
        path: '',
        component: _refund_page__WEBPACK_IMPORTED_MODULE_8__["RefundPage"]
    }
];
var RefundPageModule = /** @class */ (function () {
    function RefundPageModule() {
    }
    RefundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]
            ],
            declarations: [_refund_page__WEBPACK_IMPORTED_MODULE_8__["RefundPage"]],
            entryComponents: [_components_refund_quantity_modal_refund_quantity_modal_component__WEBPACK_IMPORTED_MODULE_1__["RefundQuantityModalComponent"]]
        })
    ], RefundPageModule);
    return RefundPageModule;
}());



/***/ }),

/***/ "./src/app/pages/refund/refund.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/refund/refund.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Refund</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-checkbox (click)=\"presentModal()\"  color=\"light\" [(ngModel)]=\"selected\" ></ion-checkbox>\n      <ion-label class=\"margin-text\">\n        Product Name<br>\n        <span class=\"small-text\" *ngIf=\"selected && refundQuantity\" >\n          Refund x {{refundQuantity}}\n        </span>\n      </ion-label>\n      <ion-label text-end>{{price | number:'1.2-2'}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Total</ion-label>\n      <ion-label text-end>{{total | number:'1.2-2'}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-button color=\"danger\" expand=\"block\" [disabled]=\"!selected\">\n    REFUND {{total | number:'1.2-2'}}\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/refund/refund.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/refund/refund.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-text {\n  margin-left: 5%; }\n\n.small-text {\n  color: orange;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVmdW5kL2Y6XFxQcm9qZWN0c1xcR3JhZXNob3BwZUlvbmljQXBwL3NyY1xcYXBwXFxwYWdlc1xccmVmdW5kXFxyZWZ1bmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGFBQWE7RUFDYixlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWZ1bmQvcmVmdW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbi5zbWFsbC10ZXh0IHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/refund/refund.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/refund/refund.page.ts ***!
  \*********************************************/
/*! exports provided: RefundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundPage", function() { return RefundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_refund_quantity_modal_refund_quantity_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/refund-quantity-modal/refund-quantity-modal.component */ "./src/app/components/refund-quantity-modal/refund-quantity-modal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var RefundPage = /** @class */ (function () {
    function RefundPage(route, modalController) {
        this.route = route;
        this.modalController = modalController;
        this.quantity = 2;
        this.price = 2.58;
        this.refundQuantity = 0;
        this.selected = false;
        this.total = 0.00;
    }
    RefundPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
    };
    RefundPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.selected && this.quantity > 1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modalController.create({
                                component: _components_refund_quantity_modal_refund_quantity_modal_component__WEBPACK_IMPORTED_MODULE_1__["RefundQuantityModalComponent"],
                                componentProps: { quantity: this.quantity,
                                    name: 'Product Name' }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        this.refundQuantity = data.requiredQuantity;
                        this.total = (this.price / this.quantity) * this.refundQuantity;
                        if (this.refundQuantity === 0) {
                            this.selected = false;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (!this.selected && this.quantity === 1) {
                            this.total = this.price;
                        }
                        else if (this.selected) {
                            this.total = 0;
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RefundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-refund',
            template: __webpack_require__(/*! ./refund.page.html */ "./src/app/pages/refund/refund.page.html"),
            styles: [__webpack_require__(/*! ./refund.page.scss */ "./src/app/pages/refund/refund.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], RefundPage);
    return RefundPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-refund-refund-module.js.map