"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isElementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth));
}
exports.isElementInViewport = isElementInViewport;
function getOffsetTop(elId) {
    return document.getElementById(elId).offsetTop;
}
function getBoundariesForHtmlElements(elementsId) {
    var elementsBoundaries = [];
    for (var i = 0; i < elementsId.length; i++) {
        var elBoundary = {
            from: Number.MIN_VALUE,
            to: Number.MAX_VALUE
        };
        if (i !== 0 && i !== elementsId.length - 1) {
            elBoundary.from = getOffsetTop(elementsId[i]);
            elBoundary.to = getOffsetTop(elementsId[i + 1]);
        }
        else if (i === 0) {
            elBoundary.to = getOffsetTop(elementsId[i + 1]);
        }
        else if (i === elementsId.length - 1) {
            elBoundary.from = getOffsetTop(elementsId[i]);
        }
        elementsBoundaries.push(elBoundary);
    }
    return elementsBoundaries;
}
exports.getBoundariesForHtmlElements = getBoundariesForHtmlElements;
function isInBoundaries(num, boundary) {
    return boundary.from <= num && boundary.to >= num;
}
exports.isInBoundaries = isInBoundaries;
//# sourceMappingURL=viewport.js.map