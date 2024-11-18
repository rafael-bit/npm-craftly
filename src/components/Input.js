"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var Input = function (_a) {
    var label = _a.label, placeholder = _a.placeholder, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.variant, variant = _c === void 0 ? 'default' : _c, value = _a.value, onChange = _a.onChange;
    var baseStyle = 'px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500';
    var variantStyles = {
        default: 'border rounded-lg',
        underlined: 'border-b focus:border-b-blue-500',
        rounded: 'border rounded-full',
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col space-y-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm font-medium text-gray-700", children: label }), (0, jsx_runtime_1.jsx)("input", { type: type, value: value, onChange: onChange, placeholder: placeholder, className: (0, clsx_1.default)(baseStyle, variantStyles[variant]) })] }));
};
exports.Input = Input;
