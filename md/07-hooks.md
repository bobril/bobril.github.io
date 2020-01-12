# HOOKS
Hooks are yet another way how you can write your components in Bobril. You may be asking: why another aproach? The answer is not siple but i will try to answer.

## Why hooks
Hooks are here not to replace original aproaches to writing components. They are here to solve problems which rised with embracing design patterns for code reuse in classical class based aproach. Mainly High order components (HOC) and render props. Because when using this types of component composition we create indireciton. The indirection can be on DOM level or on the component level, which means in VDOM. This don't have to be alwasy bad. But it's sometimes hard to debug and get know that is going on when there are multiple hocs on top of our component. Let's pretend that there is a bug in that component. Some part of state has icorrect value when rendering. This part of state comes from some of our HOCS. First of all we have to find that HOC which is injecting this part of state. From one original problem now we have 2. And what if there is part of state which is accessed from 2 or more HOCS. 

Hooks comes to rescue the situation instead of implicitely getting the props from HOCS we can declare what we really want in rendering receipt.
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
This is most basic hook which you will use in most scenarios. It persists part of data in component memory cell and expose a function for mutating this data. It also invalidates the compoent when mutating function was called and something have been really changed. Its api is simple. Just call useState from bobril exports and provide it default value or factory which will create default value. It gives youIProp back. Which is a function which can be called without parametrs for getting value and with parametr for setting value. The IProp can be also destructured to 2 items array which will contain value on first place and setter in the second place. The setter function also have 2 posibilities how it can be used. If you provide a value to it. It just store the value. You can also provide a function to it and get current state as parametr to his function.
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
It is used for handling side effects. 
Everyone fascinated by simplicity of functional component will for sure love this approach to write components this way.
