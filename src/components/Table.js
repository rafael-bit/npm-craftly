"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var Table = function (_a) {
    var headers = _a.headers, data = _a.data, _b = _a.variant, variant = _b === void 0 ? 'default' : _b;
    var baseStyle = 'min-w-full border-collapse';
    var variantStyles = {
        default: '',
        striped: 'odd:bg-gray-50',
        bordered: 'border border-gray-300',
    };
    return ((0, jsx_runtime_1.jsxs)("table", { className: (0, clsx_1.default)(baseStyle, variantStyles[variant]), children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: headers.map(function (header, index) { return ((0, jsx_runtime_1.jsx)("th", { className: "border border-gray-300 bg-gray-100 px-4 py-2 text-left", children: header }, index)); }) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: data.map(function (row, rowIndex) { return ((0, jsx_runtime_1.jsx)("tr", { className: (0, clsx_1.default)(variant === 'striped' && 'odd:bg-gray-50'), children: row.map(function (cell, cellIndex) { return ((0, jsx_runtime_1.jsx)("td", { className: (0, clsx_1.default)('px-4 py-2', variant === 'bordered' && 'border border-gray-300'), children: cell }, cellIndex)); }) }, rowIndex)); }) })] }));
};
exports.Table = Table;
