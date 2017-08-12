
export const html =`
    <style>.markdown h1 {
    font-size: 24px;
    font-weight: 400;
}

.markdown h2 {
    font-size: 20px;
    font-weight: 500;
}

.markdown h3 {
    font-size: 15px;
    font-weight: 400;
}

.markdown h4 {
    font-size: 13px;
    font-weight: 500;
}

.markdown h5 {
    font-size: 13px;
    font-weight: 400;
}

.markdown h6 {
    font-size: 12px;
    font-weight: 400;
}

.markdown a {
    color: rgb(0, 188, 212);
}

.markdown li {
    list-style: none;
}
.markdown .doc-menu {
    float: left;
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
}.markdown .doc-content {
    padding-left: 16px;
    border-left: 1px solid #bdbdbd;
}</style>
    <div class="markdown">
        <div class='doc-menu' 
            style='width: 190px'>
            <ul class='menu-block'>
                
        <li>
            <a 
               class='menu-block-header'
               href='#introduction'>
                    Introduction
            </a>
        </li>
    
                <ul class='menu-sub-block'>
        <li>
            <a 
               class='menu-sub-block-item'
               href='#why-own-framework'>
                    Why own framework
            </a>
        </li>
    
                </ul>
            </ul><ul class='menu-block'>
                
        <li>
            <a 
               class='menu-block-header'
               href='#guides'>
                    Guides
            </a>
        </li>
    
                <ul class='menu-sub-block'>
        <li>
            <a 
               class='menu-sub-block-item'
               href='#how-to-start'>
                    How to start
            </a>
        </li>
    
                </ul>
            </ul><ul class='menu-block'>
                
        <li>
            <a 
               class='menu-block-header'
               href='#docs'>
                    Docs
            </a>
        </li>
    
                <ul class='menu-sub-block'>
                </ul>
            </ul><ul class='menu-block'>
                
        <li>
            <a 
               class='menu-block-header'
               href='#community'>
                    Community
            </a>
        </li>
    
                <ul class='menu-sub-block'>
        <li>
            <a 
               class='menu-sub-block-item'
               href='#examples'>
                    Examples
            </a>
        </li>
    
                </ul>
            </ul>
        </div>
        <div class='doc-content'
             style='margin-left: 206px'>
            <div id='introduction' style='font-size: 24px; font-weight:400; color: #0097a7'>Introduction</div><h1 id=why-own-framework>Why own framework</h1>
<p>For one of our products, we needed the ability to generate single-file websites (all resources embedded). We are using these websites as a new digital channel.</p>
<p>We started with by our opinion the best choice at that time ? Angular 1. However, we soon reached its performance and logic limits. After two years, Boris has evaluated a lot of other frameworks. Mainly ReactJs. Unfortunately, it did not meet all our needs.</p>
<h2 id=mobile-focus>Mobile focus</h2>
<p>Touch/multitouch support in ReactJs was and is an afterthought. It was critical for us to simplify user code regardless of device and input type and browser (IE8+ at that time).</p>
<h2 id=easy-to-generate>Easy to generate</h2>
<p>The core of our use is in Inspire Designer. It is not so easy to generate code in React. JSX is basically required to be used in React. It needs advanced JS optimizations in Babel to remove any JSX from resulting code, and the resulting code is still big.</p>
<h2 id=size>Size</h2>
<p>When you generate millions of embedded websites, size matters. React gziped is 42K, Bobril is 17K. Unzipped size was also interesting for us, as the difference is even bigger. A similar problem is with Router libraries.</p>
<h2 id=speed>Speed</h2>
<p>Bobril is faster in most operations. <a href="https://localvoid.github.io/uibench/">You can test it here.</a> And in 2015, React was slow, they keep improving it over time.</p>
<h2 id=own>Own</h2>
<p>If you need modifications, you can do it on your own product easily without taking care about a lot of other use cases. Complexity is expensive. For example, Input element onChange behavior was broken in React in cases that were critical for us (it took them 3 years to fix these). Multiple virtual dom roots in Bobril simplify popups and modal dialogs. Unique CSS in JS solution is built in Bobril nearly from the beginning. Bobx (a Mobx-like library) benefits from deep integration with Bobril.</p>
<p>All this was for Inspire Designer at the beginning. But when we were thinking about the framework for another big product, we found that size, speed and using your own framework are significant advantages and decided to use it on company level. Of course, this decision has a disadvantage in the lack of community.</p>
<div id='guides' style='font-size: 24px; font-weight:400; color: #0097a7'>Guides</div><h1 id=how-to-start>How to start</h1>
<ul>
<li><a href="https://github.com/Bobris/Bobril/blob/master/src/bobril.md">Bobril documentation</a></li>
<li><a href="https://www.codeproject.com/Articles/1044425/Bobril-I-Getting-Started">Bobril - Getting started</a></li>
<li><a href="https://www.codeproject.com/Articles/1044425/Bobril-I-Getting-Started">Bobril - I - Getting started</a></li>
<li><a href="https://www.codeproject.com/Articles/1055921/Bobril-II-Bobflux-application-architecture">Bobril - II - Bobflux Application Architecture</a></li>
<li><a href="https://www.codeproject.com/Articles/1058132/Bobril-III-Localizations-and-formatting">Bobril - III - Localizations and Formatting</a></li>
<li><a href="https://www.codeproject.com/Articles/1058609/Bobril-IV-Routing">Bobril - IV - Routing</a></li>
<li><a href="https://www.codeproject.com/Articles/1167901/bobril-build">Bobril - V - Bobril-build</a></li>
<li><a href="https://www.codeproject.com/Articles/1184937/Bobril-Integration-to-Another-Web-Application">Bobril - Integration to Another Web Application</a></li>
</ul>
<div id='docs'style='font-size: 24px; font-weight:400; color: #0097a7'>Docs</div>
<div id ='community' style='font-size: 24px; font-weight:400; color: #0097a7'>Community</div><h1 id=examples>Examples</h1>
<ul>
<li><a href="https://github.com/Bobris/Bobril/tree/master/bbExamples">Bobril-build examples here.</a></li>
<li><a href="https://github.com/Bobris/Bobril/tree/master/examples">Older examples here.</a></li>
</ul>

        </div>
    </div>
    `
