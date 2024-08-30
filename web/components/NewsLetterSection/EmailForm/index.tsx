
import { useState } from "react";
import {
  EmailFormFields,
  ErrorResponseArgs,
  PendingArgs,
  SuccessResponseArgs,
} from "react-mailchimp-subscribe";
import clsx from "clsx";
import locales from "@/lib/locales";

const EmailForm: React.FC<{
  status:
    | ErrorResponseArgs["status"]
    | SuccessResponseArgs["status"]
    | PendingArgs["status"];
  subscribe: (data: EmailFormFields) => void;
  message:
    | ErrorResponseArgs["message"]
    | SuccessResponseArgs["message"]
    | PendingArgs["message"];
  input_placeholder?: string;
  button_label?: string;
  sidebar?:boolean;
}> = ({ status, message, subscribe, input_placeholder, button_label, sidebar}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (email === "") {
      setError(true);
      return;
    }
    subscribe({
      EMAIL: email,
    });
    setEmail("");
  };
  return (
    <div className="mail-msg">
      {status !== "sending" && status !== "success" && (
        <form onSubmit={(e) => handleSubmit(e)} className="grid grid-cols-[3fr_1fr]">
          <input
            type="email"
            className={clsx(sidebar ? "!text-white-color !text-[0.875em] !rounded-[3em] !border-[0.0625em] !border-solid !border-white placeholder:text-white-color " : "input-row max-w-full !w-full !bg-white-color h-[3.5em] !border-r-[0px] !border-[1px] !rounded-l-[0.5em] py-4 px-[1.3125em] text-sm !font-semibold !text-[#111118cc] font-DM placeholder-text-[14px] placeholder-font-semibold placeholder-text-[#111118cc] border-white-color", { error: error },
            "")}
            placeholder={input_placeholder ?? "Email address"}
            value={email}
            name={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={clsx(sidebar ? "bg-white-color hover:bg-dark-blue text-[0.875em] font-medium cursor-pointer text-Cerise-red bg-[url(/send.svg)] bg-no-repeat bg-sendBtn ml-2 pl-[2.5em] pr-4 py-0 rounded-[3em] !border-[1px] border-white-color hover:border-dark-blue" : "bg-dark-pink uppercase text-xs h-[3.5em] xl:h-[4em] rounded-r-[0.5em] text-white-color hover:bg-dark-blue py-4 px-6 em:px-[2.0625em] cursor-pointer font-semibold font-Inter flex flex-col-reverse justify-center")}
            type="submit"
            value={button_label ?? locales.en.SUBSCRIBE}
          />
        </form>
      )}
    </div>
  );
};
export default EmailForm;
