"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var Button = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onClick = _a.onClick;
    var baseStyle = 'rounded font-medium px-4 py-2 focus:outline-none transition-all';
    var variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        outline: 'border border-gray-500 text-gray-700 hover:bg-gray-100',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };
    var sizeStyles = {
        sm: 'text-sm py-1 px-2',
        md: 'text-base py-2 px-4',
        lg: 'text-lg py-3 px-6',
    };
    var disabledStyles = 'opacity-50 cursor-not-allowed';
    return ((0, jsx_runtime_1.jsx)("button", { className: (0, clsx_1.default)(baseStyle, variantStyles[variant], sizeStyles[size], disabled && disabledStyles), onClick: onClick, disabled: disabled, children: children }));
};
exports.Button = Button;
