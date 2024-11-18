"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var Card = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'flat' : _b, className = _a.className;
    var baseClasses = 'p-4';
    var variantClasses = (0, clsx_1.default)({
        'shadow-md': variant === 'shadow',
        'border border-gray-300': variant === 'outline',
        '': variant === 'flat',
    });
    return (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)(baseClasses, variantClasses, className), children: children });
};
exports.Card = Card;
