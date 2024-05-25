"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stripe";
exports.ids = ["pages/api/stripe"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/stripe.js":
/*!*****************************!*\
  !*** ./pages/api/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    if (req.method === 'POST') {\n        try {\n            const params = {\n                submit_type: 'pay',\n                mode: 'payment',\n                payment_method_types: [\n                    'card'\n                ],\n                billing_address_collection: 'auto',\n                shipping_options: [\n                    {\n                        shipping_rate: 'shr_1LFJTMSBeMpVFkhxOjM4gWOx'\n                    },\n                    {\n                        shipping_rate: 'shr_1LFJURSBeMpVFkhxzSX6KSli'\n                    },\n                    {\n                        shipping_rate: 'shr_1LFJVSSBeMpVFkhxDeRodFGL'\n                    }, \n                ],\n                line_items: req.body.map((item)=>{\n                    const img = item.image[0].asset._ref;\n                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/rb4djj1g/production/').replace('-webp', '.webp');\n                    return {\n                        price_data: {\n                            currency: 'INR',\n                            product_data: {\n                                name: item.name,\n                                images: [\n                                    newImage\n                                ]\n                            },\n                            unit_amount: item.price * 100\n                        },\n                        adjustable_quantity: {\n                            enabled: true,\n                            minimum: 1\n                        },\n                        quantity: item.quantity\n                    };\n                }),\n                success_url: `${req.headers.origin}/success`,\n                cancel_url: `${req.headers.origin}/canceled`\n            };\n            // Create Checkout Sessions from body params.\n            const session = await stripe.checkout.sessions.create(params);\n            res.status(200).json(session);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader('Allow', 'POST');\n        res.status(405).end('Method Not Allowed');\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL2toYXJlZWRvLy4vcGFnZXMvYXBpL3N0cmlwZS5qcz9kNzg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcclxuY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICBzdWJtaXRfdHlwZTogJ3BheScsXHJcbiAgICAgICAgbW9kZTogJ3BheW1lbnQnLFxyXG4gICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcclxuICAgICAgICBiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbjogJ2F1dG8nLFxyXG4gICAgICAgIHNoaXBwaW5nX29wdGlvbnM6IFtcclxuICAgICAgICAgIHsgc2hpcHBpbmdfcmF0ZTogJ3Nocl8xTEZKVE1TQmVNcFZGa2h4T2pNNGdXT3gnfSxcclxuICAgICAgICAgIHsgc2hpcHBpbmdfcmF0ZTogJ3Nocl8xTEZKVVJTQmVNcFZGa2h4elNYNktTbGknfSxcclxuICAgICAgICAgIHsgc2hpcHBpbmdfcmF0ZTogJ3Nocl8xTEZKVlNTQmVNcFZGa2h4RGVSb2RGR0wnfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGxpbmVfaXRlbXM6cmVxLmJvZHkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBpdGVtLmltYWdlWzBdLmFzc2V0Ll9yZWY7XHJcbiAgICAgICAgICBjb25zdCBuZXdJbWFnZSA9IGltZy5yZXBsYWNlKCdpbWFnZS0nICwgJ2h0dHBzOi8vY2RuLnNhbml0eS5pby9pbWFnZXMvcmI0ZGpqMWcvcHJvZHVjdGlvbi8nKS5yZXBsYWNlKCctd2VicCcsICcud2VicCcpO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJpY2VfZGF0YTp7XHJcbiAgICAgICAgICAgICAgY3VycmVuY3k6ICdJTlInLFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RfZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBbbmV3SW1hZ2VdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkanVzdGFibGVfcXVhbnRpdHk6IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1pbmltdW06IDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHN1Y2Nlc3NfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L3N1Y2Nlc3NgLFxyXG4gICAgICAgIGNhbmNlbF91cmw6IGAke3JlcS5oZWFkZXJzLm9yaWdpbn0vY2FuY2VsZWRgLFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBDcmVhdGUgQ2hlY2tvdXQgU2Vzc2lvbnMgZnJvbSBib2R5IHBhcmFtcy5cclxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUocGFyYW1zKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oc2Vzc2lvbik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2QgTm90IEFsbG93ZWQnKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInBhcmFtcyIsInN1Ym1pdF90eXBlIiwibW9kZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwiYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJzaGlwcGluZ19vcHRpb25zIiwic2hpcHBpbmdfcmF0ZSIsImxpbmVfaXRlbXMiLCJib2R5IiwibWFwIiwiaXRlbSIsImltZyIsImltYWdlIiwiYXNzZXQiLCJfcmVmIiwibmV3SW1hZ2UiLCJyZXBsYWNlIiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwibmFtZSIsImltYWdlcyIsInVuaXRfYW1vdW50IiwicHJpY2UiLCJhZGp1c3RhYmxlX3F1YW50aXR5IiwiZW5hYmxlZCIsIm1pbmltdW0iLCJxdWFudGl0eSIsInN1Y2Nlc3NfdXJsIiwiaGVhZGVycyIsIm9yaWdpbiIsImNhbmNlbF91cmwiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJzdGF0dXNDb2RlIiwibWVzc2FnZSIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stripe.js"));
module.exports = __webpack_exports__;

})();