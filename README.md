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

### Credits

For the update of the react version used in the generated project:

https://www.skylinetechnologies.com/Blog/Skyline-Blog/May_2019/using-react-hooks-sharepoint-framework-spfx
