"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var Checkbox = function (_a) {
    var label = _a.label, _b = _a.checked, checked = _b === void 0 ? false : _b, onChange = _a.onChange, _c = _a.variant, variant = _c === void 0 ? 'default' : _c;
    var baseStyle = 'w-4 h-4 focus:ring-2 focus:ring-blue-500';
    var variantStyles = {
        default: 'border-gray-300 rounded',
        rounded: 'border-gray-300 rounded-full',
        outlined: 'border-2 border-gray-400',
    };
    return ((0, jsx_runtime_1.jsxs)("label", { className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: checked, onChange: onChange, className: (0, clsx_1.default)(baseStyle, variantStyles[variant]) }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm text-gray-700", children: label })] }));
};
exports.Checkbox = Checkbox;
