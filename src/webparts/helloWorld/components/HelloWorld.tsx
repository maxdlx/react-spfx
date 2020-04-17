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
