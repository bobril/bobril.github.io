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
