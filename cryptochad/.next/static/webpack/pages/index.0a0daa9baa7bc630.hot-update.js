"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), walletAddress = ref[0], setWalletAddress = ref[1];\n    function requestAccount() {\n        return _requestAccount.apply(this, arguments);\n    }\n    function _requestAccount() {\n        _requestAccount = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var accounts, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(\"Requesting account...\");\n                        if (!window.ethereum) return [\n                            3,\n                            5\n                        ];\n                        console.log(\"detected\");\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            window.ethereum.request({\n                                method: \"eth_requestAccounts\"\n                            })\n                        ];\n                    case 2:\n                        accounts = _state.sent();\n                        setWalletAddress(accounts[0]);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(\"Error connecting...\");\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            3,\n                            6\n                        ];\n                    case 5:\n                        alert(\"Meta Mask not detected\");\n                        _state.label = 6;\n                    case 6:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _requestAccount.apply(this, arguments);\n    }\n    function connectWallet() {\n        return _connectWallet.apply(this, arguments);\n    }\n    function _connectWallet() {\n        _connectWallet = // créée un provider qui interragit avec le smart contract\n        (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n            var provider;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            requestAccount()\n                        ];\n                    case 1:\n                        _state.sent();\n                        provider = new ethers.providers.Web3Provider(window.ethereum);\n                        _state.label = 2;\n                    case 2:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _connectWallet.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Page de la nouvelle campagne kickstarter\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Documents/CODE/Solidity/exercices_solidity/cryptochad/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: requestAccount,\n                children: \"Connecter le wallet \\xe0 Metamask\"\n            }, void 0, false, {\n                fileName: \"/Users/clementciron/Documents/CODE/Solidity/exercices_solidity/cryptochad/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Wallet Address: \",\n                    walletAddress\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/clementciron/Documents/CODE/Solidity/exercices_solidity/cryptochad/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/clementciron/Documents/CODE/Solidity/exercices_solidity/cryptochad/pages/index.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, _this);\n}, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7O0FBQTBCO0FBQ087QUFFakMsK0RBQWUsY0FBTTs7SUFDakIsSUFBMENDLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0NDLGFBQWEsR0FBc0JELEdBQVksR0FBbEMsRUFBRUUsZ0JBQWdCLEdBQUlGLEdBQVksR0FBaEI7YUFDdkJHLGNBQWM7ZUFBZEEsZUFBYzs7YUFBZEEsZUFBYztRQUFkQSxlQUFjLEdBQTdCLCtGQUFnQztnQkFRZEMsUUFBUSxFQUlUQyxLQUFLOzs7O3dCQVhsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs2QkFHakNDLE1BQU0sQ0FBQ0MsUUFBUSxFQUFmRDs7OzBCQUFlO3dCQUNmRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7O3dCQUdIOzs0QkFBTUMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQztnQ0FDM0NDLE1BQU0sRUFBRSxxQkFBcUI7NkJBQ2hDLENBQUM7MEJBQUE7O3dCQUZJUCxRQUFRLEdBQUcsYUFFZjt3QkFDRkYsZ0JBQWdCLENBQUNFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7d0JBQ3pCQyxLQUFLO3dCQUNWQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozt3QkFHdkNLLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDOzs7Ozs7OztRQUV4QyxDQUFDO2VBbEJjVCxlQUFjOzthQW9CZFUsYUFBYTtlQUFiQSxjQUFhOzthQUFiQSxjQUFhO1FBQWJBLGNBQWEsR0FENUIsMERBQTBEO1FBQzFELCtGQUErQjtnQkFJakJDLFFBQVE7Ozs7NkJBSGQsUUFBT04sTUFBTSxDQUFDQyxRQUFRLEtBQUssV0FBVyxHQUF0Qzs7OzBCQUFzQzt3QkFDdEM7OzRCQUFNTixjQUFjLEVBQUU7MEJBQUE7O3dCQUF0QixhQUFzQixDQUFDO3dCQUVqQlcsUUFBUSxHQUFHLElBQUlDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxZQUFZLENBQUNULE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7O1FBRTVFLENBQUM7ZUFOY0ksY0FBYTs7SUFRNUIscUJBQ0ksOERBQUNLLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFDLDBDQUF3Qzs7Ozs7cUJBQUs7MEJBQ2pELDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVsQixjQUFjOzBCQUFFLG1DQUVqQzs7Ozs7cUJBQVM7MEJBRVQsOERBQUNtQixJQUFFOztvQkFBQyxrQkFBZ0I7b0JBQUNyQixhQUFhOzs7Ozs7cUJBQU07Ozs7OzthQUN0QyxDQUNSO0FBQ04sQ0FBQyxtQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0QWNjb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXN0aW5nIGFjY291bnQuLi5cIik7XG5cbiAgICAgICAgLy8g4p2MIENoZWNrIGlmIE1ldGEgTWFzayBFeHRlbnNpb24gZXhpc3RzXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGV0ZWN0ZWRcIik7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyhhY2NvdW50c1swXSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY29ubmVjdGluZy4uLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiTWV0YSBNYXNrIG5vdCBkZXRlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjcsOpw6llIHVuIHByb3ZpZGVyIHF1aSBpbnRlcnJhZ2l0IGF2ZWMgbGUgc21hcnQgY29udHJhY3RcbiAgICBhc3luYyBmdW5jdGlvbiBjb25uZWN0V2FsbGV0KCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgYXdhaXQgcmVxdWVzdEFjY291bnQoKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+UGFnZSBkZSBsYSBub3V2ZWxsZSBjYW1wYWduZSBraWNrc3RhcnRlcjwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlcXVlc3RBY2NvdW50fT5cbiAgICAgICAgICAgICAgICBDb25uZWN0ZXIgbGUgd2FsbGV0IMOgIE1ldGFtYXNrXG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGgzPldhbGxldCBBZGRyZXNzOiB7d2FsbGV0QWRkcmVzc308L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJyZXF1ZXN0QWNjb3VudCIsImFjY291bnRzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiYWxlcnQiLCJjb25uZWN0V2FsbGV0IiwicHJvdmlkZXIiLCJldGhlcnMiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});