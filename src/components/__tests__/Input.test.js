"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var Input_1 = require("../Input");
describe('Input Component', function () {
    it('renders the input with correct label', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Input_1.Input, { label: "Username", placeholder: "Enter your username" }));
        expect(react_1.screen.getByText('Username')).toBeInTheDocument();
        expect(react_1.screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
    });
    it('handles input changes correctly', function () {
        var handleChange = jest.fn();
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Input_1.Input, { label: "Username", placeholder: "Enter your username", onChange: handleChange }));
        var input = react_1.screen.getByPlaceholderText('Enter your username');
        react_1.fireEvent.change(input, { target: { value: 'JohnDoe' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    });
    it('applies the correct variant styles', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Input_1.Input, { label: "Username", placeholder: "Enter your username", variant: "underlined" }));
        var input = react_1.screen.getByPlaceholderText('Enter your username');
        expect(input).toHaveClass('border-b');
    });
});
