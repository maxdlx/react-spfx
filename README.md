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

- lib/\* - intermediate-stage commonjs build artifacts
- dist/\* - the bundled script, along with other resources
- deploy/\* - all resources which should be uploaded to a CDN.

### Build options

- gulp clean
- gulp serve
- gulp bundle
- gulp package-solution

### Upgrade React version

1. Package updates: <br>
   `npx npm-upgrade` (DO NOT upgrade the gulp version!)
1. `npm i`
2. Install peer dependency to use a newer typescript compiler <br>
   `npm i @microsoft/rush-stack-compiler-3.7`
3. Deliver our own version of react instead of using the one from SharePoint online: <br>

```js
// gulpfile.js
// ...
build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {
    generatedConfiguration.externals = generatedConfiguration.externals.filter(
      (name) => !["react", "react-dom"].includes(name)
    );
    return generatedConfiguration;
  },
});
```

4. Tell the compiler which typescript version to use: <br>

```json
// tsconfig.json
{
  "extends": "./node_modules/@microsoft/rush-stack-compiler-3.7/includes/tsconfig-web.json",
  "compilerOptions": {
    // ...
  }
}
```
5. `gulp serve` ready to go. Use a hook!

```jsx
// HelloWorld.tsx
import * as React from "react";
import styles from "./HelloWorld.module.scss";
import { IHelloWorldProps } from "./IHelloWorldProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { useState, useEffect } from "react";

export default function HelloWorld(
  props: IHelloWorldProps
): React.ReactElement<IHelloWorldProps> {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(tick, 1e3);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.helloWorld}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <span className={styles.title}>Welcome to SharePoint!</span>
            <p className={styles.subTitle}>{count}x</p>
            <p className={styles.description}>{escape(props.description)}</p>
            <a href="https://aka.ms/spfx" className={styles.button}>
              <span className={styles.label}>Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
````

### Credits

For the update of the react version used in the generated project:

https://www.skylinetechnologies.com/Blog/Skyline-Blog/May_2019/using-react-hooks-sharepoint-framework-spfx
