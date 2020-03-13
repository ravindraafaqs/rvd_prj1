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
/* harmony default export */ __webpack_exports__["default"] = (" <table bgcolor=\"#ffffff\" role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n\t<!-- <tr>\n\t<td align=\"center\" style=\"padding:5px 10px 0 15px; text-align: center; background-color: #fff;\"><img src=\"https://ads.afaqs.com/www/images/40c5bdf7c49441820307bc70efa2375d.jpg\" alt=\"alt_text\" border=\"0\" align=\"center\" style=\"width: 100%; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; margin: auto;\" ></td>\n\t</tr> -->\n <tr>\n <td width=\"100%\" height=\"25\" style=\"font-size: 12px; line-height: 16px; background-color:#212741; text-align: right;\">\n <app-top></app-top>\n</td>\n</tr>\n\n<tr>\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n<app-header></app-header>\n</table>\n</tr>\n\n<tr>\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n<app-footer></app-footer>\n</table>\n</tr>\n\n</table>\n\n\n<!--  <app-bottom></app-bottom>  -->\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom/bottom.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bottom/bottom.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<tr bgcolor=\"#ffffff\" dir=\"ltr\" align=\"center\" valign=\"top\" *ngFor = \"let data of fNewsData | slice:1:2; let ind=index;\" >\n<td  width=\"100%\" style=\"padding: 10px; background: #fff; width: 100%; \" >\n<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" >\n\n<tr bgcolor=\"#ffffff\" style=\"border-radius: 10px; border-bottom: 1px solid #b6b5b5;\">                      \n<td border=\"0\" width=\"30%\" class=\"stack-column-center\">\n\t<table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n\t\t<tr>\n\t\t\t<td dir=\"ltr\" valign=\"top\" style=\"padding: 10px 20px;\"><a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none; color: #555555;\"><img src=\"{{data.story.myImages}}\" width=\"150\" height=\"99\" alt=\"alt_text\" border=\"0\" class=\"center-on-narrow\" style=\"width: 100%; height: auto; background: #dddddd; border:1px grey solid;\"></a>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n</td>\n\n<!-- <img [src]=\"https://gumlet.assettype.com/data.story.myImages\"> -->\n\n <td width=\"70%\" class=\"stack-column-center\">\n\t<table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n\t\t<tr>\t\t\t\t\t\t\n\t\t\t<td dir=\"ltr\" valign=\"top\" style=\"font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 10px; text-align: left;\" class=\"center-on-narrow\">\n\t\t\t<a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h2 style=\"margin: 0 0 10px 0; font-family: sans-serif; font-size: 18px; line-height: 21px; color: #333333; font-weight: bold;\">{{data.story.headline}}</h2></a>\n\t\t\t<p style=\"margin: 0 10px 10px 0;\">{{data.story.subheadline}}</p></td>\n\t\t</tr>\n\t</table>\n</td>\n</tr>\n\n</table>\n</td>\n</tr>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/date/date.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/date/date.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ myDate | date:'EEEE'}} {{ myDate | date:'dd'}} {{ myDate | date:'MMM'}} {{ myDate | date:'yyyy'}}\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <tr>\n\t\t\t<td bgcolor=\"#ffffff\" align=\"center\" valign=\"top\" style=\" padding: 5px; margin: 0!important;\">\n                <table role=\"presentation\"  cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                    <tr>\n                        <td class=\"stack-column-center\" style=\"padding-bottom:10px;\">\n                        <app-people></app-people>\n                        </td>\n\n                        <td class=\"stack-column-center\" style=\"padding-bottom:10px;\">\n                        <app-showcase></app-showcase>\t\t\t\t\n                        </td> \n                    </tr>\n                </table>\n            </td>\n        </tr>\n\n       <!--  <tr>\n            <td class=\"stack-column-center\" style=\"background-color:#212741; padding: 5px;\">\n               <table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                    <tr>\n                        <td>\n                            <p style=\"margin: 5px ; font-size: 18px; line-height: 20px;  color: #fff;  text-align: center;\">Subscribe to our Telegram channel for latest news updates </p>\n                        </td>\n                        <td>\n                            <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=daily_telegram:{{currentDate | date:'yyyy-MM-dd'}}&u=https://t.me/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/tt.png\" class=\"center-on-narrow\" style=\"width: 60px; padding-right:5px;\" /></a>\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr> -->\n\n        <tr>\n            <td width=\"100%\" height=\"20\" style=\"font-size: 13px; line-height: 15px; background-color: #000; text-align: center;\" >\n            <p style=\"margin: 5px ; color: #fff;\">Please add afaqs! newsletter to your Address Book so this newsletter doesn't get filtered into your bulk folder.</p>\n\t\t\t</td>\n        </tr>\n\n        <tr>\n            <td width=\"100%\" height=\"auto\" style=\"font-size: 13px; line-height: 15px; background-color: #ffffff; \" >\n          \t<p width=\"100%\" height=\"auto\"  style=\"margin: 5px ; color: #000; text-align:center;\"><a href=\"https://www.afaqs.com/labs/main/mailer-help.html\" style=\"text-decoration:none;\">click here </a>to know how to add our e-newsletters to your safe sender list<br />\n\t\t\tIf you can't see the mailer, please <a href=\"http://images1.afaqsnewsletter.com/mailers/daily/{{currentDate | date:'yyyy/MM/dd'}}/index.html\" target=\"_blank\" style=\"text-decoration:none;\">click here</a><br />\n\t\t\tIf you do not wish to receive any such special mailers, <a href=\"http://images1.afaqsnewsletter.com/mailers/main/user-unsubscribe.html\" style=\"text-decoration:none;\">click here </a>\n\t\t\t</p>\t\n\t\t\t</td> \n        </tr>\n        <tr>\n            <td style=\"border-bottom: 10px grey solid;\">\n                <img src=\"http://images1.afaqsnewsletter.com/cgi-bin/counter/m_count?emailID=<%[email]%>&amp;mailerID=daily_{{currentDate | date:'yyyy-MM-dd'}}\" alt=\"\" width=\"1\" height=\"1\" />\n            </td>\n            \n        </tr>\n            \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <tr bgcolor=\"white\" width=\"650\" *ngFor = \"let data of fNewsData | slice:0:1; let ind=index;\">\n\t<td>\n\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n\t\t\t\t<tr>\t\t\t\n\t\t\t\t\t<td bgcolor=\"#ffffff\" align=\"center\" style=\"padding: 10px; \">\n\t\t\t\t\t\t<a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=620&dpr=1&mode=fill&fill=solid&fill-color=ffffff'\" width=\"620\" height=\"350\" alt=\"alt_text\" border=\"0\" align=\"center\" style=\"width: 100%; max-width: 620px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; margin: auto; border:1px #cccccc solid;\" class=\"g-img\"></a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"#ffffff\" style=\"padding: 20px 25px 10px ; text-align: left;\">\n\t\t\t\t\t\t<a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h1 style=\"margin: 0; font-family: sans-serif; font-size: 24px; line-height: 27px; color: #333333; font-weight: normal;\">{{data.story.headline}}</h1></a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"#ffffff\" style=\"padding: 0 25px 15px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: left;\">\n\t\t\t\t\t\t<p style=\"margin: 0;\">{{data.story.subheadline}}</p>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"#ffffff\" style=\"padding-top:10px;\">\n\t\t\t\t\t\t<hr width=\"95%\" size=\"1\" noshade=\"noshade\" color=\"#b6b5b5\" >\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t</table>\n\t</td>\n</tr>\n\n<!-- <tr bgcolor=\"white\" width=\"650\" *ngFor = \"let data of fNewsData | slice:0:1; let ind=index;\">\n    <td>\n        <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\" margin: auto;\" class=\"email-container\">\n            <tr>\n                <td align=\"center\" valign=\"top\" style=\"padding-top: 10px; \"><a href=\"https://www.vdonxt.com/?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/email/vdo-17-jan.gif\" alt=\"alt_text\" align=\"center\" style=\"width: 98%; max-width:468px; height: auto; background: #dddddd; color: #555555; margin: auto; border:0px grey solid;\"></a>\n                </td>\n            </tr>\n            <tr>\n                <td bgcolor=\"#ffffff\" style=\"padding-top:10px;\">\n                    <hr width=\"95%\" size=\"1\" noshade=\"noshade\" color=\"#b6b5b5\" >\n                </td>\n            </tr>\n        </table>\n    </td>\n</tr> -->\n\n <tr bgcolor=\"#ffffff\" dir=\"ltr\" align=\"center\" valign=\"top\" *ngFor=\"let data of fNewsData | slice:1:8; let ind=index;\">\n    <td width=\"100%\" style=\"padding: 10px; background: #fff; width: 100%; \">\n        <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n\n            <tr bgcolor=\"#ffffff\" style=\"border-radius: 10px; border-bottom: 1px solid #b6b5b5;\">\n                <td border=\"0\" width=\"30%\" class=\"stack-column-center\">\n                    <table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                        <tr>\n                            <td dir=\"ltr\" valign=\"top\" style=\"padding: 10px;\">\n                                <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none; color: #555555;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=200&h=112&format=jpg&dpr=2&mode=fill&fill=solid&fill-color=ffffff'\" width=\"180\" alt=\"alt_text\" border=\"0\" class=\"center-on-narrow\" style=\"width: 100%; height: auto; background: #dddddd; border:1px grey solid;\"></a>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n\n                <td width=\"70%\" class=\"stack-column-center\">\n                    <table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                        <tr>\n                            <td dir=\"ltr\" valign=\"top\" style=\"font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 12px; text-align: left;\" class=\"center-on-narrow\">\n                                <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h2 style=\"margin: 0 0 10px 0; font-family: sans-serif; font-size: 18px; line-height: 21px; color: #333333; font-weight: bold;\">{{data.story.headline}}</h2></a>\n                                <p style=\"margin: 0 10px 10px 0;\">{{data.story.subheadline}}</p>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n    </td>\n</tr> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n<tr bgcolor=\"white\" width=\"650\" *ngFor = \"let data of peopleNewsData | slice:0:1; let ind=index;\">\n<td>\n<table role=\"presentation\" cellspacing=\"0\"  width=\"300\" cellpadding=\"0\" border=\"0\" style=\"padding: 5px; text-align: left; border:0px red solid; border-radius: 15px; background: #b2b2b4; \">\n    <tr>\n        <td style=\" text-align: center; padding: 5px 0 5px 0;\">\n          <h2 style=\"margin:5px; font-family: sans-serif; font-size: 16px; line-height: 20px; color: #004185; font-weight: bold; text-transform: uppercase;\">People Spotting</h2>\n        </td>\n    </tr>\n\n\t <tr>\n        <td border=\"0\" style=\"padding: 10px 0 0 0; text-align: center; background-color:#ebeefd;\">\n          <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-people-spotting-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none; color: #555555;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=300&h=200&format=jpg&dpr=2&fill=solid&fill-color=ffffff'\" width=\"250\" alt=\"alt_text\" border=\"0\" class=\"fluid center-on-narrow\" style=\" background: #dddddd; border:1px #cccccc solid;\"></a>\n        </td>\n    </tr>\n\t\n\t<tr>\n\t\t  <td valign=\"top\" style=\"padding: 10px ; text-align: left; background-color:#ebeefd;\">\n          <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-people-spotting-{{currentDate | date:'yyyy-MM-dd'}}\" width=\"250\" target=\"_blank\" style=\"text-decoration:none;\"><br />\n          \t<h3 style=\"margin: 0; font-family: sans-serif; font-size: 15px; line-height: 18px; color: #333333; font-weight: bold;\">{{data.story.headline}}</h3>\n          </a>\n\t\t</td>\n\t</tr>\n\n    <tr>\n\t<td style=\"padding:1px;\">\n\t<h2 style=\"margin:  0; font-family: sans-serif; font-size: 16px; line-height: 20px; color: #333333; text-align: center;font-weight: bold;\"><a href=\"https://www.afaqs.com/people-spotting/\" target=\"_blank\" style=\"text-decoration:none;\">See all</a>\n    </h2>\n\t</td>                                   \n    </tr>\n</table>\n</td>\n</tr> \n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/showcase.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/showcase.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<table border=\"0\">\n<tr bgcolor=\"white\" width=\"650\" *ngFor = \"let data of showcaseNewsData | slice:1:2; let ind=index;\">\n<td>\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"border-radius: 15px;  background: #b2b2b4; padding: 5px;\">\n\t<tr>\n        <td style=\"padding: 10px; text-align: center; \">\n          <h2 style=\"margin:0; font-family: sans-serif; font-size: 16px; line-height: 20px; color: #004185; font-weight: bold; text-transform: uppercase;\">CREATIVE SHOWCASE</h2>\n        </td>\n    </tr>\n\t\n    <tr>\n        <td style=\"padding: 10px 0 20px 0; text-align: center; background-color:#ebeefd;\"> \n            <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-creative-showcase-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none; color: #555555;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=300&h=200&format=jpg&dpr=2&fill=solid&fill-color=ffffff'\" width=\"245\" height=\"173\"  alt=\"alt_text\" border=\"0\" class=\"fluid center-on-narrow\" style=\"height: auto; background: #dddddd; border:1px #cccccc solid;\"></a>\n        </td>\n    </tr>\n\n    <tr>\n        <td style=\" padding: 10px; background-color:#ebeefd;\" class=\"center-on-narrow\">\n           <table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"250\">\n                <tr>\n                    <td dir=\"ltr\" valign=\"top\" style=\"font-family: sans-serif; font-size: 15px; line-height: 18px; color: #555555; padding:3px; text-align: left; border:0px red solid;\" class=\"center-on-narrow\">\n                        <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-creative-showcase-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h2 style=\"margin:  0; font-family: sans-serif; font-size: 15px; line-height: 18px; color: #333333; \">{{data.story.headline}}</h2>\n                        </a>\n                  </td>\n                </tr>\n            </table>\n        </td>\n    </tr>\n\n\t<tr>\n\t<td colspan=\"2\" style=\"padding-top:3px;\">\n\t\t<h2 style=\"margin:  0; font-family: sans-serif; font-size: 16px; line-height: 20px; color: #333333;text-align: center; font-weight: bold;\"><a href=\"https://www.afaqs.com/creative-showcase\" target=\"_blank\" style=\"text-decoration:none;\">See all</a>\n        </h2>\n\t</td>                                   \n    </tr>\n</table>\n</td>\n</tr> \n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/top.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top/top.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n\t<tr>\n                        <td width=\"100%\" height=\"25\" style=\"font-size: 12px; padding-top:5px; line-height: 16px; background-color:#212741; text-align: right;\">\n                        <table role=\"presentation\" class=\"email-container\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"640\" style=\"margin: auto; background-color:#212741;\">\n                            <tr>\n                                <td>\n                                    <table cellpadding=\"3\" border=\"0\" width=\"640\" align=\"right\" style=\"width:100%; background-color:#212741; max-width:300px; padding:5px; \">\n                                        <tr>\n                                        <td width=\"120\" style=\"font-family: sans-serif; font-size: 15px; color:#ffffff; padding:5px; width:100%;\">Follow on us:</td>\n\n                                            <td align=\"right\" width=\"50\">\n                                                <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=daily_twitter:{{currentDate | date:'yyyy-MM-dd'}}&u=https://twitter.com/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/t.png\"/></a>\n                                            </td>\n\n                                            <td align=\"right\" width=\"50\">\n                                                <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=daily_facebook:{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.facebook.com/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/f.png\"/></a>\n                                            </td>\n\n                                            <td align=\"right\" width=\"50\">\n                                                <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=daily_linkedin:{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.linkedin.com/company/banyan-netfaqs-pvt-ltd--afaqs--/\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/in.png\"/></a>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td align=\"left\" style=\"padding: 2px; font-family: sans-serif; background-color:#212741; font-size: 15px; color: #fff; text-align: left; \">\n                                \t\t<app-date></app-date>\n                                </td>\n                            </tr>\n                        </table>\n                        </td>\n                        </tr>\n\n\n        <tr>\n        <td width=\"100%\" style=\"font-size: 12px; line-height: 16px; background-color:#212741; text-align: right;\">\n        \n\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n\t\n\t\t\t<!-- <tr>\n\t\t\t\t<td align=\"center\" style=\"padding:5px 10px 0 15px; text-align: center; background-color: #fff;\"><img src=\"https://ads.afaqs.com/www/images/40c5bdf7c49441820307bc70efa2375d.jpg\" alt=\"alt_text\" border=\"0\" align=\"center\" style=\"width: 100%; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; margin: auto;\" ></td>\n\t\t\t</tr> -->\n\n\t<tr>\n\t<td bgcolor=\"#ffffff\" align=\"center\" valign=\"top\" style=\"padding: 7px;\">\n\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n\t\t\t<tr>\n\t\t\t\t\n\t\t\t\t <td width=\"24%\" >\n\t\t\t\t\t<table role=\"presentation\" align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" >\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t   <td dir=\"ltr\" valign=\"top\" style=\"padding: 0 0 0 5px;\"><a href=\"https://www.afaqs.com/?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-afaqs-logo-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/ads/afaqs_logo.jpg\" alt=\"alt_text\" border=\"0\" class=\"center-on-narrow\" style=\" width: 100%; height: auto; float:left; background: #dddddd; color: #555555;\"></a></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</td>\n\n\t\t\t</tr>\n\t\t</table>\n\t</td>\n</tr>\n</table>\n</td>\n</tr>\n</table>");

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



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
        this.title = 'newsletter';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _myserv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myserv.service */ "./src/app/myserv.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top/top.component */ "./src/app/top/top.component.ts");
/* harmony import */ var _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bottom/bottom.component */ "./src/app/bottom/bottom.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./people.service */ "./src/app/people.service.ts");
/* harmony import */ var _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./showcase/showcase.component */ "./src/app/showcase/showcase.component.ts");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./showcase.service */ "./src/app/showcase.service.ts");
/* harmony import */ var _date_date_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./date/date.component */ "./src/app/date/date.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _top_top_component__WEBPACK_IMPORTED_MODULE_7__["TopComponent"],
            _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_8__["BottomComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _people_people_component__WEBPACK_IMPORTED_MODULE_11__["PeopleComponent"],
            _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_13__["ShowcaseComponent"],
            _date_date_component__WEBPACK_IMPORTED_MODULE_15__["DateComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ],
        providers: [_myserv_service__WEBPACK_IMPORTED_MODULE_4__["MyservService"], _people_service__WEBPACK_IMPORTED_MODULE_12__["PeopleService"], _showcase_service__WEBPACK_IMPORTED_MODULE_14__["ShowcaseService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bottom/bottom.component.css":
/*!*********************************************!*\
  !*** ./src/app/bottom/bottom.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdHRvbS9ib3R0b20uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/bottom/bottom.component.ts":
/*!********************************************!*\
  !*** ./src/app/bottom/bottom.component.ts ***!
  \********************************************/
/*! exports provided: BottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomComponent", function() { return BottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myserv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myserv.service */ "./src/app/myserv.service.ts");



let BottomComponent = class BottomComponent {
    constructor(singh) {
        this.singh = singh;
        //hero-image-s3-key = 'myImages';
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.singh.fetchLatestNews().subscribe(res => {
            // console.log(res);
            this.fdata = res;
            this.fNewsData = this.fdata.items;
        });
    }
};
BottomComponent.ctorParameters = () => [
    { type: _myserv_service__WEBPACK_IMPORTED_MODULE_2__["MyservService"] }
];
BottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bottom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bottom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom/bottom.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bottom.component.css */ "./src/app/bottom/bottom.component.css")).default]
    })
], BottomComponent);



