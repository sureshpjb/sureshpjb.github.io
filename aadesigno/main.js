(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Rtr":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/home-page/home-page.component.ts ***!
  \***************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "TaHA");




class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.initSwiperContainer();
    }
    initSwiperContainer() {
        swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_2__["Autoplay"]]);
        let s1 = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.swiper1', {
            speed: 1000,
            direction: 'vertical'
        });
        let s2 = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.swiper2', {
            speed: 2500,
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            }
        });
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        jquery__WEBPACK_IMPORTED_MODULE_1__("div.swiper-slide").width(winWidth).height(winHeight);
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 13, vars: 0, consts: [[1, "page-content"], [1, "swiper1", "swiper-container"], [1, "swiper-wrapper"], [1, "swiper-slide"], [1, "swiper2", "swiper-container"], [1, "swiper-slide", 2, "background-image", "url(/assets/images/image1.jpeg)"], [1, "swiper-slide", 2, "background-image", "url(/assets/images/image2.jpg)"], [1, "swiper-slide", 2, "background-image", "url(/assets/images/image3.jpeg)"], [1, "swiper-slide", 2, "background-image", "url(/assets/images/image2_1.jpg)"], [1, "swiper-slide", 2, "background-image", "url(/assets/images/image3_1.jpg)"], [1, "swiper-slide", 2, "background-image", "url(/assets/images/image4_1.jpg)"], [1, "swiper-slide", 2, "background-image", "url(/assets/images/image5_1.jpg)"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-content[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-left: 0;\n  vertical-align: top;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  background: #fff;\n}\n\n.swiper-container[_ngcontent-%COMP%] {\n  cursor: grab;\n}\n\n.swiper-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-attachment: scroll;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/suresh/suresh/projects/aadesigno/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "C9Sg":
/*!*********************************************************************!*\
  !*** ./src/app/modules/videos/videos-page/videos-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideosPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageComponent", function() { return VideosPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VideosPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideosPageComponent.ɵfac = function VideosPageComponent_Factory(t) { return new (t || VideosPageComponent)(); };
VideosPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosPageComponent, selectors: [["app-videos-page"]], decls: 2, vars: 0, template: function VideosPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "videos-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb3MtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-videos-page',
                templateUrl: './videos-page.component.html',
                styleUrls: ['./videos-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JZdV":
/*!***************************************************************************!*\
  !*** ./src/app/modules/services/services-page/services-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: ServicesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageComponent", function() { return ServicesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ServicesPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesPageComponent.ɵfac = function ServicesPageComponent_Factory(t) { return new (t || ServicesPageComponent)(); };
ServicesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesPageComponent, selectors: [["app-services-page"]], decls: 2, vars: 0, template: function ServicesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "services-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services-page',
                templateUrl: './services-page.component.html',
                styleUrls: ['./services-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NTrz":
/*!************************************************************************!*\
  !*** ./src/app/modules/aboutus/aboutus-page/aboutus-page.component.ts ***!
  \************************************************************************/
/*! exports provided: AboutusPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageComponent", function() { return AboutusPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutusPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutusPageComponent.ɵfac = function AboutusPageComponent_Factory(t) { return new (t || AboutusPageComponent)(); };
AboutusPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutusPageComponent, selectors: [["app-aboutus-page"]], decls: 2, vars: 0, template: function AboutusPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aboutus-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dHVzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus-page',
                templateUrl: './aboutus-page.component.html',
                styleUrls: ['./aboutus-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PcjU":
/*!***********************************************************!*\
  !*** ./src/app/modules/footer/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A9 AA Designo 2020. All rights reserved. By Samanvi Solutions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SRDi":
/*!***************************************************************************!*\
  !*** ./src/app/modules/projects/projects-page/projects-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function() { return ProjectsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjectsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsPageComponent.ɵfac = function ProjectsPageComponent_Factory(t) { return new (t || ProjectsPageComponent)(); };
ProjectsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsPageComponent, selectors: [["app-projects-page"]], decls: 2, vars: 0, template: function ProjectsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-page',
                templateUrl: './projects-page.component.html',
                styleUrls: ['./projects-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header/header/header.component */ "X9oi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/footer/footer/footer.component */ "PcjU");





class AppComponent {
    ngOnInit() {
        //$('body').css('overflow', 'hidden');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_modules_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _modules_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "X7zM":
/*!***************************************************************!*\
  !*** ./src/app/modules/blog/blog-page/blog-page.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageComponent", function() { return BlogPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BlogPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogPageComponent.ɵfac = function BlogPageComponent_Factory(t) { return new (t || BlogPageComponent)(); };
BlogPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogPageComponent, selectors: [["app-blog-page"]], decls: 2, vars: 0, template: function BlogPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-page',
                templateUrl: './blog-page.component.html',
                styleUrls: ['./blog-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "X9oi":
/*!***********************************************************!*\
  !*** ./src/app/modules/header/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["toggleMenuIcon"];
const _c1 = ["navbarLinks"];
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    toggleMenu(event) {
        this.toggleMenuIcon.nativeElement.classList.toggle("change");
        this.navbarLinks.nativeElement.classList.toggle("invisible");
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toggleMenuIcon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbarLinks = _t.first);
    } }, decls: 34, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", "navbar-total"], ["href", "/", 1, "navbar-brand"], ["src", "/assets/images/logo.png", "alt", "Logo", 2, "width", "88px", "height", "100px"], [1, "collapse", "navbar-collapse", "navbar-links", "invisible"], ["navbarLinks", ""], [1, "navbar-nav", "text-uppercase"], ["href", "/", 1, "nav-item", "nav-link", "text-white", "active"], [1, "sr-only"], ["href", "/aboutus", 1, "nav-item", "nav-link", "text-white"], ["href", "/team", 1, "nav-item", "nav-link", "text-white"], ["href", "/projects", 1, "nav-item", "nav-link", "text-white"], ["href", "/services", 1, "nav-item", "nav-link", "text-white"], ["href", "/furniture", 1, "nav-item", "nav-link", "text-white"], ["href", "/videos", 1, "nav-item", "nav-link", "text-white"], ["href", "/news", 1, "nav-item", "nav-link", "text-white"], ["href", "/blog", 1, "nav-item", "nav-link", "text-white"], ["href", "/contactus", 1, "nav-item", "nav-link", "text-white"], [1, "form-inline", "my-2", "my-lg-0"], [1, "container", 3, "click"], ["toggleMenuIcon", ""], [1, "bar1"], [1, "bar2"], [1, "bar3"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_29_listener($event) { return ctx.toggleMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 4px;\n  background-color: #fff;\n  margin: 6px 0;\n  transition: 0.4s;\n  border-radius: 5px;\n}\n\n.change[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: rotate(-45deg) translate(-7px, 8px);\n}\n\n.change[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.change[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: rotate(45deg) translate(-7px, -8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUVFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUVFLDhDQUE4QztBQUNoRCIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhcjEsIC5iYXIyLCAuYmFyMyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiA2cHggMDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2hhbmdlIC5iYXIxIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtN3B4LCA4cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtN3B4LCA4cHgpO1xufVxuXG4uY2hhbmdlIC5iYXIyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNoYW5nZSAuYmFyMyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtN3B4LCAtOHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtN3B4LCAtOHB4KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, { toggleMenuIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['toggleMenuIcon']
        }], navbarLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navbarLinks']
        }] }); })();


/***/ }),

/***/ "YA1G":
/*!***************************************************************!*\
  !*** ./src/app/modules/team/team-page/team-page.component.ts ***!
  \***************************************************************/
/*! exports provided: TeamPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageComponent", function() { return TeamPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TeamPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamPageComponent.ɵfac = function TeamPageComponent_Factory(t) { return new (t || TeamPageComponent)(); };
TeamPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamPageComponent, selectors: [["app-team-page"]], decls: 2, vars: 0, template: function TeamPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "team-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-page',
                templateUrl: './team-page.component.html',
                styleUrls: ['./team-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YI0x":
/*!******************************************************************************!*\
  !*** ./src/app/modules/furniture/furniture-page/furniture-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: FurniturePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurniturePageComponent", function() { return FurniturePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FurniturePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
FurniturePageComponent.ɵfac = function FurniturePageComponent_Factory(t) { return new (t || FurniturePageComponent)(); };
FurniturePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FurniturePageComponent, selectors: [["app-furniture-page"]], decls: 2, vars: 0, template: function FurniturePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "furniture-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdXJuaXR1cmUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FurniturePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-furniture-page',
                templateUrl: './furniture-page.component.html',
                styleUrls: ['./furniture-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home/home-page/home-page.component */ "+Rtr");
/* harmony import */ var _modules_aboutus_aboutus_page_aboutus_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/aboutus/aboutus-page/aboutus-page.component */ "NTrz");
/* harmony import */ var _modules_team_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/team/team-page/team-page.component */ "YA1G");
/* harmony import */ var _modules_projects_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/projects/projects-page/projects-page.component */ "SRDi");
/* harmony import */ var _modules_services_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/services/services-page/services-page.component */ "JZdV");
/* harmony import */ var _modules_furniture_furniture_page_furniture_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/furniture/furniture-page/furniture-page.component */ "YI0x");
/* harmony import */ var _modules_videos_videos_page_videos_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/videos/videos-page/videos-page.component */ "C9Sg");
/* harmony import */ var _modules_news_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/news/news-page/news-page.component */ "oxuL");
/* harmony import */ var _modules_blog_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/blog/blog-page/blog-page.component */ "X7zM");
/* harmony import */ var _modules_contactus_contactus_page_contactus_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/contactus/contactus-page/contactus-page.component */ "kvQy");
/* harmony import */ var _modules_header_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/header/header/header.component */ "X9oi");
/* harmony import */ var _modules_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/footer/footer/footer.component */ "PcjU");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
        _modules_aboutus_aboutus_page_aboutus_page_component__WEBPACK_IMPORTED_MODULE_5__["AboutusPageComponent"],
        _modules_team_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_6__["TeamPageComponent"],
        _modules_projects_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsPageComponent"],
        _modules_services_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_8__["ServicesPageComponent"],
        _modules_furniture_furniture_page_furniture_page_component__WEBPACK_IMPORTED_MODULE_9__["FurniturePageComponent"],
        _modules_videos_videos_page_videos_page_component__WEBPACK_IMPORTED_MODULE_10__["VideosPageComponent"],
        _modules_news_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_11__["NewsPageComponent"],
        _modules_blog_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_12__["BlogPageComponent"],
        _modules_contactus_contactus_page_contactus_page_component__WEBPACK_IMPORTED_MODULE_13__["ContactusPageComponent"],
        _modules_header_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _modules_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                    _modules_aboutus_aboutus_page_aboutus_page_component__WEBPACK_IMPORTED_MODULE_5__["AboutusPageComponent"],
                    _modules_team_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_6__["TeamPageComponent"],
                    _modules_projects_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsPageComponent"],
                    _modules_services_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_8__["ServicesPageComponent"],
                    _modules_furniture_furniture_page_furniture_page_component__WEBPACK_IMPORTED_MODULE_9__["FurniturePageComponent"],
                    _modules_videos_videos_page_videos_page_component__WEBPACK_IMPORTED_MODULE_10__["VideosPageComponent"],
                    _modules_news_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_11__["NewsPageComponent"],
                    _modules_blog_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_12__["BlogPageComponent"],
                    _modules_contactus_contactus_page_contactus_page_component__WEBPACK_IMPORTED_MODULE_13__["ContactusPageComponent"],
                    _modules_header_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _modules_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kvQy":
