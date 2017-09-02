// TODO Use only ES5, no transpilation implemented yet
// TODO convert to TS and then generate JS -> implement edge cases, error handling
function generateJsHelpers(menuIds) {
    return `
    var $doc = (function () {
    return {
        scrollToNodeWithId: function (id) {
            var e = document.getElementById(id);
            if (e === undefined || e === null) {
                console.warn('Cannot find element with id:', id);
                return;
            }

            var offsetTop = e.offsetTop - 70; // Header compensation + 10px
            window.scrollTo(0, offsetTop);
        }
    }
})();
`
}

module.exports.generateJsHelpers = generateJsHelpers;