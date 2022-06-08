"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);

/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-05-12 02:14:52
 * @LastEditors: cejay
 * @LastEditTime: 2022-06-08 22:16:45
 */






let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-05-12 02:14:52
 * @LastEditors: cejay
 * @LastEditTime: 2022-06-08 23:22:30
 */

let Tab1Page = class Tab1Page {
    constructor() {
        this.card1_typeString = `{
    "ExactInputSingleParams": {
        "tokenIn": "address",
        "tokenOut": "address",
        "fee": "uint24",
        "recipient": "address",
        "deadline": "uint256",
        "amountIn": "uint256",
        "amountOutMinimum": "uint256",
        "sqrtPriceLimitX96": "uint160"
    }
}`;
        /*
        
        struct ExactInputSingleParams {
            address tokenIn;
            address tokenOut;
            uint24 fee;
            address recipient;
            uint256 deadline;
            uint256 amountIn;
            uint256 amountOutMinimum;
            uint160 sqrtPriceLimitX96;
        }
        {
            "ExactInputSingleParams": {
                "tokenIn": "address",
                "tokenOut": "address",
                "fee": "uint24",
                "recipient": "address",
                "deadline": "uint256",
                "amountIn": "uint256",
                "amountOutMinimum": "uint256",
                "sqrtPriceLimitX96": "uint160"
            }
        }
        
        */
        this.card1_hexString = `0x414bf3890000000000000000000000006dea81c8171d0ba574754ef6f8b412f2ed88c54d000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000000000000000bb8000000000000000000000000bf5ae133b9a0fc1a07952a7df2afa21f7f69ef580000000000000000000000000000000000000000000000000000000062a09f7b0000000000000000000000000000000000000000000000846a60492ca1c0000000000000000000000000000000000000000000000000000015f3968ba1a301000000000000000000000000000000000000000000000000000000000000000000`;
        this.card1_method = '';
        //https://www.4byte.directory/signatures/?bytes4_signature=0x414bf38
        this.card1_decode = '';
    }
    ngOnInit() {
        this.Fun_card1_decode();
    }
    open4Byte(bytes4_signature) {
        // open in new tab
        window.open(`https://www.4byte.directory/signatures/?bytes4_signature=${bytes4_signature}`, '_blank');
    }
    Fun_card1_decode() {
        const web3 = new Web3();
        this.card1_method = '';
        this.card1_decode = '';
        this.card1_typeString = this.card1_typeString.trim();
        this.card1_hexString = this.card1_hexString.trim();
        if (this.card1_hexString.length >= 10) {
            this.card1_method = this.card1_hexString.substring(0, 10);
        }
        let typeString = '';
        if (this.card1_typeString.indexOf(' ') > 0) {
            //object
            let obj = null;
            try {
                obj = JSON.parse(this.card1_typeString);
            }
            catch (error) {
                this.card1_decode = error.message;
                return;
            }
            typeString = obj;
        }
        else {
            //string
            typeString = this.card1_typeString;
        }
        try {
            const decoded = web3.eth.abi.decodeParameter(typeString, '0x' + this.card1_hexString.substring(10, this.card1_hexString.length));
            this.card1_decode = JSON.stringify(decoded);
        }
        catch (error) {
            this.card1_decode = error.message;
        }
    }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<!--\n * @Description: \n * @Version: 1.0\n * @Autor: z.cejay@gmail.com\n * @Date: 2022-05-12 02:14:52\n * @LastEditors: cejay\n * @LastEditTime: 2022-06-08 23:06:50\n-->\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>工具</ion-card-subtitle>\n      <ion-card-title>解析合约调用的结构体</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">结构体</ion-label>\n        <ion-textarea (change)=\"Fun_card1_decode()\" rows=\"10\" placeholder=\"可以输入结构体、uint256、string...\"\n          [(ngModel)]=\"card1_typeString\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">HEX 值</ion-label>\n        <ion-textarea (change)=\"Fun_card1_decode()\" rows=\"10\" placeholder=\"0x....\" [(ngModel)]=\"card1_hexString\">\n        </ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          调用函数:</ion-label>\n        <!-- open new tab -->\n        <ion-label color=\"tertiary\" style=\"text-decoration:underline;cursor: pointer;\"\n          (click)=\"open4Byte(card1_method)\">\n          {{card1_method}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">调用解析</ion-label>\n        <ion-textarea rows=\"10\" placeholder=\"调用解析\" [ngModel]=\"card1_decode\"></ion-textarea>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map