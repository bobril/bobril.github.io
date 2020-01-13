# HOOKS
Hooks are yet another way how you can write your components in Bobril. You may be asking: why another aproach? The answer is not siple but i will try to answer.

## Why hooks
Hooks are here not to replace original approaches to writing components. They are here to solve problems which raised with embracing design patterns for code reuse in classical class based approach. Mainly High order components (HOC) and render props. Because when using this types of component composition we create indirection. The indirection can be on DOM level or on the component level, which means in VDOM. This don't have to be always bad. But it's sometimes hard to debug and get know what is going on when there are for example multiple HOCs on top of our component. So it's good to have a way how to avoid it.
[//]: <> Let's pretend that there is a bug in that component. Some part of state has icorrect value when rendering. This part of state comes from some of our HOCS. First of all we have to find that HOC which is injecting this part of state. From one original problem now we have 2. And what if there is part of state which is accessed from 2 or more HOCS.

Hooks comes to rescue the situation instead of implicitly getting the props from HOCs we can declare what we really want in rendering receipt.
```typescript
function Comp(props) {
	const [x, y] = useCursorCoordinates();
	return <div>
		{props.children}
		<div>Coordinates are: {x}, {y}
		</div>;
}
```

## Types of hooks
### useState
This is most basic hook which you will use in most scenarios. It persists part of data in component memory cell and expose a function for mutating this data. It also invalidates the component when mutating function was called and something have been really changed. Its api is simple. Just call useState from bobril exports and provide it default value or factory which will create default value. It gives you IProp back. Which is a function which can be called without parameters for getting value and with parameter for setting value. The IProp can be also destructured to 2 items array which will contain value on first place and setter in the second place. The setter function also have 2 possibilities how it can be used. If you provide a value to it. It just store the value. You can also provide a function to it and get current state as parameter to his function.
```typescript
function Counter() {
	const [count, setCount] = useState(0);
	// const [count, setCount] = useState(() => 0); is also valid;
	return (
		<div onClick={() => {
			setCount(count => count + 1);
			return true;
		}}
	)
}
```

### useEffect
Here we operate with something called "side effects" or "effects" which is something that comes from functional programming. As a definition says side effect is something what can change values outside local environment or relies on variable out of local env.
So we have to be always careful when doing things like this because we can simply affect or be affected by other component. Let's mention DOM operations or data fetching as examples of side effects. Let's see how useEffect is used.

In our example we will attach real dom, so we are going to do some side effect and for that case we use useEffect hook. In concrete we will work with history api to store what is in the input box.
```typescript
import * as b from "bobril";

export function Example() {
    const [text, setText] = b.useState(new URLSearchParams(window.location.search).get("text") || "");

    b.useEffect(() => {
        history.replaceState({text}, "Example", `?text=${text}`);
    });

    return (
        <div>
            <p>Current text is {text}</p>
            <input value={text} onChange={value => {
                setText(value);
                return true;
            }} />
        </div>
    );
}
```
We let user to write into textfield and we store current value in browser history so when user comes to the page we can access the value.
This is the most basic way how to use effect hook. It is crucial to understand that function provided to the effect hook is not called synchronously in rendering process but it's called ASAP when bobril have done jobs with higher priority.
Provided function will be called after every rendering of Example component. We can actually optimized this because rerendering of Example component can be triggered from parent component and in that case we don't want to shedule effect function.
For this cases useEffect hook accepts second parameter, which is array of function dependencies. Before calling effect function bobril looks on this array and call the function only if something change.
```typescript
import * as b from "bobril";

export function Example() {
    const [text, setText] = b.useState(new URLSearchParams(window.location.search).get("text") || "");

    b.useEffect(() => {
        history.replaceState({text}, "Example", `?text=${text}`);
    }, [text]);

    return (
        <div>
            <p>Current text is {text}</p>
            <input value={text} onChange={value => {
                setText(value);
                return true;
            }} />
        </div>
    );
}
```
Another thing which is important to understand is that when we return function from effect hook, bobril use it as dispose function for component in which is the hook declared. So when this component is destroyed bobril calls the dispose function and we have a change to clean stuffs.
With useEffect we can actually achieve same behaviour like when using lifecycle methods in class components. UseEffect without dependencies is similar to postUpdateDomEverytime lifecycle. When using with empty array dependency we are de facto declaring postInitDom. As said before with defining return function we define destroy lifecycle.

### useProvideContext
Hook which is used for declaring context for children of component in which is hook declared.
```typescript
import * as b from "bobril";

const theme = b.createContext({
    color: "blue"
});

export function Example() {
    useProvideContext(theme, {
        color: "red"
    });

    return (
        <ColorConsumer />
    );
}
```

### useContext
This hook is closely related to the useProvideContext hook. It's used for getting context which is declared somewhere in parent component structure. We will continue the example from above.
```typescript
import * as b from "bobril";

export function ColorConsumer() {
    const color = b.useContext(theme);
    
    return (
        <div style={{color: color.color}}>I am colored as defined in context</div>
    )
}
```
### useLayoutEffect
This hook is used for handling side effects as well but unlike useEffect hook this one is called right after the rendering when bobril prints VDOM to actual DOM. It can be used for example for recalculation of DOM stuffs. For sure only when you need a javascript for that :). It's always better to use css when you can. 

