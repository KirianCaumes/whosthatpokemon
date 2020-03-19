(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/settings-modal/settings-modal.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/settings-modal/settings-modal.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal is-active\" style=\"z-index: 999;\">\r\n    <div class=\"modal-background\"></div>\r\n    <div class=\"modal-card\">\r\n        <header class=\"modal-card-head\">\r\n            <p class=\"modal-card-title\">Settings</p>\r\n            <button class=\"delete\" aria-label=\"close\" (click)=\"dismiss()\"></button>\r\n        </header>\r\n        <section class=\"modal-card-body\">\r\n            <h2 class=\"subtitle has-text-centered\">Generations :</h2>\r\n            <div class=\"button-row\">\r\n\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" [checked]=\"gens.one\" (change)=\"changeGen('one',$event)\">\r\n                    Gen. 1\r\n                </label>\r\n\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" [checked]=\"gens.two\" (change)=\"changeGen('two',$event)\">\r\n                    Gen. 2\r\n                </label>\r\n\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" [checked]=\"gens.three\" (change)=\"changeGen('three',$event)\">\r\n                    Gen. 3\r\n                </label>\r\n\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" [checked]=\"gens.four\" (change)=\"changeGen('four',$event)\">\r\n                    Gen. 4\r\n                </label>\r\n\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" [checked]=\"gens.five\" (change)=\"changeGen('five',$event)\">\r\n                    Gen. 5\r\n                </label>\r\n\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" [checked]=\"gens.six\" (change)=\"changeGen('six',$event)\">\r\n                    Gen. 6\r\n                </label>\r\n\r\n                <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" [checked]=\"gens.seven\" (change)=\"changeGen('seven',$event)\">\r\n                    Gen. 7\r\n                </label>\r\n            </div>\r\n\r\n            <br />\r\n\r\n            <h2 class=\"subtitle has-text-centered\">Language :</h2>\r\n            <div class=\"control has-text-centered\">\r\n                <label class=\"radio\">\r\n                    <input type=\"radio\" name=\"lang\" [(ngModel)]=\"lang\" value=\"en\">\r\n                    English\r\n                </label>\r\n                <label class=\"radio\">\r\n                    <input type=\"radio\" name=\"lang\" [(ngModel)]=\"lang\" value=\"fr\">\r\n                    French\r\n                </label>\r\n                <label class=\"radio\">\r\n                    <input type=\"radio\" name=\"lang\" [(ngModel)]=\"lang\" value=\"de\">\r\n                    German\r\n                </label>\r\n                <label class=\"radio\">\r\n                    <input type=\"radio\" name=\"lang\" [(ngModel)]=\"lang\" value=\"ja\">\r\n                    Japanese\r\n                </label>\r\n                <label class=\"radio\">\r\n                    <input type=\"radio\" name=\"lang\" [(ngModel)]=\"lang\" value=\"ko\">\r\n                    Korean\r\n                </label>\r\n                <label class=\"radio\">\r\n                    <input type=\"radio\" name=\"lang\" [(ngModel)]=\"lang\" value=\"zh-hans\">\r\n                    Simplified Chinese\r\n                </label>\r\n                <label class=\"radio\">\r\n                    <input type=\"radio\" name=\"lang\" [(ngModel)]=\"lang\" value=\"zh-hant\">\r\n                    Traditional Chinese\r\n                </label>\r\n            </div>\r\n        </section>\r\n        <footer class=\"modal-card-foot\">\r\n            <button class=\"button is-success\" (click)=\"save()\">\r\n                <span class=\"icon\">\r\n                    <fa-icon [icon]=\"faSave\"></fa-icon>\r\n                </span>\r\n                <span>Save</span>\r\n            </button>\r\n            <button class=\"button\" (click)=\"dismiss()\">\r\n                <span class=\"icon\">\r\n                    <fa-icon [icon]=\"faTimes\"></fa-icon>\r\n                </span>\r\n                <span>Cancel</span>\r\n            </button>\r\n        </footer>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"card\">\r\n        <div class=\"card-image\">\r\n            <div>\r\n                <img onmousedown=\"return false\" src=\"assets/pkmn/{{pokemon.id_pokemon}}.png\">\r\n                <i class=\"fa fa-circle-o-notch fa-spin\" style=\"visibility: hidden;\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n            <h1 class=\"title has-text-centered\">\r\n                <span [hidden]=\"!isAnswerDisplayed\"><span>{{pokemon.translate[settingsService.getSettings().lang]}}</span> -\r\n                    N°<span>{{pokemon.id_pokemon}}</span></span>\r\n                <span [hidden]=\"isAnswerDisplayed\">&nbsp;</span>\r\n            </h1>\r\n            <br />\r\n            <div class=\"button-row\">\r\n                <div class=\"field has-addons\">\r\n                    <div class=\"control\">\r\n                        <form (ngSubmit)=\"check()\">\r\n                            <input class=\"input\" type=\"text\" placeholder=\"Nom du Pokémon\" [value]=\"inputPokemon\"\r\n                                (change)=\"changeInputPokemon($event)\" data-test-id=\"input-pkmn-name\">\r\n                            <p class=\"help\" data-test-id=\"message-pkmn-name\">\r\n                                {{messageDisplayed.length > 0 ? messageDisplayed : '&nbsp;' }}</p>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"control\">\r\n                        <button class=\"button  is-success is-outlined\" (click)=\"check()\" data-test-id=\"check-button\">\r\n                            <span class=\"icon\">\r\n                                <fa-icon [icon]=\"faCheck\"></fa-icon>\r\n                            </span>\r\n                            <span>Check</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <button class=\"button is-primary\" (click)=\"refresh()\">\r\n                    <span class=\"icon\">\r\n                        <fa-icon [icon]=\"faSync\"></fa-icon>\r\n                    </span>\r\n                    <span>Refresh</span>\r\n                </button>\r\n                <button class=\"button is-info\" (click)=\"response()\">\r\n                    <span class=\"icon\">\r\n                        <fa-icon [icon]=\"faEye\"></fa-icon>\r\n                    </span>\r\n                    <span>Answer</span>\r\n                </button>\r\n                <button class=\"button is-link\" (click)=\"openModal()\">\r\n                    <span class=\"icon\">\r\n                        <fa-icon [icon]=\"faCog\"></fa-icon>\r\n                    </span>\r\n                    <span>Settings</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<app-settings-modal *ngIf=\"isModalOpen\" (onDismiss)=\"openModal()\"></app-settings-modal>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");




