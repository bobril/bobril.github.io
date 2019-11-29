import { getLocale, setLocale } from "bobril-g11n";

export function changeLocale(): void {
  setLocale(getLocale() === "en-US" ? "cs-CZ" : "en-US");
}
