import * as b from "bobril";
import "bobrilstrap";
import * as routes from "./routes";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "./node_modules/prism-themes/themes/prism-darcula.css";
b.asset("node_modules/bootswatch/cosmo/bootstrap.min.css");

// b.selectorStyleDef("code", { backgroundColor: "transparent" });

b.routes(
  b.route(routes.main, [
    routes.gettingStarted,
    routes.moreTutorials,
    routes.ecoSystem,
    routes.theory,
    routes.changelog,
    b.routeDefault(routes.gettingStarted),
  ])
);