/*!******************************************************************************!*\
  !*** ./src/app/modules/contactus/contactus-page/contactus-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: ContactusPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageComponent", function() { return ContactusPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "TaHA");
/* harmony import */ var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/footer/footer.component */ "PcjU");





class ContactusPageComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.initSwiperContainer();
    }
    initSwiperContainer() {
        let s1 = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.contactus-swiper', {
            speed: 1000,
            direction: 'vertical'
        });
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        jquery__WEBPACK_IMPORTED_MODULE_1__("div.swiper-slide").width(winWidth).height(winHeight);
    }
}
ContactusPageComponent.ɵfac = function ContactusPageComponent_Factory(t) { return new (t || ContactusPageComponent)(); };
ContactusPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactusPageComponent, selectors: [["app-contactus-page"]], decls: 43, vars: 0, consts: [[1, "page-content"], [1, "contactus-swiper", "swiper-container"], [1, "swiper-wrapper"], [1, "swiper-slide", 2, "background-image", "url(/assets/images/contactus.jpeg)"], ["id", "page-content"], [1, "container", "mt-5"], [1, "text-center", "pb-4"], [1, "text-center", "mb-0"], [1, "row"], [1, "col"], [1, "col-8"], [1, "contactus-image"], ["src", "/assets/images/contactus1.jpg", "alt", "", 1, "contactus-map-img"], [1, "text-center", "mt-5"], [1, "container"], [1, "col-6"], [1, "mt-2"], ["method", "post", "action", "", "name", "contactform", "id", "contactform"], ["type", "text", "placeholder", "Name", "required", "", 1, "form-control"], ["type", "email", "placeholder", "E-mail", "required", "", 1, "form-control", "mt-2"], ["placeholder", "Message", "required", "", 1, "form-control", "mt-2"], ["type", "submit", 1, "float-left", "btn", "btn-primary", "mt-2"], [1, "text-center", "mt-5", "mb-5"]], template: function ContactusPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Office #101, Makeen Building, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Airport Road, Garhoud, Dubai, UAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ph: +9714 2 999 660");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fax: +9714 2 999 661");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "info@akdesigno.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".contactus-map-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3R1cy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJjb250YWN0dXMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3R1cy1tYXAtaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactus-page',
                templateUrl: './contactus-page.component.html',
                styleUrls: ['./contactus-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oxuL":
/*!***************************************************************!*\
  !*** ./src/app/modules/news/news-page/news-page.component.ts ***!
  \***************************************************************/
/*! exports provided: NewsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageComponent", function() { return NewsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NewsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsPageComponent.ɵfac = function NewsPageComponent_Factory(t) { return new (t || NewsPageComponent)(); };
NewsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsPageComponent, selectors: [["app-news-page"]], decls: 2, vars: 0, template: function NewsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "news-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-page',
                templateUrl: './news-page.component.html',
                styleUrls: ['./news-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_aboutus_aboutus_page_aboutus_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/aboutus/aboutus-page/aboutus-page.component */ "NTrz");
