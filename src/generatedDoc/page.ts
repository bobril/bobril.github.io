export function create() {
        return {
            tag : 'div',
            children: [
                {
                    tag: 'div',
                    children: [
            {
                tag: 'ul',
                className: 'menu-block',
                children: [
                    
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-block-header',
                children: 'Introduction'
            }
        }
    ,
                    {
                        tag: 'ul',
                        className: 'menu-sub-block',
                        children: [
                            
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-sub-block-item',
                children: 'Why own framework'
            }
        }
    
                        ]
                    }
                ] 
            },
            {
                tag: 'ul',
                className: 'menu-block',
                children: [
                    
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-block-header',
                children: 'Docs'
            }
        }
    ,
                    {
                        tag: 'ul',
                        className: 'menu-sub-block',
                        children: [
                            
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-sub-block-item',
                children: 'Virtual Dom'
            }
        }
    ,
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-sub-block-item',
                children: 'Bobril Node'
            }
        }
    ,
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-sub-block-item',
                children: 'Initialization'
            }
        }
    ,
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-sub-block-item',
                children: 'Bobril Component'
            }
        }
    ,
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-sub-block-item',
                children: 'Events'
            }
        }
    ,
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-sub-block-item',
                children: 'Assets'
            }
        }
    ,
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-sub-block-item',
                children: 'Responsive Design'
            }
        }
    
                        ]
                    }
                ] 
            },
            {
                tag: 'ul',
                className: 'menu-block',
                children: [
                    
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-block-header',
                children: 'Community'
            }
        }
    ,
                    {
                        tag: 'ul',
                        className: 'menu-sub-block',
                        children: [
                            
        {
            tag: 'li',
            children:  {
                tag: 'a',
                className: 'menu-sub-block-item',
                children: 'Examples'
            }
        }
    
                        ]
                    }
                ] 
            }],
                    style: {
                        width: 190,
                        cssFloat: 'left',
                        position: 'fixed'
                    }
                },
                {
                    tag: 'div',
                    children: [{"tag":"div","children":[{"tag":"/","children":"<p style=\"text-align: center;\">\n<b>Documentation under construction.</b>\n</p>\n<p style=\"text-align: center; margin: 24px 0px 24px 0px\">\nWe know, that it is not easy to develop application without any documentation. We hope, that these materials will help you to start.\n</p>"}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id=\"menu-why-own-framework\">Why own framework</h2>\nFor one of our products, we needed the ability to generate single-file websites (all resources embedded). We are using these websites as a new digital channel."},{"tag":"p","children":["We started with by our opinion the best choice at that time ? Angular 1. However, we soon reached its performance and logic limits. After two years, Boris has evaluated a lot of other frameworks. Mainly ReactJs. Unfortunately, it did not meet all our needs."]},{"tag":"h3","children":["Mobile focus"]}]},{"tag":"div","children":[{"tag":"/","children":"<div id='menu-docs'style='font-size: 2em; font-weight:400; color: #0097a7'>Docs</div>"},{"tag":"p","children":["Bobril is component oriented framework with very lightweight virtual dom. It has no dependencies."]},{"tag":"p","children":["There are 2 versions of framework."]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-virtual-dom'>Virtual Dom</h2>"},{"tag":"p","children":["Very basic examples to explain how the virtual dom is build by pure JS objects. Of course nothing prevents you to create your own helper functions to shorten code to less than original HTML."]},{"tag":"p","children":["Creation of maintainable Bobril components is explained further in documentation - ",{"tag":"a","attrs":{"href":"#menu-bobril-component","title":""},"children":["Bobril Component"]},"."]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-bobril-node'>Bobril Node</h2>"},{"tag":"p","children":["More variants of bobril node exist: "]},{"tag":"ul","children":[{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":{"tag":"pre","children":"IBobrilNodeWithTag"}}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":{"tag":"pre","children":"IBobrilNodeWithComponent"}}]}]},{"tag":"li","children":[{"tag":"p","children":[{"tag":"code","className":"","children":{"tag":"pre","children":"IBobrilNodeWithChildren"}}]}]}]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-initialization'>Initialization</h2>"},{"tag":"h4","children":["b.init"]},{"tag":"h4","children":["b.addRoot"]},{"tag":"h4","children":["b.invalidate"]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-bobril-component'>Bobril Component</h2>"},{"tag":"h3","children":["Lifecycle"]},{"tag":"h4","children":["init"]},{"tag":"h4","children":["render"]},{"tag":"h4","children":["postRender"]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-events'>Events</h2>"},{"tag":"h3","children":["Event basics"]},{"tag":"p","children":["Bobril application never works with native browser events directly. First native browser events listened only on body/document, then are processed, normalized by Bobril, and finally they just call methods on your component ",{"tag":"code","className":"","children":{"tag":"pre","children":"IBobrilComponent"}}," implementation. First simple example how to listen on any click:"]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-assets'>Assets</h2>"},{"tag":"h3","children":["CSS Injection"]},{"tag":"h4","children":["b.injectCss"]},{"tag":"h3","children":["Loading Assets"]}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-responsive-design'>Responsive Design</h2>"},{"tag":"h3","children":["Media"]},{"tag":"h4","children":["IBobrilMedia"]},{"tag":"h4","children":["getMedia"]}]},{"tag":"div","children":[{"tag":"/","children":"<div id ='menu-community' style='font-size: 2em; font-weight:400; color: #0097a7'>Community</div>"}]},{"tag":"div","children":[{"tag":"/","children":"<h2 id='menu-examples'>Examples</h2>\n* [Bobril-build examples here.](https://github.com/Bobris/Bobril/tree/master/bbExamples)\n* [Older examples here.](https://github.com/Bobris/Bobril/tree/master/examples)"}]}],
                    style: {
                        marginLeft: 206,
                        borderLeft: '1px solid #bdbdbd',
                        padding: '16px 16px 16px 32px'
                    }
                }
            ],
            style : {
            
            }
        }
    }