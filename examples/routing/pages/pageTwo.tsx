import * as b from "bobril";
import { Link } from "bobril";
import { loggedIn } from "./main";

export interface IPageTwoData extends b.IRouteHandlerData {
  routeParams: { text?: string };
  readOnly: boolean;
}

export class PageTwo extends b.Component<IPageTwoData> {
  private _text: string = this.data.routeParams.text || "nothing";

  static canActivate(): b.IRouteCanResult {
    if (loggedIn) {
      return true;
    }

    alert("You are not logged in!");
    return b.createRedirectReplace("one");
  }

  render(): b.IBobrilNode {
    return (
      <>
        {this.renderContent()}
        {this.renderLinkToHome()}
        {this.renderKeyBuilderNote()}
      </>
    );
  }

  private renderContent(): b.IBobrilNode {
    return <p>Your text: {this.data.readOnly ? this._text : this.renderInput()}</p>;
  }

  private renderInput(): b.IBobrilNode {
    return <input type="text" value={this._text} onChange={newVal => (this._text = newVal)} />;
  }

  private renderLinkToHome(): b.IBobrilNode {
    return (
      <Link name="one">
        <a>Go Home</a>
      </Link>
    );
  }
  private renderKeyBuilderNote(): b.IBobrilNode {
    return (
      <p>
        {!this.data.readOnly
          ? "Route parameter KeyBuilder is not defined. Nothing will happen when url parameter is changed."
          : "Route parameter KeyBuilder is defined. Text will change when url parameter is changed."}
      </p>
    );
  }
}
