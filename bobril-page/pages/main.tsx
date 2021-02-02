import * as b from "bobril";
import { Navigation } from "./navigation/navigation";
import * as prismJs from "prismjs";
import "bobrilstrap";

export class Main extends b.Component<b.IRouteHandlerData> {
  render(): b.IBobrilChildren {
    return (
      <>
        <Navigation />
        {this.data.activeRouteHandler()}
      </>
    );
  }

  postRenderDom(): void {
    prismJs.highlightAll();
    this.fixAnchors();
    this.fixImages();
  }

  private fixAnchors(): void {
    const anchors = document.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
      if (!anchors[i].href) {
        anchors[i].href = "javascript:void(0);";
      }
    }
  }

  private fixImages(): void {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      if (images[i].src && images[i].src.indexOf("md-images") >= 0) {
        images[i].style.maxWidth = "100%";
      }
    }
  }
}