/* harmony import */ var _modules_blog_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/blog/blog-page/blog-page.component */ "X7zM");
/* harmony import */ var _modules_contactus_contactus_page_contactus_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contactus/contactus-page/contactus-page.component */ "kvQy");
/* harmony import */ var _modules_furniture_furniture_page_furniture_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/furniture/furniture-page/furniture-page.component */ "YI0x");
/* harmony import */ var _modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/home/home-page/home-page.component */ "+Rtr");
/* harmony import */ var _modules_news_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/news/news-page/news-page.component */ "oxuL");
/* harmony import */ var _modules_projects_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/projects/projects-page/projects-page.component */ "SRDi");
/* harmony import */ var _modules_services_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/services/services-page/services-page.component */ "JZdV");
/* harmony import */ var _modules_team_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/team/team-page/team-page.component */ "YA1G");
/* harmony import */ var _modules_videos_videos_page_videos_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/videos/videos-page/videos-page.component */ "C9Sg");














const routes = [
    { path: '', component: _modules_home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"] },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'aboutus', component: _modules_aboutus_aboutus_page_aboutus_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutusPageComponent"] },
    { path: 'team', component: _modules_team_team_page_team_page_component__WEBPACK_IMPORTED_MODULE_10__["TeamPageComponent"] },
    { path: 'projects', component: _modules_projects_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsPageComponent"] },
    { path: 'services', component: _modules_services_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_9__["ServicesPageComponent"] },
    { path: 'furniture', component: _modules_furniture_furniture_page_furniture_page_component__WEBPACK_IMPORTED_MODULE_5__["FurniturePageComponent"] },
    { path: 'videos', component: _modules_videos_videos_page_videos_page_component__WEBPACK_IMPORTED_MODULE_11__["VideosPageComponent"] },
    { path: 'news', component: _modules_news_news_page_news_page_component__WEBPACK_IMPORTED_MODULE_7__["NewsPageComponent"] },
    { path: 'blog', component: _modules_blog_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_3__["BlogPageComponent"] },
    { path: 'contactus', component: _modules_contactus_contactus_page_contactus_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactusPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map