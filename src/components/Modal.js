"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'centered' : _b;
    if (!isOpen)
        return null;
    var baseStyle = 'bg-white rounded-lg shadow-lg p-6 relative transition-all';
    var variantStyles = {
        centered: 'w-96',
        'full-screen': 'w-full h-full rounded-none',
        'bottom-sheet': 'w-full max-w-md rounded-t-lg fixed bottom-0',
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: (0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)(baseStyle, variantStyles[variant]), children: [(0, jsx_runtime_1.jsx)("button", { onClick: onClose, className: "absolute top-2 right-2 text-gray-500 hover:text-gray-800", children: "\u00D7" }), children] }) }));
};
exports.Modal = Modal;
