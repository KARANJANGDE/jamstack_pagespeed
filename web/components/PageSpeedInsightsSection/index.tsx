import React, { useState } from "react";
import PageSpeedDesktop from "./DesktopView";
import PageSpeedMobile from "./MobileView";
import Button from "../Button";

export default function PageSpeed() {
  const [url, setUrl] = useState(""); // State to hold the URL
  const [view, setView] = useState(true); // State to hold the URL

  const handleUrlChange = (newUrl) => {
    setUrl(newUrl);
  };

  const viewhandle = () => {
    if (view === true) {
      setView(false);
    } else {
      setView(true);
    }
  };

  return (
    <div>
      {/* <PageSpeedInput onUrlChange={handleUrlChange} /> */}
      <div className="container py-10">
        <div className="flex justify-center">
          <Button
            onClick={viewhandle}
            className="mx-3 text-dark-pink bg-white-color capitalize shadow-page-speed-box rounded-lg text-[2em]"
          >
            mobile
          </Button>
          <Button
            onClick={viewhandle}
            className="mx-3 !text-[#00000080] !bg-white-color capitalize  rounded-lg text-[2em]"
          >
            desktop
          </Button>
        </div>
      </div>

      {view === true ? (
        <PageSpeedDesktop url={url} />
      ) : (
        <PageSpeedMobile url={url} />
      )}
    </div>
  );
}
