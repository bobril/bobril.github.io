---
metadata:
  menuLabel: "Bobril Component"
  menuAnchor: "menu-bobril-component"
  previous: "initialization.md"
  next: "events.md"
---

<h3 id='menu-bobril-component'>Bobril Component</h3>

#### Lifecycle
##### init
Called before new node in virtual dom should be created, me members (tag, attrs, children, ...) could be modified, ctx is initialized.
##### render
In case of init this is called after init method. In case of update after shouldChange returns true, you can do any update/init tasks, ctx.data is updated before calling this method.
##### postRender
This is useful for kind of layout in JS features. Called after all children are rendered, but before updating own attrs.
##### postInitDom
Called from children to parents order for new nodes.
##### postUpdateDom
Called from children to parents order for updated nodes.
##### postUpdateDomEverytime
Called from children to parents order for updated nodes but in every frame even when render was not run.
##### shouldChange
Return false when whole subtree should not be changed from last time, you can still update any me members except key, default implementation always return true.
##### destroy
Called just before removing node from DOM.
##### canActivate
##### canDeactivate

#### Component Creation
##### Context
##### IData Interface
##### createComponent
`createComponent` is a base function for construct components. It accepts the `IBobrilComponent` object, which contains all lifecycle methods (`init`, `render`, `postInitDom`, etc.) and returns a function, which accepts typed data that are passed in `IBobrilCtx` to the defined lifecycle methods. Invocation of the created function will return [IBobrilNode](#createcomponent).
Example below illustrates how to create and use a simple ul/li list component.  

Define the `ulList.ts` file:
```typescript
import * as b from 'bobril';
import * as LiItem from './liItem'
export interface IData {
    items: b.IBobrilChildren[];
    header: string;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode, oldMe?: b.IBobrilCacheNode) {
        me.tag = 'ul';
        me.children = [
            ctx.data.header,
            ctx.data.items.map(item => LiItem.create({
                content: item
            }))
        ];
    }
})
```
Create file `liItem.ts` with liItem component:
```typescript
import * as b from 'bobril';
export interface IData {
    content: b.IBobrilChildren;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}
export const create = b.createComponent({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.tag = 'li';
        me.children = ctx.data.content;
    }
})
```
Then you can reuse your component by simply calling it with IData interface:
```typescript
import * as UlList from './ulList.ts'

UlList.create({
    header: 'Animals',
    items: ['dog', 'cat', 'cow', 'bird']
});
```
These lines of code simply results in the following. You can [style](#style) the result.  
  
Animals
* dog
* cat
* cow
* bird


##### createDerivedComponent
##### createOverridingComponent
##### createVirtualComponent
