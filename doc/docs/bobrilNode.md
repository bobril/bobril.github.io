---
metadata:
  menuLabel: "Bobril Node"
  menuAnchor: "menu-bobril-node"
  previous: "virtualDom.md"
  next: "initialization.md"
---

<h2 id='menu-bobril-node'>Bobril Node</h2>

More variants of bobril node exist: 
* `IBobrilNodeWithTag`
* `IBobrilNodeWithComponent`
* `IBobrilNodeWithChildren`
* `IBobrilNode` - it is defined like `IBobrilNodeCommon & object`

All of them inherit from `IBobrilNodeCommon`.

The definition of `IBobrilNodeCommon` is:

```typescript
// new node should atleast have tag or component or children member
interface IBobrilNodeCommon {
    tag?: string;
    key?: string;
    className?: string;
    style?: any;
    attrs?: IBobrilAttributes;
    children?: IBobrilChildren;
    ref?: [IBobrilCtx, string] | ((node: IBobrilCacheNode) => void);
    // set this for children to be set to their ctx.cfg, if undefined your own ctx.cfg will be used anyway
    cfg?: any;
    component?: IBobrilComponent;
    // Bobril does not touch this, it is completely for user passing custom data to component
    // It is very similar to props in ReactJs, it must be immutable, you have access to this through ctx.data
    data?: any;
}
```

For a complete description of interfaces see: [Bobril definition file](https://github.com/Bobris/Bobril/blob/master/dist/bobril.d.ts).

### Tag 

`tag`

There are 3 special values for `tag`: 
  * `empty string` - then children must be string and it means just DOM text node,
string in children is converted to this inside Bobril, there are not much reasons to use this directly.
  * `"/"` - it means that children (must be string) is treated as innerHTML. 
Normally you should not need it, but if you will use it, be very careful about XSS attacks and that string should never come directly from user. Probably only useful if you have Markdown renderer inside app.
  * `"-"` - it means to skip update of this component. It could be used for very similar purposes as `shouldChange` lifecycle method.

When `tag` is `"svg"`, Bobril automatically adds all namespace crap, so your code is more readable.

### Attrs

`attrs`

Field `attrs` is just JS object. 

**Warning**: Because `for` is reserved word in JS it must be written as `htmlFor`.

### Style

`style`

Attribute `style` is handled specially. It could be string or object. String case for `style` should be used very rarely, because it is not enriched like object case. 

**Warning**: For `style` key `float` must be written as `cssFloat` because it is also reserved keyword.

### Children

`children`

As a children, you can append any virtual dom member. 

### Component

`component`

Every bobril node could have `component` field defined.  It can contain main lifecycle methods. 
It can also contain event handlers. You should not use native HTML events directly, for example through `attrs` field. 

If you need to use some of events currently not wrapped by Bobril, you can use 
postInitDom function to link event. It will be described in chapter [Bobril Component](#menu-bobril-component).