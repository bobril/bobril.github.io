import * as b from "bobril";
import { MainPage } from "./mainPage";
import { initGlobalization } from "bobril-g11n";

initGlobalization({ defaultLocale: "en-US" }).then(() => {
  b.routes(b.route({ handler: data => <MainPage {...data} /> }));
});
