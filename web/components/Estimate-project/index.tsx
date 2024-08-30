import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { DeveloperProfileType } from "@/lib/sanity/types/page";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { routes } from "@/lib/routes";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const Button = dynamic(() => import("../Button"));
const CustomImage = dynamic(() => import("../CustomImage"));
export interface FormValues {
  name: "";
  email: "";
  project_type: "";
  message: "";
}
const EstimateProjectFormSection: React.FC<DeveloperProfileType> = (props) => {
  const {
    content,
    title,
    name_placeholder,
    email_placeholder,
    select_type_of_project,
    select_type_button,
    how_can_we_help_placeholder,
    hire_jamstack_development_button,
    section_theme,
    image,
  } = props || {};
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid Email address"),
  });
  const initialValues = {
    name: "",
    email: "",
    project_type: select_type_button?.[0] || "",
    message: "",
  };

  const navigate = useRouter();
  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      const fetcher = await axios.post(`/api/estimate-project`, values);
      const _data = fetcher?.data;
      navigate.push(routes.thank_you());
    } catch (error) {
      return [values];
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    isInitialValid: false,
  });

  return (
    <div
      className={clsx(
        "pt-24 pb-8 em:pt-32 em:pb-24",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white-shad-color mx-0 mt-8 xl:mt-[4.5em] sm:px-10 sm:py-20 px-6 esm:px-8 py-12">
          <div className="w-full lg:w-6/12">
            <h6 className="font-bold leading-[1.25em] tracking-[0.012em] capitalize mb-4 text-lg">
              {title}
            </h6>
            <div className="[&>h4]:font-bold [&>h4]:leading-[1.25em] [&>h4]:tracking-[0.012em] [&>h4]:capitalize [&>h4]:mb-4 text-[1.875em] [&>h4>strong]:text-Cerise-red">
              {content && <RichText block={content} />}
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="estimate-form">
                <input
                  placeholder={name_placeholder || ""}
                  type="string"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  className={`block w-full mb-[1.3em] rounded-lg border  p-2 text-black h-12 px-4  text-base ${
                    formik.errors.name && formik.touched.name
                      ? "border-[red]"
                      : "border-white-color"
                  }`}
                />
                <input
                  placeholder={email_placeholder || ""}
                  type="string"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`block w-full rounded-lg border  p-2 text-black h-12 px-4  text-base ${
                    formik.errors.email && formik.touched.email
                      ? "border-[red]"
                      : "border-white-color"
                  }`}
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center mt-0 mb-0 mx-0 py-6 xl:py-8">
                <div className="text-base leading-[1.25em] font-light">
                  {select_type_of_project}
                </div>
                <div className="lg:ml-4 lg:mr-0 my-4">
                  <ul className="flex flex-wrap [&>*:nth-child(1)]:ml-0">
                    {select_type_button?.map((label, index) => (
                      <li
                        key={index}
                        className="relative cursor-pointer m-2 lg:mx-2 my-2"
                      >
                        <input
                          name="project_type"
                          type="radio"
                          id={label!}
                          value={label!}
                          defaultChecked={index == 0}
                          className="absolute invisible cursor-pointer inline-block peer  my-0 inset-x-0"
                          onChange={formik.handleChange}
                        />
                        {label && (
                          <label
                            htmlFor={label}
                            className={clsx(
                              "peer-checked:bg-Cerise-red peer-checked:px-[0.5em] peer-checked:py-[0.25em]  peer-checked:text-white-color text-sm cursor-pointer text-[0.875em] font-normal leading-[1.25em] rounded-[0.25em] px-2"
                            )}
                          >
                            {label}
                          </label>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="project-textarea">
                <textarea
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  placeholder={how_can_we_help_placeholder || ""}
                  className="bg-white-color text-base font-light leading-[1.5em] rounded-[0.625em]"
                />
              </div>
              <div>
                <div className="block mt-7 flex mb-0 mx-0">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting || !formik.isValid}
                    className={clsx(
                      "disabled:opacity-70 opacity-100 disabled:cursor-not-allowed ",
                      formik.isSubmitting
                        ? "!hover:bg-dark-pink !hover:text-white-color text-white-color bg-dark-pink  text-sm esm:text-base xl:text-[17px] capitalize  font-semibold w-[250px] xl:w-[275px] h-[45px] em:h-[50px] md:h-[55px] xl:h-[60px] rounded-[60px]"
                        : " rounded-[56px]  contact-submit   text-sm esm:ext-base xl:text-[17px] capitalize font-semibold  text-white-color leading-[1.25em]  bg-dark-pink w-[250px] xl:w-[275px] h-[45px] em:h-[50px] md:h-[55px] xl:h-[60px]"
                    )}
                  >
                    <div className="flex items-center justify-center">
                      <ClipLoader
                        color="#222549"
                        loading={loading}
                        size={18}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className="absolute left-2"
                      />
                      <p className="text-white-color  text-sm esm:text-base xl:text-[17px]  capitalize pb-0 font-semibold">
                        {hire_jamstack_development_button?.label}
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="estimate-right mx-auto mb-12 sm:mb-14 md:mb-16 lg:mb-0 max-w-[27.5rem] w-full">
            {image && <CustomImage block={image} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EstimateProjectFormSection;
