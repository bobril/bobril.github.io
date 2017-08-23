
export const html =`
    <style>/* Here we can override github markdown css styles */.markdown .doc-menu {
    float: left;
    position: fixed;
}

.markdown .doc-menu a {
    cursor: pointer;
}
.markdown .doc-menu .menu-block {
    padding-left: 10px;
    margin-top: 0;
}

.markdown .doc-menu .menu-block-header {
    text-decoration: none;
    color: #0097a7;
    font-size: 18px
}

.markdown .doc-menu .menu-block-header:hover {
    color: rgb(0, 188, 212);
}

.markdown .doc-menu .menu-sub-block {
    padding-left: 16px;
}

.markdown .doc-menu .menu-sub-block-item {
    text-decoration: none;
    color: rgba(0,0,0,0.870);
}

.markdown .doc-menu .menu-sub-block-item:hover {
    color: rgb(0, 188, 212);
}

.markdown .doc-menu li {
    list-style: none;
}
.markdown .doc-content {
    border-left: 1px solid #bdbdbd;
    padding: 16px 16px 16px 32px;
}

.markdown .doc-content p {
    text-align: justify;
}</style>
    <div class="markdown">
        <div class='doc-menu' 
            style='width: 190px'>
            <ul class='menu-block'>
                
        <li>
            <a 
               class='menu-block-header'
               onclick='$doc.scrollToNodeWithId("menu-introduction")'>
                    Introduction
            </a>
        </li>
    
                <ul class='menu-sub-block'>
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-why-own-framework")'>
                    Why own framework
            </a>
        </li>
    
                </ul>
            </ul><ul class='menu-block'>
                
        <li>
            <a 
               class='menu-block-header'
               onclick='$doc.scrollToNodeWithId("menu-guides")'>
                    Guides
            </a>
        </li>
    
                <ul class='menu-sub-block'>
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-getting-started")'>
                    Getting Started
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-bobflux")'>
                    Bobflux
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-localizations")'>
                    Localizations
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-routing")'>
                    Routing
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-bobril-build")'>
                    Bobril Build
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-bobx")'>
                    BobX
            </a>
        </li>
    
                </ul>
            </ul><ul class='menu-block'>
                
        <li>
            <a 
               class='menu-block-header'
               onclick='$doc.scrollToNodeWithId("menu-docs")'>
                    Docs
            </a>
        </li>
    
                <ul class='menu-sub-block'>
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-virtual-dom")'>
                    Virtual Dom
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-bobril-node")'>
                    Bobril Node
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-initialization")'>
                    Initialization
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-bobril-component")'>
                    Bobril Component
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-events")'>
                    Events
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-assets")'>
                    Assets
            </a>
        </li>
    
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-responsive-design")'>
                    Responsive Design
            </a>
        </li>
    
                </ul>
            </ul><ul class='menu-block'>
                
        <li>
            <a 
               class='menu-block-header'
               onclick='$doc.scrollToNodeWithId("menu-community")'>
                    Community
            </a>
        </li>
    
                <ul class='menu-sub-block'>
        <li>
            <a 
               class='menu-sub-block-item'
               onclick='$doc.scrollToNodeWithId("menu-examples")'>
                    Examples
            </a>
        </li>
    
                </ul>
            </ul>
        </div>
        <div class='doc-content markdown-body'
             style='margin-left: 206px'>
            <p style="text-align: center;">
<b>Documentation under construction.</b>
</p>
<p style="text-align: center; margin: 24px 0px 24px 0px">
We know, that it is not easy to develop application without any documentation. We hope, that these materials will help you to start.
</p>
<div style="width: 600px; height: 1px; background: #bdbdbd; margin: auto; margin-bottom:24px"></div>
<div id='menu-introduction' style='font-size: 2em; font-weight:400; color: #0097a7'>Introduction</div><p><h2 id="menu-why-own-framework">Why own framework</h2><br>
For one of our products, we needed the ability to generate single-file websites (all resources embedded). We are using these websites as a new digital channel.</p>
<p>We started with by our opinion the best choice at that time ? Angular 1. However, we soon reached its performance and logic limits. After two years, Boris has evaluated a lot of other frameworks. Mainly ReactJs. Unfortunately, it did not meet all our needs.</p>
<h3 id=mobile-focus>Mobile focus</h3>
<p>Touch/multitouch support in ReactJs was and is an afterthought. It was critical for us to simplify user code regardless of device and input type and browser (IE8+ at that time).</p>
<h3 id=easy-to-generate>Easy to generate</h3>
<p>The core of our use is in Inspire Designer. It is not so easy to generate code in React. JSX is basically required to be used in React. It needs advanced JS optimizations in Babel to remove any JSX from resulting code, and the resulting code is still big.</p>
<h3 id=size>Size</h3>
<p>When you generate millions of embedded websites, size matters. React gziped is 42K, Bobril is 17K. Unzipped size was also interesting for us, as the difference is even bigger. A similar problem is with Router libraries.</p>
<h3 id=speed>Speed</h3>
<p>Bobril is faster in most operations. <a href="https://localvoid.github.io/uibench/">You can test it here.</a> And in 2015, React was slow, they keep improving it over time.</p>
<h3 id=own>Own</h3>
<p>If you need modifications, you can do it on your own product easily without taking care about a lot of other use cases. Complexity is expensive. For example, Input element onChange behavior was broken in React in cases that were critical for us (it took them 3 years to fix these). Multiple virtual dom roots in Bobril simplify popups and modal dialogs. Unique CSS in JS solution is built in Bobril nearly from the beginning. Bobx (a Mobx-like library) benefits from deep integration with Bobril.</p>
<p>All this was for Inspire Designer at the beginning. But when we were thinking about the framework for another big product, we found that size, speed and using your own framework are significant advantages and decided to use it on company level. Of course, this decision has a disadvantage in the lack of community.</p>
<div id='menu-guides' style='font-size: 2em; font-weight:400; color: #0097a7'>Guides</div><p><h2 id="menu-getting-started">Getting Started</h2></p>
<p><strong><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleBasic">Download sample</a></strong></p>
<h3 id=background>Background</h3>
<p>Bobril is a component-oriented framework inspired by React and Mithril. It combines advantages from both of them. It is **fast, low size **framework with rendering based on Virtual DOM. The main focus is on speed and simplicity of code generation. Bobril is about 8x faster than react (see <a href="http://vdom-benchmark.github.io/vdom-benchmark/">vdom-benchmark</a>).</p>
<p>Content and behavior of any page can be defined simply by composing JavaScript objects.</p>
<p>The page content rendering is based on comparison of Virtual DOMs. The application has some state in time and bobril application generates the Virtual DOM according to this state. Virtual DOM is an object representation of the resultant DOM. If some state-changing event occurs and the previous Virtual DOM is different than currently generated Virtual DOM, the real DOM will change according to this change.</p>
<p>Bobril is written by Boris Letocha (software architect and developer in GMC Software Technology).</p>
<blockquote>
<p>Quote: Boris Letocha, author of the framework</p>
</blockquote>
<blockquote>
<p>Besides size and speed benefits, bobril has some very useful features which you will not find elsewhere. For example transparent emulation pointer-events:none or user-select:none in all browsers down to IE9. Transparent unification of mouse and touch events across all supported browsers including Chrome, IE10, IE11. Another feature I call it &quot;Virtual CSS&quot; - you can define styles in JS and it will transparently build optimal CSS in runtime. Image spriting. Image recoloring. Tight integration with TypeScript. Bobril-build enhancing your code during compile time, does optimal bundling similar to Rollup. Bobril removed some of limitations of React like component root does not need to be just one element. Directly includes Router and Drag and drop features. And much much more.</p>
</blockquote>
<p>You can find more detailed information and examples <a href="https://github.com/Bobris/Bobril">here.</a></p>
<h3 id=how-to-start>How to Start</h3>
<p>Let's start with a simple TypeScript (typed JavaScript) example - traditional Hello World.</p>
<h4 id=installing-build-system>Installing Build System</h4>
<p>The easiest way is to use directly the prepard build system bobril-build, which contains optimalized functionality for building <em>bobril</em> based applications, testing, translations, etc. Bobril-build requires node.js &gt;= 6.x.x and npm &gt;=3.x.x. To install bobril build, pass the following command to the command line:</p>
<pre><code class="language-bash">npm i bobril-build -g
</code></pre>
<p>We also recommend to install the <em>tslint</em> bobril-build plugin which generates <em>tslint.json</em> file for the project:</p>
<pre><code class="language-bash">npm i typescript tslint -g
bb plugins -i bb-tslint-plugin
</code></pre>
<p>TSLint checks your TypeScript code for readability, maintainability, and functionality errors.</p>
<p>Now we can start with creating the project. So create some folder, e.g. <em>sample1</em>, create an empty file, _index.ts _in this folder and pass the following commands in its root:</p>
<pre><code class="language-bash">npm init
npm i bobril --save
bb
</code></pre>
<p>These commands will:</p>
<ol>
<li>Initialize project as npm package. You can hit Enter for all questions.</li>
<li>Install the bobril dependency</li>
<li>Run bobril-build</li>
</ol>
<p>Now the bobril-build runs in the interactive mode, which means it watches your code for changes, builds the application to the memory file system and serves it on the address <a href="http://localhost:8080/">http://localhost:8080</a>.</p>
<p>The built application has resolved all dependencies, created the <em>index.html</em>, source maps for debbuging and much more stuff you usually have to do manually in another frameworks.</p>
<h4 id=lets-write-a-code>Let's Write a Code</h4>
<p>For this purpose, we recommend to use the Visual Studio Code with installed tslint and bobril plugins. Bobril-build is optimized for this editor and contains its own bobril extension with snippets and analysis tools.</p>
<p>So, open the <em>sample1</em> folder in editor and change <em>index.ts</em> to look like the following:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;

b.init(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">tag</span>: <span class="hljs-string">'h1'</span>, <span class="hljs-attr">children</span>: <span class="hljs-string">'Hello World!'</span> };
});
</code></pre>
<p>The b imported from the bobril package represents the bobril world with all its available basic functions. The init function initializes the application with function returning the Virtual DOM. In the example is the Virtual DOM represented with the only one node -</p>
<p>IBobrilNode - of tag <em>'h1'</em> with content <em>'Hello World'</em>.</p>
<p>Yes, it is that simple. Except the string, the children property can be assigned with another IBobrilNode or with an array of IBobrilNode, so we can compose the whole tree of the DOM.</p>
<p>Now take a look to the <a href="http://localhost:8080/">http://localhost:8080</a> address in your browser. You can see your first application written with bobril!</p>
<h4 id=components>Components</h4>
<p>Bobril is a framework focusing on components and for Virtual DOM composition we can define easy-to-use components. Let's prepare a <strong>button</strong> component.</p>
<p>Add a new file <em>button.ts</em> with the following content:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;

<span class="hljs-keyword">export</span> interface IButtonData {
    <span class="hljs-attr">title</span>: string;
    onClick?: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-keyword">void</span>;
}

interface IButtonCtx extends b.IBobrilCtx {
    <span class="hljs-attr">data</span>: IButtonData;
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> button = b.createComponent&lt;IButtonData&gt;({
    render(ctx: IButtonCtx, <span class="hljs-attr">me</span>: b.IBobrilNode) {
        me.tag = <span class="hljs-string">'button'</span>;
        me.children = ctx.data.title;
    },
    onClick(ctx: IButtonCtx): boolean {
        <span class="hljs-keyword">if</span> (ctx.data.onClick) {
            ctx.data.onClick();
        }

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
});

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> button;
</code></pre>
<p>The b.createComponent function accepts an object defining the behaviour of component in its lifecycle. This lifecycle defining functions like init, render, postRender etc. are defined by interface IBobrilComponent. The description of each function can be found in comments of <em>bobril</em> in its <em>index.ts</em> file. Our button uses the render and onClick functions which accept the ctx (context) as a first parameter.</p>
<p>Context is a storage for the current state of the specific component instance, e.g. for each specific button - the specific node in Virtual DOM.</p>
<p>The context interface IButtonCtx extending the IBobrilCtx has predefined member data which is automatically assigned by bobril in Virtual DOM tree rendering. It is prepared to be used with own IButtonData interface definition.</p>
<p>This data member is designed to be used as an input information for a component. It can define how the component should look like and behave. So the button in the example has title and onClick callback defined from the outside.</p>
<p>The data onClick callback is called in the onClick lifecycle function defined again by the IBobrilComponent interface.</p>
<p>Now the button component is ready to be used in <em>index.ts</em> so we can change it to look like the following:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;
<span class="hljs-keyword">import</span> { button } <span class="hljs-keyword">from</span> <span class="hljs-string">'./button'</span>;

b.init(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> [
        { <span class="hljs-attr">tag</span>: <span class="hljs-string">'h1'</span>, <span class="hljs-attr">children</span>: <span class="hljs-string">'Hello World!'</span> },
        button({ 
            <span class="hljs-attr">title</span>: <span class="hljs-string">'Click Me!'</span>, 
            <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> alert(<span class="hljs-string">'Yeah! I was clicked!'</span>) 
        })
    ];
});
</code></pre>
<p>After automatic recompile, you can open this page and see how the <strong>bobril</strong> is working.</p>
<p>The classic import with alias can be used as well:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> btn <span class="hljs-keyword">from</span> <span class="hljs-string">'./button'</span>;
</code></pre>
<h4 id=bring-it-to-life>Bring It to Life</h4>
<p>If we need to make some operations (e.g. as a reaction on some backend event), change the state and tell bobril that the re-render of Virtual DOM is needed, we can simply call the b.invalidate() function and the bobril re-calls the function provided to the b.init function. To try it, we can simply change the code:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;
<span class="hljs-keyword">import</span> { button } <span class="hljs-keyword">from</span> <span class="hljs-string">'./button'</span>;

<span class="hljs-keyword">let</span> counter = <span class="hljs-number">0</span>;

b.init(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { counter++; b.invalidate(); }, <span class="hljs-number">1000</span>);

    <span class="hljs-keyword">return</span> [
        { <span class="hljs-attr">tag</span>: <span class="hljs-string">'h1'</span>, <span class="hljs-attr">children</span>: <span class="hljs-string">'Hello World!'</span> },
        button({ 
            <span class="hljs-attr">title</span>: <span class="hljs-string">'Click Me!'</span>, 
            <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> alert(<span class="hljs-string">'Yeah! I was clicked!'</span>) 
        }),
        { <span class="hljs-attr">tag</span>: <span class="hljs-string">'p'</span>, <span class="hljs-attr">children</span>: counter.toString() }
    ];
});
</code></pre>
<p>It adds a new element with a counter increasing every 1000 ms. If you need to call b.invalidate inside of some component, use it with ctx as a parameter, so b.invalidate(ctx). It will perform rendering of the specific component only.</p>
<p>Bobril contains lots of other really useful functions like styleDef to define styles as objects and prepare them for use by style function. Other useful functions are routes and route to define routing between pages in application, etc.</p>
<h3 id=notes>Notes</h3>
<p>To build, minify and bundle your application to <em>dist</em> folder, just type the command:</p>
<pre><code class="language-bash">bb b
</code></pre>
<p>For more information about bobril and bobril-build, please visit the github pages below:</p>
<ul>
<li><a href="https://github.com/Bobris/Bobril">https://github.com/Bobris/Bobril</a></li>
<li><a href="https://github.com/Bobris/bobril-build">https://github.com/Bobris/bobril-build</a></li>
</ul>
<p><h2 id="menu-bobflux">Bobflux</h2></p>
<p><strong><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleAppBobflux">Download sample</a></strong></p>
<h3 id=background>Background</h3>
<p>Bobflux is a pure functional frontend application architecture based on <em>flux</em> and inspired by <em>reflux</em> and <em>redux</em>. It is written by Karel Steinmetz (software developer in GMC Software Technology). The bobflux lifecycle can be described by the following picture:</p>
<pre><code>1. Application has some state
2. View is rendered according to this state
3. View calls actions with handlers created by action creator
4. Actions change the state
</code></pre>
<p>For more information, see <a href="https://github.com/karelsteinmetz/bobflux/">project pages</a>.<br>
<img src="./images/bobflux.png" alt="Bobflux Flow"></p>
<h3 id=lets-start>Let's start</h3>
<p>We will create a simple TODO application. At first, we need to have prepared <em>bobril-build</em> on computer. Follow the steps in <a href="https://github.com/keeema/bobril-samples/blob/master/articles/01_bobril-getting-started.md">previous article</a> to perform bobril-build installation.</p>
<p>Now you can start a new project again or use a predefined skeleton simpleApp from <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/Bobris/bobril-build/tree/master/examples/simpleApp">bobril-build github repository</a>. Following example will use it. To get final code <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleAppBobflux">download the full sample</a>.</p>
<h3 id=add-bobflux-to-application>Add bobflux to Application</h3>
<p>Run following commands in the root of application folder:</p>
<pre><code class="language-bash">npm i
npm i bobflux --save
bb
</code></pre>
<h3 id=state>State</h3>
<p>At first, we need to prepare application <strong>state</strong>, its <strong>cursor</strong> and function for creating the default state. To define the state, add file <em>src/state.ts</em> with the following content:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> flux <span class="hljs-keyword">from</span> <span class="hljs-string">'bobflux'</span>;

<span class="hljs-keyword">export</span> interface ITodoAppState extends flux.IState {
    <span class="hljs-attr">todos</span>: string[];
    todoName: string;
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> todoAppCursor: flux.ICursor&lt;ITodoAppState&gt; = {
    <span class="hljs-attr">key</span>: <span class="hljs-string">''</span>
};

<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createDefaultTodoAppState</span>(<span class="hljs-params"></span>): <span class="hljs-title">ITodoAppState</span> </span>{
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">todos</span>: [],
        <span class="hljs-attr">todoName</span>: <span class="hljs-string">''</span>
    };
}
</code></pre>
<p><strong>State</strong> is a place where to store application data. The difference between a state and a context is that context stores the data needed only for a component itself and the rest of an application doesn't care about them. It is e.g. an information whether a component for section is collapsed or not (when you don't need to manage it from the outside).</p>
<p>In our todo application, we will need to store the list of todos and currently written name of todo so we have to define ITodoAppState for these data.</p>
<p><strong>Cursor</strong> defines a path (key) to the state in an aplication state. In our sample, we will work only with the root application cursor so the path in todoAppCursor.key is empty. In real application it is recommended to define as much specific cursors as possible to get the best bobflux performance advantages. It means e.g. to create cursor like:</p>
<pre><code class="language-javascript">exportconst todoNameCursor: flux.ICursor&lt;ITodoAppState&gt; = {
    <span class="hljs-attr">key</span>: <span class="hljs-string">'todoName'</span>
};
</code></pre>
<p>For the simplicity our example uses only the root todoAppCursor. Now, we need to initialize bobflux and provide the application state to it, so change <em>src/app.ts</em> to looks like following:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> flux <span class="hljs-keyword">from</span> <span class="hljs-string">'bobflux'</span>;
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> todoState <span class="hljs-keyword">from</span> <span class="hljs-string">'./state'</span>;
<span class="hljs-keyword">import</span> { mainPage } <span class="hljs-keyword">from</span> <span class="hljs-string">'./mainPage'</span>;

flux.bootstrap(todoState.createDefaultTodoAppState());

b.routes(
    b.route({ <span class="hljs-attr">handler</span>: mainPage })
);
</code></pre>
<p>Now, we have prepared the application state that can be modified by calling actions. Actions Actions change the state by a handler on a specific sub-state defined by the cursor. In our todo example, we will need to perform two actions:</p>
<pre><code>1. Change the current name of todo according to a textbox value
2. Add the written todo to the list of todos
</code></pre>
<p>So we will add the file <em>src/actions/changeTodoName.ts</em>:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> flux <span class="hljs-keyword">from</span> <span class="hljs-string">'bobflux'</span>;
<span class="hljs-keyword">import</span> { ITodoAppState, todoAppCursor } <span class="hljs-keyword">from</span><span class="hljs-string">'../state'</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> changeTodoName = 
    flux.createAction(todoAppCursor, (state: ITodoAppState, <span class="hljs-attr">todoName</span>: string): <span class="hljs-function"><span class="hljs-params">ITodoAppState</span> =&gt;</span> {

        <span class="hljs-keyword">if</span> (todoName === state.todoName)
            <span class="hljs-keyword">return</span> state;

        <span class="hljs-keyword">return</span> flux.shallowCopy(state, copy =&gt; { copy.todoName = todoName; });
    });

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> changeTodoName;
</code></pre>
<p>and <em>src/actions/addTodo.ts</em>:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> flux <span class="hljs-keyword">from</span> <span class="hljs-string">'bobflux'</span>;
<span class="hljs-keyword">import</span> { todoAppCursor } <span class="hljs-keyword">from</span> <span class="hljs-string">'../state'</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> addTodo = flux.createParamLessAction(todoAppCursor, state =&gt; {
    <span class="hljs-keyword">if</span> (!state.todoName || state.todoName.trim().length === <span class="hljs-number">0</span>)
        <span class="hljs-keyword">return</span> state;

    <span class="hljs-keyword">return</span> flux.shallowCopy(state, copy =&gt; {
        copy.todos = [...state.todos, state.todoName];
        copy.todoName = <span class="hljs-string">''</span>;
    });
});

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> addTodo;
</code></pre>
<p>The changeTodoName action is defined by the function createAction from bobflux which accepts the cursor of a state which it will change and the handler which will be used for the change. In the beginning of the handler is a check whether we want to change something or not.</p>
<ul>
<li>If not, then we will return the original instance of the state.</li>
<li>If yes, then we will create a shallow copy of the state and return the modified copy.</li>
</ul>
<p>Bobflux follows the principles of <strong>immutability</strong> to keep the best performance. It compares an input state with an output state and if it is different, then it calls b.invalidate to re-render the view. It is necessary to take care about the copied object properties. If there is some referencial object like an array todos in the addTodo action, it has to be copied as well. Composing the Page with bobflux Now, we have everything prepared to be used on the page of the todo application. So let's change the <em>src/mainPage.ts</em> to look like this:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> flux <span class="hljs-keyword">from</span> <span class="hljs-string">'bobflux'</span>;
<span class="hljs-keyword">import</span> { todoAppCursor } <span class="hljs-keyword">from</span> <span class="hljs-string">'./state'</span>;
<span class="hljs-keyword">import</span> { changeTodoName } <span class="hljs-keyword">from</span> <span class="hljs-string">'./actions/changeTodoName'</span>;
<span class="hljs-keyword">import</span> { addTodo } <span class="hljs-keyword">from</span> <span class="hljs-string">'./actions/addTodo'</span>;
<span class="hljs-keyword">import</span> { button } <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/button'</span>;
<span class="hljs-keyword">import</span> { textbox } <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/textbox'</span>;
<span class="hljs-keyword">import</span> { p } <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/paragraph'</span>;
<span class="hljs-keyword">import</span> { h1 } <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/header'</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> mainPage = b.createComponent({
    render(_ctx: b.IBobrilCtx, <span class="hljs-attr">me</span>: b.IBobrilNode): <span class="hljs-keyword">void</span> {
        <span class="hljs-keyword">const</span> state = flux.getState(todoAppCursor);
        me.children = [
            h1({}, <span class="hljs-string">'TODO'</span>),
            p({}, [
                textbox({ 
                    <span class="hljs-attr">value</span>: state.todoName, 
                    <span class="hljs-attr">onChange</span>: <span class="hljs-function"><span class="hljs-params">newValue</span> =&gt;</span> changeTodoName(newValue) 
                }),
                button({ <span class="hljs-attr">title</span>: <span class="hljs-string">'ADD'</span>, <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> addTodo() })
            ]),
            state.todos.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> p({}, item)),
            p({}, <span class="hljs-string">\`Count: <span class="hljs-subst">\${state.todos.length}</span>\`</span>)
        ];
    }
});

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> mainPage;
</code></pre>
<p>The components definition is not the subject of this article, so you can use definitions in the attached source code.</p>
<p>You can see that a page resolves the current application state by the function getState with defined todoAppCursor. It can be done this way because bobflux initiates rendering of the page on every change in the state. T<br>
he textbox and button components use the defined actions in their onChange and onClick callbacks so the user interactions from view initiates the action calls.</p>
<p>And finally in the end of the render function is a mapped array of todos to 'p' tags with todo names.</p>
<p>Now, we are able to open the application in a browser and see how it works. Yes, it is really that simple.</p>
<p>To debug the state history, you can also try the bobflux-monitor (see the <a href="https://github.com/keeema/bobflux-monitor">project pages</a> or the sample).</p>
<p>Bobflux also contains few performance helpers like createRouteComponent to optimalize rendering of component or provident the state in context etc.</p>
<p>To get more information see the project github pages: <a href="https://github.com/karelsteinmetz/bobflux">https://github.com/karelsteinmetz/bobflux</a></p>
<p><h2 id="menu-localizations">Localizations</h2></p>
<p><strong><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleAppGlobalization">Download sample</a></strong></p>
<h3 id=background>Background</h3>
<p>Bobril globalization library is written by Boris Letocha (software architect and developer in GMC Software Technology).</p>
<p>It is inspired by Format.js and internally uses Moment.js.</p>
<h3 id=examples>Examples</h3>
<p>At first, we need to have prepared <em>bobril-build</em> on computer. Follow the steps in <a href="https://github.com/keeema/bobril-samples/blob/master/articles/01_bobril-getting-started.md">first article</a> to perform bobril-build installation.</p>
<p>Now you can start a new project again or use a predefined skeleton simpleApp from <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/Bobris/bobril-build/tree/master/examples/simpleApp">bobril-build github repository</a>.</p>
<p>Following example will use it. To get final code <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleAppGlobalization">download the full sample</a>.</p>
<h3 id=add-bobril-g11n-to-application>Add bobril-g11n to Application</h3>
<p>Type to the command line:</p>
<pre><code class="language-bash">npm i bobril-g11n --save
bb
</code></pre>
<p>Now change the <em>app.ts</em> file and change it to look like this:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;
<span class="hljs-keyword">import</span> { mainPage } <span class="hljs-keyword">from</span> <span class="hljs-string">'./mainPage'</span>;
<span class="hljs-keyword">import</span> { initGlobalization } <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril-g11n'</span>;

initGlobalization({ <span class="hljs-attr">defaultLocale</span>: <span class="hljs-string">'en-US'</span> }).then(() =&amp;gt; {
    b.routes(
        b.route({ <span class="hljs-attr">handler</span>: mainPage })
    );
});
</code></pre>
<p>This code will import and call initGlobalization function. Its argument IG11NConfig defines the default locale and optionally the function for getting the path to the localized files.</p>
<p>Bobril-build is configured to generate the default localization file <em>en-US.js</em> directly to the root of the <em>dist</em> folder.</p>
<p>The initGlobalization function returns a Promise object. Initialization of the application by b.routes has to be called in a fulfillment callback of this promise.</p>
<p>The next step is to import all necessary functions for example by adding the following lines to the <em>mainPage.ts</em> file:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { t, f, getLocale, setLocale } <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril-g11n'</span>;
</code></pre>
<p>Now, we have everything prepared for trying out the examples. You can remove the me.children content in a render function of the page component in <em>mainPage.ts</em> file and use it for trying out the examples.</p>
<h3 id=translation>Translation</h3>
<p>Bobril-globalization package contains a <em>t</em> function with these arguments:</p>
<ul>
<li>message for input text/pattern</li>
<li>optional params object defining the values for the message pattern</li>
<li>optional hint</li>
</ul>
<pre><code class="language-javascript">t(<span class="hljs-string">'Hello World!'</span>); <span class="hljs-comment">// Hello World!</span>
</code></pre>
<p>Bobril-build takes all usings of t('some string') in code and replaces it by e.g. t(125) where 125 is the index of 'some string' constant in the array of localized strings. This array is placed in every localization file and corresponds to the array in the generated <em>en-US.js.</em></p>
<p>To add a new localization definition just type the command:</p>
<pre><code class="language-bash">bb t -a cs-CZ
bb b -u 1
bb
</code></pre>
<p>The first command creates a new translation file <em>translations/cs-CZ.json.</em>. The second command adds the missing translations from the defaultly generated <em>en-US.js</em> to <em>cs-CZ.json</em> translation definition. The build with the b parameter runs only once and then stops. Finally the last command runs build of the application with tracking changes in the code and with an output to the local web server. The content of the created <em>json</em> can be e.g.:</p>
<pre><code class="language-json">[
    <span class="hljs-string">"cs-CZ"</span>,
    [
        <span class="hljs-string">"My name is {a}!"</span>,
        <span class="hljs-literal">null</span>,
        <span class="hljs-number">1</span>
    ]
]
</code></pre>
<p>To add translations it can be modified to the following:</p>
<pre><code class="language-json">[
    <span class="hljs-string">"cs-CZ"</span>,
    [
        <span class="hljs-string">"My name is {a}!"</span>,
        <span class="hljs-literal">null</span>,
        <span class="hljs-number">1</span>,
        <span class="hljs-string">"Jmenuji se {a}!"</span>
    ]
]
</code></pre>
<p>The specific parts of localization item represented as an array are:</p>
<ol>
<li>Message - &quot;Hello World&quot;</li>
<li>Translation help (third optional parameter of t function) - null =not used in t function</li>
<li>Indicator of parameters inside of message - 0 = no parameter</li>
<li>The translated message - &quot;Ahoj světe&quot;</li>
</ol>
<p>Parts 1-3 compose the translation key. You can see the json definition example in the attached sample.</p>
<p>If you change the translation definition file, the bobril-build (bb command) has to be stopped and started again or some another change in the code has to be done to rebuild the application.</p>
<p>To see all possible build options use the -h parameter for bb command.</p>
<p>To change the locale, we can use the following code:</p>
<pre><code class="language-javascript">setLocale(<span class="hljs-string">'cs-CZ'</span>);
</code></pre>
<p>This code will change the locale and render the page with specific translations. To get the current locale, we can use a function getLocale.</p>
<h3 id=basics>Basics</h3>
<p>We can simply add placeholders to use variables in our text patterns:</p>
<pre><code class="language-javascript">t(<span class="hljs-string">'My name is {a}!'</span>, { <span class="hljs-attr">a</span>: <span class="hljs-string">'Tomas'</span> }); <span class="hljs-comment">// My name is Tomas!</span>
</code></pre>
<h4 id=ordinal>Ordinal</h4>
<p>To set localized ordinal, use the selectordinal pattern:</p>
<pre><code class="language-javascript">t(<span class="hljs-string">'you are in {floor, selectordinal, =0{ground} one{#st} two{#nd} few{#rd} other{#th}} floor'</span>, { <span class="hljs-attr">floor</span>: <span class="hljs-number">2</span> });
<span class="hljs-comment">// you are in 2nd floor</span>
</code></pre>
<p>The # character is replaced by the floor property in the params object.</p>
<h4 id=plural>Plural</h4>
<p>The similiar plural pattern is used to define localized plurals:</p>
<pre><code class="language-javascript">t(<span class="hljs-string">'here {floor, plural, =0{is no floor} =1{is # floor} other{are # floors}}'</span>, { <span class="hljs-attr">floor</span>: <span class="hljs-number">2</span> });
<span class="hljs-comment">// here are 2 floors</span>
</code></pre>
<h4 id=select>Select</h4>
<p>To select a specific value according to some input string, we can use the select pattern:</p>
<pre><code class="language-javascript">t(<span class="hljs-string">'famous {gender, select, female {woman} male {man} other {person}}'</span>, { <span class="hljs-attr">gender</span>: <span class="hljs-string">'female'</span> });
<span class="hljs-comment">// famous woman</span>
</code></pre>
<h4 id=number>Number</h4>
<p>We can use a number pattern to keep numbers in culture specific formatting or to define our own format:</p>
<pre><code class="language-javascript">t(<span class="hljs-string">'{arg, number}'</span>, { <span class="hljs-attr">arg</span>: <span class="hljs-number">1.234</span> }); <span class="hljs-comment">// 1.234 in en</span>
t(<span class="hljs-string">'{arg, number, custom, format:{0.0000}}'</span>, { <span class="hljs-attr">arg</span>: <span class="hljs-number">1.234</span> }); <span class="hljs-comment">// 1.2340 - in en</span>
</code></pre>
<h4 id=date-and-time>Date and Time</h4>
<p>The date and time patterns work the same way and can be used in the following way:</p>
<pre><code class="language-javascript">t(<span class="hljs-string">'{a, date, lll}'</span>, { <span class="hljs-attr">a</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2000</span>, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>) }); <span class="hljs-comment">// Jan 2, 2000 12:00 AM - in en</span>
t(<span class="hljs-string">'{a, date, custom, format:{DD MM}}'</span>, { <span class="hljs-attr">a</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2000</span>, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>) }); <span class="hljs-comment">// 02 01 - in en</span>
t(<span class="hljs-string">'{a, date, custom, format:{{myformat}} }'</span>, 
{ <span class="hljs-attr">a</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2000</span>, <span class="hljs-number">0</span>, <span class="hljs-number">2</span>), <span class="hljs-attr">myformat</span>: <span class="hljs-string">'ddd'</span> }); <span class="hljs-comment">// Sun - in en</span>
</code></pre>
<p>The specific format definitions can be found in the <a href="http://momentjs.com/docs/#/displaying/format/">Moment.js documentation.</a></p>
<p>It can also be defined in a calendar format:</p>
<pre><code class="language-javascript">t(<span class="hljs-string">'{a, time, calendar}'</span>, { <span class="hljs-attr">a</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span> }); <span class="hljs-comment">// Tomorrow at 4:27 PM - in en</span>
</code></pre>
<p>or as a relative from now:</p>
<pre><code class="language-javascript">t(<span class="hljs-string">'{a, time, relative}'</span>, { <span class="hljs-attr">a</span>: <span class="hljs-built_in">Date</span>.now() - <span class="hljs-number">100000</span> }); <span class="hljs-comment">// 2 minutes ago - in en</span>
</code></pre>
<p>For more examples <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleAppGlobalization">download the full sample</a>.</p>
<h4 id=just-formatting>Just Formatting</h4>
<p>If you only want to do the formatting of a text without a translation, just replace the t function by the f function.</p>
<p>It will only take care of culture specific formatting.</p>
<p><h2 id="menu-routing">Routing</h2></p>
<p><strong><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleAppRouting">Download sample</a></strong></p>
<h3 id=background>Background</h3>
<p>Bobril is a component-oriented framework written by Boris Letocha (software architect and developer in GMC Software Technology). For more information, <a href="https://github.com/keeema/bobril-samples/blob/master/articles/01_bobril-getting-started.md">see the first article</a>.</p>
<h3 id=using-the-code>Using the Code</h3>
<h4 id=preparing-environment>Preparing Environment</h4>
<p>At first, we need to have prepared <em>bobril-build</em> on computer. Follow the steps in <a href="https://github.com/keeema/bobril-samples/blob/master/articles/01_bobril-getting-started.md">first article</a> to perform bobril-build installation.</p>
<p>Now you can start a new project again or use a predefined skeleton simpleApp from <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/Bobris/bobril-build/tree/master/examples/simpleApp">bobril-build github repository</a>.</p>
<p>Following example will use it. To get final code <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleAppRouting">download the full sample</a>.</p>
<h4 id=defining-routes>Defining Routes</h4>
<p>Bobril has few methods for defining the application route tree:</p>
<ul>
<li>b.route - defines a route url, name, handler and a list of sub-routes</li>
<li>b.routes - registers routes to the application and calls b.init</li>
<li>b.routeDefault - defines the default route if no sub-route is specified in the current url</li>
</ul>
<p>Example of the route definition in <em>app.ts</em>:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;
<span class="hljs-keyword">import</span> { mainPage } <span class="hljs-keyword">from</span> <span class="hljs-string">'./page'</span>;
<span class="hljs-keyword">import</span> { pageOne } <span class="hljs-keyword">from</span> <span class="hljs-string">'./pages/pageOne'</span>;
<span class="hljs-keyword">import</span> { pageTwo } <span class="hljs-keyword">from</span> <span class="hljs-string">'./pages/pageTwo'</span>;

b.routes(
    b.route({ <span class="hljs-attr">handler</span>: mainPage }, [
        b.route({ <span class="hljs-attr">url</span>: <span class="hljs-string">'/one'</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'one'</span>, <span class="hljs-attr">handler</span>: pageOne }),
        b.route({ <span class="hljs-attr">url</span>: <span class="hljs-string">'/two/:text?'</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'two'</span>, <span class="hljs-attr">handler</span>: pageTwo }),
        b.routeDefault({ <span class="hljs-attr">handler</span>: pageOne })
    ])
);
</code></pre>
<p>The whole application will be handled by a handler mainPage with sub-routes one and two on urls <em>'/one'</em> and <em>'/two'</em> handled by handlers pageOne and pageTwo.</p>
<p>The default handler pageOne will be used when no sub-route is specified. The url for page two contains a parameter specification after a second slash. It is defined by a colon and a name of the parameter. The question mark defines the parameter as optional. Route parameters can then be found in the handler's context at ctx.data.routeParams.</p>
<h4 id=handling-routes-in-pages>Handling Routes in Pages</h4>
<p>Now, we need to define the mainPage to render some own content and the visual content of the active sub-route. To do this, we will use a function provided in component's ctx.data.activeRouteHandler, so we can change the code of <em>page.ts</em> as the following:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;

exportconst mainPage = b.createComponent({
    render(_ctx: b.IBobrilCtx, <span class="hljs-attr">me</span>: b.IBobrilNode): <span class="hljs-keyword">void</span> {
        me.children = [
            tag(<span class="hljs-string">'h1'</span>, <span class="hljs-string">'Routing example'</span>),
            tag(<span class="hljs-string">'hr'</span>),
            tag(<span class="hljs-string">'div'</span>, me.data.activeRouteHandler()),
        ];
    }
});
</code></pre>
<p>This code will render a header, a line and the visual content of current active sub-route.</p>
<p>Now, we need to define sub-pages and transitions between these pages. Bobril offers the following functions and interface for these purposes:</p>
<ul>
<li>b.IRouteTransition - interface for a transition definition (target name, parameters etc.)</li>
<li>b.createRedirectReplace - creates IRouteTransition object for redirect without saving history</li>
<li>b.createRedirectPush - creates IRouteTransition object for redirect with saving history</li>
<li>b.runTransition - runs a transition according to an input IRouteTransition object</li>
<li>b.link - changes an input IBobrilNode to a link to the route of a specified name and with specified optional params</li>
</ul>
<p>Example of the redirect definition from the page one to the page two in <em>pages/pageOne.ts</em>:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;
<span class="hljs-keyword">import</span> { textbox } <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/textbox'</span>;
<span class="hljs-keyword">import</span> { button } <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/button'</span>;

<span class="hljs-keyword">let</span> value = <span class="hljs-string">''</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> pageOne = b.createComponent({
    render(ctx: b.IBobrilCtx, <span class="hljs-attr">me</span>: b.IBobrilNode): <span class="hljs-keyword">void</span> {
        me.children = [
            textbox({ value, <span class="hljs-attr">onChange</span>: <span class="hljs-function">(<span class="hljs-params">newVal</span>) =&gt;</span>; { value = newVal; b.invalidate(ctx); } }),
            button({
                <span class="hljs-attr">title</span>: <span class="hljs-string">'Confirm'</span>,
                <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span>; {
                    b.runTransition(b.createRedirectPush(<span class="hljs-string">'two'</span>, { <span class="hljs-attr">text</span>: value }));
                    returntrue;
                }
            })
        ];
    }
});
</code></pre>
<p>The code in a button's onClick callback creates and runs a transition to the page two with an object defining the value of a text parameter.</p>
<p>The transition above has to be handled by the pageTwo handler defined in <em>pages/pageTwo.ts</em>:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;
<span class="hljs-keyword">import</span> { tag } <span class="hljs-keyword">from</span> <span class="hljs-string">'../helper'</span>;
<span class="hljs-keyword">import</span> { loggedIn } <span class="hljs-keyword">from</span> <span class="hljs-string">'../page'</span>;

<span class="hljs-keyword">export</span> interface IData {
    <span class="hljs-attr">routeParams</span>: { text?: string };
}

<span class="hljs-keyword">export</span> interface ICtx extends b.IBobrilCtx {
    <span class="hljs-attr">data</span>: IData;
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> pageTwo = b.createComponent&amp;lt;IData&gt;;({
    render(ctx: ICtx, <span class="hljs-attr">me</span>: b.IBobrilNode): <span class="hljs-keyword">void</span> {
        <span class="hljs-keyword">let</span> value = (ctx.data.routeParams.text || <span class="hljs-string">''</span>).trim();
        me.children = [
            tag(<span class="hljs-string">'p'</span>, <span class="hljs-string">'Your text: '</span> + (!!value ? value : <span class="hljs-string">'nothing'</span>)),
            b.link(tag(<span class="hljs-string">'a'</span>, <span class="hljs-string">'Go back'</span>), <span class="hljs-string">'one'</span>)
        ];
    }
});
</code></pre>
<p>The page receives the text parameter value in its ctx.data.routeParams.text so we can specify the context and data interfaces and use text in the render function of a page component. It also defines a link node to the page one by function b.link.</p>
<h4 id=transition-availability>Transition Availability</h4>
<p>There are some cases when we need to manage whether a current page on a current route is available or whether we can leave the current page. For these purposes, we can use the following static functions of IBobrilComponent:</p>
<ul>
<li>canActivate - It can stop the current transition in a target handler by returning false or redirect to the new specified transition</li>
<li>canDeactivate - Can stop the current transition in the a source handler by returning false or redirect to the new specified transition</li>
</ul>
<p>So for example, we can handle leaving the page one with empty value of a textbox by adding canDeactivate function definition to the page one component definition in <em>pages/pageOne.ts</em>:</p>
<pre><code class="language-javascript">canDeactivate() {
    <span class="hljs-keyword">return</span> !!value.trim() || confirm(<span class="hljs-string">'The textbox is empty. Are you sure?'</span>);
}
</code></pre>
<p>or handle the not logged user on accessing the page two by adding canActivate function definition to the page two component definition in <em>pages/pageTwo.ts</em>:</p>
<pre><code class="language-javascript">canActivate() {
    <span class="hljs-keyword">if</span> (loggedIn)
        returntrue;
    alert(<span class="hljs-string">'You are not logged in!'</span>);
    <span class="hljs-keyword">return</span> b.createRedirectReplace(<span class="hljs-string">'one'</span>);
}
</code></pre>
<p><strong>Note</strong>: The loggedIn variable is declared and set in mainPage and imported to the pageTwo. See the <em>page.ts</em> in the attached <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleAppRouting">full sample</a>.</p>
<h3 id=summary>Summary</h3>
<p>As you can see, the bobril framework contains really simple routing mechanism able to fulfill all standard requirements.</p>
<p><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleAppRouting">Download the full sample</a> for the whole application with all the mentioned functions.</p>
<p><h2 id="menu-bobril-build">Bobril Build</h2></p>
<h3 id=introduction>Introduction</h3>
<p>Bobril-build is nodejs-based build system created for building single-page applications written in Typescript and with lot of optimalizations for bobril and bobril-g11n. It is designed for bobril applications but it can be used for all typescript applications in general. It is written by Boris Letocha (software architect and developer in GMC Software Technology).</p>
<p>Bobril-build can be installed globally by command:</p>
<pre><code class="language-bash">npm i bobril-build -g
</code></pre>
<p>It requires node.js &gt;= 6.x.x and npm &gt;=3.x.x.</p>
<p>It can use optionally yarn package manager (recommanded). If yarn is not available, npm is used instead.</p>
<p>Bobril-build does lot for the best Developer eXperience. In general, to start development you need only to install global bobril-build (only once), initialize npm package, create <em>index.ts</em> file and start the bb command. It starts self-hosting server with distribution stored in memory (good for SSD drives), watches files for changes, runs tests, provides sourcemaps and so on.</p>
<p>But bobril-build offers much more. It can perform:</p>
<ol>
<li>Run self-hosting server for distribution. It serves application from main file (<em>index.ts</em> by default) or the example (<em>example.ts</em> by default) files when it is provided. Example is mainly used for components.</li>
<li>Watch for changes</li>
<li>Run tests and optionally generate JUnit XMLs with results for additional integration on build server</li>
<li>Compile typescript</li>
<li>Install external dependencies</li>
<li>Resolve internal/external dependencies (imports)</li>
<li>Transpilation</li>
<li>Manage translations</li>
<li>Minification</li>
<li>Create sprites</li>
<li>Manage assets</li>
<li>Manage and run external bobril plugins</li>
</ol>
<h3 id=basic-commands>Basic commands</h3>
<p>bb - Runs build in interactive mode. Distribution is available on self-hosting server on <a href="http://localhost:8080">http://localhost:8080</a>. Files are served from memory. Build informations are available on <a href="http://localhost:8080/bb">http://localhost:8080/bb</a>. It also runs tests. To start another testing agent point any browser to <a href="http://localhost:8080/bb/test">http://localhost:8080/bb/test</a>. If you want to debug tests open <a href="http://localhost:8080/test.html">http://localhost:8080/test.html</a>, any failed asserts throws expections so it is easy to stop on them.</p>
<p>bb -h, --help - Basic bobril-build help</p>
<p>bb <command> -h - Help for specific command</p>
<h3 id=tests>Tests</h3>
<p>Bobril-build runs test files with suffix <em>spec.ts</em>. It automatically provides jasmine.d.ts to these spec files.</p>
<p>bb test [options] - Just runs test in PhantomJS.</p>
<h4 id=options>Options</h4>
<p>-o, --out <name> - Defines filename for test result as JUnit XML. You can use such file for integration on your build server such Jenkins</p>
<h3 id=translations>Translations</h3>
<p>Bobril-build provides set of tools for managing translations.</p>
<p>bb translation|t [options] - Translations managment.</p>
<h4 id=options>Options</h4>
<p>-a, --addlang <lang>    - Adds new language definition to translations folder.</p>
<p>-r, --removelang <lang> - Removes language.</p>
<p>-e, --export <fileName> - Export untranslated languages to specific file.</p>
<p>Mainly used for translation agencies. Use with -l option. Each item is listed in format</p>
<pre><code class="language-json">S:Original message
I:Hint
T:Translated message
</code></pre>
<p>-i, --import <fileName> - Imports translated languages from specific file. File name must be in format language-Name.txt</p>
<p>-p, --specificPath <path> - Specifies path for export from / import to.</p>
<p>-l, --lang <lang> - Specifies language for export.</p>
<p>-u, --union &lt;sourcePath1,sourcePath2,destinationPath&gt;  - Makes union from paths.</p>
<p>-s, --subtract &lt;sourcePath1,sourcePath2,destinationPath&gt; - Makes subtract of paths.</p>
<p>To update items in .json file in translations according to your code you must use command</p>
<p>bb b -u 1 (more in chapter <em>Build commands</em>)</p>
<h3 id=build-commands>Build commands</h3>
<p>Bobril builds allows to manage build process by paramters.</p>
<p>bb build|b [options] Full build including all mentioned operations. Builds just once, serves generated files to dist folder and stops.</p>
<h4 id=options>Options</h4>
<p>-d, --dir <outputdir> - Defines where to put build result (default is ./dist).</p>
<p>-f, --fast &lt;1/0&gt; - Quick debuggable bundling. It simply does not minify.</p>
<p>-c, --compress &lt;1/0&gt; - Removes dead code.</p>
<p>-m, --mangle &lt;1/0&gt; - Minifies names.</p>
<p>-b, --beautify &lt;1/0&gt; - Readable formatting.</p>
<p>-s, --style &lt;0/1/2&gt; - Overrides styleDef className preservation level.</p>
<p>-p, --sprite &lt;0/1&gt; - Enable/disable creation of sprites. It searches for usage of</p>
<p>b.sprite in the code.</p>
<p>-l, --localize &lt;1/0&gt; - Creates localized resources (default autodetect).</p>
<p>-u, --updateTranslations &lt;1/0&gt; - Updates translations. It searches for usage of t function from <strong>bobril-g11n</strong> in the code and updates <em>language.json</em> files in translations folder in format:</p>
<pre><code class="language-json">[
    <span class="hljs-string">"cs-CZ"</span>,
    [
         <span class="hljs-string">"Original {text}!"</span>,
        <span class="hljs-literal">null</span>,
        <span class="hljs-number">1</span>,
        <span class="hljs-string">"Translated {text}!"</span>
    ]
]
</code></pre>
<p>-v, --versiondir <name> - Stores all resouces except index.html in this directory. It stores generated files to specific folder and links <em>index.html</em> into these files. Used for preventing cache.</p>
<h3 id=plugins>Plugins</h3>
<p>Bobril-build allows you to use external plugins (e.g. <a href="https://github.com/saryn/bb-tslint-plugin">bb-tslint-plugin</a>) which runs in the final part of bobril-build process. To manage such plugins use following commands:</p>
<p>bb plugins [options]</p>
<h4 id=options>Options</h4>
<p>-l, --list - Lists all installed plugins.</p>
<p>-i, --install <pluginName> - Installs new plugin.</p>
<p>-u, --uninstall <pluginName> - Uninstalls specific plugin.</p>
<p>-s, --link - Links plugin to workspace.</p>
<h3 id=configuration>Configuration</h3>
<p>Bobril-build can be configured by options defined in <em>package.json</em>:</p>
<pre><code>{
    <span class="hljs-string">"typescript"</span>: {
        <span class="hljs-string">"main"</span>: <span class="hljs-string">"pathToMain.ts"</span><span class="hljs-regexp">//</span> index.ts <span class="hljs-keyword">by</span> <span class="hljs-keyword">default</span>
    },
    <span class="hljs-string">"bobril"</span>: {
        <span class="hljs-string">"dir"</span>: <span class="hljs-string">"name of directory where to place release default is dist"</span>,
        <span class="hljs-string">"resourcesAreRelativeToProjectDir"</span>: <span class="hljs-literal">false</span>, <span class="hljs-regexp">//</span> <span class="hljs-keyword">this</span> <span class="hljs-keyword">is</span> <span class="hljs-keyword">default</span>
        <span class="hljs-string">"additionalResourcesDirectory"</span>: <span class="hljs-string">"path to folder with files, these files will be added to dist"</span>,
        <span class="hljs-string">"example"</span>: <span class="hljs-string">"pathToExample.ts"</span>, <span class="hljs-regexp">//</span> sample application entry point - <span class="hljs-keyword">if</span> main <span class="hljs-keyword">is</span> index.ts than example.ts <span class="hljs-keyword">is</span> searched <span class="hljs-keyword">for</span> <span class="hljs-keyword">default</span>
        <span class="hljs-string">"title"</span>: <span class="hljs-string">"index.html Title"</span>,
        <span class="hljs-string">"head"</span>: <span class="hljs-string">"additional tags to head section of index.hml, e.g. &lt;meta&gt;"</span>,
        <span class="hljs-string">"compilerOptions"</span>: { 
            <span class="hljs-string">"noImplicitAny"</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-string">"noImplicitThis"</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-string">"noUnusedLocals"</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-string">"noUnusedParameters"</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-string">"noImplicitReturns"</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-string">"noFallthroughCasesInSwitch"</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-string">"strictNullChecks"</span>: <span class="hljs-literal">true</span>,
        },
        <span class="hljs-string">"prefixStyleDefs"</span>: <span class="hljs-literal">undefined</span>, <span class="hljs-regexp">//</span> prefix <span class="hljs-keyword">for</span> generated styles
        <span class="hljs-string">"constantOverrides"</span>: { 
            <span class="hljs-string">"module_name"</span>: {
                <span class="hljs-string">"export_name"</span>: <span class="hljs-string">"New value, it supports also number and boolean values"</span><span class="hljs-regexp">//</span> allows to overide constants exported <span class="hljs-keyword">from</span> <span class="hljs-built_in">npm</span> packages
            }
        },
        <span class="hljs-string">"dependencies"</span>: <span class="hljs-string">"install"</span>, <span class="hljs-regexp">//</span> <span class="hljs-string">"disable"</span> = <span class="hljs-literal">no</span> yarn at start <span class="hljs-string">"install"</span> = yarn install, <span class="hljs-string">"upgrade"</span> = yarn upgrade
        <span class="hljs-string">"plugins"</span>: {
            <span class="hljs-string">"pluginName"</span>: {
                <span class="hljs-string">"configKey"</span>: <span class="hljs-string">"configValue"</span><span class="hljs-regexp">//</span> provides configuration <span class="hljs-keyword">for</span> installed bobril plugins
            }
        }
    }
}
</code></pre>
<h3 id=debug-mode>Debug mode</h3>
<p>You can run some code conditionally based on _DEBUG _flag directly in the code.</p>
<p>Just add following code to your module:</p>
<pre><code class="language-javascript">declare <span class="hljs-keyword">let</span> DEBUG: boolean;
</code></pre>
<p>and bobril-build will assign such variable with value saying you are in debug mode (bb) or in production code (bb b).</p>
<p><h2 id="menu-bobx">BobX</h2></p>
<p><strong><a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleBobX">Download sample</a></strong></p>
<h3 id=background>Background</h3>
<p>BobX is MobX like library for managing application stores created by Boris Letocha (Quadient). It is written in TypeScript and fits the bobril application needs. It uses the observer pattern where stores are observable subjects and bobril components are observers.<br>
<img src="./images/bobx.png" alt="Flow of BobX"></p>
<h3 id=lets-start>Let's Start</h3>
<p>We will create a simple TODO application again. At first, we need to have prepared <em>bobril-build</em> on computer. Follow the steps in the <a href="https://github.com/keeema/bobril-samples/blob/master/articles/01_bobril-getting-started.md">first article</a> to perform bobril-build installation.</p>
<p>Now you can start a new project again or use a predefined skeleton simpleApp from <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/Bobris/bobril-build/tree/master/examples/simpleApp">bobril-build github repository</a>.</p>
<p>The following example will use it. To get final code including all needed components, <a href="https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/keeema/bobril-samples/tree/master/sampleBobX">download the full sample</a>.</p>
<p>BobX uses the experimental feature of TypeScript - decorators. To allow the usage of decorators, add the following parameter to the <em>bobril/compilerOptions</em> section in <em>package.json</em>:</p>
<pre><code><span class="hljs-attr">"bobril":</span> <span class="hljs-string">{</span>
<span class="hljs-attr">    "compilerOptions":</span> <span class="hljs-string">{</span>
<span class="hljs-attr">        "experimentalDecorators":</span> <span class="hljs-literal">true</span>
    <span class="hljs-string">}</span>
<span class="hljs-string">}</span>
</code></pre>
<h3 id=add-bobx-to-application>Add BobX to Application</h3>
<p>Run the following commands in the root of application folder:</p>
<pre><code class="language-bash">npm i
npm i bobx --save
bb
</code></pre>
<h3 id=store>Store</h3>
<p>At first, we will create a simple bobx store containing the same data as the bobflux variant. This store will be in file <em>store.ts:</em></p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { observable } <span class="hljs-keyword">from</span> <span class="hljs-string">'bobx'</span>;

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TodoStore</span> </span>{
    @observable todoName: string = <span class="hljs-string">''</span>;
    @observable private _todos: string[] = [];

    get todos(): string[] {
        returnthis._todos;
    }

    addTodo(): <span class="hljs-keyword">void</span> {
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.todoName.trim().length === <span class="hljs-number">0</span>)
            <span class="hljs-keyword">return</span>;
        <span class="hljs-keyword">this</span>._todos.push(<span class="hljs-keyword">this</span>.todoName.trim());
        <span class="hljs-keyword">this</span>.todoName = <span class="hljs-string">''</span>;
    }
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> todoStore = <span class="hljs-keyword">new</span> TodoStore();
</code></pre>
<p>In the code above, you can see used an @observable decorator on fields todoName and _todos. This decorator creates getters/setters with the tracking functionality on these fields. It will cause tracking of these fields. When such field is used in any rendering function in node of bobril component, then function b.invalidate(ctx) will be called automatically with particular context on every change of this field.</p>
<h3 id=composing-the-page-with-bobx>Composing the Page with BobX</h3>
<p>Now, we have everything prepared to be used on the page of the todo application. The <em>src/mainPage.ts</em> will look like this:</p>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> b <span class="hljs-keyword">from</span> <span class="hljs-string">'bobril'</span>;
<span class="hljs-keyword">import</span> { button } <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/button'</span>;
<span class="hljs-keyword">import</span> { textbox } <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/textbox'</span>;
<span class="hljs-keyword">import</span> { p } <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/paragraph'</span>;
<span class="hljs-keyword">import</span> { h1 } <span class="hljs-keyword">from</span> <span class="hljs-string">'./components/header'</span>;
<span class="hljs-keyword">import</span> { todoStore } <span class="hljs-keyword">from</span> <span class="hljs-string">'./store'</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> mainPage = b.createComponent({
    render(_ctx: b.IBobrilCtx, <span class="hljs-attr">me</span>: b.IBobrilNode): <span class="hljs-keyword">void</span> {
        me.children = [
            h1({}, <span class="hljs-string">'TODO'</span>),
            p({}, [
                textbox({ 
                    <span class="hljs-attr">value</span>: todoStore.todoName, 
                    <span class="hljs-attr">onChange</span>: <span class="hljs-function"><span class="hljs-params">newValue</span> =&gt;</span> todoStore.todoName = newValue 
                }),
                button({ 
                    <span class="hljs-attr">title</span>: <span class="hljs-string">'ADD'</span>, 
                    <span class="hljs-attr">onClick</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> todoStore.addTodo()
                })
            ]),
            todoStore.todos.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> p({}, item)),
            p({}, <span class="hljs-string">\`Count: <span class="hljs-subst">\${todoStore.todos.length}</span>\`</span>)
        ];
    }
});
</code></pre>
<p>The components definition is not the subject of this article, so you can use definitions in the attached source code.</p>
<p>You can see that a page imports the store directly from store module.</p>
<p>The textbox and button components use the actions defined on store in their onChange and onClick callbacks so the user interactions from view initiate the action calls. And finally, in the end of the render function is a mapped array of todos to 'p' tags with todo names.</p>
<p>Now, we are able to open the application in a browser on <a href="http://localhost:8080/">http://localhost:8080</a> and see how it works.</p>
<p>The <em>Global store</em> is one, but not the only one way how to define and use stores.<br>
The <em>Page store</em> can be instantiated directly in the init method of component and given to its sub-components through data.<br>
The <em>Context store</em> can be created as the component context for the component's inner data which you want to track.</p>
<p>Example of <em>Context store</em>:</p>
<pre><code class="language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">CtxStore</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">b</span>.<span class="hljs-title">BobrilCtx</span>&lt;<span class="hljs-title">IData</span>&gt;</span>; {
    @observable someProperty: string = <span class="hljs-string">''</span>;

    <span class="hljs-keyword">constructor</span>(data: IData, me: b.IBobrilCacheNode) {
        <span class="hljs-keyword">super</span>(data, me);
        ...
    }
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> myComponent = b.createComponent&lt;IData&gt;;({
    <span class="hljs-attr">ctxClass</span>: CtxStore,
    render(ctx: CtxStore) {
        ...
    }
})
</code></pre>
<h3 id=store-optimalizations>Store Optimalizations</h3>
<p>There is not only the pure observable function to define observable properties. Sometimes, you don’t want to track all properties of objects so let’s take a look at other possible ways:</p>
<ul>
<li>observable.deep - The default observable way. It decorates all defined properties of given objects to be observable (tracked) recursively. The recursion stops when the property contains an object with defined prototype.</li>
<li>observable.ref - Only the reference of object is tracked. No change of inner properties will trigger rendering.</li>
<li>observable.shallow - This variant will track the reference of given object, its properties but nothing more. So for example, the array will be tracked for its reference, its content, but not for the content of its items.</li>
<li>observable.map - You can use this function to create a dynamic keyed observable map.</li>
<li>computed - You can use this decorator on any getter of a class property to declaratively created computed properties. Computed values are values that can be derived from the existing store or other computed values.</li>
</ul>
<p>To get more information, see the project github pages:</p>
<ul>
<li><a href="https://github.com/bobril/bobx">https://github.com/bobril/bobx</a></li>
</ul>
<p>or MobX documentation pages:</p>
<ul>
<li><a href="https://mobx.js.org/">https://mobx.js.org</a></li>
</ul>
<div id='menu-docs'style='font-size: 2em; font-weight:400; color: #0097a7'>Docs</div>
<p>Bobril is component oriented framework with very lightweight virtual dom. It has no dependencies.</p>
<p>There are 2 versions of framework.</p>
<p>First should be used directly as scripts without any build tool, it declares global variable <code>b</code> which is like namespace for all Bobril methods. And is probably easiest way to start learning Bobril.</p>
<p>Second one in package directory which is published in NPM. It is meant to be used with <strong>bobril-build</strong>. And should be used with standard <strong>ES6 imports</strong>. For this version there is also additional NPM module <strong>bobril-g11n</strong> to help with globalization of Bobril applications.</p>
<p>There is used <code>DEBUG</code> variable which could be predefined to false and remove some code by uglify, also remove warnings for developer mistakes, so make sure you are using nonminified version in development.</p>
<p><h2 id='menu-virtual-dom'>Virtual Dom</h2></p>
<p>Very basic examples to explain how the virtual dom is build by pure JS objects. Of course nothing prevents you to create your own helper functions to shorten code to less than original HTML.</p>
<p>Farther in documentation - <a href="#menu-bobril-component">Bobril Component</a> - it will be explained how to create maintainable Bobril component.</p>
<table>
<thead>
<tr><th>HTML</th><th>Bobril</th></tr>
</thead>
<tbody>
<tr><td><code>&lt;div&gt;&lt;/div&gt;</code></td><td><code>{ tag:&quot;div&quot; }</code></td></tr>
<tr><td><code>&lt;span&gt;Hello&lt;/span&gt;</code></td><td><code>{ tag:&quot;span&quot;, children:&quot;Hello&quot; }</code></td></tr>
<tr><td><code>&lt;a href=&quot;url&quot;&gt;Ex&lt;/a&gt;</code></td><td><code>{ tag:&quot;a&quot;, attrs: { href:&quot;url&quot; }, children:&quot;Ex&quot; }</code></td></tr>
<tr><td><code>&lt;span style=&quot;text-size:20px&quot;&gt;Big&lt;/span&gt;</code></td><td><code>{ tag:&quot;span&quot;, style: { textSize:&quot;20px&quot; }, children:&quot;Big&quot; }</code></td></tr>
<tr><td><code>&lt;h1 class=&quot;head&quot;&gt;&amp;lt;&lt;/h1&gt;</code></td><td><code>{ tag:&quot;h1&quot;, className:&quot;head&quot;, children:&quot;&lt;&quot; }</code></td></tr>
<tr><td><code>style=&quot;float:left&quot;</code></td><td><code>style: { cssFloat:&quot;left&quot; }</code></td></tr>
<tr><td><code>&lt;div&gt;&lt;br&gt;&lt;/div&gt;</code></td><td><code>{ tag:&quot;div&quot;, children: { tag:&quot;br&quot; } }</code></td></tr>
<tr><td><code>&lt;div&gt;&lt;span&gt;A&lt;/span&gt;B&lt;/div&gt;</code></td><td><code>{ tag:&quot;div&quot;, children: [ { tag:&quot;span&quot;, children: &quot;A&quot; }, &quot;B&quot; ] }</code></td></tr>
</tbody>
</table>
<h4 id=children-member-in-virtual-dom-could-be>Children member in virtual dom could be:</h4>
<ul>
<li><code>undefined</code></li>
<li><code>null</code></li>
<li><code>false</code></li>
<li><code>true</code></li>
<li>string</li>
<li>number</li>
<li>object - Objects must contain at least one of <code>tag</code> or <code>component</code> (could build itself to VDOM)</li>
<li>array of all items above</li>
</ul>
<p>Children members <code>undefined</code>, <code>null</code>, <code>false</code> and <code>true</code> are automatically skipped. Nested arrays are flattened. Strings, numbers are DOM text nodes.</p>
<p>Maybe you are asking why skipping <code>false</code> and <code>true</code> is useful. It allows to write code like this:</p>
<pre><code class="language-javacript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">div</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> { <span class="hljs-attr">tag</span>:<span class="hljs-string">"div"</span>, <span class="hljs-attr">children</span>: [].split.call(<span class="hljs-built_in">arguments</span>) };
}

me.children = items.map(<span class="hljs-function">(<span class="hljs-params">v</span>)=&gt;</span>div(v.name, <span class="hljs-string">" "</span>, v.readonly || { <span class="hljs-attr">tag</span>:<span class="hljs-string">"button"</span>, <span class="hljs-attr">children</span>: <span class="hljs-string">"rename"</span> }));
</code></pre>
<p><h2 id='menu-bobril-node'>Bobril Node</h2></p>
<p>More variants of bobril node exist:</p>
<ul>
<li><code>IBobrilNodeWithTag</code></li>
<li><code>IBobrilNodeWithComponent</code></li>
<li><code>IBobrilNodeWithChildren</code></li>
<li><code>IBobrilNode</code> - it is defined like <code>IBobrilNodeWithTag | IBobrilNodeWithComponent | IBobrilNodeWithChildren</code></li>
</ul>
<p>All of them inherit from <code>IBobrilNodeCommon</code>.</p>
<p>The definition of <code>IBobrilNodeCommon</code> is:</p>
<pre><code class="language-typescript"><span class="hljs-comment">// new node should atleast have tag or component or children member</span>
<span class="hljs-keyword">interface</span> IBobrilNodeCommon {
    tag?: <span class="hljs-built_in">string</span>;
    key?: <span class="hljs-built_in">string</span>;
    className?: <span class="hljs-built_in">string</span>;
    style?: <span class="hljs-built_in">any</span>;
    attrs?: IBobrilAttributes;
    children?: IBobrilChildren;
    ref?: [IBobrilCtx, <span class="hljs-built_in">string</span>] | <span class="hljs-function">(<span class="hljs-params">(<span class="hljs-params">node: IBobrilCacheNode</span>) =&gt; <span class="hljs-built_in">void</span></span>);
    // <span class="hljs-params">set</span> <span class="hljs-params">this</span> <span class="hljs-params">for</span> <span class="hljs-params">children</span> <span class="hljs-params">to</span> <span class="hljs-params">be</span> <span class="hljs-params">set</span> <span class="hljs-params">to</span> <span class="hljs-params">their</span> <span class="hljs-params">ctx</span>.<span class="hljs-params">cfg</span>, <span class="hljs-params">if</span> <span class="hljs-params">undefined</span> <span class="hljs-params">your</span> <span class="hljs-params">own</span> <span class="hljs-params">ctx</span>.<span class="hljs-params">cfg</span> <span class="hljs-params">will</span> <span class="hljs-params">be</span> <span class="hljs-params">used</span> <span class="hljs-params">anyway</span>
    <span class="hljs-params">cfg</span>?: <span class="hljs-params">any</span>;
    <span class="hljs-params">component</span>?: <span class="hljs-params">IBobrilComponent</span>;
    // <span class="hljs-params">Bobril</span> <span class="hljs-params">does</span> <span class="hljs-params">not</span> <span class="hljs-params">touch</span> <span class="hljs-params">this</span>, <span class="hljs-params">it</span> <span class="hljs-params">is</span> <span class="hljs-params">completely</span> <span class="hljs-params">for</span> <span class="hljs-params">user</span> <span class="hljs-params">passing</span> <span class="hljs-params">custom</span> <span class="hljs-params">data</span> <span class="hljs-params">to</span> <span class="hljs-params">component</span>
    // <span class="hljs-params">It</span> <span class="hljs-params">is</span> <span class="hljs-params">very</span> <span class="hljs-params">similar</span> <span class="hljs-params">to</span> <span class="hljs-params">props</span> <span class="hljs-params">in</span> <span class="hljs-params">ReactJs</span>, <span class="hljs-params">it</span> <span class="hljs-params">must</span> <span class="hljs-params">be</span> <span class="hljs-params">immutable</span>, <span class="hljs-params">you</span> <span class="hljs-params">have</span> <span class="hljs-params">access</span> <span class="hljs-params">to</span> <span class="hljs-params">this</span> <span class="hljs-params">through</span> <span class="hljs-params">ctx</span>.<span class="hljs-params">data</span>
    <span class="hljs-params">data</span>?: <span class="hljs-params">any</span>;
}
</span></code></pre>
<p>For a complete description of interfaces see: <a href="https://github.com/Bobris/Bobril/blob/master/dist/bobril.d.ts">Bobril definition file</a>.</p>
<h3 id=tag>Tag</h3>
<p><code>tag</code></p>
<p>There are 3 special values for <code>tag</code>:</p>
<ul>
<li><code>empty string</code> - then children must be string and it means just DOM text node,<br>
string in children is converted to this inside Bobril, there are not much reasons to use this directly.</li>
<li><code>&quot;/&quot;</code> - it means that children (must be string) is treated as innerHTML.<br>
Normally you should not need it, but if you will use it, be very careful about XSS attacks and that string should never come directly from user. Probably only useful if you have Markdown renderer inside app.</li>
<li><code>&quot;-&quot;</code> - it means to skip update of this component. It could be used for very similar purposes as <code>shouldChange</code> live cycle method.</li>
</ul>
<p>When <code>tag</code> is <code>&quot;svg&quot;</code>, Bobril automatically adds all namespace crap, so your code is more readable.</p>
<h3 id=attrs>Attrs</h3>
<p><code>attrs</code></p>
<p>Field <code>attrs</code> is just JS object.</p>
<p><strong>Warning</strong>: Because <code>for</code> is reserved word in JS it must be written as <code>htmlFor</code>.</p>
<h3 id=style>Style</h3>
<p><code>style</code></p>
<p>Attribute <code>style</code> is handled specially. It could be string or object. String case for <code>style</code> should be used very rarely, because it is not enriched like object case.</p>
<p><strong>Warning</strong>: For <code>style</code> key <code>float</code> must be written as <code>cssFloat</code> because it is also reserved keyword.</p>
<h3 id=children>Children</h3>
<p><code>children</code></p>
<p>As a children, you can append any virtual dom member.</p>
<h3 id=component>Component</h3>
<p><code>component</code></p>
<p>Every bobril node could have <code>component</code> field defined.  It can contain main life cycle methods.<br>
It can also contain event handlers. You should not use native HTML events directly though for example attrs field.</p>
<p>If you need to use some of events currently not wrapped by Bobril, you can use<br>
postInitDom function to link event. It will be described in chapter Bobril Component.</p>
<p><h2 id='menu-initialization'>Initialization</h2></p>
<h4 id=binit>b.init</h4>
<h4 id=baddroot>b.addRoot</h4>
<h4 id=binvalidate>b.invalidate</h4>
<p><h2 id='menu-bobril-component'>Bobril Component</h2></p>
<h3 id=life-cycle>Life Cycle</h3>
<h4 id=init>init</h4>
<h4 id=render>render</h4>
<h4 id=postrender>postRender</h4>
<h4 id=postinitdom>postInitDom</h4>
<h4 id=postupdatedom>postUpdateDom</h4>
<h4 id=postupdatedomeverytime>postUpdateDomEverytime</h4>
<h4 id=shouldchange>shouldChange</h4>
<h4 id=destroy>destroy</h4>
<h4 id=canactivate>canActivate</h4>
<h4 id=candeactivate>canDeactivate</h4>
<h3 id=component-creation>Component Creation</h3>
<h4 id=context>Context</h4>
<h4 id=idata-interface>IData Interface</h4>
<h4 id=createcomponent>createComponent</h4>
<h4 id=createderivedcomponent>createDerivedComponent</h4>
<h4 id=createoverridingcomponent>createOverridingComponent</h4>
<h4 id=createvirtualcomponent>createVirtualComponent</h4>
<p><h2 id='menu-events'>Events</h2></p>
<p><h2 id='menu-assets'>Assets</h2></p>
<h3 id=css-injection>CSS Injection</h3>
<h4 id=binjectcss>b.injectCss</h4>
<h3 id=loading-assets>Loading Assets</h3>
<h4 id=basset>b.asset</h4>
<h4 id=bsprite>b.sprite</h4>
<p><h2 id='menu-responsive-design'>Responsive Design</h2></p>
<h3 id=media>Media</h3>
<h4 id=ibobrilmedia>IBobrilMedia</h4>
<h4 id=getmedia>getMedia</h4>
<div id ='menu-community' style='font-size: 2em; font-weight:400; color: #0097a7'>Community</div><p><h2 id='menu-examples'>Examples</h2></p>
<ul>
<li><a href="https://github.com/Bobris/Bobril/tree/master/bbExamples">Bobril-build examples here.</a></li>
<li><a href="https://github.com/Bobris/Bobril/tree/master/examples">Older examples here.</a></li>
</ul>

        </div>
    </div>
    `;
