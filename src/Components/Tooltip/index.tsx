import React, { ReactNode, useState } from "react";
import styles from './styles.module.css'
interface Iprops{
    children: ReactNode;
    delay?: number;
    content: string;
    direction?: 'bottom' | 'top' | 'left' | 'right'
}
const Tooltip = (props: Iprops) => {
  let timeout: any;
  let timeoutForClicked: any;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    setActive(false);
  };


  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div className={`${styles.tooltipTip} ${styles[props.direction || "top"]}`}>
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
