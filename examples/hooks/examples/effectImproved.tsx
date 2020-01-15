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
