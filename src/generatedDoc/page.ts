
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
<p>When you generate millions of embedded websites, size matters. React gzipped is 42K, Bobril is 17K. Unzipped size was also interesting for us, as the difference is even bigger. A similar problem is with Router libraries.</p>
<h3 id=speed>Speed</h3>
<p>Bobril is faster in most operations. <a href="https://localvoid.github.io/uibench/">You can test it here.</a> And in 2015, React was slow, they keep improving it over time.</p>
<h3 id=own>Own</h3>
<p>If you need modifications, you can do it on your own product easily without taking care about a lot of other use cases. Complexity is expensive. For example, Input element onChange behavior was broken in React in cases that were critical for us (it took them 3 years to fix these). Multiple virtual dom roots in Bobril simplify popups and modal dialogs. Unique CSS in JS solution is built in Bobril nearly from the beginning. Bobx (a Mobx-like library) benefits from deep integration with Bobril.</p>
<p>All this was for Inspire Designer at the beginning. But when we were thinking about the framework for another big product, we found that size, speed and using your own framework are significant advantages and decided to use it on company level. Of course, this decision has a disadvantage in the lack of community.</p>
<div id='menu-docs'style='font-size: 2em; font-weight:400; color: #0097a7'>Docs</div>
<p>Bobril is component oriented framework with very lightweight virtual dom. It has no dependencies.</p>
<p>There are 2 versions of framework.</p>
<p>First should be used directly as scripts without any build tool, it declares global variable <code>b</code> which is like namespace for all Bobril methods. And is probably easiest way to start learning Bobril.</p>
<p>Second one in package directory which is published in NPM. It is meant to be used with <strong>bobril-build</strong>. And should be used with standard <strong>ES6 imports</strong>. For this version there is also additional NPM module <strong>bobril-g11n</strong> to help with globalization of Bobril applications.</p>
<p>There is used <code>DEBUG</code> variable which could be predefined to false and remove some code by uglify, also remove warnings for developer mistakes, so make sure you are using nonminified version in development.</p>
<p><h2 id='menu-virtual-dom'>Virtual Dom</h2></p>
<p>Very basic examples to explain how the virtual dom is build by pure JS objects. Of course nothing prevents you to create your own helper functions to shorten code to less than original HTML.</p>
<p>Creation of maintainable Bobril components is explained further in documentation - <a href="#menu-bobril-component">Bobril Component</a>.</p>
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
<li><code>IBobrilNode</code> - it is defined like <code>IBobrilNodeCommon &amp; object</code></li>
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
<li><code>&quot;-&quot;</code> - it means to skip update of this component. It could be used for very similar purposes as <code>shouldChange</code> lifecycle method.</li>
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
<p>Every bobril node could have <code>component</code> field defined.  It can contain main lifecycle methods.<br>
It can also contain event handlers. You should not use native HTML events directly, for example through <code>attrs</code> field.</p>
<p>If you need to use some of events currently not wrapped by Bobril, you can use<br>
postInitDom function to link event. It will be described in chapter <a href="#menu-bobril-component">Bobril Component</a>.</p>
<p><h2 id='menu-initialization'>Initialization</h2></p>
<h4 id=binit>b.init</h4>
<h4 id=baddroot>b.addRoot</h4>
<h4 id=binvalidate>b.invalidate</h4>
<p><h2 id='menu-bobril-component'>Bobril Component</h2></p>
<h3 id=lifecycle>Lifecycle</h3>
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
<h3 id=event-basics>Event basics</h3>
<p>Bobril application never works with native browser events directly. First native browser events listened only on body/document, then are processed, normalized by Bobril, and finally they just call methods on your component <code>IBobrilComponent</code> implementation. First simple example how to listen on any click:</p>
<pre><code>interface IButtonData {
    children?: <span class="hljs-keyword">b.IBobrilChildren;
</span><span class="hljs-symbol">    action:</span> () =&gt; void<span class="hljs-comment">;</span>
}

interface IButtonCtx <span class="hljs-keyword">extends </span><span class="hljs-keyword">b.IBobrilCtx </span>{
<span class="hljs-symbol">    data:</span> IButtonData<span class="hljs-comment">;</span>
}

const <span class="hljs-keyword">Button </span>= <span class="hljs-keyword">b.createVirtualComponent&lt;IButtonData&gt;({
</span>    render(ctx: IButtonCtx, me: <span class="hljs-keyword">b.IBobrilNode) </span>{
        me.tag = <span class="hljs-string">"button"</span><span class="hljs-comment">;</span>
        me.children = ctx<span class="hljs-meta">.data</span>.children<span class="hljs-comment">;</span>
    },
    onClick(ctx: IButtonCtx): <span class="hljs-keyword">boolean </span>{
        ctx<span class="hljs-meta">.data</span>.action()<span class="hljs-comment">;</span>
        return true<span class="hljs-comment">;</span>
    }
})<span class="hljs-comment">;</span>
</code></pre>
<p>Boolean result means for events which bubble (most of them) if they should stop bubble and also prevent default. There is way to stop bubbling without preventing default, you can do by implementing this IBobrilComponent method</p>
<pre><code>shouldStopBubble(<span class="hljs-string">ctx:</span> IBobrilCtx, <span class="hljs-string">name:</span> string, <span class="hljs-string">param:</span> Object): <span class="hljs-keyword">boolean</span>;
</code></pre>
<p>It could be used in checkbox component where you don't want to prevent default browser handling of mouse click, but also parent components should not know about it, so they cannot prevent default on it them self.</p>
<pre><code>shouldStopBubble(_ctx: b.IBobrilCtx, <span class="hljs-built_in">name</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">boolean</span> {
<span class="hljs-built_in">    return</span> <span class="hljs-built_in">name</span> === <span class="hljs-string">"onClick"</span>;
}
</code></pre>
<h3 id=how-to-emit-your-own-bobril-events>How to emit your own Bobril events</h3>
<p>If you want to emit Bobril bubbling event you can call:</p>
<pre><code>b.bubble(nodeWhereToStartBubbling, <span class="hljs-string">"onYourEventName"</span>, { someParams: <span class="hljs-number">42</span> });

bubble(<span class="hljs-keyword">node</span><span class="hljs-title">: IBobrilCacheNode</span> | null | undefined, name: <span class="hljs-keyword">string</span>, param: any): IBobrilCtx | undefined
</code></pre>
<p>Bubble method will return ctx of component which returned truefy result.</p>
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
    `
    