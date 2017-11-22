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

function injectAllCss() {
    b.injectCss(
        'html,body{margin:0; padding:0; height:100%; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif !important}'
    );
    b.injectCss(`.markdown-body {color: ${colors.color04};}  `);
    b.injectCss(`.markdown-body table tr{background:${colors.color01}}`);
    b.injectCss(
        `.markdown-body table tr:nth-child(even){background:${colors.color02}}`
    );
    b.injectCss(`.markdown-body a {color:${colors.color04}}`);
    b.injectCss(
        `.markdown-body pre {background:${colors.color01};color:${colors.color03}}`
    );
    b.injectCss(
        `.markdown-body code {background:${colors.color01};color:${colors.color03}}`
    );
    b.injectCss(
        `.markdown-body blockquote {border-left: .25em solid ${colors.color03}; background:${colors.color01};color:${colors.color03}}`
    );
}

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
        injectAllCss();
    });
}
