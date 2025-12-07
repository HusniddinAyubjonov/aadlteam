import { useState } from "react";
import styles from "./Faq.module.css";
import { faq } from "./constants";

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>FAQ</h2>

      {faq.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.question} onClick={() => toggle(index)}>
            <span>{item.question}</span>

            <span className={styles.icon}>{open === index ? "−" : "+"}</span>
          </div>

          {open === index && <div className={styles.answer}>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};
