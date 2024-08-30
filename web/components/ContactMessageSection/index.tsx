import { useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { ContactMessageSectionType } from "@/lib/sanity/types/page";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { routes } from "@/lib/routes";
import dynamic from "next/dynamic";
import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
const RichText = dynamic(() => import("../RichText"));
const CustomImage = dynamic(() => import("../CustomImage"));
export interface FormValues {
  companyName: "";
  email: "";
  message: "";
  name: "";
  phone_number: "";
  project_type: "";
}

const ContactMessageSection: React.FC<ContactMessageSectionType> = (block) => {
  const {
    title_subtitle,
    section_description,
    sevicesTitle,
    ServicesButtonArray,
    ContactMessageMainImage,
    sevicesDescription,
    contactForm,
    imageTitleSubtitleArray,
  } = block || {};
  const {
    companyName,
    companyName_placeholder,
    Name,
    name_placeholder,
    email,
    email_placeholder,
    phone_number,
    phone_number_placeholder,
    message,
  } = contactForm || {};
  const [isGivenConsent, setIsGivenConsent] = useState(false);
  const [isConsentTouched, setIsConsentTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("First Name is required"),
    name: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_number: Yup.string()
      .matches(
        /^(\+\d{1,4}[\s-]*)?(\(\d{2,6}\)[\s-]*)?(\d{2,4}[\s-]*)*?\d{3,4}[\s-]*\d{3,4}$/,
        "Invalid phone number"
      )
      .required("Phone Number is required"),
  });
  const initialValues = {
    companyName: "",
    email: "",
    message: "",
    name: "",
    phone_number: "",
    project_type: ServicesButtonArray?.[0] || "",
  };
  const navigate = useRouter();
  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      const _res = await axios.post(`/api/contact-form`, values);
      navigate.push(routes.thank_you());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="contactus-form-section my-20 md:my-32">
      <div className="container">
        <div className="contactus-form-inner bg-dark-blue rounded-lg px-6 sm:px-10 pt-6 sm:pt-10 pb-16 sm:pb-20">
          <div className="mb-10 max-w-full em:max-w-[75%] [&>div>h5]:mb-0 [&>div>h5]:text-white-color [&>div>h5]:text-left [&>div>h5]:font-medium [&>div>h5]:text-[21px] xl:[&>div>h5]:text-2xl [&>p]:text-white-color  [&>p]:opacity-70 [&>p]:text-sm xl:[&>p]:text-base [&>p]:mt-[0.97em]  [&>p]:text-left">
            {title_subtitle?.sub_title && (
              <h6 className="text-[1.56rem]  text-white-color">
                {title_subtitle.sub_title}
              </h6>
            )}
            {section_description && <RichText block={section_description} />}
          </div>
          <form onSubmit={formik.handleSubmit}>
            <input
              value="contact-us-project"
              name="request_type"
              readOnly
              hidden
            />
            <div className="contactus-form-content block lg:flex">
              <div className="contactus-form w-full lg:w-[50%]">
                <div className="contact-form-inner block sm:flex ">
                  <div className="form-left w-full sm:w-1/2">
                    <div className="form-row company-name mb-4">
                      <label className="form-label text-xs xl:text-sm font-normal font-Mont mb-2 text-white-color block">
                        {companyName}
                      </label>
                      <div className="form-input relative">
                        <input
                          type="string"
                          id="companyName"
                          name="companyName"
                          placeholder={companyName_placeholder || ""}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.companyName}
                          className={`w-full sm:w-4/5 py-3 px-4 rounded-lg  pl-[2.75em] border-[1px] ${
                            formik.touched.companyName &&
                            formik.errors.companyName
                              ? "border-[red] "
                              : "border-gray-300"
                          }`}
                        />
                        <div>
                          <Image
                            src="/contact-input-image1.png"
                            alt=""
                            height={10}
                            width={10}
                            className="w-[14px] h-[14px] absolute top-[14px] xl:top-[18px] left-[15px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row name mb-4">
                      <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-2 text-white-color block">
                        {Name}
                      </label>
                      <div className="form-input relative">
                        <input
                          type="string"
                          id="name"
                          name="name"
                          placeholder={name_placeholder || ""}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          className={`w-full sm:w-4/5 py-[0.75em] px-4 rounded-lg  pl-[2.75em]   border-[1px] ${
                            formik.touched.name && formik.errors.name
                              ? "border-[red]"
                              : "border-gray-300"
                          }`}
                        />
                        <div>
                          <Image
                            src="/contact-input-image1.png"
                            alt=""
                            height={10}
                            width={10}
                            className="w-[14px] h-[14px] absolute top-[14px] xl:top-[18px] left-[15px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row email mb-4">
                      <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-2 text-white-color block">
                        {email}
                      </label>
                      <div className="form-input relative">
                        <input
                          type="string"
                          id="email"
                          name="email"
                          placeholder={email_placeholder || ""}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className={`w-full sm:w-4/5 py-3 px-[1em] rounded-lg  pl-[2.75em]  border-[1px] ${
                            formik.touched.email && formik.errors.email
                              ? "border-[red]"
                              : "border-gray-300"
                          }`}
                        />
                        <div>
                          <Image
                            src="/contact-input-image3.png"
                            alt=""
                            height={8}
                            width={17}
                            className="w-[16px] h-[10px] absolute top-[16px] xl:top-[20px] left-[15px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" mb-4">
                      <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-2 text-white-color block">
                        {phone_number}
                      </label>
                      <div className="form-input relative">
                        <input
                          type="string"
                          id="phone_number"
                          name="phone_number"
                          placeholder={phone_number_placeholder || ""}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phone_number}
                          className={`!w-full sm:!w-4/5 py-3 px-4 !rounded-lg  !pl-[2.75em] !bg-white-color  border-[1px] ${
                            formik.touched.phone_number &&
                            formik.errors.phone_number
                              ? "border-[red]"
                              : "border-gray-300"
                          }`}
                        />
                        <div>
                          <Image
                            src="/contact-input-image4.png"
                            alt=""
                            height={13}
                            width={13}
                            className="w-[16px] h-[14px] absolute top-[14px] xl:top-[17px] left-[15px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-right w-full sm:w-1/2">
                    <div className="form-row mb-4">
                      <label className="form-label text-xs xl:text-sm font-normal font-Mont mb-2 text-white-color block">
                        {message}
                      </label>
                      <div className="form-input">
                        <textarea
                          name="message"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.message}
                          className="bg-white-color py-2 px-4 rounded-lg h-full min-h-[9em] lg:min-h-[20em] w-full lg:w-4/5"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-services mt-8">
                  <h6 className="text-white-color font-Mont font-normal text-[1.125em]">
                    {sevicesTitle}
                  </h6>
                  <div className="contact-services-navbar my-4">
                    <ul className="flex items-center flex-wrap sm:flex-nowrap gap-x-[0rem] gap-y-[0.65rem]">
                      {ServicesButtonArray?.map((label, index) => (
                        <li
                          key={index}
                          className="mr-[0.7em] mb-[0.7em] relative"
                        >
                          <input
                            name="project_type"
                            type="radio"
                            id={label!}
                            value={label!}
                            defaultChecked={index == 0}
                            onChange={formik.handleChange}
                            className="absolute invisible left-0 right-0  inline-block peer  cursor-pointer"
                          />
                          {label && (
                            <label
                              htmlFor={label}
                              className={clsx(
                                "peer-checked:bg-Cerise-red text-white-color border-[0.0625em] border-dark-pink rounded-[0.26044rem] text-xs cursor-pointer py-[0.42rem] px-[0.8rem] "
                              )}
                              // className="bg-dark-pink text-white-color border-[0.0625em] border-dark-pink py-[0.25em] px-[0.5em] text-xs cursor-pointer rounded-lg"
                            >
                              {label}
                            </label>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="min-h-[6em] esm:min-h-[4.5em] my-2">
                    <div className="contact-termscondition  flex items-baseline">
                      <input
                        id="consent"
                        name="consent"
                        defaultChecked={isGivenConsent}
                        onChange={(e) => {
                          if (!isConsentTouched) {
                            setIsConsentTouched(true);
                          }
                          setIsGivenConsent(e.target.checked);
                        }}
                        onBlur={() => {
                          if (!isConsentTouched) {
                            setIsConsentTouched(true);
                          }
                        }}
                        type="checkbox"
                        className={clsx(
                          isConsentTouched && !isGivenConsent
                            ? "border-[red]"
                            : "border-[white]",
                          "flex items-center justify-center absolute w-[20px] h-[20px] focus:outline-none z-20  peer mt-0 lg:mt-1 checked:bg-transparent checked:after:opacity-100 after:content-['✓'] after:block after:text-white-color after:opacity-0 after:absolute bg-white bg-contain bg-center bg-no-repeat align-center transition-all border border-solid   float-left  cursor-pointer appearance-none checked:from-gray-900 checked:to-slate-800 rounded-[3px] ease-soft"
                        )}
                      />

                      <label htmlFor="consent" className="cursor-pointer">
                        <div className="[&>p]:font-Mont [&>p]:text-[10.5px] xl:[&>p]:text-xs [&>p]:text-white-color [&>p]:opacity-70 [&>p]:pl-12">
                          {sevicesDescription && (
                            <RichText block={sevicesDescription} />
                          )}
                        </div>
                      </label>
                    </div>
                    {/* {formik.errors.checkbox && (
                      <p className="text-[red] text-xs pb-0">
                        {formik.errors.checkbox}
                      </p>
                    )} */}
                  </div>

                  <div>
                    <div className="flex">
                      <button
                        type="submit"
                        disabled={
                          !isGivenConsent ||
                          formik.isSubmitting ||
                          !formik.isValid
                        }
                        className={clsx(
                          "disabled:opacity-70 opacity-100 disabled:cursor-not-allowed ",
                          formik.isSubmitting
                            ? "!hover:bg-dark-pink !hover:text-white-color text-white-color bg-dark-pink  text-base capitalize rounded-lg font-normal w-[134px] h-[40px] "
                            : "   contact-submit  text-base capitalize rounded-lg font-normal  text-white-color leading-[1.25em]  bg-dark-pink w-[134px] h-[40px]"
                        )}
                      >
                        {formik.isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <ClipLoader
                              color="#222549"
                              loading={loading}
                              size={18}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                              className="absolute left-3"
                            />
                            <p className="text-white-color text-base pb-0">
                              Submit
                            </p>
                          </div>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contactus-personImg  flex-col-reverse em:flex-row-reverse sm:flex-row flex lg:block justify-between relative w-full md:w-[80%] lg:w-[50%] mx-auto mt-12 sm:mt-20 lg:mt-0">
                <div className="contactus-right-img  max-w-full sm:max-w-[9em] mx-auto mt-0 lg:mt-[4em] h-[20em] sm:h-auto object-contain">
                  {ContactMessageMainImage && (
                    <CustomImage block={ContactMessageMainImage} />
                  )}
                </div>
                <div className="boxWrap [&>*:nth-child(2)>div]:ml-[0em] sm:[&>*:nth-child(2)>div]:ml-[1em]  [&>*:nth-child(2)]:top-[40%] lg:[&>*:nth-child(2)]:top-[26%] [&>*:nth-child(2)]:left-[-2%]  sm:[&>*:nth-child(2)]:translate-y-[-50%] [&>*:nth-child(3)>div>img]:max-w-[2em] [&>*:nth-child(3)]:top-[40%]  [&>*:nth-child(3)]:bottom-[0%] lg:[&>*:nth-child(3)]:bottom-[47%]  [&>*:nth-child(4)>div]:mr-[1.5em]  [&>*:nth-child(4)]:top-[0%]  [&>*:nth-child(4)]:right-[0%] [&>*:nth-child(4)]:left-[65%] [&>*:nth-child(4)]:flex-row-reverse [&>*:nth-child(5)>div]:mr-[1.5em]  [&>*:nth-child(5)]:top-[0%]  [&>*:nth-child(5)]:bottom-[0%] lg:[&>*:nth-child(5)]:bottom-[30%] [&>*:nth-child(5)]:right-[0%] [&>*:nth-child(5)]:left-[65%] [&>*:nth-child(5)]:flex-row-reverse ">
                  {imageTitleSubtitleArray?.map((item, index) => {
                    const { icon_image, icon_title, icon_subtitle } =
                      item || {};
                    return (
                      <div
                        className={`box mb-8 sm:my-0 box-${index} flex top-0 left-0 text-left bg-[5.5em] static sm:absolute max-w-full sm:max-w-[35%] w-full items-center`}
                        key={index}
                      >
                        <div className="box-text  text-left w-full [&>p]:text-[13.7812px] lg:[&>p]:text-xs xl:[&>p]:text-sm [&>p]:text-white-color [&>p]:p-0 [&>p]:font-normal">
                          <h6 className="text-[13.7512px] lg:text-xs xl:text-sm text-white-color p-0 font-bold ">
                            {icon_title}
                          </h6>
                          {icon_subtitle && <RichText block={icon_subtitle} />}
                        </div>
                        <div className="icon max-w-[3em] w-full hidden sm:block">
                          {icon_image && <CustomImage block={icon_image} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMessageSection;
