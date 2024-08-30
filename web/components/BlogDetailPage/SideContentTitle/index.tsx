import { slugify } from "@/lib/utils/slugify";
import { Fragment, useState } from "react";

const SideContentTitle: React.FC<{
  contant_card?: string | null;
  sideTitle?: string[];
}> = ({ sideTitle, contant_card }) => {
  const [activeItem, setActiveItem] = useState<string>();
  const scrollInto = (title: string) => {
    if (typeof window !== "undefined") {
      const id = slugify(title);
      const headerHeight = 0;
      var element = document.getElementById(id);
      var elementPosition = element?.getBoundingClientRect().top ?? 0;
      var offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Set the active item
      setActiveItem(title);
    }
  };
  return (
    <Fragment>
      <section className=" bg-dark-pink p-6 rounded-[0.625em]">
        <div>
          <h5 className="font-semibold text-white-color text-2xl text-center font-DM">
            {contant_card}
          </h5>
          <ul className=" m-0 overflow-auto pt-2 pl-6 pr-3.5 relative  block list-disc marker:text-white-color h-full max-h-[22em] contentList ">
            {sideTitle?.map((item, index) => {
              return (
                item && (
                  <li
                    onClick={() => {
                      scrollInto(item);
                    }}
                    className="pt-2.5 pb-2"
                    key={index}
                  >
                    <span className={`text-base font-medium text-white-color hover:text-dark-blue align-text-top leading-[24px] font-DM cursor-pointer ${activeItem === item ? '!text-dark-blue' : ''}`}>
                      {item}
                    </span>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default SideContentTitle;
