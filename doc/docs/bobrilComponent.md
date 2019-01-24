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
This is a component's initilization method that is called first in the component's lifecycle. Also, it is only called once, before a new node in the virtual dom should be created. The me members (tag, attrs, children, ...) could be modified. The ctx is initialized. It is possible to configure the intial state of the component, to register listeners.

- Example: Combobox Initilization

```typescript
init(ctx: IContext): void {
    ctx.isChrome = BrowserIdentifier.isChrome();
    ctx.isOpen = false;
    ctx.isFiltering = false;
    ctx.longestItemScrollWidth = 0;
    if (ctx.data.selectedItem) {
        ctx.selectedItem = ctx.data.selectedItem;
    } else if (ctx.data.noValueItem && ctx.data.noValueItem === ctx.data.value) {
        ctx.selectedItem = ctx.data.noValueItem;
    }
}
```
##### render
A place where **a component's structure is created**. This structure is rendered in page. In case of initialization, this is called after the init method. In case of update after shouldChange returns true. You can do any update/init tasks. The ctx.data is updated before calling this method.

The so called 'Reconciliation' occurrs. A "diffing" algorithm runs in the background and it decides whether the rendering occurrs or not. Virt. DOM1 (old) is compared to virt. DOM2 (actual) and if a difference is found, a re-render takes place.

If your components have keys assigned to them, they must be identical to prevent unwanted renders, which leads to optimal performance of the application. Without keys, the order of elements in the virtual DOM is compared. You must have keys when working with a dynamic number of components.

The method passes the "me.children" parameter [translated to innerHtml + special cases ("/", "-" - emptiness = a virtual component)]. This is about the content of a component in DOM. "me" is a div that can be filled and styled. "me.children" is the content of this div. "me.tag" is the name of an element (e.g. "input"). "me.attrs" contains div attributes ("src, width, ...").

- Example: Rendering Page Content

```typescript
render(ctx: IContext, me: b.IBobrilNode): void {
    me.children = ExampleComponent.create({
        ...
    });
}
```
##### postRender
Called when a real DOM is not yet available (HTMLElement). In other words, it already exists but we do not want to combine reading and writing methods in DOM. This is useful for kind of layout in JS features. The previous state of the component is available. Called after all children are rendered, but before updating own attrs. All of this can be reacted to.

- Example: Animation Termination

```typescript
postRender(ctx: IContext) {
    if (!animationCompleted(ctx.animatedItems)) return;

    const currentStableNodeKey = stableAnimatedItemIn(ctx.animatedItems).node.key;
    if (currentStableNodeKey && !onCompletedInvokedAfterStabilizationOf(ctx, currentStableNodeKey)) {
        if (ctx.data.onCompleted) ctx.data.onCompleted();
        ctx.lastStableRouteNodeKey = currentStableNodeKey;
        b.invalidate(ctx);
    }
}
```
##### postInitDom
A real DOM is at our disposal and also, it is a good time for its potential update (HTMLElement). Called from children to parents order for new nodes. It is only called once in its entire lifecycle. I know the dimensions, I can select and perform slower and more demanding operations. At the same time, it is a suitable place for inserting content outside of bobril (markdown, XML). Any work with the real DOM is possible.

- Example: Focus on the Component and a Specific Operation with the Component (radiobutton)

```typescript
postInitDom(_ctx: IContext, _me: b.IBobrilNode, element: HTMLInputElement) {
    element.focus();
    element.select();
}
```

- Example: Perfect Place for Calculating the Component's Size if it's Static Content (otherwise after postUpdateDom)

```typescript
postInitDom(ctx: IContext, _me: b.IBobrilCacheNode, htmlElement: HTMLElement) {
    this.setLeftColumnWidth(htmlElement.clientWidth);
    b.invalidate(ctx);
}
```

- Example: Suitable place for force rerender of Component
  - invalidate = component rerender

```typescript
postInitDom(ctx: b.IBobrilCtx) {
    b.invalidate(ctx);
}
```
##### postUpdateDom
The real DOM is available and at the same time, it is the right time to update it (HTMLElement). Called from children to parents order for new nodes. It is always called since the second rendering. During the first rendering, postInitDom is called. I know the dimensions, I can select and perform slower and more difficult operations. It is also a suitable place for inserting non-bobril content (markdown, XML). Any work with the real DOM is possible.

- Example: Configuring Size Based on the Currently Available Space

```typescript
postUpdateDom(ctx: IContext, _me: b.IBobrilCacheNode, htmlElement: HTMLElement) {
    this.setLeftColumnWidth(htmlElement.clientWidth);
    b.invalidate(ctx);
}
```
##### postUpdateDomEverytime
Allows to apply actions with the real DOM in every frame even if a render was not called. Called from children to parents order for updated nodes.
It stands outside of component lifecycle.

- Example: Size Adjustment

```typescript
postUpdateDomEverytime(ctx: MainContextStore) {
    ctx.recalculateSizing(document.body.clientWidth);
}
```

```typescript
postUpdateDomEverytime(ctx: IContext, _me: b.IBobrilCacheNode, element: HTMLElement) {
    const availableContentHeight = element.offsetParent.clientHeight;
    ctx.data.store.updateAvailableParamListHeight(availableContentHeight);
}
```
##### shouldChange
Generally, this is a place where it is possible to stop a component rendering or to implement custom rendering logic. E.g. if a render is difficult and it is checked beforehand that important data hasn't changed. Return false when whole subtree should not be changed from last time, you can still update any me members except key. Default implementation always return true.

In selected cases, it is possible to circumvent it. What occurs: color change => theme change => styleDef function change => calling of invalidateShouldChange() => calling of shouldChange(), but its output is ignored and a render takes place.

- Example: Stopping of a Render

```typescript
export let create = b.createComponent<IDataRulerDash>({
  shouldChange(ctx: IRulerDashContext): boolean {
    return changeRule(ctx.data.commonCtx);
  },
  render(ctx: IRulerDashContext, me: b.IBobrilNode) {
    me.children = createScaleDashes(ctx.data.commonCtx);
  }
});
```
##### destroy
A good place for things like listener unsubscription etc. Called just before removing node from DOM.

- Example:

```typescript
destroy() {
    getLocalStorageListener().resetListener();
}
```

```typescript
destroy() {
    getPageLeavingListener().resetListener();
}
```
##### canActivate
This functions provides the ability to manage access and rights. It is called before the init method.
There are some cases when we need to manage whether a current page on a current route is available or whether we can leave the current page. 
It can stop the current transition in a target handler by returning false or redirect to the new specified transition.

- Example: Access Handling

```typescript
canActivate() {
    return getUserRightsStore().initUserRights();
}
```

- Example: **Handle the not Logged User on Accessing the Page** two by adding the canActivate function

```typescript
canActivate() {
    if (loggedIn)
        returntrue;
    alert('You are not logged in!');
    return b.createRedirectReplace('one');
}
```
##### canDeactivate
Provides the ability to stop the attempt to exit a page. For example, because of unsaved changed. It stands outside of lifecycle.
It only works when exiting through a router (not when closing a page).
There are some cases when we need to manage whether a current page on a current route is available or whether we can leave the current page. 
Can stop the current transition in the a source handler by returning false or redirect to the new specified transition.

- Examples:

```typescript
canDeactivate(_ctx: AdministrationAwsContextStore, transition: b.IRouteTransition): boolean {
    return getPageLeavingListener().canLeave(transition);
}
```

- Example: Handle the not Logged User on Accessing the Page Two by Adding the canActivate Function

```typescript
canDeactivate() {
    return !!value.trim() || confirm('The textbox is empty. Are you sure?');
}
```

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
