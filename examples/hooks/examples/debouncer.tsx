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
