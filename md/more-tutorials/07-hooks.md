# HOOKS
Hooks are yet another way how you can write your components in Bobril. You may be asking: why another aproach? The answer is not simple but i will try to answer.

## Why hooks
First of all let's say that old ways of writing components are not deprecated. They are still valid but as we all know they have its problems. Hooks are here to try solve theese problems. Mostly the problems which are connected with design patterns for code reuse. Mainly high order components (HOC) and render props. Because when we use this type of component composition we create indirection. The indirection can be on DOM level or on the component level, which means in VDOM. This don't have to be always bad. But it's sometimes hard to debug and get know what is going on when there are for example multiple HOCs on top of our component. So it's good to have a way how to avoid it.

Let's show usage of hook on example. The implementation of useCursorCoordinates is not important currently, just focus on the idea. At component level we want to have access to the cursor position on the screen. So we follow our idea and just call function which returns value that we wanted. And what is the best: hook takes care about rerendering component every time the cursor position change.

<!-- # from-file: ../../examples/hooks/examples/coordinates.tsx -->

```typescript
import * as b from "bobril";

function useCursorCoordinates() {
  const [x, setX] = b.useState(0);
  const [y, setY] = b.useState(0);
  b.useCaptureEvents({
    onPointerMove(event: b.IBobrilPointerEvent): void {
      setX(event.x);
      setY(event.y);
      // Or NotHandled return b.EventResult.NotHandled;
    }
  });

  return [x, y];
}

export function Coordinates(props) {
  const [x, y] = useCursorCoordinates();
  return (
    <div>
      {props.children}
      <div>
        Coordinates are: {x}, {y}
      </div>
    </div>
  );
}

```

## Types of hooks
### useState
This is most basic hook which you will use in most scenarios. It persists part of data in component memory cell and expose a function for mutating this data. It also invalidates the component when mutating function is called and something have been really changed. Its api is simple. Just call useState from bobril exports and provide it default value or factory which will create default value. It gives you IProp back. Which is a function which can be called without parameters for getting value and with parameter for setting value. The IProp can be also destructured to 2 items array which will contain value on first place and setter in the second place. The setter function also have 2 possibilities how it can be used. If you provide a value to it. It just store the value. You can also provide a function to it and get current state as parameter to his function.

<!-- # from-file: ../../examples/hooks/examples/store.tsx -->

```typescript
import * as b from "bobril";
import { observable } from "bobx";

class Counter {
  @observable
  count: number = 0;
}

export function StoreCounter() {
  const store = b.useStore(() => new Counter());
  return (
    <div
      onClick={() => {
        store.count = store.count + 1;
        return true;
      }}
    >
      Number of click: {store.count}
    </div>
  );
}

```

### useStore
Hook made for working with bobx store in function component. It accepts factory and holds the reference to the object created by factory in every render.

<!-- # from-file: ../../examples/hooks/examples/store.tsx -->
```typescript
```

### useEffect
Here we operate with something called "side effects" or "effects" which is something that comes from functional programming. As a definition says side effect is something what can change values outside local environment or relies on variable out of local env.
So we have to be always careful when doing things like this because we can simply affect or be affected by others. Let's mention DOM operations or data fetching as examples of side effects. Let's see how useEffect is used.

In our example we will touch real DOM, so we are going to do some side effect and for that case we use useEffect hook. In concrete we will work with history api to store what is in the input box.

<!-- # from-file: ../../examples/hooks/examples/effect.tsx -->

```typescript
import * as b from "bobril";

export function EffectExample() {
  const [text, setText] = b.useState(new URLSearchParams(window.location.search).get("text") || "");

  b.useEffect(() => {
    history.replaceState({ text }, "Example", `?text=${text}`);
  });

  return (
    <div>
      <p>Current text is {text}</p>
      <input
        value={text}
        onChange={value => {
          setText(value);
          return true;
        }}
      />
    </div>
  );
}

```
We let user to write into text field and we store current value in browser history so when user comes to the page we can access the value.
This is the most basic way how to use effect hook. It is crucial to understand that function provided to the effect hook is not called synchronously in rendering process but it's called ASAP when bobril have done jobs with higher priority.
In this example provided function will be called after every render of Example component. We can actually optimized this because rerendering of Example component can be triggered from parent component and in that case we don't want to shedule effect function.
For this cases useEffect hook accepts second parameter, which is array of function dependencies. Before calling effect function bobril looks on this array and call the function only if something have changed.

<!-- # from-file: ../../examples/hooks/examples/effectImproved.tsx -->

```typescript
import * as b from "bobril";

export function EffectImprovedExample() {
  const [text, setText] = b.useState(new URLSearchParams(window.location.search).get("text") || "");

  b.useEffect(() => {
    history.replaceState({ text }, "Example", `?text=${text}`);
  }, [text]);

  return (
    <div>
      <p>Current text is {text}</p>
      <input
        value={text}
        onChange={value => {
          setText(value);
          return true;
        }}
      />
    </div>
  );
}

```
Another thing which is important to understand is that when we return function from effect hook, bobril use it as dispose function for component in which is the hook declared. So when this component is destroyed, bobril calls the dispose function and we have chance to clean stuffs.
With useEffect we can actually achieve same behaviour like when using lifecycle methods in class components. UseEffect without dependencies is similar to postUpdateDomEverytime lifecycle. When using with empty array dependency we are de facto declaring postInitDom. The difference between hook and lifecycle is that effect hook is not synchronous. As said before with defining return function we define destroy lifecycle.

