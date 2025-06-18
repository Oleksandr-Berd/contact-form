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
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Contact Us</h3>
        <div>
          <div>
            <label htmlFor="firstName">
              First Name <span>*</span>
            </label>
            <input
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
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name <span>*</span>
            </label>
            <input
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
          </div>
        </div>
        <div>
          <label htmlFor="email">
            Email Address <span>*</span>
          </label>
          <input
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
        </div>
        <div>
          <h3>
            Query Type <span>*</span>
          </h3>
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
        </div>
        <div>
          <label htmlFor="message">
            <textarea
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
        </div>
        <div>
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formik.values.consent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="consent">
            I consent to being contacted by the team <span>*</span>
          </label>
           {formik.touched.consent && formik.errors.consent && (
            <div>{formik.errors.consent}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