const routes = [
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'front';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _component_settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/settings-modal/settings-modal.component */ "./src/app/component/settings-modal/settings-modal.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
            _component_settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_8__["SettingsModalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/settings-modal/settings-modal.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/component/settings-modal/settings-modal.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-settings-modal .button-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\napp-settings-modal .button-row > * {\n  margin: 0 0.5em;\n}\napp-settings-modal h2 {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NldHRpbmdzLW1vZGFsL0M6XFxQcm9qZWN0XFx3aG9zdGhhdHBva2Vtb25cXGZyb250L3NyY1xcYXBwXFxjb21wb25lbnRcXHNldHRpbmdzLW1vZGFsXFxzZXR0aW5ncy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3NldHRpbmdzLW1vZGFsL3NldHRpbmdzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FOO0FEQ007RUFDRSxlQUFBO0FDQ1I7QURFSTtFQUNFLHFCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvc2V0dGluZ3MtbW9kYWwvc2V0dGluZ3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2V0dGluZ3MtbW9kYWwge1xyXG4gICAgLmJ1dHRvbi1yb3cge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgPiAqIHtcclxuICAgICAgICBtYXJnaW46IDAgMC41ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICB9XHJcbn0iLCJhcHAtc2V0dGluZ3MtbW9kYWwgLmJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmFwcC1zZXR0aW5ncy1tb2RhbCAuYnV0dG9uLXJvdyA+ICoge1xuICBtYXJnaW46IDAgMC41ZW07XG59XG5hcHAtc2V0dGluZ3MtbW9kYWwgaDIge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/component/settings-modal/settings-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/settings-modal/settings-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: SettingsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModalComponent", function() { return SettingsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/settings/settings.service */ "./src/app/service/settings/settings.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let SettingsModalComponent = class SettingsModalComponent {
    constructor(settingsService) {
        this.settingsService = settingsService;
        this.onDismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSave"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
        //Generations
        this.gens = {};
        //Lang
        this.lang = "";
        this.gens = Object.assign({}, this.settingsService.getSettings().gens);
        this.lang = this.settingsService.getSettings().lang;
    }
    ngOnInit() {
    }
    //Handle change generation selected
    changeGen(gen, ev) {
        this.gens[gen] = ev.target.checked;
    }
    //Handle change lang
    changeLang(ev) {
        this.lang = ev.target.value;
    }
    //Dismiss modal
    dismiss() {
        this.onDismiss.emit();
    }
    //Persist settings on save
    save() {
        this.settingsService.editGens(this.gens);
        this.settingsService.editLang(this.lang);
        this.dismiss();
    }
};
SettingsModalComponent.ctorParameters = () => [
    { type: src_app_service_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SettingsModalComponent.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SettingsModalComponent.prototype, "onDismiss", void 0);
SettingsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/settings-modal/settings-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings-modal.component.scss */ "./src/app/component/settings-modal/settings-modal.component.scss")).default]
    })
], SettingsModalComponent);



