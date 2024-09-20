import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import nextId from "react-id-generator";

const initialContact = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(5, "Too short!")
    .max(13, "Too long!")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const nameID = useId();
  const numberID = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nextId(),
      ...values,
    });
    actions.reset();
  };

  return (
    <section title="Create contact form">
      <h1>Phonebook</h1>
      <Formik
        initialValues={initialContact}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor={nameID}>Name</label>
          <Field className={css.input} type="text" name="name" placeholder="..." id={nameID} />
          <ErrorMessage className={css.error} name="name" component="span" />

          <label htmlFor={numberID}>Phone number</label>
          <Field className={css.input} type="text" name="number" placeholder="..." id={numberID} />
          <ErrorMessage className={css.error} name="number" component="span" />
          <button className={css["contact-btn"]} type="submit">Add contact</button>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactForm;
