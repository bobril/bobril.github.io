## Virtual DOM (VDOM)

### What it is?

Virtual DOM (VDOM) is a programming concept for abtraction of the DOM. Virtual representation of UI is kept in memory and synced with DOM representation. It contains all the details needed to create DOM but can be created and changed in more performant way. DOM changes are usually slow and browser-specific.
VDOM is represented by an `object`. This object can be frequently manipulated and updated. After all changes are applied to VDOM, DOM can be modified in optimized way – in Bobril it means that just changed nodes are rerendered.

### Bobril Representation

| HTML                                      | Bobril                                                          |
| ----------------------------------------- | --------------------------------------------------------------- |
| `<div></div>`                             | { tag:"div" }                                                   |
| `<span>Hello</span>`                      | { tag:"span", children:"Hello" }                                |
| `<a href="url">Ex</a>`                    | { tag:"a", attrs: { href:"url" }, children:"Ex" }               |
| `<span style="text-size:20px">Big</span>` | { tag:"span", style: { textSize:"20px" }, children:"Big" }      |
| `<h1 class="head">&lt;</h1>`              | { tag:"h1", className:"head", children:"<" }                    |
| `style="float:left"`                      | style: { cssFloat:"left" }                                      |
| `<div><br></div>`                         | { tag:"div", children: { tag:"br" } }                           |
| `<div><span>A</span>B</div>`              | { tag:"div", children: [ { tag:"span", children: "A" }, "B" ] } |

### Children

Children member in VDOM could be `undefined`, `null`, `false`, `true`, `string`, `number`, `object` or `array` of all these items.
`Undefined`, `null`, `false` and `true` are automatically skipped. This allow to write code like this.

<!-- # from-file: ../../examples/vdom/index.tsx -->

```tsx
import * as b from "bobril";

export function WelcomePage(isLoggedIn: boolean): b.IBobrilNode {
  return (
    <>
      <h1>Welcome to bobril page!</h1>
      {!isLoggedIn && <button>LogIn</button>}
    </>
  );
}

```

`Nested Arrays` are flattered. `strings` and `numbers` are DOM text nodes.
