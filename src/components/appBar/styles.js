"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = require("bobril");
var colors = require("../colors");
var styles = require("../styles");
var dimensions_1 = require("./dimensions");
exports.rightContainer = b.styleDef({
    cssFloat: 'right'
});
exports.leftContainer = b.styleDef({
    cssFloat: 'left'
});
exports.appBarStyle = b.styleDef({
    background: colors.color01,
    overflow: 'auto',
    height: dimensions_1.appBarHeight,
    zIndex: 500,
    paddingLeft: 30,
    paddingRight: 30
});
exports.menuButton = b.styleDef([
    {
        lineHeight: dimensions_1.appBarHeight + "px",
        marginLeft: '24px',
        color: colors.color04
    },
    styles.menutext01
]);
exports.menuIconButton = b.styleDef({
    lineHeight: dimensions_1.appBarHeight + "px",
    color: colors.color04
});
exports.gitButton = b.styleDef([
    {
        lineHeight: dimensions_1.appBarHeight + "px",
        color: colors.color04
    },
    styles.menutext01s
]);
exports.buttonStyle = b.styleDef({
    textAlign: 'center',
    cursor: 'pointer'
});
//# sourceMappingURL=styles.js.map