import * as b from "bobril";
import { ContextProvider } from "./examples/contextProvider";
import { Coordinates } from "./examples/coordinates";
import { DebounceExample } from "./examples/debouncer";
import { EffectExample } from "./examples/effect";
import { EffectImprovedExample } from "./examples/effectImproved";
import { ErrorComponent } from "./examples/events";
import { Memoized } from "./examples/memo";
import { TextWithFocus } from "./examples/ref";
import { Counter } from "./examples/state";

class Hooks extends b.Component<{}> {
  render(): b.IBobrilChildren {
    return (
      <>
        <ContextProvider />
        <Coordinates />
        <DebounceExample />
        <EffectExample />
        <EffectImprovedExample />
        <ErrorComponent />
        <Memoized />
        <TextWithFocus />
        <Counter />
      </>
    );
  }
}

b.init(() => <Hooks />);
