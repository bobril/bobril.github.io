import * as b from "bobril";

export function WelcomePage(isLoggedIn: boolean): b.IBobrilNode {
  return (
    <>
      <h1>Welcome to bobril page!</h1>
      {!isLoggedIn && <button>LogIn</button>}
    </>
  );
}
