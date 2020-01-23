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
