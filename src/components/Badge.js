"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var Badge = function (_a) {
    var text = _a.text, _b = _a.variant, variant = _b === void 0 ? 'success' : _b;
    var baseStyle = 'px-2 py-1 text-sm font-medium rounded';
    var variantStyles = {
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
    };
    return (0, jsx_runtime_1.jsx)("span", { className: (0, clsx_1.default)(baseStyle, variantStyles[variant]), children: text });
};
exports.Badge = Badge;
