import { useFormik } from "formik";

const ContactForm = () => {
  const formik = useFormik({});

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h3>Contact Us</h3>
        <div>
          <div>
            <label htmlFor="firstNam">
              First Name <span>*</span>
            </label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name <span>*</span>
            </label>
            <input type="text" name="lastName" id="lastName" />
          </div>
        </div>
        <div>
          <label htmlFor="email">
            Email Address <span>*</span>
          </label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <h3>
            Query Type <span>*</span>
          </h3>
          <label htmlFor="general">
            <input type="radio" name="general" value="general" />
            General Enquiry
          </label>
          <label htmlFor="support">
            <input type="radio" name="support" value="support" />
            Support Request
          </label>
        </div>
        <div>
          <label htmlFor="message">
            <textarea type="text" name="message" id="message" rows={20}/>
          </label>
        </div>
        <div>
            <input type="checkbox" id="consent" name="consent"/>
            <label htmlFor="consent">I consent to being contacted by the team <span>*</span></label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
