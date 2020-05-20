import * as b from "bobril";
import { observable } from "bobx";

export class PageOne extends b.Component {
    @observable private _text: string = "";

    render(): b.IBobrilNode {
        return (
            <>
                <input type="text" value={this._text} onChange={newVal => (this._text = newVal)} />
                <button onClick={this.redirectToPageTwoWithManageRight}>Confirm with manage right</button>
                <button onClick={this.redirectToPageTwoWithViewRight}>Confirm with only view right</button>
            </>
        );
    }
    canDeactivate(): b.IRouteCanResult {
        return !!this._text.trim() || confirm("The textbox is empty. Are you sure?");
    }

    private redirectToPageTwoWithManageRight = (): void => {
        b.runTransition(b.createRedirectPush("two", { text: this._text }));
    };

    private redirectToPageTwoWithViewRight = (): void => {
        b.runTransition(b.createRedirectPush("twoReadOnly", { text: this._text }));
    };
}
