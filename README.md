## react-spfx

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

- gulp clean
- gulp serve
- gulp bundle
- gulp package-solution

### Upgrade React version

1. Package updates: I use `npx npm-upgrade` for that <br>
https://github.com/maxdlx/react-spfx/commit/0625e0a1a9d576fc1a48baa211f50b837f0a4375

2. Deliver our own version of react instead of using the one from SharePoint online: <br>
https://github.com/maxdlx/react-spfx/commit/44e8da30d72cee2de69286ddd7b96ae485196902​​​​​​​

3. Use a hook! Functional components required, of course: <br>
https://github.com/maxdlx/react-spfx/commit/8618c6f71e599230b3b028ca992057d7aa3be6f7?diff=split

### Credits

For the update of the react version used in the generated project:

https://www.skylinetechnologies.com/Blog/Skyline-Blog/May_2019/using-react-hooks-sharepoint-framework-spfx
