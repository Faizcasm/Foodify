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
exports.id = "app/api/users/dash/route";
exports.ids = ["app/api/users/dash/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fdash%2Froute&page=%2Fapi%2Fusers%2Fdash%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fdash%2Froute.js&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDesktop%5CNextPro%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDesktop%5CNextPro%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fdash%2Froute&page=%2Fapi%2Fusers%2Fdash%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fdash%2Froute.js&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDesktop%5CNextPro%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDesktop%5CNextPro%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_HP_OneDrive_Desktop_NextPro_project_src_app_api_users_dash_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/dash/route.js */ \"(rsc)/./src/app/api/users/dash/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/dash/route\",\n        pathname: \"/api/users/dash\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/dash/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\NextPro\\\\project\\\\src\\\\app\\\\api\\\\users\\\\dash\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_HP_OneDrive_Desktop_NextPro_project_src_app_api_users_dash_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/users/dash/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRmRhc2glMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVzZXJzJTJGZGFzaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVzZXJzJTJGZGFzaCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIUCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q05leHRQcm8lNUNwcm9qZWN0JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNIUCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q05leHRQcm8lNUNwcm9qZWN0JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN3QztBQUNySDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvPzBmZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxOZXh0UHJvXFxcXHByb2plY3RcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxcZGFzaFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvZGFzaC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzL2Rhc2hcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXJzL2Rhc2gvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXE5leHRQcm9cXFxccHJvamVjdFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxkYXNoXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91c2Vycy9kYXNoL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fdash%2Froute&page=%2Fapi%2Fusers%2Fdash%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fdash%2Froute.js&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDesktop%5CNextPro%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDesktop%5CNextPro%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/dash/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/users/dash/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database/database */ \"(rsc)/./src/database/database.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n\n\n\n\n(0,_database_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nasync function GET(request) {\n    try {\n        const token = request.cookies.get(\"token\")?.value || \"\";\n        if (!token) {\n            console.log(\"no token\");\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"no token\"\n            }, {\n                status: 400\n            });\n        }\n        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.JWT_SECRET);\n        const userId = decodedToken.id;\n        const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n            _id: userId\n        }).select(\"-password\");\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: \"Invalid user\"\n            }, {\n                status: 400\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"User details fetched\",\n            success: true,\n            data: user\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.log(error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9kYXNoL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNBO0FBQ2I7QUFDUTtBQUd0Q0EsOERBQVFBO0FBRUQsZUFBZUksSUFBSUMsT0FBTztJQUM3QixJQUFJO1FBQ0EsTUFBTUMsUUFBUUQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVUMsU0FBUztRQUNyRCxJQUFHLENBQUNILE9BQU07WUFDTkksUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT1YscURBQVlBLENBQUNXLElBQUksQ0FBQztnQkFBQ0MsU0FBUTtZQUFVLEdBQUU7Z0JBQUNDLFFBQU87WUFBRztRQUM3RDtRQUNBLE1BQU1DLGVBQWViLDBEQUFVLENBQUNJLE9BQU1XLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtRQUM1RCxNQUFNQyxTQUFTTCxhQUFhTSxFQUFFO1FBQzlCLE1BQU1DLE9BQU8sTUFBTW5CLHlEQUFJQSxDQUFDb0IsT0FBTyxDQUFDO1lBQUNDLEtBQUlKO1FBQU0sR0FBR0ssTUFBTSxDQUFDO1FBQ3JELElBQUcsQ0FBQ0gsTUFBSztZQUNMLE9BQU9yQixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO2dCQUFDQyxTQUFRO1lBQWMsR0FBRTtnQkFBQ0MsUUFBTztZQUFHO1FBQ2pFO1FBQ0EsT0FBT2IscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFDQyxTQUFRO1lBQXVCYSxTQUFRO1lBQUtDLE1BQUtMO1FBQUksR0FBRTtZQUFDUixRQUFPO1FBQUc7SUFDaEcsRUFBRSxPQUFPYyxPQUFPO1FBQ1psQixRQUFRQyxHQUFHLENBQUNpQjtRQUNaLE9BQU8zQixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1lBQUNnQixPQUFNQSxNQUFNZixPQUFPO1FBQUEsR0FBRTtZQUFDQyxRQUFPO1FBQUc7SUFFOUQ7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvYXBwL2FwaS91c2Vycy9kYXNoL3JvdXRlLmpzPzc0YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFiYXNlIGZyb20gXCJAL2RhdGFiYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJNb2RlbFwiO1xyXG5cclxuXHJcbkRhdGFiYXNlKClcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxdWVzdC5jb29raWVzLmdldCgndG9rZW4nKT8udmFsdWUgfHwgXCJcIlxyXG4gICAgICAgIGlmKCF0b2tlbil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gdG9rZW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7bWVzc2FnZTpcIm5vIHRva2VuXCJ9LHtzdGF0dXM6NDAwfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0LnZlcmlmeSh0b2tlbixwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxyXG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IGRlY29kZWRUb2tlbi5pZFxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe19pZDp1c2VySWR9KS5zZWxlY3QoJy1wYXNzd29yZCcpXHJcbiAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe21lc3NhZ2U6XCJJbnZhbGlkIHVzZXJcIn0se3N0YXR1czo0MDB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe21lc3NhZ2U6XCJVc2VyIGRldGFpbHMgZmV0Y2hlZFwiLHN1Y2Nlc3M6dHJ1ZSxkYXRhOnVzZXJ9LHtzdGF0dXM6MjAwfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7ZXJyb3I6ZXJyb3IubWVzc2FnZX0se3N0YXR1czo1MDB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkRhdGFiYXNlIiwiTmV4dFJlc3BvbnNlIiwiand0IiwiVXNlciIsIkdFVCIsInJlcXVlc3QiLCJ0b2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImRlY29kZWRUb2tlbiIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwidXNlcklkIiwiaWQiLCJ1c2VyIiwiZmluZE9uZSIsIl9pZCIsInNlbGVjdCIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/dash/route.js\n");

