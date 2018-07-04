(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component1"],{

/***/ "./components/component1.ractive.html":
/*!********************************************!*\
  !*** ./components/component1.ractive.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Ractive.extend({
    isolated: false,
    template: { v: 4, t: [{ t: 7, e: "div", m: [{ t: 13, n: "class", f: "col-lg-6", g: 1 }], f: [{ t: 4, f: [{ t: 8, r: "loading" }], n: 50, x: { r: ["loaded"], s: "!_0" } }, { t: 4, f: [{ t: 7, e: "h3", f: ["Component 1"] }, " ", { t: 7, e: "p", f: ["Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum."] }, " ", { t: 7, e: "h4", f: ["Subheading"] }, " ", { t: 7, e: "p", f: ["Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum."] }, " ", { t: 7, e: "h4", f: ["Subheading"] }, " ", { t: 7, e: "p", f: ["Maecenas sed diam eget risus varius blandit sit amet non magna."] }], n: 51, l: 1 }] }], e: { "!_0": function _0(_) {
                return !_;
            } } },
    data: function data() {
        return {
            loaded: false
        };
    },
    oninit: function oninit() {
        var _this = this;

        $.get("http://query.yahooapis.com/v1/public/yql?q=SELECT * FROM weather.forecast WHERE woeid=950519 AND u='c'&format=json&diagnostics=true&callback=").then(function (data) {
            _this.set('loaded', true);
        });
    },
    oncomplete: function oncomplete() {
        console.log('Component 1 rendered');
    }
});

/***/ })

}]);