[//]: <> (!!! ORDER OF ROWS IS REQUIRED !!!)
[//]: <> (menuLabel:'Virtual Dom')
[//]: <> (menuAnchor:'menu-virtual-dom')
[//]: <> (previous:'root.md';next: 'bobrilNode.md')
<h2 id='menu-virtual-dom'>Virtual Dom</h2>

Very basic examples to explain how the virtual dom is build by pure JS objects. Of course nothing prevents you to create your own helper functions to shorten code to less than original HTML.

Creation of maintainable Bobril components is explained further in documentation - [Bobril Component](#menu-bobril-component).

HTML | Bobril
---- | ------
`<div></div>` | `{ tag:"div" }`
`<span>Hello</span>` | `{ tag:"span", children:"Hello" }`
`<a href="url">Ex</a>` | `{ tag:"a", attrs: { href:"url" }, children:"Ex" }`
`<span style="text-size:20px">Big</span>` | `{ tag:"span", style: { textSize:"20px" }, children:"Big" }`
`<h1 class="head">&lt;</h1>` | `{ tag:"h1", className:"head", children:"<" }`
`style="float:left"` | `style: { cssFloat:"left" }`
`<div><br></div>` | `{ tag:"div", children: { tag:"br" } }`
`<div><span>A</span>B</div>` | `{ tag:"div", children: [ { tag:"span", children: "A" }, "B" ] }`

#### Children member in virtual dom could be: 
* `undefined`
* `null`
* `false`
* `true`
* string
* number
* object - Objects must contain at least one of `tag` or `component` (could build itself to VDOM)
* array of all items above

Children members `undefined`, `null`, `false` and `true` are automatically skipped. Nested arrays are flattened. Strings, numbers are DOM text nodes.


Maybe you are asking why skipping `false` and `true` is useful. It allows to write code like this:

```javacript
function div() {
    return { tag:"div", children: [].split.call(arguments) };
}

me.children = items.map((v)=>div(v.name, " ", v.readonly || { tag:"button", children: "rename" }));
```
