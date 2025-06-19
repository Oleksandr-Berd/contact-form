import * as SC from "./ContactFormStyled"

import { useFormik } from "formik";
import { validationContactSchema } from "../../../utils/validationContactSchema";

const ContactForm = ({ handleContact }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      query: "",
      message: "",
      consent: false,
    },
    validationSchema: validationContactSchema,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleContact(formik.values);
    formik.resetForm();
  };

  return (
    <SC.ContactFormStyled>
      <form onSubmit={handleSubmit}>
        <SC.TitleContactStyled>Contact Us</SC.TitleContactStyled>
        <div>
          <SC.InputConStyled>
            <SC.LabelStyled htmlFor="firstName">
              First Name <span>*</span>
            </SC.LabelStyled>
            <SC.TextInputStyled
              type="text"
              name="firstName"
              id="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div>{formik.errors.firstName}</div>
            )}
          </SC.InputConStyled>
          <SC.InputConStyled>
            <SC.LabelStyled htmlFor="lastName">
              Last Name <span>*</span>
            </SC.LabelStyled>
            <SC.TextInputStyled
              type="text"
              name="lastName"
              id="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div>{formik.errors.lastName}</div>
            )}
          </SC.InputConStyled>
        </div>
        <SC.InputConStyled>
          <SC.LabelStyled htmlFor="email">
            Email Address <span>*</span>
          </SC.LabelStyled>
          <SC.TextInputStyled
            type="text"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </SC.InputConStyled>
        <SC.InputConStyled>
          <SC.LabelStyled>
            Query Type <span>*</span>
          </SC.LabelStyled>
          <div>
            <label>
              <input
                type="radio"
                name="query"
                value="general"
                checked={formik.values.query === "general"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              General Enquiry
            </label>

            <label>
              <input
                type="radio"
                name="query"
                value="support"
                checked={formik.values.query === "support"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              Support Request
            </label>
          </div>
          {formik.touched.query && formik.errors.query && (
            <div>{formik.errors.query}</div>
          )}
        </SC.InputConStyled>
        <SC.TextAreaConStyled>
          <label htmlFor="message">
            <SC.TextAreaStyled
              type="text"
              name="message"
              id="message"
              rows={20}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          {formik.touched.message && formik.errors.message && (
            <div>{formik.errors.message}</div>
          )}
        </SC.TextAreaConStyled>
        <SC.CheckConStyled>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formik.values.consent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <SC.ConsentLabel htmlFor="consent">
            I consent to being contacted by the team <span>*</span>
          </SC.ConsentLabel>
           {formik.touched.consent && formik.errors.consent && (
            <div>{formik.errors.consent}</div>
          )}
        </SC.CheckConStyled>
        <SC.SubmitButtonStyled type="submit">Submit</SC.SubmitButtonStyled>
      </form>
    </SC.ContactFormStyled>
  );
};

export default ContactForm;
