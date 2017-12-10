  
    export function create() {
        return {
            tag : 'div',
            attrs: {
                class: 'markdown-body'
            },
            children: [
                {
                    tag: 'div',
                    attrs: {id:'menu'},
                    children: [
                        {
                            tag: 'div',
                            children: ['CONTENT'],
                            style: {
                                textAlign: 'center',
                                fontSize: '16px',
                                marginBottom: 40,
                                marginTop: 40,
                                fontWeight: 'bold',
                            }
                        },
                        
            {
                tag: 'div',
                className: 'menu-block',
                style : {
                    paddingLeft: 24
                },
                children: [
                    
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-block-header',
                children: 'Introduction',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '16px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-introduction');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-introduction');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#ececed',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'uppercase',
                marginLeft: 20,
                listStyle:  'none',
                lineHeight: '18px'
            }
        }
    ,
                    {
                        tag: 'div',
                        className: 'menu-sub-block',
                        style: {
                            paddingLeft: 24
                        },
                        children: [
                            
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-sub-block-item',
                children: 'Why own framework',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-why-own-framework');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-why-own-framework');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#949aa9',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'false',
                marginLeft: false,
                listStyle:  'disc',
                lineHeight: '15px'
            }
        }
    
                        ]
                    }
                ] 
            },
            {
                tag: 'div',
                className: 'menu-block',
                style : {
                    paddingLeft: 24
                },
                children: [
                    
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-block-header',
                children: 'Docs',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '16px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-docs');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-docs');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#ececed',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'uppercase',
                marginLeft: 20,
                listStyle:  'none',
                lineHeight: '18px'
            }
        }
    ,
                    {
                        tag: 'div',
                        className: 'menu-sub-block',
                        style: {
                            paddingLeft: 24
                        },
                        children: [
                            
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-sub-block-item',
                children: 'Virtual Dom',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-virtual-dom');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-virtual-dom');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#949aa9',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'false',
                marginLeft: false,
                listStyle:  'disc',
                lineHeight: '15px'
            }
        }
    ,
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-sub-block-item',
                children: 'Bobril Node',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-bobril-node');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-bobril-node');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#949aa9',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'false',
                marginLeft: false,
                listStyle:  'disc',
                lineHeight: '15px'
            }
        }
    ,
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-sub-block-item',
                children: 'Initialization',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-initialization');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-initialization');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#949aa9',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'false',
                marginLeft: false,
                listStyle:  'disc',
                lineHeight: '15px'
            }
        }
    ,
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-sub-block-item',
                children: 'Bobril Component',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-bobril-component');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-bobril-component');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#949aa9',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'false',
                marginLeft: false,
                listStyle:  'disc',
                lineHeight: '15px'
            }
        }
    ,
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-sub-block-item',
                children: 'Events',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-events');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-events');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#949aa9',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'false',
                marginLeft: false,
                listStyle:  'disc',
                lineHeight: '15px'
            }
        }
    ,
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-sub-block-item',
                children: 'Assets',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-assets');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-assets');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#949aa9',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'false',
                marginLeft: false,
                listStyle:  'disc',
                lineHeight: '15px'
            }
        }
    ,
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-sub-block-item',
                children: 'Responsive Design',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-responsive-design');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-responsive-design');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#949aa9',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'false',
                marginLeft: false,
                listStyle:  'disc',
                lineHeight: '15px'
            }
        }
    
                        ]
                    }
                ] 
            },
            {
                tag: 'div',
                className: 'menu-block',
                style : {
                    paddingLeft: 24
                },
                children: [
                    
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-block-header',
                children: 'Community',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '16px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-community');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-community');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#ececed',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'uppercase',
                marginLeft: 20,
                listStyle:  'none',
                lineHeight: '18px'
            }
        }
    ,
                    {
                        tag: 'div',
                        className: 'menu-sub-block',
                        style: {
                            paddingLeft: 24
                        },
                        children: [
                            
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: 'menu-sub-block-item',
                children: 'Examples',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        var e = document.getElementById('menu-examples');
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-examples');
                            return;
                        }
                        var offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: '#949aa9',
                width: '150px',
                margin: 'auto',
                marginBottom: 13,
                textTransform: 'false',
                marginLeft: false,
                listStyle:  'disc',
                lineHeight: '15px'
            }
        }
    
                        ]
                    }
                ] 
            }
                    ],
                    style: {
                        position: 'fixed',
                        top: 90,
                        right: 30,
                        bottom: 30,
                        background: '#4c5060',
                        overflow: 'auto',
                        width: 240,
                        height: 'calc(100vh - 120px)',
                     }
                },
                {
                    tag: 'div',
                    children: [{"tag":"div","children":[{"tag":"/","children":"<p style=\"text-align: center;\">\n<b>Documentation under construction.</b>\n</p>\n<p style=\"text-align: center; margin: 24px 0px 24px 0px\">\nWe know, that it is not easy to develop application without any documentation. We hope, that these materials will help you to start.\n</p>\n<div style=\"width: 600px; height: 1px; background: #bdbdbd; margin: auto; margin-bottom:24px\"></div>\n<div id='menu-introduction' style='font-size: 34px; font-weight:400; color: #ececed; letter-spacing: 2.5px; padding-bottom: 10px'>INTRODUCTION</div>"}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id=\"menu-why-own-framework\">Why own framework</h2>\nFor one of our products, we needed the ability to generate single-file websites (all resources embedded). We are using these websites as a new digital channel."},{"tag":"p","children":["We started with by our opinion the best choice at that time ? Angular 1. However, we soon reached its performance and logic limits. After two years, Boris has evaluated a lot of other frameworks. Mainly ReactJs. Unfortunately, it did not meet all our needs."]},{"tag":"h3","children":["Mobile focus"]},{"tag":"p","children":["Touch or multitouch support in ReactJs was and is an afterthought. It was critical for us to simplify user code regardless of device and input type and browser (IE8+ at that time)."]},{"tag":"h3","children":["Easy to generate"]},{"tag":"p","children":["The core of our use is in Inspire Designer. It is not so easy to generate code in React. JSX is basically required to be used in React. It needs advanced JS optimizations in Babel to remove any JSX from resulting code, and the resulting code is still big."]},{"tag":"h3","children":["Size"]},{"tag":"p","children":["When you generate millions of embedded websites, size matters. React gzipped is 42K, Bobril is 17K. Unzipped size was also interesting for us, as the difference is even bigger. A similar problem is with Router libraries."]},{"tag":"h3","children":["Speed"]},{"tag":"p","children":["Bobril is faster in most operations. ",{"tag":"a","attrs":{"href":"https://localvoid.github.io/uibench/","title":""},"children":["You can test it here."]}," And in 2015, React was slow, they keep improving it over time."]},{"tag":"h3","children":["Own"]},{"tag":"p","children":["If you need modifications, you can do it on your own product easily without taking care about a lot of other use cases. Complexity is expensive. For example, Input element onChange behavior was broken in React in cases that were critical for us (it took them 3 years to fix these). Multiple virtual dom roots in Bobril simplify popups and modal dialogs. Unique CSS in JS solution is built in Bobril nearly from the beginning. Bobx (a Mobx-like library) benefits from deep integration with Bobril."]},{"tag":"p","children":["All this was for Inspire Designer at the beginning. But when we were thinking about the framework for another big product, we found that size, speed and using your own framework are significant advantages and decided to use it on company level. Of course, this decision has a disadvantage in the lack of community."]}]},{"tag":"div","children":[{"tag":"/","children":"<div id='menu-docs'style='font-size: 34px; font-weight:400; color: #ececed; letter-spacing: 2.5px; padding-bottom: 10px'>DOCS</div>"},{"tag":"p","children":["Bobril is component oriented framework with very lightweight virtual dom. It has no dependencies."]},{"tag":"p","children":["There are 2 versions of framework."]},{"tag":"p","children":["First should be used directly as scripts without any build tool, it declares global variable ",{"tag":"code","className":"","children":"b"}," which is like namespace for all Bobril methods. And is probably easiest way to start learning Bobril. "]},{"tag":"p","children":["Second one in package directory which is published in NPM. It is meant to be used with ",{"tag":"b","children":["bobril-build"]},". And should be used with standard ",{"tag":"b","children":["ES6 imports"]},". For this version there is also additional NPM module ",{"tag":"b","children":["bobril-g11n"]}," to help with globalization of Bobril applications."]},{"tag":"p","children":["There is used ",{"tag":"code","className":"","children":"DEBUG"}," variable which could be predefined to false and remove some code by uglify, also remove warnings for developer mistakes, so make sure you are using nonminified version in development."]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-virtual-dom'>Virtual Dom</h2>"},{"tag":"p","children":["Very basic examples to explain how the virtual dom is build by pure JS objects. Of course nothing prevents you to create your own helper functions to shorten code to less than original HTML."]},{"tag":"p","children":["Creation of maintainable Bobril components is explained further in documentation - ",{"tag":"a","attrs":{"href":"#menu-bobril-component","title":""},"children":["Bobril Component"]},"."]},{"tag":"table","children":[{"tag":"tr","children":[{"tag":"td","children":["HTML"]},{"tag":"td","children":["Bobril"]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<div></div>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"div\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<span>Hello</span>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"span\", children:\"Hello\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<a href=\"url\">Ex</a>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"a\", attrs: { href:\"url\" }, children:\"Ex\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<span style=\"text-size:20px\">Big</span>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"span\", style: { textSize:\"20px\" }, children:\"Big\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<h1 class=\"head\">&lt;</h1>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"h1\", className:\"head\", children:\"<\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"style=\"float:left\""}]},{"tag":"td","children":[{"tag":"code","className":"","children":"style: { cssFloat:\"left\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<div><br></div>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"div\", children: { tag:\"br\" } }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<div><span>A</span>B</div>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"div\", children: [ { tag:\"span\", children: \"A\" }, \"B\" ] }"}]}]}]},{"tag":"h4","children":["Children member in virtual dom could be:"]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"undefined"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"null"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"false"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"true"}]}]},{"tag":"li","children":[{"tag":"p","children":["string"]}]},{"tag":"li","children":[{"tag":"p","children":["number"]}]},{"tag":"li","children":[{"tag":"p","children":["object - Objects must contain at least one of ",{"tag":"code","className":"","children":"tag"}," or ",{"tag":"code","className":"","children":"component"}," (could build itself to VDOM)"]}]},{"tag":"li","children":[{"tag":"p","children":["array of all items above"]}]}]},{"tag":"p","children":["Children members ",{"tag":"code","className":"","children":"undefined"},", ",{"tag":"code","className":"","children":"null"},", ",{"tag":"code","className":"","children":"false"}," and ",{"tag":"code","className":"","children":"true"}," are automatically skipped. Nested arrays are flattened. Strings, numbers are DOM text nodes."]},{"tag":"p","children":["Maybe you are asking why skipping ",{"tag":"code","className":"","children":"false"}," and ",{"tag":"code","className":"","children":"true"}," is useful. It allows to write code like this:"]},{"tag":"pre","children":{"tag":"code","className":"javacript","children":"function div() {\n    return { tag:\"div\", children: [].split.call(arguments) };\n}\n\nme.children = items.map((v)=>div(v.name, \" \", v.readonly || { tag:\"button\", children: \"rename\" }));"}}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-bobril-node'>Bobril Node</h2>"},{"tag":"p","children":["More variants of bobril node exist: "]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"IBobrilNodeWithTag"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"IBobrilNodeWithComponent"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"IBobrilNodeWithChildren"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"IBobrilNode"}," - it is defined like ",{"tag":"code","className":"","children":"IBobrilNodeCommon & object"}]}]}]},{"tag":"p","children":["All of them inherit from ",{"tag":"code","className":"","children":"IBobrilNodeCommon"},"."]},{"tag":"p","children":["The definition of ",{"tag":"code","className":"","children":"IBobrilNodeCommon"}," is:"]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"// new node should atleast have tag or component or children member\ninterface IBobrilNodeCommon {\n    tag?: string;\n    key?: string;\n    className?: string;\n    style?: any;\n    attrs?: IBobrilAttributes;\n    children?: IBobrilChildren;\n    ref?: [IBobrilCtx, string] | ((node: IBobrilCacheNode) => void);\n    // set this for children to be set to their ctx.cfg, if undefined your own ctx.cfg will be used anyway\n    cfg?: any;\n    component?: IBobrilComponent;\n    // Bobril does not touch this, it is completely for user passing custom data to component\n    // It is very similar to props in ReactJs, it must be immutable, you have access to this through ctx.data\n    data?: any;\n}"}},{"tag":"p","children":["For a complete description of interfaces see: ",{"tag":"a","attrs":{"href":"https://github.com/Bobris/Bobril/blob/master/dist/bobril.d.ts","title":""},"children":["Bobril definition file"]},"."]},{"tag":"h3","children":["Tag"]},{"tag":"p","children":[{"tag":"code","className":"","children":"tag"}]},{"tag":"p","children":["There are 3 special values for ",{"tag":"code","className":"","children":"tag"},": "]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"empty string"}," - then children must be string and it means just DOM text node,\nstring in children is converted to this inside Bobril, there are not much reasons to use this directly."]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"\"/\""}," - it means that children (must be string) is treated as innerHTML. \nNormally you should not need it, but if you will use it, be very careful about XSS attacks and that string should never come directly from user. Probably only useful if you have Markdown renderer inside app."]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"\"-\""}," - it means to skip update of this component. It could be used for very similar purposes as ",{"tag":"code","className":"","children":"shouldChange"}," lifecycle method."]}]}]},{"tag":"p","children":["When ",{"tag":"code","className":"","children":"tag"}," is ",{"tag":"code","className":"","children":"\"svg\""},", Bobril automatically adds all namespace crap, so your code is more readable."]},{"tag":"h3","children":["Attrs"]},{"tag":"p","children":[{"tag":"code","className":"","children":"attrs"}]},{"tag":"p","children":["Field ",{"tag":"code","className":"","children":"attrs"}," is just JS object. "]},{"tag":"p","children":[{"tag":"b","children":["Warning"]},": Because ",{"tag":"code","className":"","children":"for"}," is reserved word in JS it must be written as ",{"tag":"code","className":"","children":"htmlFor"},"."]},{"tag":"h3","children":["Style"]},{"tag":"p","children":[{"tag":"code","className":"","children":"style"}]},{"tag":"p","children":["Attribute ",{"tag":"code","className":"","children":"style"}," is handled specially. It could be string or object. String case for ",{"tag":"code","className":"","children":"style"}," should be used very rarely, because it is not enriched like object case. "]},{"tag":"p","children":[{"tag":"b","children":["Warning"]},": For ",{"tag":"code","className":"","children":"style"}," key ",{"tag":"code","className":"","children":"float"}," must be written as ",{"tag":"code","className":"","children":"cssFloat"}," because it is also reserved keyword."]},{"tag":"h3","children":["Children"]},{"tag":"p","children":[{"tag":"code","className":"","children":"children"}]},{"tag":"p","children":["As a children, you can append any virtual dom member. "]},{"tag":"h3","children":["Component"]},{"tag":"p","children":[{"tag":"code","className":"","children":"component"}]},{"tag":"p","children":["Every bobril node could have ",{"tag":"code","className":"","children":"component"}," field defined.  It can contain main lifecycle methods. \nIt can also contain event handlers. You should not use native HTML events directly, for example through ",{"tag":"code","className":"","children":"attrs"}," field. "]},{"tag":"p","children":["If you need to use some of events currently not wrapped by Bobril, you can use \npostInitDom function to link event. It will be described in chapter ",{"tag":"a","attrs":{"href":"#menu-bobril-component","title":""},"children":["Bobril Component"]},"."]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-initialization'>Initialization</h2>"},{"tag":"h4","children":["b.init"]},{"tag":"h4","children":["b.addRoot"]},{"tag":"h4","children":["b.invalidate"]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-bobril-component'>Bobril Component</h2>"},{"tag":"h3","children":["Lifecycle"]},{"tag":"h4","children":["init"]},{"tag":"h4","children":["render"]},{"tag":"h4","children":["postRender"]},{"tag":"h4","children":["postInitDom"]},{"tag":"h4","children":["postUpdateDom"]},{"tag":"h4","children":["postUpdateDomEverytime"]},{"tag":"h4","children":["shouldChange"]},{"tag":"h4","children":["destroy"]},{"tag":"h4","children":["canActivate"]},{"tag":"h4","children":["canDeactivate"]},{"tag":"h3","children":["Component Creation"]},{"tag":"h4","children":["Context"]},{"tag":"h4","children":["IData Interface"]},{"tag":"h4","children":["createComponent"]},{"tag":"p","children":[{"tag":"code","className":"","children":"createComponent"}," is a base function for construct components. It accepts the ",{"tag":"code","className":"","children":"IBobrilComponent"}," object, which contains all lifecycle methods (",{"tag":"code","className":"","children":"init"},", ",{"tag":"code","className":"","children":"render"},", ",{"tag":"code","className":"","children":"postInitDom"},", etc.) and returns a function, which accepts typed data that are passed in ",{"tag":"code","className":"","children":"IBobrilCtx"}," to the defined lifecycle methods. Invocation of the created function will return ",{"tag":"a","attrs":{"href":"#createcomponent","title":""},"children":["IBobrilNode"]},".\nExample below illustrates how to create and use a simple ul/li list component.  "]},{"tag":"p","children":["Define the ",{"tag":"code","className":"","children":"ulList.ts"}," file:"]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"import * as b from 'bobril';\nimport * as LiItem from './liItem'\nexport interface IData {\n    items: b.IBobrilChildren[];\n    header: string;\n}\n\ninterface IContext extends b.IBobrilCtx {\n    data: IData;\n}\n\nexport const create = b.createComponent<IData>({\n    render(ctx: IContext, me: b.IBobrilNode, oldMe?: b.IBobrilCacheNode) {\n        me.tag = 'ul';\n        me.children = [\n            ctx.data.header,\n            ctx.data.items.map(item => LiItem.create({\n                content: item\n            }))\n        ];\n    }\n})"}},{"tag":"p","children":["Create file ",{"tag":"code","className":"","children":"liItem.ts"}," with liItem component:"]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"import * as b from 'bobril';\nexport interface IData {\n    content: b.IBobrilChildren;\n}\n\ninterface IContext extends b.IBobrilCtx {\n    data: IData;\n}\nexport const create = b.createComponent({\n    render(ctx: IContext, me: b.IBobrilNode) {\n        me.tag = 'li';\n        me.children = ctx.data.content;\n    }\n})"}},{"tag":"p","children":["Then you can reuse your component by simply calling it with IData interface:"]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"import * as UlList from './ulList.ts'\n\nUlList.create({\n    header: 'Animals',\n    items: ['dog', 'cat', 'cow', 'bird']\n});"}},{"tag":"p","children":["These lines of code simply results in the following. You can ",{"tag":"a","attrs":{"href":"#style","title":""},"children":["style"]}," the result.  "]},{"tag":"p","children":["Animals"]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["dog"]}]},{"tag":"li","children":[{"tag":"p","children":["cat"]}]},{"tag":"li","children":[{"tag":"p","children":["cow"]}]},{"tag":"li","children":[{"tag":"p","children":["bird"]}]}]},{"tag":"h4","children":["createDerivedComponent"]},{"tag":"h4","children":["createOverridingComponent"]},{"tag":"h4","children":["createVirtualComponent"]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-events'>Events</h2>"},{"tag":"h3","children":["Event basics"]},{"tag":"p","children":["Bobril application never works with native browser events directly. First native browser events listened only on body/document, then are processed, normalized by Bobril, and finally they just call methods on your component ",{"tag":"code","className":"","children":"IBobrilComponent"}," implementation. First simple example how to listen on any click:"]},{"tag":"pre","children":{"tag":"code","className":"","children":"interface IButtonData {\n    children?: b.IBobrilChildren;\n    action: () => void;\n}\n\ninterface IButtonCtx extends b.IBobrilCtx {\n    data: IButtonData;\n}\n\nconst Button = b.createVirtualComponent<IButtonData>({\n    render(ctx: IButtonCtx, me: b.IBobrilNode) {\n        me.tag = \"button\";\n        me.children = ctx.data.children;\n    },\n    onClick(ctx: IButtonCtx): boolean {\n        ctx.data.action();\n        return true;\n    }\n});"}},{"tag":"p","children":["Boolean result means for events which bubble (most of them) if they should stop bubble and also prevent default. There is way to stop bubbling without preventing default, you can do by implementing this IBobrilComponent method "]},{"tag":"pre","children":{"tag":"code","className":"","children":"shouldStopBubble(ctx: IBobrilCtx, name: string, param: Object): boolean;"}},{"tag":"p","children":["It could be used in checkbox component where you don't want to prevent default browser handling of mouse click, but also parent components should not know about it, so they cannot prevent default on it them self."]},{"tag":"pre","children":{"tag":"code","className":"","children":"shouldStopBubble(_ctx: b.IBobrilCtx, name: string): boolean {\n    return name === \"onClick\";\n}"}},{"tag":"h3","children":["How to emit your own Bobril events"]},{"tag":"p","children":["If you want to emit Bobril bubbling event you can call:"]},{"tag":"pre","children":{"tag":"code","className":"","children":"b.bubble(nodeWhereToStartBubbling, \"onYourEventName\", { someParams: 42 });\n\nbubble(node: IBobrilCacheNode | null | undefined, name: string, param: any): IBobrilCtx | undefined"}},{"tag":"p","children":["Bubble method will return ctx of component which returned truefy result."]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-assets'>Assets</h2>"},{"tag":"h3","children":["CSS Injection"]},{"tag":"h4","children":["b.injectCss"]},{"tag":"h3","children":["Loading Assets"]},{"tag":"h4","children":["b.asset"]},{"tag":"h4","children":["b.sprite"]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-responsive-design'>Responsive Design</h2>"},{"tag":"h3","children":["Media"]},{"tag":"h4","children":["IBobrilMedia"]},{"tag":"h4","children":["getMedia"]}]},{"tag":"div","children":[{"tag":"/","children":"<div id ='menu-community' style='font-size: 34px; font-weight:400; color: #ececed; letter-spacing: 2.5px; padding-bottom: 10px'>COMMUNITY</div>"}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-examples'>Examples</h2>\n* [Bobril-build examples here.](https://github.com/Bobris/Bobril/tree/master/bbExamples)\n* [Older examples here.](https://github.com/Bobris/Bobril/tree/master/examples)"}]}],
                    style: {

                        marginRight: '90px',
                        padding: '60px 330px 120px 90px'
                    }
                }
            ]
        }
    }