/***/ }),

/***/ "./src/app/date/date.component.css":
/*!*****************************************!*\
  !*** ./src/app/date/date.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGUvZGF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/date/date.component.ts":
/*!****************************************!*\
  !*** ./src/app/date/date.component.ts ***!
  \****************************************/
/*! exports provided: DateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let DateComponent = class DateComponent {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.myDate = new Date().toDateString();
        this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    }
    ngOnInit() {
    }
};
DateComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
];
DateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-date',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./date.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/date/date.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./date.component.css */ "./src/app/date/date.component.css")).default]
    })
], DateComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.currentDate = new Date();
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _myserv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myserv.service */ "./src/app/myserv.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(singh) {
        this.singh = singh;
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.singh.fetchLatestNews().subscribe(res => {
            // console.log(res);
            this.fdata = res;
            this.fNewsData = this.fdata.items;
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _myserv_service__WEBPACK_IMPORTED_MODULE_2__["MyservService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/myserv.service.ts":
/*!***********************************!*\
  !*** ./src/app/myserv.service.ts ***!
  \***********************************/
/*! exports provided: MyservService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyservService", function() { return MyservService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MyservService = class MyservService {
    constructor(http) {
        this.http = http;
    }
    fetchLatestNews() {
        const url = 'https://www.afaqs.com/api/v1/collections/top-story';
        // const url='https://www.afaqs.com/api/v1/collections/latest-stories'
        return this.http.get(url);
    }
};
MyservService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MyservService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MyservService);



/***/ }),

/***/ "./src/app/people.service.ts":
/*!***********************************!*\
  !*** ./src/app/people.service.ts ***!
  \***********************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PeopleService = class PeopleService {
    constructor(http) {
        this.http = http;
    }
    fetchLatestNews() {
        const url = 'https://www.afaqs.com/api/v1/collections/people-spotting';
        return this.http.get(url);
    }
};
PeopleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PeopleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PeopleService);



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../people.service */ "./src/app/people.service.ts");



