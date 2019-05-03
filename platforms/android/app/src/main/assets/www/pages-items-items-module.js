(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-items-items-module"],{

/***/ "./src/app/pages/items/items.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/items/items.module.ts ***!
  \*********************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/edit-product-modal/edit-product-modal.component */ "./src/app/components/edit-product-modal/edit-product-modal.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items.page */ "./src/app/pages/items/items.page.ts");
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/header/header.component */ "./src/app/components/header/header.component.ts");










var routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_8__["ItemsPage"]
    }
];
var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_items_page__WEBPACK_IMPORTED_MODULE_8__["ItemsPage"]],
            entryComponents: [_components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_1__["EditProductModalComponent"],
                src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]]
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/items/items.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/items/items.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n  <ion-content>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" margin>\r\n      <ion-fab-button color=\"primary\" (click)=\"presentModal()\" color=\"danger\">\r\n        <ion-icon name=\"pricetag\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    <ion-list show-delete=\"false\" can-swipe=\"true\">\r\n        <ion-item-sliding *ngFor=\"let product of products\" >\r\n            <ion-item-options side=\"start\">\r\n              <ion-item-option (click)=\"editProductModal(product)\">\r\n                <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n        \r\n            <ion-item color=\"light\">\r\n              <ion-label>{{product.name}}</ion-label>\r\n            </ion-item>\r\n        \r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"danger\" (click)=\"delete(product)\" >\r\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n    </ion-list>\r\n  </ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/items/items.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/items/items.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".larger {\n  font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbXMvZjpcXFByb2plY3RzXFxHcmFlc2hvcHBlSW9uaWNBcHAvc3JjXFxhcHBcXHBhZ2VzXFxpdGVtc1xcaXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaXRlbXMvaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhcmdlcntcclxuICAgIGZvbnQtc2l6ZToyNXB4OyBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/items/items.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/items/items.page.ts ***!
  \*******************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ "./src/app/api/services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_items_add_items_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-items/add-items.page */ "./src/app/pages/add-items/add-items.page.ts");
/* harmony import */ var src_app_components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/edit-product-modal/edit-product-modal.component */ "./src/app/components/edit-product-modal/edit-product-modal.component.ts");






var ItemsPage = /** @class */ (function () {
    function ItemsPage(modalController, queryResourceservice, commandResource) {
        this.modalController = modalController;
        this.queryResourceservice = queryResourceservice;
        this.commandResource = commandResource;
        this.products = [];
    }
    ItemsPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_items_add_items_page__WEBPACK_IMPORTED_MODULE_4__["AddItemsPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        _a.sent();
                        this.getproducts();
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemsPage.prototype.editProductModal = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(' editProductModal method working with product id =' + product.id);
                        return [4 /*yield*/, this.modalController.create({
                                component: src_app_components_edit_product_modal_edit_product_modal_component__WEBPACK_IMPORTED_MODULE_5__["EditProductModalComponent"],
                                componentProps: { id: product.id }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        _a.sent();
                        console.log('...............[][][][]');
                        this.getproducts();
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemsPage.prototype.getproducts = function () {
        var _this = this;
        this.queryResourceservice.findAllProductUsingGET({}).subscribe(function (result) {
            console.log('-----', result);
            _this.products = result;
        }, function (err) {
            console.log('error getting products');
        });
    };
    ItemsPage.prototype.ngOnInit = function () {
        this.getproducts();
    };
    ItemsPage.prototype.delete = function (product) {
        var _this = this;
        this.commandResource.deleteProductUsingDELETE(product.id).subscribe(function (res) {
            _this.products.splice(_this.products.indexOf(product), 1);
        }, function (err) {
            console.log('Error deleting product ', product);
        });
    };
    ItemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.page.html */ "./src/app/pages/items/items.page.html"),
            styles: [__webpack_require__(/*! ./items.page.scss */ "./src/app/pages/items/items.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["QueryResourceService"],
            src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["CommandResourceService"]])
    ], ItemsPage);
    return ItemsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-items-items-module.js.map