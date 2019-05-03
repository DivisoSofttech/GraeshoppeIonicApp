(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-uom-uom-module"],{

/***/ "./src/app/pages/uom/uom.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/uom/uom.module.ts ***!
  \*****************************************/
/*! exports provided: UomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UomPageModule", function() { return UomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uom_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uom.page */ "./src/app/pages/uom/uom.page.ts");
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/header/header.component */ "./src/app/components/header/header.component.ts");









var routes = [
    {
        path: '',
        component: _uom_page__WEBPACK_IMPORTED_MODULE_7__["UomPage"]
    }
];
var UomPageModule = /** @class */ (function () {
    function UomPageModule() {
    }
    UomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_uom_page__WEBPACK_IMPORTED_MODULE_7__["UomPage"]],
            entryComponents: [src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]]
        })
    ], UomPageModule);
    return UomPageModule;
}());



/***/ }),

/***/ "./src/app/pages/uom/uom.page.html":
/*!*****************************************!*\
  !*** ./src/app/pages/uom/uom.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<ion-content>\r\n  <ion-list show-delete=\"false\" can-swipe=\"true\">\r\n    <ion-item-sliding *ngFor=\"let uom of uoms\">\r\n      <ion-item-options side=\"start\">\r\n        <ion-item-option>\r\n          <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n\r\n      <ion-item color=\"light\">\r\n        <ion-label>{{uom.name}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\">\r\n          <ion-icon slot=\"icon-only\" name=\"trash\" (click)=\"delete(uom)\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" margin>\r\n    <ion-fab-button color=\"primary\" (click)=\"presentModal()\" color=\"danger\">\r\n      <ion-icon name=\"document\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/uom/uom.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/uom/uom.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".larger {\n  font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdW9tL2Y6XFxQcm9qZWN0c1xcR3JhZXNob3BwZUlvbmljQXBwL3NyY1xcYXBwXFxwYWdlc1xcdW9tXFx1b20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdW9tL3VvbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFyZ2Vye1xyXG4gICAgZm9udC1zaXplOjI1cHg7IFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/uom/uom.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/uom/uom.page.ts ***!
  \***************************************/
/*! exports provided: UomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UomPage", function() { return UomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ "./src/app/api/services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_uom_add_uom_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-uom/add-uom.page */ "./src/app/pages/add-uom/add-uom.page.ts");





var UomPage = /** @class */ (function () {
    function UomPage(modalController, queryResourceService, commandResourceService) {
        this.modalController = modalController;
        this.queryResourceService = queryResourceService;
        this.commandResourceService = commandResourceService;
    }
    UomPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_uom_add_uom_page__WEBPACK_IMPORTED_MODULE_4__["AddUomPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UomPage.prototype.ngOnInit = function () {
        var _this = this;
        this.queryResourceService.findAllUomUsingGET({}).subscribe(function (result) {
            _this.uoms = result;
        });
    };
    UomPage.prototype.delete = function () {
        //  this.commandResourceService.deleteUOMUsingDELETE()
    };
    UomPage.prototype.edit = function (uom) {
    };
    UomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-uom',
            template: __webpack_require__(/*! ./uom.page.html */ "./src/app/pages/uom/uom.page.html"),
            styles: [__webpack_require__(/*! ./uom.page.scss */ "./src/app/pages/uom/uom.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["QueryResourceService"],
            src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["CommandResourceService"]])
    ], UomPage);
    return UomPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-uom-uom-module.js.map