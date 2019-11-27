import { getLocale, setLocale } from "bobril-g11n";

export function change(): void {
  setLocale(getLocale() === "en-US" ? "cs-CZ" : "en-US");
}
