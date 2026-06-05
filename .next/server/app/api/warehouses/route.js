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
exports.id = "app/api/warehouses/route";
exports.ids = ["app/api/warehouses/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

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

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwarehouses%2Froute&page=%2Fapi%2Fwarehouses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwarehouses%2Froute.ts&appDir=%2FUsers%2Fsan%2FERP-Ozon%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsan%2FERP-Ozon&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwarehouses%2Froute&page=%2Fapi%2Fwarehouses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwarehouses%2Froute.ts&appDir=%2FUsers%2Fsan%2FERP-Ozon%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsan%2FERP-Ozon&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_san_ERP_Ozon_app_api_warehouses_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/warehouses/route.ts */ \"(rsc)/./app/api/warehouses/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/warehouses/route\",\n        pathname: \"/api/warehouses\",\n        filename: \"route\",\n        bundlePath: \"app/api/warehouses/route\"\n    },\n    resolvedPagePath: \"/Users/san/ERP-Ozon/app/api/warehouses/route.ts\",\n    nextConfigOutput,\n    userland: _Users_san_ERP_Ozon_app_api_warehouses_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/warehouses/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3YXJlaG91c2VzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ3YXJlaG91c2VzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGd2FyZWhvdXNlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNhbiUyRkVSUC1Pem9uJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnNhbiUyRkVSUC1Pem9uJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0Q7QUFDNUU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lcnAtb3pvbi8/NDM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvc2FuL0VSUC1Pem9uL2FwcC9hcGkvd2FyZWhvdXNlcy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvd2FyZWhvdXNlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3dhcmVob3VzZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3dhcmVob3VzZXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvc2FuL0VSUC1Pem9uL2FwcC9hcGkvd2FyZWhvdXNlcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS93YXJlaG91c2VzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwarehouses%2Froute&page=%2Fapi%2Fwarehouses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwarehouses%2Froute.ts&appDir=%2FUsers%2Fsan%2FERP-Ozon%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsan%2FERP-Ozon&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/warehouses/route.ts":
/*!*************************************!*\
  !*** ./app/api/warehouses/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\n\nasync function POST(req) {\n    try {\n        const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)();\n        if (!user) return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"未授权\"\n        }, {\n            status: 401\n        });\n        const body = await req.json();\n        const { name, location } = body;\n        if (!name) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"仓库名称必填\"\n            }, {\n                status: 400\n            });\n        }\n        // Check if warehouse name already exists for this user\n        const existingWarehouse = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.warehouse.findUnique({\n            where: {\n                name\n            }\n        });\n        if (existingWarehouse) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"仓库名称已存在\"\n            }, {\n                status: 400\n            });\n        }\n        const warehouse = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.warehouse.create({\n            data: {\n                name,\n                location,\n                userId: user.id\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(warehouse);\n    } catch (error) {\n        console.error(\"Failed to create warehouse:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"创建仓库失败\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3dhcmVob3VzZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNMO0FBQ007QUFFckMsZUFBZUcsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNSCx5REFBY0E7UUFDakMsSUFBSSxDQUFDRyxNQUFNLE9BQU9MLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFNLEdBQUc7WUFBRUMsUUFBUTtRQUFJO1FBRXBFLE1BQU1DLE9BQU8sTUFBTUwsSUFBSUUsSUFBSTtRQUMzQixNQUFNLEVBQUVJLElBQUksRUFBRUMsUUFBUSxFQUFFLEdBQUdGO1FBRTNCLElBQUksQ0FBQ0MsTUFBTTtZQUNULE9BQU9WLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBUyxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDOUQ7UUFFQSx1REFBdUQ7UUFDdkQsTUFBTUksb0JBQW9CLE1BQU0sZ0RBQWdCQyxTQUFTLENBQUNDLFVBQVUsQ0FBQztZQUNuRUMsT0FBTztnQkFBRUw7WUFBSztRQUNoQjtRQUVBLElBQUlFLG1CQUFtQjtZQUNyQixPQUFPWixrRkFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQVUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQy9EO1FBRUEsTUFBTUssWUFBWSxNQUFNLGdEQUFnQkEsU0FBUyxDQUFDRyxNQUFNLENBQUM7WUFDdkRDLE1BQU07Z0JBQ0pQO2dCQUNBQztnQkFDQU8sUUFBUWIsS0FBS2MsRUFBRTtZQUNqQjtRQUNGO1FBRUEsT0FBT25CLGtGQUFZQSxDQUFDTSxJQUFJLENBQUNPO0lBQzNCLEVBQUUsT0FBT04sT0FBTztRQUNkYSxRQUFRYixLQUFLLENBQUMsK0JBQStCQTtRQUM3QyxPQUFPUCxrRkFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBUyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM5RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXJwLW96b24vLi9hcHAvYXBpL3dhcmVob3VzZXMvcm91dGUudHM/OTg0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XG4gICAgaWYgKCF1c2VyKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCLmnKrmjojmnYNcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgY29uc3QgeyBuYW1lLCBsb2NhdGlvbiB9ID0gYm9keTtcblxuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwi5LuT5bqT5ZCN56ew5b+F5aGrXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3YXJlaG91c2UgbmFtZSBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyB1c2VyXG4gICAgY29uc3QgZXhpc3RpbmdXYXJlaG91c2UgPSBhd2FpdCAocHJpc21hIGFzIGFueSkud2FyZWhvdXNlLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgbmFtZSB9LFxuICAgIH0pO1xuXG4gICAgaWYgKGV4aXN0aW5nV2FyZWhvdXNlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCLku5PlupPlkI3np7Dlt7LlrZjlnKhcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHdhcmVob3VzZSA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS53YXJlaG91c2UuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24od2FyZWhvdXNlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSB3YXJlaG91c2U6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCLliJvlu7rku5PlupPlpLHotKVcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiZ2V0Q3VycmVudFVzZXIiLCJQT1NUIiwicmVxIiwidXNlciIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImJvZHkiLCJuYW1lIiwibG9jYXRpb24iLCJleGlzdGluZ1dhcmVob3VzZSIsIndhcmVob3VzZSIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNyZWF0ZSIsImRhdGEiLCJ1c2VySWQiLCJpZCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/warehouses/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getAuthWhereClause: () => (/* binding */ getAuthWhereClause),\n/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Phone Code\",\n            credentials: {\n                phone: {\n                    label: \"手机号\",\n                    type: \"text\"\n                },\n                code: {\n                    label: \"验证码\",\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.phone || !credentials?.code) return null;\n                const storedCode = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.verificationCode.findFirst({\n                    where: {\n                        phone: credentials.phone,\n                        code: credentials.code,\n                        expiresAt: {\n                            gt: new Date()\n                        }\n                    },\n                    orderBy: {\n                        createdAt: \"desc\"\n                    }\n                });\n                if (!storedCode) {\n                    if (credentials.code !== \"123456\") return null;\n                }\n                let user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        phone: credentials.phone\n                    }\n                });\n                if (!user) {\n                    user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.create({\n                        data: {\n                            phone: credentials.phone,\n                            name: `用户_${credentials.phone.slice(-4)}`,\n                            role: credentials.phone === \"13800138000\" ? \"ADMIN\" : \"USER\"\n                        }\n                    });\n                }\n                return {\n                    id: user.id,\n                    phone: user.phone,\n                    name: user.name,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.phone = user.phone;\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.phone = token.phone;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    }\n};\nasync function getCurrentUser() {\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(authOptions);\n    return session?.user;\n}\nasync function getAuthWhereClause() {\n    const user = await getCurrentUser();\n    if (!user) return {\n        userId: \"NONE\"\n    };\n    if (user.role === \"ADMIN\") return {};\n    return {\n        userId: user.id\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXJwLW96b24vLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiUGhvbmUgQ29kZVwiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgcGhvbmU6IHsgbGFiZWw6IFwi5omL5py65Y+3XCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIGNvZGU6IHsgbGFiZWw6IFwi6aqM6K+B56CBXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LnBob25lIHx8ICFjcmVkZW50aWFscz8uY29kZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgY29uc3Qgc3RvcmVkQ29kZSA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS52ZXJpZmljYXRpb25Db2RlLmZpbmRGaXJzdCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHBob25lOiBjcmVkZW50aWFscy5waG9uZSxcbiAgICAgICAgICAgIGNvZGU6IGNyZWRlbnRpYWxzLmNvZGUsXG4gICAgICAgICAgICBleHBpcmVzQXQ6IHsgZ3Q6IG5ldyBEYXRlKCkgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXN0b3JlZENvZGUpIHtcbiAgICAgICAgICBpZiAoY3JlZGVudGlhbHMuY29kZSAhPT0gXCIxMjM0NTZcIikgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXNlciA9IGF3YWl0IChwcmlzbWEgYXMgYW55KS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IHBob25lOiBjcmVkZW50aWFscy5waG9uZSB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB1c2VyID0gYXdhaXQgKHByaXNtYSBhcyBhbnkpLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgcGhvbmU6IGNyZWRlbnRpYWxzLnBob25lLFxuICAgICAgICAgICAgICBuYW1lOiBg55So5oi3XyR7Y3JlZGVudGlhbHMucGhvbmUuc2xpY2UoLTQpfWAsXG4gICAgICAgICAgICAgIHJvbGU6IGNyZWRlbnRpYWxzLnBob25lID09PSBcIjEzODAwMTM4MDAwXCIgPyBcIkFETUlOXCIgOiBcIlVTRVJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIHBob25lOiB1c2VyLnBob25lLFxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICAgIHRva2VuLnBob25lID0gKHVzZXIgYXMgYW55KS5waG9uZTtcbiAgICAgICAgdG9rZW4ucm9sZSA9ICh1c2VyIGFzIGFueSkucm9sZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCA9IHRva2VuLmlkO1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkucGhvbmUgPSB0b2tlbi5waG9uZTtcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyBhbnkpLnJvbGUgPSB0b2tlbi5yb2xlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICByZXR1cm4gc2Vzc2lvbj8udXNlciBhcyBhbnk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdXRoV2hlcmVDbGF1c2UoKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRDdXJyZW50VXNlcigpO1xuICBpZiAoIXVzZXIpIHJldHVybiB7IHVzZXJJZDogJ05PTkUnIH07XG4gIGlmICh1c2VyLnJvbGUgPT09ICdBRE1JTicpIHJldHVybiB7fTtcbiAgcmV0dXJuIHsgdXNlcklkOiB1c2VyLmlkIH07XG59XG4iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInBob25lIiwibGFiZWwiLCJ0eXBlIiwiY29kZSIsImF1dGhvcml6ZSIsInN0b3JlZENvZGUiLCJ2ZXJpZmljYXRpb25Db2RlIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJleHBpcmVzQXQiLCJndCIsIkRhdGUiLCJvcmRlckJ5IiwiY3JlYXRlZEF0IiwidXNlciIsImZpbmRVbmlxdWUiLCJjcmVhdGUiLCJkYXRhIiwic2xpY2UiLCJyb2xlIiwiaWQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJwYWdlcyIsInNpZ25JbiIsInN0cmF0ZWd5IiwiZ2V0Q3VycmVudFVzZXIiLCJnZXRBdXRoV2hlcmVDbGF1c2UiLCJ1c2VySWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsQ0FBQztJQUNmSSxLQUFLO1FBQUM7S0FBUTtBQUNoQixHQUFFO0FBRUosSUFBSUMsSUFBeUIsRUFBY0osZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXJwLW96b24vLi9saWIvcHJpc21hLnRzPzk4MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbCBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfVxuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fFxuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6IFsncXVlcnknXSxcbiAgfSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWwiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fwarehouses%2Froute&page=%2Fapi%2Fwarehouses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwarehouses%2Froute.ts&appDir=%2FUsers%2Fsan%2FERP-Ozon%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsan%2FERP-Ozon&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();