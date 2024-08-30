import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import EmailForm from "../../NewsLetterSection/EmailForm";
import TitleDescription from "../../ImageSideBySideTitleDescriptionArraySection/TitleDescription";
import { JoinOurNewsLetterType } from "@/lib/sanity/types/page";
import { MAILCHIMP_ENDPOINT } from "@/lib/constants";

const SidebarJoinOurNewsLetter: React.FC<{ block?: JoinOurNewsLetterType }> = ({
  block,
}) => {
  const { input_placeholder, send_button, title_description } = block || {};

  const PostUrl = MAILCHIMP_ENDPOINT ?? "";

  return (
    <section className="sidebarNewsletter bg-newsletter-gradient p-[1.875em] rounded-[0.625em]">
      <div className="[&>div>h6]:text-white-color [&>div>h6]:font-DM [&>div>h6]:text-[22px] [&>div>p]:text-white-color [&>div>p]:font-normal [&>div>p]:mb-2 [&>div>p]:text-[13px] [&>div>h6]:tracking-[-0.66px] [&>div>p]:font-Inter [&>div>p]:opacity-100 [&>div>p]:leading-[153%] ">
        {title_description && <TitleDescription block={title_description} />}
      </div>

      <div className="newsLetterForm  [&>div>form]:grid-cols-[2fr_1fr] w-full sm:w-[35em] lg:w-full">
        <MailchimpSubscribe
          url={String(PostUrl)}
          render={({ subscribe, status, message }): any => {
            return (
              <>
                {!(status == "success") && (
                  <EmailForm
                    status={status}
                    message={message}
                    subscribe={subscribe}
                    input_placeholder={input_placeholder || ""}
                    button_label={send_button?.label || ""}
                    sidebar
                  />
                )}
                <div className="mail-msg-text ">
                  {status === "sending" && <span className="waiting" />}
                  {status === "error" && (
                    <span
                      className="error"
                      dangerouslySetInnerHTML={{
                        __html: String(message),
                      }}
                    />
                  )}
                  {status === "success" && (
                    <span
                      className="success"
                      dangerouslySetInnerHTML={{
                        __html: String(message),
                      }}
                    />
                  )}
                </div>
              </>
            );
          }}
        />
      </div>
    </section>
  );
};

export default SidebarJoinOurNewsLetter;