/***/ }),

/***/ "(rsc)/./src/database/database.js":
/*!**********************************!*\
  !*** ./src/database/database.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Database = async ()=>{\n    try {\n        const connects = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(`${process.env.MONGO_URI}/nextproject`);\n        console.log(\"Database connected \", connects.connection.host);\n    } catch (error) {\n        console.log(\"Database connection failed\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Database);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGF0YWJhc2UvZGF0YWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFdBQVc7SUFDYixJQUFJO1FBQ0EsTUFBTUMsV0FBVyxNQUFNRix1REFBZ0IsQ0FBQyxDQUFDLEVBQUVJLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUM5RUMsUUFBUUMsR0FBRyxDQUFDLHVCQUFzQk4sU0FBU08sVUFBVSxDQUFDQyxJQUFJO0lBQzlELEVBQUUsT0FBT0MsT0FBTztRQUNaSixRQUFRQyxHQUFHLENBQUMsOEJBQTZCRztJQUM3QztBQUNKO0FBQ0EsaUVBQWVWLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2RhdGFiYXNlL2RhdGFiYXNlLmpzP2RiNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgRGF0YWJhc2UgPSBhc3luYygpPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3RzID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChgJHtwcm9jZXNzLmVudi5NT05HT19VUkl9L25leHRwcm9qZWN0YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0ZWQgXCIsY29ubmVjdHMuY29ubmVjdGlvbi5ob3N0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZFwiLGVycm9yKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkRhdGFiYXNlIiwiY29ubmVjdHMiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9uIiwiaG9zdCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/database/database.js\n");

/***/ }),

