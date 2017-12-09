"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = require("bobril");
var appBarStyles = require("./styles");
var AppButton = require("./button");
var dimensions_1 = require("./dimensions");
exports.appBarHeight = dimensions_1.appBarHeight;
exports.Button = AppButton;
exports.create = b.createComponent({
    render: function (ctx, me) {
        var d = ctx.data;
        me.children = [
            b.styledDiv([
                d.leftChildren &&
                    b.styledDiv(d.leftChildren.map(function (button) {
                        return b.styledDiv(button, {
                            display: 'inline-block'
                        });
                    }), appBarStyles.leftContainer),
                d.rightChildren &&
                    b.styledDiv(d.rightChildren.map(function (button) {
                        return b.styledDiv(button, {
                            display: 'inline-block'
                        });
                    }), appBarStyles.rightContainer)
            ], d.contentWidth && {
                maxWidth: d.contentWidth,
                margin: '0 auto'
            })
        ];
        b.style(me, appBarStyles.appBarStyle);
    }
});
//# sourceMappingURL=lib.js.map