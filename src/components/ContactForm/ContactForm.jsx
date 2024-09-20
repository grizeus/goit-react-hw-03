import css from "./ContactForm.module.css";
// import { Formik } from "formik";
// import * as Yup from "yup";
import nextId from "react-id-generator";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onAdd({
      id: nextId(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="number" placeholder="Phone number" />
      <button type="submit">Add</button>
    </form>
  );
};

export default ContactForm;
