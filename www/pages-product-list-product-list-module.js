(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-list-product-list-module"],{

/***/ "./src/app/pages/product-list/product-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-list/product-list.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list.page */ "./src/app/pages/product-list/product-list.page.ts");
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/header/header.component */ "./src/app/components/header/header.component.ts");









var routes = [
    {
        path: '',
        component: _product_list_page__WEBPACK_IMPORTED_MODULE_7__["ProductListPage"]
    }
];
var ProductListPageModule = /** @class */ (function () {
    function ProductListPageModule() {
    }
    ProductListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_7__["ProductListPage"]],
            entryComponents: [src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]]
        })
    ], ProductListPageModule);
    return ProductListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/product-list/product-list.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-list/product-list.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<ion-content>\r\n<ion-row>\r\n    <div *ngFor='let product of products'>\r\n    <ion-col>\r\n    <ion-card class=\"size\" (click)=\"addTicketLine(product)\">\r\n        <img [src]=\"'data:' + product.imageContentType + ';base64,' + product.image\">\r\n        <div class=\"myOverlay\">\r\n          <div class=\"card-title\"><strong>{{product.name}}</strong></div>\r\n        </div>\r\n    </ion-card>\r\n    </ion-col>\r\n    </div>\r\n</ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/product-list/product-list.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/product-list/product-list.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/product-list/product-list.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/product-list/product-list.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/services */ "./src/app/api/services.ts");





var ProductListPage = /** @class */ (function () {
    function ProductListPage(queryResourceService, route, cartService) {
        this.queryResourceService = queryResourceService;
        this.route = route;
        this.cartService = cartService;
        this.products = [];
    }
    ProductListPage.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getProducts();
    };
    ProductListPage.prototype.getProducts = function () {
        var _this = this;
        var params = { categoryId: this.id };
        this.queryResourceService.findProductByCategoryIdUsingGET(params).subscribe(function (result) {
            _this.products = result.content;
            console.log(_this.products);
        });
    };
    ProductListPage.prototype.addTicketLine = function (product) {
        console.log('added');
        this.cartService.addProduct(product);
    };
    ProductListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.page.html */ "./src/app/pages/product-list/product-list.page.html"),
            styles: [__webpack_require__(/*! ./product-list.page.scss */ "./src/app/pages/product-list/product-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_services__WEBPACK_IMPORTED_MODULE_4__["QueryResourceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], ProductListPage);
    return ProductListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-product-list-product-list-module.js.map