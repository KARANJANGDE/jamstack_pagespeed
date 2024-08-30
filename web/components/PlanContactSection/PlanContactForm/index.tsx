import clsx from "clsx";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ContactFormSectionType } from "@/lib/sanity/types/page";

export interface ContactFormSection {
  setCurStep: (curStep: number) => void;
  block?:
    | Pick<
        ContactFormSectionType,
        | "City"
        | "CompanyName"
        | "Country"
        | "EmailAddress"
        | "FirstName"
        | "LastName"
        | "PhoneNumber"
        | "State"
        | "StreetAddress"
        | "Zipcode"
      >
    | ContactFormSectionType;
}
const PlanContactForm: React.FC<ContactFormSection> = ({
  block,
  setCurStep,
}) => {
  const {
    EmailAddress,
    CompanyName,
    FirstName,
    LastName,
    PhoneNumber,
    StreetAddress,
    City,
    State,
    Country,
    Zipcode,
  } = block || {};
  const validationSchema = Yup.object().shape({
    CompanyName: Yup.string().required("CompanyName is required"),
    EmailAddress: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    FirstName: Yup.string().required("FirstName is required"),
    LastName: Yup.string().required("LastName is required"),
    PhoneNumber: Yup.number().required("PhoneNumber is required"),
    StreetAddress: Yup.string().required("StreetAddress is required"),
    City: Yup.string().required("City is required"),
    State: Yup.string().required("State is required"),
    Country: Yup.string().required("Country is required"),
    Zipcode: Yup.number().required("Zipcode is required"),
  });

  const initialValues = {
    EmailAddress: "",
    CompanyName: "",
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    StreetAddress: "",
    City: "",
    State: "",
    Country: "",
    Zipcode: "",
  };
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Simulate form submission
      setCurStep(1);
      setTimeout(() => {
        setSubmitted(true); // Proceed to the next step if the form is valid
      }, 1000); // Add any necessary async operations here
    },
  });
  const submitHandler = () => {
    if (!formik.errors) {
    }
  };

  const formValues = formik.values;

  return (
    <div className="w-full emd:w-3/5 py-6 em:py-10 px-4 em:px-8 sm:px-[3.125rem]">
      <div className="">
        <h4 className="font-semibold text-black text-[1.375rem] em:text-[1.625rem]">
          Sign up details
        </h4>
        <h6 className="text-black text-[14.975px] opacity-50 pt-3">
          This will be our login details to your account
        </h6>
        <form
          className="mt-6 w-full max-w-full md:mt-[2.563rem] emd:max-w-[44.5625em]"
          onSubmit={formik.handleSubmit}
          onClick={submitHandler}
        >
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-[2rem] emd:gap-[1rem] lg:gap-[2.313rem] mb-8">
            <div>
              <label className="mb-2 block text-base font-semibold text-black lg:text-lg">
                Email Address*
              </label>
              <input
                type="string"
                id="email"
                placeholder="Enter a valid email"
                className={`block w-full rounded-lg border p-2 text-black h-[3em] px-4  shadow-input-box text-base ${
                  formik.errors.EmailAddress && formik.touched.EmailAddress
                    ? "border-[red]"
                    : "border-whisper-color"
                }`}
                {...formik.getFieldProps("EmailAddress")}
              />
            </div>
            <div>
              <label className="mb-2 block text-base font-semibold text-black lg:text-lg ">
                Company Name*
              </label>
              <input
                type="string"
                id="ComapnyName"
                placeholder="ABC@example.com"
                className={`block w-full rounded-lg border p-2 text-black h-[3em] px-4  shadow-input-box text-base ${
                  formik.errors.CompanyName && formik.touched.CompanyName
                    ? "border-[red]"
                    : "border-whisper-color"
                }`}
                {...formik.getFieldProps("CompanyName")}
              />
            </div>
          </div>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-8 emd:gap-4 lg:gap-[2.313rem] mb-8">
            <div className={clsx("planform-box", {})}>
              <label className="mb-2 block text-base font-semibold text-black lg:text-lg">
                First Name*
              </label>
              <input
                type="string"
                id="first_name"
                placeholder="John"
                className={`block w-full rounded-lg border p-2 text-black h-[3em] px-4 shadow-input-box text-base ${
                  formik.errors.FirstName && formik.touched.FirstName
                    ? "border-[red]"
                    : "border-whisper-color"
                }`}
                {...formik.getFieldProps("FirstName")}
              />
            </div>
            <div className={clsx("planform-box")}>
              <label className="mb-2 block text-base font-semibold text-black lg:text-lg">
                Last Name
              </label>
              <input
                type="string"
                id="last_name"
                placeholder="Doe"
                className={`block w-full rounded-lg border p-2 text-black h-[3em] px-4 shadow-input-box text-base ${
                  formik.errors.LastName && formik.touched.LastName
                    ? "border-[red]"
                    : "border-whisper-color"
                }`}
                {...formik.getFieldProps("LastName")}
              />
            </div>
          </div>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-8 emd:gap-4 lg:gap-[2.313rem] mb-8">
            <div className={clsx("planform-box", {})}>
              <label className="mb-2 block text-base font-semibold text-black lg:text-lg">
                Phone Number*
              </label>
              <input
                type="string"
                id="phone_number"
                placeholder="(123) 125-2650"
                className={`block w-full rounded-lg border p-2 text-black h-[3em] px-4  shadow-input-box text-base ${
                  formik.errors.PhoneNumber && formik.touched.PhoneNumber
                    ? "border-[red]"
                    : "border-whisper-color"
                }`}
                {...formik.getFieldProps("PhoneNumber")}
              />
            </div>
            <div className={clsx("planform-box", {})}>
              <label className="mb-2 block text-base font-semibold text-black lg:text-lg">
                Street Address*
              </label>
              <input
                type="string"
                id="street_address"
                placeholder="99, Wolf Street Road"
                className={`block w-full rounded-lg border p-2 text-black h-[3em] px-4 shadow-input-box text-base ${
                  formik.errors.StreetAddress && formik.touched.StreetAddress
                    ? "border-[red]"
                    : "border-whisper-color"
                }`}
                {...formik.getFieldProps("StreetAddress")}
              />
            </div>
          </div>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-8 emd:gap-4 lg:gap-[2.313rem] mb-8">
            <div className={clsx("planform-box", {})}>
              <label className="mb-2 block text-base font-semibold text-black lg:text-lg">
                City*
              </label>
              <input
                type="string"
                id="city"
                placeholder="Chicago"
                className={`block w-full rounded-lg border p-2 text-black h-[3em] px-4  shadow-input-box text-base ${
                  formik.errors.City && formik.touched.City
                    ? "border-[red]"
                    : "border-whisper-color"
                }`}
                {...formik.getFieldProps("City")}
              />
            </div>
            <div className={clsx("planform-box", {})}>
              <label className="mb-2 block text-base font-semibold text-black lg:text-lg">
                State*
              </label>
              <input
                type="string"
                id="state"
                placeholder="New York"
                className={`block w-full rounded-lg border p-2 text-black h-[3em] px-4  shadow-input-box text-base ${
                  formik.errors.State && formik.touched.State
                    ? "border-[red]"
                    : "border-whisper-color"
                }`}
                {...formik.getFieldProps("State")}
              />
            </div>
          </div>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] gap-8 emd:gap-4 lg:gap-[2.313rem] mb-8">
            <div className={clsx("planform-box", {})}>
              <label className="mb-2 block text-base font-semibold text-black lg:text-lg">
                Country*
              </label>
              <input
                type="string"
                id="country"
                placeholder="India"
                className={`block w-full rounded-lg border p-2 text-black h-[3em] px-4 shadow-input-box text-base ${
                  formik.errors.Country && formik.touched.Country
                    ? "border-[red]"
                    : "border-whisper-color"
                }`}
                {...formik.getFieldProps("Country")}
              />
            </div>
            <div className={clsx("planform-box", {})}>
              <label className="mb-2 block text-base font-semibold text-black lg:text-lg">
                Zipcode*
              </label>
              <input
                type="string"
                id="zipcode"
                placeholder="383001"
                className={`block w-full rounded-lg border p-2 text-black h-[3em] px-4  shadow-input-box text-base ${
                  formik.errors.Zipcode && formik.touched.Zipcode
                    ? "border-[red]"
                    : "border-whisper-color"
                }`}
                {...formik.getFieldProps("Zipcode")}
              />
            </div>
          </div>
          <div className="plancontact-submit-btn">
            <button
              className="px-8 py-[0.875em] rounded-lg text-sm bg-dark-pink text-white-color hover:bg-dark-blue"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanContactForm;
