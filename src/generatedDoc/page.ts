  
    import * as b from 'bobril';
    import * as viewportUtils from '../utils/viewport';
    
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
                component: {
                    init: (ctx) => {
                        ctx.activeMenuAnchor =  "menu-introduction";
                    },
                    
                    postInitDom(ctx) {
                        const menuAnchors = ["menu-introduction","menu-why-own-framework","menu-developer-guide","menu-virtual-dom","menu-bobril-node","menu-initialization","menu-bobril-component","menu-events","menu-assets","menu-responsive-design","menu-community","menu-examples"];
                        const menuAnchorsBoundary = viewportUtils.getBoundariesForHtmlElements(menuAnchors);
                
                        function findActiveAnchor() {
                            ctx.activeMenuAnchor = menuAnchors[menuAnchorsBoundary.findIndex((boundary) =>
                                 viewportUtils.isInBoundaries(b.getWindowScroll()[1] + 75, boundary)
                            )];
                            b.invalidate(ctx);
                        }
                            
                        b.addOnScroll(() => {
                            findActiveAnchor();
                        });
                        
                        findActiveAnchor();
                    },
                    
                    render(ctx, me) {
                       const activeAnchor = ctx.activeMenuAnchor;
                       
                       me.children = [
                            
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: "menu-block-header",
                children: 'Introduction',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        let e = document.getElementById('menu-introduction');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-introduction');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-introduction" ? '#ffffff' : 'rgb(148, 154, 169)',
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
                        let e = document.getElementById('menu-why-own-framework');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-why-own-framework');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-why-own-framework" ? '#ffffff' : '#949aa9',
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
                }
            },
            {
                tag: 'div',
                className: 'menu-block',
                style : {
                    paddingLeft: 24
                },
                component: {
                    init: (ctx) => {
                        ctx.activeMenuAnchor =  "menu-introduction";
                    },
                    
                    postInitDom(ctx) {
                        const menuAnchors = ["menu-introduction","menu-why-own-framework","menu-developer-guide","menu-virtual-dom","menu-bobril-node","menu-initialization","menu-bobril-component","menu-events","menu-assets","menu-responsive-design","menu-community","menu-examples"];
                        const menuAnchorsBoundary = viewportUtils.getBoundariesForHtmlElements(menuAnchors);
                
                        function findActiveAnchor() {
                            ctx.activeMenuAnchor = menuAnchors[menuAnchorsBoundary.findIndex((boundary) =>
                                 viewportUtils.isInBoundaries(b.getWindowScroll()[1] + 75, boundary)
                            )];
                            b.invalidate(ctx);
                        }
                            
                        b.addOnScroll(() => {
                            findActiveAnchor();
                        });
                        
                        findActiveAnchor();
                    },
                    
                    render(ctx, me) {
                       const activeAnchor = ctx.activeMenuAnchor;
                       
                       me.children = [
                            
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: "menu-block-header",
                children: 'DEVELOPER GUIDE',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        let e = document.getElementById('menu-developer-guide');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-developer-guide');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-developer-guide" ? '#ffffff' : 'rgb(148, 154, 169)',
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
                        let e = document.getElementById('menu-virtual-dom');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-virtual-dom');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-virtual-dom" ? '#ffffff' : '#949aa9',
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
                        let e = document.getElementById('menu-bobril-node');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-bobril-node');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-bobril-node" ? '#ffffff' : '#949aa9',
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
                        let e = document.getElementById('menu-initialization');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-initialization');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-initialization" ? '#ffffff' : '#949aa9',
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
                        let e = document.getElementById('menu-bobril-component');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-bobril-component');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-bobril-component" ? '#ffffff' : '#949aa9',
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
                        let e = document.getElementById('menu-events');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-events');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-events" ? '#ffffff' : '#949aa9',
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
                        let e = document.getElementById('menu-assets');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-assets');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-assets" ? '#ffffff' : '#949aa9',
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
                        let e = document.getElementById('menu-responsive-design');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-responsive-design');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-responsive-design" ? '#ffffff' : '#949aa9',
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
                }
            },
            {
                tag: 'div',
                className: 'menu-block',
                style : {
                    paddingLeft: 24
                },
                component: {
                    init: (ctx) => {
                        ctx.activeMenuAnchor =  "menu-introduction";
                    },
                    
                    postInitDom(ctx) {
                        const menuAnchors = ["menu-introduction","menu-why-own-framework","menu-developer-guide","menu-virtual-dom","menu-bobril-node","menu-initialization","menu-bobril-component","menu-events","menu-assets","menu-responsive-design","menu-community","menu-examples"];
                        const menuAnchorsBoundary = viewportUtils.getBoundariesForHtmlElements(menuAnchors);
                
                        function findActiveAnchor() {
                            ctx.activeMenuAnchor = menuAnchors[menuAnchorsBoundary.findIndex((boundary) =>
                                 viewportUtils.isInBoundaries(b.getWindowScroll()[1] + 75, boundary)
                            )];
                            b.invalidate(ctx);
                        }
                            
                        b.addOnScroll(() => {
                            findActiveAnchor();
                        });
                        
                        findActiveAnchor();
                    },
                    
                    render(ctx, me) {
                       const activeAnchor = ctx.activeMenuAnchor;
                       
                       me.children = [
                            
        {
            tag: 'div',
            children:  {
                tag: 'div',
                className: "menu-block-header",
                children: 'Community',
                style: {
                    textDecoration: 'none',
                    display: 'list-item',
                    fontSize: '15px',
                    cursor: 'pointer'
                }, 
                component: {
                    onClick: () => {
                        let e = document.getElementById('menu-community');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-community');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-community" ? '#ffffff' : 'rgb(148, 154, 169)',
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
                        let e = document.getElementById('menu-examples');
                        
                        if (e === undefined || e === null) {
                            console.warn('Cannot find element with id:', 'menu-examples');
                            return;
                        }
                        
                        let offsetTop = e.offsetTop - 70; // Header compensation + 10px;
                        window.scrollTo(0, offsetTop);
                    }
                }
            },
            style: {
                color: activeAnchor === "menu-examples" ? '#ffffff' : '#949aa9',
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
                }
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
                    children: [{"tag":"div","children":[{"tag":"/","children":"<div id='menu-docs' style='font-size: 34px; font-weight:600; color: #ececed; letter-spacing: 2.5px; padding-bottom: 10px'>DOCS</div>\n<h2 id='menu-introduction'>INTRODUCTION</h2>"}]},{"tag":"div","children":[{"tag":"/","children":"<h3 id=\"menu-why-own-framework\">Why own framework</h3>\nFor one of our products, we needed the ability to generate single-file websites (all resources embedded). We are using these websites as a new digital channel."},{"tag":"p","children":["We started with by our opinion the best choice at that time ? Angular 1. However, we soon reached its performance and logic limits. After two years, Boris has evaluated a lot of other frameworks. Mainly ReactJs. Unfortunately, it did not meet all our needs."]},{"tag":"h4","children":["Mobile focus"]},{"tag":"p","children":["Touch or multitouch support in ReactJs was and is an afterthought. It was critical for us to simplify user code regardless of device and input type and browser (IE8+ at that time)."]},{"tag":"h4","children":["Easy to generate"]},{"tag":"p","children":["The core of our use is in Inspire Designer. It is not so easy to generate code in React. JSX is basically required to be used in React. It needs advanced JS optimizations in Babel to remove any JSX from resulting code, and the resulting code is still big."]},{"tag":"h4","children":["Size"]},{"tag":"p","children":["When you generate millions of embedded websites, size matters. React gzipped is 42K, Bobril is 17K. Unzipped size was also interesting for us, as the difference is even bigger. A similar problem is with Router libraries."]},{"tag":"h4","children":["Speed"]},{"tag":"p","children":["Bobril is faster in most operations. ",{"tag":"a","attrs":{"href":"https://localvoid.github.io/uibench/","title":""},"children":["You can test it here."]}," And in 2015, React was slow, they keep improving it over time."]},{"tag":"h4","children":["Own"]},{"tag":"p","children":["If you need modifications, you can do it on your own product easily without taking care about a lot of other use cases. Complexity is expensive. For example, Input element onChange behavior was broken in React in cases that were critical for us (it took them 3 years to fix these). Multiple virtual dom roots in Bobril simplify popups and modal dialogs. Unique CSS in JS solution is built in Bobril nearly from the beginning. Bobx (a Mobx-like library) benefits from deep integration with Bobril."]},{"tag":"p","children":["All this was for Inspire Designer at the beginning. But when we were thinking about the framework for another big product, we found that size, speed and using your own framework are significant advantages and decided to use it on company level. Of course, this decision has a disadvantage in the lack of community."]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-developer-guide'>DEVELOPER GUIDE</h2>"},{"tag":"p","children":["Bobril is component oriented framework with very lightweight virtual dom. It has no dependencies."]},{"tag":"p","children":["There are 2 versions of framework."]},{"tag":"p","children":["First should be used directly as scripts without any build tool, it declares global variable ",{"tag":"code","className":"","children":"b"}," which is like namespace for all Bobril methods. And is probably easiest way to start learning Bobril. "]},{"tag":"p","children":["Second one in package directory which is published in NPM. It is meant to be used with ",{"tag":"b","children":["bobril-build"]},". And should be used with standard ",{"tag":"b","children":["ES6 imports"]},". For this version there is also additional NPM module ",{"tag":"b","children":["bobril-g11n"]}," to help with globalization of Bobril applications."]},{"tag":"p","children":["There is used ",{"tag":"code","className":"","children":"DEBUG"}," variable which could be predefined to false and remove some code by uglify, also remove warnings for developer mistakes, so make sure you are using nonminified version in development."]}]},{"tag":"div","children":[{"tag":"/","children":"<h3 id='menu-virtual-dom'>Virtual Dom</h3>"},{"tag":"p","children":["Very basic examples to explain how the virtual dom is build by pure JS objects. Of course nothing prevents you to create your own helper functions to shorten code to less than original HTML."]},{"tag":"p","children":["Creation of maintainable Bobril components is explained further in documentation - ",{"tag":"a","attrs":{"href":"#menu-bobril-component","title":""},"children":["Bobril Component"]},"."]},{"tag":"table","children":[{"tag":"tr","children":[{"tag":"td","children":["HTML"]},{"tag":"td","children":["Bobril"]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<div></div>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"div\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<span>Hello</span>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"span\", children:\"Hello\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<a href=\"url\">Ex</a>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"a\", attrs: { href:\"url\" }, children:\"Ex\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<span style=\"text-size:20px\">Big</span>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"span\", style: { textSize:\"20px\" }, children:\"Big\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<h1 class=\"head\">&lt;</h1>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"h1\", className:\"head\", children:\"<\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"style=\"float:left\""}]},{"tag":"td","children":[{"tag":"code","className":"","children":"style: { cssFloat:\"left\" }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<div><br></div>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"div\", children: { tag:\"br\" } }"}]}]},{"tag":"tr","children":[{"tag":"td","children":[{"tag":"code","className":"","children":"<div><span>A</span>B</div>"}]},{"tag":"td","children":[{"tag":"code","className":"","children":"{ tag:\"div\", children: [ { tag:\"span\", children: \"A\" }, \"B\" ] }"}]}]}]},{"tag":"h5","children":["Children member in virtual dom could be:"]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"undefined"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"null"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"false"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"true"}]}]},{"tag":"li","children":[{"tag":"p","children":["string"]}]},{"tag":"li","children":[{"tag":"p","children":["number"]}]},{"tag":"li","children":[{"tag":"p","children":["object - Objects must contain at least one of ",{"tag":"code","className":"","children":"tag"}," or ",{"tag":"code","className":"","children":"component"}," (could build itself to VDOM)"]}]},{"tag":"li","children":[{"tag":"p","children":["array of all items above"]}]}]},{"tag":"p","children":["Children members ",{"tag":"code","className":"","children":"undefined"},", ",{"tag":"code","className":"","children":"null"},", ",{"tag":"code","className":"","children":"false"}," and ",{"tag":"code","className":"","children":"true"}," are automatically skipped. Nested arrays are flattened. Strings, numbers are DOM text nodes."]},{"tag":"p","children":["Maybe you are asking why skipping ",{"tag":"code","className":"","children":"false"}," and ",{"tag":"code","className":"","children":"true"}," is useful. It allows to write code like this:"]},{"tag":"pre","children":{"tag":"code","className":"javacript","children":"function div() {\n    return { tag:\"div\", children: [].split.call(arguments) };\n}\n\nme.children = items.map((v)=>div(v.name, \" \", v.readonly || { tag:\"button\", children: \"rename\" }));"}}]},{"tag":"div","children":[{"tag":"/","children":"<h3 id='menu-bobril-node'>Bobril Node</h3>"},{"tag":"p","children":["More variants of bobril node exist: "]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"IBobrilNodeWithTag"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"IBobrilNodeWithComponent"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"IBobrilNodeWithChildren"}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"IBobrilNode"}," - it is defined like ",{"tag":"code","className":"","children":"IBobrilNodeCommon & object"}]}]}]},{"tag":"p","children":["All of them inherit from ",{"tag":"code","className":"","children":"IBobrilNodeCommon"},"."]},{"tag":"p","children":["The definition of ",{"tag":"code","className":"","children":"IBobrilNodeCommon"}," is:"]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"// new node should atleast have tag or component or children member\ninterface IBobrilNodeCommon {\n    tag?: string;\n    key?: string;\n    className?: string;\n    style?: any;\n    attrs?: IBobrilAttributes;\n    children?: IBobrilChildren;\n    ref?: [IBobrilCtx, string] | ((node: IBobrilCacheNode) => void);\n    // set this for children to be set to their ctx.cfg, if undefined your own ctx.cfg will be used anyway\n    cfg?: any;\n    component?: IBobrilComponent;\n    // Bobril does not touch this, it is completely for user passing custom data to component\n    // It is very similar to props in ReactJs, it must be immutable, you have access to this through ctx.data\n    data?: any;\n}"}},{"tag":"p","children":["For a complete description of interfaces see: ",{"tag":"a","attrs":{"href":"https://github.com/Bobris/Bobril/blob/master/dist/bobril.d.ts","title":""},"children":["Bobril definition file"]},"."]},{"tag":"h4","children":["Tag"]},{"tag":"p","children":[{"tag":"code","className":"","children":"tag"}]},{"tag":"p","children":["There are 3 special values for ",{"tag":"code","className":"","children":"tag"},": "]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"empty string"}," - then children must be string and it means just DOM text node,\nstring in children is converted to this inside Bobril, there are not much reasons to use this directly."]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"\"/\""}," - it means that children (must be string) is treated as innerHTML. \nNormally you should not need it, but if you will use it, be very careful about XSS attacks and that string should never come directly from user. Probably only useful if you have Markdown renderer inside app."]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":"\"-\""}," - it means to skip update of this component. It could be used for very similar purposes as ",{"tag":"code","className":"","children":"shouldChange"}," lifecycle method."]}]}]},{"tag":"p","children":["When ",{"tag":"code","className":"","children":"tag"}," is ",{"tag":"code","className":"","children":"\"svg\""},", Bobril automatically adds all namespace crap, so your code is more readable."]},{"tag":"h4","children":["Attrs"]},{"tag":"p","children":[{"tag":"code","className":"","children":"attrs"}]},{"tag":"p","children":["Field ",{"tag":"code","className":"","children":"attrs"}," is just JS object. "]},{"tag":"p","children":[{"tag":"b","children":["Warning"]},": Because ",{"tag":"code","className":"","children":"for"}," is reserved word in JS it must be written as ",{"tag":"code","className":"","children":"htmlFor"},"."]},{"tag":"h4","children":["Style"]},{"tag":"p","children":[{"tag":"code","className":"","children":"style"}]},{"tag":"p","children":["Attribute ",{"tag":"code","className":"","children":"style"}," is handled specially. It could be string or object. String case for ",{"tag":"code","className":"","children":"style"}," should be used very rarely, because it is not enriched like object case. "]},{"tag":"p","children":[{"tag":"b","children":["Warning"]},": For ",{"tag":"code","className":"","children":"style"}," key ",{"tag":"code","className":"","children":"float"}," must be written as ",{"tag":"code","className":"","children":"cssFloat"}," because it is also reserved keyword."]},{"tag":"h4","children":["Children"]},{"tag":"p","children":[{"tag":"code","className":"","children":"children"}]},{"tag":"p","children":["As a children, you can append any virtual dom member. "]},{"tag":"h4","children":["Component"]},{"tag":"p","children":[{"tag":"code","className":"","children":"component"}]},{"tag":"p","children":["Every bobril node could have ",{"tag":"code","className":"","children":"component"}," field defined.  It can contain main lifecycle methods. \nIt can also contain event handlers. You should not use native HTML events directly, for example through ",{"tag":"code","className":"","children":"attrs"}," field. "]},{"tag":"p","children":["If you need to use some of events currently not wrapped by Bobril, you can use \npostInitDom function to link event. It will be described in chapter ",{"tag":"a","attrs":{"href":"#menu-bobril-component","title":""},"children":["Bobril Component"]},"."]}]},{"tag":"div","children":[{"tag":"/","children":"<h3 id='menu-initialization'>Initialization</h3>"},{"tag":"h5","children":["b.init"]},{"tag":"h5","children":["b.addRoot"]},{"tag":"h5","children":["b.invalidate"]}]},{"tag":"div","children":[{"tag":"/","children":"<h3 id='menu-bobril-component'>Bobril Component</h3>"},{"tag":"h4","children":["Lifecycle"]},{"tag":"h5","children":["init"]},{"tag":"p","children":["This is a component's initilization method that is called first in the component's lifecycle. Also, it is only called once, before a new node in the virtual dom should be created. The me members (tag, attrs, children, ...) could be modified. The ctx is initialized. It is possible to configure the intial state of the component, to register listeners."]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Combobox Initilization"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"init(ctx: IContext): void {\n    ctx.isChrome = BrowserIdentifier.isChrome();\n    ctx.isOpen = false;\n    ctx.isFiltering = false;\n    ctx.longestItemScrollWidth = 0;\n    if (ctx.data.selectedItem) {\n        ctx.selectedItem = ctx.data.selectedItem;\n    } else if (ctx.data.noValueItem && ctx.data.noValueItem === ctx.data.value) {\n        ctx.selectedItem = ctx.data.noValueItem;\n    }\n}"}},{"tag":"h5","children":["render"]},{"tag":"p","children":["A place where ",{"tag":"b","children":["a component's structure is created"]},". This structure is rendered in page. In case of initialization, this is called after the init method. In case of update after shouldChange returns true. You can do any update/init tasks. The ctx.data is updated before calling this method."]},{"tag":"p","children":["The so called 'Reconciliation' occurrs. A \"diffing\" algorithm runs in the background and it decides whether the rendering occurrs or not. Virt. DOM1 (old) is compared to virt. DOM2 (actual) and if a difference is found, a re-render takes place."]},{"tag":"p","children":["If your components have keys assigned to them, they must be identical to prevent unwanted renders, which leads to optimal performance of the application. Without keys, the order of elements in the virtual DOM is compared. You must have keys when working with a dynamic number of components."]},{"tag":"p","children":["The method passes the \"me.children\" parameter ",{"tag":"div","children":["translated to innerHtml + special cases (\"/\", \"-\" - emptiness = a virtual component)"]},". This is about the content of a component in DOM. \"me\" is a div that can be filled and styled. \"me.children\" is the content of this div. \"me.tag\" is the name of an element (e.g. \"input\"). \"me.attrs\" contains div attributes (\"src, width, ...\")."]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Rendering Page Content"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"render(ctx: IContext, me: b.IBobrilNode): void {\n    me.children = ExampleComponent.create({\n        ...\n    });\n}"}},{"tag":"h5","children":["postRender"]},{"tag":"p","children":["Called when a real DOM is not yet available (HTMLElement). In other words, it already exists but we do not want to combine reading and writing methods in DOM. This is useful for kind of layout in JS features. The previous state of the component is available. Called after all children are rendered, but before updating own attrs. All of this can be reacted to."]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Animation Termination"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"postRender(ctx: IContext) {\n    if (!animationCompleted(ctx.animatedItems)) return;\n\n    const currentStableNodeKey = stableAnimatedItemIn(ctx.animatedItems).node.key;\n    if (currentStableNodeKey && !onCompletedInvokedAfterStabilizationOf(ctx, currentStableNodeKey)) {\n        if (ctx.data.onCompleted) ctx.data.onCompleted();\n        ctx.lastStableRouteNodeKey = currentStableNodeKey;\n        b.invalidate(ctx);\n    }\n}"}},{"tag":"h5","children":["postInitDom"]},{"tag":"p","children":["A real DOM is at our disposal and also, it is a good time for its potential update (HTMLElement). Called from children to parents order for new nodes. It is only called once in its entire lifecycle. I know the dimensions, I can select and perform slower and more demanding operations. At the same time, it is a suitable place for inserting content outside of bobril (markdown, XML). Any work with the real DOM is possible."]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Focus on the Component and a Specific Operation with the Component (radiobutton)"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"postInitDom(_ctx: IContext, _me: b.IBobrilNode, element: HTMLInputElement) {\n    element.focus();\n    element.select();\n}"}},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Perfect Place for Calculating the Component's Size if it's Static Content (otherwise after postUpdateDom)"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"postInitDom(ctx: IContext, _me: b.IBobrilCacheNode, htmlElement: HTMLElement) {\n    this.setLeftColumnWidth(htmlElement.clientWidth);\n    b.invalidate(ctx);\n}"}},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Suitable place for force rerender of Component"]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["invalidate = component rerender"]}]}]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"postInitDom(ctx: b.IBobrilCtx) {\n    b.invalidate(ctx);\n}"}},{"tag":"h5","children":["postUpdateDom"]},{"tag":"p","children":["The real DOM is available and at the same time, it is the right time to update it (HTMLElement). Called from children to parents order for new nodes. It is always called since the second rendering. During the first rendering, postInitDom is called. I know the dimensions, I can select and perform slower and more difficult operations. It is also a suitable place for inserting non-bobril content (markdown, XML). Any work with the real DOM is possible."]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Configuring Size Based on the Currently Available Space"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"postUpdateDom(ctx: IContext, _me: b.IBobrilCacheNode, htmlElement: HTMLElement) {\n    this.setLeftColumnWidth(htmlElement.clientWidth);\n    b.invalidate(ctx);\n}"}},{"tag":"h5","children":["postUpdateDomEverytime"]},{"tag":"p","children":["Allows to apply actions with the real DOM in every frame even if a render was not called. Called from children to parents order for updated nodes.\nIt stands outside of component lifecycle."]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Size Adjustment"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"postUpdateDomEverytime(ctx: MainContextStore) {\n    ctx.recalculateSizing(document.body.clientWidth);\n}"}},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"postUpdateDomEverytime(ctx: IContext, _me: b.IBobrilCacheNode, element: HTMLElement) {\n    const availableContentHeight = element.offsetParent.clientHeight;\n    ctx.data.store.updateAvailableParamListHeight(availableContentHeight);\n}"}},{"tag":"h5","children":["shouldChange"]},{"tag":"p","children":["Generally, this is a place where it is possible to stop a component rendering or to implement custom rendering logic. E.g. if a render is difficult and it is checked beforehand that important data hasn't changed. Return false when whole subtree should not be changed from last time, you can still update any me members except key. Default implementation always return true."]},{"tag":"p","children":["In selected cases, it is possible to circumvent it. What occurs: color change => theme change => styleDef function change => calling of invalidateShouldChange() => calling of shouldChange(), but its output is ignored and a render takes place."]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Stopping of a Render"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"export let create = b.createComponent<IDataRulerDash>({\n  shouldChange(ctx: IRulerDashContext): boolean {\n    return changeRule(ctx.data.commonCtx);\n  },\n  render(ctx: IRulerDashContext, me: b.IBobrilNode) {\n    me.children = createScaleDashes(ctx.data.commonCtx);\n  }\n});"}},{"tag":"h5","children":["destroy"]},{"tag":"p","children":["A good place for things like listener unsubscription etc. Called just before removing node from DOM."]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example:"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"destroy() {\n    getLocalStorageListener().resetListener();\n}"}},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"destroy() {\n    getPageLeavingListener().resetListener();\n}"}},{"tag":"h5","children":["canActivate"]},{"tag":"p","children":["This functions provides the ability to manage access and rights. It is called before the init method.\nThere are some cases when we need to manage whether a current page on a current route is available or whether we can leave the current page. \nIt can stop the current transition in a target handler by returning false or redirect to the new specified transition."]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Access Handling"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"canActivate() {\n    return getUserRightsStore().initUserRights();\n}"}},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: ",{"tag":"b","children":["Handle the not Logged User on Accessing the Page"]}," two by adding the canActivate function"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"canActivate() {\n    if (loggedIn)\n        returntrue;\n    alert('You are not logged in!');\n    return b.createRedirectReplace('one');\n}"}},{"tag":"h5","children":["canDeactivate"]},{"tag":"p","children":["Provides the ability to stop the attempt to exit a page. For example, because of unsaved changed. It stands outside of lifecycle.\nIt only works when exiting through a router (not when closing a page).\nThere are some cases when we need to manage whether a current page on a current route is available or whether we can leave the current page. \nCan stop the current transition in the a source handler by returning false or redirect to the new specified transition."]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Examples:"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"canDeactivate(_ctx: AdministrationAwsContextStore, transition: b.IRouteTransition): boolean {\n    return getPageLeavingListener().canLeave(transition);\n}"}},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["Example: Handle the not Logged User on Accessing the Page Two by Adding the canActivate Function"]}]}]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"canDeactivate() {\n    return !!value.trim() || confirm('The textbox is empty. Are you sure?');\n}"}},{"tag":"h4","children":["Component Creation"]},{"tag":"h5","children":["Context"]},{"tag":"h5","children":["IData Interface"]},{"tag":"h5","children":["createComponent"]},{"tag":"p","children":[{"tag":"code","className":"","children":"createComponent"}," is a base function for construct components. It accepts the ",{"tag":"code","className":"","children":"IBobrilComponent"}," object, which contains all lifecycle methods (",{"tag":"code","className":"","children":"init"},", ",{"tag":"code","className":"","children":"render"},", ",{"tag":"code","className":"","children":"postInitDom"},", etc.) and returns a function, which accepts typed data that are passed in ",{"tag":"code","className":"","children":"IBobrilCtx"}," to the defined lifecycle methods. Invocation of the created function will return ",{"tag":"a","attrs":{"href":"#createcomponent","title":""},"children":["IBobrilNode"]},".\nExample below illustrates how to create and use a simple ul/li list component.  "]},{"tag":"p","children":["Define the ",{"tag":"code","className":"","children":"ulList.ts"}," file:"]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"import * as b from 'bobril';\nimport * as LiItem from './liItem'\nexport interface IData {\n    items: b.IBobrilChildren[];\n    header: string;\n}\n\ninterface IContext extends b.IBobrilCtx {\n    data: IData;\n}\n\nexport const create = b.createComponent<IData>({\n    render(ctx: IContext, me: b.IBobrilNode, oldMe?: b.IBobrilCacheNode) {\n        me.tag = 'ul';\n        me.children = [\n            ctx.data.header,\n            ctx.data.items.map(item => LiItem.create({\n                content: item\n            }))\n        ];\n    }\n})"}},{"tag":"p","children":["Create file ",{"tag":"code","className":"","children":"liItem.ts"}," with liItem component:"]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"import * as b from 'bobril';\nexport interface IData {\n    content: b.IBobrilChildren;\n}\n\ninterface IContext extends b.IBobrilCtx {\n    data: IData;\n}\nexport const create = b.createComponent({\n    render(ctx: IContext, me: b.IBobrilNode) {\n        me.tag = 'li';\n        me.children = ctx.data.content;\n    }\n})"}},{"tag":"p","children":["Then you can reuse your component by simply calling it with IData interface:"]},{"tag":"pre","children":{"tag":"code","className":"typescript","children":"import * as UlList from './ulList.ts'\n\nUlList.create({\n    header: 'Animals',\n    items: ['dog', 'cat', 'cow', 'bird']\n});"}},{"tag":"p","children":["These lines of code simply results in the following. You can ",{"tag":"a","attrs":{"href":"#style","title":""},"children":["style"]}," the result.  "]},{"tag":"p","children":["Animals"]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":["dog"]}]},{"tag":"li","children":[{"tag":"p","children":["cat"]}]},{"tag":"li","children":[{"tag":"p","children":["cow"]}]},{"tag":"li","children":[{"tag":"p","children":["bird"]}]}]},{"tag":"h5","children":["createDerivedComponent"]},{"tag":"h5","children":["createOverridingComponent"]},{"tag":"h5","children":["createVirtualComponent"]}]},{"tag":"div","children":[{"tag":"/","children":"<h3 id='menu-events'>Events</h3>"},{"tag":"h4","children":["Event basics"]},{"tag":"p","children":["Bobril application never works with native browser events directly. First native browser events listened only on body/document, then are processed, normalized by Bobril, and finally they just call methods on your component ",{"tag":"code","className":"","children":"IBobrilComponent"}," implementation. First simple example how to listen on any click:"]},{"tag":"pre","children":{"tag":"code","className":"","children":"interface IButtonData {\n    children?: b.IBobrilChildren;\n    action: () => void;\n}\n\ninterface IButtonCtx extends b.IBobrilCtx {\n    data: IButtonData;\n}\n\nconst Button = b.createVirtualComponent<IButtonData>({\n    render(ctx: IButtonCtx, me: b.IBobrilNode) {\n        me.tag = \"button\";\n        me.children = ctx.data.children;\n    },\n    onClick(ctx: IButtonCtx): boolean {\n        ctx.data.action();\n        return true;\n    }\n});"}},{"tag":"p","children":["Boolean result means for events which bubble (most of them) if they should stop bubble and also prevent default. There is way to stop bubbling without preventing default, you can do by implementing this IBobrilComponent method "]},{"tag":"pre","children":{"tag":"code","className":"","children":"shouldStopBubble(ctx: IBobrilCtx, name: string, param: Object): boolean;"}},{"tag":"p","children":["It could be used in checkbox component where you don't want to prevent default browser handling of mouse click, but also parent components should not know about it, so they cannot prevent default on it them self."]},{"tag":"pre","children":{"tag":"code","className":"","children":"shouldStopBubble(_ctx: b.IBobrilCtx, name: string): boolean {\n    return name === \"onClick\";\n}"}},{"tag":"h4","children":["How to emit your own Bobril events"]},{"tag":"p","children":["If you want to emit Bobril bubbling event you can call:"]},{"tag":"pre","children":{"tag":"code","className":"","children":"b.bubble(nodeWhereToStartBubbling, \"onYourEventName\", { someParams: 42 });\n\nbubble(node: IBobrilCacheNode | null | undefined, name: string, param: any): IBobrilCtx | undefined"}},{"tag":"p","children":["Bubble method will return ctx of component which returned truefy result."]}]},{"tag":"div","children":[{"tag":"/","children":"<h3 id='menu-assets'>Assets</h3>"},{"tag":"h4","children":["CSS Injection"]},{"tag":"h5","children":["b.injectCss"]},{"tag":"h4","children":["Loading Assets"]},{"tag":"h5","children":["b.asset"]},{"tag":"h5","children":["b.sprite"]}]},{"tag":"div","children":[{"tag":"/","children":"<h3 id='menu-responsive-design'>Responsive Design</h3>"},{"tag":"h4","children":["Media"]},{"tag":"h5","children":["IBobrilMedia"]},{"tag":"h5","children":["getMedia"]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id ='menu-community'>COMMUNITY</h2>"}]},{"tag":"div","children":[{"tag":"/","children":"<h3 id='menu-examples'>Examples</h3>\n* [Bobril-build examples here.](https://github.com/Bobris/Bobril/tree/master/bbExamples)\n* [Older examples here.](https://github.com/Bobris/Bobril/tree/master/examples)"}]}],
                    style: {

                        marginRight: '90px',
                        padding: '60px 330px 120px 90px'
                    }
                }
            ]
        }
    }