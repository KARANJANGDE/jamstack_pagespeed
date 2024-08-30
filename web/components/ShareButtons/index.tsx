
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { Image } from "../Image";
import locales from "@/lib/locales";

export type ShareButtonsProps = {
  title?: string;
  url: string;
  twitterHandle?: string;
  tags?: string[];
  section_title?: string;
};
const ShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  url,
  twitterHandle,
  tags,
  section_title,
}) => {
  return (
    <div className="mt-10 mb-10">
      <div>
        <p className="text-center font-Inter text-[14px] font-medium text-dark-blue opacity-50">{section_title ?? locales.en.SHARE}</p>
      </div>
      <div>
        <ul className="flex max-w-[70%] mx-auto justify-center items-center">
          <li className="mx-4">
            <FacebookShareButton url={url}>
              <Image src="/facebook.svg" alt="Facebook" height={10} width={10} />
            </FacebookShareButton>
          </li>
          <li className="mx-[1em]">
            <TwitterShareButton
              url={url}
              title={title}
              via={twitterHandle}
              hashtags={tags}
            >
              <Image src="/twitter.svg" alt="Twitter" height={10} width={10} />
            </TwitterShareButton>
          </li>
          <li className="mx-[1em]">
            <LinkedinShareButton url={url}>
              <Image src="/linkdin.svg" alt="Linkdin" height={10} width={10}/>
            </LinkedinShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ShareButtons;
