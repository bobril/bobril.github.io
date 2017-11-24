import * as b from 'bobril';
import * as router from './pages/router';
import app from './pages/app';
import home from './pages/home/page';
import documentation from './pages/documentation/page';
import guides from './pages/guides/page';
import intro from './pages/introPage/page';
import download from './pages/download/page';
import getStarted from './pages/getStarted/page';
import * as colors from './components/colors';
import * as styles from './components/styles';

loadGithubMarkdownStyles();

b.routes(
    b.route({ handler: app }, [
        b.route({ url: `/${router.home}`, name: router.home, handler: intro }),
        b.route({
            url: `/${router.guides}`,
            name: router.guides,
            handler: guides
        }),
        b.route({
            url: `/${router.documentation}`,
            name: router.documentation,
            handler: documentation
        }),
        b.route({
            url: `/${router.getStarted}`,
            name: router.getStarted,
            handler: getStarted
        }),
        b.route({
            url: `/${router.download}`,
            name: router.download,
            handler: download
        }),
        b.routeDefault({ handler: intro })
    ])
);

function loadGithubMarkdownStyles() {
    const markdownCss = b.asset(
        '../node_modules/github-markdown-css/github-markdown.css'
    );

    document.addEventListener('DOMContentLoaded', function(event) {
        const head = document.getElementsByTagName('head')[0];
        const s = document.createElement('link');
        s.setAttribute('rel', 'stylesheet');
        s.setAttribute('href', markdownCss);
        head.appendChild(s);
        b.injectCss(
            'html,body{margin:0; padding:0; height:100%; font-family: Segoe UI, Open Sans!important}'
        );
        
        injectMarkDownCss();
    });
}

function injectMarkDownCss() {
    ///needed beacuse we are using markdown generated guides and docs

    //color of text on Guides and DOC pages
    b.injectCss(`.markdown-body {color: ${colors.color04};}  `);

    b.injectCss('.markdown-body p{margin-right:90px}');

    b.injectCss('.markdown-body div p{margin-right:90px}');

    b.injectCss(
        `.markdown-body a {text-decoration:underline;color:${colors.color04}}`
    );

    b.injectCss(`.markdown-body table {border:none;margin-right:90px}`);
    b.injectCss(`.markdown-body table tr{background:${colors.color01}}`);
    b.injectCss(
        `.markdown-body table tr:nth-child(even){background:${colors.color02}}`
    );

    //background-color and color of code and similiar blocks
    b.injectCss(
        `.markdown-body pre {margin-right:90px;background:${
            colors.color01
        };color:${colors.color03}}`
    );
    b.injectCss(
        `.markdown-body code {background:${colors.color01};color:${
            colors.color03
        }}`
    );
    b.injectCss(
        `.markdown-body blockquote {margin-right:90px;padding-top 20px;padding-bottom 20px;border-left: .25em solid ${
            colors.color03
        }; background:${colors.color01};color:${colors.color03}}`
    );

    //underline for headers on Guides and Docs
    b.injectCss('#menu-getting-started{text-decoration:underline;border:none}');
    b.injectCss('#menu-bobflux{text-decoration:underline;border:none}');
    b.injectCss('#menu-localizations{text-decoration:underline;border:none}');
    b.injectCss('#menu-routing{text-decoration:underline;border:none}');
    b.injectCss('#menu-bobril-build{text-decoration:underline;border:none}');
    b.injectCss('#menu-bobx{text-decoration:underline;border:none}');
    b.injectCss(
        '#menu-why-own-framework{text-decoration:underline;border:none}'
    );
    b.injectCss('#menu-virtual-dom{text-decoration:underline;border:none}');
    b.injectCss('#menu-bobril-node{text-decoration:underline;border:none}');
    b.injectCss('#menu-initialization{text-decoration:underline;border:none}');
    b.injectCss(
        '#menu-bobril-component{text-decoration:underline;border:none}'
    );
    b.injectCss('#menu-events{text-decoration:underline;border:none}');
    b.injectCss('#menu-assets{text-decoration:underline;border:none}');
    b.injectCss(
        '#menu-responsive-design{text-decoration:underline;border:none}'
    );
    b.injectCss('#menu-examples{text-decoration:underline;border:none}');
}