### useProvideContext
Hook which is used for declaring context for children of component in which is hook declared.

<!-- # from-file: ../../examples/hooks/examples/contextProvider.tsx -->

```typescript
import * as b from "bobril";
import { ColorConsumer } from "./contextConsumer";

export const theme = b.createContext({
  color: "blue"
});

export function ContextProvider() {
  b.useProvideContext(theme, {
    color: "red"
  });

  return <ColorConsumer />;
}

```

### useContext
This hook is closely related to the useProvideContext hook. It's used for getting context which is declared somewhere in parent component structure. We will continue the example from above.

<!-- # from-file: ../../examples/hooks/examples/contextConsumer.tsx -->

```typescript
import * as b from "bobril";
import { theme } from "./contextProvider";

export function ColorConsumer() {
  const color = b.useContext(theme);

  return <div style={{ color: color.color }}>I am colored as defined in context</div>;
}

```
### useLayoutEffect
This hook is used for handling side effects as well but unlike useEffect hook this one is called right after the render when bobril prints VDOM to actual DOM. It can be used for example for recalculation of DOM stuffs. For sure only when you need a javascript for that :). It's always better to use css when you can. This hook is similar topostInitDom and postUpdateDomEverytime.
Hook is called even if component was not invalidated because there could be change in size or position due to children change.  

### useRef
UseRef is here for working with mutable data structures. We can imagine the return value of this hook as a box. Value of the box is accessible on .current property.
The reference on the box does not change over time when rerendering component. The most common usecase is to store reference to VDOM node in the box. But you can always use it for storing any other mutable value in the box just keep in mind that changing this mutable value will not trigger rerender.

<!-- # from-file: ../../examples/hooks/examples/ref.tsx -->

```typescript
import * as b from "bobril";

export function TextWithFocus() {
  const inputEl = b.useRef(null);
  const onClick = () => {
    const inputElement = b.getDomNode(inputEl.current) as HTMLInputElement;
    inputElement.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onClick}>Focus the input</button>
    </>
  );
}

```

### useMemo
It's used for memoization function result based on its dependencies. This hooks exists primarily for optimization purposes. Let's say we have computational heavy function which is dependant on 2 parametres A and C. We don't really want to recalculate things every time
component is rerendered so we can embrace the power of useMemo.

<!-- # from-file: ../../examples/hooks/examples/memo.tsx -->

```typescript
import * as b from "bobril";

export function Memoized() {
  const [a] = b.useState(0);
  const [c] = b.useState(1);
  const value = b.useMemo(() => {
    //computational heavy function
    return a + c;
  }, [a, c]);
  return <div>{value}</div>;
}

```
### Events
Bobril has 2 hooks for working with events. As in real DOM even in Bobril VDOM there are 2 modes of event propagation. Capturing and bubbling. Capturing mode has top to bottom direction. So it starts at root component and ends in the leaf of component tree. Whereas bubbling mode do the opposite. It starts on specified node and goes up to the root of compnent tree.
With this knowledge lets dive into event hooks.

### useEvents
With useEvents hook we can declare event handler on our component level and not in TSX. It can be for example used for handling custom events in generic way. Let's say we want to define our custom ErrorEvent.

<!-- # from-file: ../../examples/hooks/examples/events.tsx -->

```typescript
import * as b from "bobril";

declare module "bobril" {
  export interface IBubblingAndBroadcastEvents {
    onError?(error: { error: string });
  }
}

export function ErrorComponent() {
  b.useEvents({
    onError(error) {
      prompt(error.error);
      return true;
    }
  });
  return <Children />;
}

function Children() {
  const el = b.useRef(null);
  b.useLayoutEffect(() => {
    b.bubble(el.current, "onError", { error: "error" });
  });

  return <div ref={el}>aaa</div>;
}

```
Now everytime error event is emitted from any children it is caught in ErrorComponent.

### useCaptureEvents
It is same as useEvents hook but for capturing mode. When event is handled in capturing mode. Whole process of event propagation is stopped so handler defined in useEvents will never trigger.

## Custom hooks
As said in the beginning hooks are a way how we can share logic across the components. When we want to share a logic, we have to enclose that logic into custom hook which will be our logic holder. Let's say we have a component for searching in which is text input. Every input change is sent to the server which then return searched value. Searchig through our whole database can be computational heavy thing so we get a idea to debounce it. We also expect that debouncing will be used on many more places.

<!-- # from-file: ../../examples/hooks/examples/debouncer.tsx -->
 
```typescript
import * as b from "bobril";

function useDebouncer(value, time) {
  const [debouncedValue, setDebounceValue] = b.useState(value);

  b.useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), time);
    return () => clearTimeout(timeout);
  }, [value, time]);

  return debouncedValue;
}

export function DebounceExample() {
  const [result, setResult] = b.useState([]);
  const [text, setText] = b.useState("");
  // const iprop = b.useState("");  OR with IPROP
  const debouncedValue = useDebouncer(text, 500);

  b.useEffect(() => {
    fetch(`/search?query=${debouncedValue}`)
      .then(data => /**data.json()*/ [])
      .then(result => setResult(result));
  }, [debouncedValue]);

  return (
    <>
      <input
        value={text}
        onChange={value => {
          setText(value);
          return true;
        }}
      />
      {/*<input value={iprop}/>*/}
      {result.map(r => (
        <div>{r}</div>
      ))}
    </>
  );
}

```
