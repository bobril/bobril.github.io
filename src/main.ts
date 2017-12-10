import * as b from 'bobril';
import * as router from './pages/router';
import app from './pages/app';
import documentation from './pages/documentation/page';
import guides from './pages/guides/page';
import intro from './pages/home/page';
import download from './pages/download/page';
import getStarted from './pages/getStarted/page';
import * as colors from './components/colors';

loadGithubMarkdownStyles();

b.routes(
    b.route({ handler: app }, [
        b.route({
            url: `/${router.home}`,
            name: router.home,
            handler: intro
        }),
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
            `html,body{
                     margin:0; padding:0;
                     height:100%;
                     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
                  }`
        );

        injectMarkDownCss();
    });
}

function injectMarkDownCss() {
    ///needed beacuse we are using markdown generated guides and docs

    //color of text on Guides and DOC pages
    b.injectCss(`.markdown-body {
                        color: ${colors.color04} !important;
                        line-height: initial !important;
                      }  `);

    b.injectCss(
        `.markdown-body a {
                text-decoration:underline !important;
                color:${colors.color04} !important;
              }`
    );

    b.injectCss(`.markdown-body table {
                            border: 1px solid ${colors.color01} !important;
                        }`);
    b.injectCss(
        `.markdown-body table tr{
                    border:none !important;
                    background:${colors.color01} !important
                }`
    );
    b.injectCss(
        `.markdown-body table tr:nth-child(even){
                    background:${colors.color02} !important
                }`
    );
    b.injectCss(
        `.markdown-body table th, .markdown-body table td{
                    border:none !important;
                }`
    );
    //background-color and color of code and similiar blocks
    b.injectCss(
        `.markdown-body pre {
                    background:${colors.color01} !important;
                    color:${colors.color03} !important
               }`
    );
    b.injectCss(
        `.markdown-body code {
                background:${colors.color01} !important;
                color:${colors.color03} !important;
              }`
    );
    b.injectCss(
        `.markdown-body p {  
                   margin-bottom: 16px !important;
                   letter-spacing: 1.5px !important;
                   font-size: 17px !important;
                   font-weight: 200 !important;
                   line-height: 22px !important;
              }`
    );
    b.injectCss(
        `.markdown-body blockquote {
                    padding-top: 20px !important;
                    padding-bottom: 20px !important;
                    border-left: .25em solid ${colors.color03} !important; 
                    background:${colors.color01} !important;
                    color:${colors.color03} !important;
              }`
    );

    //underline for headers on Guides and Docs
    b.injectCss(
        `.markdown-body h2 {
                    margin: 0 !important;
                    padding-top: 30px !important;
                    text-decoration: underline !important;
                    margin-bottom: 16px !important;
                    letter-spacing: 2px !important;
                    font-size: 20px !important;
                    font-weight: 250 !important;
                    line-height: 24px !important;
                    border: none !important;
              }`
    );
}
