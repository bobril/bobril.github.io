import * as b from "bobril";

export function Counter() {
    const [count, setCount] = b.useState(0);
    // const [count, setCount] = useState(() => 0); is also valid;
    return (
        <div onClick={() => {
            setCount(count => count + 1);
            return true;
        }}>Number of click: {count}</div>
	)
}