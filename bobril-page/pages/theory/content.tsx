import * as b from "bobril";

export class Content extends b.Component {
  static id: string = "theory";
  render(): b.IBobrilChildren {
    return content;
  }
}

export const content: b.IBobrilNode = <><h1 id="theory">{`Theory`}</h1>
<p>{`Deep learning fundamentals and theory.`}</p>
</>;