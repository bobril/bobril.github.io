## Localizations and Formatting

Bobril applications can have localized or formatted content with culture specifics. 

### Globalization package 

Bobril eco-system contains globalization package `bobril-g11n` to deal with localizations and formatting. It has to be added as a dependency to project.

```bash
npm i bobril-g11n --save
```

### Start globalization

<!-- # from-file: ../../examples/translations/index.tsx -->

```tsx
import * as b from "bobril";
import { MainPage } from "./mainPage";
import { initGlobalization } from "bobril-g11n";

initGlobalization({ defaultLocale: "en-US" }).then(() => {
  b.routes(b.route({ handler: data => <MainPage {...data} /> }));
});

```

This code imports and calls `initGlobalization` function. Its argument with interface `IG11NConfig` defines the default locale and optionally the function for getting the path to the localized files. `Bobril-build` is configured to generate the default localization file _en-US.js_ directly to the root of the _dist_ folder. The `initGlobalization` function returns a  `Promise object`. 

Initialization of the application by `b.routes` has to be called in a fulfillment callback of this promise.

### Locale switching

The example code changes the locale by `setLocale` and renders the page with specific translations. To get the current locale it uses the function `getLocale`.

<!-- # from-file: ../../examples/translations/change.tsx -->

```tsx
import { getLocale, setLocale } from "bobril-g11n";

export function changeLocale(): void {
  setLocale(getLocale() === "en-US" ? "cs-CZ" : "en-US");
}

```
[Preview example](../../examples/translations/dist/index.html)

### Translations

Translated content is defined by using the `t` function:

<!-- # from-file: ../../examples/translations/mainPage.tsx line:191 col:10 -->

```tsx
t("Hello World!");
```
[Preview example](../../examples/translations/dist/index.html)

The `t` function arguments are:

1. message for input text/pattern
2. optional params object defining the values for the message pattern
3. optional hint

Bobril-build takes all usages of `t("some string")` in code and replaces it by e.g. `t(125)` where _125_ is the index of `"some string"` constant in the array of localized strings. This array is placed in every localization file and corresponds to the array in the generated *en-US.js.*

To add a new localization definition just type the command:

```bash
bb t -a cs-CZ
bb b -u 1
```

The first command creates a new translation file _translations/cs-CZ.json_. The second command adds the missing translations from the default generated _en-US.js_ to _cs-CZ.json_ translation definition. The content of the created _json_ can be e.g.:

```json
["cs-CZ", ["My name is {a}!", null, 1]]
```

To add translations it can be modified to the following:

```json
["cs-CZ", ["My name is {a}!", null, 1, "Jmenuji se {a}!"]]
```

The specific parts of localization item represented as an array are:

1. Message - *Hello World*
2. Translation help (third optional parameter of t function) - null =not used in `t` function
3. Indicator of parameters inside of message - 0 = no parameter
4. The translated message - *Ahoj světe*

Parts 1-3 compose the translation key.

#### Basics

We can simply add placeholders to use variables in our text patterns:

*My name is Tomas!*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:187 col:10 -->

```tsx
t("My name is {a}!", { a: "Tomas" });
```


#### Ordinal

To set localized ordinal, use the selectordinal pattern:

*You are in 2nd floor*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:175 col:10 -->

```tsx
t("you are in {floor, selectordinal, =0{ground} one{#st} two{#nd} few{#rd} other{#th}} floor", { floor: 2 });
```

The # character is replaced by the floor property in the params object.

#### Plural

The similar plural pattern is used to define localized plurals:

*here are 2 floors*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:155 col:10 -->

```tsx
t("here {floor, plural, =0{is no floor} =1{is # floor} other{are # floors}}", { floor: 2 });
```

#### Select

To select a specific value according to some input string, we can use the select pattern:

*famous woman*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:151 col:10 -->

```tsx
t("famous {gender, select, female {woman} male {man} other {person}}", { gender: "female" });
```

#### Number

We can use a number pattern to keep numbers in culture specific formatting or to define our own format:

*1.234 in en*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:139 col:10 -->

```tsx
f("{arg, number}", { arg: 1.234 });
```

*1.2340 in en*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:119 col:10 -->

```tsx
f("{arg, number, custom, format:{0.0000}}", { arg: 1.234 });
```

#### Date and Time

The date and time patterns work the same way and can be used in the following way:

*Jan 2, 2000 12:00 AM - in en*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:103 col:10 -->

```tsx
f("{a, date, lll}", { a: new Date(2000, 0, 2) });
```

*02 01 - in en*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:95 col:10 -->

```tsx
f("{a, date, custom, format:{DD MM}}", { a: new Date(2000, 0, 2) });
```

*Sun - in en*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:91 col:10 -->

```tsx
f("{a, date, custom, format:{{myFormat}} }", { a: new Date(2000, 0, 2), myFormat: "ddd" });
```


The specific format definitions can be found in the [Moment.js documentation.](http://momentjs.com/docs/#/displaying/format/)

It can also be defined in a calendar format:

*Tomorrow at 4:27 PM - in en*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:87 col:10 -->

```tsx
f("{a, time, calendar}", { a: Date.now() + 24 * 60 * 60 * 1000 });
```

or as a relative from now:

*2 minutes ago - in en*
<!-- # from-file: ../../examples/translations/mainPage.tsx line:71 col:10 -->

```tsx
f("{a, time, relative}", { a: Date.now() - 100000 });
```

### Just Formatting

If you only want to do the formatting of a text without a translation, just replace the `t` function by the `f` function.

It will only take care of culture specific formatting.