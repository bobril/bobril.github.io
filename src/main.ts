import * as b from 'bobril';
import * as router from './pages/router';
import app from './pages/app';
import documentation from './pages/documentation/page';
import guides from './pages/guides/page';
import intro from './pages/introPage/page';
import download from './pages/download/page';
import getStarted from './pages/getStarted/page';
import * as colors from './components/colors';

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
            'html,body{' +
                'margin:0; padding:0; ' +
                'height:100%; ' +
                'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important' +
                '}'
        );

        injectMarkDownCss();
    });
}

function injectMarkDownCss() {
    ///needed beacuse we are using markdown generated guides and docs

    //color of text on Guides and DOC pages
    b.injectCss(`.markdown-body {
    color: ${colors.color04};
    line-height: initial;
    }  `);

    b.injectCss(
        `.markdown-body a {text-decoration:underline;color:${colors.color04}}`
    );

    b.injectCss(`.markdown-body table {border: 1px solid ${colors.color01}}`);
    b.injectCss(
        `.markdown-body table tr{border:none;background:${colors.color01}}`
    );
    b.injectCss(
        `.markdown-body table tr:nth-child(even){background:${colors.color02}}`
    );
    b.injectCss(
        '.markdown-body table th, .markdown-body table td{border:none}'
    );
    //background-color and color of code and similiar blocks
    b.injectCss(
        `.markdown-body pre {
                    background:${colors.color01};
                    color:${colors.color03}
               }`
    );
    b.injectCss(
        `.markdown-body code {
                background:${colors.color01};
                color:${colors.color03}
              }`
    );
    b.injectCss(
        `.markdown-body p {  
                   margin-bottom: 16px;
                   letter-spacing: 2px;
                   font-size: 17px;
                   font-weight: 250;
                   line-height: 22px;
              }`
    );
    b.injectCss(
        `.markdown-body blockquote {
                    padding-top: 20px;
                    padding-bottom: 20px;
                    border-left: .25em solid ${colors.color03}; 
                    background:${colors.color01};
                    color:${colors.color03}
              }`
    );

    //underline for headers on Guides and Docs
    b.injectCss(
        '.markdown-body h2 {' +
            'margin: 0' +
            'padding-top: 30px;' +
            'text-decoration: underline;' +
            'margin-bottom: 16px;' +
            'letter-spacing: 2px;' +
            'font-size: 20px;' +
            'font-weight: 250;' +
            'line-height: 24px;' +
            'border: none' +
        '}'
    );
}
