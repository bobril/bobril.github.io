
    var $doc = (function () {
    var menuIds = ["menu-guides","menu-getting-started","menu-bobflux","menu-localizations","menu-routing","menu-bobril-build","menu-bobx"];
    return {
        init() {
          console.log(menuIds)  
        },
        scrollToNodeWithId: function (id) {
            var e = document.getElementById(id);
            if (e === undefined || e === null) {
                console.warn('Cannot find element with id:', id);
                return;
            }

            var offsetTop = e.offsetTop - 70; // Header compensation + 10px
            window.scrollTo(0, offsetTop);
        },
        isElementInViewport: function (el) {
            var rect = el.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
            );
        }
    }
})();