let PeopleComponent = class PeopleComponent {
    constructor(singh) {
        this.singh = singh;
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.singh.fetchLatestNews().subscribe(res => {
            // console.log(res);
            this.peopledata = res;
            this.peopleNewsData = this.peopledata.items;
        });
    }
};
PeopleComponent.ctorParameters = () => [
    { type: _people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"] }
];
PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")).default]
    })
], PeopleComponent);



/***/ }),

/***/ "./src/app/showcase.service.ts":
/*!*************************************!*\
  !*** ./src/app/showcase.service.ts ***!
  \*************************************/
/*! exports provided: ShowcaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseService", function() { return ShowcaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ShowcaseService = class ShowcaseService {
    constructor(http) {
        this.http = http;
    }
    fetchLatestNews() {
        const url = 'https://www.afaqs.com/api/v1/collections/creative-showcase';
        return this.http.get(url);
    }
};
ShowcaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShowcaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ShowcaseService);



/***/ }),

/***/ "./src/app/showcase/showcase.component.css":
/*!*************************************************!*\
  !*** ./src/app/showcase/showcase.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3djYXNlL3Nob3djYXNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/showcase/showcase.component.ts":
/*!************************************************!*\
  !*** ./src/app/showcase/showcase.component.ts ***!
  \************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showcase.service */ "./src/app/showcase.service.ts");



let ShowcaseComponent = class ShowcaseComponent {
    constructor(singh) {
        this.singh = singh;
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.singh.fetchLatestNews().subscribe(res => {
            // console.log(res);
            this.showcasedata = res;
            this.showcaseNewsData = this.showcasedata.items;
        });
    }
};
ShowcaseComponent.ctorParameters = () => [
    { type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"] }
];
ShowcaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showcase',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./showcase.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/showcase.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./showcase.component.css */ "./src/app/showcase/showcase.component.css")).default]
    })
], ShowcaseComponent);



/***/ }),

/***/ "./src/app/top/top.component.css":
/*!***************************************!*\
  !*** ./src/app/top/top.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC90b3AuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/top/top.component.ts":
/*!**************************************!*\
  !*** ./src/app/top/top.component.ts ***!
  \**************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopComponent = class TopComponent {
    constructor() {
        this.currentDate = new Date();
    }
    ngOnInit() {
    }
};
TopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top/top.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./top.component.css */ "./src/app/top/top.component.css")).default]
    })
], TopComponent);



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

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Mean\Angular\newsletter-testing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
