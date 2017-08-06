const Remarkable = require('remarkable');
const hljs = require('highlight.js'); // https://highlightjs.org/

// https://jonschlinkert.github.io/remarkable/demo/
const md = new Remarkable('full', {
    html: false,
    xhtmlOut: false,
    breaks: true,
    langPrefix: 'language-',
    linkify: true,
    linkTarget: '',
    typographer: false,
    quotes: '“”‘’',

    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {
            }
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (__) {
        }

        return '';
    }
});

module.exports.md = md;