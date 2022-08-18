import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";

import * as Yup from "yup";
import ContactLinkData from "./contactLinksData";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ContactSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const ContactForm = () => {
  return (
    <>
      <section className="w-full h-auto relative overflow-hidden">
        <div className="wrapper max-w-7xl mx-auto px-4 py-24">
          <div className="flex flex-col text-center max-w-lg md:mx-auto">
            <h1>Get in touch!</h1>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="flex flex-col lg:flex-row  rounded-3xl">
            <div className="contact-form bg-neutral-100 rounded-3xl lg:w-[900px] py-16 px-6 ">
              <Formik
                validationSchema={ContactSchema}
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form className="flex flex-col gap-3">
                    <div className="md:flex gap-6">
                      <div className="w-full">
                        <label className="">Name</label>
                        <Field
                          id="name"
                          className="bg-secondary1 w-full focus:outline-neutral-500 rounded-full py-4 px-3"
                          name="name"
                          type="text"
                        />
                        {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                      </div>
                      <div className="w-full">
                        <label className="">Email Address</label>
                        <Field
                          id="email"
                          className="bg-secondary1 w-full focus:outline-neutral-500 rounded-full py-4 px-3"
                          name="email"
                          type="email"
                        />
                        {errors.email && touched.email ? (
                          <div>{errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="md:flex gap-6">
                      <div className="w-full">
                        <label className="">Phone Number</label>
                        <Field
                          id="phone"
                          className="bg-secondary1 w-full focus:outline-neutral-500 rounded-full py-4 px-3"
                          name="phone"
                          type="tel"
                        />
                        {errors.phone && touched.phone ? (
                          <div>{errors.phone}</div>
                        ) : null}
                      </div>
                      <div className="w-full">
                        <label className="">Subject</label>
                        <Field
                          id="text"
                          className="bg-secondary1 w-full rounded-full focus:outline-neutral-500 py-4 px-3"
                          name="subject"
                          type="text"
                        />
                        {errors.subject && touched.subject ? (
                          <div>{errors.subject}</div>
                        ) : null}
                      </div>
                    </div>
                    <label className="">Message</label>
                    <Field
                      id="textarea"
                      className="bg-secondary1 w-full focus:outline-neutral-500 rounded-2xl py-4 px-3"
                      name="message"
                      as="textarea"
                      rows="5"
                    />
                    {errors.message && touched.message ? (
                      <div>{errors.message}</div>
                    ) : null}
                    <button
                      type="submit"
                      className="btn btn--primary btn--small md:w-1/3 lg:w-1/3"
                    >
                      SUBMIT
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="contact-links flex flex-1 flex-col gap-3">
              {ContactLinkData.map((val) => (
                <div className="rounded-3xl w-[80%] mx-auto drop-shadow-sm h-52 bg-neutral-100 px-10 py-8  flex flex-col gap-2 items-center justify-around">
                  {val.icon}
                  <div className="text-center">
                    <span className="font-bold text-neutral-700">
                      {val.title}
                    </span>
                    <a href="mailto:">
                      <address>{val.data}</address>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-secondary2 rounded-full w-[400px] h-[400px] absolute md:top-[10%] md:-right-[49%] lg:top-24 lg:-right-48 -z-10"></div>
        <div className="bg-secondary3 rounded-full w-[400px] h-[400px] top-[68%] -left-[90%] absolute md:top-[63%] md:-left-36 lg:top-[65%] lg:-left-20 -z-10"></div>
        <div className="bg-secondary1 rounded-full w-[400px] h-[400px] absolute md:-top-80 md:-left-44 lg:-top-[24%] lg:-left-20 -z-10"></div>
      </section>
    </>
  );
};

export default ContactForm;