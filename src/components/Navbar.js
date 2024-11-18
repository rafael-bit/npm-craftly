"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var Navbar = function (_a) {
    var links = _a.links, _b = _a.variant, variant = _b === void 0 ? 'default' : _b;
    var baseStyle = 'py-4 px-8';
    var variantStyles = {
        default: 'bg-gray-800 text-white',
        transparent: 'bg-transparent text-gray-800',
        shadow: 'bg-gray-800 text-white shadow-md',
    };
    return ((0, jsx_runtime_1.jsx)("nav", { className: (0, clsx_1.default)(baseStyle, variantStyles[variant]), children: (0, jsx_runtime_1.jsx)("ul", { className: "flex space-x-4", children: links.map(function (link, index) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: link.href, className: "hover:underline", children: link.label }) }, index)); }) }) }));
};
exports.Navbar = Navbar;
