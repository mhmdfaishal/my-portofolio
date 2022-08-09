import type { NextPage } from "next";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import Gmail from "../assets/gmail.webp";
import { Theme } from "../typings";
import Github from "../assets/github.webp";
import Linkedin from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

interface IFormErrorValues {
  name: boolean;
  email: boolean;
  message: boolean;
}

interface IContactProps {
  theme: Theme;
}

export const Contact: NextPage<IContactProps> = ({ theme }) => {
  const [values, setValues] = useState<IFormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<IFormValues>({ name: "", email: "", message: "" });
  const [errorsFlag, setErrorsFlag] = useState<IFormErrorValues>({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const objFlag = { name: false, email: false, message: false };
    const obj = { name: "", email: "", message: "" };
    const lettersregex = /^[a-zA-Z ]*$/;
    const mailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (values?.name?.trim().length === 0) {
      objFlag.name = true;
      obj.name = "*Name cannot be empty !";
    } else if (values?.name.replace(/\s+/g, "").length <= 2) {
      objFlag.name = true;
      obj.name = "*Name cannot be less than 3 characters !";
    } else if (values?.name.replace(/\s+/g, "").length > 20) {
      objFlag.name = true;
      obj.name = "*Name cannot be greater than 20 characters !";
    } else if (!values?.name.match(lettersregex)) {
      objFlag.name = true;
      obj.name = "*Name can only contain alphabets";
    } else {
      objFlag.name = false;
      obj.name = "";
    }

    if (values?.email?.trim().length === 0) {
      objFlag.email = true;
      obj.email = "*Email cannot be empty !";
    } else if (values?.email.length > 40) {
      objFlag.email = true;
      obj.email = "*Email should be less than 40 characters !";
    } else if (!values?.email.match(mailregex)) {
      objFlag.email = true;
      obj.email = "*Please enter valid Email !";
    } else {
      objFlag.email = false;
      obj.email = "";
    }

    if (values?.message?.trim().length === 0) {
      objFlag.message = true;
      obj.message = "*Message cannot be empty !";
    } else if (values?.message.length > 200) {
      objFlag.message = true;
      obj.message = "*Please write a short message(Max 200 Characters) !";
    } else {
      objFlag.message = false;
      obj.message = "";
    }

    setErrorsFlag(errorsFlag => ({ ...errorsFlag, ...objFlag }));
    setErrors({ ...errors, ...obj });

    if (!objFlag.name && !objFlag.email && !objFlag.message) {
      setValues({ name: "", email: "", message: "" });
      setLoading(true);

      try {
        const response = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current!,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        );

        if (response.status === 200) {
          setLoading(false);
          toast.success("Form Submitted !");
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        toast.error("Form Submission Failed. Please send me an email !");
      }
    }
  };

  return (
    <>
      <h1 className="contact_heading">Reach Me</h1>
      <div className="contact_option">
        <div className="contact_email" data-aos="zoom-in-down" onClick={() => window.open("mailto:haq.faishaldien@gmail.com", "_blank")}>
          <img src={Gmail.src} alt="" /> haq.faishaldien@gmail.com
        </div>

        {/* <div className="contact_phone" data-aos="zoom-in-down">
          <div className="contact_phone_icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
          </div>
          <div className="contact_phone_number">
              +62 821-2717-0894
          </div>
        </div> */}
      </div>
      <div className="contact_socialMedia">
          <p data-aos="zoom-in-up">Let&#8216;s Connect!</p>
          <div className="contact_socialMedia_links">
            <img
              src={Github.src}
              alt=""
              onClick={() => window.open("https://github.com/mhmdfaishal", "_blank")}
              data-aos="zoom-in-up"
            />
            <img
              src={Linkedin.src}
              alt=""
              onClick={() => window.open("https://www.linkedin.com/in/mhmdfaishal/", "_blank")}
              data-aos="zoom-in-up"
            />
            <img
              src={Instagram.src}
              alt=""
              onClick={() => window.open("https://www.instagram.com/mhmdfaishaal/", "_blank")}
              data-aos="zoom-in-up"
            />
          </div>
      </div>
      {/* {!loading ? (
        <form className="contact_form" autoComplete="off" ref={form}>
          <div className="contact_form_formcontrol">
            <label htmlFor="name" className="contact_form_formcontrol_label">
              Name :
            </label>
            <input
              className="contact_form_formcontrol_input"
              id="name"
              name="name"
              type="text"
              value={values?.name ?? ""}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">{errorsFlag?.name && errors?.name}</p>
          </div>
          <div className="contact_form_formcontrol">
            <label htmlFor="email" className="contact_form_formcontrol_label">
              Email :
            </label>
            <input
              className="contact_form_formcontrol_input"
              id="email"
              name="email"
              type="email"
              value={values?.email ?? ""}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">{errorsFlag?.email && errors?.email}</p>
          </div>
          <div className="contact_form_formcontrol">
            <label htmlFor="message" className="contact_form_formcontrol_label">
              Message :
            </label>
            <textarea
              className="contact_form_formcontrol_input"
              id="message"
              name="message"
              value={values?.message ?? ""}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">
              {errorsFlag?.message && errors?.message}
            </p>
          </div>
          <div className="contact_form_formcontrol">
            <button className="contact_form_formcontrol_submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="contact_submission">
          <div className="contact_submission_head">Submitting Form Details</div>
          <ThreeDots
            ariaLabel="loading-indicator"
            color={theme === "light" ? "#343e47" : "#ffffff"}
          />
          <div className="contact_submission_text">Please wait...</div>
        </div>
      )} */}
    </>
  );
};
