import * as b from "bobril";
import { t, f } from "bobril-g11n";
import { changeLocale } from "./change";

export function MainPage(): b.IBobrilNode {
  return (
    <>
      <h1>{t("Localization")}</h1>
      <button onClick={changeLocale}>{t("Change")}</button>
      <h2>{t("Basics")}</h2>
      <p>{basic()}</p>
      <p>{basicWithParameters()}</p>
      <h2>{t("Ordinal")}</h2>
      <p>{ordinalZero()}</p>
      <p>{ordinalFirst()}</p>
      <p>{ordinalSecond()}</p>
      <p>{ordinalThird()}</p>
      <p>{ordinalFourth()}</p>

      <h2>{t("Plural")}</h2>
      <p>{pluralZero()}</p>
      <p>{pluralFirst()}</p>
      <p>{pluralSecond()}</p>

      <h2>{t("Select")}</h2>
      <p>{selectFemale()}</p>
      <p>{selectMale()}</p>
      <p>{selectPerson()}</p>

      <h2>{t("Formating")}</h2>
      <p>{formatSimpleNumber()}</p>
      <p>{formatTimeRelative()}</p>

      <h2>{t("Number")}</h2>
      <p>{formatNumberFirst()}</p>
      <p>{formatNumberSecond()}</p>
      <p>{formatNumberThird()}</p>
      <p>{formatNumberCustomFirst()}</p>
      <p>{formatNumberCustomSecond()}</p>
      <p>{formatNumberPercent()}</p>

      <h2>{t("Date & Time")}</h2>
      <p>{formatDatedddd()}</p>
      <p>{formatDatelll()}</p>
      <p>{formatDateLLLL()}</p>
      <p>{formatDateCustomFirst()}</p>
      <p>{formatDateCustomSecond()}</p>

      <h2>{t("Calendar")}</h2>
      <p>{formatCalendarFirst()}</p>
      <p>{formatCalendarSecond()}</p>
      <p>{formatCalendarThird()}</p>

      <h2>{t("Relative")}</h2>
      <p>{formatTimeRelativeFirst()}</p>
      <p>{formatTimeRelativeSecond()}</p>
      <p>{formatTimeRelativeThird()}</p>
      <p>{formatTimeRelativeFourth()}</p>
    </>
  );
}
function formatTimeRelativeFourth(): b.IBobrilChildren {
  return f("{a, time, relative, noago}", { a: Date.now() + 100000 });
}

function formatTimeRelativeThird(): b.IBobrilChildren {
  return f("{a, time, relative}", { a: Date.now() + 10000000 });
}

function formatTimeRelativeSecond(): b.IBobrilChildren {
  return f("{a, time, relative}", { a: Date.now() - 100000 });
}

function formatTimeRelativeFirst(): b.IBobrilChildren {
  return f("{a, time, relative}", { a: Date.now() - 1000 });
}

function formatCalendarThird(): b.IBobrilChildren {
  return f("{a, time, calendar}", { a: Date.now() + 7 * 24 * 60 * 60 * 1000 });
}

function formatCalendarSecond(): b.IBobrilChildren {
  return f("{a, time, calendar}", { a: Date.now() + 2 * 24 * 60 * 60 * 1000 });
}

function formatCalendarFirst(): b.IBobrilChildren {
  return f("{a, time, calendar}", { a: Date.now() + 24 * 60 * 60 * 1000 });
}

function formatDateCustomSecond(): b.IBobrilChildren {
  return f("{a, date, custom, format:{{myFormat}} }", { a: new Date(2000, 0, 2), myFormat: "ddd" });
}

function formatDateCustomFirst(): b.IBobrilChildren {
  return f("{a, date, custom, format:{DD MM}}", { a: new Date(2000, 0, 2) });
}

function formatDateLLLL(): b.IBobrilChildren {
  return f("{a, date, LLLL}", { a: new Date(2000, 0, 2) });
}

function formatDatelll(): b.IBobrilChildren {
  return f("{a, date, lll}", { a: new Date(2000, 0, 2) });
}

function formatDatedddd(): b.IBobrilChildren {
  return f("{a, date, dddd}", { a: new Date(2000, 0, 2) });
}

function formatNumberPercent(): b.IBobrilChildren {
  return f("{arg, number, percent}", { arg: 0.23 });
}

function formatNumberCustomSecond(): b.IBobrilChildren {
  return f("{arg, number, custom, format:{{myFormat}}}", { arg: 1.234, myFormat: "0.00000" });
}

function formatNumberCustomFirst(): b.IBobrilChildren {
  return f("{arg, number, custom, format:{0.0000}}", { arg: 1.234 });
}

function formatNumberThird(): b.IBobrilChildren {
  return f("{arg, number}", { arg: 1.234 });
}

function formatNumberSecond(): b.IBobrilChildren {
  return f("{arg, number}", { arg: 1000 });
}

function formatNumberFirst(): b.IBobrilChildren {
  return f("{arg, number}", { arg: 0 });
}

function formatTimeRelative(): b.IBobrilChildren {
  return f("{a, time, relative}", { a: Date.now() + 100000 });
}

function formatSimpleNumber(): b.IBobrilChildren {
  return f("{arg, number}", { arg: 1.234 });
}

function selectPerson(): b.IBobrilChildren {
  return t("famous {gender, select, female {woman} male {man} other {person}}", { gender: "person" });
}

function selectMale(): b.IBobrilChildren {
  return t("famous {gender, select, female {woman} male {man} other {person}}", { gender: "male" });
}

function selectFemale(): b.IBobrilChildren {
  return t("famous {gender, select, female {woman} male {man} other {person}}", { gender: "female" });
}

function pluralSecond(): b.IBobrilChildren {
  return t("here {floor, plural, =0{is no floor} =1{is # floor} other{are # floors}}", { floor: 2 });
}

function pluralFirst(): b.IBobrilChildren {
  return t("here {floor, plural, =0{is no floor} =1{is # floor} other{are # floors}}", { floor: 1 });
}

function pluralZero(): b.IBobrilChildren {
  return t("here {floor, plural, =0{is no floor} =1{is # floor} other{are # floors}}", { floor: 0 });
}

function ordinalFourth(): b.IBobrilChildren {
  return t("you are in {floor, selectordinal, =0{ground} one{#st} two{#nd} few{#rd} other{#th}} floor", { floor: 4 });
}

function ordinalThird(): b.IBobrilChildren {
  return t("you are in {floor, selectordinal, =0{ground} one{#st} two{#nd} few{#rd} other{#th}} floor", { floor: 3 });
}

function ordinalSecond(): b.IBobrilChildren {
  return t("you are in {floor, selectordinal, =0{ground} one{#st} two{#nd} few{#rd} other{#th}} floor", { floor: 2 });
}

function ordinalFirst(): b.IBobrilChildren {
  return t("you are in {floor, selectordinal, =0{ground} one{#st} two{#nd} few{#rd} other{#th}} floor", { floor: 1 });
}

function ordinalZero(): b.IBobrilChildren {
  return t("you are in {floor, selectordinal, =0{ground} one{#st} two{#nd} few{#rd} other{#th}} floor", { floor: 0 });
}

function basicWithParameters(): b.IBobrilChildren {
  return t("My name is {a}!", { a: "Tomas" });
}

function basic(): b.IBobrilChildren {
  return t("Hello World!");
}