/***/ }),

/***/ "./src/app/main-page/main-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-main-page {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  min-height: 100%;\n}\napp-main-page .card {\n  border: 3px solid white !important;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n}\napp-main-page .card .card-image {\n  background-image: url(\"/../assets/bg.png\"), linear-gradient(85deg, #67c5e1 0%, #fbfdfe 19%, #abdeee 46%, #71b9d2 56%, #d91010 65%, #df1b17 100%);\n  background-position: top top;\n  background-repeat: no-repeat;\n  margin: 0 auto;\n  width: 960px;\n  height: 540px;\n  background-size: 960px 540px;\n  min-height: 540px;\n}\napp-main-page .card .card-image > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  margin-right: 15%;\n}\napp-main-page .card .card-image > div img {\n  -webkit-filter: brightness(0);\n          filter: brightness(0);\n  margin-left: 16%;\n  z-index: 100;\n  display: none;\n  max-height: 520px;\n  width: 275px;\n  display: block;\n}\napp-main-page .card .card-image > div i {\n  position: absolute;\n  font-size: 5em;\n  color: #17a2b8;\n  left: 250px;\n  visibility: hidden;\n  opacity: 0.3;\n}\napp-main-page .card .card-content h1 {\n  display: inline-block;\n  width: 100%;\n}\napp-main-page .card .card-content .button-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\napp-main-page .card .card-content .button-row > * {\n  margin: 0 0.5em;\n}\napp-main-page .card .card-content h2 {\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL0M6XFxQcm9qZWN0XFx3aG9zdGhhdHBva2Vtb25cXGZyb250L3NyY1xcYXBwXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQUU7RUFDRSxrQ0FBQTtFQUNBLDJFQUFBO0FDRUo7QURESTtFQUNFLGdKQUFBO0VBVUEsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUNOTjtBRE9NO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0xSO0FETVE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNKVjtBRE1RO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNKVjtBRFNNO0VBRUUscUJBQUE7RUFDQSxXQUFBO0FDUlI7QURVTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNSUjtBRFNRO0VBQ0UsZUFBQTtBQ1BWO0FEVU07RUFDRSxxQkFBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1tYWluLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDE1cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gICAgLmNhcmQtaW1hZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2JnLnBuZ1wiKSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICA4NWRlZyxcclxuICAgICAgICAgIHJnYigxMDMsIDE5NywgMjI1KSAwJSxcclxuICAgICAgICAgIHJnYigyNTEsIDI1MywgMjU0KSAxOSUsXHJcbiAgICAgICAgICByZ2IoMTcxLCAyMjIsIDIzOCkgNDYlLFxyXG4gICAgICAgICAgcmdiKDExMywgMTg1LCAyMTApIDU2JSxcclxuICAgICAgICAgIHJnYigyMTcsIDE2LCAxNikgNjUlLFxyXG4gICAgICAgICAgcmdiKDIyMywgMjcsIDIzKSAxMDAlXHJcbiAgICAgICAgKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHRvcDtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHdpZHRoOiA5NjBweDtcclxuICAgICAgaGVpZ2h0OiA1NDBweDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA5NjBweCA1NDBweDtcclxuICAgICAgbWluLWhlaWdodDogNTQwcHg7XHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTYlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDUyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICAgICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgICAgICAgIGxlZnQ6IDI1MHB4O1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5idXR0b24tcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgID4gKiB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJhcHAtbWFpbi1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5hcHAtbWFpbi1wYWdlIC5jYXJkIHtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDE1cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xufVxuYXBwLW1haW4tcGFnZSAuY2FyZCAuY2FyZC1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvYmcucG5nXCIpLCBsaW5lYXItZ3JhZGllbnQoODVkZWcsICM2N2M1ZTEgMCUsICNmYmZkZmUgMTklLCAjYWJkZWVlIDQ2JSwgIzcxYjlkMiA1NiUsICNkOTEwMTAgNjUlLCAjZGYxYjE3IDEwMCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDk2MHB4O1xuICBoZWlnaHQ6IDU0MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDk2MHB4IDU0MHB4O1xuICBtaW4taGVpZ2h0OiA1NDBweDtcbn1cbmFwcC1tYWluLXBhZ2UgLmNhcmQgLmNhcmQtaW1hZ2UgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbn1cbmFwcC1tYWluLXBhZ2UgLmNhcmQgLmNhcmQtaW1hZ2UgPiBkaXYgaW1nIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApO1xuICBtYXJnaW4tbGVmdDogMTYlO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1heC1oZWlnaHQ6IDUyMHB4O1xuICB3aWR0aDogMjc1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYXBwLW1haW4tcGFnZSAuY2FyZCAuY2FyZC1pbWFnZSA+IGRpdiBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDVlbTtcbiAgY29sb3I6ICMxN2EyYjg7XG4gIGxlZnQ6IDI1MHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDAuMztcbn1cbmFwcC1tYWluLXBhZ2UgLmNhcmQgLmNhcmQtY29udGVudCBoMSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5hcHAtbWFpbi1wYWdlIC5jYXJkIC5jYXJkLWNvbnRlbnQgLmJ1dHRvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmFwcC1tYWluLXBhZ2UgLmNhcmQgLmNhcmQtY29udGVudCAuYnV0dG9uLXJvdyA+ICoge1xuICBtYXJnaW46IDAgMC41ZW07XG59XG5hcHAtbWFpbi1wYWdlIC5jYXJkIC5jYXJkLWNvbnRlbnQgaDIge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _service_similarity_similarity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/similarity/similarity.service */ "./src/app/service/similarity/similarity.service.ts");
/* harmony import */ var _service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/settings/settings.service */ "./src/app/service/settings/settings.service.ts");