### useRef
UseRef is there for working with mutable data structures. We can imagine the return value of this hook as a box. Value of the box is accessible on .current property.
The reference on the box does not change over time when rerendering component. The most commont usecase is to store VDOM ref in the box. But you can always use it for storing any other mutable value in the box just keep in mind that changing this mutable value will not trigger rerender.
```typescript
import * as b from "bobril";

function TextWithFocus() {
  const inputEl = b.useRef(null);
  const onClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

### useMemo
It's used for memoization function result based on its dependencies. This hooks exists primarily for optimization purposes. Let's say we have computational heavy function which is dependant on 2 parametres A and C. We don't really want to recalculate things every time
component is rerendering so we can embrace the power of useMemo.
```typescript
import * as b from "b"

export function Memoized() {
    const [a] = b.useState(0);
    const [c] = b.useState(1);
    const value = b.useMemo(() => {
        //computational heavy function
        return a + c;
    }, [a, c]);
    return <div>{value}</div>
}
```
### Events
Bobril has 2 hooks for working with events. As in real DOM even in Bobril VDOM there are 2 modes of event propagation. Capturing and bubbling. Capturing mode has Top to Bottom direction. So it starts at root component and ends in the leaf of component tree. Whereas bubbling mode do the opposite. It starts on specified node and goes up to the root of compnent tree.
With this knowledge lets dive into event hooks.

### useEvents
With useEvents hook we can declare event handler on our component level and not in TSX. It can be for example used for handling custom events in generic way. Let's say we want to define our custom ErrorEvent.
```typescript
import * as b from "bobril";

declare module "bobril" {
    export interface IBubblingAndBroadcastEvents {
        onError?(error: {error: string})
    }
}

export function ErrorComponent() {
    b.useEvents({
        onError(error) {
            prompt(error.error)
        }
    });
    return (
        <Children/>
    )
}
```
Now everytime error event is emitted from any children it is caught in ErrorComponent.

### useCaptureEvents
It is same as useEvents hook but for capturing mode. When event is handled in capturing mode. Whole process of event propagation is stopped so handler defined in useEvents will never trigger.

## Custom hooks
As said in the beginning hooks are a way how we can share logic across the components. When we wanna share a logic we have to enclose that logic into custom hook which will be our logic holder. Let's say we have a component for searching. We have got a text input here. Every input change is sent to the server which then return searched value. Searchig through our whole database can be computational heavy thing so we get a idea to debounce it. We also expect that debouncing will be used on many more places. 
```typescript
function useDebouncer(value, time) {
	const [debouncedValue, value] = b.useState(value);

	b.useEffect(() => {
		const timeout = setTimeout(() => setDebouncedValue(value), time);
		return () => clearTimeout(timeout);
	}, [value, time]);

	return debouncedValue;
}

function DebounceExample() {
	const [result, setResult] = b.useState([]);
	const [text, setText] = b.useState("");
	const debouncedValue = useDebouncer(text, 500);

	b.useEffect(() => {
		fetch(`/search?query=${debouncedValue}`)
			.then(data => data.json())
			.then(result => setResult(result));
	}, [debouncedValue]);

	return (
		<>
			{result.map((r) => <div>{r}</div>)}
		<>
	)
}
```

### Hooks composability
Because hooks are just a functions we have another huge advantage and that is easy composability of them. Let's say we want to have search box more powerful so we will store its value in localstorage.
First of all wrap api call to own custom hook and prepare it for composing.
```typescript
function useBackendSearch(value, setter) {
	const [results, setResults] = b.useState([]);
	const debouncedValue = useDebouncer(value, 500);

        b.useEffect(() => {
                fetch(`/search?query=${debouncedValue}`)
                        .then(data => data.json())
                        .then(result => setResult(result));
        }, [debouncedValue]);
	return [value, setter, results]
}
```
Now lets create a hook for storing in localStorage.
```typescript
function useLocalStorage(value, setter){
	b.useEffect(() => {
		localStorage.setItem("item", value);
	}, [value])

	return [
		value,
		setter
	]
}
```
Both of our hooks have same parametrs so we can compose then and create new hook. For composing we will use lodashs [flowRight](https://lodash.com/docs/4.17.15#flowRight).
```typescript
const useStorageAndSearch = _.flowRight(
	useBackendSearch,
	useLocalStorage,
	b.useState
)
``` 
And now use this composed hook in component
```typescript
function Example() {
	const [value, setValue, results] = useStorageAndSearch("");
	return (
		<input value={value} onChange={(val) => {
			setValue(val);
			return true;
		}}/>
	)
}
```

