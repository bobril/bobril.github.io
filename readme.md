# How to write article

## New article

It is possible to add new article in section _More Tutorials_. Article can be added as a standard _.md_ file in _md/more-tutorials_. Just follow naming format with order number and start with heading level 2.

It is possible to add new article in section _Theory_. Article can be added as a standard _.md_ file in _md/theory_. Just follow naming format with order number and start with heading level 2.

## Bobril page source generator

In _tools_ folder run.

```bash
npm run generate
```

This command supports following generated content:

### Content

The content of your markdown article is parsed to bobril-page project.

### Code Example

Example projects are located in _examples_. Inner scripts can be used to automatic update of code examples in your article. Just add

````markdown
<!-- # from-file: ../examples/todo/components/list.tsx -->

```tsx
```
````

Generator automatically updates your code examples in _md_ files.

### Project preview

If you have a project with code example, you can provide a preview of built dist with following syntax:

```markdown
[Preview example](../examples/todo/dist/index.html)
```

Path of _index.html_ has to be relative to parsed _.md_ file. Then run again

Generator parses relative paths to your dist, copy the dist content to bobril-page resource folder and use it in generated content of page.

## Build bobril page

Page sources are located at _bobril-page_. In this folder just run

```bash
bb b
```

After push do github repository, new version of page is deployed to bobril.com