let MainPageComponent = class MainPageComponent {
    constructor(similarityService, settingsService) {
        this.similarityService = similarityService;
        this.settingsService = settingsService;
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSync"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEye"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
        this.faAngleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAngleUp"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
        //Input value
        this.inputPokemon = "";
        //Pokemon infos
        this.pokemon = { "id_pokemon": 25, "translate": { "fr": "Pikachu", "en": null, "de": null, "ja": null, "ko": null, "ru": null, "zh-hans": null, "zh-hant": null }, "generation": 1, "is_enable": true };
        this.isAnswerDisplayed = false;
        this.message = {
            found: "Trouvé !",
            close: "Si proche !",
            quiteClose: "Assez proche",
            notClose: "Si loin...",
            empty: "Vous devez entrer quelque chose !"
        };
        //Message displayed by score
        this.messageDisplayed = "";
        this.isModalOpen = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    //Handle chnage for pokemon input
    changeInputPokemon(ev) {
        this.inputPokemon = ev.target.value;
    }
    //Check if value is okay
    check() {
        let score = this.similarityService.getScore(this.pokemon.translate[this.settingsService.getSettings().lang], this.inputPokemon);
        if (score < 3) {
            this.messageDisplayed = this.message.found;
            this.isAnswerDisplayed = true;
        }
        else if (score < 5) {
            this.messageDisplayed = this.message.close;
        }
        else if (score < 7) {
            this.messageDisplayed = this.message.quiteClose;
        }
        else {
            this.messageDisplayed = this.message.notClose;
        }
    }
    //Refresh pokemon
    refresh() {
        this.isAnswerDisplayed = false;
        this.messageDisplayed = "";
        this.inputPokemon = "";
    }
    //Show response
    response() {
        this.isAnswerDisplayed = true;
    }
    openModal() {
        this.isModalOpen = !this.isModalOpen;
    }
};
MainPageComponent.ctorParameters = () => [
    { type: _service_similarity_similarity_service__WEBPACK_IMPORTED_MODULE_3__["SimilarityService"] },
    { type: _service_settings_settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"] }
];
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.scss */ "./src/app/main-page/main-page.component.scss")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/service/settings/settings.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/settings/settings.service.ts ***!
  \******************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsService = class SettingsService {
    constructor() {
        //Generations
        this.gens = { one: true, two: true, three: true, four: true, five: true, six: true, seven: true };
        //Lang
        this.lang = "fr";
    }
    getSettings() {
        return {
            gens: this.gens,
            lang: this.lang
        };
    }
    editLang(newLang) {
        this.lang = newLang;
    }
    editGens(newGens) {
        this.gens = newGens;
    }
};
SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingsService);



/***/ }),

/***/ "./src/app/service/similarity/similarity.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/similarity/similarity.service.ts ***!
  \**********************************************************/
/*! exports provided: SimilarityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarityService", function() { return SimilarityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SimilarityService = class SimilarityService {
    constructor() { }
    //Get similirity between two strings: Levenshtein distance
    getScore(s1, s2) {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
        let costs = [];
        for (let i = 0; i <= s1.length; i++) {
            let lastValue = i;
            for (let j = 0; j <= s2.length; j++) {
                if (i == 0) {
                    costs[j] = j;
                }
                else {
                    if (j > 0) {
                        let newValue = costs[j - 1];
                        if (s1.charAt(i - 1) != s2.charAt(j - 1))
                            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                        costs[j - 1] = lastValue;
                        lastValue = newValue;
                    }
                }
            }
            if (i > 0)
                costs[s2.length] = lastValue;
        }
        return costs[s2.length];
    }
};
SimilarityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SimilarityService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Project\whosthatpokemon\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map