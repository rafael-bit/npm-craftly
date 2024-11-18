"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var Button_1 = require("../Button");
describe('Button Component', function () {
    it('renders the button with correct text', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Button_1.Button, { children: "Click Me" }));
        expect(react_1.screen.getByText('Click Me')).toBeInTheDocument();
    });
    it('applies the correct variant styles', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "outline", children: "Outline Button" }));
        var button = react_1.screen.getByText('Outline Button');
        expect(button).toHaveClass('border', 'text-gray-700');
    });
    it('calls onClick handler when clicked', function () {
        var onClickMock = jest.fn();
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: onClickMock, children: "Click Me" }));
        react_1.fireEvent.click(react_1.screen.getByText('Click Me'));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
    it('is disabled when the disabled prop is set', function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Button_1.Button, { disabled: true, children: "Disabled Button" }));
        var button = react_1.screen.getByText('Disabled Button');
        expect(button).toBeDisabled();
        expect(button).toHaveClass('opacity-50');
    });
});
