import * as b from 'bobril';
import * as router from './pages/router';
import app from './pages/app';
import home from './pages/home/page';
import documentation from './pages/documentation/page';
import * as m from 'bobril-m';

b.injectCss('html,body{margin:0; padding:0; height:100%}');
m.initRobotoFonts();

b.routes(
    b.route({handler: app}, [
        b.route({url: `/${router.home}`, name: router.home, handler: home}),
        b.route({url: `/${router.documentation}`, name: router.documentation, handler: documentation}),
        b.routeDefault({handler: home})
    ])
);