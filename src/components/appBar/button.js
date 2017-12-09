"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = require("bobril");
var appBarStyles = require("./styles");
var ButtonVariants;
(function (ButtonVariants) {
    ButtonVariants[ButtonVariants["menuButton"] = 0] = "menuButton";
    ButtonVariants[ButtonVariants["menuIconButton"] = 1] = "menuIconButton";
    ButtonVariants[ButtonVariants["gitButton"] = 2] = "gitButton";
})(ButtonVariants = exports.ButtonVariants || (exports.ButtonVariants = {}));
exports.create = b.createComponent({
    render: function (ctx, me) {
        me.children = [ctx.data.content];
        b.style(me, appBarStyles.buttonStyle, ctx.data.variant === ButtonVariants.menuButton &&
            appBarStyles.menuButton, ctx.data.variant === ButtonVariants.gitButton &&
            appBarStyles.gitButton, ctx.data.variant === ButtonVariants.menuIconButton &&
            appBarStyles.menuIconButton);
    },
    onClick: function (ctx) {
        if (ctx.data.onClick) {
            ctx.data.onClick(ctx);
            return true;
        }
        return false;
    }
});
//# sourceMappingURL=button.js.map