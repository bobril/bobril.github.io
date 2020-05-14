import * as b from "bobril";
import { Main } from "./pages/main";
import { pageInfo as getStartedPageInfo } from "./pages/getStarted/getStarted";
import { pageInfo as moreTutorialsPageInfo } from "./pages/moreTutorials/moreTutorials";
import { pageInfo as ecoSystemPageInfo } from "./pages/ecoSystem/ecoSystem";
import { pageInfo as theoryPageInfo } from "./pages/theory/theory";

export const main: b.IRoute = { handler: (data) => <Main {...data} /> };

export const gettingStarted: b.IRoute = getStartedPageInfo.route;

export const moreTutorials: b.IRoute = moreTutorialsPageInfo.route;

export const ecoSystem: b.IRoute = ecoSystemPageInfo.route;

export const theory: b.IRoute = theoryPageInfo.route;

export const defaultRoute = gettingStarted;
