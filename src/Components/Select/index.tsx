import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import styles from './styles.module.css'
interface Option {
  value: string;
  label: string;
}
interface Props {
  options: Option[];
  value: string;
  sx?: CSSProperties;
  placeholder?: string;
  fontSize?: string;
  fontColor?: string;
  onChange: (value: string) => void;
}


const CustomSelect: React.FC<Props> = ({ options, value, onChange, sx, placeholder, fontSize, fontColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOptionRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
  };
  const handleDocumentClick = (event: MouseEvent) => {
    if (!selectedOptionRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={styles.customSelect} style = {sx}>
      <div ref={selectedOptionRef} 
            className={`${styles.selectSelected} ${isOpen ? styles.selectArrowActive: ''}`} 
            onClick={handleClick}
            style = {{fontSize: fontSize ?? "", color: fontColor ?? ""}}
        >
        
        {placeholder ?? selectedOption?.label}
      </div>
      {isOpen && (
        <div className={styles.selectItems}>
          {options.map((option) => (
            <div key={option.value} className={`${styles.selectItem} ${styles.selectShow}`} onClick={() => handleOptionClick(option)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default CustomSelect;


