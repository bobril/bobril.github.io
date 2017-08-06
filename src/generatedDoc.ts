
export const html =`
    <div class='doc-menu' style='float: left; width: 170px'>
        
        <ul style='margin: 0; padding: 0'>
            
                    <li>
                        <a 
                           style='text-decoration: none; color: rgba(0,0,0,0.870)'  
                           onMouseOver="this.style.color='rgb(0, 188, 212)'"
                           onMouseOut="this.style.color='#000'" 
                           href='#why-own-framework'>
                                Introduction
                        </a>
                    </li>
                    <li>
                        <a 
                           style='text-decoration: none; color: rgba(0,0,0,0.870)'  
                           onMouseOver="this.style.color='rgb(0, 188, 212)'"
                           onMouseOut="this.style.color='#000'" 
                           href='#how-to-start'>
                                How to start
                        </a>
                    </li>
                    <li>
                        <a 
                           style='text-decoration: none; color: rgba(0,0,0,0.870)'  
                           onMouseOver="this.style.color='rgb(0, 188, 212)'"
                           onMouseOut="this.style.color='#000'" 
                           href='#examples'>
                                Examples
                        </a>
                    </li>
        </ul>
    
    </div>
    <div class='doc-content'
         style='padding-left: 16px; border-left: 1px solid #bdbdbd; margin-left: 186px'>
        <h1 id=why-own-framework>Why own framework</h1>
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
<h1 id=how-to-start>How to start</h1>
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
<h1 id=examples>Examples</h1>
<ul>
<li><a href="https://github.com/Bobris/Bobril/tree/master/bbExamples">Bobril-build examples here.</a></li>
<li><a href="https://github.com/Bobris/Bobril/tree/master/examples">Older examples here.</a></li>
</ul>

    </div>
    `
