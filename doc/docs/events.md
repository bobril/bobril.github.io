[//]: <> (!!! ORDER OF ROWS IS REQUIRED !!!)
[//]: <> (menuLabel:'Events')
[//]: <> (menuAnchor:'menu-events')
[//]: <> (previous:'bobrilComponent.md';next: 'responsiveDesign.md')
<h2 id='menu-events'>Events</h2>

### Event basics

Bobril application never work with native browser events directly. First native browser events listened only on body/document, then are processed, normalized by Bobril, and finally they just call methods on your component `IBobrilComponent` implementation. First simple example how to listen on any click:

```
interface IButtonData {
    children?: b.IBobrilChildren;
    action: () => void;
}

interface IButtonCtx extends b.IBobrilCtx {
    data: IButtonData;
}

const Button = b.createVirtualComponent<IButtonData>({
    render(ctx: IButtonCtx, me: b.IBobrilNode) {
        me.tag = "button";
        me.children = ctx.data.children;
    },
    onClick(ctx: IButtonCtx): boolean {
        ctx.data.action();
        return true;
    }
});
```

Boolean result means for events which bubble (most of them) if they should stop bubble and also prevent default. There is way to stop bubbling without preventing default, you can do by implementing this IBobrilComponent method 

```
shouldStopBubble(ctx: IBobrilCtx, name: string, param: Object): boolean;
```

It could be used in checkbox component where you don't want to prevent default browser handling of mouse click, but also parent components should not know about it, so they cannot prevent default on it them self.

```
shouldStopBubble(_ctx: b.IBobrilCtx, name: string): boolean {
    return name === "onClick";
}
```

### How to emit your own Bobril events

If you want to emit Bobril bubbling event you can call:

```
b.bubble(nodeWhereToStartBubbling, "onYourEventName", { someParams: 42 });

bubble(node: IBobrilCacheNode | null | undefined, name: string, param: any): IBobrilCtx | undefined
```

Bubble method will return ctx of component which returned truefy result.
