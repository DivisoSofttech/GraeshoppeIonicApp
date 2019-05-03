(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "./src/app/pages/categories/categories.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/edit-category/edit-category.component */ "./src/app/components/edit-category/edit-category.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");










var routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_9__["CategoriesPage"]
    }
];
var CategoriesPageModule = /** @class */ (function () {
    function CategoriesPageModule() {
    }
    CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
            ],
            declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_9__["CategoriesPage"]],
            entryComponents: [_components_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_3__["EditCategoryComponent"], src_app_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]]
        })
    ], CategoriesPageModule);
    return CategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/categories/categories.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<ion-content padding>\r\n  <ion-row>\r\n    <ion-col *ngFor='let category of categories' size=\"6\">\r\n      \r\n      <ion-card class=\"size\" >\r\n        <ion-icon name=\"more\" class=\"optionPostion\" slot=\"icon-only\" (click)=\"presentActionSheet(category)\"></ion-icon>\r\n        <img [src]=\"'data:' + category.imageContentType + ';base64,' + category.image\" [routerLink]=\"'/product-list/'+category.id\"/>\r\n        <div class=\"myOverlay\" [routerLink]=\"'/product-list/'+category.id\">\r\n          <div class=\"card-title\"><strong>{{category.name}}</strong></div>\r\n          <!-- <div class=\"card-subtitle\"><strong>{{category.products.length}}</strong></div> -->\r\n          \r\n        </div>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" margin>\r\n    <ion-fab-button color=\"primary\" (click)=\"presentModal()\" color=\"danger\">\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/categories/categories.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".larger {\n  font-size: 25px; }\n\n.ion-img {\n  height: 20vh;\n  width: 20vh; }\n\n.size {\n  height: 20vh;\n  width: 100%;\n  background-size: 300px 100px; }\n\n.card-title {\n  margin-top: 15px; }\n\n.myOverlay {\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  opacity: 0.5;\n  background: #000;\n  color: #fff;\n  text-align: center; }\n\n.card-title2 {\n  margin-top: 15px;\n  background-color: grey; }\n\n.optionPostion {\n  position: absolute;\n  right: 0px;\n  left: 110px;\n  font-size: 25px;\n  cursor: pointer;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9mOlxcUHJvamVjdHNcXEdyYWVzaG9wcGVJb25pY0FwcC9zcmNcXGFwcFxccGFnZXNcXGNhdGVnb3JpZXNcXGNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBYyxFQUFBOztBQUVoQjtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBSWY7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXJnZXJ7XHJcbiAgICBmb250LXNpemU6MjVweDsgXHJcbiAgfVxyXG4gIC5pb24taW1ne1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgd2lkdGg6IDIwdmg7XHJcblxyXG59XHJcblxyXG4uc2l6ZXtcclxuICAgIGhlaWdodDogMjB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMDBweCAxMDBweDtcclxuXHJcbn1cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5teU92ZXJsYXl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5jYXJkLXRpdGxlMntcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyBcclxufVxyXG4ub3B0aW9uUG9zdGlvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgbGVmdCA6IDExMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4OyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/categories/categories.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/categories/categories.page.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/edit-category/edit-category.component */ "./src/app/components/edit-category/edit-category.component.ts");
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ "./src/app/api/services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_categories_add_categories_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-categories/add-categories.page */ "./src/app/pages/add-categories/add-categories.page.ts");






var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(actionSheetController, modalController, queryResourceService, commandResource) {
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.queryResourceService = queryResourceService;
        this.commandResource = commandResource;
        this.categories = [];
    }
    CategoriesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.queryResourceService.findAllCategoriesUsingGET({})
            .subscribe(function (result) {
            _this.categories = result;
            console.log('---------', _this.categories);
        });
    };
    CategoriesPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _add_categories_add_categories_page__WEBPACK_IMPORTED_MODULE_5__["AddCategoriesPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        this.categories.push(data.newCategory);
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesPage.prototype.presentActionSheet = function (selectedCategory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('>>>>>>>>>>>>>>>>>>action sheet with id' + selectedCategory.id);
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Options',
                                buttons: [{
                                        text: 'Delete',
                                        role: 'destructive',
                                        icon: 'trash',
                                        handler: function () {
                                            console.log('Delete clicked');
                                            _this.commandResource.deleteCategoryUsingDELETE(selectedCategory.id).subscribe(function (res) { console.log('delete success ' + res); }, function (err) { console.log('delete faild error ' + err); });
                                            _this.categories.splice(_this.categories.indexOf(selectedCategory), 1);
                                        }
                                    }, {
                                        text: 'Edit',
                                        icon: 'create',
                                        handler: function () {
                                            console.log('edit clicked');
                                            _this.presentEditModal(selectedCategory);
                                        }
                                    }, {
                                        text: 'Cancel',
                                        icon: 'close',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    }]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesPage.prototype.presentEditModal = function (selectedCategory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('category seleted for editing ' + selectedCategory);
                        return [4 /*yield*/, this.modalController.create({
                                component: _components_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_1__["EditCategoryComponent"],
                                componentProps: { category: selectedCategory }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.page.html */ "./src/app/pages/categories/categories.page.html"),
            styles: [__webpack_require__(/*! ./categories.page.scss */ "./src/app/pages/categories/categories.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["QueryResourceService"], src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["CommandResourceService"]])
    ], CategoriesPage);
    return CategoriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module.js.map