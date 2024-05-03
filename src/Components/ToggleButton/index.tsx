import React, { useState } from 'react';
import styles from './styles.module.css';

interface Iprops{
    buttons: {
      label: string,
      value: string
    }[],
    setValue: React.Dispatch<React.SetStateAction<any>>
}
export default function ToggleButton({ buttons, setValue }: Iprops){
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleClick = (index: number, value: string) => {
    setActiveButtonIndex(index);
    setValue(value)
  };

  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`${styles.button} ${activeButtonIndex === index ? styles.active : ''}`}
          onClick={() => handleClick(index, button.value)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

