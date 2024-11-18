"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var Card_1 = require("../Card");
describe('Card Component', function () {
    it('applies the correct variant styles', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Card_1.Card, { variant: "shadow", children: "Test Card" }));
        var card = react_1.screen.getByText('Test Card').closest('div');
        expect(card).toHaveClass('shadow-md');
    });
    it('renders without errors', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Card_1.Card, { children: "Test Card" }));
        var card = react_1.screen.getByText('Test Card');
        expect(card).toBeInTheDocument();
    });
});
