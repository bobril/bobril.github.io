import * as b from "bobril";

export class Content extends b.Component {
  static id: string = "theory";
  render(): b.IBobrilChildren {
    return content;
  }
}

export const content: b.IBobrilNode = <><h1 id="theory">{`Theory`}</h1>
<p>{`Deep learning fundamentals and theory.`}</p>
<h2 id="virtual-dom-vdom">{`Virtual DOM (VDOM)`}</h2>
<h3 id="what-it-is">{`What it is?`}</h3>
<p>{`Virtual DOM (VDOM) is a programming concept for abtraction of the DOM. Virtual representation of UI is kept in memory and synced with DOM representation. It contains all the details needed to create DOM but can be created and changed in more performant way. DOM changes are usually slow and browser-specific.
VDOM is represented by an `}<code>object</code>{`. This object can be frequently manipulated and updated. After all changes are applied to VDOM, DOM can be modified in optimized way – in Bobril it means that just changed nodes are rerendered.`}</p>
<h3 id="bobril-representation">{`Bobril Representation`}</h3>
<table>
<thead>
<tr>
<th>{`HTML`}</th>
<th>{`Bobril`}</th>
</tr>
</thead>
<tbody><tr>
<td><code>&lt;div&gt;&lt;/div&gt;</code></td>
<td>{`{ tag:”div” }`}</td>
</tr>
<tr>
<td><code>&lt;span&gt;Hello&lt;/span&gt;</code></td>
<td>{`{ tag:”span”, children:”Hello” }`}</td>
</tr>
<tr>
<td><code>&lt;a href=&quot;url&quot;&gt;Ex&lt;/a&gt;</code></td>
<td>{`{ tag:”a”, attrs: { href:”url” }, children:”Ex” }`}</td>
</tr>
<tr>
<td><code>&lt;span style=&quot;text-size:20px&quot;&gt;Big&lt;/span&gt;</code></td>
<td>{`{ tag:”span”, style: { textSize:”20px” }, children:”Big” }`}</td>
</tr>
<tr>
<td><code>&lt;h1 class=&quot;head&quot;&gt;&amp;lt;&lt;/h1&gt;</code></td>
<td>{`{ tag:”h1”, className:”head”, children:”`}{`&lt;” }`}</td>
</tr>
<tr>
<td><code>style=&quot;float:left&quot;</code></td>
<td>{`style: { cssFloat:”left” }`}</td>
</tr>
<tr>
<td><code>&lt;div&gt;&lt;br&gt;&lt;/div&gt;</code></td>
<td>{`{ tag:”div”, children: { tag:”br” } }`}</td>
</tr>
<tr>
<td><code>&lt;div&gt;&lt;span&gt;A&lt;/span&gt;B&lt;/div&gt;</code></td>
<td>{`{ tag:”div”, children: `}[{` { tag:”span”, children: “A” }, “B” ] }`}</td>
</tr>
</tbody></table>
<h3 id="children">{`Children`}</h3>
<p>{`Children member in VDOM could be `}<code>undefined</code>{`, `}<code>null</code>{`, `}<code>false</code>{`, `}<code>true</code>{`, `}<code>string</code>{`, `}<code>number</code>{`, `}<code>object</code>{` or `}<code>array</code>{` of all these items.
`}<code>Undefined</code>{`, `}<code>null</code>{`, `}<code>false</code>{` and `}<code>true</code>{` are automatically skipped. This allow to write code like this.`}</p>


<pre><code class="language-tsx">{`import * as b from "bobril";

export function WelcomePage(isLoggedIn: boolean): b.IBobrilNode {
  return (
    <>
      <h1>Welcome to bobril page!</h1>
      {!isLoggedIn && <button>LogIn</button>}
    </>
  );
}
`}</code></pre>
<p><code>Nested Arrays</code>{` are flattered. `}<code>strings</code>{` and `}<code>numbers</code>{` are DOM text nodes.`}</p>
</>;