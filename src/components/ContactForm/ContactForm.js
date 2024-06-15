import { useState } from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { TbMessage } from "react-icons/tb";

const ContactForm = () => {
  const [name, setName] = useState("Nihar");
  const [email, setEmail] = useState("niharanil08@gmail.com");
  const [text, settext] = useState("hello");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    settext(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={TbMessage} />
          <Button text="VIA CALL" icon={TbMessage} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={TbMessage} />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>
          <Button isOutline={true} text="SUBMIT" />
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="image" />
      </div>
    </section>
  );
};

export default ContactForm;
