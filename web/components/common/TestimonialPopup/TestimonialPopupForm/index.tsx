import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import axios from "axios";
import clsx from "clsx";
export interface TestimonialPopupFormValues {
  name: "";
  email: "";
}
const TestimonialPopupForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid Email address"),
  });
  const initialValues = {
    name: "",
    email: "",
  };
  const onSubmit = async (
    values: TestimonialPopupFormValues,
    { resetForm }
  ) => {
    try {
      const fetcher = await axios.post(`/api/testimonial-popup`, values);
      const _data = fetcher?.data;
      if (_data && _data.data.isSuccess) {
        setIsSuccess(true);
        resetForm();
      }
    } catch (error) {
      return [""];
    } finally {
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    isInitialValid: false,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-full ">
      <div className={clsx("", isSuccess ? "hidden" : "block")}>
        <div>
          <div className="form-row name mb-[1em] ">
            {/* <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-black-color block">
                Name
              </label> */}
            <div className="form-input relative">
              <input
                type="string"
                id="name"
                name="name"
                placeholder={"Name"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`w-full  py-2 px-4 rounded-lg  border-[1px] ${
                  formik.touched.name && formik.errors.name
                    ? "border-[red]"
                    : "border-[#7D7D7D]"
                }`}
              />
            </div>
          </div>
          <div className="form-row email mb-4">
            {/* <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-black-color block">
               Email
              </label> */}
            <div className="form-input relative">
              <input
                type="string"
                id="email"
                name="email"
                placeholder={"Email"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full py-2 px-4 rounded-lg    border-[1px] ${
                  formik.touched.email && formik.errors.email
                    ? "border-[red]  "
                    : "border-[#7D7D7D]"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("text-center", isSuccess ? "block" : "hidden")}>
        <Image
          src="/coupon-gif.png"
          alt="Facebook"
          height={100}
          width={100}
          className="w-[8em] mx-auto h-auto"
        />
      </div>

      <div className="inline-block  mt-5 w-full">
        {!isSuccess && (
          <button
            type="submit"
            disabled={formik.isSubmitting || !formik.isValid}
            className={clsx(
              "disabled:opacity-70 opacity-100 disabled:cursor-not-allowed w-full",
              formik.isSubmitting
                ? "!hover:bg-dark-pink !hover:text-white-color text-white-color bg-dark-pink  text-base capitalize rounded-lg font-normal"
                : " contact-submit   text-base capitalize rounded-lg font-normal  text-white-color leading-[1.25em]  bg-dark-pink "
            )}
          >
            <div className="flex items-center justify-center">
              <ClipLoader
                color="#222549"
                loading={formik.isSubmitting || formik.isValidating}
                size={18}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="absolute left-3"
              />
              <p className="text-white-color text-sm sm:text-base pb-0">
                Get coupon code
              </p>
            </div>
          </button>
        )}
        {isSuccess && (
          <button className="cursor-default contact-submit text-base capitalize rounded-lg font-normal  text-white-color leading-[1.25em]  bg-dark-blue w-full">
            Thank You
          </button>
        )}
      </div>
    </form>
  );
};

export default TestimonialPopupForm;