/***/ "(rsc)/./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        require: true,\n        unique: true,\n        type: String\n    },\n    email: {\n        require: true,\n        type: String\n    },\n    password: {\n        require: true,\n        type: String\n    },\n    profile: String,\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    verifyemailotp: String,\n    otpexp: {\n        type: Date\n    },\n    resetpassotp: String,\n    resetpassexpiry: {\n        type: Date\n    },\n    cart: [],\n    orders: [],\n    address: [],\n    fav: []\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).users || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFDL0IsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3ZDRyxVQUFTO1FBQUNDLFNBQVE7UUFBS0MsUUFBTztRQUFLQyxNQUFLQztJQUFNO0lBQzlDQyxPQUFNO1FBQUNKLFNBQVE7UUFBS0UsTUFBS0M7SUFBTTtJQUMvQkUsVUFBUztRQUFDTCxTQUFRO1FBQUtFLE1BQUtDO0lBQU07SUFDbENHLFNBQVFIO0lBQ1JJLFlBQVc7UUFBQ0wsTUFBS007UUFBUUMsU0FBUTtJQUFLO0lBQ3RDQyxnQkFBZVA7SUFDZlEsUUFBTztRQUFDVCxNQUFLVTtJQUFJO0lBQ2pCQyxjQUFhVjtJQUNiVyxpQkFBZ0I7UUFBQ1osTUFBS1U7SUFBSTtJQUMxQkcsTUFBSyxFQUFFO0lBQ1BDLFFBQU8sRUFBRTtJQUNUQyxTQUFRLEVBQUU7SUFDVkMsS0FBSSxFQUFFO0FBRU4sR0FBRTtJQUFDQyxZQUFXO0FBQUk7QUFFbEIsTUFBTUMsT0FBT3hCLHdEQUFlLENBQUMwQixLQUFLLElBQUkxQixxREFBYyxDQUFDLFNBQVFDO0FBQzdELGlFQUFldUIsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC5qcz9jNGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG51c2VybmFtZTp7cmVxdWlyZTp0cnVlLHVuaXF1ZTp0cnVlLHR5cGU6U3RyaW5nfSxcclxuZW1haWw6e3JlcXVpcmU6dHJ1ZSx0eXBlOlN0cmluZ30sXHJcbnBhc3N3b3JkOntyZXF1aXJlOnRydWUsdHlwZTpTdHJpbmd9LFxyXG5wcm9maWxlOlN0cmluZyxcclxuaXNWZXJpZmllZDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ZmFsc2V9LFxyXG52ZXJpZnllbWFpbG90cDpTdHJpbmcsXHJcbm90cGV4cDp7dHlwZTpEYXRlfSxcclxucmVzZXRwYXNzb3RwOlN0cmluZyxcclxucmVzZXRwYXNzZXhwaXJ5Ont0eXBlOkRhdGV9LFxyXG5jYXJ0OltdLFxyXG5vcmRlcnM6W10sXHJcbmFkZHJlc3M6W10sXHJcbmZhdjpbXVxyXG5cclxufSx7dGltZXN0YW1wczp0cnVlfSlcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMudXNlcnMgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXJzJyx1c2VyU2NoZW1hKVxyXG5leHBvcnQgZGVmYXVsdCBVc2VyIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwicmVxdWlyZSIsInVuaXF1ZSIsInR5cGUiLCJTdHJpbmciLCJlbWFpbCIsInBhc3N3b3JkIiwicHJvZmlsZSIsImlzVmVyaWZpZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInZlcmlmeWVtYWlsb3RwIiwib3RwZXhwIiwiRGF0ZSIsInJlc2V0cGFzc290cCIsInJlc2V0cGFzc2V4cGlyeSIsImNhcnQiLCJvcmRlcnMiLCJhZGRyZXNzIiwiZmF2IiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJ1c2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fdash%2Froute&page=%2Fapi%2Fusers%2Fdash%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fdash%2Froute.js&appDir=C%3A%5CUsers%5CHP%5COneDrive%5CDesktop%5CNextPro%5Cproject%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5COneDrive%5CDesktop%5CNextPro%5Cproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();